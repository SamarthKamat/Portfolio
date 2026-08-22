import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Data Analytics',
    gradient: 'from-[#2563EB] to-[#7C3AED]',
    skills: ['Exploratory Data Analysis', 'Statistical Analysis', 'Data Cleaning', 'Data Visualisation', 'Business Analytics', 'KPI Analysis'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        <path d="M2 20h20"/>
      </svg>
    ),
  },
  {
    title: 'Programming',
    gradient: 'from-[#059669] to-[#06B6D4]',
    skills: ['C', 'C++', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'OpenCV', 'SQL', 'R'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: 'Software Packages',
    gradient: 'from-[#7C3AED] to-[#2563EB]',
    skills: ['Microsoft Power BI', 'Advanced Excel', 'LaTeX', 'PowerPoint', 'GitHub'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    gradient: 'from-[#EA580C] to-[#EAB308]',
    skills: ['Gemini API', 'Prompt Engineering', 'TensorFlow / Keras', 'ML Fundamentals', 'LSTM', 'VGGish', 'Regression', 'Classification', 'Forecasting', 'Decision Trees', 'Model Evaluation'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 8v4l3 3"/>
        <circle cx="18" cy="5" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Web & Full-Stack',
    gradient: 'from-[#06B6D4] to-[#059669]',
    skills: ['React', 'Flask', 'OpenCV', 'JavaScript', 'Vibe Coding', 'Text-to-Speech Systems'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
]

const certifications = [
  { name: 'Google AI Essentials (Coursera) — 5-course Specialisation', year: '2026', detail: 'Prompt Eng. · AI · Productivity' },
  { name: 'Be10X AI Tools & Claude Workshop', year: '2026', detail: 'Presentation · Data · Debugging' },
  { name: 'NPTEL Enthusiast (IIT Madras)', year: '2024', detail: '8+ Exams · 75%+ Pass' },
  { name: 'NPTEL Motivated Learner (IIT Madras)', year: '2025', detail: '4 Semesters · 75%+ Pass' },
  { name: 'Government Scholarship — Indian Classical Music', year: '2019-21', detail: '₹48K Overall (2 Years)' },
]

const techStack = [
  { name: 'Python', role: 'EDA · ML · Speech', color: '#2563EB' },
  { name: 'TensorFlow/Keras', role: 'Deep Learning', color: '#F472B6' },
  { name: 'Power BI', role: 'Dashboards · DAX', color: '#EA580C' },
  { name: 'React', role: 'Frontend · App UI', color: '#06B6D4' },
  { name: 'Flask', role: 'Backend · API Layer', color: '#059669' },
  { name: 'Gemini API', role: 'AI Briefings · GenAI', color: '#EC4899' },
  { name: 'Librosa / MFCC', role: 'Speech Features', color: '#7C3AED' },
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 60%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#141414] dark:text-white mb-3">
            My{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Engineering & Analytics Toolkit
            </span>
          </h2>
          <p className="text-base text-[#737373] dark:text-[#737373] max-w-xl">
            C/C++ engineering, Python data analysis, Power BI dashboards and Gemini AI — applied end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 mb-6 p-6 rounded-2xl border border-[#E5E4E2] dark:border-[#1E1E1E] bg-white dark:bg-[#111111] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.06) 50%, rgba(6,182,212,0.06) 100%)' }} />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3] mb-1">Tech Stack</p>
              <p className="text-sm font-semibold text-[#141414] dark:text-white">Python · TensorFlow · Power BI · React · Flask · Gemini</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <div key={t.name} className="flex items-center gap-2 px-3 py-2 bg-[#F9F8F6] dark:bg-[#0D0D0D] border border-[#E5E4E2] dark:border-[#1A1A1A] rounded-xl">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                  <div>
                    <p className="text-xs font-semibold text-[#141414] dark:text-white leading-none">{t.name}</p>
                    <p className="text-[9px] text-[#A3A3A3] mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-5 group relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${group.gradient}`} />
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white bg-gradient-to-br ${group.gradient}`}
                >
                  {group.icon}
                </div>
                <h3 className={`text-sm font-bold bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent`}>
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-[11px] font-medium px-2.5 py-1.5 bg-[#F9F8F6] dark:bg-[#0D0D0D] border border-[#E5E4E2] dark:border-[#1A1A1A] rounded-md text-[#525252] dark:text-[#A3A3A3] hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-[#7C3AED] dark:hover:text-[#A78BFA] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-6">Certifications</p>
          <div className="bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl overflow-hidden">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center justify-between px-8 py-5 ${i < certifications.length - 1 ? 'border-b border-[#F1F0EE] dark:border-[#1A1A1A]' : ''} hover:bg-[#FAFAF8] dark:hover:bg-[#161616] transition-colors group`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${['#2563EB', '#7C3AED', '#059669', '#EA580C', '#06B6D4'][i]}, ${['#7C3AED', '#06B6D4', '#06B6D4', '#EAB308', '#059669'][i]})` }}
                  />
                  <span className="text-sm font-medium text-[#141414] dark:text-white">{cert.name}</span>
                  {cert.detail && (
                    <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-md" style={{ background: `linear-gradient(135deg, ${['#2563EB', '#7C3AED', '#059669', '#EA580C', '#06B6D4'][i]}, ${['#7C3AED', '#06B6D4', '#06B6D4', '#EAB308', '#059669'][i]})` }}>
                      {cert.detail}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-mono text-[#A3A3A3] flex-shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
