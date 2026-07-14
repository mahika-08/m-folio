import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from '../../utils/icons.jsx';
import { NAV_ITEMS, SECTION_IDS } from '../../constants/nav';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrolled } from '../../hooks/useScrolled';
import { config } from '../../data/config';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const scrolled = useScrolled();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
    closeMobile();
  }, [closeMobile]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f17]/80 backdrop-blur-md border-b border-surface-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-max flex items-center justify-center h-16 px-4"
        aria-label="Primary navigation"
      >

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeId === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={config.resumeUrl}
          download
          className="hidden md:inline-flex btn-outline text-sm py-2"
        >
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-raised transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#16161f]/95 backdrop-blur-md border-b border-surface-border"
          >
            <ul className="container-max px-4 py-4 flex flex-col gap-1" role="list">
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = activeId === href.slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-slate-400 hover:text-white hover:bg-surface-raised'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
                <a href={config.resumeUrl} download className="btn-outline w-full justify-center text-sm">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
