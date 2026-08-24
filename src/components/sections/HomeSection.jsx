import React from 'react'
import { motion } from 'framer-motion'
import officialPhoto from '../../../Samarth_Photo.jpeg'
import resumeImage from '../../../Samarth_Resume.png'

const interestPills = [
  { label: 'Business Analytics', color: '#2563EB' },
  { label: 'Data Analytics', color: '#7C3AED' },
  { label: 'Power BI / DAX', color: '#EA580C' },
  { label: 'Machine Learning', color: '#EC4899' },
  { label: 'Consulting / Strategy', color: '#059669' },
]

const featured = [
  {
    title: 'Retail Sales Dashboard',
    tag: 'Power BI · DAX',
    metric: '+₹14K Profit Swing',
    desc: 'Interactive dashboard with slicers, KPI cards & DAX-driven profit analysis across 4 states & 4 categories.',
    c1: '#F59E0B', c2: '#EC4899',
  },
  {
    title: 'AI Briefing Platform',
    tag: 'Gemini API · Fact-Check',
    metric: 'Claim-Level Verified',
    desc: 'Topic-wise news briefings with real-time claim verification against cited sources.',
    c1: '#EC4899', c2: '#7C3AED',
  },
  {
    title: 'Disease Detection via Speech',
    tag: 'LSTM · Flask',
    metric: '92.06% · 70.37%',
    desc: 'Two-phase stacked LSTM with audio feature fusion, deployed Flask web app.',
    c1: '#7C3AED', c2: '#06B6D4',
  },
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomeSection() {
  return (
    <>
      <section
        id="home"
        className="relative pt-[112px] pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -left-32 w-[540px] h-[540px] rounded-full opacity-[0.18] blur-[120px] pointer-events-none"
             style={{ background: 'radial-gradient(circle, #EC4899, transparent 60%)' }} />
        <div className="absolute top-0 -right-32 w-[540px] h-[540px] rounded-full opacity-[0.18] blur-[120px] pointer-events-none"
             style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.12] blur-[100px] pointer-events-none"
             style={{ background: 'radial-gradient(circle, #7C3AED, transparent 60%)' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_500px] gap-14 lg:gap-16 items-center">

            <div className="relative flex flex-col gap-7 max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 section-eyebrow bg-white/70 dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-[#7C3AED] dark:text-[#C4B5FD]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70 bg-emerald-500"/>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"/>
                  </span>
                  Summer Internship 2027 · Available
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="font-display text-[2.7rem] sm:text-[3.6rem] md:text-[4.3rem] lg:text-[4.7rem] font-bold leading-[0.98] tracking-[-0.04em] text-[#0B0B12] dark:text-white">
                  Engineering code.
                  <br />
                  <span className="text-gradient-ocean">Analysing data.</span>
                  <br />
                  <span className="text-gradient-sunset">Driving decisions.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-[15px] sm:text-base md:text-lg text-[#4A4A55] dark:text-[#9A9AB0] leading-relaxed max-w-xl">
                  <span className="font-semibold text-[#141414] dark:text-white">Samarth Ravindra Kamat</span> — PGDM Big Data Analytics @ Goa Institute of Management, with a Computer Engineering foundation. Bridging <b>Python analytics</b>, <b>Power BI dashboards</b> and <b>AI applications</b> to answer business questions recruiters actually ask.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="flex flex-wrap gap-1.5">
                  {interestPills.map((p, i) => (
                    <span
                      key={p.label}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${p.color}14, transparent)`,
                        borderColor: `${p.color}33`,
                        color: p.color,
                      }}
                    >
                      {p.label}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-bold rounded-full text-white shadow-[0_8px_30px_rgba(124,58,237,0.35)] hover:shadow-[0_14px_40px_rgba(236,72,153,0.4)] transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 45%, #7C3AED 100%)' }}
                  >
                    View My Work
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a
                    href={resumeImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-bold rounded-full border-2 border-[#141414]/10 dark:border-white/10 text-[#141414] dark:text-white hover:border-[#7C3AED]/50 dark:hover:border-[#A78BFA]/60 hover:text-[#7C3AED] dark:hover:text-[#C4B5FD] transition-all duration-200 backdrop-blur-sm bg-white/60 dark:bg-white/[0.03]"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="12" y1="18" x2="12" y2="12"/>
                      <polyline points="9 15 12 12 15 15"/>
                    </svg>
                    Download Resume
                  </a>
                  <a
                    href="https://linkedin.com/in/samarthkamat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#525252] dark:text-[#9A9AB0] hover:text-[#0A66C2] dark:hover:text-[#60A5FA] transition-colors pl-1"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[540px] flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full opacity-70 blur-2xl pointer-events-none"
                       style={{ background: 'conic-gradient(from 200deg at 50% 50%, #F59E0B, #EC4899, #7C3AED, #06B6D4, #F59E0B)' }} />
                  <div className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] lg:w-[29rem] lg:h-[29rem] rounded-full p-3 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/20 dark:to-white/5 shadow-[0_35px_100px_rgba(30,27,75,0.3)] backdrop-blur-xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-white dark:border-white/20 shadow-inner">
                      <img
                        src={officialPhoto}
                        alt="Samarth Ravindra Kamat"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 dark:bg-white/[0.12] backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] shadow-lg">
                    <span className="mono text-[11.5px] font-extrabold text-gradient-sun leading-none">
                      PGDM - Big Data Analytics · GIM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-24 grid md:grid-cols-3 gap-5">
              {featured.map((p, i) => (
                <motion.a
                  key={p.title}
                  href="#projects"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-black/[0.06] dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-6 hover:shadow-2xl transition-all duration-500"
                  style={i === 0 ? { boxShadow: '0 12px 40px rgba(245,158,11,0.12)' } : i === 1 ? { boxShadow: '0 12px 40px rgba(124,58,237,0.12)' } : { boxShadow: '0 12px 40px rgba(6,182,212,0.12)' }}
                >
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity group-hover:opacity-40"
                       style={{ background: `radial-gradient(circle, ${p.c1}, transparent)` }} />
                  <div className={`absolute top-0 left-0 right-0 h-0.5 opacity-70`} style={{ background: `linear-gradient(90deg, ${p.c1}, ${p.c2})` }} />
                  <div className="flex items-center justify-between mb-5">
                    <span className="mono text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: `${p.c1}15`, color: p.c2 }}>
                      {p.tag}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.c2} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M7 17L17 7M17 7H8M17 7v9"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2.5 text-[#141414] dark:text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6B7A] dark:text-[#8C8CA3] leading-relaxed mb-5">
                    {p.desc}
                  </p>
                  <p className="font-display font-bold text-lg leading-none"
                     style={{ background: `linear-gradient(90deg, ${p.c1}, ${p.c2})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                    {p.metric}
                  </p>
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-20 px-5 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.04) 0%, rgba(37,99,235,0.04) 50%, rgba(6,182,212,0.04) 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none"/>
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 section-eyebrow mb-6"
                 style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))', color: '#7C3AED', border: '1px solid rgba(124,58,237,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"/>
              Why hire me
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[2.25rem] sm:text-[3rem] md:text-[3.8rem] font-bold tracking-[-0.03em] text-[#0B0B12] dark:text-white leading-[1.08] mb-7">
              An <span className="text-gradient-ocean">engineer who speaks business</span>,
              <br className="hidden sm:block"/>
              and a <span className="text-gradient-sunset">business student who ships code</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[15px] sm:text-base text-[#5A5A6D] dark:text-[#9A9AB0] max-w-2xl mx-auto leading-relaxed">
              No separate analyst vs. developer silos — I can clean the dataset, build the Power BI dashboard, write the LLM pipeline, and present the recommendation to leadership.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                ['EDA', 'Pandas · NumPy'],
                ['Dashboards', 'Power BI · DAX'],
                ['Machine Learning', 'Scikit-learn · Keras'],
                ['Neural Networks', 'LSTM · Keras'],
                ['Full Stack', 'React · Flask'],
                ['Gen AI', 'Gemini API · Prompt Eng.'],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.07] backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[11px]"
                       style={{ background: `linear-gradient(135deg, ${['#2563EB','#7C3AED','#EC4899','#059669','#06B6D4','#F59E0B'][i]}, ${['#7C3AED','#EC4899','#F59E0B','#06B6D4','#2563EB','#EC4899'][i]})` }}>
                    {['📊','📈','🤖','🧠','⚙️','✨'][i]}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-[13px] font-bold text-[#141414] dark:text-white">{k}</p>
                    <p className="text-[10.5px] text-[#737373] dark:text-[#8C8CA3]">{v}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
