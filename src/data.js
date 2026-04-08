export const personalData = {
  name: "Pham Duy Anh",
  tagline: "ML Engineer / Data Scientist",
  bio: "Data Science undergraduate at University of Science and Technology of Hanoi. Passionate AI enthusiast dedicated to working with multimodal data, AI Systems, and Agentic workflows to drive practical research and applications.",
  email: "phamduyanh0816@gmail.com",
  phone: "0778484200",
  github: "https://github.com/GinHikat",
  linkedin: "https://www.linkedin.com/in/duy-anh-pham-414b332a7/",
  instagram: "https://www.instagram.com/_gin.hi/?hl=en",
  profileImage: "/images/profile.jpg"
};

export const skillsDict = {
  "Programming": ["Python", "R", "Cypher", "TypeScript", "JavaScript", "C", "Java", 'SQL'],
  "Frameworks & AI": ["FastAPI", "React", "LLMs", "RAG", "Agentic Workflows", "XAI"],
  "Technologies": ["Git", "Docker", "AWS", "Databricks", "Neo4J", "MySQL", "LaTeX"],
  "Soft Skills": ["Communication", "Leadership", "Problem Solving", "Mentoring"]
};


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
    role: "Data Analyst/ AI Engineer (Intern)",
    company: "ActiveFence / ALICE",
    date: "Jun 2025 - Dec 2025",
    description: "Conducted research on LLM performance in RAG and Agentic workflows. Designed large-scale data pipelines supporting AI engineering.",
    galleryImages: [
      "/images/af1.jpg",
      "/images/af2.jpg",
      "/images/af3.jpg",
      "/images/af4.jpg"
    ]
  },
  {
    role: "Quantitative Research Consultant",
    company: "WorldQuant",
    date: "Apr 2025 - Present",
    description: "Developed sophisticated mathematical models to predict price movements and executed extensive algorithmic backtesting.",
    galleryImages: [
      "/images/wq.jpg"
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
    image: "/images/mun.jpg",
    link: "https://www.youtube.com/channel/UCiXf3STyI6erTigndCqOb5A",
    galleryImages: [
      "/images/mun2.jpg",
      "/images/mun3.jpg",
      "/images/mun4.jpg"
    ]
  },
  {
    name: "Miss Peregrine's Home for Peculiar Children",
    role: "Book Series",
    description: "A book series that has significantly influenced my perspective and imagination. Also an effective stress reliever.",
    image: "images/books.jpg",
    link: null,
    galleryImages: []
  }
];

export const educationData = [
  {
    degree: "Bachelor of Data Science (English Program)",
    school: "University of Science and Technology of Hanoi (USTH)",
    date: "2023 - 2026 (Expected)",
    description: "Major in Data Science. Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Data Mining.",
    gpa: "3.7 / 4.00"
  },
  {
    degree: "High School Diploma",
    school: "Yen Hoa High School",
    date: "2020 - 2023",
    description: "Grade: 9.3/10",
    gpa: "9.3 / 10.0"
  }
];

export const projectsData = [
  {
    title: "Legal Document Retrieval Optimization with Document Graph Representation",
    description: "Developed a hybrid retrieval system for Vietnamese tax law using Graph Representation and NLP, achieving 10% performance gain over traditional vector searches.",
    tech: ["Graph Representation", "GraphRAG", "Neo4J", "NLP"],
    link: "https://github.com/GinHikat/Document-Graph-Representation"
  },
  {
    title: "Patient EHR Graph Representation for Multi-task Learning",
    description: "Batch-processed and integrated over 10 heterogeneous data sources centered on MIMIC-IV patient EHR data to build a unified graph representation of patient records, modeling hospital admissions as temporal sequences that capture diagnoses, treatments, and procedures, while enriching the graph with external biomedical knowledge bases to incorporate drug–disease–phenotype interactions for downstream tasks.",
    tech: ["Knowledge Graph", "Multi-model Approaches", "NLP", "Time Series", "Big Data Processing"],
    link: "https://github.com/GinHikat/Patient-EHR-Graph-Representation-for-Multi-task-Learning"
  },
  {
    title: "Server Request Forecasting for Auto Scaling",
    description: "Analyzed 3M+ REST API requests and deployed a FastAPI web dashboard for system scaling simulation and traffic forecasting.",
    tech: ["FastAPI", "Time-series Modeling", "Time Forecasting", 'System Simulation'],
    link: "https://github.com/GinHikat/FomoKaguya2026"
  }, 
  {
    title: "Vid2Manga: Real Video to Manga Transcription",
    description: "Application to catch real life short videos with speech and transcribe them into manga-style text with text bubbles",
    tech: ["Speech2Text", "Speech Diarization", "Manga Page Generation", 'Text Typesetting'],
    link: "https://github.com/GinHikat/Vid2Manga"
  }
];
