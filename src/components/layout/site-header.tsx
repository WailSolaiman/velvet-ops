import { shellNavItems } from '@/lib/site-nav'
import { cn } from '@/lib/utils'

import { ThemeToggle } from './theme-toggle'

type SiteHeaderProps = {
  className?: string
}

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        'bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md',
        className,
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="text-foreground text-sm font-light tracking-tight"
        >
          فيلفت أوبس
        </a>
        <nav
          className="flex flex-1 items-center justify-center gap-1 sm:gap-2"
          aria-label="أقسام الصفحة"
        >
          {shellNavItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a href="#cta">
            <span className="text-foreground hover:bg-muted inline-flex h-8 items-center rounded-lg px-3 text-xs font-medium transition-colors">
              تواصل
            </span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
