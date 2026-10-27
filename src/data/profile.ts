export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codechef: string;
  status: string;
  heroGreeting: string;
  heroBio: string;
  introStory: string;
  aboutStory: string;
  highlights: { title: string; desc: string; icon: string }[];
  profileImage: string;
  resumePdf: string;
  resumeDownloadFilename: string;
}

export const PROFILE: ProfileData = {
  name: "Sahil Patil",
  role: "Java Developer | Software Developer",
  headline: "Java Developer | Software Developer | Computer Science & Engineering Student",
  location: "Kolhapur, India",
  phone: "+91 9322152320",
  email: "sahilpatil222005@gmail.com",
  github: "https://github.com/Sahilpatil2320",
  linkedin: "https://www.linkedin.com/in/sahil-patil2320/",
  leetcode: "https://leetcode.com/u/Sahilpatil2320/",
  codechef: "https://www.codechef.com/users/aacharisahil",
  status: "Available for Software Opportunities",
  heroGreeting: "HELLO, I'M",
  heroBio: "I build practical software solutions, explore full-stack technologies, and enjoy solving problems through code.",
  introStory: "I'm Sahil Patil, a Computer Science and Engineering student passionate about software development, problem-solving, and building useful applications. I enjoy working with Java, exploring full-stack development, developing practical projects, and continuously improving my skills through hands-on learning.",
  aboutStory: "I am pursuing a B.Tech in Computer Science and Engineering at D. Y. Patil College of Engineering and Technology, Kolhapur. My interests include Java development, Data Structures and Algorithms, backend development, web technologies, and building software that solves real-world problems. Through my projects and coding practice, I continue to strengthen my programming fundamentals and development skills.",
  highlights: [
    {
      title: "Core Java & OOP",
      desc: "Strong foundation in Java programming, object-oriented concepts, and clean software architecture.",
      icon: "Code2"
    },
    {
      title: "Full-Stack Development",
      desc: "Building dynamic web interfaces and backend services with React.js, Node.js, Express, and REST APIs.",
      icon: "Layers"
    },
    {
      title: "700+ DSA Problems",
      desc: "Solved 200+ problems on LeetCode with 100 Days Badge and 500+ problems on CodeChef.",
      icon: "Terminal"
    },
    {
      title: "AI & Smart Algorithms",
      desc: "Developed recommendation engine utilizing Python, TF-IDF vectorization, and Cosine Similarity.",
      icon: "Cpu"
    }
  ],
  profileImage: "/images/sahil-profile.png",
  resumePdf: "/SAHIL_PATIL(1).pdf",
  resumeDownloadFilename: "SAHIL_PATIL(1).pdf"
};
