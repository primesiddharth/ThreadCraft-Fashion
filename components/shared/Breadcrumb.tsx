import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item.href ? (
            <Link
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          )}
        </span>
      ))}
    </nav>
  );
}
