import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Artificial Intelligence', value: 'artificial-intelligence' },
  { label: 'Data Analytics', value: 'data-analytics' },
]

function RetailSalesVisual() {
  const monthlyData = [
    { month: 'May', profit: -3.7, height: 20 },
    { month: 'Jun', profit: -2.1, height: 15 },
    { month: 'Jul', profit: 1.2, height: 30 },
    { month: 'Aug', profit: 3.4, height: 45 },
    { month: 'Sep', profit: 5.1, height: 55 },
    { month: 'Oct', profit: 7.8, height: 70 },
    { month: 'Nov', profit: 10.3, height: 95 },
    { month: 'Dec', profit: 8.5, height: 80 },
  ]
  const categories = [
    { name: 'Furniture', pct: 62.6, value: '₹48.2K', width: '95%', color: '#FCD34D' },
    { name: 'Electronics', pct: 41.3, value: '₹32.7K', width: '60%', color: '#60A5FA' },
    { name: 'Clothing', pct: 28.9, value: '₹21.4K', width: '40%', color: '#A78BFA' },
    { name: 'Groceries', pct: 15.2, value: '₹12.8K', width: '25%', color: '#34D399' },
  ]
  return (
    <div className="p-4 rounded-xl w-full" style={{ background: 'linear-gradient(135deg, #0F172A, #1E1B4B)' }}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] font-semibold text-white/60 uppercase tracking-widest">Retail Sales Analytics</p>
        <div className="flex gap-1">
          {['State', 'Category', 'Profit'].map(t => (
            <span key={t} className="text-[8px] px-2 py-0.5 rounded bg-white/10 text-white/60">{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[
          { label: 'Total Sales', value: '₹287.5K', delta: '+12.4% YoY', color: '#60A5FA' },
          { label: 'Units Sold', value: '12,847', delta: '5,284 Qty', color: '#A78BFA' },
          { label: 'Top State', value: 'Maharashtra', delta: '₹72.3K Profit', color: '#34D399' },
          { label: 'Top Category', value: 'Furniture', delta: '62.6% Qty', color: '#FCD34D' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white/5 rounded-lg p-2">
            <p className="text-[7px] text-white/40 mb-0.5">{kpi.label}</p>
            <p className="text-[10px] font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
            <p className="text-[7px] text-white/60">{kpi.delta}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-lg p-3 mb-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[8px] text-white/40">Monthly Profit (₹K) · May → Dec</p>
          <p className="text-[8px] font-bold text-[#34D399]">Swing: -₹3.7K → ₹10.3K</p>
        </div>
        <div className="flex items-end gap-1 h-20 relative">
          {monthlyData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
              <span className="text-[7px] font-bold mb-1 text-white/80">{d.profit > 0 ? '' : ''}{d.profit}K</span>
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${d.height}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="w-full rounded-t-sm relative"
                style={{
                  background: i >= 5
                    ? 'linear-gradient(to top, #059669, #06B6D4)'
                    : i <= 1
                    ? 'linear-gradient(to top, #E5533D, #F97316)'
                    : 'linear-gradient(to top, rgba(37,99,235,0.4), rgba(124,58,237,0.4))',
                }}
              >
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[6px] font-semibold whitespace-nowrap" style={{ color: d.profit >= 0 ? '#6EE7B7' : '#FCA5A5' }}>
                  {d.profit > 0 ? '+' : ''}{d.profit}K
                </span>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-1">
          {monthlyData.map((d, i) => (
            <div key={i} className="flex-1 text-center text-[7px] text-white/40 font-mono">{d.month}</div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 rounded-lg p-2.5 mb-2">
        <p className="text-[8px] text-white/40 mb-2">Category-wise Qty Share & Revenue</p>
        <div className="space-y-1.5">
          {categories.map((c, i) => (
            <div key={c.name} className="flex items-center justify-between gap-2">
              <span className="text-[8px] text-white/60 w-16 shrink-0">{c.name}</span>
              <div className="flex-1 flex items-center gap-1.5">
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: c.width }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="h-full rounded-full"
                    style={{ width: c.width, background: c.color }}
                  />
                </div>
                <span className="text-[8px] font-bold w-10 text-right" style={{ color: c.color }}>{c.pct}%</span>
                <span className="text-[7px] text-white/50 w-12 text-right shrink-0">{c.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-[7px] text-white/50">
        <div className="bg-white/5 rounded px-1.5 py-1 text-center">
          <p className="font-bold text-[#34D399] text-[8px]">MH · 25.1%</p>
          <p>State Share</p>
        </div>
        <div className="bg-white/5 rounded px-1.5 py-1 text-center">
          <p className="font-bold text-[#60A5FA] text-[8px]">₹22.4 Avg</p>
          <p>Order Value</p>
        </div>
        <div className="bg-white/5 rounded px-1.5 py-1 text-center">
          <p className="font-bold text-[#FCD34D] text-[8px]">3.58×</p>
          <p>Profit Mult (May→Nov)</p>
        </div>
      </div>
    </div>
  )
}

function AIBriefingVisual() {
  return (
    <div className="p-5 bg-[#F9F8F6] dark:bg-[#0D0D0D] rounded-xl w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] font-mono text-[#A3A3A3] uppercase tracking-widest">AI Briefing · Fact Check Pipeline</p>
        <div className="flex items-center gap-1.5 text-[9px] text-[#737373]">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#059669', boxShadow: '0 0 8px #059669' }} />Gemini API Active
        </div>
      </div>
      <div className="space-y-2 mb-4">
        {[
          { tag: 'GEMINI', text: 'Generating topic-wise briefings with cited sources...', color: '#7C3AED' },
          { tag: 'VERIFY', text: 'Cross-checking claims against originally cited sources...', color: '#2563EB' },
          { tag: 'FLAG', text: 'Detecting unsupported or misleading statements.', color: '#059669' },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-[#161616] border border-[#E5E4E2] dark:border-[#1E1E1E]"
          >
            <span className="text-[9px] font-bold px-2 py-0.5 rounded text-white flex-shrink-0" style={{ background: step.color }}>{step.tag}</span>
            <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] leading-snug pt-0.5">{step.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="pt-3 border-t border-[#E5E4E2] dark:border-[#1E1E1E] flex justify-around text-[9px] text-[#A3A3A3] text-center">
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">Realtime</p><p>Source Cross-Check</p></div>
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">Topic-wise</p><p>Concise Briefings</p></div>
        <div><p className="font-bold text-xs bg-gradient-to-r from-[#7C3AED] to-[#EA580C] bg-clip-text text-transparent">Claim-Level</p><p>Fact Verification</p></div>
      </div>
    </div>
  )
}

function DiseaseDetectionVisual() {
  return (
    <div className="p-5 rounded-xl w-full" style={{ background: 'linear-gradient(135deg, #1A1033, #0A0A24)' }}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#C4B5FD' }}>Speech → MFCC/VGGish → Stacked LSTM</p>
        <div className="flex items-center gap-1.5 text-[9px]" style={{ color: '#A78BFA' }}>
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#10B981', boxShadow: '0 0 8px #10B981' }} />Deployed
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg p-3 border border-white/10 bg-white/5">
          <p className="text-[9px] text-white/40 mb-2 uppercase tracking-wider">Waveform Ingest</p>
          <svg viewBox="0 0 200 28" className="w-full h-6" preserveAspectRatio="none">
            <path d="M0,14 C10,4 18,24 28,10 C38,0 46,26 56,14 C66,2 74,28 84,12 C94,4 104,24 114,10 C124,0 132,26 142,16 C152,6 162,22 172,12 C180,4 190,20 200,14" stroke="#34D399" strokeWidth="1.5" fill="none" opacity="0.9"/>
            <path d="M0,14 C10,10 20,20 30,14 C40,8 50,22 60,14 C70,6 80,24 90,14 C100,8 110,20 120,14 C130,8 140,20 150,14 C160,10 170,20 180,14 C190,10 200,14 200,14" stroke="#60A5FA" strokeWidth="1.2" fill="none" opacity="0.6"/>
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-3 border border-white/10 bg-white/5">
            <p className="text-[9px] text-white/40 mb-1 uppercase tracking-wider">MFCC + VGGish</p>
            <div className="grid grid-cols-13 gap-0.5">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="h-2 rounded-sm" style={{
                  background: `hsl(${230 + (i % 13) * 4}, 80%, ${30 + ((i * 37) % 55)}%)`,
                  opacity: 0.3 + ((i * 13) % 70) / 100,
                }} />
              ))}
            </div>
          </div>
          <div className="rounded-lg p-3 border border-white/10 bg-white/5">
            <p className="text-[9px] text-white/40 mb-1 uppercase tracking-wider">Stacked LSTM</p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #7C3AED, #3B82F6)' }} />
                <span className="text-[7px] text-white/50">Layer 1</span>
              </div>
              <span className="text-white/30">→</span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }} />
                <span className="text-[7px] text-white/50">Layer 2</span>
              </div>
              <span className="text-white/30">→</span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #06B6D4, #10B981)' }} />
                <span className="text-[7px] text-white/50">Dense</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg p-3 border border-white/10 bg-white/5">
            <p className="text-[9px] text-white/40 mb-1">Binary Screening</p>
            <p className="text-xl font-bold" style={{ color: '#10B981' }}>92.06<span className="text-[10px] text-white/50">%</span></p>
            <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '92%', background: 'linear-gradient(90deg, #10B981, #06B6D4)' }} />
            </div>
          </div>
          <div className="rounded-lg p-3 border border-white/10 bg-white/5">
            <p className="text-[9px] text-white/40 mb-1">Multi-Class</p>
            <p className="text-xl font-bold" style={{ color: '#A78BFA' }}>70.37<span className="text-[10px] text-white/50">%</span></p>
            <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '70%', background: 'linear-gradient(90deg, #7C3AED, #EC4899)' }} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 text-[9px] text-white/50">
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Librosa</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">MFCC</span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Flask API</span>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'retail-sales',
    filter: ['all', 'business-intelligence'],
    projectUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMDUwNjdiNGQtMjZiNi00YTE4LTgzZmItOTU5M2M1OWMwZGQyIiwidCI6IjFmNDM2ODQxLWZkMzEtNGFhYy1iNDkyLTlkMWI2OTJjMTU3YiIsImMiOjEwfQ%3D%3D&pageName=f4ea9e8b45a4ae323ccb',
    category: 'Business Intelligence · Power BI · DAX',
    tag: 'Business Intelligence',
    title: 'Retail Sales Analytics Dashboard',
    headline: 'Interactive Power BI dashboard for multi-state retail sales analysis.',
    description: 'Designed and implemented an interactive Power BI dashboard to analyse multi-state retail sales data, supporting data-driven decision-making with clear insights on total sales, units sold, regional trends, and overall profit using slicers and dynamic KPI cards.',
    metrics: [
      { value: 'Maharashtra', label: 'Top Profit State' },
      { value: '62.6%', label: 'Furniture Qty Sold %' },
      { value: '₹10.3K', label: 'Peak Nov Profit' },
    ],
    insight: 'DAX-based visualisations identified Maharashtra as the top profit-generating state and Furniture as the leading category at 62.6% of quantity sold.',
    recommendation: 'Surface a profit swing from -₹3.7K in May to ₹10.3K in November for actionable inventory and promo planning.',
    Visual: RetailSalesVisual,
    gradient: 'from-[#F59E0B] to-[#EC4899]',
    caseStudy: {
      problem: 'Retail managers were analysing sales across multiple states and product categories using static reports, making it hard to identify profit drivers, top regions and underperforming months in real time.',
      data: 'Multi-state retail sales dataset with fields for state, product category, units sold, revenue, cost and profit across multiple months.',
      analysis: 'Built interactive slicers, dynamic KPI cards and DAX-driven visualisations. Modeled the data to compare state-wise and category-wise performance along with monthly profit trends.',
      insights: ['Maharashtra emerged as the highest profit-generating state across all categories.', 'Furniture led quantity sold at 62.6%, dominating volume but requiring margin analysis alongside electronics.', 'Monthly profit showed a dramatic swing from a -₹3.7K loss in May to a ₹10.3K peak in November, revealing strong seasonality.'],
      recommendation: 'Double down on high-margin inventory in Maharashtra during the Aug–Nov season. Run targeted recovery promos in low-performing months. Reforecast Furniture stock based on the 62.6% volume trend.',
      impact: 'Dashboard replaced monthly static reports with a single interactive surface used by stakeholders for data-driven decisions on promotions, stock and regional focus.',
    },
  },
  {
    id: 'ai-briefing',
    projectUrl: 'https://worldlensai.netlify.app/',
    filter: ['all', 'artificial-intelligence'],
    category: 'Artificial Intelligence · Gemini API · Fact Checking',
    tag: 'Artificial Intelligence',
    title: 'AI-Powered Global Briefing Platform',
    headline: 'Gemini API-driven news briefings with real-time claim verification.',
    description: 'Developed an AI-powered news briefing platform using the Gemini API to dynamically generate concise, topic-wise briefings with properly cited sources, enhancing information dissemination.',
    metrics: [
      { value: 'Gemini API', label: 'Briefing Engine' },
      { value: 'Claim-Level', label: 'Fact Verification' },
      { value: 'Real-time', label: 'Source Cross-Check' },
    ],
    insight: 'Implemented claim-level fact verification, automatically cross-checking Gemini-generated claims against their originally cited sources in real time.',
    recommendation: 'Flag any unsupported or misleading statements before displaying results, ensuring users receive information they can trust.',
    Visual: AIBriefingVisual,
    gradient: 'from-[#EC4899] to-[#7C3AED]',
    caseStudy: {
      problem: 'AI-generated content is fast and concise but can introduce unsupported claims or hallucinations. Users consuming news briefings need assurance that generated statements align with cited sources.',
      data: 'Topic-wise news content with cited source URLs and extracted Gemini-generated claims mapped back to their original source passages.',
      analysis: 'Integrated Gemini API for structured topic-wise briefing generation. Built a two-stage pipeline: (1) generate concise briefings with citations, then (2) run real-time claim-level verification against cited source content.',
      insights: ['Claim-level verification caught unsupported generalizations that surface-level source-linking would miss.', 'Topic-wise structure improved readability and enabled per-section trust signals.', 'Real-time checking added ~300ms latency but eliminated >90% of misleading statements in testing.'],
      recommendation: 'Keep verification on by default and visually flag each claim with its verification status. Surface citations inline with claims so users can jump to the original source.',
      impact: 'Delivers trustworthy, AI-powered news briefings with transparency. Users can read concise, topic-wise summaries without worrying about silently fabricated claims.',
    },
  },
  {
    id: 'multi-disease-detection',
    projectUrl: 'https://multi-disease-detection.netlify.app/',
    filter: ['all', 'data-analytics', 'artificial-intelligence'],
    category: 'Deep Learning · Speech Processing · Clinical AI',
    tag: 'Artificial Intelligence',
    title: 'Multi-Disease Detection Using Human Speech Through Deep Learning',
    headline: 'Two-phase stacked LSTM framework for non-invasive disease screening using speech.',
    description: 'Developed a two-phase deep learning framework for non-invasive disease detection using human speech: performing binary screening (healthy vs. at-risk) followed by multi-class disease classification. Extracted and fused MFCC acoustic features with VGGish deep audio embeddings to improve detection performance and robustness.',
    metrics: [
      { value: '92.06%', label: 'Binary Accuracy' },
      { value: '70.37%', label: 'Multi-Class Acc' },
      { value: 'Stacked LSTM · Flask', label: 'End-to-End Deployed' },
    ],
    insight: 'Built stacked LSTM models with weighted-loss optimization, then deployed the trained models as a Flask-powered web application for real-time speech-based disease prediction.',
    recommendation: 'Fusing MFCCs with VGGish embeddings consistently outperformed single-feature baselines — demonstrating the value of combining engineered and learned audio representations for clinical speech tasks.',
    Visual: DiseaseDetectionVisual,
    gradient: 'from-[#7C3AED] to-[#06B6D4]',
    caseStudy: {
      problem: 'Many disease screening pipelines are invasive, expensive or require clinic visits. We set out to build a non-invasive screening tool that detects disease signatures in human speech — leveraging the well-known speech changes (prosody, phonation, jitter) linked to multiple health conditions.',
      data: 'Speech recordings with corresponding disease labels across multiple conditions. Preprocessed with Librosa and OpenSMILE for MFCC extraction; VGGish deep embeddings produced from pre-trained audio models. Data split into binary screening and multi-class disease classification labels.',
      analysis: 'Designed a two-phase framework: Phase 1 binary screening using stacked LSTMs, Phase 2 multi-class disease classification on the predicted-positive cohort. Evaluated both single-feature and fusion approaches. Post-training predictions are routed through a Flask backend with a React UI for clinicians to review each sample and its predicted class confidences.',
      insights: ['MFCC + VGGish fusion improved multi-class accuracy by ~8% over MFCC-only baseline.','Weighted-loss optimization addressed class imbalance in rare conditions, stabilizing recall for minority diseases.','Binary phase reached 92.06% accuracy — sufficient for a first-pass triage role in the screening workflow.','Structured per-prediction confidence reports and clear class-label translations simplified review handoff to clinical partners.'],
      recommendation: 'Deploy the model as a Flask-powered screening assistant with a confidence-calibrated output that automatically flags low-confidence predictions for clinician review.',
      impact: 'Deployed web application accessible via Netlify + Flask backend. Patients record a short voice sample and receive a clear, accessible screening output with per-class confidences — enabling non-invasive pre-screening before clinical follow-up.',
    },
  },
]

function CaseStudyModal({ project, onClose }) {
  const cs = project.caseStudy
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: 'spring', damping: 28 }}
        className="relative bg-white dark:bg-[#111111] rounded-2xl border border-[#E5E4E2] dark:border-[#1E1E1E] max-w-3xl w-full my-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
        <div className="p-8 border-b border-[#E5E4E2] dark:border-[#1E1E1E]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3] mb-2">{project.category}</p>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{project.title}</h3>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F1F0EE] dark:bg-[#1A1A1A] text-[#525252] dark:text-[#A3A3A3] hover:bg-[#E5E4E2] transition-colors">✕</button>
          </div>
        </div>
        <div className="p-8 space-y-8">
          {[
            { num: '01', title: 'Business Problem', body: cs.problem },
            { num: '02', title: 'Data & Research', body: cs.data },
            { num: '03', title: 'Analysis', body: cs.analysis },
          ].map((step) => (
            <div key={step.num}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{step.num}</span>
                <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">{step.title}</h4>
              </div>
              <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7">{step.body}</p>
            </div>
          ))}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>04</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Key Insights</h4>
            </div>
            <ul className="pl-7 space-y-2">
              {cs.insights.map((insight, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
                  <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mt-0.5 flex-shrink-0 font-bold`}>→</span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>05</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Recommendation</h4>
            </div>
            <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7">{cs.recommendation}</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.05), rgba(124,58,237,0.05))' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-[10px] font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>06</span>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#141414] dark:text-white">Impact</h4>
            </div>
            <p className="text-sm text-[#525252] dark:text-[#A3A3A3] leading-relaxed pl-7 mb-5">{cs.impact}</p>
            {project.projectUrl && (
              <div className="pl-7">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all bg-gradient-to-r ${project.gradient}`}
                >
                  View Live Project
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="-translate-y-px">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')
  const [caseStudy, setCaseStudy] = useState(null)

  const visible = projects.filter(p => p.filter.includes(filter))

  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, rgba(124,58,237,0.04) 0%, rgba(6,182,212,0.03) 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent mb-3">
            Selected Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141414] dark:text-white mb-4 leading-[1.05]">
            Where engineering code,{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              data analytics
            </span>{' '}
            and AI meet real problems.
          </h2>
          <p className="text-lg text-[#737373] dark:text-[#737373] max-w-2xl leading-relaxed">
            Projects built on genuine work — from Power BI dashboards to Gemini AI apps and OpenCV prototypes.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                filter === f.value
                  ? 'text-white shadow-md'
                  : 'bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] text-[#525252] dark:text-[#A3A3A3] hover:border-[#A3A3A3]'
              }`}
              style={filter === f.value ? { background: 'linear-gradient(135deg, #2563EB, #7C3AED)' } : {}}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <AnimatePresence mode="wait">
            {visible.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                whileHover={{ y: -6, scale: 1.005 }}
                transition={{ delay: idx * 0.08, type: 'spring', stiffness: 140, damping: 20 }}
                className="group bg-white dark:bg-[#111111] border border-[#E5E4E2] dark:border-[#1E1E1E] rounded-[28px] overflow-hidden hover:shadow-[0_24px_70px_rgba(37,99,235,0.10)] dark:hover:shadow-[0_28px_80px_rgba(0,0,0,0.55)] transition-shadow duration-300 relative"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`} />
                <motion.div
                  aria-hidden="true"
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`}
                  style={{ mixBlendMode: 'soft-light' }}
                />
                <div className={`grid ${idx % 2 === 0 ? 'lg:grid-cols-[1.08fr_390px]' : 'lg:grid-cols-[390px_1.08fr]'} gap-0`}>
                  <div className={`relative p-9 md:p-12 flex flex-col gap-7 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`} />
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3]">{project.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-[2rem] font-bold text-[#141414] dark:text-white mb-4 leading-[1.15]">{project.title}</h3>
                      <p className={`text-base md:text-lg font-semibold italic mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        "{project.headline}"
                      </p>
                      <p className="text-base md:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed mt-4 max-w-3xl">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-8">
                      {project.metrics.map((m) => (
                        <motion.div
                          key={m.label}
                          whileHover={{ y: -2 }}
                          className="min-w-[110px]"
                        >
                          <p className={`text-2xl md:text-[1.75rem] font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>{m.value}</p>
                          <p className="text-sm text-[#A3A3A3]">{m.label}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-5 border-t border-[#F1F0EE] dark:border-[#1A1A1A] space-y-3">
                      <div>
                        <p className="text-xs text-[#525252] dark:text-[#A3A3A3]">
                          <span className="font-semibold text-[#141414] dark:text-white">Insight: </span>{project.insight}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#525252] dark:text-[#A3A3A3]">
                          <span className="font-semibold text-[#141414] dark:text-white">Recommendation: </span>{project.recommendation}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <motion.button
                        whileHover={{ x: 4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center gap-2 text-base md:text-lg font-semibold w-fit bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                        onClick={() => setCaseStudy(project)}
                      >
                        View Case Study
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.button>
                      {project.projectUrl && (
                        <motion.a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 rounded-full border border-[#D4D3D1] dark:border-[#2A2A2A] px-6 py-3 text-sm md:text-base font-semibold text-[#141414] dark:text-white hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-[#7C3AED] dark:hover:text-[#A78BFA] transition-all"
                        >
                          View Project
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="-translate-y-px">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    className={`p-7 md:p-8 bg-[#F9F8F6] dark:bg-[#0D0D0D] flex items-center ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                  >
                    <div className="w-full scale-[1.02]">
                      <project.Visual />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {caseStudy && <CaseStudyModal project={caseStudy} onClose={() => setCaseStudy(null)} />}
      </AnimatePresence>
    </section>
  )
}
