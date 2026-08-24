import { motion } from 'framer-motion'

const education = [
  { years: '2026 – 2028', degree: 'PGDM – Big Data Analytics', institution: 'Goa Institute of Management, Goa', detail: 'Currently Pursuing', metric: 'PGDM', icon: '🎯', primary: true, c1: '#2563EB', c2: '#7C3AED' },
  { years: '2022 – 2026', degree: 'B.E. Computer Engineering', institution: 'Goa College of Engineering · Goa University', detail: '8.37 CGPA (out of 10) till 7th Sem', metric: '8.37', icon: '⚡', primary: true, c1: '#7C3AED', c2: '#EC4899' },
  { years: '2021 – 2022', degree: 'HSC – Science (PCM + CS)', institution: 'Purushottam Walawalkar Higher Secondary School', detail: '78.67%', metric: '78.67%', icon: '🔬', primary: false, c1: '#06B6D4', c2: '#22D3EE' },
  { years: '2019 – 2020', degree: 'SSC – General', institution: 'Saraswat Vidyalaya High School (Goa Board)', detail: '91.5%', metric: '91.5%', icon: '📚', primary: false, c1: '#059669', c2: '#10B981' },
]

const approach = [
  { num: '01', title: 'Understand the business question', body: 'Clarify the decision stakeholders need to make, not just the data they have.', color: '#F59E0B', icon: '🧭' },
  { num: '02', title: 'Explore & validate data', body: 'Run EDA, clean the noise, surface patterns that will survive a real test.', color: '#EC4899', icon: '🔍' },
  { num: '03', title: 'Model & visualise', body: 'Write the DAX measure, fit the model, build the dashboard the end-user actually uses.', color: '#7C3AED', icon: '📊' },
  { num: '04', title: 'Recommend with impact', body: 'Translate numbers into action — with evidence, limits, and measurable outcomes.', color: '#06B6D4', icon: '🚀' },
]

const differentiators = [
  {
    title: 'Computer Engineering Foundation',
    body: 'C, C++, Python, OpenCV, data structures & algorithms — code fluency that makes my data pipelines production-ready, not notebook-only.',
    tag: 'Code → Insights',
    c1: '#F59E0B', c2: '#EC4899',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 22L30 14L32.8 11.2L42.4 20.8C42.8 21.2 42.8 21.8 42.4 22.2L32.8 31.8L30 29L38 22Z" fill="#F59E0B"/>
        <path d="M10 26L18 34L15.2 36.8L5.6 27.2C5.2 26.8 5.2 26.2 5.6 25.8L15.2 16.2L18 19L10 26Z" fill="#EC4899"/>
        <rect x="22" y="9" width="4.5" height="30" rx="2" fill="#FBBF24" transform="rotate(7 22 9)"/>
      </svg>
    ),
  },
  {
    title: 'Data & Visualisation',
    body: 'Power BI dashboards, DAX measures, statistical analysis, EDA and data storytelling across real retail and marketing datasets.',
    tag: 'Power BI · DAX · EDA',
    c1: '#059669', c2: '#06B6D4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="36" width="38" height="4" rx="1.3" fill="#059669" opacity="0.8"/>
        <rect x="9" y="17" width="7" height="19" rx="1.8" fill="#34D399"/>
        <rect x="20" y="6" width="7" height="30" rx="1.8" fill="#06B6D4"/>
        <rect x="31" y="21" width="7" height="15" rx="1.8" fill="#0891B2"/>
        <circle cx="12.5" cy="20" r="1.6" fill="#ECFDF5"/>
        <circle cx="23.5" cy="9" r="1.6" fill="#CFFAFE"/>
        <circle cx="34.5" cy="24" r="1.6" fill="#ECFEFF"/>
      </svg>
    ),
  },
  {
    title: 'AI & Full-Stack Delivery',
    body: 'From Gemini API-powered briefings to React/Flask apps and OpenCV image processing — I ship end-to-end, not just slide decks.',
    tag: 'Gemini · React · Flask',
    c1: '#7C3AED', c2: '#EA580C',
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C32.8366 4 40 11.1634 40 20C40 25.4182 37.3296 30.2689 33.1483 33.4808L34.6 40L28.4 37.32C27.0096 37.7665 25.5294 38 24 38C15.1634 38 8 30.8366 8 22C8 13.1634 15.1634 4 24 4Z" fill="#7C3AED"/>
        <path d="M24 9V22L31 26" stroke="#FAF5FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="9" r="5" fill="#EA580C"/>
        <circle cx="36" cy="9" r="2.2" fill="#FFF7ED"/>
      </svg>
    ),
  },
]

const personal = [
  { label: 'Badminton', icon: '🏸', stat: '🥇 Goa University Champion 2023-24', c1: '#2563EB', c2: '#3B82F6' },
  { label: 'Leadership', icon: '◈', stat: 'Events, teams and coordination at scale', c1: '#7C3AED', c2: '#A78BFA' },
  { label: 'Harmonium', icon: '♪', stat: '🏆 National Kala Utsav · State 1st', c1: '#06B6D4', c2: '#22D3EE' },
  { label: 'NPTEL Courses', icon: '⌘', stat: '8+ certified · 75%+ pass rate', c1: '#059669', c2: '#10B981' },
  { label: 'Continuous Learning', icon: '∞', stat: 'Google AI Essentials · Be10X Claude', c1: '#EA580C', c2: '#F97316' },
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-30 pointer-events-none"/>
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[110px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #F59E0B, transparent 60%)' }} />
      <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[110px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #7C3AED, transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 section-eyebrow mb-5"
                   style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(236,72,153,0.1))', color: '#EC4899', border: '1px solid rgba(236,72,153,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#EC4899' }}/>
                About
              </div>
              <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] md:text-[3.9rem] font-bold tracking-[-0.03em] text-[#0B0B12] dark:text-white leading-[1.05]">
                Engineer by degree,
                <br/>
                <span className="text-gradient-sunset">analyst by choice,</span>
                <br/>
                business thinker by design.
              </h2>
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#5A5A6D] dark:text-[#9A9AB0] leading-relaxed md:max-w-sm md:text-right md:pl-8 md:border-l border-black/5 dark:border-white/10">
              Goa → Mangalore → Goa. Clean-code habits from Computer Engineering at GEC, now pairing them with PGDM Big Data Analytics at GIM to deliver answers a boardroom cares about.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start mb-24">
          <Reveal>
            <div className="relative p-7 sm:p-10 rounded-[2rem] bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.07] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #F59E0B, #EC4899, #7C3AED, #06B6D4)' }} />
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 blur-3xl"
                   style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}/>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { k: 'Languages', v: '5+', note: 'C, C++, Python, SQL, JS', color: '#F59E0B' },
                  { k: 'Dashboards', v: '4+', note: 'Power BI · DAX end-to-end', color: '#7C3AED' },
                  { k: 'CGPA · B.E.', v: '8.37', note: 'Goa College of Engineering', color: '#06B6D4' },
                ].map((kpi, i) => (
                  <div key={kpi.k} className="relative">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: kpi.color + 'CC' }}>{kpi.k}</p>
                    <p className="font-display font-black text-2xl sm:text-3xl leading-none mb-1.5" style={{
                      background: `linear-gradient(135deg, ${kpi.color}, ${['#EC4899','#06B6D4','#059669'][i]})`,
                      WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                    }}>{kpi.v}</p>
                    <p className="text-[10.5px] leading-snug text-[#737373] dark:text-[#8C8CA3]">{kpi.note}</p>
                  </div>
                ))}
              </div>

              <p className="text-[15px] sm:text-base text-[#3F3F50] dark:text-[#B5B5CC] leading-relaxed mb-5">
                I'm currently pursuing my <b className="text-[#141414] dark:text-white">PGDM in Big Data Analytics</b> at Goa Institute of Management, built on a Computer Engineering degree from Goa College of Engineering (Goa University).
              </p>
              <p className="text-[15px] sm:text-base text-[#3F3F50] dark:text-[#B5B5CC] leading-relaxed mb-8">
                The sweet spot I chase: <b>engineering-grade quality</b> on the code side with <b>business clarity</b> on the decision side. From cleaning a retail dataset to writing the DAX, building the Power BI dashboard and presenting the recommendation — one owner, no handoffs.
              </p>

              <div className="relative pl-6 sm:pl-7 border-l-2 border-dashed border-[#EC4899]/40">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full flex items-center justify-center"
                     style={{ background: 'linear-gradient(135deg, #F59E0B, #EC4899)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white"/>
                </div>
                <p className="font-display text-[15px] sm:text-base italic leading-relaxed text-[#262634] dark:text-[#C8C8E0]">
                  "Engineering code. Analytical data. AI-powered tools. Converted into structured decisions that create measurable business impact."
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-7">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent"/>
                <span className="mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#7C3AED]">Education Track</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent"/>
              </div>
              <div className="relative">
                <div className="absolute left-[19px] sm:left-[21px] top-2 bottom-2 w-0.5 rounded-full"
                     style={{ background: 'linear-gradient(to bottom, #F59E0B, #EC4899, #7C3AED, #06B6D4, #059669)' }} />
                <div className="space-y-4 sm:space-y-5">
                  {education.map((e, i) => (
                    <motion.div
                      key={e.degree}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="relative pl-14 sm:pl-16"
                    >
                      <div className="absolute left-0 top-1 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-white dark:border-[#0D0D0D] shadow-md"
                           style={{ background: `linear-gradient(135deg, ${e.c1}, ${e.c2})` }}>
                        <span className="text-[15px] sm:text-base leading-none">{e.icon}</span>
                      </div>
                      <div className={`p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm border border-black/[0.05] dark:border-white/[0.07] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${e.primary ? 'sm:pr-4' : 'opacity-95'}`}
                           style={e.primary ? {
                             boxShadow: `0 6px 24px ${e.c1}18`,
                             borderColor: `${e.c1}22`,
                           } : {}}>
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <div>
                            <p className="mono text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: e.c2 }}>{e.years}</p>
                            <h3 className={`font-display font-bold leading-tight mt-1 ${e.primary ? 'text-[15px] sm:text-base text-[#141414] dark:text-white' : 'text-[13.5px] text-[#2B2B38] dark:text-[#D6D6E8]'}`}>{e.degree}</h3>
                          </div>
                          <div className="shrink-0 px-2.5 py-1 rounded-xl flex items-center justify-center min-w-[56px] text-center"
                               style={{ background: `linear-gradient(135deg, ${e.c1}18, ${e.c2}18)`, border: `1px solid ${e.c2}30` }}>
                            <span className="font-display font-black text-[13px] leading-none" style={{
                              background: `linear-gradient(135deg, ${e.c1}, ${e.c2})`,
                              WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                            }}>{e.metric}</span>
                          </div>
                        </div>
                        <p className="text-[12.5px] text-[#5A5A6D] dark:text-[#9A9AB0] leading-snug mb-1">{e.institution}</p>
                        <p className="text-[11.5px] font-semibold" style={{ color: e.c2 }}>→ {e.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12 mb-24"
               style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(236,72,153,0.05) 40%, rgba(124,58,237,0.05) 70%, rgba(6,182,212,0.06) 100%)', border: '1px solid rgba(124,58,237,0.08)' }}>
            <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none"/>
            <div className="absolute -top-20 right-0 w-64 h-64 rounded-full opacity-25 blur-3xl"
                 style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}/>
            <div className="absolute -bottom-16 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
                 style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }}/>

            <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <p className="mono text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#7C3AED' }}>// Methodology</p>
                <h3 className="font-display text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] font-bold text-[#0B0B12] dark:text-white leading-[1.1]">
                  A <span className="text-gradient-sunset">4-step framework</span>
                  <br/>behind every project.
                </h3>
              </div>
              <p className="text-[14px] text-[#5A5A6D] dark:text-[#9A9AB0] leading-relaxed md:max-w-xs md:text-right">
                Outputs ≠ outcomes. I trace every step back to the original business question.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="hidden lg:block absolute left-12 right-12 top-16 h-[3px] rounded-full"
                   style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.6), rgba(236,72,153,0.5), rgba(124,58,237,0.5), rgba(6,182,212,0.6))' }}/>

              {approach.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="relative group h-full flex"
                >
                  <div className="hidden lg:flex absolute -top-[44px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl items-center justify-center border-4 border-white dark:border-[#0D0D0D] z-20 shadow-lg"
                       style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}>
                    <span className="text-xl leading-none">{step.icon}</span>
                  </div>
                  <div className={`relative flex flex-col rounded-2xl overflow-hidden p-6 sm:p-7 border bg-white/75 dark:bg-white/[0.05] backdrop-blur-sm transition-all duration-400 group-hover:shadow-2xl group-hover:border-white/80 dark:group-hover:border-white/15 w-full h-full`}
                       style={{ borderColor: `${step.color}22`, boxShadow: `0 8px 28px ${step.color}12` }}>
                    <div className="flex items-start justify-between mb-5">
                      <span className="font-display font-black text-4xl leading-none" style={{
                        background: `linear-gradient(180deg, ${step.color}, ${step.color}66)`,
                        WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                      }}>{step.num}</span>
                      <div className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                           style={{ background: `${step.color}18` }}>{step.icon}</div>
                    </div>
                    <h4 className="font-display font-bold text-[15px] sm:text-base mb-2" style={{ color: step.color }}>
                      {step.title}
                    </h4>
                    <p className="text-[13px] sm:text-[14px] text-[#555566] dark:text-[#A5A5BD] leading-relaxed flex-1">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 section-eyebrow mb-4"
                     style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED', border: '1px solid rgba(124,58,237,0.22)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"/>
                  Core Strengths
                </div>
                <h3 className="font-display text-[1.8rem] sm:text-[2.4rem] md:text-[3rem] font-bold text-[#0B0B12] dark:text-white leading-[1.08] max-w-2xl">
                  What sets me apart: <span className="text-gradient-ocean">three skills in one person.</span>
                </h3>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {differentiators.map((d, i) => (
                <motion.article
                  key={d.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-[1.8rem] p-7 sm:p-8 overflow-hidden border border-[#E5E4E2] dark:border-[#1E1E24] bg-gradient-to-br from-white via-white to-[#FAFAF8] dark:from-[#0F0F12] dark:via-[#131318] dark:to-[#0B0B0F]"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r`} style={{ backgroundImage: `linear-gradient(90deg, ${d.c1}, ${d.c2})` }} />
                  <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none"
                       style={{ background: `radial-gradient(circle, ${d.c2}55, transparent)` }}/>
                  <div className="absolute top-6 right-6 mono text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full"
                       style={{ background: `${d.c1}14`, color: d.c2, border: `1px solid ${d.c2}30` }}>
                    {d.tag}
                  </div>

                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-7 shadow-xl"
                       style={{
                         background: `linear-gradient(135deg, ${d.c1}26, ${d.c2}26)`,
                         border: `1px solid ${d.c2}35`,
                         boxShadow: `0 10px 30px ${d.c1}25, inset 0 1px 0 ${d.c1}20`,
                       }}>
                    <div className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                         style={{ background: `radial-gradient(circle at 30% 20%, ${d.c1}55, transparent 60%)` }}/>
                    <motion.div whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }} transition={{ duration: 0.5 }} className="relative z-10">
                      {d.icon}
                    </motion.div>
                  </div>

                  <h4 className="relative font-display text-xl sm:text-2xl font-bold mb-4 leading-tight" style={{
                    background: `linear-gradient(135deg, ${d.c1}, ${d.c2})`,
                    WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                  }}>
                    {d.title}
                  </h4>
                  <p className="relative text-[14px] sm:text-[15px] leading-relaxed text-[#4A4A5A] dark:text-[#B4B4C6]">
                    {d.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative pt-10">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"/>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
              <div>
                <p className="mono text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#EC4899' }}>// Beyond Work</p>
                <h3 className="font-display text-[1.8rem] sm:text-[2.3rem] font-bold text-[#0B0B12] dark:text-white leading-tight">
                  The <span className="text-gradient-sunset">person</span> behind the numbers.
                </h3>
              </div>
              <p className="text-[13px] text-[#656578] dark:text-[#8C8CA3] md:max-w-xs md:text-right">
                Balance matters. Competitive sports, music and certifications are part of how I stay sharp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {personal.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.025 }}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                  style={{
                    background: `linear-gradient(160deg, ${p.c1}12 0%, ${p.c2}08 55%, rgba(255,255,255,0.4) 100%)`,
                    boxShadow: `0 10px 32px ${p.c1}1C, inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 ${p.c2}0A`,
                    border: `1px solid ${p.c2}2A`,
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none"
                       style={{ background: `radial-gradient(circle at 100% 0%, ${p.c2}33, transparent 55%)` }} />
                  <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full opacity-0 group-hover:opacity-[0.18] blur-2xl transition-all duration-700 pointer-events-none"
                       style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} />

                  <div className="relative p-5 sm:p-6 lg:p-6 flex flex-col gap-4 h-full min-h-[190px]">
                    <div className="flex items-start justify-between gap-3 mb-0.5">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1.5 rounded-2xl opacity-30 blur-md group-hover:opacity-55 transition-opacity duration-500"
                             style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }} />
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-[1.7rem]"
                             style={{
                               background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`,
                               color: 'white',
                               boxShadow: `0 10px 24px ${p.c1}4A, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.12)`,
                             }}>
                          <div className="absolute inset-0 opacity-40 rounded-2xl"
                               style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.65), transparent 55%)' }} />
                          <span className="relative z-10 drop-shadow-md">{p.icon}</span>
                        </div>
                      </div>
                      <span className="mono text-[10px] font-black px-2.5 py-1 rounded-lg shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${p.c1}22, ${p.c2}16)`,
                              color: p.c2,
                              border: `1px solid ${p.c2}33`,
                              boxShadow: `inset 0 1px 0 ${p.c1}14`,
                            }}>
                        0{i + 1} · SIGNALS
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 min-h-[3.5rem] justify-start">
                      <h4 className="font-display font-black text-[1.08rem] sm:text-[1.18rem] tracking-tight leading-tight"
                          style={{
                            background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`,
                            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                          }}>
                        {p.label}
                      </h4>
                      <p className="text-[12px] sm:text-[12.5px] leading-snug text-[#4A4A55] dark:text-[#A0A0B8] font-semibold">
                        {p.stat}
                      </p>
                    </div>

                    <div className="mt-auto pt-1 flex items-center justify-between relative">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <div key={j} className="w-2 h-2 rounded-full transition-all duration-500"
                               style={{
                                 background: j < 5 - Math.min(i, 2)
                                   ? `linear-gradient(135deg, ${p.c1}, ${p.c2})`
                                   : 'rgba(0,0,0,0.06)',
                                 opacity: j < 5 - Math.min(i, 2) ? 1 : 0.4,
                                 boxShadow: j < 5 - Math.min(i, 2) ? `0 0 8px ${p.c2}66` : 'none',
                               }} />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 mono text-[9.5px] font-black uppercase tracking-[0.18em]"
                           style={{ color: p.c2, opacity: 0.9 }}>
                        {i === 0 ? 'COMPETITIVE' : i === 1 ? 'SOFT SKILL' : i === 2 ? 'CREATIVE' : i === 3 ? 'RIGOUR' : 'GROWTH'}
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full group-hover:translate-x-1 transition-transform duration-400 shadow-md"
                              style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})`, color: 'white', boxShadow: `0 4px 12px ${p.c2}44` }}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
