import { ArrowUp } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SHOW_AFTER_PX = 400

export function BackToTop() {
  const [visible, setVisible] = useState(false)

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
      type="button"
      variant="secondary"
      size="icon"
      aria-label="العودة إلى الأعلى"
      onClick={scrollToTop}
      className={cn(
        'border-border bg-background/90 text-foreground shadow-lg backdrop-blur-sm',
        'fixed end-4 bottom-4 z-50 size-11 rounded-full md:end-6 md:bottom-6',
        'transition-opacity duration-200',
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUp className="size-5" aria-hidden />
    </Button>
  )
}
