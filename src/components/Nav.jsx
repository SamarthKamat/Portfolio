import { useState, useEffect } from 'react'
import resumeImage from '../../Samarth_Resume.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'projects', 'journey', 'skills', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#E5E4E2] dark:border-[#1E1E1E] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="text-sm md:text-base font-bold tracking-tight hover:opacity-90 transition-opacity min-w-0 shrink-0"
            >
              <span className="text-gradient-sunset leading-none">SAMARTH RAVINDRA KAMAT</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm transition-colors group ${
                    active === link.href.slice(1)
                      ? 'text-[#2563EB] dark:text-[#3B82F6]'
                      : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#141414] dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-[#2563EB] dark:bg-[#3B82F6] transition-transform origin-left ${
                      active === link.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#525252] dark:text-[#A3A3A3] hover:text-[#141414] dark:hover:text-white hover:bg-[#F1F0EE] dark:hover:bg-[#1A1A1A] transition-all"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white rounded-full transition-all shadow-md shadow-blue-500/20"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                Resume
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="translate-x-0 -translate-y-px">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-8 h-8 flex items-center justify-center text-[#525252] dark:text-[#A3A3A3]"
              >
                {darkMode ? '☀' : '◐'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-[#141414] dark:text-white"
                aria-label="Menu"
              >
                <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/20 dark:bg-black/50" />
          <div
            className="absolute top-16 left-0 right-0 bg-white dark:bg-[#111111] border-b border-[#E5E4E2] dark:border-[#1E1E1E] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-[#141414] dark:text-white border-b border-[#F1F0EE] dark:border-[#1A1A1A] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium bg-[#141414] dark:bg-white text-white dark:text-[#141414] rounded-full"
              >
                View Resume ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
