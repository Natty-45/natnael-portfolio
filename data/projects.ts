export type Project = {
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  date: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Event Management System",
    description:
      "Final year senior project — a full MERN platform for creating and managing events with attendees, scheduling and role-based dashboards.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    thumbnail: "",
    liveUrl: "https://ems-project-fkmp-eta.vercel.app/",
    githubUrl: "https://github.com/Natty-45/EMS__project",
    featured: true,
    date: "2026-08-01",
  },
  {
    title: "Hope for Ethiopia",
    description:
      "Full-stack charity website for an Atlanta-based non-profit — backend handles donations and events, frontend showcases their mission and initiatives.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB"],
    thumbnail: "",
    liveUrl: "https://hope-for-ethiopia-charity.vercel.app/#/",
    githubUrl: "",
    featured: false,
    date: "2025-12-01",
  },
  {
    title: "OneTouchET",
    description:
      "Full-stack web presence for a local business — landing page plus backend-driven digital menu and business-card setter with verifier.",
    techStack: ["Vite", "React", "Node.js", "Express", "MongoDB"],
    thumbnail: "",
    liveUrl: "https://scan.onetouchet.com",
    githubUrl: "https://github.com/Natty-45/Abdi",
    featured: false,
    date: "2025-10-01",
  },
  {
    title: "TapFlow — AI App",
    description:
      "AI-powered application built on Google's Gemini API using Vite and React for intelligent responses and interactions.",
    techStack: ["Vite", "React", "TypeScript", "Gemini API"],
    thumbnail: "",
    liveUrl: "https://abdi-phi.vercel.app",
    githubUrl: "https://github.com/Natty-45/Abdi",
    featured: false,
    date: "2026-03-01",
  },
  {
    title: "BT Creative Landing Page",
    description:
      "Marketing landing page for BT Creative studio, built to showcase services and attract clients.",
    techStack: ["Next.js", "CMS"],
    thumbnail: "",
    liveUrl: "https://btcreativeaddis.com",
    githubUrl: "",
    featured: false,
    date: "2025-08-01",
  },
  {
    title: "ETH Connect",
    description:
      "Landing page for ETH Connect platform, designed to present the platform and drive user sign-ups.",
    techStack: ["React", "HTML", "CSS"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-04-01",
  },
];
