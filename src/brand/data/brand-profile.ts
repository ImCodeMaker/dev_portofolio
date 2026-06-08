import { siteConfig } from "@app/config/site";

export const brandProfile = {
  name: siteConfig.name,
  handle: siteConfig.handle,
  role: siteConfig.role,
  headline: "Full Stack Engineer — backend systems, APIs & distributed architecture.",
  summary:
    "I build fintech APIs, microservices platforms, and production SaaS products for startups and businesses. Based in Dominican Republic, available for remote contracts globally.",
  principles: [
    "Backend systems with clear boundaries and testable business logic",
    "Distributed architecture designed for deployment, scale, and team ownership",
    "Production SaaS and fintech platforms with real users, money, and operational constraints",
  ],
  metrics: [
    { label: "Primary focus", value: "Backend" },
    { label: "Location", value: "Remote" },
    { label: "Availability", value: "Contracts" },
  ],
  about:
    "I'm Teudy, a self-taught Full Stack Engineer based in Santo Domingo, Dominican Republic, and I recently graduated from ITLA. I specialize in backend systems — APIs, microservices, and cloud infrastructure — and I have professional experience shipping fintech and SaaS products in production environments.",
  aboutSecondary:
    "I've led teams, found practical solutions to technical problems, designed distributed architectures, and built systems that handle real money and real users. I'm available for remote contracts with startups and companies in the US, Canada, and Europe.",
  personal: "Outside of code, I play piano and develop video games.",
} as const;
