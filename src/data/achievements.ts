export interface AchievementItem {
  id: string;
  metric: string;
  title: string;
  subtitle: string;
  description: string;
  platform: string;
  link?: string;
  linkLabel?: string;
  badgeLabel: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "leetcode-200",
    metric: "200+",
    title: "200+ LeetCode Problems Solved",
    subtitle: "Data Structures & Core Algorithms",
    description: "Solved over 200 problems on LeetCode spanning fundamental data structures, arrays, strings, two-pointers, linked lists, trees, and dynamic problem solving.",
    platform: "LeetCode",
    link: "https://leetcode.com/u/Sahilpatil2320/",
    linkLabel: "View LeetCode Profile",
    badgeLabel: "200+ Solved"
  },
  {
    id: "leetcode-badge",
    metric: "100 Days",
    title: "100 Days Coding Badge",
    subtitle: "Consistency & Unbroken Dedication",
    description: "Earned the official LeetCode 100 Days Coding Badge for maintaining consistent daily algorithmic problem solving and development discipline.",
    platform: "LeetCode",
    link: "https://leetcode.com/u/Sahilpatil2320/",
    linkLabel: "Verify on LeetCode",
    badgeLabel: "100 Days Badge"
  },
  {
    id: "codechef-500",
    metric: "500+",
    title: "500+ CodeChef Problems Solved",
    subtitle: "Algorithmic Thinking & Competitive Coding",
    description: "Solved over 500 programming problems on CodeChef, sharpening core computational logic, complexity analysis, time-limit efficiency, and competitive problem solving.",
    platform: "CodeChef",
    link: "https://www.codechef.com/users/aacharisahil",
    linkLabel: "View CodeChef Profile",
    badgeLabel: "500+ Solved"
  },
  {
    id: "open-source",
    metric: "Merged PR",
    title: "Open Source GitHub Contribution",
    subtitle: "Collaborative Software Engineering",
    description: "Contributed to an open-source GitHub repository with a successfully merged pull request, following production Git workflow, branch management, and collaborative review standards.",
    platform: "GitHub",
    link: "https://github.com/Sahilpatil2320",
    linkLabel: "View GitHub Profile",
    badgeLabel: "Merged PR"
  }
];
