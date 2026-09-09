// ---------------------------------------------------------------------------
// Central data store — all static content arrays live here.
// Importing from a single file keeps component files focused on UI logic only.
// ---------------------------------------------------------------------------

// ─── Tech Marquee ───────────────────────────────────────────────────────────

export const stack = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Express.js",
  "FastAPI",
  "REST APIs",
  "PostgreSQL",
  "SQL",
  "DynamoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Keras",
  "NLP/GPT",
  "Computer Vision",
  "MLOps",
  "Model Deployment",
  "Feature Engineering",
  "Anomaly Detection",
  "Spark/PySpark",
  "Pandas",
  "BigQuery",
];

// ─── Projects ───────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  category: "AI/ML" | "Fullstack" | "Data/Analytics";
  description: string;
  tags: string[];
  image: string;
  year: string;
  href: string;
};

export const projects: Project[] = [
  {
    title: "Bijli Bachao AI",
    category: "AI/ML",
    description:
      "AI powered electricity bill analyzer using Gemini Vision API, built for the Google AISeekho Program and deployed on Cloud Run.",
    tags: ["Gemini Vision API", "FastAPI", "Next.js"],
    image: "/images/bijli.png",
    year: "2026",
    href: "https://bijli-bachao-ai-843802796503.us-west1.run.app",
  },
  {
    title: "RaceBox",
    category: "Data/Analytics",
    description:
      "F1 analytics platform running Monte Carlo simulations to model race outcomes and strategy, with a FastAPI backend serving real-time predictions.",
    tags: ["FastAPI", "Python", "Monte Carlo Simulation", "React"],
    image: "/images/racebox.png",
    year: "2026",
    href: "https://github.com/cortex1020/F1-Simulator",
  },
  {
    title: "Connect-4",
    category: "AI/ML",
    description:
      "Connect 4 game with an unbeatable AI opponent using Minimax and Alpha-Beta Pruning, built with Python and Pygame.",
    tags: ["Python", "Pygame", "Minimax", "Alpha-Beta Pruning"],
    image: "/images/connect.jpeg",
    year: "2026",
    href: "https://github.com/cortex1020/connect4-ai",
  },
  {
    title: "CodeConvo",
    category: "Fullstack",
    description:
      "Full stack discussion forum platform with user authentication, custom forum creation, threaded replies, and category based filtering and search.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/codeconvo.jpeg",
    year: "2025",
    href: "https://github.com/cortex1020/Web-Based-Discussion-Forum",
  },
  {
    title: "AirCor",
    category: "Data/Analytics",
    description:
      "Data science analysis of 890K+ lung cancer records against global air pollution data across 133 countries, uncovering correlations between PM2.5 exposure and health outcomes.",
    tags: ["Python", "Pandas", "Scikit-learn", "SciPy"],
    image: "/images/aircor.png",
    year: "2025",
    href: "https://github.com/cortex1020/global-lung-cancer-analysis",
  },
  {
    title: "Zahoor Perfumes",
    category: "Fullstack",
    description:
      "Shopify storefront for a fragrance retail brand, integrating the Shopify Storefront API with a custom React frontend and GSAP and Framer Motion animations for product browsing and checkout.",
    tags: ["React", "Shopify Storefront API", "GSAP", "Framer Motion"],
    image: "/images/zahoor.jpeg",
    year: "2025",
    href: "https://zahoorperfumes.netlify.app/",
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const roles = [
  {
    period: "2025.4 - 2026.7",
    title: "Machine Learning Engineer",
    company: "HV Vision",
    description:
      "Developed ML pipeline for hyperspectral imaging predictions. Engineered models for high-dimensional feature spaces while maintaining physics-based validity. Collaborated across diverse stakeholder groups including farmers, agronomists, hardware engineers, and executive leadership.",
    stack: ["Python", "Machine Learning", "AWS", "Hyperspectral Imaging", "Feature Engineering", "Model Selection"],
  },
  {
    period: "2024.2 - 2024.9",
    title: "Tech Leader & Senior Software Engineer",
    company: "Yuga Labs",
    description:
      "Architected E2E Twitter bot for fraud detection on company brand impersonation; integrated Google ecosystem for legal team operations. Rearchitected backend infrastructure from key-value storage (Cloudflare Workers) to DynamoDB + S3 automated API. Built Web3 smart contract integrations enabling customer interactions with blockchain protocols.",
    stack: ["C#", "ASP.NET", "Node.js", "PostgreSQL", "Amazon DynamoDB", "AWS", "React", "TypeScript", "Ethereum", "Web3.js", "Docker", "Jest", "E2E Testing", "Cypress", "OAuth 2", "Tailwind CSS", "API Integration"],
  },
  {
    period: "2022 Mar - 2022 Nov",
    title: "Machine Learning & AI Expert",
    company: "Celegence LLC",
    description:
      "Identified client problems and proposed AI solutions with MVP demonstration. Architected end-to-end AI pipeline from data acquisition through production prediction. Set up MLOps infrastructure for client teams; developed question-answering systems for systematic document review. Built automated document inclusion/exclusion pipeline for document screening. Led agile weekly team meetings and positioned AI product for life science industry market entry.",
    stack: ["Machine Learning", "AI", "Generative Pre-trained Transformers", "NLP", "C#", "Python 3", "PyTorch", "Language Models", "Docker", "MLOps"],
  },
  {
    period: "[2020 – 2021]",
    title: "Machine Learning & Data Science",
    company: "Orlando Health",
    description:
      "Developed data and ML pipeline for ingesting massive healthcare datasets (financial and discharge records). Built predictive models for insurance, readmission, and clustering/segmentation analysis. Collaborated with multidisciplinary teams; prepared reports and presentations. Leveraged GCP compute engine for big data and model development; used PySpark for statistical analysis.",
    stack: ["Data Visualization", "Healthcare", "TensorFlow", "Scikit-learn", "Google Cloud ML", "Pandas", "Python", "Spark", "SQL"],
  },
  {
    period: "[2018 – 2025]",
    title: "Software Engineer Instructor",
    company: "Codecademy",
    description:
      "Led in-depth courses on full-stack topics including Python, SQL, NoSQL, React, Redux, HTML, CSS, Go. Graded coursework and taught students scalable, well-architected code design. Mentored hundreds of students across diverse programming topics.",
    stack: ["Python", "SQL", "MongoDB", "React", "Redux", "JavaScript", "Node.js", "Java", "NoSQL", "HTML", "CSS", "REST APIs", "Test-driven Development"],
  },
  {
    period: "[2016 – 2018]",
    title: "Senior Research Scientist, HPC Software Developer",
    company: "Hexagon Manufacturing Intelligence",
    description:
      "Developed ML models replacing computationally heavy simulations for auto parts design and optimization. Engineered high-performance parallel linear system solver achieving 1000x speedup using sparse direct solvers and iterative methods (PCG, algebraic multigrid). Built sparse/dense C++ linear algebra library with scientific code optimization. Developed probabilistic uncertainty propagation analysis tool. Authored and published peer-reviewed paper on spring back phenomenon.",
    stack: ["Python", "C++", "OpenMP", "MPI", "Machine Learning", "HPC", "Monte-Carlo Simulation", "Design of Experiments"],
  },
  {
    period: "[2015 – 2016]",
    title: "Software Engineer Intern",
    company: "Starbucks",
    description:
      "Built live KPI dashboard scraping metrics from Starbucks database and displaying daily changes to C-level executives. Created live sentiment dashboard streaming tweets, applying NLP for sentiment analysis, and computing daily averages to track public perception over time.",
    stack: ["MongoDB", "Express.js", "Node.js", "React", "Python", "NLP", "JavaScript", "REST APIs"],
  },
  {
    period: "[2014 – 2015]",
    title: "Research Scientist",
    company: "Alstom Power",
    description:
      "Developed semi-analytical software tool for improving old hydraulic turbine performance and avoiding costly replacements. Built predictive tool identifying dangerous structural responses to loads and fluid dynamic forces. Designed and validated experimental setups. Authored documentation, design guidelines, and internal white papers.",
    stack: ["MATLAB", "Python", "Finite Element Method", "ANSYS", "MSC Nastran"],
  },
  {
    period: "[2008 – 2013]",
    title: "PhD Researcher",
    company: "University California San Diego",
    description:
      "Developed mathematical models predicting complex nonlinear systems behavior (fluid-structure interaction, cardiovascular dynamics, weather forecasting). Built high-performance numerical software for solving nonlinear differential equations. Managed supercomputing cluster pipelines; processed and analyzed terabyte-scale results using OpenMP and MPI. Designed and performed experiments validating software predictions. Developed ML meta-models for forecasting without heavy simulations. Taught numerical methods, programming, mathematical modeling courses. Published results in journals and conferences.",
    stack: ["C++", "Fortran", "Python", "Bash", "Linux", "OpenMP", "MPI", "Distributed Computing", "Statistical Analysis", "Signal Processing"],
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications = [
  {
    name: "Professional Engineer",
    issuer: "PEng",
    year: "2024",
    id: "PE-2024-8842",
  },
  {
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2024",
    id: "GCP-PMLE-4410",
  },
  {
    name: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    year: "2025",
    id: "AWS-MLS-7205",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    id: "TF-2024-1187",
  },
  {
    name: "Azure Data Scientist Associate",
    issuer: "Microsoft",
    year: "2025",
    id: "AZ-2025-2110",
  },
  {
    name: "NLP Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
    id: "NLP-2025-0923",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022",
    id: "AWS-SAA-5561",
  },
  {
    name: "MLOps Specialization",
    issuer: "Duke University",
    year: "2025",
    id: "MLO-2025-2748",
  },
  {
    name: "Kubernetes Application Developer",
    issuer: "CKAD",
    year: "2023",
    id: "CKAD-2023-6634",
  },
];

// ─── Footer Socials ──────────────────────────────────────────────────────────

export const socials = [
  { label: "GitHub", href: "https://github.com/cortex1020" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andrejacks" },
  { label: "WhatsApp", href: "https://wa.me/12133153046" },
];
