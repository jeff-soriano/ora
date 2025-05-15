'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'border-black' : 'border-transparent';
  };

  const navLinkClass = 'border-b-2 hover:border-black transition-all duration-300 py-1';

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-opacity-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-semibold"
          >
            Ora
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/scripture" 
              className={`${navLinkClass} ${isActive('/scripture')}`}
            >
              Scripture
            </Link>
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
          </div>
        </div>
      </div>
    </nav>
  );
} 