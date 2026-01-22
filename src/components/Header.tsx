/// <reference types="react" />
/// <reference types="react-dom" />
import { useState, useEffect } from 'react';
import type React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { NeoButton } from './NeoButton';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon } from './GithubIcon';
import { layoutContent } from '@/content/layout';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const { navigation, footer } = layoutContent;

  // Update current path on mount and when route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Normalize path by removing trailing slash (except for root)
      const path = window.location.pathname;
      const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
      setCurrentPath(normalizedPath);
    }
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-background fixed top-0 right-0 left-0 z-50 border-b-4 border-black dark:border-white">
        <div className="container mx-auto flex h-20 items-center justify-between">
          {/* Brand/Logo */}
          <a href="/" className="group">
            <div className="font-display group-hover:text-neon-green cursor-pointer text-lg font-bold tracking-tighter transition-colors sm:text-xl md:text-2xl">
              {navigation.brand.text}
              <span className="text-neon-green">{navigation.brand.highlight}</span>
              {navigation.brand.suffix}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.items.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={cn(
                  'relative px-3 py-2 font-mono text-sm font-bold transition-all md:text-xl',
                  'decoration-neon-green decoration-4 underline-offset-4 hover:underline',
                  currentPath === item.path &&
                    'text-neon-green decoration-neon-green dark:text-neon-green border-2 border-black bg-black underline shadow-[2px_2px_0px_0px_rgba(0,255,65,1)] dark:border-white dark:bg-white'
                )}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <a
              href={footer.socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialLinks[0].label}
              className="inline-block"
            >
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-black bg-white p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-white dark:bg-black dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                <GithubIcon className="h-full w-full text-black dark:text-white" />
              </div>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="active:bg-neon-green ml-2 border-2 border-black p-2 transition-colors dark:border-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="bg-background fixed inset-0 z-40 overflow-y-auto px-4 pt-24 md:hidden"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            // Close menu when clicking on background
            if (e.target === e.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
          <nav className="flex flex-col gap-6 pb-8">
            {navigation.items.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={cn(
                  'font-display hover:text-neon-green cursor-pointer border-b-2 border-black/10 pb-4 text-4xl font-bold transition-colors dark:border-white/10',
                  currentPath === item.path && 'text-neon-green border-neon-green'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {footer.socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <NeoButton variant="outline" className="w-full">
                    {social.label}
                  </NeoButton>
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
