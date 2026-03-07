export const personalData = {
  name: "Pham Duy Anh",
  tagline: "ML Engineer / AI Engineer",
  bio: "Data Science undergraduate at University of Science and Technology of Hanoi. Passionate AI enthusiast dedicated to working with multimodal data, RAG, and Agentic workflows to drive practical research and applications.",
  email: "phamduyanh0816@gmail.com",
  github: "https://github.com/GinHikat",
  linkedin: "https://www.linkedin.com/in/duy-anh-pham-414b332a7/",
  profileImage: "/src/assets/images/profile.jpg"
};

export const skillsDict = {
  "Programming": ["Python", "R", "Cypher", "TypeScript", "JavaScript", "C", "Java"],
  "Frameworks & AI": ["FastAPI", "React", "LLMs", "RAG", "Agentic Workflows", "XAI"],
  "Technologies": ["Git", "Docker", "AWS", "Databricks", "Neo4J", "MySQL", "LaTeX"],
  "Soft Skills": ["Data Analytics", "Leadership", "Problem Solving", "Mentoring"]
};

export const toolsDict = [
  "Antigravity", "Jupyter", "Databricks", "Docker", "AWS"
];

export const habitsData = [
  { 
    name: "Listening to Music", 
    description: "Finding inspiration and focus through a variety of musical genres."
  },
  { 
    name: "Listening to News", 
    description: "Staying updated with global events and technological breakthroughs."
  },
  { 
    name: "Reading Books", 
    description: "Deepening knowledge through non-fiction, scientific literature, and novels."
  }
];

export const experienceData = [
  {
    role: "Data Analyst (Intern)",
    company: "ActiveFence / ALICE",
    date: "Jun 2025 - Dec 2025",
    description: "Conducted research on LLM performance in RAG and Agentic workflows. Designed large-scale data pipelines supporting AI engineering.",
    galleryImages: [
      "src/assets/images/af1.jpg",
      "src/assets/images/af2.jpg",
      "src/assets/images/af3.jpg",
      "src/assets/images/af4.jpg"
    ]
  },
  {
    role: "Quantitative Research Consultant",
    company: "WorldQuant",
    date: "Apr 2025 - Present",
    description: "Developed sophisticated mathematical models to predict price movements and executed extensive algorithmic backtesting.",
    galleryImages: [
      "src/assets/images/wq.jpg"
    ]
  },
  {
    role: "Research Mentor",
    company: "Fullbright Vietnam ETAs",
    date: "Feb 2025 - May 2025",
    description: "Mentored high school students through the complete scientific research lifecycle, fostering data-driven problem solving.",
    galleryImages: []
  }
];

export const hallOfFameData = [
  {
    name: "LAMOON",
    role: "Musical Idol",
    description: "An incredible Vietnamese singer-songwriter-actor-model whose music and motivation provide boundless inspiration.",
    image: "src/assets/images/mun.jpg",
    link: "https://www.youtube.com/channel/UCiXf3STyI6erTigndCqOb5A",
    galleryImages: [
      "src/assets/images/mun2.jpg",
      "src/assets/images/mun3.jpg",
      "src/assets/images/mun4.jpg"
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Data Science (English Program)",
    school: "University of Science and Technology of Hanoi (USTH)",
    date: "2023 - 2026 (Expected)",
    description: "Major in Data Science. Relavant coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Mining.",
    gpa: "3.62 / 4.00"
  },
  {
    degree: "High School Diploma",
    school: "Yen Hoa High School",
    date: "2020 - 2023",
    description: "Grade: 9.3/10. Top 1 students with highest output score.",
    gpa: "9.3 / 10.0"
  }
];

export const projectsData = [
  {
    title: "Legal Document Retrieval Optimization with Document Graph Representation",
    description: "Developed a hybrid retrieval system for Vietnamese tax law using Graph Representation and NLP, achieving 10% performance gain over traditional vector searches.",
    tech: ["Graph", "FastAPI", "React", "Neo4J", "NLP"],
    link: "https://github.com/GinHikat/Document-Graph-Representation"
  },
  {
    title: "Comprehensive Decoding of Transaction Frauds",
    description: "Benchmarked time-series models (XGBoost, Isolation Forest) and integrated a custom Explainable AI (XAI) evaluation framework for fraud detection.",
    tech: ["Python", "Multi-model Approaches", "XAI", "Data Pipeline"],
    link: "https://github.com/GinHikat/Transactional-Fraud-Detection-with-Explainable-AI"
  },
  {
    title: "Server Request Forecasting for Auto Scaling",
    description: "Analyzed 3M+ REST API requests and deployed a FastAPI web dashboard for system scaling simulation and traffic forecasting.",
    tech: ["FastAPI", "Time-series Modeling", "Time Forecasting", 'System Simulation'],
    link: "https://github.com/GinHikat/FomoKaguya2026"
  }
];
