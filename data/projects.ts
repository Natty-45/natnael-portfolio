export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  date: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Event Management System",
    category: "Full-stack web platform",
    year: "2026",
    description:
      "A MERN events platform: publish events, manage registrations and run check-in from one dashboard.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/projects/ems.webp",
    imageAlt: "Event Management System homepage with event planning hero section",
    liveUrl: "https://ems-project-fkmp-eta.vercel.app/",
    githubUrl: "https://github.com/Natty-45/EMS__project",
    featured: false,
    date: "2026-08-01",
  },
  {
    title: "Universal Cast",
    category: "Casting platform",
    year: "2026",
    description:
      "Landing site for a casting platform connecting East African talent with agencies and productions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/universalcast.webp",
    imageAlt: "Universal Cast landing page with a casting app mockup",
    liveUrl: "https://universalcast.net",
    githubUrl: "",
    featured: false,
    date: "2026-06-01",
  },
  {
    title: "BTPass",
    category: "Event guest management",
    year: "2026",
    description:
      "Guest management for live events: bulk invitations, encrypted QR passes and offline check-in for ushers.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "PWA"],
    image: "/projects/btpass.svg",
    imageAlt: "BTPass guest pass and QR check-in interface",
    liveUrl: "",
    githubUrl: "https://github.com/bin-ym/BTPass",
    featured: false,
    date: "2026-02-01",
  },
  {
    title: "Hope for Ethiopia",
    category: "Non-profit website",
    year: "2025",
    description:
      "Charity site for an Atlanta-based non-profit, covering its mission, events and donations with managed content behind the scenes.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB"],
    image: "/projects/hope.webp",
    imageAlt: "Hope for Ethiopia charity website hero featuring a child holding a camera",
    liveUrl: "https://hope-for-ethiopia-charity.vercel.app/#/",
    githubUrl: "",
    featured: false,
    date: "2025-12-01",
  },
  {
    title: "OneTouchET",
    category: "Digital business tools",
    year: "2025",
    description:
      "NFC and QR platform for restaurants and local businesses: digital menus, smart business cards and a client dashboard.",
    techStack: ["React", "Vite", "Tailwind CSS", "Django", "SQLite"],
    image: "/projects/onetouch.webp",
    imageAlt: "OneTouch smart NFC business card and digital menu website",
    liveUrl: "https://onetouchet.com",
    githubUrl: "",
    featured: true,
    date: "2025-10-01",
  },
  {
    title: "BT Creative",
    category: "Studio website",
    year: "2025",
    description:
      "Marketing site for an Addis Ababa creative studio, built around bold type and a content-managed portfolio.",
    techStack: ["Next.js", "CMS", "Tailwind CSS"],
    image: "/projects/btcreative.svg",
    imageAlt: "BT Creative studio website with bold MAKE IT ICONIC typography",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2025-08-01",
  },
  {
    title: "EthConnect",
    category: "Agency website",
    year: "2026",
    description:
      "Agency site with a 3D-animated frontend and a CMS admin for services, projects and testimonials.",
    techStack: ["Next.js", "Convex", "Three.js", "Tailwind CSS"],
    image: "/projects/ethconnect.webp",
    imageAlt: "EthConnect agency homepage with an animated digital innovation hero",
    liveUrl: "",
    githubUrl: "",
    featured: false,
    date: "2026-07-01",
  },
];
