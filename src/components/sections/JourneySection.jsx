import { motion } from 'framer-motion'

const journeyItems = [
  {
    year: 'July – Sept 2025',
    role: 'Industrial Trainee',
    org: 'Info Tech Corporation of Goa Ltd. (ITG)',
    type: 'Internship',
    gradient: 'from-[#2563EB] to-[#7C3AED]',
    color: '#2563EB',
    metric: '2 Months',
    metricSub: 'Data Analytics & Software Dev',
    body: 'Built analytics solutions with Python, OpenCV and JavaScript/Vibe. Implemented bit-plane slicing, Fourier Transform, sharpening and Canny edge detection. Delivered social media campaign EDA (46 respondents, 78.3% Instagram exposure) and a full-stack React/Flask Text-to-Speech app with downloadable audio.',
    tags: ['Python', 'OpenCV', 'React/Flask', 'EDA'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    year: '2025',
    role: 'Head Coordinator',
    org: 'Student Badminton Committee · GCE',
    type: 'Leadership',
    gradient: 'from-[#059669] to-[#06B6D4]',
    color: '#059669',
    metric: 'HAPPENINGS Fest',
    metricSub: 'Inter-collegiate event',
    body: 'Coordinated the Badminton event at HAPPENINGS, GCE\'s annual inter-collegiate cultural and sports fest. Successfully managed fixtures, team logistics, scheduling and all on-ground event operations smoothly throughout 2025.',
    tags: ['Event Coordination', 'Logistics', 'Leadership', 'Scheduling'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    year: '2025',
    role: '1st Place',
    org: 'TEKFEST 2.0 · Escape Room',
    type: 'Achievement',
    gradient: 'from-[#7C3AED] to-[#EA580C]',
    color: '#7C3AED',
    metric: '1st Place',
    metricSub: 'DBCE\'s MESH & DBEATS Councils',
    body: 'Secured 1st Place in the Escape Room event at TEKFEST 2.0, organised by DBCE\'s MESH & DBEATS Councils. Demonstrated analytical thinking, quick problem-solving and team collaboration under time pressure.',
    tags: ['1st Place', 'Analytical Thinking', 'Team Work'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    year: '2023 – Present',
    role: 'Team Auction Coordinator',
    org: 'Badminton Team · GCE',
    type: 'Strategy',
    gradient: 'from-[#EA580C] to-[#EAB308]',
    color: '#EA580C',
    metric: 'Team Formation',
    metricSub: 'Player evaluation strategy',
    body: 'Contributing to player evaluation and auction strategy for team squad formation across multiple annual badminton leagues. Actively supporting key team composition and final roster selection decisions each competitive season.',
    tags: ['Player Evaluation', 'Auction Strategy', 'Decision Making'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
]

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 100% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#141414] dark:text-white mb-4">
            Building{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              data, code and leadership
            </span>{' '}
            through internships, projects and competition.
          </h2>
          <p className="text-base text-[#737373] max-w-2xl">
            Every experience — from ITG internship to sports leadership and competitive wins — has shaped how I build, analyze and lead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {journeyItems.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-8 group relative overflow-hidden transition-shadow hover:shadow-lg dark:hover:shadow-xl"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient}`} />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ background: `linear-gradient(135deg, ${item.gradient.includes('2563EB') ? '#2563EB, #7C3AED' : item.gradient.includes('059669') ? '#059669, #06B6D4' : item.gradient.includes('7C3AED') ? '#7C3AED, #EA580C' : '#EA580C, #EAB308'})` }}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.type}
                  </span>
                  <span className="text-[10px] font-mono text-[#A3A3A3]">{item.year}</span>
                </div>
              </div>

              <h3 className="text-base font-semibold text-[#141414] dark:text-white mb-0.5">{item.role}</h3>
              <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.org}</p>
              <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed mb-5">{item.body}</p>

              <div className="pt-4 border-t border-[#F1F0EE] dark:border-[#1A1A1A] flex items-center justify-between">
                <div>
                  <p className={`text-base font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.metric}</p>
                  <p className="text-[11px] text-[#A3A3A3]">{item.metricSub}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 bg-[#F9F8F6] dark:bg-[#0D0D0D] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded text-[#737373]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-2xl p-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(6,182,212,0.05) 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A3A3A3] mb-3">Extra-Curricular & Music</p>
                <h3 className="text-lg font-bold text-[#141414] dark:text-white mb-2">
                  Men's Badminton Team · Harmonium Classical Music
                </h3>
                <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                  Sports Champion · State & National Level Music
                </p>
                <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
                  Key player for GCE's Men's Badminton Team — Goa University Inter-Collegiate Champions 2023-24 and 3rd place at Shuttle Fiesta 2024. Represented Goa at Kala Utsav (National) in Harmonium and won 1st Place at Goa State-Level Harmonium Competition 2019.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-[220px]">
                {['Goa University Champion', 'National Kala Utsav', 'State Harmonium 1st', 'Govt. Scholarship ₹48K'].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-3 py-1.5 bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-full text-[#525252] dark:text-[#A3A3A3]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
