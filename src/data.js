// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update the whole website.
//  Links left as "" are hidden automatically, so nothing is fake.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Pintu Yadav",
  title: "Aspiring Java Full Stack Developer",
  tagline: "Building scalable applications and solving real-world problems through code.",
  about:
    "I am a B.Tech Computer Science Engineering student at IIMT College of Engineering, graduating in 2027. I am passionate about software development and enjoy building practical applications. I have knowledge of Java and Python and am currently strengthening my skills in Core Java, Spring Boot, Data Structures and Algorithms, and backend development.",
  email: "",            // e.g. "you@example.com"
  github: "",           // e.g. "https://github.com/your-username"
  linkedin: "",         // e.g. "https://linkedin.com/in/your-id"
  resume: "/resume.pdf", // put your PDF at public/resume.pdf
  image: "",            // e.g. "/profile.jpg" (file in public/). Empty = initials placeholder
};

export const skills = [
  { group: "Programming Languages", icon: "Code2", items: ["Java", "Python", "SQL"] },
  { group: "Backend Development", icon: "Server", items: ["Spring Boot", "REST APIs", "JDBC", "Hibernate"] },
  { group: "Frontend", icon: "Layout", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Tools", icon: "Wrench", items: ["Git", "GitHub", "IntelliJ IDEA", "MySQL"] },
];

// Add a new object here and a new card appears automatically.
export const projects = [
  {
    title: "Bitly Clone",
    description: "A URL shortener application that converts long URLs into short and manageable links.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    demo: "",   // live demo URL
    github: "", // repository URL
  },
];

export const education = [
  { degree: "B.Tech in Computer Science Engineering", school: "IIMT College of Engineering", year: "Graduating 2027" },
];

export const learning = ["Advanced Java", "Spring Boot", "Data Structures and Algorithms", "Database Management Systems", "System Design"];

// Add only real items. Example shape:
// { type: "Certification", title: "Course name", issuer: "Issuer", year: "2026", certificate: "/certificate.pdf", link: "https://..." }
// type can be "Certification", "Achievement" or "Coding Profile".
export const achievements = [
  {
    type: "Certification",
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM · Coursera",
    year: "2026",
    certificate: "/generative-ai-introduction-and-applications.pdf",
    link: "https://coursera.org/verify/25WIPQSN95QD",
  },
  {
    type: "Certification",
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services · Coursera",
    year: "2026",
    certificate: "/aws-cloud-technical-essentials.pdf",
    link: "https://coursera.org/verify/0ER2YUOXWGVC",
  },
];
