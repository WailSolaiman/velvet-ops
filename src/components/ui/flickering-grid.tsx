/* eslint-disable react-refresh/only-export-components -- canvas helpers + hook co-located with grid */
import * as Color from 'color-bits'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FC,
  type HTMLAttributes,
} from 'react'

import { cn } from '@/lib/utils'

export function getRGBA(
  cssColor: CSSProperties['color'],
  fallback = 'rgba(180, 180, 180)',
): string {
  if (typeof window === 'undefined') {
    return fallback
  }
  if (!cssColor) {
    return fallback
  }

  try {
    if (typeof cssColor === 'string' && cssColor.startsWith('var(')) {
      const element = document.createElement('div')
      element.style.color = cssColor
      document.body.appendChild(element)
      const computedColor = window.getComputedStyle(element).color
      document.body.removeChild(element)
      return Color.formatRGBA(Color.parse(computedColor))
    }

    return Color.formatRGBA(Color.parse(String(cssColor)))
  } catch {
    return fallback
  }
}

export function colorWithOpacity(color: string, opacity: number): string {
  if (!color.startsWith('rgb')) {
    return color
  }
  return Color.formatRGBA(Color.alpha(Color.parse(color), opacity))
}

interface FlickeringGridProps extends HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  className?: string
  maxOpacity?: number
  text?: string
  textColor?: string
  fontSize?: number
  fontWeight?: number | string
}

export const FlickeringGrid: FC<FlickeringGridProps> = ({
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.2,
  color = '#B4B4B4',
  width,
  height,
  className,
  maxOpacity = 0.15,
  text = '',
  fontSize = 140,
  fontWeight = 600,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInViewRef = useRef(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const memoizedColor = useMemo(() => getRGBA(color), [color])

  /** Built once per resize — avoids getImageData per cell every frame (was extremely expensive). */
  const buildTextMaskFlags = useCallback(
    (
      canvasWidth: number,
      canvasHeight: number,
      cols: number,
      rows: number,
      dpr: number,
    ): Uint8Array => {
      const flags = new Uint8Array(cols * rows)
      if (!text || !canvasWidth || !canvasHeight) {
        return flags
      }

      const maskCanvas = document.createElement('canvas')
      maskCanvas.width = canvasWidth
      maskCanvas.height = canvasHeight
      const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true })
      if (!maskCtx) {
        return flags
      }

      maskCtx.save()
      maskCtx.scale(dpr, dpr)
      maskCtx.fillStyle = 'white'
      maskCtx.font = `${fontWeight} ${fontSize}px "Tajawal", "Segoe UI", Tahoma, sans-serif`
      maskCtx.textAlign = 'center'
      maskCtx.textBaseline = 'middle'
      maskCtx.fillText(text, canvasWidth / (2 * dpr), canvasHeight / (2 * dpr))
      maskCtx.restore()

      const { data, width: imgW } = maskCtx.getImageData(0, 0, canvasWidth, canvasHeight)
      const squareWidth = squareSize * dpr
      const squareHeight = squareSize * dpr
      const step = squareSize + gridGap

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = Math.min(imgW - 1, Math.floor(i * step * dpr + squareWidth / 2))
          const y = Math.min(
            canvasHeight - 1,
            Math.floor(j * step * dpr + squareHeight / 2),
          )
          const p = (y * imgW + x) * 4
          if (data[p]! > 0 || data[p + 3]! > 0) {
            flags[i * rows + j] = 1
          }
        }
      }

      return flags
    },
    [text, fontSize, fontWeight, squareSize, gridGap],
  )

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      canvasWidth: number,
      canvasHeight: number,
      cols: number,
      rows: number,
      squares: Float32Array,
      dpr: number,
      cellHasText: Uint8Array,
    ) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      const squareWidth = squareSize * dpr
      const squareHeight = squareSize * dpr

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * (squareSize + gridGap) * dpr
          const y = j * (squareSize + gridGap) * dpr
          const idx = i * rows + j
          const hasText = cellHasText[idx] === 1
          const opacity = squares[idx]
          const finalOpacity = hasText ? Math.min(1, opacity * 3 + 0.4) : opacity

          ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity)
          ctx.fillRect(x, y, squareWidth, squareHeight)
        }
      }
    },
    [memoizedColor, squareSize, gridGap],
  )

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const cols = Math.ceil(w / (squareSize + gridGap))
      const rows = Math.ceil(h / (squareSize + gridGap))

      const squares = new Float32Array(cols * rows)
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity
      }

      const cellHasText = buildTextMaskFlags(canvas.width, canvas.height, cols, rows, dpr)

      return { cols, rows, squares, dpr, cellHasText }
    },
    [squareSize, gridGap, maxOpacity, buildTextMaskFlags],
  )

  const updateSquares = useCallback(
    (squares: Float32Array, deltaTime: number) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
          squares[i] = Math.random() * maxOpacity
        }
      }
    },
    [flickerChance, maxOpacity],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    let animationFrameId = 0
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const newWidth = width ?? container.clientWidth
      const newHeight = height ?? container.clientHeight
      setCanvasSize({ width: newWidth, height: newHeight })
      gridParams = setupCanvas(canvas, newWidth, newHeight)
    }

    updateCanvasSize()

    let lastTime = 0
    let started = false
    const animate = (time: number) => {
      if (!isInViewRef.current) {
        started = false
        return
      }

      const deltaTime = started ? (time - lastTime) / 1000 : 0
      started = true
      lastTime = time

      updateSquares(gridParams.squares, deltaTime)
      drawGrid(
        ctx,
        canvas.width,
        canvas.height,
        gridParams.cols,
        gridParams.rows,
        gridParams.squares,
        gridParams.dpr,
        gridParams.cellHasText,
      )
      animationFrameId = requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })

    resizeObserver.observe(container)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting
        isInViewRef.current = next
        if (next) {
          cancelAnimationFrame(animationFrameId)
          lastTime = 0
          started = false
          animationFrameId = requestAnimationFrame(animate)
        } else {
          cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0, rootMargin: '120px' },
    )

    intersectionObserver.observe(canvas)

    const syncInViewAndMaybeStart = () => {
      const rect = canvas.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const vw = window.innerWidth || document.documentElement.clientWidth || 0
      const visible =
        rect.bottom > 0 && rect.top < vh && rect.right > 0 && rect.left < vw
      isInViewRef.current = visible
      if (visible && !document.hidden) {
        cancelAnimationFrame(animationFrameId)
        lastTime = 0
        started = false
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    syncInViewAndMaybeStart()

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
        return
      }
      if (isInViewRef.current) {
        cancelAnimationFrame(animationFrameId)
        lastTime = 0
        started = false
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [setupCanvas, updateSquares, drawGrid, width, height])

  return (
    <div ref={containerRef} className={cn('h-full w-full', className)} {...props}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }}
      />
    </div>
  )
}

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function checkQuery() {
      const result = window.matchMedia(query)
      setValue(result.matches)
    }

    checkQuery()

    window.addEventListener('resize', checkQuery)

    const mediaQuery = window.matchMedia(query)
    mediaQuery.addEventListener('change', checkQuery)

    return () => {
      window.removeEventListener('resize', checkQuery)
      mediaQuery.removeEventListener('change', checkQuery)
    }
  }, [query])

  return value
}
