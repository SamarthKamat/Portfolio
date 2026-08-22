import { motion } from 'framer-motion'

const education = [
  { years: '2026 – 2028', degree: 'PGDM – Big Data Analytics', institution: 'Goa Institute of Management, Goa', detail: 'Currently Pursuing', primary: true, color: '#2563EB' },
  { years: '2022 – 2026', degree: 'Bachelor of Engineering (Computer)', institution: 'Goa College of Engineering, Goa University', detail: '8.37 CGPA (out of 10) till 7th Sem', primary: true, color: '#7C3AED' },
  { years: '2021 – 2022', degree: 'HSC – Science', institution: 'Purushottam Walawalkar Higher Secondary School', detail: '78.67%', primary: false, color: '#06B6D4' },
  { years: '2019 – 2020', degree: 'SSC – General', institution: 'Saraswat Vidyalaya High School (Goa Board)', detail: '91.5%', primary: false, color: '#059669' },
]

const approach = [
  { num: '01', title: 'UNDERSTAND', body: 'Define the real problem before jumping to solutions.', color: '#F59E0B' },
  { num: '02', title: 'ANALYZE', body: 'Explore data and identify patterns that matter.', color: '#EC4899' },
  { num: '03', title: 'STRATEGIZE', body: 'Evaluate options and formulate recommendations.', color: '#7C3AED' },
  { num: '04', title: 'IMPACT', body: 'Translate insights into decisions with measurable outcomes.', color: '#06B6D4' },
]

const differentiators = [
  {
    title: 'Computer Engineering Foundation',
    body: 'A strong engineering base in C, C++, Python, and OpenCV, bridging software development with data analytics and business decision-making.',
    gradient: 'from-[#F59E0B] to-[#EC4899]',
    iconBg: 'rgba(245,158,11,0.12)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 22L30 14L32.8 11.2L42.4 20.8C42.8 21.2 42.8 21.8 42.4 22.2L32.8 31.8L30 29L38 22Z" fill="#F59E0B"/>
        <path d="M10 26L18 34L15.2 36.8L5.6 27.2C5.2 26.8 5.2 26.2 5.6 25.8L15.2 16.2L18 19L10 26Z" fill="#EC4899"/>
        <rect x="22" y="9" width="4.5" height="30" rx="2" fill="#F59E0B" transform="rotate(7 22 9)"/>
        <rect x="22.5" y="9.5" width="2.2" height="29" rx="1.1" fill="#FFFBEB" transform="rotate(7 22.5 9.5)"/>
      </svg>
    ),
  },
  {
    title: 'Data & Visualisation',
    body: 'Hands-on Power BI dashboards, DAX measures, statistical analysis, EDA and data storytelling across real retail and marketing datasets.',
    gradient: 'from-[#059669] to-[#06B6D4]',
    iconBg: 'rgba(5,150,105,0.12)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="36" width="36" height="4" rx="1.2" fill="#059669"/>
        <rect x="10" y="18" width="7" height="18" rx="1.6" fill="#34D399"/>
        <rect x="20.5" y="8" width="7" height="28" rx="1.6" fill="#06B6D4"/>
        <rect x="31" y="22" width="7" height="14" rx="1.6" fill="#0891B2"/>
        <circle cx="13.5" cy="21" r="1.6" fill="#ECFDF5"/>
        <circle cx="24" cy="11" r="1.6" fill="#F0FDFA"/>
        <circle cx="34.5" cy="25" r="1.6" fill="#ECFEFF"/>
      </svg>
    ),
  },
  {
    title: 'AI & Full-Stack Mindset',
    body: 'From Gemini API-powered briefings to React/Flask full-stack apps and OpenCV image processing — comfortable building end-to-end solutions.',
    gradient: 'from-[#7C3AED] to-[#EA580C]',
    iconBg: 'rgba(124,58,237,0.12)',
    icon: (
      <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C32.8366 4 40 11.1634 40 20C40 25.4182 37.3296 30.2689 33.1483 33.4808L34.6 40L28.4 37.32C27.0096 37.7665 25.5294 38 24 38C15.1634 38 8 30.8366 8 22C8 13.1634 15.1634 4 24 4Z" fill="#7C3AED"/>
        <path d="M24 9V22L31 26" stroke="#FAF5FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="9" r="5" fill="#EA580C"/>
        <circle cx="36" cy="9" r="2.2" fill="#FFF7ED"/>
      </svg>
    ),
  },
]

const personal = [
  { label: 'Badminton', icon: '🏸', color: '#2563EB', gradient: 'from-[#2563EB] to-[#3B82F6]', desc: 'Goa University Champion 2023-24' },
  { label: 'Leadership', icon: '◈', color: '#7C3AED', gradient: 'from-[#7C3AED] to-[#A78BFA]', desc: 'Event & Team coordination' },
  { label: 'Harmonium', icon: '♪', color: '#06B6D4', gradient: 'from-[#06B6D4] to-[#22D3EE]', desc: 'National Kala Utsav · State 1st' },
  { label: 'NPTEL Learning', icon: '⌘', color: '#059669', gradient: 'from-[#059669] to-[#10B981]', desc: '8+ exams · 75%+ pass rate' },
  { label: 'Continuous Learning', icon: '∞', color: '#EA580C', gradient: 'from-[#EA580C] to-[#F97316]', desc: 'Google AI · Be10X Claude' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-6 lg:px-8"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl w-full min-w-0"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] bg-gradient-to-r from-[#F59E0B] to-[#EC4899] bg-clip-text text-transparent mb-3 break-words">
            About Me
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#141414] dark:text-white mb-4 break-words">
            A{' '}
            <span className="text-gradient-sun">
              Computer Engineering
            </span>{' '}
            foundation with a business analytics mindset.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-12 w-full min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0"
          >
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] leading-[1.8] mb-4 break-words">
              I am currently pursuing a PGDM in Big Data Analytics at Goa Institute of Management, building on my undergraduate degree in Computer Engineering from Goa College of Engineering, Goa University.
            </p>
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] leading-[1.8] break-words">
              My journey combines engineering rigor with business analytics: I write production-quality code, build Power BI dashboards, run exploratory data analysis, and design AI-powered applications — all to turn raw data into clear, actionable business decisions.
            </p>
            <div className="mt-8 pt-8 border-t border-[#E5E4E2] dark:border-[#1E1E1E] w-full min-w-0">
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background: 'linear-gradient(to bottom, #F59E0B, #EC4899, #7C3AED)' }} />
                <p className="text-sm sm:text-base font-medium text-[#141414] dark:text-white italic leading-relaxed break-words">
                  "I enjoy turning engineering code, analytical data and AI-powered tools into structured decisions that create real business impact."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A3A3A3] mb-8 break-words">Education</p>
            <div className="relative w-full min-w-0">
              <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #F59E0B, #EC4899, #7C3AED, #059669)' }} />
              <div className="flex flex-col gap-8 pl-8 w-full min-w-0">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative w-full min-w-0"
                  >
                    <div
                      className="absolute -left-8 top-1 w-3 h-3 rounded-full border-2 z-10"
                      style={{
                        backgroundColor: item.primary ? item.color : 'var(--color-bg, #FAFAF8)',
                        borderColor: item.color,
                        transform: 'translateX(-5px)',
                      }}
                    />
                    <p className="text-[11px] font-mono text-[#A3A3A3] mb-1 tracking-wider break-words">{item.years}</p>
                    <p className={`font-semibold mb-0.5 break-words ${item.primary ? 'text-sm sm:text-base text-[#141414] dark:text-white' : 'text-sm text-[#525252] dark:text-[#737373]'}`}>
                      {item.degree}
                    </p>
                    {item.institution && (
                      <p className={`text-sm mb-1 break-words ${item.primary ? 'text-[#525252] dark:text-[#A3A3A3]' : 'text-[#737373]'}`}>
                        {item.institution}
                      </p>
                    )}
                    <p className="text-xs font-semibold break-words" style={{ color: item.color }}>{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-3xl p-6 sm:p-7 md:p-10 border border-[#E5E4E2] dark:border-[#1E1E1E] overflow-hidden relative w-full min-w-0"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(236,72,153,0.05) 50%, rgba(124,58,237,0.05) 100%)' }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #F59E0B, transparent)' }} />

          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A3A3A3] mb-10 relative z-10 break-words">My Approach</p>

          <div className="hidden lg:block absolute left-14 right-14 top-24 h-[2px] z-0">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(to right, #F59E0B, #EC4899, #7C3AED, #06B6D4)', boxShadow: '0 0 12px rgba(236,72,153,0.4)' }}
            />
          </div>
          <div className="lg:hidden absolute left-8 top-24 bottom-10 w-[2px] z-0">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="absolute inset-0 rounded-full"
              style={{ background: 'linear-gradient(to bottom, #F59E0B, #EC4899, #7C3AED, #06B6D4)', boxShadow: '0 0 12px rgba(236,72,153,0.4)' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 relative z-10 w-full min-w-0">
            {approach.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group w-full min-w-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200, damping: 14 }}
                  className="hidden lg:flex absolute -top-[12px] left-0 w-7 h-7 rounded-full items-center justify-center border-2 border-white dark:border-[#141414] z-20 shadow-md flex-shrink-0"
                  style={{ backgroundColor: ['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i], boxShadow: `0 0 16px ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i]}66` }}
                >
                  <span className="text-[10px] font-bold text-white">{i + 1}</span>
                </motion.div>

                <div className="hidden lg:flex absolute top-0 left-0 w-full h-7 items-end z-0 pointer-events-none">
                  <div className="w-full h-px border-t-2 border-dashed" style={{ borderColor: ['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i] + '55' }} />
                </div>

                <div className="lg:mt-12 bg-white/60 dark:bg-[#111111]/60 backdrop-blur-sm border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 sm:p-7 h-full group-hover:border-white/50 dark:group-hover:border-[#2A2A2A] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#EC4899]/10 w-full min-w-0">
                  <div className="flex items-start justify-between mb-5 gap-2">
                    <p
                      className="text-4xl font-black tracking-tight bg-clip-text text-transparent leading-none"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i]}, ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i]}aa)`,
                        WebkitTextStroke: `0.5px ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i]}33`,
                      }}
                    >
                      {step.num}
                    </p>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: ['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i] + '18' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i]} strokeWidth="2" className="flex-shrink-0">
                        {i === 0 && <><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 10v6m11-11h-6M7 12H1" /></>}
                        {i === 1 && <><path d="M3 3v18h18" /><path d="M7 14l3-3 4 4 5-6" /></>}
                        {i === 2 && <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>}
                        {i === 3 && <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></>}
                      </svg>
                    </div>
                  </div>

                  <p
                    className="text-base sm:text-lg font-extrabold uppercase tracking-[0.14em] mb-3 break-words leading-tight"
                    style={{ color: ['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4'][i] }}
                  >
                    {step.title}
                  </p>
                  <p className="text-[14px] sm:text-[15px] text-[#525252] dark:text-[#A3A3A3] leading-relaxed font-medium break-words">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 w-full min-w-0"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A3A3A3] mb-10 break-words">What Differentiates Me</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full min-w-0">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: i === 0 ? -40 : i === 2 ? 40 : 0, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: 'easeOut' }}
                whileHover={{ y: -10, scale: 1.025 }}
                className="group relative w-full min-w-0"
              >
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${['#F59E0B', '#EC4899', '#7C3AED'][i]}, ${['#EC4899', '#7C3AED', '#06B6D4'][i]})`,
                  }}
                />
                <div className="relative bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-3xl p-8 sm:p-9 md:p-10 h-full overflow-hidden transition-all duration-500 group-hover:border-transparent dark:group-hover:border-transparent group-hover:shadow-2xl w-full min-w-0">
                  <div className={`absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-500`} style={{ background: `linear-gradient(90deg, ${['#F59E0B', '#EC4899', '#7C3AED'][i]}, ${['#EC4899', '#7C3AED', '#06B6D4'][i]})` }} />

                  <motion.div
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 flex-shrink-0"
                    style={{ backgroundColor: `rgba(${i === 0 ? '245,158,11' : i === 1 ? '236,72,153' : '124,58,237'}, 0.12)` }}
                  >
                    {d.icon}
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight break-words" style={{
                    background: `linear-gradient(90deg, ${['#F59E0B', '#EC4899', '#7C3AED'][i]}, ${['#EC4899', '#7C3AED', '#06B6D4'][i]})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}>
                    {d.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-[15px] text-[#525252] dark:text-[#A3A3A3] leading-relaxed font-medium break-words">
                    {d.body}
                  </p>

                  <div className="mt-7 pt-6 border-t border-[#F1F0EE] dark:border-[#1A1A1A]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" style={{
                      background: `linear-gradient(90deg, ${['#F59E0B', '#EC4899', '#7C3AED'][i]}, ${['#EC4899', '#7C3AED', '#06B6D4'][i]})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}>
                      Core Strength
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="flex-shrink-0">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-10 border-t border-[#E5E4E2] dark:border-[#1E1E1E] w-full min-w-0"
        >
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4 w-full min-w-0">
            <div className="w-full min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A3A3A3] mb-3 break-words">Beyond Analytics</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#141414] dark:text-white break-words leading-tight">
                The person{' '}
                <span className="text-gradient-sunset">
                  behind the numbers
                </span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 w-full min-w-0">
            {personal.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -12, scale: 1.06 }}
                className="group relative cursor-default w-full min-w-0"
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
                  style={{
                    background: `linear-gradient(135deg, ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4', '#059669'][i]}, ${['#EC4899', '#7C3AED', '#06B6D4', '#059669', '#F59E0B'][i]})`,
                  }}
                />
                <div className="relative bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-5 sm:p-6 md:p-7 h-full overflow-hidden transition-all duration-300 group-hover:border-transparent w-full min-w-0">
                  <div className={`absolute inset-x-0 bottom-0 h-0 group-hover:h-full opacity-[0.06] transition-all duration-500 ease-out`} style={{ background: `linear-gradient(to top, ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4', '#059669'][i]}, transparent)` }} />

                  <div className="relative z-10 flex flex-col items-center text-center w-full min-w-0">
                    <motion.span
                      initial={{ scale: 0.5, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 + i * 0.1, type: 'spring', stiffness: 220, damping: 12 }}
                      whileHover={{ scale: 1.25, rotate: 10 }}
                      className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-none"
                      style={{ color: ['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4', '#059669'][i], textShadow: `0 4px 20px ${['#F59E0B', '#EC4899', '#7C3AED', '#06B6D4', '#059669'][i]}33` }}
                    >
                      {item.icon}
                    </motion.span>

                    <p className="text-sm sm:text-base md:text-lg font-bold text-[#141414] dark:text-white mb-2 tracking-tight break-words text-center">
                      {item.label}
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-[13px] text-[#737373] dark:text-[#8A8A8A] leading-snug font-medium break-words text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
