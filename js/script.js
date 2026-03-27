const htmlElement = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const languageLabel = document.querySelector('.language-label');
const languageCurrent = document.querySelector('.language-current');
const languageOptions = [...document.querySelectorAll('[data-lang-option]')];
const metaDescription = document.querySelector('meta[name="description"]');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('section[id]')];
const revealElements = [...document.querySelectorAll('.reveal')];
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const typingText = document.querySelector('.typing-text');
const statNumbers = [...document.querySelectorAll('.stat-number')];
const mobileCarousels = [...document.querySelectorAll('[data-mobile-carousel]')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileCarouselQuery = window.matchMedia('(max-width: 560px)');
const contactEmail = 'matidigi23@gmail.com';
const carouselState = new WeakMap();
let carouselQueryBound = false;
const typingState = {
    timeoutId: null,
    cycleId: 0
};

const translations = {};

translations.es = {
    document: {
        title: 'Matias Di Girolamo | Full Stack Developer',
        description: 'Matias Di Girolamo - Full Stack Developer especializado en .NET, SQL Server y productos web modernos.'
    },
    controls: {
        languageLabel: 'Idioma',
        languageButtonAria: 'Cambiar idioma',
        themeButtonAria: 'Cambiar tema'
    },
    nav: ['Inicio', 'Sobre mi', 'Stack', 'Experiencia', 'Proyectos', 'Contacto'],
    hero: {
        kicker: 'BUENOS AIRES / .NET / FULL STACK',
        greeting: 'Hola, soy',
        titleLabel: 'Desarrollador FullStack .NET',
        roles: ['Construyo software de punta a punta', 'APIs, interfaces y producto real', 'Experiencia full stack para negocio y sistemas'],
        description: 'Desarrollo soluciones empresariales con <strong>.NET, SQL Server, ASP.NET y APIs REST</strong>, y tambien productos completos con <strong>React, Node.js, Prisma, Tailwind y Docker</strong>. Me interesa construir software con criterio visual, arquitectura solida y foco en problemas reales.',
        badges: ['.NET / SQL Server', 'React / Node.js', 'ERP / SaaS / APIs'],
        buttons: ['Hablemos', 'Ver proyectos', 'Ver CV'],
        socials: ['LinkedIn', 'GitHub', 'Email'],
        code: [
            'public class DeveloperProfile',
            '{ public string Stack => "C# / .NET / SQL"; }',
            '// BuildReliableSoftware();'
        ],
        scroll: 'Scroll para ver mas'
    },
    about: {
        label: 'Perfil',
        title: 'Software con criterio tecnico y enfoque real',
        paragraphs: [
            'Soy un <strong>desarrollador FullStack de 22 anos</strong> que disfruta unir arquitectura, producto y resolucion de problemas. Actualmente estudio en la <strong>UTN</strong> y trabajo como desarrollador en <strong>IPN ERP Cloud</strong>.',
            'Arranque en 2021 de forma autodidacta con HTML, CSS y JavaScript. Con el tiempo me fui especializando en backend con C#, ASP.NET, SQL Server y APIs REST, y hoy tambien trabajo con interfaces y modulos empresariales sobre .NET 10.',
            'En proyectos personales tambien trabajo con React, Node.js, Prisma, Tailwind CSS, Vite y Docker, lo que me permite moverme con comodidad entre experiencia de usuario, logica de negocio y despliegue.',
            'Me interesa participar en productos donde el detalle importe, las decisiones tecnicas tengan impacto y el software se construya para durar.'
        ],
        stats: ['Anos programando', 'Anos profesional', 'Tecnologias clave'],
        timeline: [
            { title: 'Inicio autodidacta', text: 'HTML, CSS y JavaScript como base para entrar al desarrollo web.' },
            { title: 'UTN y fundamentos', text: 'Python, Git y bases de datos como parte de la formacion tecnica.' },
            { title: 'Especializacion .NET', text: 'C#, .NET, SQL Server y desarrollo de APIs como foco principal.' },
            { title: 'Trabajo profesional', text: 'ASP.NET, VB.NET, SQL Server y mantenimiento de sistemas en produccion.' },
            { title: 'FullStack en ERP Cloud', text: 'Soluciones empresariales completas con .NET, interfaces web y workflows de negocio.' }
        ]
    },
    skills: {
        label: 'Stack',
        title: 'Tecnologias que uso para construir producto y sistemas',
        description: 'Separo claramente lo que uso en trabajo real, lo que domino para entregar valor y el stack que aparece en proyectos con nivel empresa.',
        categories: [
            {
                title: 'Backend',
                items: [
                    ['C# y .NET', 'Base de mi trabajo diario para logica de negocio, APIs y mantenimiento de sistemas empresariales.', 'Trabajo diario'],
                    ['ASP.NET y APIs REST', 'Servicios web, endpoints, documentacion y soluciones backend pensadas para durar.', 'Produccion'],
                    ['Node.js, Express y Prisma', 'Stack usado en productos SaaS y side projects con autenticacion, datos y reglas de negocio.', 'Full stack']
                ]
            },
            {
                title: 'Datos',
                items: [
                    ['SQL Server', 'Consultas, procedimientos, optimizacion y soporte de datos para sistemas criticos.', 'Profesional'],
                    ['Entity Framework Core', 'Modelado, acceso a datos y APIs con persistencia clara para productos en .NET.', 'Fuerte'],
                    ['Prisma y SQLite', 'Persistencia moderna y rapida para MVPs y productos con stack JavaScript.', 'Proyectos']
                ]
            },
            {
                title: 'Frontend',
                items: [
                    ['Blazor con .NET 10', 'Experiencia actual construyendo pantallas y flujos de negocio en aplicaciones empresariales.', 'Actual'],
                    ['React, Vite y Tailwind CSS', 'Interfaces modernas con routing, estado, componentes reutilizables y foco en producto.', 'Proyectos'],
                    ['JavaScript, HTML y CSS', 'Base solida para interfaces responsive, interacciones y layouts con personalidad propia.', 'Fuerte']
                ]
            },
            {
                title: 'Entrega',
                items: [
                    ['Git y trabajo colaborativo', 'Versionado, ramas, iteracion rapida y mantenimiento continuo en proyectos reales.', 'Siempre'],
                    ['Docker y despliegue', 'Entornos consistentes y productos listos para compartirse o desplegarse con menos friccion.', 'Deploy'],
                    ['Arquitectura de producto', 'Pienso features, UX, estructura de datos y recorrido del usuario como un mismo sistema.', 'Enfoque']
                ]
            }
        ]
    }
};

translations.en = {
    document: {
        title: 'Matias Di Girolamo | Full Stack Developer',
        description: 'Matias Di Girolamo - Full Stack Developer focused on .NET, SQL Server and modern web products.'
    },
    controls: {
        languageLabel: 'Language',
        languageButtonAria: 'Change language',
        themeButtonAria: 'Change theme'
    },
    nav: ['Home', 'About', 'Stack', 'Experience', 'Projects', 'Contact'],
    hero: {
        kicker: 'BUENOS AIRES / .NET / FULL STACK',
        greeting: 'Hello, I am',
        titleLabel: 'FullStack .NET Developer',
        roles: ['I build software end to end', 'APIs, interfaces and real products', 'Full stack experience for business and systems'],
        description: 'I build enterprise solutions with <strong>.NET, SQL Server, ASP.NET and REST APIs</strong>, and I also ship complete products with <strong>React, Node.js, Prisma, Tailwind and Docker</strong>. I care about software with visual intent, solid architecture and real problem solving.',
        badges: ['.NET / SQL Server', 'React / Node.js', 'ERP / SaaS / APIs'],
        buttons: ["Let's talk", 'View projects', 'View CV'],
        socials: ['LinkedIn', 'GitHub', 'Email'],
        code: [
            'public class DeveloperProfile',
            '{ public string Stack => "C# / .NET / SQL"; }',
            '// BuildReliableSoftware();'
        ],
        scroll: 'Scroll to explore'
    },
    about: {
        label: 'Profile',
        title: 'Software with technical judgment and real focus',
        paragraphs: [
            'I am a <strong>22-year-old Full Stack developer</strong> who enjoys connecting architecture, product and problem solving. I am currently studying at <strong>UTN</strong> and working as a developer at <strong>IPN ERP Cloud</strong>.',
            'I started in 2021 as a self-taught developer with HTML, CSS and JavaScript. Over time I specialized in backend development with C#, ASP.NET, SQL Server and REST APIs, and today I also work on enterprise interfaces and modules on .NET 10.',
            'In personal projects I also work with React, Node.js, Prisma, Tailwind CSS, Vite and Docker, which lets me move comfortably across user experience, business logic and deployment.',
            'I want to be part of products where details matter, technical decisions have impact and software is built to last.'
        ],
        stats: ['Years coding', 'Professional years', 'Key technologies'],
        timeline: [
            { title: 'Self-taught start', text: 'HTML, CSS and JavaScript as the base to get into web development.' },
            { title: 'UTN and fundamentals', text: 'Python, Git and databases as part of my technical training.' },
            { title: '.NET specialization', text: 'C#, .NET, SQL Server and API development as my main focus.' },
            { title: 'Professional work', text: 'ASP.NET, VB.NET, SQL Server and production system maintenance.' },
            { title: 'Full Stack at ERP Cloud', text: 'Complete enterprise solutions with .NET, web interfaces and business workflows.' }
        ]
    },
    skills: {
        label: 'Stack',
        title: 'Technologies I use to build products and systems',
        description: 'I separate what I use in real work, what I can rely on to deliver value, and the stack that appears in company-level projects.',
        categories: [
            {
                title: 'Backend',
                items: [
                    ['C# and .NET', 'The base of my daily work for business logic, APIs and enterprise system maintenance.', 'Daily work'],
                    ['ASP.NET and REST APIs', 'Web services, endpoints, documentation and backend solutions designed to last.', 'Production'],
                    ['Node.js, Express and Prisma', 'Stack used in SaaS products and side projects with auth, data and business rules.', 'Full stack']
                ]
            },
            {
                title: 'Data',
                items: [
                    ['SQL Server', 'Queries, procedures, optimization and data support for critical systems.', 'Professional'],
                    ['Entity Framework Core', 'Modeling, data access and API persistence for .NET products.', 'Strong'],
                    ['Prisma and SQLite', 'Modern and fast persistence for MVPs and JavaScript-based products.', 'Projects']
                ]
            },
            {
                title: 'Frontend',
                items: [
                    ['Blazor with .NET 10', 'Current experience building enterprise screens and business flows.', 'Current'],
                    ['React, Vite and Tailwind CSS', 'Modern interfaces with routing, state, reusable components and product focus.', 'Projects'],
                    ['JavaScript, HTML and CSS', 'Solid base for responsive interfaces, interactions and layouts with personality.', 'Strong']
                ]
            },
            {
                title: 'Delivery',
                items: [
                    ['Git and collaboration', 'Version control, branching, fast iteration and ongoing maintenance in real projects.', 'Always'],
                    ['Docker and deployment', 'Consistent environments and products ready to share or deploy with less friction.', 'Deploy'],
                    ['Product architecture', 'I think about features, UX, data structure and user flow as one connected system.', 'Focus']
                ]
            }
        ]
    }
};

translations.esMore = {
    experience: {
        label: 'Trayectoria',
        title: 'Experiencia en productos y sistemas reales',
        description: 'Me interesa entender el contexto, cuidar la arquitectura y entregar software que funcione bien con usuarios, procesos y necesidades reales de negocio.',
        items: [
            ['2025 / ACTUAL', 'May 2025 - Hoy', 'Programador FullStack', 'IPN ERP Cloud', 'Buenos Aires, Argentina / Remoto', ['Desarrollo de aplicaciones empresariales con stack completo .NET.', 'Implementacion de soluciones ERP en la nube con C# y ASP.NET.', 'Desarrollo de pantallas y modulos web sobre .NET 10.', 'Colaboracion con equipo y negocio para entregas con impacto real.']],
            ['2024 / 2025', 'Ene 2024 - May 2025', 'Desarrollador .NET', 'PENA', 'Buenos Aires, Argentina / Presencial', ['Desarrollo y mantenimiento de aplicaciones en C# y VB.NET.', 'Creacion de APIs REST y aplicaciones web con ASP.NET.', 'Gestion y optimizacion de bases de datos SQL Server.', 'Implementacion del patron MVC en aplicaciones empresariales.', 'Optimizacion de rendimiento en sistemas criticos.']],
            ['2021 / 2023', 'Sep 2021 - Dic 2023', 'Gestor de Cobros', 'Empresa de Servicios Financieros', 'Remoto', ['Gestion de comunicacion con clientes y negociacion de pagos.', 'Registro y seguimiento de interacciones en sistemas CRM.', 'Toma de decisiones estrategicas para recuperacion de deudas.']]
        ]
    },
    projects: {
        label: 'Seleccion',
        title: 'Proyectos donde backend, producto y visual conviven',
        description: 'Elegi proyectos que muestran decision tecnica, criterio de stack y un rango real entre SaaS, herramientas y productos web.',
        items: [
            ['Healthcare SaaS', 'SaaS Healthcare', 'ERP Hospital', 'Plataforma multiempresa orientada a gestion clinica, con frontend moderno, API separada y modulos para pacientes, historias clinicas, pagos, auditoria y branding por institucion.'],
            ['App de inventario', 'Inventory Management', 'StockMaster Pro', 'Sistema CRUD para gestion de inventario con control de stock, alertas, movimientos, categorias, proveedores y reportes listos para uso operativo.'],
            ['Backend .NET', 'Backend API', 'StockMaster API', 'API REST completa con .NET 9, Entity Framework Core y SQL Server para productos, categorias, proveedores y movimientos, con documentacion Swagger y OpenAPI.'],
            ['Finance Tracker', 'PWA + Firebase', 'Finance Tracker', 'PWA para gestion de finanzas personales con autenticacion, tarjetas, suscripciones, sincronizacion en la nube y experiencia de uso pensada para el dia a dia.'],
            ['Riot API Tool', 'Gaming Assistant', 'LoL Build Advisor', 'MVP full stack que detecta partidas activas de League of Legends y recomienda ajustes de build usando Riot API, Live Client Data y una capa opcional de IA.']
        ]
    },
    contact: {
        label: 'Contacto',
        title: 'Si el proyecto importa, me interesa hablarlo',
        description: 'Elegi el canal que prefieras y te respondo por mail, LinkedIn o GitHub.',
        introLabel: 'DISPONIBLE REMOTO',
        introTitle: 'Me interesan productos donde arquitectura, interfaz y negocio importen de verdad.',
        introText: 'Si necesitas alguien que pueda moverse entre backend, frontend y decisiones de producto, podemos hablar. Estoy especialmente comodo en plataformas empresariales, SaaS y APIs.',
        cards: [
            ['Email', 'matidigi23@gmail.com', 'Enviar email'],
            ['LinkedIn', 'Conectemos profesionalmente', 'Ver perfil'],
            ['GitHub', 'Repos y proyectos reales', 'Ver repositorios'],
            ['Ubicacion', 'Buenos Aires, Argentina', 'UTC-3']
        ],
        formLabels: ['Nombre', 'Email', 'Asunto', 'Mensaje'],
        submit: 'Enviar mensaje'
    },
    footer: {
        rights: '2026 Matias Di Girolamo. Todos los derechos reservados.',
        made: 'Hecho con HTML, CSS y JavaScript, pero con obsesion por los detalles.'
    },
    toast: 'Se abrio tu cliente de correo con el mensaje listo para enviar.'
};

translations.enMore = {
    experience: {
        label: 'Journey',
        title: 'Experience in real products and systems',
        description: 'I care about understanding the context, protecting the architecture and delivering software that works well with real users, processes and business needs.',
        items: [
            ['2025 / CURRENT', 'May 2025 - Today', 'Full Stack Developer', 'IPN ERP Cloud', 'Buenos Aires, Argentina / Remote', ['Enterprise application development with the full .NET stack.', 'ERP cloud solutions built with C# and ASP.NET.', 'Screen and web module development on .NET 10.', 'Collaboration with team and business stakeholders for high-impact delivery.']],
            ['2024 / 2025', 'Jan 2024 - May 2025', '.NET Developer', 'PENA', 'Buenos Aires, Argentina / On-site', ['Development and maintenance of applications in C# and VB.NET.', 'REST API and web application development with ASP.NET.', 'SQL Server database management and optimization.', 'MVC pattern implementation in enterprise applications.', 'Performance optimization for critical systems.']],
            ['2021 / 2023', 'Sep 2021 - Dec 2023', 'Collections Specialist', 'Financial Services Company', 'Remote', ['Client communication management and payment negotiation.', 'Interaction tracking and logging in CRM systems.', 'Strategic decision making for debt recovery.']]
        ]
    },
    projects: {
        label: 'Selected Work',
        title: 'Projects where backend, product and visual design meet',
        description: 'I selected projects that show technical judgment, stack choices and a real range across SaaS, tools and web products.',
        items: [
            ['Healthcare SaaS', 'SaaS Healthcare', 'ERP Hospital', 'Multi-company healthcare platform with a modern frontend, separate API and modules for patients, medical records, payments, auditing and institution branding.'],
            ['Inventory App', 'Inventory Management', 'StockMaster Pro', 'CRUD inventory system with stock control, alerts, movements, categories, suppliers and reporting ready for operational use.'],
            ['.NET Backend', 'Backend API', 'StockMaster API', 'Complete REST API with .NET 9, Entity Framework Core and SQL Server for products, categories, suppliers and movements, including Swagger and OpenAPI docs.'],
            ['Finance Tracker', 'PWA + Firebase', 'Finance Tracker', 'Personal finance PWA with authentication, cards, subscriptions, cloud sync and a day-to-day usage oriented experience.'],
            ['Riot API Tool', 'Gaming Assistant', 'LoL Build Advisor', 'Full stack MVP that detects active League of Legends matches and recommends build adjustments using Riot API, Live Client Data and an optional AI layer.']
        ]
    },
    contact: {
        label: 'Contact',
        title: 'If the project matters, I want to talk about it',
        description: 'Pick the channel you prefer and I will reply by email, LinkedIn or GitHub.',
        introLabel: 'AVAILABLE REMOTE',
        introTitle: 'I am interested in products where architecture, interface and business truly matter.',
        introText: 'If you need someone who can move between backend, frontend and product decisions, we can talk. I am especially comfortable in enterprise platforms, SaaS and APIs.',
        cards: [
            ['Email', 'matidigi23@gmail.com', 'Send email'],
            ['LinkedIn', 'Let us connect professionally', 'View profile'],
            ['GitHub', 'Repos and real projects', 'View repositories'],
            ['Location', 'Buenos Aires, Argentina', 'UTC-3']
        ],
        formLabels: ['Name', 'Email', 'Subject', 'Message'],
        submit: 'Send message'
    },
    footer: {
        rights: '2026 Matias Di Girolamo. All rights reserved.',
        made: 'Built with HTML, CSS and JavaScript, but with an obsession for detail.'
    },
    toast: 'Your email client was opened with the message ready to send.'
};

let currentLanguage = 'es';

init();

function init() {
    setupLanguage();
    setupTheme();
    setupNavigation();
    setupTypingEffect();
    setupRevealAnimations();
    setupScrollTop();
    setupContactForm();
    setupSmoothScroll();
    setupStatCounters();
    setupMobileCarousels();
}

function setupLanguage() {
    currentLanguage = localStorage.getItem('language') || 'es';
    applyLanguage(currentLanguage);

    if (!languageToggle) return;

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLanguage);
        applyLanguage(currentLanguage);
    });
}

function setupTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const activeTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', activeTheme);
        localStorage.setItem('theme', activeTheme);
        updateThemeIcon(activeTheme);
    });
}

function applyLanguage(language) {
    const base = translations[language];
    const extra = translations[`${language}More`];
    if (!base || !extra) return;

    htmlElement.setAttribute('lang', language);
    document.title = base.document.title;
    if (metaDescription) metaDescription.setAttribute('content', base.document.description);

    if (languageLabel) languageLabel.textContent = base.controls.languageLabel;
    updateLanguageToggle(language);
    if (languageToggle) languageToggle.setAttribute('aria-label', base.controls.languageButtonAria);
    if (themeToggle) themeToggle.setAttribute('aria-label', base.controls.themeButtonAria);

    setTextArray(navLinks, base.nav);

    setText('.hero-kicker', base.hero.kicker);
    setText('.hero-greeting', base.hero.greeting);
    setText('.hero-title-label', base.hero.titleLabel);
    if (typingText) typingText.textContent = '';
    setHTML('.hero-description', base.hero.description);
    setTextArray(document.querySelectorAll('.hero-badges span'), base.hero.badges);
    setButtonLabels(document.querySelectorAll('.hero-buttons .btn'), base.hero.buttons);
    setButtonLabels(document.querySelectorAll('.social-links a'), base.hero.socials);
    setTextArray(document.querySelectorAll('.orbit-code .code-line'), base.hero.code);
    setText('.scroll-indicator p', base.hero.scroll);

    setText('#about .section-label', base.about.label);
    setText('#about .section-title', base.about.title);
    setHTMLArray(document.querySelectorAll('.about-text > p'), base.about.paragraphs);
    setTextArray(document.querySelectorAll('.stat-label'), base.about.stats);
    applyTimeline(base.about.timeline);

    setText('#skills .section-label', base.skills.label);
    setText('#skills .section-title', base.skills.title);
    setText('#skills .section-description', base.skills.description);
    applySkills(base.skills.categories);

    setText('#experience .section-label', extra.experience.label);
    setText('#experience .section-title', extra.experience.title);
    setText('#experience .section-description', extra.experience.description);
    applyExperience(extra.experience.items);

    setText('#projects .section-label', extra.projects.label);
    setText('#projects .section-title', extra.projects.title);
    setText('#projects .section-description', extra.projects.description);
    applyProjects(extra.projects.items);

    setText('#contact .section-label', extra.contact.label);
    setText('#contact .section-title', extra.contact.title);
    setText('#contact .section-description', extra.contact.description);
    setButtonLabels(document.querySelectorAll('.contact-quick-links a'), extra.contact.cards.slice(0, 3).map((item) => item[0]));
    setText('.contact-intro-label', extra.contact.introLabel);
    setText('.contact-intro-card h3', extra.contact.introTitle);
    setText('.contact-intro-card p', extra.contact.introText);
    applyContactCards(extra.contact.cards);
    setTextArray(document.querySelectorAll('.form-group label'), extra.contact.formLabels);
    setIconButtonText(document.querySelector('#contactForm .btn'), extra.contact.submit);

    setText('.footer-content p:first-child', extra.footer.rights);
    setText('.footer-made', extra.footer.made);

    setupTypingEffect();
}

function applyTimeline(items) {
    [...document.querySelectorAll('.timeline-item')].forEach((item, index) => {
        const copy = items[index];
        if (!copy) return;
        setText(item.querySelector('h4'), copy.title);
        setText(item.querySelector('p'), copy.text);
    });
}

function applySkills(categories) {
    [...document.querySelectorAll('.skill-category')].forEach((categoryElement, categoryIndex) => {
        const category = categories[categoryIndex];
        if (!category) return;

        setText(categoryElement.querySelector('.category-header h3'), category.title);
        [...categoryElement.querySelectorAll('.skill-item')].forEach((itemElement, itemIndex) => {
            const item = category.items[itemIndex];
            if (!item) return;
            setText(itemElement.querySelector('.skill-name'), item[0]);
            setText(itemElement.querySelector('.skill-copy p'), item[1]);
            setText(itemElement.querySelector('.skill-badge'), item[2]);
        });
    });
}

function applyExperience(items) {
    [...document.querySelectorAll('.experience-item')].forEach((itemElement, index) => {
        const item = items[index];
        if (!item) return;
        setText(itemElement.querySelector('.date-badge'), item[0]);
        setText(itemElement.querySelector('.date-text'), item[1]);
        setText(itemElement.querySelector('.experience-content h3'), item[2]);
        setText(itemElement.querySelector('.experience-content h4'), item[3]);
        const location = itemElement.querySelector('.location');
        if (location) location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${item[4]}`;
        setTextArray(itemElement.querySelectorAll('.experience-list li'), item[5]);
    });
}

function applyProjects(items) {
    [...document.querySelectorAll('.project-card')].forEach((itemElement, index) => {
        const item = items[index];
        if (!item) return;
        setText(itemElement.querySelector('.project-mark small'), item[0]);
        setText(itemElement.querySelector('.project-category'), item[1]);
        setText(itemElement.querySelector('.project-content h3'), item[2]);
        setText(itemElement.querySelector('.project-content p'), item[3]);
    });
}

function applyContactCards(items) {
    [...document.querySelectorAll('.contact-card')].forEach((itemElement, index) => {
        const item = items[index];
        if (!item) return;
        setText(itemElement.querySelector('h3'), item[0]);
        setText(itemElement.querySelector('p'), item[1]);
        setText(itemElement.querySelector('.contact-link'), item[2]);
    });
}

function setupTypingEffect() {
    if (!typingText) return;

    if (typingState.timeoutId) {
        clearTimeout(typingState.timeoutId);
        typingState.timeoutId = null;
    }

    typingState.cycleId += 1;
    const cycleId = typingState.cycleId;
    const phrases = translations[currentLanguage]?.hero?.roles || [];

    if (!phrases.length) {
        typingText.textContent = '';
        return;
    }

    if (prefersReducedMotion.matches) {
        typingText.textContent = phrases[0];
        return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
        if (cycleId !== typingState.cycleId) return;

        const currentPhrase = phrases[phraseIndex];
        typingText.textContent = currentPhrase.slice(0, charIndex);

        let delay = isDeleting ? 36 : 68;

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex += 1;
        } else if (!isDeleting && charIndex === currentPhrase.length) {
            delay = 1550;
            isDeleting = true;
        } else if (isDeleting && charIndex > 0) {
            charIndex -= 1;
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 260;
        }

        typingState.timeoutId = window.setTimeout(tick, delay);
    };

    tick();
}

function setupNavigation() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });

    const syncNavigation = () => {
        const scrollY = window.scrollY;
        navbar?.classList.toggle('scrolled', scrollY > 40);

        let currentSection = sections[0]?.id || '';
        sections.forEach((section) => {
            const offset = section.offsetTop - 160;
            if (scrollY >= offset) currentSection = section.id;
        });

        navLinks.forEach((link) => {
            const target = link.getAttribute('href')?.replace('#', '');
            link.classList.toggle('active', target === currentSection);
        });
    };

    syncNavigation();
    window.addEventListener('scroll', syncNavigation, { passive: true });
}

function setupRevealAnimations() {
    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 55, 320)}ms`;
    });

    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));
}

function setupScrollTop() {
    if (!scrollTopBtn) return;

    const toggleScrollButton = () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 520);
    };

    toggleScrollButton();
    window.addEventListener('scroll', toggleScrollButton, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
    });
}

function setupContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const subject = document.getElementById('subject')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || '';
        const mailLabels = currentLanguage === 'en'
            ? { name: 'Name', email: 'Email', message: 'Message' }
            : { name: 'Nombre', email: 'Email', message: 'Mensaje' };

        const mailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
        const mailBody = encodeURIComponent(`${mailLabels.name}: ${name}\n${mailLabels.email}: ${email}\n\n${mailLabels.message}:\n${message}`);

        window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`;
        contactForm.reset();
        showMailToast(translations[`${currentLanguage}More`].toast);
    });
}

function showMailToast(message) {
    const existingToast = document.querySelector('[data-mail-toast]');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.setAttribute('data-mail-toast', 'true');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.left = '50%';
    toast.style.bottom = '28px';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '14px 18px';
    toast.style.borderRadius = '999px';
    toast.style.background = 'rgba(17, 16, 15, 0.92)';
    toast.style.color = '#fffaf4';
    toast.style.fontFamily = "'Fira Code', monospace";
    toast.style.fontSize = '0.8rem';
    toast.style.letterSpacing = '0.03em';
    toast.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.24)';
    toast.style.zIndex = '2000';
    toast.style.opacity = '0';
    toast.style.transition = prefersReducedMotion.matches ? 'opacity 120ms ease' : 'opacity 220ms ease, transform 220ms ease';
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        if (!prefersReducedMotion.matches) toast.style.transform = 'translateX(-50%) translateY(-6px)';
    });

    window.setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%)';
        window.setTimeout(() => toast.remove(), 240);
    }, 2600);
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 84;
            window.scrollTo({
                top,
                behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
            });
        });
    });
}

function setupStatCounters() {
    if (!statNumbers.length) return;

    const animateNumber = (element) => {
        const match = element.textContent.match(/\d+/);
        if (!match) return;

        const target = Number(match[0]);
        const suffix = element.textContent.replace(match[0], '');
        const duration = prefersReducedMotion.matches ? 0 : 900;

        if (duration === 0) {
            element.textContent = `${target}${suffix}`;
            return;
        }

        const startTime = performance.now();
        const step = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            element.textContent = `${value}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
        statNumbers.forEach(animateNumber);
        return;
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateNumber(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.8 });

    statNumbers.forEach((number) => counterObserver.observe(number));
}

function setupMobileCarousels() {
    if (!mobileCarousels.length) return;

    mobileCarousels.forEach((carousel) => {
        if (!carouselState.has(carousel)) {
            carouselState.set(carousel, {
                intervalId: null,
                paused: false,
                resumeTimeout: null,
                handlersBound: false,
                currentIndex: 0,
                scrollTimeout: null
            });
        }

        syncCarouselState(carousel);
    });

    if (carouselQueryBound) return;
    const handleChange = () => {
        mobileCarousels.forEach((carousel) => syncCarouselState(carousel));
    };

    if ('addEventListener' in mobileCarouselQuery) {
        mobileCarouselQuery.addEventListener('change', handleChange);
    } else {
        mobileCarouselQuery.addListener(handleChange);
    }

    carouselQueryBound = true;
}

function syncCarouselState(carousel) {
    const state = carouselState.get(carousel);
    if (!state) return;

    if (mobileCarouselQuery.matches) {
        enableMobileCarousel(carousel, state);
    } else {
        disableMobileCarousel(carousel, state);
    }
}

function enableMobileCarousel(carousel, state) {
    bindCarouselHandlers(carousel, state);

    if (state.intervalId || prefersReducedMotion.matches) return;

    const items = getCarouselItems(carousel);
    if (items.length < 2) return;

    state.intervalId = window.setInterval(() => {
        if (!mobileCarouselQuery.matches || state.paused || document.hidden) return;
        advanceCarousel(carousel, state);
    }, 2200);
}

function disableMobileCarousel(carousel, state) {
    if (state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
    }

    if (state.resumeTimeout) {
        clearTimeout(state.resumeTimeout);
        state.resumeTimeout = null;
    }

    if (state.scrollTimeout) {
        clearTimeout(state.scrollTimeout);
        state.scrollTimeout = null;
    }

    state.paused = false;
    state.currentIndex = 0;
    carousel.scrollLeft = 0;
}

function bindCarouselHandlers(carousel, state) {
    if (state.handlersBound) return;

    const pause = () => {
        state.paused = true;
        if (state.resumeTimeout) {
            clearTimeout(state.resumeTimeout);
            state.resumeTimeout = null;
        }
    };

    const resume = () => {
        if (!mobileCarouselQuery.matches) return;
        state.resumeTimeout = window.setTimeout(() => {
            syncCarouselPosition(carousel, state);
            state.paused = false;
        }, 1400);
    };

    carousel.addEventListener('pointerdown', pause, { passive: true });
    carousel.addEventListener('touchstart', pause, { passive: true });
    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);
    carousel.addEventListener('pointerup', resume, { passive: true });
    carousel.addEventListener('touchend', resume, { passive: true });
    carousel.addEventListener('touchcancel', resume, { passive: true });
    carousel.addEventListener('focusin', pause);
    carousel.addEventListener('focusout', resume);
    carousel.addEventListener('scroll', () => {
        if (!mobileCarouselQuery.matches) return;
        if (state.scrollTimeout) clearTimeout(state.scrollTimeout);
        state.scrollTimeout = window.setTimeout(() => {
            syncCarouselPosition(carousel, state);
        }, 120);
    }, { passive: true });

    state.handlersBound = true;
}

function getCarouselItems(carousel) {
    return [...carousel.children];
}

function advanceCarousel(carousel, state) {
    const items = getCarouselItems(carousel);
    if (items.length < 2) return;

    const nextIndex = state.currentIndex >= items.length - 1 ? 0 : state.currentIndex + 1;
    const target = items[nextIndex];
    if (!target) return;

    state.currentIndex = nextIndex;
    carousel.scrollTo({
        left: target.offsetLeft,
        behavior: prefersReducedMotion.matches || nextIndex === 0 ? 'auto' : 'smooth'
    });
}

function syncCarouselPosition(carousel, state) {
    const items = getCarouselItems(carousel);
    if (!items.length) return;

    const currentScroll = carousel.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
        const distance = Math.abs(item.offsetLeft - currentScroll);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
        }
    });

    state.currentIndex = nearestIndex;
}

function updateThemeIcon(theme) {
    const icon = themeToggle?.querySelector('i');
    if (!icon) return;
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function updateLanguageToggle(language) {
    if (!languageToggle || !languageCurrent) return;
    languageToggle.dataset.language = language;
    languageOptions.forEach((option) => {
        option.classList.toggle('is-active', option.dataset.langOption === language);
    });
}

function setText(selectorOrElement, value) {
    const element = typeof selectorOrElement === 'string' ? document.querySelector(selectorOrElement) : selectorOrElement;
    if (element) element.textContent = value;
}

function setHTML(selectorOrElement, value) {
    const element = typeof selectorOrElement === 'string' ? document.querySelector(selectorOrElement) : selectorOrElement;
    if (element) element.innerHTML = value;
}

function setTextArray(elements, values) {
    [...elements].forEach((element, index) => {
        if (values[index] !== undefined) element.textContent = values[index];
    });
}

function setHTMLArray(elements, values) {
    [...elements].forEach((element, index) => {
        if (values[index] !== undefined) element.innerHTML = values[index];
    });
}

function setButtonLabels(elements, labels) {
    [...elements].forEach((element, index) => {
        if (labels[index] !== undefined) setIconButtonText(element, labels[index]);
    });
}

function setIconButtonText(element, label) {
    if (!element) return;
    const icon = element.querySelector('i');
    if (!icon) {
        element.textContent = label;
        return;
    }
    element.innerHTML = `${icon.outerHTML}<span>${label}</span>`;
}
