import { motion } from 'framer-motion'

const journeyItems = [
  {
    year: 'July – Sept 2025',
    role: 'Industrial Trainee',
    org: 'Info Tech Corporation of Goa Ltd. (ITG)',
    type: 'Internship',
    gradient: 'from-[#2563EB] to-[#7C3AED]',
    solidA: '#2563EB',
    solidB: '#7C3AED',
    metric: '2 Months',
    metricSub: 'Data Analytics & Software Dev',
    body: 'Built analytics solutions with Python, OpenCV and JavaScript/Vibe. Implemented bit-plane slicing, Fourier Transform, sharpening and Canny edge detection. Delivered social media campaign EDA across 46 respondents and a full-stack React/Flask Text-to-Speech app with downloadable audio.',
    tags: ['Python', 'OpenCV', 'React/Flask', 'EDA', 'Image Processing'],
  },
  {
    year: '2025',
    role: 'Head Coordinator',
    org: 'Student Badminton Committee · GCE',
    type: 'Leadership',
    gradient: 'from-[#059669] to-[#06B6D4]',
    solidA: '#059669',
    solidB: '#06B6D4',
    metric: 'HAPPENINGS Fest',
    metricSub: 'Inter-collegiate event',
    body: 'Coordinated the Badminton event at HAPPENINGS, GCE\'s annual inter-collegiate cultural and sports fest. Successfully managed fixtures, team logistics, scheduling and all on-ground event operations smoothly throughout 2025.',
    tags: ['Event Coordination', 'Logistics', 'Leadership', 'Scheduling'],
  },
  {
    year: '2025',
    role: '1st Place 🏆',
    org: 'TEKFEST 2.0 · Escape Room',
    type: 'Achievement',
    gradient: 'from-[#7C3AED] to-[#EA580C]',
    solidA: '#7C3AED',
    solidB: '#EA580C',
    metric: '1st Place',
    metricSub: 'DBCE\'s MESH & DBEATS Councils',
    body: 'Secured 1st Place in the Escape Room event at TEKFEST 2.0, organised by DBCE\'s MESH & DBEATS Councils. Demonstrated analytical thinking, quick problem-solving and team collaboration under time pressure.',
    tags: ['1st Place', 'Analytical Thinking', 'Team Work', 'Time Pressure'],
  },
  {
    year: '2023 – Present',
    role: 'Team Auction Coordinator',
    org: 'Badminton Team · GCE',
    type: 'Strategy',
    gradient: 'from-[#EA580C] to-[#EAB308]',
    solidA: '#EA580C',
    solidB: '#EAB308',
    metric: 'Team Formation',
    metricSub: 'Player evaluation strategy',
    body: 'Contributing to player evaluation and auction strategy for team squad formation across multiple annual badminton leagues. Actively supporting key team composition and final roster selection decisions each competitive season.',
    tags: ['Player Evaluation', 'Auction Strategy', 'Decision Making', 'Team Building'],
  },
]

const summaryTiles = [
  { n: '4+', l: 'Professional & Leadership Stints', c: '#2563EB' },
  { n: '1st', l: 'TEKFEST Escape Room Win', c: '#7C3AED' },
  { n: '2 Mo', l: 'ITG Data + OpenCV Internship', c: '#06B6D4' },
  { n: '2+ Yr', l: 'Badminton Strategy & Leadership', c: '#EA580C' },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-24 px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 100% 10%, rgba(124,58,237,0.07) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 0% 90%, rgba(6,182,212,0.06) 0%, transparent 55%)' }}
    >
      <div className="absolute inset-0 bg-grid-dots opacity-[0.25] dark:opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="section-eyebrow font-mono">
                  04 / CAREER JOURNEY
                </span>
              </div>
              <h2 className="text-[2.6rem] md:text-[3.6rem] lg:text-[4.1rem] font-bold tracking-tight text-[#141414] dark:text-white mb-5 leading-[1.02]">
                <span className="block">From code to court</span>
                <span className="block text-gradient-ocean mt-1">— every step, a signal.</span>
              </h2>
              <p className="text-lg text-[#737373] dark:text-[#8A8A8A] max-w-2xl leading-relaxed">
                Internships in data, image-processing and full-stack engineering. Competition wins under pressure. Leadership of sports teams and large-scale events. Each experience sharpens how I analyze, decide, and ship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {summaryTiles.map((t, i) => (
              <motion.div
                key={t.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative overflow-hidden bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-2xl p-5 md:p-6"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: t.c }} />
                <p className="text-3xl md:text-4xl font-black bg-clip-text text-transparent relative z-10" style={{ backgroundImage: `linear-gradient(135deg, ${t.c}, #EC4899)` }}>
                  {t.n}
                </p>
                <p className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-[#737373] dark:text-[#6E6E78] mt-2 leading-snug relative z-10">{t.l}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative mb-14">
          <div className="hidden md:block absolute left-[26px] top-3 bottom-3 w-px" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(124,58,237,0.4), rgba(6,182,212,0.4), rgba(234,88,12,0.4))' }} />

          <div className="grid gap-6 md:gap-8">
            {journeyItems.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="hidden md:flex items-center justify-center absolute left-0 top-8 w-[52px] h-[52px] rounded-2xl z-20 shadow-lg border-4 border-white dark:border-[#0D0D0D]" style={{ background: `linear-gradient(135deg, ${item.solidA}, ${item.solidB})`, boxShadow: `0 8px 24px ${item.solidA}44` }}>
                  <span className="text-white font-mono font-black text-sm relative z-10">0{i + 1}</span>
                  <div className="absolute inset-0 rounded-2xl animate-pulse-glow" style={{ boxShadow: `0 0 0 0 ${item.solidA}66` }} />
                </div>

                <div className="md:pl-20">
                  <div className={`relative overflow-hidden bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-3xl p-6 md:p-7 hover:shadow-2xl transition-all duration-500`}
                       style={{ boxShadow: `0 8px 28px ${item.solidA}0D, inset 0 1px 0 rgba(255,255,255,0.6)` }}>
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${item.gradient}`} />
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-[0.12] blur-3xl group-hover:duration-700 transition-opacity pointer-events-none" style={{ background: `linear-gradient(135deg, ${item.solidA}, ${item.solidB})` }} />
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.04] pointer-events-none"
                         style={{ background: `radial-gradient(circle at top right, ${item.solidB}, transparent 70%)` }} />

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-white shadow-md bg-gradient-to-r ${item.gradient}`}>
                            {item.type}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                                style={{ background: `${item.solidA}12`, color: item.solidB, border: `1px solid ${item.solidA}26` }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.solidB }} />
                            Phase {i + 1} of {journeyItems.length}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#737373] dark:text-[#8A8A8A] flex items-center gap-1.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {item.year}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className={`text-xl md:text-2xl font-black bg-clip-text text-transparent leading-tight`} style={{ backgroundImage: `linear-gradient(135deg, ${item.solidA}, ${item.solidB})` }}>{item.metric}</p>
                        <p className="text-[11px] font-mono text-[#A3A3A3] dark:text-[#737373] mt-0.5">{item.metricSub}</p>
                      </div>
                    </div>

                    <h3 className="text-[1.35rem] md:text-[1.65rem] font-bold text-[#141414] dark:text-white mb-1 tracking-tight relative z-10">
                      {item.role}
                    </h3>
                    <p className={`text-sm md:text-base font-semibold mb-4 bg-clip-text text-transparent`} style={{ backgroundImage: `linear-gradient(135deg, ${item.solidA}, ${item.solidB})` }}>
                      {item.org}
                    </p>
                    <p className="text-[14px] md:text-sm text-[#525252] dark:text-[#9A9AA2] leading-[1.75] mb-5 max-w-3xl relative z-10">
                      {item.body}
                    </p>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-md"
                          style={{ background: `linear-gradient(135deg, ${item.solidA}12, ${item.solidB}0E)`, border: `1px solid ${item.solidA}30`, color: item.solidA, boxShadow: `inset 0 1px 0 ${item.solidA}12` }}
                        >
                          <span className="mr-1 opacity-70">◆</span>{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="relative overflow-hidden border border-[#E5E4E2] dark:border-[#1E1E24] rounded-[28px]"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.08) 45%, rgba(6,182,212,0.06) 100%)' }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent 60%)' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, #7C3AED, transparent 60%)' }} />

            <div className="grid lg:grid-cols-[1.1fr_minmax(0,0.9fr)] gap-10 p-8 md:p-12 relative z-10">
              <div className="max-w-xl">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent mb-4">
                  · BEYOND CODE & CLASSROOMS
                </p>
                <h3 className="text-[1.9rem] md:text-[2.4rem] font-black text-[#141414] dark:text-white mb-4 leading-tight tracking-tight">
                  Men's Badminton Team · Harmonium Classical Music
                </h3>
                <p className="text-lg font-bold mb-5 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
                  Sports Champion · State & National Level Musician
                </p>
                <p className="text-[15px] text-[#525252] dark:text-[#9A9AA2] leading-[1.8]">
                  Key player for GCE's Men's Badminton Team — Goa University Inter-Collegiate Champions 2023-24 and 3rd place at Shuttle Fiesta 2024. Represented Goa at Kala Utsav (National) in Harmonium and won 1st Place at Goa State-Level Harmonium Competition 2019.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 content-start">
                {[
                  { t: '🏆 Goa University Champion', sub: 'Inter-Collegiate 2023-24', c1: '#2563EB', c2: '#7C3AED' },
                  { t: '🥉 Shuttle Fiesta 3rd', sub: 'Badminton Team 2024', c1: '#06B6D4', c2: '#10B981' },
                  { t: '🎵 Kala Utsav · National', sub: 'Goa Representative Harmonium', c1: '#7C3AED', c2: '#EC4899' },
                  { t: '🥇 State Harmonium 1st', sub: 'Goa Level Competition · 2019', c1: '#EA580C', c2: '#EAB308' },
                  { t: '🎓 Govt. Scholarship', sub: '₹48K Talent Grant', c1: '#10B981', c2: '#06B6D4' },
                  { t: '🤝 Team Builder', sub: 'Auction · Strategy · Roster', c1: '#EC4899', c2: '#7C3AED' },
                ].map((t, i) => (
                  <motion.div
                    key={t.t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="bg-white/80 dark:bg-[#121218]/85 backdrop-blur border border-white dark:border-[#1E1E24] rounded-2xl p-4 shadow-sm"
                  >
                    <p className="text-sm md:text-[15px] font-bold leading-snug bg-clip-text text-transparent mb-1.5" style={{ backgroundImage: `linear-gradient(135deg, ${t.c1}, ${t.c2})` }}>
                      {t.t}
                    </p>
                    <p className="text-[11px] font-mono text-[#737373] dark:text-[#8A8A8A] leading-snug">{t.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
