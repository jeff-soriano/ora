'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'border-[var(--color-accent-gold)]' : 'text-[var(--color-text)] dark:text-[var(--color-text-dark)] border-transparent';
  };

  const navLinkClass = 'text-[var(--color-text)] dark:text-[var(--color-text-dark)] border-b-2 hover:text-[var(--color-accent-gold)] hover:border-[var(--color-accent-gold)] transition-all duration-300 py-1';

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-background)] dark:bg-[var(--color-background-dark)] border-b border-[var(--color-accent-gold)] border-opacity-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="font-[var(--font-primary)] text-2xl font-semibold text-[var(--color-text)] dark:text-[var(--color-text-dark)] hover-gentle-glow"
          >
            Ora
          </Link>
          
          <div className="flex space-x-8 font-[var(--font-secondary)]">
            <Link 
              href="/journal" 
              className={`${navLinkClass} ${isActive('/journal')}`}
            >
              Journal
            </Link>
            <Link 
              href="/lectio" 
              className={`${navLinkClass} ${isActive('/lectio')}`}
            >
              Lectio
            </Link>
            <Link 
              href="/about" 
              className={`${navLinkClass} ${isActive('/about')}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 