export type CapabilityData = {
  id: string;
  name: string;
  detail: string;
};

export const capabilities: CapabilityData[] = [
  {
    id: "CAP-01",
    name: "Product & Application Engineering",
    detail:
      "Complete web applications with clean interfaces, reliable workflows, and maintainable product logic",
  },
  {
    id: "CAP-02",
    name: "Frontend & UX Implementation",
    detail:
      "React, TypeScript, responsive interfaces, accessibility, animation, and polished user experience",
  },
  {
    id: "CAP-03",
    name: "APIs & Backend Systems",
    detail:
      "REST APIs, authentication, business logic, relational database design, and service integration",
  },
  {
    id: "CAP-04",
    name: "DevOps & CI/CD",
    detail:
      "GitHub Actions pipelines, Linux server administration, Docker, deployment automation",
  },
  {
    id: "CAP-05",
    name: "Fintech Systems",
    detail:
      "Payment APIs, idempotency, KYC integration, cryptocurrency wallets, regulatory compliance",
  },
  {
    id: "CAP-06",
    name: "SaaS Platforms",
    detail:
      "Multi-tenant architecture, isolated client environments, subscription logic, scalable infrastructure",
  },
] ;

type Locale = "en" | "de" | "it" | "pt" | "es" | "no" | "da" | "sv" | "is";

const localizedCapabilities: Partial<Record<Locale, CapabilityData[]>> = {
  es: [
    { id: "CAP-01", name: "Ingeniería de producto y aplicaciones", detail: "Aplicaciones web completas con interfaces claras, flujos confiables y lógica de producto mantenible" },
    { id: "CAP-02", name: "Frontend y experiencia de usuario", detail: "React, TypeScript, interfaces responsive, accesibilidad, animación y una experiencia pulida" },
    { id: "CAP-03", name: "APIs y sistemas backend", detail: "APIs REST, autenticación, lógica de negocio, diseño de bases de datos e integración de servicios" },
    { id: "CAP-04", name: "DevOps y CI/CD", detail: "Pipelines con GitHub Actions, administración Linux, Docker y automatización de despliegues" },
    { id: "CAP-05", name: "Sistemas fintech", detail: "APIs de pago, idempotencia, KYC, wallets cripto y flujos con cumplimiento regulatorio" },
    { id: "CAP-06", name: "Plataformas SaaS", detail: "Arquitectura multi-tenant, entornos aislados por cliente, suscripciones e infraestructura escalable" },
  ],
  de: [
    { id: "CAP-01", name: "Produkt- & Anwendungsentwicklung", detail: "Komplette Webanwendungen mit klaren Interfaces, zuverlässigen Abläufen und wartbarer Produktlogik" },
    { id: "CAP-02", name: "Frontend & UX-Umsetzung", detail: "React, TypeScript, responsive Interfaces, Barrierefreiheit, Animation und eine polierte Nutzererfahrung" },
    { id: "CAP-03", name: "APIs & Backend-Systeme", detail: "REST-APIs, Authentifizierung, Geschäftslogik, Datenbankdesign und Service-Integration" },
    { id: "CAP-04", name: "DevOps & CI/CD", detail: "GitHub-Actions-Pipelines, Linux-Administration, Docker und Deployment-Automatisierung" },
    { id: "CAP-05", name: "Fintech-Systeme", detail: "Payment-APIs, Idempotenz, KYC, Krypto-Wallets und Compliance-orientierte Workflows" },
    { id: "CAP-06", name: "SaaS-Plattformen", detail: "Multi-Tenant-Architektur, isolierte Kundenumgebungen, Abonnements und skalierbare Infrastruktur" },
  ],
};

localizedCapabilities.it = localizedCapabilities.es;
localizedCapabilities.pt = localizedCapabilities.es;
localizedCapabilities.no = localizedCapabilities.de;
localizedCapabilities.da = localizedCapabilities.de;
localizedCapabilities.sv = localizedCapabilities.de;
localizedCapabilities.is = localizedCapabilities.de;

export function getLocalizedCapabilities(locale: Locale) {
  return localizedCapabilities[locale] ?? capabilities;
}
