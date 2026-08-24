import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import resumeImage from '../../Samarth_Resume.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
      const sections = ['home', 'about', 'projects', 'skills', 'journey', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#060610]/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_50px_rgba(0,0,0,0.5)]'
            : 'bg-white/40 dark:bg-[#060610]/40 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[76px]">
            <a
              href="#home"
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="relative w-[44px] h-[44px] rounded-2xl flex items-center justify-center shrink-0 overflow-hidden shadow-lg"
                   style={{
                     background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)',
                     boxShadow: '0 8px 24px rgba(124,58,237,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.15)',
                   }}>
                <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), transparent 55%)' }} />
                <span className="relative z-10 font-display font-extrabold text-white text-[15px] leading-none drop-shadow-md">SK</span>
                <div className="absolute inset-0 bg-gradient-to-t from-white/25 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-display font-extrabold text-[15px] text-[#141414] dark:text-white tracking-tight">
                  Samarth Kamat
                </span>
                <span className="mono text-[10.5px] text-[#737373] dark:text-[#8A8A8A] tracking-[0.12em] uppercase">
                  Data · Analytics · Engineering
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-0.5 px-2 py-2 rounded-full bg-white/75 dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.1] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13.5px] font-semibold rounded-full transition-all duration-250 ${
                      isActive
                        ? 'text-white shadow-lg scale-[1.02]'
                        : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#141414] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                    }`}
                    style={isActive
                      ? {
                          background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%)',
                          boxShadow: '0 6px 20px rgba(124,58,237,0.35)',
                        }
                      : {}}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/[0.07] border border-black/[0.06] dark:border-white/[0.12] text-[#525252] dark:text-[#A3A3A3] hover:text-[#141414] dark:hover:text-white hover:border-[#7C3AED]/40 hover:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-bold text-white rounded-full transition-all shadow-[0_6px_20px_rgba(124,58,237,0.38)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.45)] hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%)',
                  boxShadow: '0 6px 20px rgba(124,58,237,0.38), inset 0 1px 0 rgba(255,255,255,0.22)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <polyline points="9 15 12 12 15 15"/>
                </svg>
                Resume
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M17 7H9M17 7v8"/>
                </svg>
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/70 dark:bg-white/10 text-[#525252] dark:text-white"
              >
                {darkMode ? '☀' : '☾'}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-[#141414] dark:text-white rounded-full bg-white/70 dark:bg-white/10"
                aria-label="Menu"
              >
                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current rounded-full transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute top-[76px] left-4 right-4 bg-white dark:bg-[#0C0C18] border border-[#E5E4E2] dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-3 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-[14px] font-semibold text-[#141414] dark:text-white hover:bg-[#F5F3EF] dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-black/5 dark:bg-white/10 mx-3 my-2"/>
              <a
                href={resumeImage}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 mt-2 flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-white rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED, #EC4899)' }}
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
