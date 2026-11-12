export type ProjectGroup = "bt" | "client";
export type ProjectLayout = "web" | "mobile";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  techStack: string[];
  features: string[];
  outcomes: string[];
  image: string;
  imageAlt: string;
  layout: ProjectLayout;
  liveUrl: string;
  playUrl?: string;
  githubUrl: string;
  featured: boolean;
  group: ProjectGroup;
  date: string;
  gallery?: { src: string; alt: string }[];
};

export const PROJECT_GROUP_LABELS: Record<ProjectGroup, string> = {
  bt: "BT Creative Studio",
  client: "Selected work",
};

export const PROJECTS: Project[] = [
  {
    slug: "onetouch",
    title: "OneTouchET",
    category: "Digital business tools",
    year: "2025",
    description:
      "NFC and QR platform for restaurants and local businesses: digital menus, smart business cards and a client dashboard.",
    overview:
      "OneTouchET turns physical products, business cards and restaurant menus into digital experiences that open with a tap or scan. The product pairs NFC/QR touchpoints with a client dashboard for managing cards, menus and customer-facing pages.",
    techStack: ["React", "Vite", "Tailwind CSS", "Django", "SQLite"],
    features: [
      "NFC business cards with tap-to-share profiles",
      "QR digital menus for restaurants",
      "Client dashboard for cards and menus",
      "No app required for customers",
    ],
    outcomes: [
      "A live product used by local businesses",
      "A single tap or scan opens the digital experience",
      "Business content stays editable without code",
    ],
    image: "/projects/onetouch.webp",
    imageAlt: "OneTouch smart NFC business card and digital menu website",
    layout: "web",
    liveUrl: "https://onetouchet.com",
    githubUrl: "",
    featured: true,
    group: "client",
    date: "2025-10-01",
  },
  {
    slug: "event-management-system",
    title: "Event Management System",
    category: "Full-stack web platform",
    year: "2026",
    description:
      "A MERN events platform: publish events, manage registrations and run check-in from one dashboard.",
    overview:
      "A MERN events platform for publishing events, managing registrations and running check-in from one dashboard. Built as a senior project, it covers the full event lifecycle from creation to attendee check-in.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Event creation and publishing",
      "Registration management",
      "Check-in dashboard",
      "Admin and organizer roles",
    ],
    outcomes: [
      "End-to-end event workflow in one app",
      "Deployed MERN stack with MongoDB, Express, React and Node.js",
    ],
    image: "/projects/ems.webp",
    imageAlt: "Event Management System homepage with event planning hero section",
    layout: "web",
    liveUrl: "https://ems-project-fkmp-eta.vercel.app/",
    githubUrl: "https://github.com/Natty-45/EMS__project",
    featured: false,
    group: "client",
    date: "2026-08-01",
  },
  {
    slug: "universal-cast",
    title: "Universal Cast",
    category: "Casting platform — Android app",
    year: "2026",
    description:
      "Android app connecting models, actors, photographers and crew with casting directors, agencies and productions — with a landing site for discovery.",
    overview:
      "Universal Cast brings the creative industry into one platform instead of scattered group chats and social pages. Talent — models, actors, dancers, singers, influencers and production crew — build professional profiles with portfolios, measurements and skills, then browse and apply to casting calls. Clients and agencies post roles, review applications, shortlist favorites and book talent directly, while equipment providers and location owners list gear and spaces. A landing site at universalcast.net introduces the app and routes visitors to Google Play.",
    techStack: ["Android", "HTML", "CSS", "JavaScript"],
    features: [
      "Talent profiles with portfolios, measurements and skills",
      "Casting calls with applications, deadlines and rewards",
      "Direct messaging and booking management",
      "Ratings, reviews and verified profiles",
      "Marketplace for rental equipment and locations",
      "Subscription tiers for professionals",
    ],
    outcomes: [
      "Live on Google Play with real talent and casting activity",
      "Landing site live at universalcast.net",
      "Full cycle in one platform: discovery, application, booking",
    ],
    image: "/projects/universalcast-cover.webp",
    imageAlt: "Universal Cast Android app screens over a dark navy cover",
    layout: "mobile",
    liveUrl: "https://universalcast.net",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.chaosdev.universalcast",
    githubUrl: "",
    featured: false,
    group: "client",
    date: "2026-06-01",
    gallery: [
      {
        src: "/projects/universalcast-app-home.webp",
        alt: "Universal Cast home screen with talent discovery and nearby events",
      },
      {
        src: "/projects/universalcast-app-categories.webp",
        alt: "Universal Cast categories for models, photographers, actors and more",
      },
      {
        src: "/projects/universalcast-app-profile.webp",
        alt: "Universal Cast talent profile with portfolio, hourly rate and booking",
      },
      {
        src: "/projects/universalcast-app-casting.webp",
        alt: "Universal Cast casting call with deadline, reward and requirements",
      },
      {
        src: "/projects/universalcast-app-market.webp",
        alt: "Universal Cast marketplace for rental equipment and locations",
      },
    ],
  },
  {
    slug: "btpass",
    title: "BTPass",
    category: "Event guest management",
    year: "2026",
    description:
      "Guest management for live events: bulk invitations, encrypted QR passes and offline check-in for ushers.",
    overview:
      "BTPass is event guest management for live events. Organizers send bulk invitations and issue encrypted QR passes, while ushers run check-in from a PWA that keeps working when the venue network does not.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "PWA"],
    features: [
      "Bulk guest invitations",
      "Encrypted QR passes",
      "Offline-first usher check-in",
      "Scan logs and guest status",
    ],
    outcomes: [
      "Built for the pressure of event day",
      "PWA check-in works without a constant connection",
      "Source available on GitHub",
    ],
    image: "/projects/btpass.svg",
    imageAlt: "BTPass guest pass and QR check-in interface",
    layout: "web",
    liveUrl: "",
    githubUrl: "https://github.com/bin-ym/BTPass",
    featured: false,
    group: "bt",
    date: "2026-02-01",
  },
  {
    slug: "hope-for-ethiopia",
    title: "Hope for Ethiopia",
    category: "Non-profit website",
    year: "2025",
    description:
      "Charity site for an Atlanta-based non-profit, covering its mission, events and donations with managed content behind the scenes.",
    overview:
      "A charity website for an Atlanta-based non-profit, covering its mission, events and donations with managed content behind the scenes. The site gives the organization a clear public home and a way to keep stories and campaigns current.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB"],
    features: [
      "Mission, events and donation content",
      "Managed content behind the scenes",
      "Campaign and event pages",
      "Responsive charity site",
    ],
    outcomes: [
      "A public site for a real non-profit",
      "Content can be managed without rebuilding pages",
    ],
    image: "/projects/hope.webp",
    imageAlt: "Hope for Ethiopia charity website hero featuring a child holding a camera",
    layout: "web",
    liveUrl: "https://hope-for-ethiopia-charity.vercel.app/#/",
    githubUrl: "",
    featured: false,
    group: "client",
    date: "2025-12-01",
  },
  {
    slug: "bt-creative",
    title: "BT Creative",
    category: "Studio website",
    year: "2025",
    description:
      "Marketing site for the BT Creative studio — bold editorial pages for services, events, blogs and work, with a working contact flow.",
    overview:
      "Marketing site for the BT Creative studio in Addis Ababa. Built as a content-driven Next.js site with pages for services, events, blog posts and studio work, event sliders and image galleries, plus a Nodemailer-backed contact route. The site needed to feel like a piece of work itself, not a template.",
    techStack: [
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Embla / Swiper",
    ],
    features: [
      "Services, events, blogs and work pages",
      "Event sliders and image galleries",
      "Blog detail pages by slug",
      "Contact form with Nodemailer API route",
      "Responsive marketing site",
    ],
    outcomes: [
      "A studio site with a distinct visual voice",
      "Content-driven pages for events, blogs and work",
      "Working contact flow backed by an API route",
    ],
    image: "/projects/btcreative-cover.webp",
    imageAlt: "BT Creative logo collage over a live concert crowd",
    layout: "web",
    liveUrl: "https://btcreate.vercel.app",
    githubUrl: "https://github.com/btcreative/bt_web_forntend",
    featured: false,
    group: "bt",
    date: "2025-08-01",
    gallery: [
      {
        src: "/projects/btcreative-hero.webp",
        alt: "BT Creative branded mixing console with Boundless Thinking tagline",
      },
      {
        src: "/projects/btcreative-stage.webp",
        alt: "Concert stage with BT Creative LED screen",
      },
      {
        src: "/projects/btcreative-vision.webp",
        alt: "Unleash Your Vision campaign visual",
      },
    ],
  },
  {
    slug: "raffle-app",
    title: "RaffleApp",
    category: "Mobile raffle platform",
    year: "2025",
    description:
      "A mobile raffle app where users browse featured prizes, join raffles, track entries and winners, and manage their accounts.",
    overview:
      "RaffleApp is a mobile raffle platform built with Expo. Users browse featured and ending-soon raffles, enter draws, track their raffles and winners, and manage profile, notifications and payment history from a tab-based app.",
    techStack: ["React Native", "Expo", "Tamagui", "React Navigation"],
    features: [
      "Featured and ending-soon raffle feeds",
      "Search and raffle entry flow",
      "Winners and my-raffles tracking",
      "Notifications, profile and payment history",
    ],
    outcomes: [
      "A cross-platform mobile raffle app built with Expo",
      "Tab-based navigation across home, raffles, winners and profile",
      "Source available in the btcreative GitHub organization",
    ],
    image: "/projects/raffle-cover.webp",
    imageAlt: "RaffleApp mobile screens showing featured raffles and prize lists",
    layout: "mobile",
    liveUrl: "",
    githubUrl: "https://github.com/btcreative/RaffleApp",
    featured: false,
    group: "bt",
    date: "2025-12-13",
    gallery: [
      {
        src: "/projects/raffle-home.webp",
        alt: "RaffleApp home screen with featured raffles",
      },
      {
        src: "/projects/raffle-list.webp",
        alt: "RaffleApp prize list with join actions",
      },
      {
        src: "/projects/raffle-auth.webp",
        alt: "RaffleApp sign-in screen",
      },
    ],
  },
];

function parseDate(iso: string): number {
  if (!iso) return 0;
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, (month || 1) - 1, day || 1).getTime();
}

export function sortProjects(projects: Project[] = PROJECTS): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return parseDate(b.date) - parseDate(a.date);
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const sorted = sortProjects();
  const index = sorted.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
