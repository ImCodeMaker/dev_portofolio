import i18n from "i18n";
export { localeLabels, localePaths, locales, type Locale } from "./locales";
import { locales, type Locale } from "./locales";

const catalog = {
  en: {
    "meta.description": "Full Stack Engineer specialized in backend systems, APIs, and distributed architecture. Available for remote contracts.",
    "nav.projects": "Projects",
    "nav.caseStudies": "Case Studies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "nav.inquiry": "Inquiry",
    "nav.language": "Language",
    "a11y.title": "Accessibility",
    "a11y.open": "Open accessibility options",
    "a11y.close": "Close",
    "a11y.largeText": "Large text",
    "a11y.highContrast": "High contrast",
    "a11y.reduceMotion": "Reduce motion",
    "hero.availability": "Available for remote contracts",
    "hero.focus": "Backend • APIs • Distributed systems",
    "hero.role": "Full Stack Engineer",
    "hero.headline": "Full Stack Engineer — backend systems, APIs & distributed architecture.",
    "hero.summary": "I build fintech APIs, microservices platforms, and production SaaS products for startups and businesses. Based in Dominican Republic, available for remote contracts globally.",
    "hero.primary": "View my work",
    "hero.secondary": "Let's work together",
    "hero.search": "Search projects, architecture, capabilities...",
    "hero.metric.focusLabel": "Primary focus",
    "hero.metric.focusValue": "Backend",
    "hero.metric.locationLabel": "Location",
    "hero.metric.locationValue": "Remote",
    "hero.metric.availabilityLabel": "Availability",
    "hero.metric.availabilityValue": "Contracts",
    "projects.eyebrow": "Selected work",
    "projects.title": "Production systems, not portfolio theater.",
    "projects.subtitle": "Fintech APIs, microservices platforms, and multi-tenant SaaS work built around real architecture decisions.",
    "projects.keyStats": "Key stats",
    "projects.architecture": "Architecture choice",
    "projects.private": "Private production system",
    "cases.eyebrow": "Case Studies",
    "cases.title": "Real technical decisions, explained.",
    "cases.subtitle": "These are not just descriptions of what I built. Each case study explains the problem, the architectural decision I made, why I made it, and what the result was.",
    "cases.result": "Result",
    "cases.challenge": "The challenge",
    "cases.built": "What I built",
    "capabilities.eyebrow": "Capabilities",
    "capabilities.title": "What I can build for you.",
    "about.eyebrow": "About me",
    "about.title": "Backend-first full stack engineering from Santo Domingo.",
    "about.body1": "I'm Teudy, a self-taught Full Stack Engineer based in Santo Domingo, Dominican Republic, and I recently graduated from ITLA. I specialize in backend systems — APIs, microservices, and cloud infrastructure — and I have professional experience shipping fintech and SaaS products in production environments.",
    "about.body2": "I've led teams, found practical solutions to technical problems, designed distributed architectures, and built systems that handle real money and real users. I'm available for remote contracts with startups and companies in the US, Canada, and Europe.",
    "about.personal": "Outside of code, I play piano and develop video games.",
    "about.email": "Email",
    "contact.eyebrow": "Contact",
    "contact.title": "Have a project? Let's talk.",
    "contact.subtitle": "I'm available for backend engineering contracts, full stack projects, and technical consulting. Response within 24-48 hours.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.resume": "Resume",
    "contact.downloadCv": "Download CV",
    "contact.location": "Location",
    "contact.locationValue": "Santo Domingo, Dominican Republic — available globally, remote",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "you@example.com",
    "contact.projectDescription": "Project description",
    "contact.projectPlaceholder": "Tell me about the system, API, product, or consulting need.",
    "contact.remote": "Remote contracts",
    "contact.send": "Send inquiry",
  },
  de: {
    "meta.description": "Full Stack Engineer mit Fokus auf Backend-Systeme, APIs und verteilte Architektur. Verfügbar für Remote-Aufträge.", "nav.projects": "Projekte", "nav.caseStudies": "Fallstudien", "nav.about": "Über mich", "nav.contact": "Kontakt", "nav.resume": "Lebenslauf", "nav.inquiry": "Anfrage", "nav.language": "Sprache", "a11y.title": "Barrierefreiheit", "a11y.open": "Barrierefreiheit öffnen", "a11y.close": "Schließen", "a11y.largeText": "Größerer Text", "a11y.highContrast": "Hoher Kontrast", "a11y.reduceMotion": "Bewegung reduzieren",
    "hero.availability": "Verfügbar für Remote-Aufträge", "hero.focus": "Backend • APIs • verteilte Systeme", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — Backend-Systeme, APIs & verteilte Architektur.", "hero.summary": "Ich baue Fintech-APIs, Microservices-Plattformen und produktive SaaS-Produkte für Startups und Unternehmen. In der Dominikanischen Republik ansässig, weltweit remote verfügbar.", "hero.primary": "Meine Arbeit ansehen", "hero.secondary": "Zusammenarbeiten", "hero.search": "Projekte, Architektur, Fähigkeiten suchen...",
    "hero.metric.focusLabel": "Schwerpunkt", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Standort", "hero.metric.locationValue": "Remote", "hero.metric.availabilityLabel": "Verfügbarkeit", "hero.metric.availabilityValue": "Verträge",
    "projects.eyebrow": "Ausgewählte Arbeit", "projects.title": "Produktionssysteme, kein Portfolio-Theater.", "projects.subtitle": "Fintech-APIs, Microservices-Plattformen und Multi-Tenant-SaaS mit echten Architekturentscheidungen.", "projects.keyStats": "Kennzahlen", "projects.architecture": "Architekturentscheidung", "projects.private": "Privates Produktionssystem",
    "cases.eyebrow": "Fallstudien", "cases.title": "Echte technische Entscheidungen, verständlich erklärt.", "cases.subtitle": "Jede Fallstudie erklärt das Problem, die Architekturentscheidung, den Grund dafür und das Ergebnis.", "cases.result": "Ergebnis", "cases.challenge": "Die Herausforderung", "cases.built": "Was ich gebaut habe",
    "capabilities.eyebrow": "Fähigkeiten", "capabilities.title": "Was ich für Sie bauen kann.",
    "about.eyebrow": "Über mich", "about.title": "Backend-orientiertes Full-Stack-Engineering aus Santo Domingo.", "about.body1": "Ich bin Teudy, ein autodidaktischer Full Stack Engineer aus Santo Domingo und habe kürzlich meinen Abschluss am ITLA gemacht. Ich spezialisiere mich auf Backend-Systeme, APIs, Microservices und Cloud-Infrastruktur.", "about.body2": "Ich habe Teams geleitet, praktische Lösungen für technische Probleme gefunden, verteilte Architekturen entworfen und Systeme gebaut, die echtes Geld und echte Nutzer verarbeiten. Ich bin für Remote-Aufträge in den USA, Kanada und Europa verfügbar.", "about.personal": "Außerhalb des Codes spiele ich Klavier und entwickle Videospiele.", "about.email": "E-Mail",
    "contact.eyebrow": "Kontakt", "contact.title": "Haben Sie ein Projekt? Sprechen wir.", "contact.subtitle": "Ich bin verfügbar für Backend-Engineering, Full-Stack-Projekte und technische Beratung. Antwort innerhalb von 24-48 Stunden.", "contact.email": "E-Mail", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "Lebenslauf", "contact.downloadCv": "CV herunterladen", "contact.location": "Standort", "contact.locationValue": "Santo Domingo, Dominikanische Republik — weltweit remote verfügbar", "contact.name": "Name", "contact.namePlaceholder": "Ihr Name", "contact.emailPlaceholder": "sie@example.com", "contact.projectDescription": "Projektbeschreibung", "contact.projectPlaceholder": "Beschreiben Sie das System, die API, das Produkt oder den Beratungsbedarf.", "contact.remote": "Remote-Verträge", "contact.send": "Anfrage senden",
  },
  it: {
    "meta.description": "Full Stack Engineer specializzato in sistemi backend, API e architetture distribuite. Disponibile per contratti da remoto.", "nav.projects": "Progetti", "nav.caseStudies": "Casi studio", "nav.about": "Profilo", "nav.contact": "Contatto", "nav.resume": "CV", "nav.inquiry": "Richiesta", "nav.language": "Lingua", "a11y.title": "Accessibilità", "a11y.open": "Apri opzioni di accessibilità", "a11y.close": "Chiudi", "a11y.largeText": "Testo grande", "a11y.highContrast": "Contrasto alto", "a11y.reduceMotion": "Riduci movimento",
    "hero.availability": "Disponibile per contratti da remoto", "hero.focus": "Backend • API • sistemi distribuiti", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — sistemi backend, API e architetture distribuite.", "hero.summary": "Costruisco API fintech, piattaforme a microservizi e prodotti SaaS in produzione per startup e aziende. Basato nella Repubblica Dominicana, disponibile da remoto a livello globale.", "hero.primary": "Vedi i progetti", "hero.secondary": "Lavoriamo insieme", "hero.search": "Cerca progetti, architettura, competenze...",
    "hero.metric.focusLabel": "Focus", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Modalità", "hero.metric.locationValue": "Remoto", "hero.metric.availabilityLabel": "Disponibilità", "hero.metric.availabilityValue": "Contratti",
    "projects.eyebrow": "Lavori selezionati", "projects.title": "Sistemi reali, non vetrina.", "projects.subtitle": "API fintech, piattaforme a microservizi e SaaS multi-tenant costruiti attorno a vere decisioni architetturali.", "projects.keyStats": "Dati chiave", "projects.architecture": "Scelta architetturale", "projects.private": "Sistema di produzione privato",
    "cases.eyebrow": "Casi studio", "cases.title": "Decisioni tecniche reali, spiegate chiaramente.", "cases.subtitle": "Ogni caso studio spiega il problema, la decisione architetturale, il motivo e il risultato.", "cases.result": "Risultato", "cases.challenge": "La sfida", "cases.built": "Cosa ho costruito",
    "capabilities.eyebrow": "Competenze", "capabilities.title": "Cosa posso costruire per te.",
    "about.eyebrow": "Profilo", "about.title": "Full stack engineering con focus backend da Santo Domingo.", "about.body1": "Sono Teudy, Full Stack Engineer autodidatta basato a Santo Domingo, e mi sono appena laureato all'ITLA. Mi specializzo in sistemi backend, API, microservizi e infrastruttura cloud.", "about.body2": "Ho guidato team, trovato soluzioni pratiche a problemi tecnici, progettato architetture distribuite e costruito sistemi con denaro e utenti reali. Sono disponibile per contratti remoti con aziende in USA, Canada ed Europa.", "about.personal": "Fuori dal codice, suono il pianoforte e sviluppo videogiochi.", "about.email": "Email",
    "contact.eyebrow": "Contatto", "contact.title": "Hai un progetto? Parliamone.", "contact.subtitle": "Sono disponibile per contratti backend, progetti full stack e consulenza tecnica. Risposta entro 24-48 ore.", "contact.email": "Email", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "CV", "contact.downloadCv": "Scarica CV", "contact.location": "Posizione", "contact.locationValue": "Santo Domingo, Repubblica Dominicana — disponibile globalmente da remoto", "contact.name": "Nome", "contact.namePlaceholder": "Il tuo nome", "contact.emailPlaceholder": "tu@example.com", "contact.projectDescription": "Descrizione del progetto", "contact.projectPlaceholder": "Descrivi il sistema, l'API, il prodotto o la consulenza richiesta.", "contact.remote": "Contratti remoti", "contact.send": "Invia richiesta",
  },
  pt: {
    "meta.description": "Full Stack Engineer especializado em sistemas backend, APIs e arquitetura distribuída. Disponível para contratos remotos.", "nav.projects": "Projetos", "nav.caseStudies": "Estudos de caso", "nav.about": "Sobre", "nav.contact": "Contato", "nav.resume": "Currículo", "nav.inquiry": "Contato", "nav.language": "Idioma", "a11y.title": "Acessibilidade", "a11y.open": "Abrir opções de acessibilidade", "a11y.close": "Fechar", "a11y.largeText": "Texto maior", "a11y.highContrast": "Alto contraste", "a11y.reduceMotion": "Reduzir movimento",
    "hero.availability": "Disponível para contratos remotos", "hero.focus": "Backend • APIs • sistemas distribuídos", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — sistemas backend, APIs e arquitetura distribuída.", "hero.summary": "Construo APIs fintech, plataformas de microsserviços e produtos SaaS em produção para startups e empresas. Baseado na República Dominicana, disponível globalmente de forma remota.", "hero.primary": "Ver meu trabalho", "hero.secondary": "Vamos trabalhar juntos", "hero.search": "Buscar projetos, arquitetura, capacidades...",
    "hero.metric.focusLabel": "Foco", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Local", "hero.metric.locationValue": "Remoto", "hero.metric.availabilityLabel": "Disponibilidade", "hero.metric.availabilityValue": "Contratos",
    "projects.eyebrow": "Trabalho selecionado", "projects.title": "Sistemas de produção, não vitrine.", "projects.subtitle": "APIs fintech, plataformas de microsserviços e SaaS multi-tenant construídos com decisões reais de arquitetura.", "projects.keyStats": "Dados principais", "projects.architecture": "Escolha de arquitetura", "projects.private": "Sistema privado em produção",
    "cases.eyebrow": "Estudos de caso", "cases.title": "Decisões técnicas reais, explicadas.", "cases.subtitle": "Cada estudo explica o problema, a decisão arquitetural, por que ela foi tomada e o resultado.", "cases.result": "Resultado", "cases.challenge": "O desafio", "cases.built": "O que construí",
    "capabilities.eyebrow": "Capacidades", "capabilities.title": "O que posso construir para você.",
    "about.eyebrow": "Sobre mim", "about.title": "Engenharia full stack com foco em backend desde Santo Domingo.", "about.body1": "Sou Teudy, Full Stack Engineer autodidata baseado em Santo Domingo, e me formei recentemente no ITLA. Sou especializado em sistemas backend, APIs, microsserviços e infraestrutura em nuvem.", "about.body2": "Liderei equipes, encontrei soluções práticas para problemas técnicos, desenhei arquiteturas distribuídas e construí sistemas com dinheiro e usuários reais. Estou disponível para contratos remotos com empresas dos EUA, Canadá e Europa.", "about.personal": "Fora do código, eu toco piano e desenvolvo videogames.", "about.email": "Email",
    "contact.eyebrow": "Contato", "contact.title": "Tem um projeto? Vamos conversar.", "contact.subtitle": "Estou disponível para contratos de backend, projetos full stack e consultoria técnica. Resposta em 24-48 horas.", "contact.email": "Email", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "Currículo", "contact.downloadCv": "Baixar CV", "contact.location": "Localização", "contact.locationValue": "Santo Domingo, República Dominicana — disponível globalmente remoto", "contact.name": "Nome", "contact.namePlaceholder": "Seu nome", "contact.emailPlaceholder": "voce@example.com", "contact.projectDescription": "Descrição do projeto", "contact.projectPlaceholder": "Descreva o sistema, API, produto ou necessidade de consultoria.", "contact.remote": "Contratos remotos", "contact.send": "Enviar contato",
  },
  es: {
    "meta.description": "Full Stack Engineer especializado en sistemas backend, APIs y arquitectura distribuida. Disponible para contratos remotos.", "nav.projects": "Proyectos", "nav.caseStudies": "Casos de estudio", "nav.about": "Sobre mí", "nav.contact": "Contacto", "nav.resume": "CV", "nav.inquiry": "Consulta", "nav.language": "Idioma", "a11y.title": "Accesibilidad", "a11y.open": "Abrir opciones de accesibilidad", "a11y.close": "Cerrar", "a11y.largeText": "Texto grande", "a11y.highContrast": "Alto contraste", "a11y.reduceMotion": "Reducir movimiento",
    "hero.availability": "Disponible para contratos remotos", "hero.focus": "Backend • APIs • sistemas distribuidos", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — sistemas backend, APIs y arquitectura distribuida.", "hero.summary": "Construyo APIs fintech, plataformas de microservicios y productos SaaS en producción para startups y empresas. Basado en República Dominicana, disponible para contratos remotos globalmente.", "hero.primary": "Ver mi trabajo", "hero.secondary": "Trabajemos juntos", "hero.search": "Buscar proyectos, arquitectura, capacidades...",
    "hero.metric.focusLabel": "Enfoque", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Ubicación", "hero.metric.locationValue": "Remoto", "hero.metric.availabilityLabel": "Disponibilidad", "hero.metric.availabilityValue": "Contratos",
    "projects.eyebrow": "Trabajo seleccionado", "projects.title": "Sistemas en producción, no teatro de portafolio.", "projects.subtitle": "APIs fintech, plataformas de microservicios y SaaS multi-tenant construidos con decisiones reales de arquitectura.", "projects.keyStats": "Datos clave", "projects.architecture": "Decisión de arquitectura", "projects.private": "Sistema privado en producción",
    "cases.eyebrow": "Casos de estudio", "cases.title": "Decisiones técnicas reales, explicadas.", "cases.subtitle": "Cada caso explica el problema, la decisión arquitectónica, por qué la tomé y cuál fue el resultado.", "cases.result": "Resultado", "cases.challenge": "El reto", "cases.built": "Lo que construí",
    "capabilities.eyebrow": "Capacidades", "capabilities.title": "Lo que puedo construir para ti.",
    "about.eyebrow": "Sobre mí", "about.title": "Ingeniería full stack con enfoque backend desde Santo Domingo.", "about.body1": "Soy Teudy, Full Stack Engineer autodidacta basado en Santo Domingo, República Dominicana, y recientemente me gradué de ITLA. Me especializo en sistemas backend, APIs, microservicios e infraestructura cloud.", "about.body2": "He liderado equipos, encontrado soluciones prácticas a problemas técnicos, diseñado arquitecturas distribuidas y construido sistemas que manejan dinero real y usuarios reales. Estoy disponible para contratos remotos con startups y empresas en Estados Unidos, Canadá y Europa.", "about.personal": "Fuera del código, toco piano y desarrollo videojuegos.", "about.email": "Email",
    "contact.eyebrow": "Contacto", "contact.title": "¿Tienes un proyecto? Hablemos.", "contact.subtitle": "Estoy disponible para contratos de backend, proyectos full stack y consultoría técnica. Respondo en 24-48 horas.", "contact.email": "Email", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "CV", "contact.downloadCv": "Descargar CV", "contact.location": "Ubicación", "contact.locationValue": "Santo Domingo, República Dominicana — disponible globalmente remoto", "contact.name": "Nombre", "contact.namePlaceholder": "Tu nombre", "contact.emailPlaceholder": "tu@example.com", "contact.projectDescription": "Descripción del proyecto", "contact.projectPlaceholder": "Cuéntame sobre el sistema, API, producto o necesidad de consultoría.", "contact.remote": "Contratos remotos", "contact.send": "Enviar consulta",
  },
  no: {
    "meta.description": "Full Stack Engineer med fokus på backend-systemer, API-er og distribuert arkitektur. Tilgjengelig for fjernkontrakter.", "nav.projects": "Prosjekter", "nav.caseStudies": "Casestudier", "nav.about": "Om meg", "nav.contact": "Kontakt", "nav.resume": "CV", "nav.inquiry": "Forespørsel", "nav.language": "Språk", "a11y.title": "Tilgjengelighet", "a11y.open": "Åpne tilgjengelighetsvalg", "a11y.close": "Lukk", "a11y.largeText": "Større tekst", "a11y.highContrast": "Høy kontrast", "a11y.reduceMotion": "Reduser bevegelse",
    "hero.availability": "Tilgjengelig for fjernkontrakter", "hero.focus": "Backend • API-er • distribuerte systemer", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — backend-systemer, API-er og distribuert arkitektur.", "hero.summary": "Jeg bygger fintech-API-er, mikrotjenesteplattformer og produksjonsklare SaaS-produkter for startups og bedrifter. Basert i Den dominikanske republikk, tilgjengelig globalt via fjernarbeid.", "hero.primary": "Se arbeidet mitt", "hero.secondary": "La oss jobbe sammen", "hero.search": "Søk i prosjekter, arkitektur og kompetanse...",
    "hero.metric.focusLabel": "Hovedfokus", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Arbeidsform", "hero.metric.locationValue": "Fjernarbeid", "hero.metric.availabilityLabel": "Tilgjengelighet", "hero.metric.availabilityValue": "Kontrakter",
    "projects.eyebrow": "Utvalgt arbeid", "projects.title": "Produksjonssystemer, ikke porteføljeteater.", "projects.subtitle": "Fintech-API-er, mikrotjenesteplattformer og multi-tenant SaaS bygget rundt reelle arkitekturvalg.", "projects.keyStats": "Nøkkelpunkter", "projects.architecture": "Arkitekturvalg", "projects.private": "Privat produksjonssystem",
    "cases.eyebrow": "Casestudier", "cases.title": "Reelle tekniske valg, forklart tydelig.", "cases.subtitle": "Hver case forklarer problemet, arkitekturvalget, hvorfor det ble gjort og resultatet.", "cases.result": "Resultat", "cases.challenge": "Utfordringen", "cases.built": "Hva jeg bygget",
    "capabilities.eyebrow": "Kompetanse", "capabilities.title": "Dette kan jeg bygge for deg.",
    "about.eyebrow": "Om meg", "about.title": "Backend-fokusert fullstack-utvikling fra Santo Domingo.", "about.body1": "Jeg er Teudy, en selvlært Full Stack Engineer basert i Santo Domingo, og jeg ble nylig uteksaminert fra ITLA. Jeg spesialiserer meg på backend-systemer, API-er, mikrotjenester og skyinfrastruktur.", "about.body2": "Jeg har ledet team, funnet praktiske løsninger på tekniske problemer, designet distribuerte arkitekturer og bygget systemer som håndterer ekte penger og ekte brukere. Jeg er tilgjengelig for fjernkontrakter med selskaper i USA, Canada og Europa.", "about.personal": "Utenfor kode spiller jeg piano og utvikler videospill.", "about.email": "E-post",
    "contact.eyebrow": "Kontakt", "contact.title": "Har du et prosjekt? La oss snakke.", "contact.subtitle": "Jeg er tilgjengelig for backend-kontrakter, fullstack-prosjekter og teknisk rådgivning. Svar innen 24-48 timer.", "contact.email": "E-post", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "CV", "contact.downloadCv": "Last ned CV", "contact.location": "Sted", "contact.locationValue": "Santo Domingo, Den dominikanske republikk — tilgjengelig globalt via fjernarbeid", "contact.name": "Navn", "contact.namePlaceholder": "Navnet ditt", "contact.emailPlaceholder": "du@example.com", "contact.projectDescription": "Prosjektbeskrivelse", "contact.projectPlaceholder": "Fortell om systemet, API-et, produktet eller rådgivningsbehovet.", "contact.remote": "Fjernkontrakter", "contact.send": "Send forespørsel",
  },
  da: {
    "meta.description": "Full Stack Engineer med fokus på backend-systemer, API'er og distribueret arkitektur. Tilgængelig for remote kontrakter.", "nav.projects": "Projekter", "nav.caseStudies": "Cases", "nav.about": "Om mig", "nav.contact": "Kontakt", "nav.resume": "CV", "nav.inquiry": "Forespørgsel", "nav.language": "Sprog", "a11y.title": "Tilgængelighed", "a11y.open": "Åbn tilgængelighedsvalg", "a11y.close": "Luk", "a11y.largeText": "Større tekst", "a11y.highContrast": "Høj kontrast", "a11y.reduceMotion": "Reducer bevægelse",
    "hero.availability": "Tilgængelig for remote kontrakter", "hero.focus": "Backend • API'er • distribuerede systemer", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — backend-systemer, API'er og distribueret arkitektur.", "hero.summary": "Jeg bygger fintech-API'er, microservice-platforme og produktionsklare SaaS-produkter for startups og virksomheder. Baseret i Den Dominikanske Republik, tilgængelig globalt remote.", "hero.primary": "Se mit arbejde", "hero.secondary": "Lad os arbejde sammen", "hero.search": "Søg i projekter, arkitektur og kompetencer...",
    "hero.metric.focusLabel": "Primært fokus", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Arbejdsform", "hero.metric.locationValue": "Remote", "hero.metric.availabilityLabel": "Tilgængelighed", "hero.metric.availabilityValue": "Kontrakter",
    "projects.eyebrow": "Udvalgt arbejde", "projects.title": "Produktionssystemer, ikke porteføljeteater.", "projects.subtitle": "Fintech-API'er, microservice-platforme og multi-tenant SaaS bygget på reelle arkitekturbeslutninger.", "projects.keyStats": "Nøgletal", "projects.architecture": "Arkitekturvalg", "projects.private": "Privat produktionssystem",
    "cases.eyebrow": "Cases", "cases.title": "Reelle tekniske beslutninger, forklaret klart.", "cases.subtitle": "Hver case forklarer problemet, arkitekturbeslutningen, hvorfor den blev taget, og resultatet.", "cases.result": "Resultat", "cases.challenge": "Udfordringen", "cases.built": "Det jeg byggede",
    "capabilities.eyebrow": "Kompetencer", "capabilities.title": "Det kan jeg bygge for dig.",
    "about.eyebrow": "Om mig", "about.title": "Backend-fokuseret fullstack engineering fra Santo Domingo.", "about.body1": "Jeg er Teudy, en selvlært Full Stack Engineer baseret i Santo Domingo, og jeg er for nylig dimitteret fra ITLA. Jeg specialiserer mig i backend-systemer, API'er, microservices og cloud-infrastruktur.", "about.body2": "Jeg har ledet teams, fundet praktiske løsninger på tekniske problemer, designet distribuerede arkitekturer og bygget systemer med rigtige penge og rigtige brugere. Jeg er tilgængelig for remote kontrakter med virksomheder i USA, Canada og Europa.", "about.personal": "Uden for kode spiller jeg klaver og udvikler videospil.", "about.email": "Email",
    "contact.eyebrow": "Kontakt", "contact.title": "Har du et projekt? Lad os tale.", "contact.subtitle": "Jeg er tilgængelig for backend-kontrakter, fullstack-projekter og teknisk rådgivning. Svar inden for 24-48 timer.", "contact.email": "Email", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "CV", "contact.downloadCv": "Download CV", "contact.location": "Lokation", "contact.locationValue": "Santo Domingo, Den Dominikanske Republik — tilgængelig globalt remote", "contact.name": "Navn", "contact.namePlaceholder": "Dit navn", "contact.emailPlaceholder": "dig@example.com", "contact.projectDescription": "Projektbeskrivelse", "contact.projectPlaceholder": "Fortæl om systemet, API'et, produktet eller rådgivningsbehovet.", "contact.remote": "Remote kontrakter", "contact.send": "Send forespørgsel",
  },
  sv: {
    "meta.description": "Full Stack Engineer med fokus på backend-system, API:er och distribuerad arkitektur. Tillgänglig för distanskontrakt.", "nav.projects": "Projekt", "nav.caseStudies": "Fallstudier", "nav.about": "Om mig", "nav.contact": "Kontakt", "nav.resume": "CV", "nav.inquiry": "Förfrågan", "nav.language": "Språk", "a11y.title": "Tillgänglighet", "a11y.open": "Öppna tillgänglighetsval", "a11y.close": "Stäng", "a11y.largeText": "Större text", "a11y.highContrast": "Hög kontrast", "a11y.reduceMotion": "Minska rörelse",
    "hero.availability": "Tillgänglig för distanskontrakt", "hero.focus": "Backend • API:er • distribuerade system", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — backend-system, API:er och distribuerad arkitektur.", "hero.summary": "Jag bygger fintech-API:er, mikrotjänstplattformar och produktionsklara SaaS-produkter för startups och företag. Baserad i Dominikanska republiken, tillgänglig globalt på distans.", "hero.primary": "Se mitt arbete", "hero.secondary": "Låt oss arbeta tillsammans", "hero.search": "Sök projekt, arkitektur och kompetenser...",
    "hero.metric.focusLabel": "Huvudfokus", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Arbetssätt", "hero.metric.locationValue": "Distans", "hero.metric.availabilityLabel": "Tillgänglighet", "hero.metric.availabilityValue": "Kontrakt",
    "projects.eyebrow": "Utvalt arbete", "projects.title": "Produktionssystem, inte portföljteater.", "projects.subtitle": "Fintech-API:er, mikrotjänstplattformar och multi-tenant SaaS byggda kring verkliga arkitekturbeslut.", "projects.keyStats": "Nyckelpunkter", "projects.architecture": "Arkitekturval", "projects.private": "Privat produktionssystem",
    "cases.eyebrow": "Fallstudier", "cases.title": "Verkliga tekniska beslut, tydligt förklarade.", "cases.subtitle": "Varje fallstudie förklarar problemet, arkitekturbeslutet, varför det togs och resultatet.", "cases.result": "Resultat", "cases.challenge": "Utmaningen", "cases.built": "Det jag byggde",
    "capabilities.eyebrow": "Kompetenser", "capabilities.title": "Det här kan jag bygga åt dig.",
    "about.eyebrow": "Om mig", "about.title": "Backend-fokuserad fullstack engineering från Santo Domingo.", "about.body1": "Jag är Teudy, en självlärd Full Stack Engineer baserad i Santo Domingo, och jag tog nyligen examen från ITLA. Jag specialiserar mig på backend-system, API:er, mikrotjänster och molninfrastruktur.", "about.body2": "Jag har lett team, hittat praktiska lösningar på tekniska problem, designat distribuerade arkitekturer och byggt system som hanterar riktiga pengar och riktiga användare. Jag är tillgänglig för distanskontrakt med företag i USA, Kanada och Europa.", "about.personal": "Utanför kod spelar jag piano och utvecklar videospel.", "about.email": "E-post",
    "contact.eyebrow": "Kontakt", "contact.title": "Har du ett projekt? Låt oss prata.", "contact.subtitle": "Jag är tillgänglig för backend-kontrakt, fullstack-projekt och teknisk rådgivning. Svar inom 24-48 timmar.", "contact.email": "E-post", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "CV", "contact.downloadCv": "Ladda ner CV", "contact.location": "Plats", "contact.locationValue": "Santo Domingo, Dominikanska republiken — tillgänglig globalt på distans", "contact.name": "Namn", "contact.namePlaceholder": "Ditt namn", "contact.emailPlaceholder": "du@example.com", "contact.projectDescription": "Projektbeskrivning", "contact.projectPlaceholder": "Berätta om systemet, API:et, produkten eller rådgivningsbehovet.", "contact.remote": "Distanskontrakt", "contact.send": "Skicka förfrågan",
  },
  is: {
    "meta.description": "Full Stack Engineer sem sérhæfir sig í backend-kerfum, API og dreifðum arkitektúr. Laus í fjarvinnuverkefni.", "nav.projects": "Verkefni", "nav.caseStudies": "Dæmisögur", "nav.about": "Um mig", "nav.contact": "Hafa samband", "nav.resume": "Ferilskrá", "nav.inquiry": "Fyrirspurn", "nav.language": "Tungumál", "a11y.title": "Aðgengi", "a11y.open": "Opna aðgengisvalkosti", "a11y.close": "Loka", "a11y.largeText": "Stærri texti", "a11y.highContrast": "Mikill birtuskil", "a11y.reduceMotion": "Minnka hreyfingu",
    "hero.availability": "Laus í fjarvinnuverkefni", "hero.focus": "Backend • API • dreifð kerfi", "hero.role": "Full Stack Engineer", "hero.headline": "Full Stack Engineer — backend-kerfi, API og dreifður arkitektúr.", "hero.summary": "Ég byggi fintech API, microservices-kerfi og SaaS-vörur í framleiðslu fyrir sprotafyrirtæki og fyrirtæki. Staðsettur í Dóminíska lýðveldinu og laus í fjarvinnuverkefni á heimsvísu.", "hero.primary": "Sjá verkefnin mín", "hero.secondary": "Vinnum saman", "hero.search": "Leita í verkefnum, arkitektúr og hæfni...",
    "hero.metric.focusLabel": "Aðalfókus", "hero.metric.focusValue": "Backend", "hero.metric.locationLabel": "Vinnulag", "hero.metric.locationValue": "Fjarvinna", "hero.metric.availabilityLabel": "Laus", "hero.metric.availabilityValue": "Samningar",
    "projects.eyebrow": "Valin verkefni", "projects.title": "Framleiðslukerfi, ekki sýningarsíða.", "projects.subtitle": "Fintech API, microservices-pallar og multi-tenant SaaS byggt á raunverulegum arkitektúrákvörðunum.", "projects.keyStats": "Lykilatriði", "projects.architecture": "Arkitektúrval", "projects.private": "Einkaframleiðslukerfi",
    "cases.eyebrow": "Dæmisögur", "cases.title": "Raunverulegar tæknilegar ákvarðanir, útskýrðar skýrt.", "cases.subtitle": "Hver dæmisaga útskýrir vandamálið, arkitektúrákvörðunina, hvers vegna hún var tekin og niðurstöðuna.", "cases.result": "Niðurstaða", "cases.challenge": "Áskorunin", "cases.built": "Það sem ég byggði",
    "capabilities.eyebrow": "Hæfni", "capabilities.title": "Það sem ég get byggt fyrir þig.",
    "about.eyebrow": "Um mig", "about.title": "Backend-miðuð fullstack þróun frá Santo Domingo.", "about.body1": "Ég er Teudy, sjálfmenntaður Full Stack Engineer staðsettur í Santo Domingo, og ég útskrifaðist nýlega frá ITLA. Ég sérhæfi mig í backend-kerfum, API, microservices og skýjainnviðum.", "about.body2": "Ég hef leitt teymi, fundið hagnýtar lausnir á tæknilegum vandamálum, hannað dreifðan arkitektúr og byggt kerfi sem vinna með alvöru peninga og alvöru notendur. Ég er laus í fjarvinnuverkefni með fyrirtækjum í Bandaríkjunum, Kanada og Evrópu.", "about.personal": "Utan kóða spila ég á píanó og þróa tölvuleiki.", "about.email": "Netfang",
    "contact.eyebrow": "Hafa samband", "contact.title": "Ertu með verkefni? Tölum saman.", "contact.subtitle": "Ég er laus í backend-verkefni, fullstack-verkefni og tækniráðgjöf. Svara innan 24-48 klukkustunda.", "contact.email": "Netfang", "contact.linkedin": "LinkedIn", "contact.github": "GitHub", "contact.resume": "Ferilskrá", "contact.downloadCv": "Sækja CV", "contact.location": "Staðsetning", "contact.locationValue": "Santo Domingo, Dóminíska lýðveldið — laus í fjarvinnu á heimsvísu", "contact.name": "Nafn", "contact.namePlaceholder": "Nafnið þitt", "contact.emailPlaceholder": "thu@example.com", "contact.projectDescription": "Lýsing verkefnis", "contact.projectPlaceholder": "Segðu frá kerfinu, API, vörunni eða ráðgjafarþörfinni.", "contact.remote": "Fjarvinnusamningar", "contact.send": "Senda fyrirspurn",
  },
} as const;

const fallbackCatalog = catalog.en;
type MessageKey = keyof typeof fallbackCatalog;
type LocaleCatalog = Record<MessageKey, string>;
type PartialLocaleCatalog = Partial<LocaleCatalog>;

const expandedCatalog = Object.fromEntries(
  locales.map((locale) => [
    locale,
    {
      ...fallbackCatalog,
      ...((catalog as Record<string, PartialLocaleCatalog>)[locale] ?? {}),
    },
  ]),
) as Record<Locale, LocaleCatalog>;

i18n.configure({
  defaultLocale: "en",
  staticCatalog: expandedCatalog,
  objectNotation: false,
});

export function normalizeLocale(locale: string | undefined): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : "en";
}

export function getT(locale: Locale) {
  i18n.setLocale(locale);
  return (key: MessageKey) => i18n.__(key);
}
