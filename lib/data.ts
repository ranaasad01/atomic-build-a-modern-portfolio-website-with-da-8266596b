export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const personalInfo = {
  name: "Alex Rivera",
  title: "Full-Stack Engineer & UI/UX Enthusiast",
  bio: `I'm a passionate full-stack engineer with 5+ years of experience crafting high-performance web applications. I specialize in React, Next.js, and Node.js ecosystems, with a deep love for clean code, thoughtful UX, and pixel-perfect interfaces.

When I'm not shipping features, you'll find me contributing to open source, exploring new design systems, or hiking trails in the Pacific Northwest. I believe great software is built at the intersection of engineering rigor and creative thinking.`,
  shortBio:
    "Full-stack engineer crafting beautiful, performant web experiences with React, Next.js, and Node.js.",
  location: "San Francisco, CA",
  email: "alex@alexrivera.dev",
  github: "https://github.com/alexrivera",
  linkedin: "https://linkedin.com/in/alexrivera",
  twitter: "https://twitter.com/alexrivera",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/alex-rivera-profile-developer.jpg",
};

export const projects: Project[] = [
  {
    slug: "luminary-saas",
    title: "Luminary SaaS Platform",
    description:
      "A full-featured SaaS analytics dashboard with real-time data visualization, team collaboration, and subscription management.",
    longDescription: `Luminary is a comprehensive SaaS analytics platform built for modern data-driven teams. The platform provides real-time insights through interactive dashboards, collaborative workspaces, and powerful data export capabilities.

Key challenges included building a real-time WebSocket layer for live data updates, designing a multi-tenant architecture that scales horizontally, and creating an intuitive drag-and-drop dashboard builder that non-technical users could master in minutes.

The result is a platform processing over 2 million events per day with sub-100ms query response times, serving 500+ active teams across 30 countries.`,
    image: "https://images.ctfassets.net/vv1yxl437u7d/2z29Lyap5Pr9qmo3Kg1HGk/88a638da3ccae093759e0aff0ac63a7d/User_Feedback_Dashboard.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "WebSockets"],
    liveUrl: "https://luminary.demo",
    githubUrl: "https://github.com/alexrivera/luminary",
    featured: true,
  },
  {
    slug: "echo-social",
    title: "Echo Social Network",
    description:
      "A privacy-first social platform with end-to-end encrypted messaging, decentralized identity, and algorithmic feed controls.",
    longDescription: `Echo reimagines social networking with privacy at its core. Users own their data, control their algorithmic feed, and communicate through end-to-end encrypted channels — all without sacrificing the social experience they expect.

The technical stack leverages a federated architecture inspired by ActivityPub, with a custom encryption layer built on the Signal Protocol. The mobile-first PWA delivers native-like performance with offline support and push notifications.

Echo has grown to 15,000 active users since launch, with a 4.8-star rating on the Play Store and a passionate community of privacy advocates.`,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b8/72/97/b87297bc-dc81-b350-8968-d5a1742a1fe3/AppIcon-1x_U007ephone-0-1-85-220-0.png/1200x630wa.png",
    tags: ["React Native", "Node.js", "GraphQL", "MongoDB", "WebRTC", "PWA"],
    liveUrl: "https://echo.social",
    githubUrl: "https://github.com/alexrivera/echo",
    featured: true,
  },
  {
    slug: "forge-design-system",
    title: "Forge Design System",
    description:
      "An open-source component library with 80+ accessible, themeable React components and comprehensive Storybook documentation.",
    longDescription: `Forge is a production-ready design system built to accelerate UI development without sacrificing flexibility or accessibility. Every component is built to WCAG 2.1 AA standards, fully keyboard navigable, and screen-reader tested.

The library ships with a powerful theming engine that supports CSS custom properties, dark mode out of the box, and a design token system that bridges Figma and code. Storybook documentation includes interactive examples, accessibility audits, and copy-paste code snippets.

Forge has been adopted by 200+ projects on GitHub with 1,200+ stars and an active contributor community.`,
    image: "https://cdn.prod.website-files.com/62fbbaeb845661829a2c4a66/6500c5365527fae1a4c9f732_open-graph.jpg",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables", "Rollup"],
    githubUrl: "https://github.com/alexrivera/forge",
    liveUrl: "https://forge-ds.dev",
    featured: true,
  },
  {
    slug: "pathfinder-ai",
    title: "Pathfinder AI Career Coach",
    description:
      "An AI-powered career coaching platform that analyzes resumes, suggests skill gaps, and generates personalized learning roadmaps.",
    longDescription: `Pathfinder uses large language models to provide personalized career guidance at scale. The platform analyzes a user's resume, current skills, and target role to generate a detailed, actionable learning roadmap with curated resources.

Integration with the OpenAI API powers the conversational coaching interface, while a custom fine-tuned model handles resume parsing and skill extraction. The recommendation engine cross-references 50,000+ job postings to surface the most in-demand skills for any given career path.

Beta users reported a 40% reduction in job search time and a 3x increase in interview callbacks after following Pathfinder's recommendations.`,
    image: "https://careerontrack.ai/og-image.png",
    tags: ["Next.js", "OpenAI", "Python", "FastAPI", "Pinecone", "Tailwind CSS"],
    liveUrl: "https://pathfinder.ai",
    githubUrl: "https://github.com/alexrivera/pathfinder",
    featured: false,
  },
  {
    slug: "terra-ecommerce",
    title: "Terra E-Commerce Engine",
    description:
      "A headless e-commerce solution with a custom storefront, inventory management, and multi-currency checkout powered by Stripe.",
    longDescription: `Terra is a headless e-commerce engine designed for brands that need full creative control without sacrificing performance. The custom storefront achieves perfect Lighthouse scores through aggressive static generation, edge caching, and optimized image delivery.

The admin dashboard provides real-time inventory tracking, order management, and customer analytics. Multi-currency support with automatic exchange rate updates and localized tax calculations makes Terra suitable for global commerce.

Terra powers 12 live storefronts generating a combined $2M+ in annual revenue.`,
    image: "https://cdn.shopify.com/theme-store/eulta8mkllavt612kug2qdtd9wmc.jpg",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Algolia", "Vercel", "TypeScript"],
    liveUrl: "https://terra-demo.vercel.app",
    githubUrl: "https://github.com/alexrivera/terra",
    featured: false,
  },
  {
    slug: "pulse-monitoring",
    title: "Pulse Infrastructure Monitor",
    description:
      "A real-time infrastructure monitoring tool with alerting, incident management, and beautiful status page generation.",
    longDescription: `Pulse gives engineering teams full visibility into their infrastructure with minimal setup. Connect your cloud provider in minutes and get instant dashboards for CPU, memory, network, and custom metrics — all with configurable alerting and on-call scheduling.

The incident management workflow integrates with Slack, PagerDuty, and email to ensure the right people are notified immediately. Auto-generated public status pages keep customers informed during outages without manual updates.

Pulse monitors 10,000+ services for 300+ engineering teams, with 99.99% uptime on the monitoring infrastructure itself.`,
    image: "https://pulserelay.pro/dashboard.jpg",
    tags: ["Go", "React", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
    liveUrl: "https://pulse.monitor",
    githubUrl: "https://github.com/alexrivera/pulse",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Vue.js", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python", level: 4 },
      { name: "Go", level: 3 },
      { name: "GraphQL", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "PostgreSQL", level: 4 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 4 },
      { name: "Vercel", level: 5 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "CI/CD", level: 4 },
      { name: "Terraform", level: 3 },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Figma", level: 4 },
      { name: "Git", level: 5 },
      { name: "Storybook", level: 4 },
      { name: "Prisma", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Stripe", level: 4 },
    ],
  },
];
