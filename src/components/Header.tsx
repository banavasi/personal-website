import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github } from "lucide-react";
import { NeoButton } from "./NeoButton";
import { layoutContent } from "@/content/layout";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const { navigation, footer } = layoutContent;

  // Update current path on mount and when route changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Normalize path by removing trailing slash (except for root)
      const path = window.location.pathname;
      const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
      setCurrentPath(normalizedPath);
    }
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black dark:border-white bg-background">
        <div className="container mx-auto h-20 flex items-center justify-between">
          {/* Brand/Logo */}
          <a href="/" className="group">
            <div className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tighter cursor-pointer transition-colors group-hover:text-neon-green">
              {navigation.brand.text}
              <span className="text-neon-green">
                {navigation.brand.highlight}
              </span>
              {navigation.brand.suffix}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.items.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={cn(
                  "font-mono font-bold text-sm md:text-xl hover:underline decoration-4 decoration-neon-green underline-offset-4 transition-all",
                  currentPath === item.path && "text-neon-green",
                )}
              >
                {item.name}
              </a>
            ))}
            <a
              href={footer.socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.socialLinks[0].label}
            >
              <NeoButton variant="outline" size="icon" className="border-2">
                <Github className="h-5 w-5" />
              </NeoButton>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border-2 border-black dark:border-white active:bg-neon-green transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background pt-24 px-4 md:hidden overflow-y-auto"
          onClick={(e) => {
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
                  "font-display font-bold text-4xl cursor-pointer hover:text-neon-green transition-colors border-b-2 border-black/10 dark:border-white/10 pb-4",
                  currentPath === item.path &&
                    "text-neon-green border-neon-green",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
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
