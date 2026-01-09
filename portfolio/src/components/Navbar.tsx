'use client';

import Link from 'next/link';
import { Search, Moon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              David Exiga
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link href="/posts" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Posts
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Moon size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}