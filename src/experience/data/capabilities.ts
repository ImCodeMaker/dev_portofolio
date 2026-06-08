export type CapabilityData = {
  id: string;
  name: string;
  detail: string;
};

export const capabilities: CapabilityData[] = [
  {
    id: "CAP-01",
    name: "Backend & API Design",
    detail:
      "REST APIs, authentication systems, business logic, relational database design and optimization",
  },
  {
    id: "CAP-02",
    name: "Microservices Architecture",
    detail:
      "Event-driven systems with Kafka, Redis caching, Docker orchestration, distributed patterns",
  },
  {
    id: "CAP-03",
    name: "Full Stack Applications",
    detail:
      "React, Next.js, TypeScript front-ends connected to production-grade backends",
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
    { id: "CAP-01", name: "Backend y diseño de APIs", detail: "APIs REST, autenticación, lógica de negocio, diseño y optimización de bases de datos relacionales" },
    { id: "CAP-02", name: "Arquitectura de microservicios", detail: "Sistemas event-driven con Kafka, caché con Redis, Docker y patrones distribuidos" },
    { id: "CAP-03", name: "Aplicaciones full stack", detail: "Frontends con React, Next.js y TypeScript conectados a backends de producción" },
    { id: "CAP-04", name: "DevOps y CI/CD", detail: "Pipelines con GitHub Actions, administración Linux, Docker y automatización de despliegues" },
    { id: "CAP-05", name: "Sistemas fintech", detail: "APIs de pago, idempotencia, KYC, wallets cripto y flujos con cumplimiento regulatorio" },
    { id: "CAP-06", name: "Plataformas SaaS", detail: "Arquitectura multi-tenant, entornos aislados por cliente, suscripciones e infraestructura escalable" },
  ],
  de: [
    { id: "CAP-01", name: "Backend- & API-Design", detail: "REST-APIs, Authentifizierung, Geschäftslogik sowie Design und Optimierung relationaler Datenbanken" },
    { id: "CAP-02", name: "Microservices-Architektur", detail: "Event-getriebene Systeme mit Kafka, Redis-Caching, Docker und verteilten Mustern" },
    { id: "CAP-03", name: "Full-Stack-Anwendungen", detail: "React-, Next.js- und TypeScript-Frontends mit produktionsreifen Backends" },
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
