// Edit this file to personalize the site — name, bio, skills, projects, and links.

export const site = {
  name: "Your Name",
  title: "Computer Engineer",
  tagline: "I build things across hardware and software — from embedded systems to full-stack apps.",
  bio: "I'm a Computer Engineering student/professional with a broad interest across the stack: embedded systems, software development, and everything in between. I like picking up new tools and shipping projects end to end.",
  email: "you@example.com",
  location: "Earth",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    resume: "/resume.pdf",
  },
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "TypeScript", "Java", "Verilog"],
  },
  {
    category: "Software",
    items: ["React", "Next.js", "Node.js", "Git", "Linux", "Docker"],
  },
  {
    category: "Hardware / Systems",
    items: ["Embedded Systems", "FPGA", "Microcontrollers", "Digital Logic", "RTOS"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what it does, what problem it solves, and any notable technical details.",
    tags: ["Next.js", "TypeScript"],
    link: "https://example.com",
    repo: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what it does, what problem it solves, and any notable technical details.",
    tags: ["Embedded", "C"],
    repo: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what it does, what problem it solves, and any notable technical details.",
    tags: ["Python", "Data"],
    repo: "https://github.com/your-username/project-three",
  },
];
