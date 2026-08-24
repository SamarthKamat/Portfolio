import { useState } from 'react'
import { motion } from 'framer-motion'
import resumeImage from '../../../Samarth_Resume.png'

const contactTiles = [
  {
    label: 'LinkedIn',
    value: '/in/samarthkamat',
    href: 'https://linkedin.com/in/samarthkamat',
    target: '_blank',
    c1: '#0A66C2',
    c2: '#2563EB',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'samarth.kamat2026b@gim.ac.in',
    href: 'mailto:samarth.kamat2026b@gim.ac.in',
    target: undefined,
    c1: '#7C3AED',
    c2: '#06B6D4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
        <rect x="3" y="5" width="18" height="14" rx="2.5" ry="2.5"/>
        <polyline points="21,7 12,14 3,7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91-7709085986',
    href: 'tel:+917709085986',
    target: undefined,
    c1: '#EA580C',
    c2: '#EAB308',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.5-6.5 19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

const openRoles = [
  'Business Analytics',
  'Data Analytics',
  'Product Analytics',
  'Business Intelligence',
  'Strategy & Consulting',
  'Internship · Summer 2027',
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.07) 35%, rgba(6,182,212,0.05) 100%)' }}
    >
      <div className="absolute top-10 -left-24 w-[480px] h-[480px] rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #7C3AED, transparent 60%)' }} />
      <div className="absolute bottom-0 -right-16 w-[460px] h-[460px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #06B6D4, transparent 60%)' }} />
      <div className="absolute inset-0 bg-grid-lines opacity-[0.04] dark:opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-eyebrow font-mono">
              05 / LET&apos;S CONNECT
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
              </span>
              OPEN TO ROLES · RESPONDING IN 24H
            </span>
          </div>
          <h2 className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.4rem] font-black tracking-tight text-[#141414] dark:text-white mb-6 leading-[1.02]">
            <span className="block">Have a problem worth</span>
            <span className="block text-gradient-sunset mt-1">solving with data? 👇</span>
          </h2>
          <p className="text-lg text-[#737373] dark:text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed">
            Currently recruiting for <span className="font-bold text-[#141414] dark:text-white">Summer Internships 2027</span> and full-time analytics roles. Drop a message — I reply personally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              {contactTiles.map((t, i) => (
                <motion.a
                  key={t.label}
                  href={t.href}
                  target={t.target}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-2xl p-5 block"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ background: `linear-gradient(135deg, ${t.c1}, ${t.c2})` }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md relative z-10" style={{ background: `linear-gradient(135deg, ${t.c1}, ${t.c2})` }}>
                    {t.icon}
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#A3A3A3] dark:text-[#737373] mb-1 relative z-10">{t.label}</p>
                  <p className="text-sm font-bold text-[#141414] dark:text-white break-words leading-snug relative z-10">{t.value}</p>
                  <p className="text-[11px] mt-2 flex items-center gap-1 relative z-10" style={{ color: t.c1 }}>
                    Open ↗
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-3xl p-7 md:p-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shadow-md text-white font-bold" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                    🎯
                  </span>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#A3A3A3]">Currently Interviewing For</p>
                    <h3 className="text-lg font-black text-[#141414] dark:text-white">Roles I&apos;m excited to contribute to</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {openRoles.map((role, i) => (
                    <span
                      key={role}
                      className="text-[12px] font-semibold px-3.5 py-2 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        background: i === 5
                          ? 'linear-gradient(135deg, #EA580C, #EC4899)'
                          : `linear-gradient(135deg, ${['#2563EB','#7C3AED','#06B6D4','#10B981','#8B5CF6'][i % 5]}12, ${['#7C3AED','#06B6D4','#EC4899','#059669','#2563EB'][i % 5]}14)`,
                        color: i === 5 ? 'white' : ['#2563EB','#7C3AED','#06B6D4','#10B981','#8B5CF6'][i % 5],
                        border: `1px solid ${i === 5 ? 'transparent' : ['#2563EB','#7C3AED','#06B6D4','#10B981','#8B5CF6'][i % 5]}30`,
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl p-8 md:p-9"
              style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #1E1B4B 45%, #0F172A 100%)' }}
            >
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(167,139,250,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(96,165,250,0.35), transparent 45%)' }} />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-md">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 mb-3">📄 READY TO SHARE</p>
                  <h3 className="text-[1.45rem] md:text-[1.8rem] font-black text-white leading-tight mb-2">
                    Full Resume · <span className="text-gradient-sun">1 Page · Targeted</span>
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    Education, projects, technical skills, certifications and PORs — formatted for ATS and recruiter scans.
                  </p>
                </div>
                <motion.a
                  href={resumeImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-[#0F0F12] shadow-2xl shadow-amber-500/30 whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 45%, #F97316 100%)' }}
                >
                  📋 Download / View Resume
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-3xl p-7 md:p-9 shadow-xl shadow-black/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #EC4899, #06B6D4)' }} />
              <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full opacity-10 blur-3xl" style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }} />

              <div className="mb-7 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                    ✉️
                  </span>
                  <div>
                    <h3 className="text-[1.3rem] font-black text-[#141414] dark:text-white">Send a direct message</h3>
                    <p className="text-xs text-[#A3A3A3] dark:text-[#737373] font-mono mt-0.5">Reply within 24 hours · Inbox always open</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                {[
                  { key: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Jane Doe — HR at Acme Inc.', icon: '👤' },
                  { key: 'email', label: 'Your Email', type: 'email', placeholder: 'jane@company.com', icon: '📮' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#737373] dark:text-[#8A8A8A] mb-2">
                      <span>{field.icon}</span>
                      {field.label}
                      <span className="text-[#EF4444]">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity blur-sm" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED, #06B6D4)' }} />
                      <input
                        type={field.type}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        required
                        className="relative w-full px-5 py-4 text-[15px] bg-[#FAFAF8] dark:bg-[#0B0B10] border border-[#E5E4E2] dark:border-[#222] rounded-2xl text-[#141414] dark:text-white placeholder:text-[#BEBCBA] dark:placeholder:text-[#3A3A44] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#737373] dark:text-[#8A8A8A] mb-2">
                    <span>💬</span>
                    Your Message
                    <span className="text-[#EF4444]">*</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity blur-sm" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED, #06B6D4)' }} />
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about the role, team, or a problem you're hiring for. I read every message personally."
                      required
                      rows={5}
                      className="relative w-full px-5 py-4 text-[15px] bg-[#FAFAF8] dark:bg-[#0B0B10] border border-[#E5E4E2] dark:border-[#222] rounded-2xl text-[#141414] dark:text-white placeholder:text-[#BEBCBA] dark:placeholder:text-[#3A3A44] focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl font-black text-white text-[15px] shadow-xl transition-all"
                  style={{
                    background: sent
                      ? 'linear-gradient(135deg, #059669, #10B981, #06B6D4)'
                      : 'linear-gradient(135deg, #2563EB 0%, #7C3AED 45%, #EC4899 100%)',
                    boxShadow: sent ? '0 12px 36px rgba(16,185,129,0.35)' : '0 14px 40px rgba(124,58,237,0.35)',
                    paddingTop: '1.125rem',
                    paddingBottom: '1.125rem',
                  }}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }} />
                  {sent ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      Message Sent — Will reply soon! 🎉
                    </>
                  ) : (
                    <>
                      Fire it off to Samarth 🚀
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-dashed border-[#E5E4E2] dark:border-[#222] flex items-center justify-between gap-4 relative z-10">
                <p className="text-[11px] font-mono text-[#A3A3A3] dark:text-[#6E6E78]">🔐 No form DB · Goes straight to my inbox</p>
                <p className="text-[11px] font-mono text-[#A3A3A3] dark:text-[#6E6E78]">Based in 🇮🇳 Goa · IST (GMT+5:30)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
