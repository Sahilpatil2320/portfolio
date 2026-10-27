export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  period: string;
  category: string;
  filterCategories: string[];
  description: string;
  shortDescription: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasLiveDemo: boolean;
  image: string;
  imageAlt: string;
  isPrimaryFeatured: boolean;
}

export const PROJECT_FILTER_CATEGORIES = [
  "All",
  "AI / Machine Learning",
  "Full Stack",
  "Java / Android",
  "Backend & Systems"
] as const;

export type ProjectFilterCategory = typeof PROJECT_FILTER_CATEGORIES[number];

export const PROJECTS: Project[] = [
  {
    id: "startupsync",
    projectNumber: "01",
    title: "StartupSync — AI-Powered Recommendation System",
    period: "Jun 2026 – Present",
    category: "AI / Machine Learning",
    filterCategories: ["AI / Machine Learning", "Full Stack"],
    description: "An AI-powered platform designed to connect startups with relevant investors, mentors, students, and opportunities. I contribute to the recommendation engine, generating profile-based recommendations and helping integrate the engine with the backend.",
    shortDescription: "An AI-powered platform connecting startups with relevant investors, mentors, students, and opportunities using TF-IDF and Cosine Similarity.",
    technologies: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    keyFeatures: [
      "Content-based recommendation engine utilizing TF-IDF vectorization and Cosine Similarity",
      "Top-5 profile matching between startup requirements and investor/mentor domains",
      "Full-stack architecture integrating React frontend with Node.js/Express backend APIs"
    ],
    githubUrl: "https://github.com/Sahilpatil2320/StartupSync-AI-Recommendation-System",
    hasLiveDemo: false,
    image: "/projects/startupsync.svg",
    imageAlt: "StartupSync AI Recommendation System Dashboard Preview",
    isPrimaryFeatured: true
  },
  {
    id: "dypconnect",
    projectNumber: "02",
    title: "DYPConnect — College Professional Networking Platform",
    period: "Jul 2026 – Present",
    category: "Full Stack",
    filterCategories: ["Full Stack", "Backend & Systems"],
    description: "A college networking platform designed to connect students, faculty, and alumni through profiles, connections, opportunities, search, and notifications. The project includes backend services, REST APIs, authentication, database integration, and personalized recommendation features.",
    shortDescription: "College networking platform connecting students, faculty, and alumni with user profiles, connections, opportunities, search, and notifications.",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Git"
    ],
    keyFeatures: [
      "Multi-tier profile architecture for students, faculty members, and alumni",
      "RESTful API services with secure JWT authentication and MongoDB data modeling",
      "Opportunity listings, search indexing, and real-time notification endpoints"
    ],
    githubUrl: "https://github.com/Sahilpatil2320/DYPConnect",
    hasLiveDemo: false,
    image: "/projects/dypconnect.svg",
    imageAlt: "DYPConnect College Professional Networking Platform Preview",
    isPrimaryFeatured: true
  },
  {
    id: "egrampanchayat",
    projectNumber: "03",
    title: "E-Grampanchayat Management System",
    period: "Jan 2026 – May 2026",
    category: "Java / Android",
    filterCategories: ["Java / Android"],
    description: "An Android application designed to simplify access to village-level information and administrative services. It includes citizen records, complaints, announcements, certificates, events, emergency alerts, and village information.",
    shortDescription: "Android application simplifying access to village administration, citizen records, complaints, announcements, and local services.",
    technologies: [
      "Android",
      "Java",
      "XML",
      "SQLite",
      "Android Studio"
    ],
    keyFeatures: [
      "Modules for citizen records, grievance submission, and official village announcements",
      "Certificate requests and emergency public alert dispatch systems",
      "Offline-first mobile persistence powered by SQLite database"
    ],
    githubUrl: "https://github.com/Sahilpatil2320",
    hasLiveDemo: false,
    image: "/projects/egrampanchayat.png",
    imageAlt: "E-Grampanchayat Android Mobile Management App Preview",
    isPrimaryFeatured: true
  },
  {
    id: "prompt-builder",
    projectNumber: "04",
    title: "Prompt Builder Website",
    period: "Aug 2025 – Nov 2025",
    category: "Full Stack",
    filterCategories: ["Full Stack"],
    description: "A Python-based website that helps users create structured prompts through a simple, step-by-step workflow.",
    shortDescription: "A Python web application that helps users construct optimized, structured prompts through a step-by-step workflow.",
    technologies: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    keyFeatures: [
      "Step-by-step guided workflow for crafting precision prompts",
      "Live preview and parameter customization",
      "Quick clipboard integration and lightweight Flask backend"
    ],
    githubUrl: "https://github.com/Sahilpatil2320/Prompt_Builder_Web",
    hasLiveDemo: false,
    image: "/projects/promptbuilder.svg",
    imageAlt: "Prompt Builder Web App Interface",
    isPrimaryFeatured: false
  },
  {
    id: "realtime-chat",
    projectNumber: "05",
    title: "Real-Time Chat Website",
    period: "Feb 2025 – May 2025",
    category: "Backend & Systems",
    filterCategories: ["Backend & Systems"],
    description: "A real-time chat website built with Go and WebSockets, enabling instant, two-way communication without page reloads.",
    shortDescription: "A low-latency messaging application built with Go and WebSockets for instant, bi-directional communication.",
    technologies: [
      "Go",
      "WebSockets",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    keyFeatures: [
      "Full-duplex WebSocket connection handling with Go goroutines",
      "Instant real-time message broadcasting without HTTP polling",
      "Clean responsive chat interface with active participant indicators"
    ],
    githubUrl: "https://github.com/Sahilpatil2320/GoLang_project",
    hasLiveDemo: false,
    image: "/projects/realtime-chat.png",
    imageAlt: "Real-Time Chat Application Built in Go",
    isPrimaryFeatured: false
  },
  {
    id: "student-marks-analyzer",
    projectNumber: "06",
    title: "Student Mark Analyzer",
    period: "Jul 2026 – Aug 2026",
    category: "Full Stack",
    filterCategories: ["Full Stack", "Backend & Systems"],
    description: "An application for analyzing student marks and presenting useful academic information.",
    shortDescription: "Academic analytics dashboard for computing grade metrics, score distributions, and performance insights.",
    technologies: [
      "PHP",
      "MySQL",
      "Chart.js",
      "HTML",
      "CSS"
    ],
    keyFeatures: [
      "Automated total mark calculation, percentage derivations, and grade distribution",
      "Dynamic visual analytics powered by Chart.js",
      "Tabular academic performance reports with individual student breakdowns"
    ],
    githubUrl: "https://github.com/Sahilpatil2320/Student-Marks-Analyzer",
    hasLiveDemo: false,
    image: "/projects/studentmarks.svg",
    imageAlt: "Student Marks Analyzer Performance Dashboard",
    isPrimaryFeatured: false
  }
];
