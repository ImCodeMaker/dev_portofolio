import { siteConfig } from "@app/config/site";

export const brandProfile = {
  name: siteConfig.name,
  handle: siteConfig.handle,
  role: siteConfig.role,
  headline: "Full Stack Engineer — complete products, APIs & scalable architecture.",
  summary:
    "I build complete web products, APIs, microservices platforms, and production SaaS systems for startups and businesses. Based in Dominican Republic, available for remote contracts globally.",
  principles: [
    "Full-stack products with clean interfaces, clear data flow, and maintainable business logic",
    "Architecture designed for usability, deployment, scale, and team ownership",
    "Production SaaS, fintech, and web platforms with real users, money, and operational constraints",
  ],
  metrics: [
    { label: "Primary focus", value: "Full stack" },
    { label: "Location", value: "Remote" },
    { label: "Availability", value: "Contracts" },
  ],
  about:
    "I'm Teudy, a self-taught Full Stack Engineer based in Santo Domingo, Dominican Republic, and I recently graduated from ITLA. I build across the stack — interfaces, APIs, microservices, cloud infrastructure, and product workflows — and I have professional experience shipping fintech and SaaS products in production environments.",
  aboutSecondary:
    "I've led teams, found practical solutions to technical problems, designed distributed architectures, and built systems that handle real money and real users. I'm available for remote contracts with startups and companies in the US, Canada, and Europe.",
  personal: "Outside of code, I play piano and develop video games.",
} as const;
