export interface SkillItem {
  name: string;
  category: string;
  isLearning?: boolean;
}

export interface SkillCategoryGroup {
  id: string;
  category: string;
  description: string;
  isLearningGroup?: boolean;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: "languages",
    category: "Programming Languages",
    description: "Core languages used for systems, object-oriented software, and algorithms.",
    skills: [
      { name: "Java", category: "Programming Languages" },
      { name: "Python", category: "Programming Languages" },
      { name: "C", category: "Programming Languages" },
      { name: "C++", category: "Programming Languages" },
      { name: "Go", category: "Programming Languages" },
      { name: "C#", category: "Programming Languages" }
    ]
  },
  {
    id: "web-backend",
    category: "Web and Backend",
    description: "Client and server-side technologies for building full-stack applications.",
    skills: [
      { name: "HTML", category: "Web and Backend" },
      { name: "CSS", category: "Web and Backend" },
      { name: "JavaScript", category: "Web and Backend" },
      { name: "React.js", category: "Web and Backend" },
      { name: "Node.js", category: "Web and Backend" },
      { name: "Express.js", category: "Web and Backend" },
      { name: "Flask", category: "Web and Backend" },
      { name: "REST APIs", category: "Web and Backend" }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    description: "Relational, document, and embedded database management systems.",
    skills: [
      { name: "SQLite", category: "Databases" },
      { name: "MySQL", category: "Databases" },
      { name: "MongoDB", category: "Databases" }
    ]
  },
  {
    id: "core-concepts",
    category: "Core Concepts",
    description: "Fundamental computer science foundations and software principles.",
    skills: [
      { name: "Data Structures and Algorithms", category: "Core Concepts" },
      { name: "Object-Oriented Programming", category: "Core Concepts" },
      { name: "DBMS", category: "Core Concepts" },
      { name: "SQL", category: "Core Concepts" }
    ]
  },
  {
    id: "tools",
    category: "Tools and Platforms",
    description: "Version control systems, development environments, and tooling.",
    skills: [
      { name: "Git", category: "Tools and Platforms" },
      { name: "GitHub", category: "Tools and Platforms" },
      { name: "IntelliJ IDEA", category: "Tools and Platforms" },
      { name: "Android Studio", category: "Tools and Platforms" }
    ]
  },
  {
    id: "currently-learning",
    category: "Currently Learning",
    description: "Active development tracks and enterprise technologies being studied.",
    isLearningGroup: true,
    skills: [
      { name: "Spring Boot", category: "Currently Learning", isLearning: true },
      { name: "Hibernate / JPA", category: "Currently Learning", isLearning: true },
      { name: "Advanced Java", category: "Currently Learning", isLearning: true },
      { name: "Backend Development", category: "Currently Learning", isLearning: true }
    ]
  }
];
