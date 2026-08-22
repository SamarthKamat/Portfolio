import resumeImage from '../../Samarth_Resume.png'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E4E2] dark:border-[#1E1E1E] bg-white dark:bg-[#0D0D0D] py-7 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(37,99,235,0.04) 0%, rgba(124,58,237,0.04) 50%, rgba(6,182,212,0.04) 100%)' }} />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <p className="text-sm font-semibold tracking-tight bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">SAMARTH RAVINDRA KAMAT</p>
            <p className="text-xs text-[#A3A3A3] mt-1">PGDM – Big Data Analytics · Goa Institute of Management</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin.com/in/samarthkamat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#737373] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={resumeImage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#737373] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
            >
              Resume ↗
            </a>
            <a
              href="mailto:samarth.kamat2026b@gim.ac.in"
              className="text-xs text-[#737373] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-colors"
            >
              Email ↗
            </a>
          </div>
          <p className="text-xs text-[#A3A3A3]">© 2026 Samarth Ravindra Kamat</p>
        </div>
      </div>
    </footer>
  )
}
