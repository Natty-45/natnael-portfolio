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
    title: "Autoshop Management System",
    description:
      "Complete garage management platform: customer & vehicle records, job cards, inventory and billing, with role-based access for the whole shop team.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: true,
    date: "2026-08-01",
  },
  {
    title: "Hope for Ethiopia",
    description:
      "Charity website for an Atlanta-based non-profit, showcasing their mission and initiatives.",
    techStack: ["React", "HTML", "CSS"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-12-01",
  },
  {
    title: "OneTouchET",
    description:
      "Landing page, digital menu and business-card website for a local business — a full web presence in one package.",
    techStack: ["React", "HTML", "CSS"],
    thumbnail: "",
    liveUrl: "https://onetouchet.com",
    githubUrl: "",
    featured: false,
    date: "2025-10-01",
  },
  {
    title: "BT Creative Landing Page",
    description:
      "Marketing landing page for BT Creative studio, built to showcase services and attract clients.",
    techStack: ["React", "HTML", "CSS"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-08-01",
  },
  {
    title: "BT Creative Raffle App",
    description:
      "Collaborative full-stack raffle app built with a teammate — handling ticket management, winner selection and real-time updates.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-06-01",
  },
  {
    title: "ETH Connect",
    description:
      "Landing page for ETH Connect, designed to present the platform and drive user sign-ups.",
    techStack: ["React", "HTML", "CSS"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-04-01",
  },
];
