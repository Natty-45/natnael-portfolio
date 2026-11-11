export const SITE = {
  name: "Natnael Ayalew",
  firstName: "Natnael",
  lastName: "Ayalew",
  role: "Full-Stack Software Engineer",
  email: "natiman075@gmail.com",
  github: "https://github.com/Natty-45",
  linkedin: "https://www.linkedin.com/in/natnael-ayalew-4n5",
  location: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  status: "Open for freelance & full-time",
  availability: "Available for new work",
  resumeFile: "Natnael-Ayalew-CV.pdf",
} as const;

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { key: "email", label: "Email", href: `mailto:${SITE.email}`, external: false },
  { key: "github", label: "GitHub", href: SITE.github, external: true },
  { key: "linkedin", label: "LinkedIn", href: SITE.linkedin, external: true },
] as const;

export const EDUCATION = {
  school: "Saint Mary's University",
  degree: "BSc, Computer Science",
  period: "2021 — 2025",
  location: "Addis Ababa",
  grade: "GPA 3.41",
  exam: "Exit exam 81",
} as const;

export const LANGUAGES = [
  { name: "Amharic", level: "Native" },
  { name: "English", level: "Very good" },
] as const;

