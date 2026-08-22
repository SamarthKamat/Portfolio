import React from 'react'
import { motion } from 'framer-motion'
import officialPhoto from '../../../Samarth_Photo.jpeg'
import resumeImage from '../../../Samarth_Resume.png'

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PhotoCard() {
  return (
    <div className="w-full max-w-[420px] mx-auto">
      <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[360px]">
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#2563EB]/35 via-[#7C3AED]/30 to-[#06B6D4]/35 blur-3xl" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] p-[4px] shadow-[0_0_60px_rgba(59,130,246,0.18)]">
          <div className="h-full w-full rounded-full bg-[#E8E8E8]" />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-[#E8E8E8] shadow-2xl">
          <img
            src={officialPhoto}
            alt="Samarth Ravindra Kamat — PGDM Big Data Analytics, Goa Institute of Management"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="mt-8 text-center w-full min-w-0">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          <span className="text-gradient-warm">Samarth Ravindra Kamat</span>
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-5 flex justify-center w-full px-2"
        >
          <div className="inline-flex items-center gap-3 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#1F2937]/90 dark:bg-[#141414]/95 border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgba(20,20,20,0.25)] backdrop-blur w-full sm:w-fit max-w-full overflow-hidden">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: '#2563EB' }} />
              <span className="relative inline-flex rounded-full h-3 w-3 flex-shrink-0" style={{ backgroundColor: '#2563EB', boxShadow: '0 0 10px #2563EB, 0 0 20px rgba(37,99,235,0.4)' }} />
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-white break-words text-left">
              PGDM – BIG DATA ANALYTICS · GOA INSTITUTE OF MANAGEMENT
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function HomeSection() {
  return (
    <>
      <section
        id="home"
        className="relative pt-24 pb-16 px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(37,99,235,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #141414 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

            <div className="flex flex-col gap-6 max-w-2xl w-full min-w-0">
              <FadeUp delay={0}>
                <div className="inline-flex items-center gap-3 px-3 sm:px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#1F2937]/90 dark:bg-[#141414]/95 border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgba(20,20,20,0.25)] backdrop-blur w-full sm:w-fit max-w-full overflow-hidden">
                  <span className="relative flex h-3 w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: '#10B981' }} />
                    <span className="relative inline-flex rounded-full h-3 w-3 flex-shrink-0" style={{ backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981, 0 0 20px rgba(16,185,129,0.4)' }} />
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide text-white break-words">
                    Available for Summer Internship 2027
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <h1 className="text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#141414] dark:text-white">
                  Turning engineering and{' '}
                  <span className="text-gradient-sun">
                    data analytics
                  </span>{' '}
                  into impactful business solutions.
                </h1>
              </FadeUp>

              <FadeUp delay={0.22}>
                <p className="text-sm sm:text-base md:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed break-words">
                  Business analytics professional in training with a Computer Engineering foundation, hands-on experience in Python, Power BI, OpenCV, and full-stack development — bridging code, data and business decisions.
                </p>
              </FadeUp>

              <FadeUp delay={0.32} className="flex items-center gap-2 flex-wrap w-full min-w-0">
                {['Python', 'Power BI', 'TensorFlow', 'LSTM', 'Flask'].map((tech, i) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-full border break-words"
                    style={{
                      background: `linear-gradient(135deg, ${['rgba(37,99,235,0.08)', 'rgba(124,58,237,0.08)', 'rgba(6,182,212,0.08)', 'rgba(5,150,105,0.08)', 'rgba(234,88,12,0.08)'][i]}, transparent)`,
                      borderColor: ['rgba(37,99,235,0.25)', 'rgba(124,58,237,0.25)', 'rgba(6,182,212,0.25)', 'rgba(5,150,105,0.25)', 'rgba(234,88,12,0.25)'][i],
                      color: ['#2563EB', '#7C3AED', '#0891B2', '#059669', '#EA580C'][i],
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </FadeUp>

              <FadeUp delay={0.42} className="flex flex-wrap gap-3 pt-1 w-full min-w-0">
                <a
                  href="#projects"
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-sm font-semibold rounded-full text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow shrink-0"
                  style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)' }}
                >
                  Explore My Work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a
                  href={resumeImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 border border-[#E5E4E2] dark:border-[#2A2A2A] text-[#141414] dark:text-white text-sm font-semibold rounded-full hover:border-[#F59E0B] hover:text-[#EA580C] dark:hover:border-[#EC4899] dark:hover:text-[#F472B6] transition-all duration-200 bg-white dark:bg-transparent shrink-0"
                >
                  View Resume
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5 -translate-y-px flex-shrink-0">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </FadeUp>

              <FadeUp delay={0.52}>
                <a
                  href="https://linkedin.com/in/samarthkamat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#EC4899] dark:hover:text-[#F472B6] transition-colors w-fit break-words"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                  </svg>
                  LinkedIn ↗
                </a>
              </FadeUp>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="flex justify-center lg:justify-end"
            >
              <PhotoCard />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 w-full min-w-0"
          >
            <div className="w-full min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#F59E0B] to-[#EC4899] bg-clip-text text-transparent mb-2 break-words">Selected Work</p>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-[#141414] dark:text-white break-words leading-tight">
                Featured <span className="text-gradient-sunset">Projects</span>
              </h2>
            </div>
            <a href="#projects" className="text-sm text-[#525252] dark:text-[#A3A3A3] hover:text-[#EC4899] transition-colors w-fit shrink-0 break-words">View all projects →</a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0">
            {[
              {
                title: 'Retail Sales Analytics Dashboard',
                problem: 'Interactive Power BI dashboard for multi-state retail sales with slicers, KPI cards and DAX-driven visualisations.',
                metric: 'Profit swing ₹3.7K→₹10.3K', tag: 'Business Intelligence',
                c1: '#F59E0B', c2: '#EC4899', delay: 0,
              },
              {
                title: 'AI-Powered Global Briefing Platform',
                problem: 'Gemini API-driven news briefings with real-time claim-level fact verification against cited sources.',
                metric: 'Gemini API · Fact-Check', tag: 'Artificial Intelligence',
                c1: '#EC4899', c2: '#7C3AED', delay: 0.1,
              },
              {
                title: 'Multi-Disease Detection via Speech (Deep Learning)',
                problem: 'Stacked LSTM + MFCC/VGGish fusion with 92.06% binary and 70.37% multi-class accuracy, deployed via Flask.',
                metric: 'LSTM · 92.06% · Flask', tag: 'Deep Learning',
                c1: '#7C3AED', c2: '#06B6D4', delay: 0.2,
              },
            ].map((project) => (
              <motion.a
                key={project.title}
                href="#projects"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.delay }}
                whileHover={{ y: -4 }}
                className="group block bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300 relative overflow-hidden w-full min-w-0"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${project.c1}, ${project.c2})` }} />
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3] break-words">{project.tag}</span>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${project.c1}, ${project.c2})` }} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#141414] dark:text-white leading-snug mb-3 break-words">{project.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-6 break-words">{project.problem}</p>
                <div className="pt-4 border-t border-[#F1F0EE] dark:border-[#1A1A1A] flex items-end justify-between gap-2 w-full min-w-0">
                  <p className="text-base sm:text-lg font-bold break-words" style={{
                    background: `linear-gradient(90deg, ${project.c1}, ${project.c2})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>{project.metric}</p>
                  <span className="text-sm font-medium shrink-0 break-words" style={{
                    background: `linear-gradient(90deg, ${project.c1}, ${project.c2})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>View →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-6 lg:px-8 relative overflow-hidden w-full min-w-0"
        style={{ background: 'linear-gradient(135deg, #141414 0%, #1E1B4B 50%, #0C2340 100%)' }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center w-full min-w-0 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 break-words leading-tight">
            Interested in how I solve{' '}
            <span className="text-gradient-warm">
              business problems?
            </span>
          </h2>
          <p className="text-[#A3A3A3] mb-8 break-words">From exploratory data analysis to strategic recommendations — let's connect.</p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold rounded-full text-white shadow-lg shrink-0"
            style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #7C3AED 100%)' }}
          >
            Explore My Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </>
  )
}
