import { useState } from 'react'
import { motion } from 'framer-motion'
import resumeImage from '../../../Samarth_Resume.png'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(124,58,237,0.05) 50%, rgba(6,182,212,0.04) 100%)' }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#141414] dark:text-white mb-6 leading-[1.1]">
              Let's solve{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                interesting problems
              </span>{' '}
              with data.
            </h2>
            <p className="text-base text-[#525252] dark:text-[#A3A3A3] leading-relaxed mb-6 max-w-md">
              I'm interested in opportunities across Business Analytics, Data Analytics, Product Analytics, Business Intelligence, Consulting, Strategy and related roles.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {[
                {
                  href: 'https://linkedin.com/in/samarthkamat',
                  label: 'Connect on LinkedIn',
                  sub: 'linkedin.com/in/samarthkamat',
                  gradient: 'from-[#0A66C2] to-[#2563EB]',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                    </svg>
                  ),
                },
                {
                  href: 'mailto:samarth.kamat2026b@gim.ac.in',
                  label: 'Email',
                  sub: 'samarth.kamat2026b@gim.ac.in',
                  gradient: 'from-[#7C3AED] to-[#06B6D4]',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 w-fit"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${item.gradient} transition-transform group-hover:scale-105`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.label}</p>
                    <p className="text-xs text-[#A3A3A3]">{item.sub}</p>
                  </div>
                </motion.a>
              ))}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#EA580C] to-[#EAB308] text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold bg-gradient-to-r from-[#EA580C] to-[#EAB308] bg-clip-text text-transparent">Phone</p>
                  <p className="text-xs text-[#A3A3A3]">+91-7709085986</p>
                </div>
              </div>
            </div>

            <motion.a
              href={resumeImage}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-white w-fit shadow-lg shadow-blue-500/20"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              View Resume
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="-translate-y-px">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 relative overflow-hidden shadow-xl shadow-black/5">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4)' }} />
              <h3 className="text-base font-semibold text-[#141414] dark:text-white mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { key: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 text-sm bg-[#F9F8F6] dark:bg-[#0D0D0D] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-xl text-[#141414] dark:text-white placeholder:text-[#C4C3C1] dark:placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#7C3AED] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity or how I can help..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-[#F9F8F6] dark:bg-[#0D0D0D] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-xl text-[#141414] dark:text-white placeholder:text-[#C4C3C1] dark:placeholder:text-[#3A3A3A] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#7C3AED] transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold rounded-xl text-white transition-all duration-200"
                  style={{ background: sent ? 'linear-gradient(135deg, #059669, #06B6D4)' : 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                >
                  {sent ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Message sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
