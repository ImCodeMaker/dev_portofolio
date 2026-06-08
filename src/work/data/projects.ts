export type ProjectData = {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string;
  techStack: string[];
  stats: string[];
  architecture: string;
  links: { label: string; href: string }[];
};

export type CaseStudyData = {
  id: string;
  title: string;
  project: string;
  challenge: string;
  built: string;
  decisions: { label: string; text: string }[];
  result: string;
};

export const projects: ProjectData[] = [
  {
    id: "FIN-001",
    title: "HermesBank",
    type: "Fintech / Backend System",
    status: "Production-grade",
    description:
      "A layered ASP.NET Core banking system with a REST API, MVC/Razor web app, role-based access, account workflows, transactions, credit cards, commerce payments, loans, amortization, scheduled jobs, and email notifications.",
    techStack: [
      "C#",
      "ASP.NET Core",
      "MVC/Razor",
      "SQL Server",
      "Entity Framework Core",
      "ASP.NET Identity",
      "JWT",
      "Hangfire",
    ],
    stats: [
      "Separate REST API and MVC/Razor web application",
      "Role-based workflows for Admin, Client, ATM, and Comercio users",
      "Account creation, cancellation, deposits, withdrawals, and transfers",
      "Credit card, commerce payment, loan, and amortization workflows",
      "Scheduled maintenance jobs with Hangfire",
      "Transaction records and email notifications for banking activity",
    ],
    architecture:
      "The system is organized into separate layers so each part has a clear responsibility: controllers handle requests, application services coordinate banking workflows, domain models represent banking concepts, and infrastructure handles persistence, Identity, authentication, background jobs, and external services.",
    links: [{ label: "GitHub", href: "https://github.com/ImCodeMaker/banking-sytem-v.1.0" }],
  },
  {
    id: "EDU-010",
    title: "SkillMind",
    type: "Microservices / EdTech Platform",
    status: "Production-ready",
    description:
      "An educational platform built by a 10-person team to support courses, video content, notifications, subscriptions, and AI-powered recommendations. I served as Team Lead and Scrum Master, owning architecture decisions, infrastructure setup, and sprint delivery.",
    techStack: [
      ".NET 10",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Docker",
      "Stripe",
      "Firebase",
      "GitHub Actions",
    ],
    stats: [
      "5 independently deployable services",
      "Led 10 developers under Agile/Scrum",
      "90% of sprints delivered on time",
      "Full Docker Compose orchestration with health checks",
      "Kafka with Zookeeper for async communication between services",
      "Redis for caching and session state across services",
      "Stripe subscriptions, Firebase push notifications, and Google/YouTube OAuth",
    ],
    architecture:
      "The platform was split into independent services because course management, notifications, payments, analytics, and recommendations all grow and fail differently. Kafka lets the system publish one event and let each service react in its own time, so a slow notification or analytics process does not block a student from enrolling in a course.",
    links: [
      { label: "Server", href: "https://github.com/theAvanSurf/skillmind-server" },
      { label: "Client", href: "https://github.com/theAvanSurf/skillmind-client" },
    ],
  },
  {
    id: "SAA-025",
    title: "Zentro",
    type: "Multi-tenant SaaS / Fintech",
    status: "Production",
    description:
      "A multi-tenant SaaS platform built in production at Media Revolution SRL. Allows businesses to spin up isolated agency environments per client with custom configuration, payments, and KYC.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "Linux"],
    stats: [
      "25% reduction in payment transaction failures",
      "Multi-tenant architecture with per-tenant isolated configuration",
      "Integrated cryptocurrency wallets and KYC identity verification",
      "Deployments reduced from days to under 5 minutes",
      "Production system serving real clients",
    ],
    architecture:
      "FastAPI was chosen for its async-first design and automatic OpenAPI documentation. Idempotency keys were implemented on all payment endpoints to prevent duplicate charges.",
    links: [],
  },
] ;

export const caseStudies: CaseStudyData[] = [
  {
    id: "CASE-01",
    title: "Designing a Layered Banking System With Role-Based Access",
    project: "HermesBank",
    challenge:
      "Banking applications need more than simple CRUD operations. HermesBank needed clear user roles, controlled access to sensitive workflows, consistent transaction records, and separate areas for administrators, clients, ATM users, and commerce users. The goal was to make each responsibility clear in both the architecture and the authorization model.",
    built:
      "A multi-project ASP.NET Core banking system with a REST API, an MVC/Razor web application, SQL Server persistence, ASP.NET Identity, JWT authentication, role-based access control, and scheduled background jobs. The system supports authentication, account confirmation, user management, deposits, withdrawals, account transfers, express transfers, beneficiaries, transaction history, credit cards, commerce payments, loans, amortization schedules, email notifications, and Hangfire maintenance jobs.",
    decisions: [
      {
        label: "Why Clean Architecture",
        text: "The system has many concerns that should not all live in the same place. Controllers receive HTTP requests, application services coordinate banking workflows, domain models represent banking concepts, and infrastructure handles database access, Identity, authentication, and external services. This keeps workflows like transfers, deposits, withdrawals, loan payments, and card payments easier to reason about because they are separated from HTTP and database configuration details.",
      },
      {
        label: "Why Role-Based Access Control",
        text: "A simple login system only confirms that a user exists. HermesBank needed to know what type of user is logged in and what that user is allowed to do. Admin users manage users, accounts, credit cards, loans, commerces, and administrative workflows. Clients handle transfers, beneficiaries, card transactions, and account views. ATM users handle deposits and withdrawals. Comercio users handle commerce payment workflows. JWT tokens include role claims for the API, and the MVC app uses cookie authentication with role-based authorization.",
      },
      {
        label: "Why separate API and web application",
        text: "The REST API exposes banking operations through versioned endpoints, making the backend useful for external clients, integrations, or future frontend applications. The MVC/Razor web app provides a complete user interface with role-specific views. Keeping these presentation surfaces separate makes the system more flexible while reusing the same application and infrastructure layers.",
      },
      {
        label: "Why EF Core and repository pattern",
        text: "Entity Framework Core with SQL Server handles persistence, while repositories keep database access separate from application workflows. Application services can focus on banking use cases such as creating accounts, processing payments, updating balances, assigning loans, and recording transactions without depending directly on DbContext details.",
      },
      {
        label: "Why transaction records matter",
        text: "In a banking system, changing a balance is not enough. HermesBank creates transaction records for transfers, deposits, withdrawals, and payments, including amount, transaction type, date, origin, beneficiary information, and status. This gives users and administrators traceability: where money came from, where it went, when it happened, and what operation was performed.",
      },
      {
        label: "Why credit cards were included",
        text: "Banking platforms usually involve more than savings accounts. HermesBank models credit card workflows such as assigning cards, updating limits, processing card transactions, tracking available credit, recording payments, and cancelling cards.",
      },
      {
        label: "Why commerce payments were included",
        text: "Commerce payments model a real payment-processing scenario. Commerce users can be linked to commerce records and process payments using card information, while administrators manage commerce records from a broader system perspective. This shows how role-based access can support more than admin and client workflows.",
      },
      {
        label: "Why loans and amortization were included",
        text: "Loans add long-running financial behavior. A loan is not a one-time operation; it has installments, payment status, interest, and scheduled updates. HermesBank includes loan assignment, loan payments, amortization schedules, installment tracking, and status updates.",
      },
      {
        label: "Why Hangfire was used",
        text: "Some banking workflows need background processing. Loan and amortization statuses may need updates even when no user is making a request. Hangfire runs recurring jobs for scheduled maintenance, including updates for overdue amortization installments and completed loans.",
      },
      {
        label: "Why email notifications were added",
        text: "Banking users expect to be informed when important financial activity happens. HermesBank sends emails for account and transaction-related events through an email service interface, keeping SMTP details separate from banking workflow logic.",
      },
    ],
    result:
      "HermesBank became a complete banking-style system with layered architecture, role-based security, account workflows, money movement, credit cards, commerce payments, loans, amortization, scheduled jobs, transaction records, and email notifications. The project demonstrates how a financial system can be organized around clear roles and separated responsibilities instead of placing everything into controllers.",
  },
  {
    id: "CASE-02",
    title: "Building a Microservices Platform with a Team of 10",
    project: "SkillMind",
    challenge:
      "SkillMind had to support many product areas at once: authentication, course content, subscriptions, media uploads, notifications, email, analytics, and AI-powered recommendations. With 10 developers working in parallel, the real problem was not just building features — it was keeping teams from blocking or breaking each other.",
    built:
      "A 5-service platform with clear ownership boundaries. The .NET core service handles users, courses, enrollments, Stripe subscriptions, OAuth, and email. The NestJS API gateway is the single entry point for the client, routes requests, handles media uploads, and publishes events. A Node.js notification service sends Firebase push notifications and SMTP emails. A Python/FastAPI recommendation service serves AI-powered course suggestions with async PostgreSQL queries and Redis caching. A separate TypeScript analytics service keeps reporting concerns out of the main business logic.",
    decisions: [
      {
        label: "Why Kafka over direct HTTP calls",
        text: "When a student enrolls in a course, that one action needs to trigger a confirmation email, a push notification, analytics tracking, and a recommendation update. If every service had to respond immediately through HTTP, one slow service could make enrollment fail. With Kafka, enrollment completes first, then each service processes the event independently. If notifications are temporarily down, the student still gets enrolled and the notification is processed after recovery.",
      },
      {
        label: "Why Docker Compose with health checks",
        text: "Five services plus Kafka, Zookeeper, and Redis create startup-order problems. A service can appear to be running before it is actually ready. I configured health checks on critical dependencies so services only start when Kafka, Redis, databases, and related services are ready. This removed race-condition bugs during development and deployment.",
      },
      {
        label: "Why separate database contexts",
        text: "The core service uses separate EF Core contexts for business data and identity data. This keeps authentication infrastructure away from domain logic and lets each schema evolve independently without unnecessary risk.",
      },
      {
        label: "Why .NET 10 for the core",
        text: "The core service owns the most important workflows: payments, OAuth, JWT issuance, course management, and enrollment logic. .NET 10 was a strong fit because it performs well under load and handles async integrations with Stripe, Google, email, and Kafka cleanly.",
      },
    ],
    result:
      "A production-ready platform with 5 independently deployable services, health-checked Docker orchestration, Stripe subscriptions, Firebase push notifications, AI-powered recommendations, Google/YouTube OAuth, and 90% sprint delivery across a 10-person team.",
  },
] ;

type Locale = "en" | "de" | "it" | "pt" | "es" | "no" | "da" | "sv" | "is";

const localizedProjectCopy: Partial<Record<Locale, Record<string, Partial<ProjectData>>>> = {
  es: {
    HermesBank: {
      type: "Fintech / Sistema bancario",
      status: "Nivel producción",
      description:
        "Un sistema bancario en ASP.NET Core con API REST, aplicación MVC/Razor, roles claros, cuentas, transferencias, tarjetas, pagos comerciales, préstamos, trabajos programados y notificaciones.",
      stats: [
        "API REST y aplicación web MVC/Razor separadas",
        "Flujos por rol para Admin, Cliente, ATM y Comercio",
        "Creación de cuentas, depósitos, retiros y transferencias",
        "Tarjetas, pagos comerciales, préstamos y amortización",
        "Trabajos programados con Hangfire",
        "Historial de transacciones y notificaciones por email",
      ],
      architecture:
        "El sistema se separa por responsabilidades: los controladores reciben solicitudes, los servicios coordinan flujos bancarios, los modelos representan conceptos del dominio y la infraestructura maneja base de datos, identidad, autenticación y servicios externos.",
    },
    SkillMind: {
      type: "Microservicios / Plataforma EdTech",
      status: "Listo para producción",
      description:
        "Una plataforma educativa para cursos, video, notificaciones, suscripciones y recomendaciones con IA, construida por un equipo de 10 desarrolladores bajo una arquitectura de servicios independientes.",
      stats: [
        "5 servicios desplegables de forma independiente",
        "Lideré 10 desarrolladores con Agile/Scrum",
        "90% de los sprints entregados a tiempo",
        "Docker Compose con health checks",
        "Kafka y Zookeeper para comunicación asíncrona",
        "Stripe, Firebase y OAuth de Google/YouTube",
      ],
      architecture:
        "La plataforma se dividió en servicios porque cursos, pagos, notificaciones, analítica y recomendaciones crecen y fallan de formas distintas. Kafka permite que cada servicio procese eventos sin bloquear la experiencia principal del estudiante.",
    },
    Zentro: {
      type: "SaaS multi-tenant / Fintech",
      status: "Producción",
      description:
        "Una plataforma SaaS multi-tenant construida en producción para crear entornos aislados por cliente, con configuración propia, pagos integrados, wallets cripto y verificación KYC.",
      stats: [
        "25% menos fallos en transacciones de pago",
        "Configuración aislada por tenant",
        "Wallets de criptomonedas y verificación KYC",
        "Despliegues reducidos de días a menos de 5 minutos",
        "Sistema en producción con clientes reales",
      ],
      architecture:
        "FastAPI fue elegido por su rendimiento asíncrono y documentación OpenAPI automática. Las llaves de idempotencia evitan cargos duplicados en endpoints de pago.",
    },
  },
  de: {},
  it: {},
  pt: {},
  no: {},
  da: {},
  sv: {},
  is: {},
};

const projectCopyFallbacks: Record<Exclude<Locale, "en" | "es">, Record<string, Partial<ProjectData>>> = {
  de: {
    HermesBank: {
      type: "Fintech / Banksystem",
      status: "Produktionsreif",
      description: "Ein mehrschichtiges ASP.NET-Core-Banksystem mit REST-API, MVC/Razor-Webapp, Rollen, Konten, Transaktionen, Karten, Händlerzahlungen, Krediten, geplanten Jobs und E-Mail-Benachrichtigungen.",
      stats: ["Separate REST-API und MVC/Razor-Webapp", "Rollenbasierte Abläufe für Admin, Client, ATM und Comercio", "Konten, Einzahlungen, Auszahlungen und Überweisungen", "Karten, Händlerzahlungen, Kredite und Amortisation", "Geplante Wartung mit Hangfire", "Transaktionshistorie und E-Mail-Benachrichtigungen"],
      architecture: "Das System trennt Verantwortlichkeiten klar: Controller nehmen Anfragen an, Services koordinieren Bankabläufe, Domain-Modelle beschreiben Bankkonzepte und Infrastruktur verwaltet Persistenz, Identity, Authentifizierung und externe Dienste.",
    },
    SkillMind: {
      type: "Microservices / EdTech-Plattform",
      status: "Produktionsbereit",
      description: "Eine Bildungsplattform für Kurse, Video, Benachrichtigungen, Abonnements und KI-Empfehlungen, gebaut von einem Team aus 10 Entwicklern mit klar getrennten Services.",
      stats: ["5 unabhängig deploybare Services", "10 Entwickler mit Agile/Scrum geleitet", "90% der Sprints pünktlich geliefert", "Docker Compose mit Health Checks", "Kafka und Zookeeper für asynchrone Kommunikation", "Stripe, Firebase und Google/YouTube OAuth"],
      architecture: "Die Plattform wurde geteilt, weil Kurse, Zahlungen, Benachrichtigungen, Analytics und Empfehlungen unterschiedlich skalieren und ausfallen. Kafka erlaubt Ereignisse ohne Blockade des Einschreibungsprozesses.",
    },
    Zentro: {
      type: "Multi-Tenant SaaS / Fintech",
      status: "Produktion",
      description: "Eine produktive Multi-Tenant-SaaS-Plattform mit isolierten Kundenumgebungen, eigener Konfiguration, Zahlungsabwicklung, Krypto-Wallets und KYC-Prüfung.",
      stats: ["25% weniger Zahlungsfehler", "Isolierte Konfiguration pro Tenant", "Krypto-Wallets und KYC-Verifizierung", "Deployments von Tagen auf unter 5 Minuten reduziert", "Produktionssystem mit echten Kunden"],
      architecture: "FastAPI wurde wegen async Performance und automatischer OpenAPI-Dokumentation gewählt. Idempotency Keys verhindern doppelte Abbuchungen.",
    },
  },
  it: {
    HermesBank: {
      type: "Fintech / Sistema bancario",
      status: "Pronto per produzione",
      description: "Un sistema bancario ASP.NET Core a livelli con API REST, app MVC/Razor, ruoli, conti, transazioni, carte, pagamenti commerciali, prestiti, job schedulati e notifiche email.",
      stats: ["API REST e app MVC/Razor separate", "Flussi basati su ruoli per Admin, Client, ATM e Comercio", "Conti, depositi, prelievi e trasferimenti", "Carte, pagamenti commerciali, prestiti e ammortamento", "Job schedulati con Hangfire", "Storico transazioni e notifiche email"],
      architecture: "Il sistema separa le responsabilità: i controller ricevono richieste, i servizi coordinano i flussi bancari, i modelli descrivono il dominio e l'infrastruttura gestisce persistenza, Identity, autenticazione e servizi esterni.",
    },
    SkillMind: {
      type: "Microservizi / Piattaforma EdTech",
      status: "Pronto per produzione",
      description: "Una piattaforma educativa per corsi, video, notifiche, abbonamenti e raccomandazioni AI, costruita da un team di 10 sviluppatori con servizi indipendenti.",
      stats: ["5 servizi deployabili indipendentemente", "Guidato 10 sviluppatori con Agile/Scrum", "90% degli sprint consegnati in tempo", "Docker Compose con health check", "Kafka e Zookeeper per comunicazione asincrona", "Stripe, Firebase e Google/YouTube OAuth"],
      architecture: "La piattaforma è divisa in servizi perché corsi, pagamenti, notifiche, analytics e raccomandazioni scalano e falliscono in modi diversi. Kafka permette agli eventi di essere processati senza bloccare l'iscrizione.",
    },
    Zentro: {
      type: "SaaS multi-tenant / Fintech",
      status: "Produzione",
      description: "Una piattaforma SaaS multi-tenant in produzione con ambienti cliente isolati, configurazione personalizzata, pagamenti, wallet crypto e verifica KYC.",
      stats: ["25% in meno di fallimenti nei pagamenti", "Configurazione isolata per tenant", "Wallet crypto e verifica KYC", "Deploy ridotti da giorni a meno di 5 minuti", "Sistema in produzione con clienti reali"],
      architecture: "FastAPI è stato scelto per performance async e documentazione OpenAPI automatica. Le chiavi di idempotenza evitano addebiti duplicati.",
    },
  },
  pt: {
    HermesBank: {
      type: "Fintech / Sistema bancário",
      status: "Pronto para produção",
      description: "Um sistema bancário em ASP.NET Core com API REST, app MVC/Razor, papéis, contas, transações, cartões, pagamentos comerciais, empréstimos, jobs agendados e notificações por email.",
      stats: ["API REST e app MVC/Razor separados", "Fluxos por papel para Admin, Cliente, ATM e Comércio", "Contas, depósitos, saques e transferências", "Cartões, pagamentos comerciais, empréstimos e amortização", "Jobs agendados com Hangfire", "Histórico de transações e notificações por email"],
      architecture: "O sistema separa responsabilidades: controllers recebem requisições, serviços coordenam fluxos bancários, modelos representam o domínio e infraestrutura cuida de persistência, identidade, autenticação e serviços externos.",
    },
    SkillMind: {
      type: "Microserviços / Plataforma EdTech",
      status: "Pronto para produção",
      description: "Uma plataforma educacional para cursos, vídeo, notificações, assinaturas e recomendações com IA, construída por 10 desenvolvedores com serviços independentes.",
      stats: ["5 serviços implantáveis independentemente", "Liderei 10 desenvolvedores com Agile/Scrum", "90% dos sprints entregues no prazo", "Docker Compose com health checks", "Kafka e Zookeeper para comunicação assíncrona", "Stripe, Firebase e Google/YouTube OAuth"],
      architecture: "A plataforma foi dividida em serviços porque cursos, pagamentos, notificações, analytics e recomendações escalam e falham de formas diferentes. Kafka processa eventos sem bloquear a matrícula do aluno.",
    },
    Zentro: {
      type: "SaaS multi-tenant / Fintech",
      status: "Produção",
      description: "Uma plataforma SaaS multi-tenant em produção com ambientes isolados por cliente, configuração própria, pagamentos, carteiras cripto e verificação KYC.",
      stats: ["25% menos falhas em pagamentos", "Configuração isolada por tenant", "Carteiras cripto e verificação KYC", "Deploys reduzidos de dias para menos de 5 minutos", "Sistema em produção com clientes reais"],
      architecture: "FastAPI foi escolhido por performance assíncrona e documentação OpenAPI automática. Chaves de idempotência evitam cobranças duplicadas.",
    },
  },
  no: {},
  da: {},
  sv: {},
  is: {},
};

projectCopyFallbacks.no = projectCopyFallbacks.da = projectCopyFallbacks.sv = projectCopyFallbacks.de;
projectCopyFallbacks.is = projectCopyFallbacks.de;

export function getLocalizedProjects(locale: Locale) {
  if (locale === "en") return projects;
  const directCopy = localizedProjectCopy[locale];
  const copy =
    directCopy && Object.keys(directCopy).length > 0
      ? directCopy
      : projectCopyFallbacks[locale as Exclude<Locale, "en" | "es">] ?? localizedProjectCopy.es;

  return projects.map((project) => ({
    ...project,
    ...(copy?.[project.title] ?? {}),
  }));
}

const localizedCaseCopy: Partial<Record<Locale, Record<string, Partial<CaseStudyData>>>> = {
  es: {
    HermesBank: {
      title: "Diseñando un sistema bancario por capas con acceso por roles",
      challenge:
        "HermesBank tenía que separar responsabilidades para administradores, clientes, usuarios ATM y comercios. El reto era permitir operaciones sensibles como transferencias, pagos y préstamos sin mezclar permisos ni lógica de negocio.",
      built:
        "Construí un sistema ASP.NET Core con API REST, aplicación MVC/Razor, SQL Server, Identity, JWT, autorización por roles y trabajos en segundo plano para mantenimiento financiero.",
      decisions: [
        { label: "Por qué Clean Architecture", text: "Separé controladores, servicios de aplicación, dominio e infraestructura para que los flujos bancarios no vivieran dentro de los controladores." },
        { label: "Por qué control de acceso por roles", text: "Cada actor necesitaba permisos distintos. Los roles hacen visible quién puede administrar usuarios, mover dinero, usar ATM o procesar pagos comerciales." },
        { label: "Por qué registros de transacción", text: "En banca no basta con cambiar balances. Cada movimiento debe dejar historial para auditoría, usuarios y administradores." },
      ],
      result:
        "Un sistema bancario completo con roles claros, cuentas, movimiento de dinero, tarjetas, pagos comerciales, préstamos, amortización, trabajos programados y notificaciones.",
    },
    SkillMind: {
      title: "Construyendo una plataforma de microservicios con un equipo de 10",
      challenge:
        "SkillMind tenía que manejar cursos, video, pagos, notificaciones, analítica y recomendaciones con IA mientras 10 desarrolladores trabajaban en paralelo sin bloquearse.",
      built:
        "Construí una arquitectura de 5 servicios: core en .NET, API gateway en NestJS, notificaciones en Node.js, recomendaciones en FastAPI y analítica en TypeScript.",
      decisions: [
        { label: "Por qué Kafka", text: "Un evento de inscripción puede disparar email, push, analítica y recomendaciones sin bloquear la inscripción del estudiante." },
        { label: "Por qué Docker con health checks", text: "Los servicios solo arrancan cuando Kafka, Redis y las bases de datos están listos, evitando errores por orden de inicio." },
        { label: "Por qué separar contextos", text: "La identidad y la lógica de negocio evolucionan separadas, reduciendo riesgo en cambios de esquema." },
      ],
      result:
        "Una plataforma production-ready con 5 servicios, Stripe, Firebase, recomendaciones con IA, OAuth y 90% de entregas de sprint a tiempo.",
    },
  },
  de: {
    HermesBank: {
      title: "Ein mehrschichtiges Banksystem mit rollenbasiertem Zugriff",
      challenge:
        "HermesBank musste Verantwortlichkeiten für Administratoren, Kunden, ATM-Nutzer und Händler sauber trennen. Sensible Abläufe wie Überweisungen, Zahlungen und Kredite sollten klar geschützt und nachvollziehbar bleiben.",
      built:
        "Ich baute ein ASP.NET-Core-System mit REST-API, MVC/Razor-Webapp, SQL Server, Identity, JWT, rollenbasierter Autorisierung und Hintergrundjobs für Finanzwartung.",
      decisions: [
        { label: "Warum Clean Architecture", text: "Controller, Application Services, Domain und Infrastruktur wurden getrennt, damit Bankabläufe nicht direkt in Controllern landen." },
        { label: "Warum Rollenrechte", text: "Jeder Akteur braucht andere Berechtigungen. Rollen machen sichtbar, wer Nutzer verwaltet, Geld bewegt, ATM-Flows nutzt oder Händlerzahlungen verarbeitet." },
        { label: "Warum Transaktionshistorie", text: "Bei Banksoftware reicht ein geänderter Kontostand nicht. Jede Bewegung braucht Historie für Nutzer, Admins und Prüfung." },
      ],
      result:
        "Ein vollständiges Banksystem mit klaren Rollen, Konten, Geldbewegung, Karten, Händlerzahlungen, Krediten, Amortisation, geplanten Jobs und Benachrichtigungen.",
    },
    SkillMind: {
      title: "Eine Microservices-Plattform mit einem Team aus 10 Entwicklern bauen",
      challenge:
        "SkillMind musste Kurse, Video, Zahlungen, Benachrichtigungen, Analytics und KI-Empfehlungen unterstützen, während 10 Entwickler parallel arbeiten konnten.",
      built:
        "Ich baute eine Architektur aus 5 Services: .NET-Core, NestJS-Gateway, Node.js-Benachrichtigungen, FastAPI-Empfehlungen und TypeScript-Analytics.",
      decisions: [
        { label: "Warum Kafka", text: "Eine Einschreibung kann E-Mail, Push, Analytics und Empfehlungen auslösen, ohne den Einschreibungsprozess zu blockieren." },
        { label: "Warum Docker mit Health Checks", text: "Services starten erst, wenn Kafka, Redis und Datenbanken bereit sind. Das verhindert Startreihenfolge-Fehler." },
        { label: "Warum getrennte Kontexte", text: "Identity und Geschäftslogik können getrennt wachsen, was Schemaänderungen sicherer macht." },
      ],
      result:
        "Eine produktionsreife Plattform mit 5 Services, Stripe, Firebase, KI-Empfehlungen, OAuth und 90% pünktlicher Sprint-Lieferung.",
    },
  },
};

localizedCaseCopy.it = localizedCaseCopy.es;
localizedCaseCopy.pt = localizedCaseCopy.es;
localizedCaseCopy.no = localizedCaseCopy.de;
localizedCaseCopy.da = localizedCaseCopy.de;
localizedCaseCopy.sv = localizedCaseCopy.de;
localizedCaseCopy.is = localizedCaseCopy.de;

const caseFallback = localizedCaseCopy.es;

export function getLocalizedCaseStudies(locale: Locale) {
  if (locale === "en") return caseStudies;
  const copy = localizedCaseCopy[locale] ?? caseFallback;

  return caseStudies.map((study) => ({
    ...study,
    ...(copy?.[study.project] ?? {}),
  }));
}
