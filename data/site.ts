export const SITE = {
  name: "Natnael Ayalew",
  role: "Full-Stack Developer — Web & Mobile",
  email: "natty.ayalew.code@gmail.com",
  github: "https://github.com/Natty-45",
  linkedin: "https://www.linkedin.com/in/natnaelayalew",
  status: "available for work — freelance & remote",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { key: "email", label: "Email", href: `mailto:${SITE.email}`, external: false },
  { key: "github", label: "GitHub", href: SITE.github, external: true },
  { key: "linkedin", label: "LinkedIn", href: SITE.linkedin, external: true },
] as const;
