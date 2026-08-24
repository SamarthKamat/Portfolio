import resumeImage from '../../Samarth_Resume.png'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/samarthkamat',
    target: '_blank',
    c1: '#0A66C2',
    c2: '#2563EB',
    short: 'IN',
  },
  {
    label: 'Resume',
    href: resumeImage,
    target: '_blank',
    c1: '#EA580C',
    c2: '#EAB308',
    short: 'RS',
  },
  {
    label: 'Email',
    href: 'mailto:samarth.kamat2026b@gim.ac.in',
    target: undefined,
    c1: '#7C3AED',
    c2: '#06B6D4',
    short: 'EM',
  },
  {
    label: 'Call',
    href: 'tel:+917709085986',
    target: undefined,
    c1: '#10B981',
    c2: '#059669',
    short: 'PH',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-[#E5E4E2] dark:border-[#1A1A20] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.02] to-[#06B6D4]/[0.03] dark:via-[#7C3AED]/[0.04] dark:to-[#06B6D4]/[0.05]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, #7C3AED, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-start pb-12 border-b border-dashed border-[#E5E4E2] dark:border-[#222]">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 45%, #7C3AED 100%)' }}>
                <span className="text-white font-black text-xl tracking-tight">SK</span>
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A3A3A3] dark:text-[#6E6E78]">Portfolio · Identity</p>
                <h3 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent leading-tight" style={{ backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%)' }}>
                  SAMARTH RAVINDRA KAMAT
                </h3>
              </div>
            </div>
            <p className="text-[15px] font-semibold mb-3 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              PGDM — Big Data Analytics · Goa Institute of Management · Batch 2026–28
            </p>
            <p className="text-sm text-[#737373] dark:text-[#8A8A8A] leading-[1.75] max-w-xl">
              BE Computer Engineer from Goa Engineering College (CGPA 8.37) turned data & AI enthusiast — blending engineering rigor with business thinking. Currently open to Summer 2027 analytics internships and full-time roles across BI, Data, Product & Strategy.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A3A3A3] dark:text-[#6E6E78] mb-4">Quick Actions · 1-Click Reach</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-white dark:bg-[#121218] border border-[#E5E4E2] dark:border-[#1E1E24] rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-15 blur-2xl group-hover:opacity-25 transition-opacity" style={{ background: `linear-gradient(135deg, ${s.c1}, ${s.c2})` }} />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-black text-white mb-3 shadow relative z-10" style={{ background: `linear-gradient(135deg, ${s.c1}, ${s.c2})` }}>
                    {s.short}
                  </div>
                  <p className="text-sm font-bold text-[#141414] dark:text-white relative z-10">{s.label}</p>
                  <p className="text-[10px] font-mono mt-1 relative z-10" style={{ color: s.c1 }}>↗ Open Now</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-xs font-mono text-[#A3A3A3] dark:text-[#6E6E78]">
              © {year} Samarth Ravindra Kamat. All rights reserved.
            </p>
            <span className="text-[#D4D3D1] dark:text-[#2A2A2A] hidden sm:inline">·</span>
            <p className="text-xs font-mono text-[#A3A3A3] dark:text-[#6E6E78]">
              Built with <span className="text-gradient-sun font-bold">React + Vite + Tailwind CSS</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <p className="text-[11px] font-mono text-[#737373] dark:text-[#8A8A8A]">Available · Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
