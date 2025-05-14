'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300';
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Ora
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/journal" 
              className={`${isActive('/journal')} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Journal
            </Link>
            <Link 
              href="/lectio" 
              className={`${isActive('/lectio')} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Lectio
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about')} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 