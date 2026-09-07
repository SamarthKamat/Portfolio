import { motion } from 'framer-motion'
import nptelEnthusiastImg from '../../NPTEL Enthusiast.png'
import nptelMotivatedImg from '../../NPTEL MOTIVATED LEARNER.png'
import scholarshipPdf from '../../../Scholarship_Proof.pdf'

const proficiency = [
  { name: 'Python · Pandas · NumPy', level: 92, sub: 'EDA · Data wrangling · ML pipelines', c1: '#2563EB', c2: '#7C3AED' },
  { name: 'Power BI · DAX', level: 88, sub: 'Slicers · KPI cards · Dashboards · Publishing', c1: '#F59E0B', c2: '#EA580C' },
  { name: 'SQL & Data Querying', level: 80, sub: 'Joins · window functions · aggregations', c1: '#06B6D4', c2: '#059669' },
  { name: 'Machine Learning (Scikit-learn)', level: 78, sub: 'Classification · Regression · Trees · Eval', c1: '#EC4899', c2: '#7C3AED' },
  { name: 'Neural Networks (Keras/TensorFlow)', level: 74, sub: 'LSTM · Speech models · Stacked architectures', c1: '#7C3AED', c2: '#EA580C' },
  { name: 'React · Flask · Full Stack', level: 70, sub: 'UI components · APIs · Deployment-ready apps', c1: '#059669', c2: '#06B6D4' },
  { name: 'C / C++ · DSA Foundations', level: 82, sub: 'Engineering foundations · OpenCV projects', c1: '#EA580C', c2: '#F59E0B' },
  { name: 'Advanced Excel · LaTeX · Decks', level: 86, sub: 'Formulas · Pivots · Consulting-style slides', c1: '#10B981', c2: '#06B6D4' },
]

const groups = [
  {
    title: 'Data Analytics & BI',
    c1: '#2563EB', c2: '#7C3AED',
    icon: '📊',
    items: [
      { name: 'Exploratory Data Analysis', tag: 'Pandas · Python' },
      { name: 'Statistical Analysis & Inference', tag: 'Hypothesis · Tests' },
      { name: 'Data Cleaning & Prep', tag: 'Wrangling' },
      { name: 'KPI / Metric Design', tag: 'BI · Biz' },
      { name: 'Power BI · DAX · Slicers', tag: 'Dashboards' },
      { name: 'Business Analytics', tag: 'Storytelling' },
    ],
  },
  {
    title: 'Programming & Engineering',
    c1: '#059669', c2: '#06B6D4',
    icon: '⚡',
    items: [
      { name: 'Python', tag: 'Core' },
      { name: 'Pandas · NumPy · Matplotlib', tag: 'SciPy stack' },
      { name: 'Scikit-learn', tag: 'ML toolkit' },
      { name: 'OpenCV', tag: 'Image processing' },
      { name: 'C & C++', tag: 'Engg. funda' },
      { name: 'SQL', tag: 'Joins · Window Fn' },
      { name: 'JavaScript · R basics', tag: 'Supporting' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    c1: '#EC4899', c2: '#7C3AED',
    icon: '🧠',
    items: [
      { name: 'Gemini API · Prompt Engineering', tag: 'GenAI' },
      { name: 'TensorFlow / Keras', tag: 'Neural Nets' },
      { name: 'LSTM · Stacked Nets', tag: 'Speech · NLP' },
      { name: 'Audio Feature Extraction', tag: 'Audio feat.' },
      { name: 'ML Fundamentals', tag: 'Conceptual' },
      { name: 'Regression · Classification', tag: 'Classic' },
      { name: 'Decision Trees · Forests', tag: 'Tabular' },
      { name: 'Forecasting · Evaluation', tag: 'Time · Metrics' },
    ],
  },
  {
    title: 'Web & Full-Stack Delivery',
    c1: '#F59E0B', c2: '#EC4899',
    icon: '🚀',
    items: [
      { name: 'React · UI components', tag: 'Frontend' },
      { name: 'Flask · REST APIs', tag: 'Backend' },
      { name: 'OpenCV · Image Pipelines', tag: 'Processing' },
      { name: 'GitHub · Version Control', tag: 'DevOps' },
      { name: 'Vibe Coding / Rapid Prototyping', tag: 'MVP fast' },
      { name: 'Text-to-Speech Systems', tag: 'Audio apps' },
    ],
  },
]

const certifications = [
  { name: 'Google AI Essentials (Coursera) — 5-course Specialisation', year: '2026', tags: ['Prompt Eng.', 'AI', 'Productivity'], badge: '🎓', c1: '#2563EB', c2: '#06B6D4', status: 'Verified · Active', issuer: 'Coursera · Google', linkType: 'external', link: 'https://coursera.org/share/8ee860a09d5f4987c0efd0021b7e552e' },
  { name: 'Be10X AI Tools & Claude Workshop', year: '2026', tags: ['Presentations', 'Data', 'Debugging'], badge: '⚡', c1: '#7C3AED', c2: '#EC4899', status: 'Workshop Certified', issuer: 'Be10X', linkType: 'external', link: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971643660' },
  { name: 'NPTEL Enthusiast (IIT Madras)', year: '2024', tags: ['8+ Exams', 'Consistent Performance'], badge: '🏅', c1: '#059669', c2: '#10B981', status: '8+ Courses Cleared', issuer: 'IIT Madras · NPTEL', linkType: 'image', link: nptelEnthusiastImg },
  { name: 'NPTEL Motivated Learner (IIT Madras)', year: '2025', tags: ['4 Semesters', 'Consistent Performance'], badge: '🎖️', c1: '#EA580C', c2: '#F59E0B', status: '4-Sem Consistency', issuer: 'IIT Madras · NPTEL', linkType: 'image', link: nptelMotivatedImg },
  { name: 'Government Scholarship — Indian Classical Music', year: '2019–21', tags: ['₹48K Overall', '2 Years'], badge: '🏆', c1: '#06B6D4', c2: '#7C3AED', status: 'Talent Grant Awarded', issuer: 'Govt. of India · CCRT', linkType: 'pdf', link: scholarshipPdf },
]

const stack = [
  { name: 'Python', note: 'EDA · ML · Pipelines', c1: '#2563EB', c2: '#06B6D4' },
  { name: 'Power BI', note: 'Dashboards · DAX', c1: '#F59E0B', c2: '#EA580C' },
  { name: 'TensorFlow', note: 'LSTM · Speech', c1: '#EC4899', c2: '#7C3AED' },
  { name: 'React', note: 'Web UI · Portfolios', c1: '#06B6D4', c2: '#059669' },
  { name: 'Flask', note: 'Back-end · APIs', c1: '#059669', c2: '#10B981' },
  { name: 'Gemini API', note: 'AI · Gen Apps', c1: '#7C3AED', c2: '#EC4899' },
  { name: 'SQL', note: 'Query · Reporting', c1: '#EA580C', c2: '#F59E0B' },
  { name: 'Excel+', note: 'Decks · LaTeX', c1: '#10B981', c2: '#06B6D4' },
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

function openProof(c) {
  if (!c.link) return
  if (c.linkType === 'external') {
    window.open(c.link, '_blank', 'noopener,noreferrer')
  } else {
    window.open(c.link, '_blank', 'noopener,noreferrer')
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines opacity-20 pointer-events-none"/>
      <div className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }}/>
      <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, #EC4899, transparent 60%)' }}/>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 section-eyebrow mb-5"
                   style={{ background: 'rgba(37,99,235,0.1)', color: '#3B82F6', border: '1px solid rgba(37,99,235,0.22)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"/>
                Skills & Certifications
              </div>
              <h2 className="font-display text-[2.4rem] sm:text-[3.2rem] md:text-[3.9rem] font-bold text-[#0B0B12] dark:text-white leading-[1.08] tracking-[-0.03em] max-w-3xl">
                <span className="text-gradient-ocean">Measured proficiencies</span>,
                <br/>grouped skills, <span className="text-gradient-sunset">proven certifications.</span>
              </h2>
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#5A5A6D] dark:text-[#9A9AB0] md:max-w-sm md:text-right leading-relaxed">
              Not a chip wall — recruiter-friendly: quick scan of how strong I am at each layer, followed by supporting details.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 mb-20">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden p-7 sm:p-9 border border-[#E5E4E2] dark:border-[#1E1E24] bg-gradient-to-br from-white via-white to-[#FAFAF8] dark:from-[#0F0F12] dark:via-[#131318] dark:to-[#0B0B0F]">
              <div className="absolute -top-20 -left-16 w-56 h-56 rounded-full opacity-25 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}/>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-22 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }}/>

              <div className="relative flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#7C3AED' }}>// Core Proficiency</p>
                  <h3 className="font-display font-bold text-[1.5rem] sm:text-[1.9rem] text-[#0B0B12] dark:text-white leading-tight">
                    Where I am strongest — ranked groups.
                  </h3>
                </div>
              </div>

              <div className="relative space-y-3.5">
                {proficiency.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-white to-[#FAFAF8] dark:from-[#131318] dark:to-[#0F0F12] border border-[#E5E4E2] dark:border-[#1A1A20] hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden"
                    style={{
                      boxShadow: `inset 0 1px 0 ${s.c1}22, 0 4px 14px ${s.c1}08`,
                    }}
                  >
                    <div className="absolute -top-16 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.12] blur-2xl transition-opacity duration-600 pointer-events-none"
                         style={{ background: `radial-gradient(circle, ${s.c2}, transparent 60%)` }} />
                    <div className="flex items-start gap-3 mb-3 relative z-10">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap mb-1">
                          <span className="mono text-[9.5px] font-bold px-2 py-0.5 rounded-md flex items-center justify-center min-w-[32px]"
                                style={{ background: `linear-gradient(135deg, ${s.c1}, ${s.c2})`, color: 'white', boxShadow: `0 4px 10px ${s.c1}35` }}>L{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                          <p className="font-display font-bold text-[14px] sm:text-[15px] text-[#141414] dark:text-white leading-tight truncate">{s.name}</p>
                        </div>
                        <p className="text-[11.5px] text-[#656578] dark:text-[#9090A8] mt-0.5 ml-0 sm:ml-[34px]">{s.sub}</p>
                      </div>
                    </div>
                    <div className="relative h-2.5 sm:h-3 rounded-full overflow-hidden bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.03] dark:border-white/[0.04] relative z-10">
                      <motion.div
                        key={`bar-${s.name}-${s.level}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${s.c1}, ${s.c2})`,
                          boxShadow: `0 0 16px ${s.c2}55`,
                        }}
                      >
                        <div className="absolute inset-0 opacity-50"
                             style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)' }} />
                        <div className="absolute right-0 top-0 bottom-0 w-6 opacity-70"
                             style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.45))' }} />
                      </motion.div>
                    </div>
                    <div className="flex items-center mt-2 relative z-10">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <div key={j} className="w-1.5 h-1.5 rounded-full transition-all"
                               style={{
                                 background: j < Math.ceil(s.level / 20)
                                   ? `linear-gradient(135deg, ${s.c1}, ${s.c2})`
                                   : 'rgba(0,0,0,0.06)',
                                 opacity: j < Math.ceil(s.level / 20) ? 1 : 0.5,
                                 boxShadow: j < Math.ceil(s.level / 20) ? `0 0 6px ${s.c2}55` : 'none',
                               }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 h-full">
              <div className="relative rounded-[1.8rem] overflow-hidden p-6 sm:p-7 border border-[#E5E4E2] dark:border-[#1E1E24] bg-gradient-to-br from-white via-white to-[#FAFAF8] dark:from-[#0F0F12] dark:via-[#131318] dark:to-[#0B0B0F]">
                <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full opacity-25 blur-3xl pointer-events-none"
                     style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}/>
                <div className="flex items-center justify-between gap-3 mb-5 relative">
                  <div>
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: '#7C3AED' }}>Stack</p>
                    <h3 className="font-display font-bold text-[15px] sm:text-base text-[#141414] dark:text-white leading-tight">Daily-driver tools.</h3>
                  </div>
                  <div className="flex -space-x-2">
                    {stack.slice(0, 4).map((t, i) => (
                      <div key={t.name} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white border-2 border-white dark:border-[#0D0D0D] shadow"
                           style={{ background: `linear-gradient(135deg, ${t.c1}, ${t.c2})`, zIndex: 4 - i }}>
                        {t.name[0]}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 relative">
                  {stack.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      whileHover={{ y: -3 }}
                      className="group relative rounded-2xl p-3 bg-gradient-to-br from-white to-[#FAFAF8] dark:from-[#131318] dark:to-[#0F0F12] border border-[#E5E4E2] dark:border-[#1A1A20] transition-all hover:shadow-lg"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-[11px] text-white shrink-0 shadow-sm"
                             style={{ background: `linear-gradient(135deg, ${t.c1}, ${t.c2})` }}>
                          {t.name[0]}
                        </div>
                        <div className="min-w-0">
                          <p className="font-display font-bold text-[13px] text-[#141414] dark:text-white leading-tight truncate">{t.name}</p>
                          <p className="text-[10.5px] text-[#656578] dark:text-[#9090A8] leading-tight mt-0.5 truncate">{t.note}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[1.8rem] overflow-hidden p-6 sm:p-7 border border-[#E5E4E2] dark:border-[#1E1E24] bg-gradient-to-br from-white via-white to-[#FAFAF8] dark:from-[#0F0F12] dark:via-[#131318] dark:to-[#0B0B0F]">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-25 blur-3xl pointer-events-none"
                     style={{ background: 'radial-gradient(circle, #059669, transparent)' }}/>
                <div className="flex items-center gap-2 mb-3 relative">
                  <span className="text-xl leading-none">💡</span>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: '#059669' }}>Analytics Fluency</p>
                </div>
                <h3 className="font-display font-bold text-[15px] sm:text-base text-[#0B0B12] dark:text-white mb-4 leading-snug relative">
                  Speak the language of data AND the business.
                </h3>
                <div className="grid grid-cols-2 gap-3 relative">
                  {[
                    ['Speaks', 'Management Jargon', '🎯'],
                    ['Writes', 'Python / DAX / SQL', '⌨️'],
                    ['Designs', 'Power BI Dashboards', '📈'],
                    ['Presents', 'Insights · Stories', '🎤'],
                  ].map(([verb, noun, ico], i) => (
                    <div key={verb + noun} className="rounded-xl p-3 bg-gradient-to-br from-white to-[#FAFAF8] dark:from-[#131318] dark:to-[#0F0F12] border border-[#E5E4E2] dark:border-[#1A1A20]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base leading-none">{ico}</span>
                        <span className="mono text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: ['#2563EB', '#7C3AED', '#059669', '#EA580C'][i] }}>{verb}</span>
                      </div>
                      <p className="text-[12px] font-semibold text-[#141414] dark:text-white leading-tight">{noun}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-7">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent"/>
              <span className="mono text-[10.5px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{ background: 'rgba(236,72,153,0.08)', color: '#EC4899', border: '1px solid rgba(236,72,153,0.2)' }}>
                · Grouped Skill Domains ·
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {groups.map((g, i) => (
                <motion.article
                  key={g.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[1.6rem] overflow-hidden p-6 sm:p-7 bg-white/65 dark:bg-white/[0.04] backdrop-blur-xl border border-black/[0.05] dark:border-white/[0.07] transition-all duration-400"
                  style={{ boxShadow: `0 8px 28px ${g.c1}12` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px]" style={{ background: `linear-gradient(90deg, ${g.c1}, ${g.c2})` }}/>
                  <div className="absolute -right-14 -top-14 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none"
                       style={{ background: `radial-gradient(circle, ${g.c2}, transparent)` }}/>
                  <div className="relative flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                           style={{
                             background: `linear-gradient(135deg, ${g.c1}18, ${g.c2}22)`,
                             border: `1px solid ${g.c2}22`,
                           }}>
                        {g.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[16px] sm:text-lg text-[#0B0B12] dark:text-white leading-tight" style={{
                          background: `linear-gradient(90deg, ${g.c1}, ${g.c2})`,
                          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                        }}>{g.title}</h3>
                        <p className="mono text-[10px] font-bold uppercase tracking-[0.16em] mt-1 text-[#737373] dark:text-[#8C8CA3]">{g.items.length} skills</p>
                      </div>
                    </div>
                    <span className="mono text-[10px] font-bold px-2 py-1 rounded-md"
                          style={{ background: `${g.c1}14`, color: g.c2 }}>
                      ✓ Verified
                    </span>
                  </div>
                  <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {g.items.map((it) => (
                      <div key={it.name} className="group/item flex items-center gap-2.5 rounded-xl px-3 py-2.5 bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05] transition-all hover:border-transparent hover:shadow-sm"
                           style={{}}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `linear-gradient(135deg, ${g.c1}, ${g.c2})` }}/>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12.5px] font-semibold text-[#141414] dark:text-white leading-tight truncate">{it.name}</p>
                        </div>
                        <span className="mono text-[9.5px] font-bold px-1.5 py-0.5 rounded"
                              style={{ background: `${g.c1}12`, color: g.c2 }}>{it.tag}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
              <div>
                <p className="mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#7C3AED' }}>// Verified Credentials</p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-[2.8rem] text-[#0B0B12] dark:text-white leading-tight">
                  Certifications <span className="text-gradient-sun">& scholarships.</span>
                </h3>
              </div>
              <p className="text-[13px] text-[#5A5A6D] dark:text-[#9A9AB0] md:max-w-xs md:text-right">
                Click-worthy badges recruiters notice.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
              {certifications.map((c, i) => (
                <motion.article
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.07 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, scale: 1.003 }}
                  onClick={() => openProof(c)}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-[1.5rem] border border-white/60 dark:border-white/[0.06] bg-gradient-to-br from-white/90 via-white/75 to-white/55 dark:from-[#12121A]/90 dark:via-[#0F0F16]/80 dark:to-[#0B0B12]/70 backdrop-blur-xl transition-all duration-500 cursor-pointer"
                  style={{
                    boxShadow: `0 10px 30px ${c.c1}15, inset 0 1px 0 rgba(255,255,255,0.7)`,
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${c.c1}, ${c.c2})` }} />
                  <div className={`absolute -top-24 ${i % 2 === 0 ? '-right-24' : '-left-24'} w-72 h-72 rounded-full opacity-0 group-hover:opacity-[0.12] blur-3xl transition-all duration-700 pointer-events-none`}
                       style={{ background: `radial-gradient(circle, ${c.c2}, transparent 60%)` }} />
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.04] pointer-events-none"
                       style={{ background: `radial-gradient(circle at top right, ${c.c2}, transparent 70%)` }} />

                  <div className="relative p-5 sm:p-6 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 lg:gap-8">
                    <div className="relative shrink-0 sm:-ml-1 sm:-mt-1">
                      <div className="absolute -inset-2 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                           style={{ background: `linear-gradient(135deg, ${c.c1}, ${c.c2})` }} />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[1.4rem] flex items-center justify-center text-3xl sm:text-4xl shadow-2xl border-[3px] border-white dark:border-[#0D0D0D] overflow-hidden"
                           style={{
                             background: `linear-gradient(135deg, ${c.c1}, ${c.c2})`,
                             color: 'white',
                             boxShadow: `0 12px 32px ${c.c1}55, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -2px 0 rgba(0,0,0,0.1)`,
                           }}>
                        <div className="absolute inset-0 opacity-30"
                             style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), transparent 55%)' }} />
                        <span className="relative z-10 drop-shadow-lg">{c.badge}</span>
                      </div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-[#0D0D0D] shadow-lg z-20"
                           style={{ background: `linear-gradient(135deg, #10B981, #059669)` }}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="mono text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                              style={{ background: `linear-gradient(135deg, ${c.c1}18, ${c.c2}18)`, color: c.c2, border: `1px solid ${c.c2}30` }}>
                          {c.issuer}
                        </span>
                        <span className="mono text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          ✓ {c.status}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-[15px] sm:text-base lg:text-[17px] text-[#0B0B12] dark:text-white leading-snug mb-2.5 tracking-tight">
                        {c.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {c.tags.map((t) => (
                          <span key={t} className="mono text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
                                style={{
                                  background: `linear-gradient(135deg, ${c.c1}14, ${c.c2}10)`,
                                  color: c.c2,
                                  border: `1px solid ${c.c2}26`,
                                }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 sm:border-l border-black/[0.06] dark:border-white/[0.07] sm:pl-6 lg:pl-8 sm:ml-4 lg:ml-6 mt-3 sm:mt-0 pt-3 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <p className="mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#737373] dark:text-[#8C8CA3] mb-0.5">Awarded</p>
                        <p className="font-display font-black text-lg sm:text-xl leading-none"
                           style={{
                             background: `linear-gradient(135deg, ${c.c1}, ${c.c2})`,
                             WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
                           }}>{c.year}</p>
                      </div>
                      <div className="flex flex-col items-center sm:items-end gap-1.5">
                        <p className="mono text-[8.5px] font-black uppercase tracking-[0.16em]"
                           style={{ color: c.c2 }}>
                          {c.linkType === 'pdf' ? '📄 View PDF' : c.linkType === 'image' ? '🖼️ View Cert' : '🔗 View Proof'}
                        </p>
                        <motion.div
                          whileHover={{ x: 3, scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => { e.stopPropagation(); openProof(c); }}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-lg cursor-pointer shrink-0 transition-all group-hover:shadow-xl"
                          style={{
                            background: `linear-gradient(135deg, ${c.c1}, ${c.c2})`,
                            boxShadow: `0 8px 20px ${c.c1}44`,
                          }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H8M17 7v9"/>
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
