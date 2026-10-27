export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  location: string;
  highlights: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    id: "btech-dyp",
    institution: "D.Y. Patil College of Engineering & Technology",
    degree: "B.Tech in Computer Science & Engineering",
    field: "Computer Science & Engineering",
    period: "2023 – 2027",
    scoreLabel: "CGPA",
    scoreValue: "8.02",
    location: "Kolhapur, India",
    highlights: [
      "Rigorous coursework in Core Java, Object-Oriented Programming, Data Structures & Algorithms, DBMS, and Software Engineering",
      "Active participant in technical projects and competitive coding forums",
      "Academic consistency with 8.02 CGPA through current semesters"
    ]
  },
  {
    id: "hsc-kisanrao",
    institution: "Kisanrao More Highschool & Junior College",
    degree: "Class XII (HSC)",
    field: "Higher Secondary Education (Science)",
    period: "2022 – 2023",
    scoreLabel: "Percentage",
    scoreValue: "72.17%",
    location: "Saravde, India",
    highlights: [
      "Strong foundation in Mathematics, Physics, and analytical problem solving",
      "Completed Class XII with 72.17% aggregate"
    ]
  }
];
