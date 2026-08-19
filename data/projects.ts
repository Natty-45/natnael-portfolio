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
      "Complete garage management platform built for a local auto solutions business: customer & vehicle records, job cards, inventory and billing, with role-based access for the whole shop team.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: true,
    date: "2026-08-01",
  },
  {
    title: "PulseBoard",
    description:
      "Realtime team analytics dashboard streaming 40k+ events a minute over WebSockets, with role-based auth and sub-second query responses.",
    techStack: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2026-03-10",
  },
  {
    title: "Relay",
    description:
      "Open-source task runner CLI with scheduling, retries and human-readable logs. Zero config, one binary.",
    techStack: ["Node.js", "TypeScript", "CLI", "Open Source"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-11-02",
  },
  {
    title: "BrewRoute",
    description:
      "Mobile-first store locator with offline maps and cached routes for field teams working in low-connectivity areas.",
    techStack: ["React Native", "Mapbox", "Redis"],
    thumbnail: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-06-14",
  },
];