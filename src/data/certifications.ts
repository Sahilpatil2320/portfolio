export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  status: string;
  badgeText: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cisco-cybersecurity",
    issuer: "Cisco",
    title: "Introduction to Cybersecurity",
    description: "Fundamentals of cybersecurity, network defense architecture, confidentiality and data integrity, malware categorization, and risk mitigation strategies.",
    status: "Completed",
    badgeText: "Cisco Certified"
  },
  {
    id: "udemy-java",
    issuer: "Udemy",
    title: "Java Programming for Complete Beginners",
    description: "Comprehensive Core Java mastery including Object-Oriented design, Java collections framework, exception hierarchies, multithreading basics, and lambdas.",
    status: "Completed",
    badgeText: "Course Certificate"
  },
  {
    id: "eduskill-fullstack",
    issuer: "Eduskill",
    title: "Java Full Stack",
    description: "In-depth enterprise full stack development curriculum covering Core Java, backend architectures, relational databases, web API integration, and full stack workflows.",
    status: "Completed",
    badgeText: "Full Stack Track"
  }
];
