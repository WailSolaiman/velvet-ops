import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SHOW_AFTER_PX = 400

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  /** aria-hidden on a focused button triggers a browser warning; blur before we hide from AT. */
  useLayoutEffect(() => {
    if (!visible && buttonRef.current && document.activeElement === buttonRef.current) {
      buttonRef.current.blur()
    }
  }, [visible])

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }, [])

  return (
    <Button
      ref={buttonRef}
      type="button"
      variant="secondary"
      size="icon"
      aria-label="العودة إلى الأعلى"
      onClick={scrollToTop}
      className={cn(
        'border-border bg-background/90 text-foreground shadow-lg backdrop-blur-sm',
        'fixed end-4 bottom-4 z-50 size-11 rounded-full md:end-6 md:bottom-6',
        'transition-[opacity,visibility] duration-200',
        visible
          ? 'pointer-events-auto visible opacity-100'
          : 'pointer-events-none invisible opacity-0',
      )}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp className="size-5" aria-hidden />
    </Button>
  )
}
