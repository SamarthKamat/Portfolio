import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import resumeImage from "../../Samarth_Resume.png"

const STORAGE_KEY = "samarth-portfolio-chatbot-history-v2"

const quickPrompts = [
  "Give me a 30-second elevator pitch of Samarth.",
  "Walk me through his 3 strongest projects.",
  "What roles is he targeting right now?",
  "Summarize his technical stack and certifications.",
]

const synonyms = {
  samarth: ["samarth", "kamat", "samarth kamat", "samarth ravindra kamat", "he", "him", "his", "candidate", "applicant", "profile", "this guy"],
  project: ["project", "projects", "case study", "case studies", "work", "portfolio work", "featured", "build", "built", "created", "made", "developed"],
  skill: ["skill", "skills", "tool", "tools", "tech stack", "stack", "technologies", "know", "knows", "use", "uses", "capable", "ability"],
  education: ["education", "college", "university", "degree", "qualification", "academic", "study", "studied", "studying", "school", "cgpa", "marks", "percentage"],
  experience: ["experience", "work", "job", "internship", "trainee", "career", "worked", "previously", "background"],
  contact: ["contact", "email", "phone", "reach", "message", "connect", "linkedin", "call", "reach out", "get in touch", "how to"],
  hire: ["hire", "hiring", "available", "availability", "open to", "roles", "opportunities", "position", "job", "internship", "summer 2027", "full time", "full-time"],
  journey: ["journey", "path", "career path", "achievements", "accomplishments", "leadership", "positions", "responsibility", "extracurricular"],
  certification: ["certification", "certifications", "certificates", "certified", "courses", "credentials", "badges", "nptel", "coursera", "google"],
  resume: ["resume", "cv", "download", "curriculum vitae", "bio data"],
  powerbi: ["power bi", "powerbi", "dax", "dashboard", "dashboards", "bi", "kpi", "slicer", "slicers"],
  ai: ["ai", "artificial intelligence", "llm", "genai", "gemini", "chatbot", "machine learning", "ml", "neural", "deep learning"],
  badminton: ["badminton", "sport", "sports", "champion", "goa university", "tournament", "match"],
  music: ["harmonium", "music", "classical", "kala utsav", "ccrt", "scholarship", "singing", "instrument"],
  data: ["data", "analytics", "analysis", "eda", "pandas", "numpy", "python", "sql"],
}

const questionIntents = {
  who: ["who", "about", "introduce", "tell me about", "profile", "summary", "overview"],
  what: ["what", "which", "list", "show", "name", "identify"],
  where: ["where", "location", "college", "institute", "from"],
  when: ["when", "year", "date", "duration", "timeline"],
  why: ["why", "reason", "should", "why hire", "differentiate", "stand out"],
  how: ["how", "way", "method", "approach", "process", "contact", "reach"],
}

const knowledgeTopics = [
  {
    id: "elevator_pitch",
    title: "Elevator Pitch",
    keywords: ["elevator pitch", "30 second", "quick summary", "one line", "brief summary", "who is he", "introduce samarth", "tell me about samarth", "profile summary"],
    answer:
      "Samarth Ravindra Kamat is a PGDM Big Data Analytics student at Goa Institute of Management with a Computer Engineering degree. His unique value proposition is that he bridges engineering-grade code fluency (Python, React, Flask, OpenCV) with business clarity and decision-making. Instead of siloed handoffs between analysts and developers, Samarth can clean a dataset, engineer features, build the Power BI dashboard, write the LLM pipeline, and present the final recommendation to leadership. He is currently open to Summer 2027 internships and full-time roles in Business Analytics, Data Analytics, Product Analytics, Business Intelligence, and Strategy & Consulting.",
    actions: [
      { label: "View About", type: "section", target: "about" },
      { label: "Featured Projects", type: "section", target: "projects" },
      { label: "Contact Samarth", type: "section", target: "contact" },
    ],
  },
  {
    id: "about_detailed",
    title: "About Samarth — Detailed",
    keywords: ["about samarth", "background", "who is samarth", "bio", "personal statement", "mission", "what does he do", "specialization", "specialty", "why data analytics", "why pgdm"],
    answer:
      "Samarth's professional identity is built on three pillars.\n\n1) Computer Engineering Foundation: B.E. from Goa College of Engineering (8.37 CGPA till 7th Sem) with C, C++, Python, OpenCV, data structures & algorithms — this gives him production-grade code fluency.\n\n2) PGDM Big Data Analytics: Currently at Goa Institute of Management, 2026–28 batch, where he layers business context, managerial thinking, and structured frameworks onto his engineering base.\n\n3) The Integration Point: He specializes in the sweet spot where engineering meets business decisions. He can own a problem end-to-end — from data cleaning and EDA to DAX measures, Power BI dashboards, ML models, LLM pipelines, and the final presentation deck. No separate analyst vs developer handoffs.",
    actions: [
      { label: "About Section", type: "section", target: "about" },
      { label: "Download Resume", type: "resume" },
    ],
  },
  {
    id: "why_hire",
    title: "Why Hire Samarth",
    keywords: ["why hire", "why should we hire", "differentiator", "what makes him different", "unique", "value", "benefit", "advantage", "stand out", "strengths", "selling point", "proposition"],
    answer:
      "Recruiters should hire Samarth because he breaks the analyst-developer silo.\n\nMost candidates can either build dashboards but can't ship production code, or can code but don't understand how to translate numbers into business decisions. Samarth does both.\n\nHe brings:\n\n• Engineering-grade quality: Python pipelines, Flask APIs, React UIs, OpenCV processing — not just notebook prototypes.\n\n• Business clarity: KPI design, DAX measures, consulting-style slide decks, the ability to present to stakeholders.\n\n• Full-stack delivery on past projects: Retail Power BI dashboards, Gemini-powered fact-checking platforms, Flask-deployed speech-disease LSTM models, React/Flask TTS apps during internship.\n\nHe is targeting Summer 2027 internships and full-time roles.",
    actions: [
      { label: "See Projects", type: "section", target: "projects" },
      { label: "Core Proficiencies", type: "section", target: "skills" },
      { label: "Open Roles & Contact", type: "section", target: "contact" },
    ],
  },
  {
    id: "education_pgdm",
    title: "PGDM — Goa Institute of Management",
    keywords: ["pgdm", "big data analytics", "goa institute of management", "gim", "mba", "management", "2026", "2028", "b-school", "bschool", "business school", "current studies"],
    answer:
      "Samarth is currently pursuing a PGDM (Post Graduate Diploma in Management) in Big Data Analytics at Goa Institute of Management. This is the 2026–28 batch — he joined in 2026 and will graduate in 2028. This is his current and top-most credential.\n\nThe PGDM builds on his engineering foundation with managerial subjects, decision frameworks, structured business problem-solving, and deep-dive analytics coursework that complements his technical coding abilities.",
    actions: [
      { label: "Education Timeline", type: "section", target: "about" },
      { label: "His Approach", type: "section", target: "about" },
    ],
  },
  {
    id: "education_be",
    title: "B.E. Computer Engineering",
    keywords: ["be", "b.e.", "bachelor of engineering", "computer engineering", "goa college of engineering", "gce", "goa university", "engineering degree", "cgpa", "8.37"],
    answer:
      "Samarth completed his B.E. (Bachelor of Engineering) in Computer Engineering from Goa College of Engineering, affiliated to Goa University. Duration: 2022 – 2026.\n\nAcademic performance: 8.37 CGPA (out of 10) till the 7th semester.\n\nKey engineering skills gained: C, C++, Python, OpenCV for image processing, Data Structures & Algorithms, and a general production-grade code mentality that carries over to his analytics work today.",
    actions: [
      { label: "About / Education", type: "section", target: "about" },
      { label: "Programming Skills", type: "section", target: "skills" },
    ],
  },
  {
    id: "education_full",
    title: "Complete Education Timeline",
    keywords: ["education timeline", "full education", "all education", "hsc", "ssc", "12th", "10th", "secondary", "higher secondary", "schooling", "academic record", "academic background", "degrees", "all qualifications"],
    answer:
      "Samarth's full academic journey (most recent first):\n\n1. PGDM – Big Data Analytics (2026 – 2028)\n   Goa Institute of Management · Currently Pursuing\n\n2. B.E. Computer Engineering (2022 – 2026)\n   Goa College of Engineering · Goa University\n   8.37 CGPA (out of 10) till 7th Sem\n\n3. HSC – Science (PCM + Computer Science) (2021 – 2022)\n   Purushottam Walawalkar Higher Secondary School\n   78.67%\n\n4. SSC – General (2019 – 2020)\n   Saraswat Vidyalaya High School (Goa Board)\n   91.5%",
    actions: [
      { label: "Education Section", type: "section", target: "about" },
    ],
  },
  {
    id: "projects_overview",
    title: "Projects Overview (All 3)",
    keywords: ["projects", "all projects", "overview of projects", "project list", "what projects", "portfolio projects", "case studies", "featured work", "major projects", "his work", "body of work"],
    answer:
      "Samarth has three flagship projects showcased on the portfolio, covering Business Intelligence / Power BI, Gen-AI application development, and ML engineering with deployment:\n\n① Retail Sales Analytics Dashboard — Power BI + DAX\n② AI-Powered Global Briefing Platform — Gemini API + Claim-Level Fact Verification\n③ Speech-Based Multi-Disease Detection — Stacked LSTM + Flask Deployment\n\nClick any action below to jump straight to the Projects section or open the live apps.",
    actions: [
      { label: "Projects Section", type: "section", target: "projects" },
      { label: "Retail Dashboard Live", type: "link", href: "https://app.powerbi.com/view?r=eyJrIjoiMDUwNjdiNGQtMjZiNi00YTE4LTgzZmItOTU5M2M1OWMwZGQyIiwidCI6IjFmNDM2ODQxLWZkMzEtNGFhYy1iNDkyLTlkMWI2OTJjMTU3YiIsImMiOjEwfQ%3D%3D&pageName=f4ea9e8b45a4ae323ccb", target: "_blank" },
      { label: "AI Briefing App Live", type: "link", href: "https://worldlensai.netlify.app/", target: "_blank" },
      { label: "Disease Detection Live", type: "link", href: "https://multi-disease-detection.netlify.app/", target: "_blank" },
    ],
  },
  {
    id: "retail_dashboard_deep",
    title: "Retail Sales Analytics Dashboard — Deep Dive",
    keywords: ["retail dashboard", "retail sales", "power bi dashboard", "dax dashboard", "maharashtra", "furniture", "profit swing", "sales analysis", "kpi cards", "slicers", "case study 1", "first project"],
    answer:
      "Project 1: Retail Sales Analytics Dashboard\n\nPlatform: Power BI with custom DAX measures\n\nWhat it does: End-to-end business intelligence analysis of multi-state retail sales across 4 states and 4 product categories.\n\nKey outputs surfaced:\n• Top-performing state: Maharashtra (25.1% state share, ₹72.3K profit)\n• Top category: Furniture (62.6% qty share, ₹48.2K)\n• Monthly profit swing visualized: -₹3.7K (May) → +₹10.3K (Nov) — a 3.58× profit multiplier from trough to peak\n• ₹287.5K Total Sales · 12,847 Units Sold · ₹22.4 Avg Order Value\n\nBuilt with: KPI cards, state/category slicers, DAX measures for YoY, MTD, PTYD comparisons, monthly bar charts, category-wise progress bars, and publishing to the Power BI service.\n\nLive dashboard link is available via the buttons below.",
    actions: [
      { label: "Open Live Dashboard", type: "link", href: "https://app.powerbi.com/view?r=eyJrIjoiMDUwNjdiNGQtMjZiNi00YTE4LTgzZmItOTU5M2M1OWMwZGQyIiwidCI6IjFmNDM2ODQxLWZkMzEtNGFhYy1iNDkyLTlkMWI2OTJjMTU3YiIsImMiOjEwfQ%3D%3D&pageName=f4ea9e8b45a4ae323ccb", target: "_blank" },
      { label: "Projects Section", type: "section", target: "projects" },
    ],
  },
  {
    id: "ai_briefing_deep",
    title: "AI-Powered Global Briefing Platform — Deep Dive",
    keywords: ["ai briefing", "global briefing", "gemini project", "gemini api", "fact check", "fact verification", "claim level", "worldlens", "news app", "case study 2", "second project", "briefing platform", "genai project"],
    answer:
      "Project 2: AI-Powered Global Briefing Platform (WorldLens AI)\n\nCore idea: Use LLMs to generate fast, readable topic-wise news briefings — but then fight AI hallucinations by verifying each generated claim against originally cited sources in real time.\n\nPipeline architecture:\n① GEMINI step: Generate concise briefings on user-selected topics with cited news sources.\n② VERIFY step: Cross-check every claim against its cited source article.\n③ FLAG step: Surface unsupported or misleading statements so the reader knows what is verified vs what the LLM may have invented.\n\nThis solves a real pain point in Gen-AI news products: readability without sacrificing accuracy.\n\nTech stack: Gemini API, React-based frontend, real-time verification logic.\n\nLive app: worldlensai.netlify.app",
    actions: [
      { label: "Open WorldLens AI", type: "link", href: "https://worldlensai.netlify.app/", target: "_blank" },
      { label: "Projects Section", type: "section", target: "projects" },
      { label: "AI / ML Skills", type: "section", target: "skills" },
    ],
  },
  {
    id: "disease_detection_deep",
    title: "Speech-Based Multi-Disease Detection — Deep Dive",
    keywords: ["disease detection", "speech detection", "lstm project", "stacked lstm", "flask app", "clinical ai", "audio feature", "keras", "tensorflow", "speech model", "case study 3", "third project", "ml project"],
    answer:
      "Project 3: Speech-Based Multi-Disease Detection System\n\nConcept: Use human speech as a non-invasive screening signal for multi-disease detection. The hypothesis is that clinically relevant audio markers exist in speech for multiple conditions.\n\nArchitecture — a two-phase Stacked LSTM pipeline:\n① Phase 1 (Audio Feature Engineering): Extract engineered audio features from raw speech waveforms (MFCCs, spectral features, etc.).\n② Phase 2 (Stacked LSTM Layers): Feed fused engineered features + learned embeddings through stacked recurrent layers for final disease classification.\n\nReported model accuracies on the project card: 92.06% and 70.37% (task-specific / disease-specific evaluations as shown on the portfolio).\n\nDeployment: Full Flask web app deployed with real-time prediction interface. Not a notebook-only prototype.\n\nLive app: multi-disease-detection.netlify.app",
    actions: [
      { label: "Open Disease Detection App", type: "link", href: "https://multi-disease-detection.netlify.app/", target: "_blank" },
      { label: "Projects Section", type: "section", target: "projects" },
      { label: "AI / ML Skills", type: "section", target: "skills" },
    ],
  },
  {
    id: "skills_stack",
    title: "Full Skills & Tech Stack",
    keywords: ["skills", "tools", "technologies", "tech stack", "what does he know", "languages", "python", "sql", "power bi", "react", "flask", "machine learning", "full list of skills", "all tools", "capabilities"],
    answer:
      "Samarth's technical toolkit, grouped by domain:\n\n① Data Analytics & BI\nExploratory Data Analysis (EDA) · Statistical Analysis & Inference · Data Cleaning & Wrangling · KPI / Metric Design · Power BI Dashboards · DAX · Slicers · Publishing · Business Storytelling\n\n② Programming & Engineering\nPython · Pandas · NumPy · Matplotlib · Scikit-learn · OpenCV · C & C++ · SQL (Joins, Window Functions, Aggregations) · JavaScript & R basics\n\n③ AI / Machine Learning\nGemini API · Prompt Engineering · TensorFlow / Keras · LSTM · Stacked Neural Nets · Audio Feature Extraction · Regression · Classification · Decision Trees · Forecasting · Model Evaluation\n\n④ Web & Full-Stack Delivery\nReact · UI components · Flask · REST APIs · OpenCV Pipelines · GitHub · Version Control · Rapid Prototyping / MVP · Text-to-Speech systems\n\n⑤ Productivity / Consulting Suite\nAdvanced Excel · Formulas · Pivots · LaTeX · Consulting-style slide decks\n\nFull ranked proficiency bars are visualized in the Skills section.",
    actions: [
      { label: "Skills Section", type: "section", target: "skills" },
      { label: "View Projects", type: "section", target: "projects" },
    ],
  },
  {
    id: "skills_ranked",
    title: "Ranked Core Proficiencies (Strongest First)",
    keywords: ["ranked skills", "strongest", "best at", "most proficient", "proficient", "good at", "core skills", "ranked", "order", "top skills", "best skills"],
    answer:
      "Based on the ranked proficiency visualization on the portfolio, Samarth is strongest at the top and grows depth as you go down:\n\n1. Python · Pandas · NumPy — EDA, data wrangling, ML pipelines\n2. Power BI · DAX — Slicers, KPI cards, dashboards, publishing\n3. Advanced Excel · LaTeX · Decks — Formulas, pivots, consulting-style slides\n4. C / C++ · DSA Foundations — Engineering foundations, OpenCV projects\n5. SQL & Data Querying — Joins, window functions, aggregations\n6. Machine Learning (Scikit-learn) — Classification, Regression, Trees, Eval\n7. Neural Networks (Keras/TensorFlow) — LSTM, speech models, stacked architectures\n8. React · Flask · Full Stack — UI components, APIs, deployment-ready apps",
    actions: [
      { label: "Open Skills Section", type: "section", target: "skills" },
    ],
  },
  {
    id: "certifications_all",
    title: "All Certifications & Scholarships",
    keywords: ["certifications", "all certifications", "certificates", "courses", "credentials", "google ai essentials", "be10x", "nptel", "ccrt", "scholarship", "awards", "badges", "coursera"],
    answer:
      "Complete list of Samarth's certifications and scholarships:\n\n① Google AI Essentials (Coursera) — 5-course Specialisation (2026)\n   Verified · Active | Issuer: Coursera · Google | Focus: Prompt Engineering, AI, Productivity\n\n② Be10X AI Tools & Claude Workshop (2026)\n   Workshop Certified | Focus: AI-powered presentations, data workflows, debugging\n\n③ NPTEL Enthusiast — IIT Madras (2024)\n   8+ Exams Cleared | Consistent performance across NPTEL semesters\n\n④ NPTEL Motivated Learner — IIT Madras (2025)\n   4 consecutive semesters of sustained course completion\n\n⑤ Government of India CCRT Scholarship — Indian Classical Music (2019–21)\n   ₹48,000 Talent Grant awarded across 2 years for Indian Classical Music / Harmonium",
    actions: [
      { label: "Google AI Essentials", type: "link", href: "https://coursera.org/share/8ee860a09d5f4987c0efd0021b7e552e", target: "_blank" },
      { label: "Be10X Workshop", type: "link", href: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971643660", target: "_blank" },
      { label: "Skills / Certifications", type: "section", target: "skills" },
    ],
  },
  {
    id: "journey_overview",
    title: "Career Journey Overview",
    keywords: ["journey", "career", "career journey", "experience overview", "all experience", "positions of responsibility", "leadership", "what has he done", "career path", "professional journey", "professional experience"],
    answer:
      "Samarth's journey combines technical internships, analytical competition wins, and sustained sports/strategy leadership:\n\n① Industrial Trainee — Info Tech Corporation of Goa (ITG)\n   July – September 2025 · Data Analytics + Software Development\n\n② Head Coordinator — Student Badminton Committee (GCE)\n   2025 · HAPPENINGS Inter-Collegiate Fest\n\n③ 1st Place 🏆 — TEKFEST 2.0 Escape Room (DBCE)\n   2025 · MESH & DBEATS Councils\n\n④ Team Auction Coordinator — Badminton Team (GCE)\n   2023 – Present · Player evaluation & auction strategy\n\nSummary metrics: 4+ professional & leadership stints · 2-Month ITG internship · 2+ years badminton strategy & leadership · 1st Place TEKFEST win.",
    actions: [
      { label: "Full Journey Section", type: "section", target: "journey" },
      { label: "View Resume", type: "resume" },
    ],
  },
  {
    id: "internship_itg",
    title: "Internship — ITG Goa",
    keywords: ["internship", "itg", "info tech corporation of goa", "industrial trainee", "data analytics internship", "opencv internship", "july", "september", "2025 internship", "summer internship 2025"],
    answer:
      "Role: Industrial Trainee\nOrganization: Info Tech Corporation of Goa Ltd. (ITG)\nDuration: July – September 2025 (2 Months)\nFocus area: Data Analytics + Software Development\n\nDeliverables completed:\n\n① Image processing work in OpenCV:\n   Implemented bit-plane slicing, Fourier Transform operations, image sharpening routines, and Canny edge detection pipelines.\n\n② Social Media Campaign EDA:\n   Full exploratory data analysis across 46 survey respondents — user demographic profiling, response segmentation, campaign performance insights.\n\n③ Full-Stack Text-to-Speech (TTS) Application:\n   Built and delivered a complete React + Flask Text-to-Speech web app with downloadable audio output functionality.\n\nThis internship showcases Samarth working simultaneously on low-level image processing (OpenCV), analytics work (EDA), and a full-stack deployed app (React/Flask).",
    actions: [
      { label: "Journey Section", type: "section", target: "journey" },
      { label: "Programming Skills", type: "section", target: "skills" },
    ],
  },
  {
    id: "leadership_badminton_head",
    title: "Leadership — Badminton Head Coordinator",
    keywords: ["head coordinator", "badminton committee", "happenings", "happenings fest", "inter collegiate", "gce badminton", "event coordination", "logistics", "scheduling", "fest", "leadership position"],
    answer:
      "Role: Head Coordinator — Student Badminton Committee\nOrganization: Goa College of Engineering (GCE)\nYear: 2025\nEvent: HAPPENINGS — GCE's annual inter-collegiate cultural and sports fest.\n\nResponsibilities owned end-to-end:\n• Fixture design and match scheduling across entire badminton event\n• Team logistics for visiting inter-collegiate participants\n• On-ground event operations throughout the fest duration\n• Smooth coordination with participants, officials, and fest committee\n\nThis demonstrates project management, stakeholder coordination, and high-pressure delivery on a live multi-day event scale.",
    actions: [
      { label: "Journey Section", type: "section", target: "journey" },
      { label: "Badminton (Beyond Work)", type: "section", target: "about" },
    ],
  },
  {
    id: "auction_strategy",
    title: "Badminton Auction Strategy & Team Building",
    keywords: ["auction coordinator", "team auction", "badminton auction", "player evaluation", "team building", "team composition", "roster selection", "auction strategy", "squad formation", "team formation"],
    answer:
      "Role: Team Auction Coordinator\nOrganization: GCE Badminton Team\nDuration: 2023 – Present (2+ years continuous involvement)\n\nScope of work:\n• Player scouting & performance evaluation for squad selection across multiple annual badminton leagues\n• Auction strategy — budget allocation, roster balance analysis, draft order positioning\n• Supporting key final team composition and roster-selection decisions each competitive season\n\nThis role is directly analogous to product/strategy work in a corporate setting: multi-constraint decision-making, trade-off analysis under uncertainty, and measurable outcome accountability each season.",
    actions: [
      { label: "Journey Section", type: "section", target: "journey" },
      { label: "Badminton Champion", type: "section", target: "about" },
    ],
  },
  {
    id: "tekfest_win",
    title: "TEKFEST 2.0 — 1st Place Win",
    keywords: ["tekfest", "tekfest 2.0", "1st place", "escape room", "dbce", "mesh", "dbeats", "councils", "competition win", "award", "achievement", "problem solving", "analytical thinking competition"],
    answer:
      "Competition: TEKFEST 2.0 Escape Room\nOrganizer: DBCE's MESH & DBEATS Councils\nResult: 1st Place 🏆\nYear: 2025\n\nDemonstrated signals:\n• Analytical thinking under strict time pressure\n• Quick on-your-feet problem-solving\n• Team collaboration and communication\n• Structured puzzle decomposition in a timed environment\n\nThis is a strong signal for roles requiring rapid structured decision-making — such as consulting, product analytics, and case-interview style roles.",
    actions: [
      { label: "Journey Section", type: "section", target: "journey" },
      { label: "About / Differentiators", type: "section", target: "about" },
    ],
  },
  {
    id: "beyond_work_all",
    title: "Beyond Work — Personal Dimension (All 5)",
    keywords: ["beyond work", "personal", "personal interests", "hobbies", "life outside", "interests", "extracurricular", "personal dimension", "badminton", "harmonium", "leadership", "nptel", "continuous learning"],
    answer:
      "Beyond analytics and code, Samarth has 5 strong personal signals on the portfolio:\n\n🏸 Badminton — Goa University Inter-Collegiate Champion (2023–24). Part of the GCE Men's Badminton Team. Also Team Auction Coordinator since 2023.\n\n◈ Leadership — Events, teams and coordination at scale. From Head Coordinator at HAPPENINGS fest to sustained Team Auction Coordinator work.\n\n♪ Harmonium / Indian Classical Music — Represented Goa at National Kala Utsav. State-level 1st place in Harmonium competition. Govt of India CCRT Scholarship (₹48K over 2 years, 2019–21).\n\n⌘ NPTEL Courses — 8+ certified courses cleared, 75%+ pass rate consistency. Recognised as NPTEL Enthusiast and NPTEL Motivated Learner.\n\n∞ Continuous Learning — Active upskilling beyond coursework: Google AI Essentials 5-course Specialization on Coursera, Be10X AI Tools & Claude workshop certification.",
    actions: [
      { label: "Beyond Work (About)", type: "section", target: "about" },
      { label: "Certifications (Skills)", type: "section", target: "skills" },
    ],
  },
  {
    id: "badminton_detailed",
    title: "Badminton — Championship Profile",
    keywords: ["badminton", "goa university champion", "champion", "gce men's team", "men's badminton", "inter collegiate", "sports achievement", "2023-24 champion"],
    answer:
      "Badminton achievements and involvement:\n\n• Title: Goa University Inter-Collegiate Badminton Champion — 2023–24 season\n• Team: GCE Men's Badminton Team (active member)\n• Leadership: Team Auction Coordinator (2023 – Present)\n• Event Management: Head Coordinator for Badminton event at GCE's HAPPENINGS inter-collegiate fest (2025)\n\nThe combination of athletic championship-level competition + strategic auction/team-building leadership + large-event operations experience is unusual and strong — it signals competitive drive, discipline, strategy under pressure, and delivery accountability.",
    actions: [
      { label: "Beyond Work Section", type: "section", target: "about" },
      { label: "Journey Section", type: "section", target: "journey" },
    ],
  },
  {
    id: "harmonium_music",
    title: "Harmonium & Classical Music",
    keywords: ["harmonium", "music", "classical music", "indian classical", "kala utsav", "ccrt", "scholarship", "state level", "national level", "goa kala utsav"],
    answer:
      "Harmonium and Indian Classical Music profile:\n\n• National Kala Utsav: Represented the state of Goa at the national-level Kala Utsav competition\n• State-level 1st Place: Harmonium competition champion at the state level\n• Government of India CCRT Scholarship: Talent Grant Awarded — ₹48,000 overall, disbursed across 2 years (2019–2021). Awarded by the Centre for Cultural Resources and Training.\n\nThis discipline — years of deliberate classical practice, competition at state and national levels, and external government validation — transfers directly to the sustained focus and structured practice required for high-performance analytics and engineering roles.",
    actions: [
      { label: "Beyond Work (About)", type: "section", target: "about" },
      { label: "Certifications (Skills)", type: "section", target: "skills" },
    ],
  },
  {
    id: "availability_roles",
    title: "Availability & Target Roles",
    keywords: ["available", "availability", "open to", "hiring", "looking for", "roles", "target roles", "position", "opportunities", "summer 2027", "internship", "summer internship", "full time", "full-time", "which roles", "seeking", "employment", "job openings"],
    answer:
      "Samarth is currently OPEN to the following:\n\n▸ Summer 2027 Internships (analytics/consulting/product/BI intern roles)\n▸ Full-time roles in the following functions:\n\n   • Business Analytics\n   • Data Analytics\n   • Product Analytics\n   • Business Intelligence\n   • Strategy & Consulting\n\nHe can start conversations with recruiters immediately. Response time advertised on the contact section: responding within 24 hours.\n\nThe site's hero section also displays a live green availability badge confirming 'Summer Internship 2027 · Available'.",
    actions: [
      { label: "Contact Section", type: "section", target: "contact" },
      { label: "Home / Hero Section", type: "section", target: "home" },
      { label: "Download Resume", type: "resume" },
    ],
  },
  {
    id: "contact_full",
    title: "Full Contact Details",
    keywords: ["contact", "how to contact", "full contact", "all contact", "contact details", "reach out", "get in touch", "email samarth", "phone number", "linkedin samarth", "connect", "message samarth", "direct contact"],
    answer:
      "You can reach Samarth through any of the channels below. Response time is advertised as within 24 hours.\n\n📧 Email\n  samarth.kamat2026b@gim.ac.in\n\n📞 Phone / WhatsApp / Call\n  +91-7709085986\n\n💼 LinkedIn\n  linkedin.com/in/samarthkamat\n\n📄 Resume\n  Available for download/view from the Home section, Nav bar, Contact section, Footer, and below.\n\n✉️ Direct Message Form\n  A full contact form (Name · Email · Message) is also present on the Contact section of the site.",
    actions: [
      { label: "Email Samarth", type: "link", href: "mailto:samarth.kamat2026b@gim.ac.in" },
      { label: "Open LinkedIn", type: "link", href: "https://linkedin.com/in/samarthkamat", target: "_blank" },
      { label: "Contact Section", type: "section", target: "contact" },
      { label: "View Resume", type: "resume" },
    ],
  },
  {
    id: "approach_methodology",
    title: "4-Step Work Methodology",
    keywords: ["approach", "methodology", "process", "how does he work", "workflow", "4 step", "four step", "business question", "understand explore model recommend", "problem solving approach"],
    answer:
      "Samarth's documented 4-step approach to any problem:\n\n① 01 — UNDERSTAND the business question\n   Clarify the actual decision stakeholders need to make, not just the data dump they have. Start with the end decision in mind.\n\n② 02 — EXPLORE & validate data\n   Run EDA, clean noise and artifacts, surface patterns and hypotheses that will survive a real-world test, not just look good on the training slice.\n\n③ 03 — MODEL & visualise\n   Write the DAX measure, fit the statistical model, build the dashboard the end-user will actually open and use daily. Ship it, don't just slide it.\n\n④ 04 — RECOMMEND with impact\n   Translate numbers into concrete action items — with supporting evidence, explicit limitations of the analysis, and measurable outcomes to track success.",
    actions: [
      { label: "His Approach (About)", type: "section", target: "about" },
      { label: "See Projects In Action", type: "section", target: "projects" },
    ],
  },
  {
    id: "differentiators_three",
    title: "3 Differentiators (What Sets Him Apart)",
    keywords: ["differentiators", "three pillars", "3 pillars", "pillars", "strengths", "what makes him unique", "unique selling points", "usp", "key strengths", "3 things"],
    answer:
      "The About section highlights three formal differentiator pillars:\n\n① Computer Engineering Foundation\n   C, C++, Python, OpenCV, data structures & algorithms. This code fluency means data pipelines are production-ready, not limited to Jupyter Notebooks. Tagline: Code → Insights.\n\n② Data & Visualisation\n   Power BI dashboards, custom DAX measures, statistical analysis, EDA, and data storytelling across real retail and marketing datasets. Tagline: Power BI · DAX · EDA.\n\n③ AI & Full-Stack Delivery\n   From Gemini API-powered briefings, to React frontend apps, Flask backends, and OpenCV image processing — he ships end-to-end, not just slide decks. Tagline: Gemini · React · Flask.\n\nThis is the 'engineer who speaks business, business student who ships code' positioning from the home section.",
    actions: [
      { label: "Differentiators (About)", type: "section", target: "about" },
    ],
  },
  {
    id: "resume_details",
    title: "Resume / CV",
    keywords: ["resume", "cv", "curriculum vitae", "bio data", "download resume", "view resume", "detailed resume", "full resume", "whats on the resume"],
    answer:
      "The portfolio includes a downloadable / viewable resume image file (Samarth_Resume.png).\n\nThe resume (and this entire portfolio) comprehensively covers:\n\n✓ Complete Education Timeline (PGDM → B.E. → HSC → SSC)\n✓ 3 Flagship Projects (Retail BI Dashboard · AI Briefing Platform · Speech LSTM Disease Detection)\n✓ Core Technical Skills & Tools\n✓ Certifications & Scholarships (Google AI Essentials · Be10X · NPTEL · CCRT)\n✓ Internship and Professional Experience (ITG Goa Industrial Trainee)\n✓ Positions of Responsibility & Leadership\n✓ Sports & Extracurricular Achievements\n\nYou can open the resume directly from the Home section's 'Download Resume' button, the Nav bar, the Footer, or the buttons below.",
    actions: [
      { label: "Open Resume in New Tab", type: "resume" },
      { label: "Contact Section", type: "section", target: "contact" },
    ],
  },
  {
    id: "target_companies_recruiters",
    title: "What Recruiters / Companies Should Know",
    keywords: ["recruiters", "companies", "for recruiters", "hiring managers", "what should i know as a recruiter", "i am hiring", "if i am a recruiter", "looking to hire", "as an employer", "company fit", "ideal role"],
    answer:
      "If you are a recruiter or hiring manager, here is the compressed case for Samarth:\n\n▸ Ideal roles: Summer 2027 internships OR full-time roles in Business Analytics · Data Analytics · Product Analytics · Business Intelligence · Strategy & Consulting.\n\n▸ Why he stands out: Computer Engineering degree + PGDM Big Data Analytics = rare combination. Most candidates can either build analytical outputs OR ship code. Samarth does both, and can present to leadership with a business-school framework.\n\n▸ Proof of delivery: Published Power BI dashboard · Live React/Gemini AI application · Flask-deployed speech ML model · React/Flask TTS app from internship.\n\n▸ Soft-signal validation: 1st place at TEKFEST (time-pressured analytical competition) · Goa University badminton champion (competitive discipline) · 2+ years team auction strategy + event leadership.\n\n▸ Reach him within 24h at samarth.kamat2026b@gim.ac.in · +91-7709085986 · linkedin.com/in/samarthkamat",
    actions: [
      { label: "Email Him Directly", type: "link", href: "mailto:samarth.kamat2026b@gim.ac.in" },
      { label: "Open LinkedIn", type: "link", href: "https://linkedin.com/in/samarthkamat", target: "_blank" },
      { label: "Contact Page", type: "section", target: "contact" },
    ],
  },
  {
    id: "greet",
    title: "Greeting & Intro",
    keywords: ["hi", "hello", "hey", "yo", "hola", "good morning", "good afternoon", "good evening", "greetings", "hey there"],
    answer:
      "Hi 👋 I'm Samarth's AI portfolio assistant. I can answer any question about his background, education, 3 flagship projects, technical stack, certifications, internship and leadership experience, availability for Summer 2027 internships and full-time roles, and contact details.\n\nQuick suggestions:\n• 'Give me an elevator pitch of Samarth'\n• 'Walk me through his 3 projects'\n• 'What roles is he targeting?'\n• 'How do I contact him?'",
    actions: [
      { label: "Elevator Pitch", type: "prompt", target: "Give me a 30-second elevator pitch of Samarth." },
      { label: "3 Key Projects", type: "prompt", target: "Walk me through his 3 strongest projects." },
      { label: "Contact Samarth", type: "section", target: "contact" },
    ],
  },
  {
    id: "thanks",
    title: "Thank You Response",
    keywords: ["thank", "thanks", "thank you", "ty", "appreciate", "appreciated", "helpful", "that helps"],
    answer:
      "You're welcome 😊 If you'd like to continue exploring, I can walk you through specific project details, ranked skills and certifications, career journey highlights, open roles Samarth is targeting, or connect you directly with contact options. Just ask!",
    actions: [
      { label: "Deep-dive Projects", type: "section", target: "projects" },
      { label: "Ranked Skills", type: "section", target: "skills" },
      { label: "Get Resume", type: "resume" },
    ],
  },
  {
    id: "capabilities_help",
    title: "Chatbot Capabilities / Help",
    keywords: ["help", "what can you do", "capabilities", "features", "how to use", "who are you", "what are you", "how does this work", "commands"],
    answer:
      "I'm Samarth's built-in AI portfolio assistant. Here is everything I can help with:\n\n🤵 PROFILE\n• Elevator pitch, background, differentiators, why hire, 4-step work approach\n\n🎓 EDUCATION\n• PGDM at GIM, B.E. Computer Engineering, HSC, SSC, full timeline\n\n💼 PROJECTS\n• All 3 flagship projects · Power BI Retail Dashboard · Gemini AI Briefing · Stacked LSTM speech disease detection · Live app links\n\n🛠️ SKILLS & CERTS\n• Ranked core proficiencies · Full skills by category · All 5 certifications\n\n🚀 JOURNEY\n• ITG internship · Badminton leadership · TEKFEST 1st place · Auction strategy\n\n🏸 BEYOND WORK\n• Badminton championship · Harmonium / CCRT scholarship · NPTEL · Continuous learning\n\n📬 HIRING & CONTACT\n• Target roles · Summer 2027 availability · Full contact details · Resume\n\nI also support quick actions like jumping to any section, opening live project links, or opening the resume in a new tab.",
    actions: [
      { label: "Start with Overview", type: "prompt", target: "Give me a 30-second elevator pitch of Samarth." },
      { label: "Jump to Home", type: "section", target: "home" },
    ],
  },
]

const introMessage = {
  id: "intro-message",
  role: "bot",
  text:
    "Hi 👋 I'm Samarth's AI portfolio assistant. Ask me anything about his background, projects, skills, career journey, certifications, availability, or contact details. I can also jump you straight to any section or open the live projects.",
  actions: [
    { label: "Quick Overview", type: "prompt", target: "Give me a 30-second elevator pitch of Samarth." },
    { label: "Top Projects", type: "section", target: "projects" },
    { label: "Target Roles", type: "prompt", target: "What roles is he targeting right now?" },
    { label: "Contact Samarth", type: "section", target: "contact" },
  ],
}

const fallbackResponse = {
  text:
    "Hmm — that specific phrasing isn't in my indexed portfolio knowledge yet. I'm strongest on Samarth's background, 3 projects, education, ranked skills & certifications, journey & leadership, badminton & music profile, Summer 2027 availability, resume, and contact details.\n\nTry rephrasing with keywords like 'projects', 'power bi', 'internship', 'skills', 'why hire', or click a suggestion below.",
  actions: [
    { label: "Elevator Pitch", type: "prompt", target: "Give me a 30-second elevator pitch of Samarth." },
    { label: "3 Projects Deep-dive", type: "prompt", target: "Walk me through his 3 strongest projects." },
    { label: "Hire Him →", type: "prompt", target: "Why should we hire Samarth?" },
    { label: "Contact Details", type: "section", target: "contact" },
  ],
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s+\-/%₹$&.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function expandWithSynonyms(tokens) {
  const expanded = new Set(tokens)
  tokens.forEach((t) => {
    Object.values(synonyms).forEach((group) => {
      if (group.some((s) => t === s || t.includes(s) || s.includes(t))) {
        group.forEach((s) => expanded.add(s))
      }
    })
  })
  return [...expanded]
}

function uniqueActions(actions) {
  const seen = new Set()
  return actions.filter((action) => {
    const key = `${action.type}-${action.label}-${action.target || action.href || ""}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function bigrams(tokens) {
  const result = []
  for (let i = 0; i < tokens.length - 1; i++) {
    result.push(`${tokens[i]} ${tokens[i + 1]}`)
  }
  return result
}

function trigrams(tokens) {
  const result = []
  for (let i = 0; i < tokens.length - 2; i++) {
    result.push(`${tokens[i]} ${tokens[i + 1]} ${tokens[i + 2]}`)
  }
  return result
}

function scoreTopic(question, topic, intentHits = []) {
  const normalizedQuestion = normalizeText(question)
  const qTokens = normalizedQuestion.split(" ").filter((t) => t.length > 1)
  const qBigrams = bigrams(qTokens)
  const qTrigrams = trigrams(qTokens)
  const qExpanded = expandWithSynonyms(qTokens)

  const normalizedAnswer = normalizeText(topic.answer)
  const normalizedKeywords = topic.keywords.map(normalizeText)
  const normalizedTitle = normalizeText(topic.title)
  const corpus = `${normalizedTitle} ${normalizedAnswer} ${normalizedKeywords.join(" ")}`
  const corpusTokens = corpus.split(" ").filter((t) => t.length > 1)
  const corpusBigrams = bigrams(corpusTokens)
  const corpusTrigrams = trigrams(corpusTokens)

  let score = 0

  normalizedKeywords.forEach((keyword) => {
    if (!keyword) return
    const kwTokens = keyword.split(" ").filter((t) => t.length > 1)
    if (kwTokens.length <= 1) {
      if (normalizedQuestion.includes(keyword)) score += 6
    } else {
      if (normalizedQuestion.includes(keyword)) score += 14
      kwTokens.forEach((kt) => {
        if (qTokens.includes(kt)) score += 2
      })
    }
    qExpanded.forEach((et) => {
      if (keyword.includes(et) && et.length > 2) score += 1
    })
  })

  qBigrams.forEach((bg) => {
    if (corpusBigrams.includes(bg)) score += 5
    if (normalizedKeywords.some((k) => k.includes(bg))) score += 10
  })

  qTrigrams.forEach((tg) => {
    if (corpusTrigrams.includes(tg)) score += 9
    if (normalizedKeywords.some((k) => k.includes(tg))) score += 18
  })

  qExpanded.forEach((token) => {
    if (token.length < 3) return
    if (corpus.includes(token)) score += 1.5
    if (normalizedTitle.includes(token)) score += 3
  })

  intentHits.forEach((intent) => {
    if (corpus.includes(intent) || normalizedTitle.includes(intent)) score += 2
  })

  if (qExpanded.some((t) => synonyms.samarth.includes(t))) {
    score += 1
  }

  return score
}

function detectIntent(question) {
  const q = normalizeText(question)
  const found = []
  Object.entries(questionIntents).forEach(([intent, patterns]) => {
    if (patterns.some((p) => q.includes(p))) found.push(intent)
  })
  return found
}

async function callGemini(userQuestion, contextText) {
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || "").trim()
  if (!apiKey || apiKey.includes("your-key-here")) {
    return null
  }

  const model = (import.meta.env.VITE_GEMINI_MODEL || "gemini-2.0-flash").trim()
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  const systemInstruction = `You are an AI assistant embedded in Samarth Ravindra Kamat's personal portfolio website. Answer the user's question based ONLY on the provided PORTFOLIO CONTEXT block below. Be accurate, concise, professional, and recruiter-friendly. Never invent information not in the context. If the context doesn't contain the answer, say so honestly and guide the user to ask about Samarth's background, 3 projects, skills, certifications, career journey, availability for Summer 2027 internships or full-time roles, resume, or contact details. Always frame answers in the third person (he/him/his). Use bullet points for lists if helpful. Use the exact numbers and facts from the context only.

PORTFOLIO CONTEXT:
${contextText}`

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          role: "system",
          parts: [{ text: systemInstruction }],
        },
        contents: [
          {
            role: "user",
            parts: [{ text: userQuestion }],
          },
        ],
        generationConfig: {
          temperature: 0.25,
          topP: 0.8,
          maxOutputTokens: 700,
        },
      }),
    })
    const data = await res.json()
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.output
    if (text && typeof text === "string") {
      return text.trim()
    }
    if (data?.error) {
      console.warn("Gemini API error:", data.error)
    }
    return null
  } catch (err) {
    console.warn("Gemini call failed:", err)
    return null
  }
}

function buildPortfolioAnswer(question) {
  const normalizedQuestion = normalizeText(question)

  if (!normalizedQuestion) {
    return { text: introMessage.text, actions: introMessage.actions, certainty: "high" }
  }

  const intentHits = detectIntent(question)

  const rankedTopics = knowledgeTopics
    .map((topic) => ({ topic, score: scoreTopic(question, topic, intentHits) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  if (!rankedTopics.length) {
    return { ...fallbackResponse, certainty: "none" }
  }

  const topScore = rankedTopics[0].score
  const shouldBlendSecond =
    rankedTopics[1] &&
    (normalizedQuestion.includes(" and ") ||
      normalizedQuestion.includes(" also ") ||
      normalizedQuestion.includes(" plus ") ||
      normalizedQuestion.includes(" + ") ||
      rankedTopics[1].score >= topScore - 5)

  const shouldBlendThird =
    shouldBlendSecond &&
    rankedTopics[2] &&
    rankedTopics[2].score >= topScore - 8

  const cutoff = shouldBlendThird ? 3 : shouldBlendSecond ? 2 : 1
  const selectedTopics = rankedTopics.slice(0, cutoff).map((e) => e.topic)

  const text = selectedTopics.map((t) => t.answer).join("\n\n---\n\n")
  const actions = uniqueActions(selectedTopics.flatMap((t) => t.actions)).slice(0, 4)

  const certainty = topScore >= 20 ? "high" : topScore >= 8 ? "medium" : "low"
  return { text, actions, certainty, contextTopics: selectedTopics }
}

function createMessage(role, text, actions = [], extra = {}) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    text,
    actions,
    ...extra,
  }
}

export default function PortfolioChatbot({ darkMode = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [useAI, setUseAI] = useState(true)
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") return [introMessage]
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : [introMessage]
    } catch {
      return [introMessage]
    }
  })

  const bottomRef = useRef(null)
  const typingTimeoutRef = useRef(null)
  const textareaRef = useRef(null)

  const starterPrompts = useMemo(() => quickPrompts, [])

  const hasGemini = useMemo(() => {
    const k = (import.meta.env.VITE_GEMINI_API_KEY || "").trim()
    return Boolean(k) && !k.includes("your-key-here")
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-20)))
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping, isOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => textareaRef.current?.focus(), 180)
    }
  }, [isOpen])

  const handleAction = (action) => {
    if (action.type === "section") {
      setIsOpen(false)
      setTimeout(() => {
        const element = document.getElementById(action.target)
        element?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 160)
      return
    }
    if (action.type === "resume") {
      window.open(resumeImage, "_blank", "noopener,noreferrer")
      return
    }
    if (action.type === "link") {
      if (action.target === "_blank") {
        window.open(action.href, "_blank", "noopener,noreferrer")
      } else {
        window.location.href = action.href
      }
      return
    }
    if (action.type === "prompt") {
      sendMessage(action.target || "")
    }
  }

  const sendMessage = async (rawText) => {
    const text = rawText.trim()
    if (!text || isTyping) return

    const userMessage = createMessage("user", text)
    setMessages((curr) => [...curr, userMessage])
    setDraft("")
    setIsTyping(true)
    setIsOpen(true)

    if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)

    const kbResult = buildPortfolioAnswer(text)

    let finalText = kbResult.text
    let finalActions = kbResult.actions

    if (hasGemini && useAI && kbResult.certainty !== "high") {
      try {
        const contextSnippet = kbResult.contextTopics
          ? kbResult.contextTopics.map((t) => `[${t.title}]\n${t.answer}`).join("\n\n")
          : knowledgeTopics
              .slice(0, 8)
              .map((t) => `[${t.title}]\n${t.answer}`)
              .join("\n\n")
        const aiReply = await callGemini(text, contextSnippet)
        if (aiReply) {
          finalText = aiReply
          if (kbResult.contextTopics && kbResult.contextTopics.length) {
            finalActions = uniqueActions([
              ...kbResult.actions,
              { label: "See Section →", type: "section", target: kbResult.contextTopics[0].id === "contact_full" ? "contact" : kbResult.contextTopics[0].id === "resume_details" ? "contact" : "projects" },
            ]).slice(0, 4)
          }
        }
      } catch (e) {
        console.warn(e)
      }
    }

    const typingDelay = finalText.length > 450 ? 520 : finalText.length > 200 ? 430 : 340

    typingTimeoutRef.current = window.setTimeout(() => {
      const botMessage = createMessage("bot", finalText, finalActions, {
        aiEnhanced: hasGemini && useAI && kbResult.certainty !== "high",
      })
      setMessages((curr) => [...curr, botMessage])
      setIsTyping(false)
    }, typingDelay)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(draft)
  }

  const clearChat = () => {
    setMessages([introMessage])
    setDraft("")
    setIsTyping(false)
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/35 backdrop-blur-[3px] sm:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="w-[calc(100vw-1.5rem)] sm:w-[420px] md:w-[440px] h-[min(76vh,680px)] rounded-[2rem] overflow-hidden shadow-[0_30px_100px_rgba(15,23,42,0.34)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.75)]"
              style={darkMode ? {
                background: "linear-gradient(160deg, #0F0F1A 0%, #151525 50%, #0D0D16 100%)",
              } : {
                background: "linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(248,248,255,0.94) 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={darkMode ? {
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(124,58,237,0.32), transparent 50%), radial-gradient(circle at 0% 100%, rgba(236,72,153,0.22), transparent 50%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.10), transparent 60%)",
                } : {
                  background: "radial-gradient(circle at 100% 0%, rgba(124,58,237,0.20), transparent 52%), radial-gradient(circle at 0% 100%, rgba(236,72,153,0.14), transparent 52%)",
                }}
              />

              <div className="relative flex h-full flex-col dark:text-white text-[#141414]">
                <div className="absolute inset-x-0 top-0 h-[2.5px]" style={{ background: "linear-gradient(90deg, #06B6D4, #2563EB, #7C3AED, #EC4899, #F59E0B, #06B6D4)", backgroundSize: "300% 100%", animation: "shimmerBar 6s linear infinite" }} />

                <div className="relative px-5 pt-5 pb-4 border-b border-black/[0.06] dark:border-white/[0.07] overflow-hidden">
                  <div className="absolute -top-16 right-0 w-40 h-40 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.65), transparent 60%)" }} />
                  <div className="absolute top-4 left-4 w-24 h-24 rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.5), transparent 60%)" }} />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-10 rounded-full opacity-25 blur-2xl pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.5), transparent 60%)" }} />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <div
                          className="w-13 h-13 rounded-[1.3rem] flex items-center justify-center text-white shadow-2xl relative overflow-hidden"
                          style={{
                            width: "52px",
                            height: "52px",
                            background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 30%, #7C3AED 65%, #EC4899 100%)",
                            boxShadow: darkMode
                              ? "0 10px 30px rgba(37,99,235,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset"
                              : "0 10px 28px rgba(124,58,237,0.35), 0 0 0 1px rgba(255,255,255,0.35) inset",
                          }}
                        >
                          <span className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.85), transparent 55%)" }} />
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                            <path d="M12 3C7.03 3 3 6.58 3 11c0 2.09.91 3.99 2.4 5.41L4.5 21l4.87-1.71c.82.19 1.71.29 2.63.29 4.97 0 9-3.58 9-8s-4.03-8.58-9-8.58Z" />
                            <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
                          </svg>
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-[2.5px] shadow-lg" style={{
                          borderColor: darkMode ? "#0F0F1A" : "#FFFFFF",
                          background: "#10B981",
                          boxShadow: "0 0 0 2.5px rgba(16,185,129,0.25), 0 0 10px rgba(16,185,129,0.7)",
                        }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="mono text-[10px] font-extrabold uppercase tracking-[0.18em] bg-gradient-to-r from-[#06B6D4] via-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent drop-shadow-sm">
                            Portfolio AI Assistant
                          </p>
                          {hasGemini && useAI && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black text-white bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#7C3AED] shadow-[0_0_12px_rgba(37,99,235,0.45)] border border-white/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A5F3FC] shadow-[0_0_6px_rgba(165,243,252,0.9)] animate-pulse" />
                              GEMINI
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-[1.15rem] font-extrabold leading-tight text-[#0B0B12] dark:text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.1)]">
                          Ask anything about <span className="bg-gradient-to-r from-[#06B6D4] via-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">Samarth</span>
                        </h3>
                        <p className="text-[12px] font-semibold text-[#4D4D5A] dark:text-[#C5C5D8] leading-snug mt-0.5">
                          Projects · Skills · Journey · Availability · Contact
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setUseAI((v) => !v)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                          hasGemini
                            ? useAI
                              ? "border-transparent text-white shadow-[0_0_16px_rgba(37,99,235,0.5)]"
                              : "border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-white/[0.05] text-[#4D4D5A] dark:text-[#C5C5D8] hover:text-[#141414] dark:hover:text-white"
                            : "border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-white/[0.05] text-[#9A9AB0] opacity-50 cursor-not-allowed"
                        }`}
                        aria-label="Toggle AI enhancement"
                        title={hasGemini ? (useAI ? "Gemini enhancement ON" : "Gemini enhancement OFF") : "Set VITE_GEMINI_API_KEY to enable Gemini answers"}
                        disabled={!hasGemini}
                        style={hasGemini && useAI ? { background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 50%, #7C3AED 100%)" } : {}}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z" />
                          <path d="M5 15a7 7 0 0 0 14 0M12 22v-4" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={clearChat}
                        className="w-9 h-9 rounded-full flex items-center justify-center border shadow-md transition-all hover:-translate-y-[1px]"
                        style={darkMode ? {
                          borderColor: "rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.06)",
                          color: "#C5C5D8",
                        } : {
                          borderColor: "rgba(0,0,0,0.08)",
                          background: "rgba(255,255,255,0.75)",
                          color: "#4D4D5A",
                        }}
                        onMouseEnter={(e) => {
                          if (darkMode) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                            e.currentTarget.style.color = "#FFFFFF";
                          } else {
                            e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                            e.currentTarget.style.color = "#141414";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (darkMode) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                            e.currentTarget.style.color = "#C5C5D8";
                          } else {
                            e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                            e.currentTarget.style.color = "#4D4D5A";
                          }
                        }}
                        aria-label="Clear chat"
                        title="Clear conversation"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="M19 6l-1 14H6L5 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="w-9 h-9 rounded-full flex items-center justify-center border shadow-md transition-all hover:-translate-y-[1px]"
                        style={darkMode ? {
                          borderColor: "rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.06)",
                          color: "#C5C5D8",
                        } : {
                          borderColor: "rgba(0,0,0,0.08)",
                          background: "rgba(255,255,255,0.75)",
                          color: "#4D4D5A",
                        }}
                        onMouseEnter={(e) => {
                          if (darkMode) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                            e.currentTarget.style.color = "#FFFFFF";
                          } else {
                            e.currentTarget.style.background = "rgba(255,255,255,0.95)";
                            e.currentTarget.style.color = "#141414";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (darkMode) {
                            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                            e.currentTarget.style.color = "#C5C5D8";
                          } else {
                            e.currentTarget.style.background = "rgba(255,255,255,0.75)";
                            e.currentTarget.style.color = "#4D4D5A";
                          }
                        }}
                        aria-label="Close chatbot"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-transparent scroll-smooth">
                  {messages.map((message, idx) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: idx === messages.length - 1 ? 8 : 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[88%] ${message.role === "user" ? "items-end" : "items-start"} flex flex-col gap-2`}>
                        <div className={`flex items-center gap-2 ${message.role === "user" ? "self-end" : "self-start"}`}>
                          {message.role === "bot" && (
                            <div className="relative shrink-0">
                              <span
                                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0 relative overflow-hidden"
                                style={{
                                  background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 30%, #7C3AED 65%, #EC4899 100%)",
                                  boxShadow: darkMode
                                    ? "0 4px 14px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset"
                                    : "0 4px 14px rgba(124,58,237,0.3), 0 0 0 1px rgba(255,255,255,0.35) inset",
                                }}
                              >
                                <span className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.85), transparent 55%)" }} />
                                <span className="relative drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">SK</span>
                              </span>
                            </div>
                          )}
                          <div
                            className={`rounded-[1.3rem] px-4.5 py-3.5 text-[14px] leading-relaxed shadow-lg ${
                              message.role === "user"
                                ? "text-white rounded-br-sm"
                                : "rounded-bl-sm border"
                            }`}
                            style={
                              message.role === "user"
                                ? {
                                    background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 35%, #7C3AED 70%, #EC4899 100%)",
                                    boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
                                  }
                                : darkMode
                                ? {
                                    background: "linear-gradient(160deg, #1E1E2E 0%, #252538 100%)",
                                    color: "#F0F0FA",
                                    borderColor: "rgba(255,255,255,0.12)",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                                  }
                                : {
                                    background: "linear-gradient(160deg, #FFFFFF 0%, #F5F5FF 100%)",
                                    color: "#1A1A25",
                                    borderColor: "rgba(0,0,0,0.08)",
                                    boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
                                  }
                            }
                          >
                            {message.aiEnhanced && (
                              <div className="flex items-center gap-1 mb-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black text-white bg-gradient-to-r from-[#06B6D4] via-[#2563EB] to-[#7C3AED] shadow-[0_0_10px_rgba(37,99,235,0.35)] border border-white/15">
                                  ✦ GEMINI AI
                                </span>
                              </div>
                            )}
                            <p className="whitespace-pre-line font-medium leading-relaxed">{message.text}</p>
                          </div>
                        </div>

                        {message.role === "bot" && message.actions?.length > 0 && (
                          <div className="flex flex-wrap gap-2 pl-9 mt-1.5">
                            {message.actions.map((action) => (
                              <button
                                key={`${message.id}-${action.label}-${action.target || action.href || ""}`}
                                type="button"
                                onClick={() => handleAction(action)}
                                className="group text-[11px] font-extrabold px-3.5 py-2 rounded-xl border transition-all hover:-translate-y-[2px] shadow-sm hover:shadow-md"
                                style={darkMode ? {
                                  borderColor: "rgba(167,139,250,0.3)",
                                  background: "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(236,72,153,0.16))",
                                  color: action.type === "prompt" || action.type === "section" ? "#C4B5FD" : "#F9A8D4",
                                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                                } : {
                                  borderColor: "rgba(124,58,237,0.25)",
                                  background: "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(236,72,153,0.10))",
                                  color: action.type === "prompt" || action.type === "section" ? "#5B21B6" : "#9D174D",
                                }}
                              >
                                {action.label}
                                <span className="inline-block ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform font-black">
                                  {action.type === "resume" ? "↗" : action.type === "link" ? "↗" : "→"}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {messages.length === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="pl-9 mt-2"
                    >
                      <p className="mono text-[10px] font-black uppercase tracking-[0.18em] mb-3 drop-shadow-sm" style={{ color: darkMode ? "#A78BFA" : "#7C3AED" }}>✨ TRY THESE</p>
                      <div className="flex flex-wrap gap-2.5">
                        {starterPrompts.map((prompt, i) => (
                          <motion.button
                            key={prompt}
                            type="button"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 + i * 0.07 }}
                            onClick={() => sendMessage(prompt)}
                            whileHover={{ y: -2 }}
                            className="text-left text-[12.5px] font-bold px-4 py-3 rounded-2xl border shadow-md hover:shadow-xl transition-all"
                            style={darkMode ? {
                              borderColor: "rgba(167,139,250,0.35)",
                              background: "linear-gradient(135deg, #2A2A40 0%, #1E1E30 100%)",
                              color: "#E0E7FF",
                              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                            } : {
                              borderColor: "rgba(124,58,237,0.25)",
                              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,255,0.95) 100%)",
                              color: "#312E81",
                            }}
                          >
                            <span className="inline-block mr-2 text-base" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}>
                              {["🎯", "💼", "🚀", "📬"][i]}
                            </span>
                            <span className="font-extrabold">{prompt}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="pl-0 flex items-center gap-2">
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0 shadow-lg relative overflow-hidden"
                          style={{ background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 35%, #7C3AED 70%, #EC4899 100%)", boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}
                        >
                          <span className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), transparent 55%)" }} />
                          <span className="relative">SK</span>
                        </span>
                        <div
                          className="rounded-[1.3rem] rounded-bl-sm px-5 py-3.5 border shadow-lg"
                          style={darkMode ? {
                            background: "linear-gradient(160deg, #1E1E2E 0%, #252538 100%)",
                            borderColor: "rgba(255,255,255,0.12)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                          } : {
                            background: "linear-gradient(160deg, #FFFFFF 0%, #F5F5FF 100%)",
                            borderColor: "rgba(0,0,0,0.08)",
                            boxShadow: "0 8px 24px rgba(15,23,42,0.10)",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.7)]" style={{ background: "#06B6D4", animation: "pulseGlow 1.1s ease-out infinite" }} />
                            <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.7)]" style={{ background: "#2563EB", animation: "pulseGlow 1.1s ease-out 120ms infinite" }} />
                            <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.7)]" style={{ background: "#7C3AED", animation: "pulseGlow 1.1s ease-out 240ms infinite" }} />
                            <span className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.7)] ml-0.5" style={{ background: "#EC4899", animation: "pulseGlow 1.1s ease-out 360ms infinite" }} />
                            <span className="ml-2.5 text-[11.5px] font-black" style={{ color: darkMode ? "#C4B5FD" : "#7C3AED" }}>⚡ Samarth AI is thinking…</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={bottomRef} />
                </div>

                <div className="px-4 pt-3.5 pb-4 border-t border-black/[0.08] dark:border-white/[0.12] bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]">
                  <form onSubmit={handleSubmit} className="flex items-end gap-3">
                    <div className="flex-1">
                      <label htmlFor="portfolio-chatbot-input" className="sr-only">
                        Ask a question about Samarth
                      </label>
                      <textarea
                        id="portfolio-chatbot-input"
                        ref={textareaRef}
                        rows={1}
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSubmit(e)
                          }
                        }}
                        onInput={(e) => {
                          const el = e.currentTarget
                          el.style.height = "auto"
                          el.style.height = `${Math.min(el.scrollHeight, 140)}px`
                        }}
                        placeholder="Ask about projects, skills, internships, roles…"
                        className="w-full resize-none rounded-[1.15rem] border-2 border-black/[0.10] dark:border-white/[0.15] bg-white dark:bg-[#12121C] px-4.5 py-3.5 text-[14.5px] font-semibold text-[#14141F] dark:text-[#F5F5FF] placeholder:text-[#808094] dark:placeholder:text-[#6A6A82] outline-none focus:border-[#7C3AED] dark:focus:border-[#A78BFA] focus:ring-4 focus:ring-[#7C3AED]/20 dark:focus:ring-[#A78BFA]/25 transition-all shadow-[0_4px_16px_rgba(15,23,42,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={draft.trim() && !isTyping ? { y: -2, scale: 1.05 } : {}}
                      whileTap={draft.trim() && !isTyping ? { scale: 0.96 } : {}}
                      disabled={!draft.trim() || isTyping}
                      className="shrink-0 w-12 h-12 rounded-[1.15rem] flex items-center justify-center text-white shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 30%, #7C3AED 65%, #EC4899 100%)",
                        boxShadow: "0 12px 32px rgba(37,99,235,0.45)",
                      }}
                      aria-label="Send message"
                    >
                      <span className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.85), transparent 55%)" }} />
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                        <path d="M22 2 11 13" />
                        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                      </svg>
                    </motion.button>
                  </form>
                  <p className="text-[10px] text-center mt-2.5 font-bold tracking-wide" style={{ color: "#5A5A72" }}>
                    <span className="dark:hidden">
                      {hasGemini
                        ? useAI
                          ? "⚡ Hybrid: Knowledge Base + Gemini AI · Esc to close"
                          : "📚 Knowledge Base mode · Esc to close"
                        : "📚 Knowledge Base mode · Set VITE_GEMINI_API_KEY for Gemini AI · Esc closes"}
                    </span>
                    <span className="hidden dark:inline" style={{ color: "#B0B0C4" }}>
                      {hasGemini
                        ? useAI
                          ? "⚡ Hybrid: Knowledge Base + Gemini AI · Esc to close"
                          : "📚 Knowledge Base mode · Esc to close"
                        : "📚 Knowledge Base mode · Set VITE_GEMINI_API_KEY for Gemini AI · Esc closes"}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden sm:flex items-center gap-2.5 rounded-full px-4 py-2 border shadow-2xl cursor-pointer hover:-translate-y-1 transition-all group"
            style={darkMode ? {
              borderColor: "rgba(167,139,250,0.35)",
              background: "linear-gradient(135deg, #151525 0%, #1A1A2E 100%)",
              color: "#E5E7FF",
              boxShadow: "0 12px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(124,58,237,0.1)",
            } : {
              borderColor: "rgba(255,255,255,0.85)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #F5F0FF 100%)",
              color: "#2E1065",
              boxShadow: "0 12px 36px rgba(15,23,42,0.18), 0 0 0 1px rgba(124,58,237,0.08)",
            }}
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10B981" }} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#10B981", boxShadow: "0 0 0 2px rgba(16,185,129,0.25), 0 0 8px rgba(16,185,129,0.6)" }} />
            </span>
            <span className="text-[12px] font-black tracking-wide drop-shadow-sm">💬 Chat with Samarth AI</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-65 group-hover:translate-x-0.5 transition-transform" style={{ color: darkMode ? "#A78BFA" : "#7C3AED" }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        )}

        <motion.button
          type="button"
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((curr) => !curr)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[1.6rem] text-white overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, #06B6D4 0%, #2563EB 25%, #7C3AED 60%, #EC4899 100%)",
            boxShadow: darkMode
              ? "0 22px 65px rgba(124,58,237,0.6), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 40px rgba(6,182,212,0.15)"
              : "0 20px 55px rgba(124,58,237,0.5), 0 0 0 1px rgba(255,255,255,0.3) inset, 0 0 40px rgba(6,182,212,0.12)",
          }}
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        >
          <span className="absolute inset-0 opacity-45 group-hover:opacity-60 transition-opacity" style={{ background: "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.9), transparent 55%)" }} />
          <span className="absolute -inset-[2px] rounded-[1.8rem] opacity-70 pointer-events-none" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 22%, transparent 58%, rgba(236,72,153,0.45) 100%)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "2.5px",
          }} />

          <span
            className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
            style={{
              animation: "pulseGlow 2.2s ease-out infinite",
            }}
          />

          <span className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-45 pointer-events-none" style={{ background: "#06B6D4" }} />
          <span className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "#F59E0B" }} />
          <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "#EC4899" }} />

          <span className="relative z-10 flex items-center justify-center w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            {isOpen ? (
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3C7.03 3 3 6.58 3 11c0 2.09.91 3.99 2.4 5.41L4.5 21l4.87-1.71c.82.19 1.71.29 2.63.29 4.97 0 9-3.58 9-8s-4.03-8.58-9-8.58Z" />
                <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
              </svg>
            )}
          </span>

          <span className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full shadow-[0_0_0_2.5px_rgba(16,185,129,0.28),0_0_10px_rgba(16,185,129,0.8)] animate-pulse" style={{ background: "#10B981" }} />
        </motion.button>
      </div>
    </>
  )
}
