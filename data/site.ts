export const SITE = {
  name: "Natnael Ayalew",
  role: "Full-Stack Developer — Web & Mobile",
  email: "natty.ayalew.code@gmail.com",
  github: "https://github.com/Natty-45",
  linkedin: "https://www.linkedin.com/in/natnaelayalew",
  status: "available for work — freelance & remote",
} as const;

export const NAV_LINKS = [
  { n: "01", href: "#about", label: "About" },
  { n: "02", href: "#stack", label: "Experience" },
  { n: "03", href: "#projects", label: "Projects" },
  { n: "04", href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { key: "email", label: "Email", href: `mailto:${SITE.email}`, external: false },
  { key: "github", label: "GitHub", href: SITE.github, external: true },
  { key: "linkedin", label: "LinkedIn", href: SITE.linkedin, external: true },
] as const;

export const TOOLBOX = [
  {
    name: "frontend/",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Redux"],
  },
  {
    name: "mobile/",
    tags: ["React Native", "Expo", "Flutter", "Firebase", "Push Notifications"],
  },
  {
    name: "backend/",
    tags: ["Node.js", "Express", "REST", "GraphQL", "WebSockets", "JWT auth"],
  },
  {
    name: "data/",
    tags: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose"],
  },
  {
    name: "devops/",
    tags: ["Docker", "GitHub Actions", "AWS", "Vercel", "Nginx", "Linux"],
  },
] as const;

export const STATS = [
  { value: "5+", label: "years full-stack" },
  { value: "8+", label: "products shipped" },
  { value: "100%", label: "end-to-end ownership" },
] as const;