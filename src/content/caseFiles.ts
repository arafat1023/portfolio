// All portfolio copy lives here. Components only lay it out.

export interface Readout {
    label: string;
    from?: string;
    value: string;
}

export interface LedgerRow {
    label: string;
    old?: string;
    next: string;
    note?: string;
}

export interface CaseFile {
    id: string;
    code: string;
    domain: string;
    title: string;
    // Shorter or clearer name for the index table, when the title needs it.
    indexTitle?: string;
    role: string;
    years: string;
    indexDomain: string;
    indexRole: string;
    summary: string;
    owned?: string[];
    readouts?: Readout[];
    ledger?: LedgerRow[];
    status?: string;
    stack?: string;
    figure?: string;
    link: { href: string; label: string };
    compact?: boolean;
}

export interface OwnProject {
    title: string;
    meta: string;
    live?: boolean;
    paragraphs: string[];
    chips?: string[];
    links: { href: string; label: string }[];
}

export const GITHUB_URL = "https://github.com/arafat1023";
export const LINKEDIN_URL = "https://www.linkedin.com/in/arafat-hossain-dev/";
export const EMAIL = "arafathossain847@gmail.com";

// Order here is the order on the page (and in the index table).
export const caseFiles: CaseFile[] = [
    {
        id: "tissueconnect",
        code: "TC-01",
        domain: "Healthcare",
        title: "TissueConnect",
        role: "Architecture lead · team of 3 · Nerddevs · 2023–present",
        years: "2023–now",
        indexDomain: "Healthcare, clinical MRI",
        indexRole: "Architecture lead",
        summary:
            "A predictive-analytics platform for spinal disease. Clinicians upload MRI studies; the platform segments muscle tissue and computes diagnostic metrics.",
        owned: [
            "Led architecture and end-to-end development: backend services, database schemas and the Azure infrastructure that holds clinical data.",
            "Encrypted patient data with Azure Key Vault and data encryption keys, meeting HIPAA requirements.",
            "Built the muscle-analysis algorithms and MRI segmentation pipelines in Python.",
            "Shipped the clinician admin portal and the end-user diagnostic app as one product.",
        ],
        readouts: [
            { label: "Average analysis time", from: "7 min →", value: "<2 min" },
            { label: "Segmentation accuracy", from: "80% →", value: "94%" },
        ],
        stack: "Python · Flask · PostgreSQL · Vue.js · Electron · Azure (Key Vault, Blob, Functions)",
        link: { href: "https://www.sdi-global.ai/", label: "sdi-global.ai" },
    },
    {
        id: "aimate",
        code: "AM-02",
        domain: "AI product",
        title: "AI Mate",
        role: "API architect · Nerddevs · 2023–present",
        years: "2023–now",
        indexDomain: "LLM chat product & gateway",
        indexRole: "API architect",
        summary:
            "A GPT-powered chat app that grew into the LLM gateway other Nerddevs products call, including Biddaan. The backend fronts several model providers, streams completions over Socket.IO, and checks token and credit limits before any provider is called.",
        owned: [
            "Designed the REST APIs from OpenAPI specifications for type-safe client and server integration.",
            "Built the full admin dashboard: chatbot configuration, user management and analytics.",
        ],
        readouts: [
            { label: "Users supported", value: "50,000" },
            { label: "Model providers", value: "OpenAI · DeepSeek" },
        ],
        stack: "TypeScript · Express.js · MongoDB · Redis · Socket.IO · Vue.js · Jest",
        link: { href: "https://play.google.com/store/apps/details?id=com.aimate.app", label: "Google Play" },
    },
    {
        id: "biddaan",
        code: "BD-03",
        domain: "EdTech",
        title: "Biddaan",
        role: "",
        years: "2023–now",
        indexDomain: "EdTech, multi-tenant SaaS",
        indexRole: "Full-stack, deploy automation",
        summary:
            "Multi-tenant course and class management platform. Automated the Nginx reverse-proxy setup and the CI/CD pipeline, cutting engineering involvement in tenant onboarding.",
        figure: "Tenant deploy: 10 min → <2 min",
        link: { href: "https://biddaan.com/", label: "biddaan.com" },
        compact: true,
    },
    {
        id: "daency",
        code: "DY-04",
        domain: "Live video",
        title: "Daency",
        role: "",
        years: "2021–22",
        indexDomain: "Live video classes",
        indexRole: "Full-stack",
        summary:
            "Live group-dance classes for international clients, on web and mobile. WebRTC video, Stripe payments, and Redis-backed event-driven job queues; selective muting and dynamic pinning in class.",
        figure: "500+ concurrent users · 30+ live classes",
        link: { href: "https://daency.com/", label: "daency.com" },
        compact: true,
    },
    {
        id: "bikribatta",
        code: "BB-05",
        domain: "Inventory SaaS",
        title: "Bikribatta",
        role: "Module builder (2022) · modernization lead (2026) · Nerddevs",
        years: "2022, 2026",
        indexDomain: "Inventory, POS & accounting SaaS",
        indexRole: "Module builder, modernization lead",
        summary: "A multi-tenant inventory, POS, accounting and HR platform for small businesses, first built in 2017.",
        owned: [
            "Built the accounts, reporting, purchase-order and employee-management modules.",
            "Leading the full modernization of the nine-year-old codebase: runtime, database, a strictly typed server and a new Vue 3 frontend, with the database schema left unchanged.",
            "Proved nothing changed: a contract test over every data model, scenario tests that run purchase, sale, collection and voucher flows on old and new builds and diff the databases, and Playwright tests with accessibility checks.",
        ],
        ledger: [
            { label: "Runtime", old: "Node 12", next: "Node 24" },
            { label: "Database", old: "MongoDB 3.2", next: "7.0" },
            { label: "ODM", old: "Mongoose 5", next: "8" },
            { label: "Server", old: "JavaScript", next: "strict TS" },
            { label: "Frontend", old: "Backbone", next: "Vue 3 + TS" },
            { label: "Screens", next: "269", note: "legacy routes mapped" },
            { label: "Contract", next: "79", note: "models under test" },
        ],
        status: "Code complete · production cutover next",
        link: { href: "https://app.bikribatta.com/", label: "app.bikribatta.com" },
    },
    {
        id: "sheraspace",
        code: "SS-06",
        domain: "Sheraspace",
        title: "Project management tool",
        indexTitle: "Sheraspace PM tool",
        role: "",
        years: "2019–21",
        indexDomain: "Project management",
        indexRole: "Full-stack",
        summary:
            "Accounts, reporting and HR modules built from scratch in React, Flask and PostgreSQL. Reporting on advanced SQL with Chart.js, plus a 3D SketchUp model viewer.",
        figure: "Used by 3 project managers across 3 teams",
        link: { href: "https://sheraspace.com/", label: "sheraspace.com" },
        compact: true,
    },
];

export const ownProjects: OwnProject[] = [
    {
        title: "BinduShop",
        meta: "E-commerce · Sep 2026–now",
        live: true,
        paragraphs: [
            "An online store for the Bangladesh market. Medusa v2 backend with a Next.js storefront, on PostgreSQL and Redis in a pnpm/Turborepo monorepo.",
            "I wrote the custom backend modules: bKash and SSLCommerz payments, Steadfast courier fulfillment and Mailgun email, with event subscribers driving orders, shipments and notifications. Role-based access, audit logging and sales reports in the admin.",
        ],
        chips: ["TypeScript", "Medusa v2", "Next.js", "PostgreSQL", "Redis", "Jest"],
        links: [{ href: "https://bindushop.com", label: "bindushop.com" }],
    },
    {
        title: "Zikr One",
        meta: "Mobile + web · Nov 2025–now",
        live: true,
        paragraphs: [
            "A community dhikr tracker: tap counters, public and private rooms, streaks and live leaderboards, with offline counting that syncs later.",
            "Flutter app on Google Play with a Next.js admin. I replaced Firebase with a NestJS REST and Socket.IO API on PostgreSQL (Prisma), porting every security rule and Cloud Function, backed by 300+ unit and end-to-end tests in CI.",
        ],
        chips: ["Flutter", "NestJS", "Socket.IO", "PostgreSQL", "Prisma", "Sentry"],
        links: [
            { href: "https://zikrone.com", label: "zikrone.com" },
            { href: "https://play.google.com/store/apps/details?id=com.zikrflow.app", label: "Google Play" },
        ],
    },
];

export const openSource: { title: string; meta: string; text: string; href: string }[] = [
    {
        title: "BhashaVoice",
        meta: "Open source · Python",
        text: "Self-hostable voice cloning: clone a voice from a short recording, then generate Bangla or English speech in it.",
        href: "https://github.com/arafat1023/bhashavoice",
    },
    {
        title: "QueryPlayground",
        meta: "Open source · React + WASM",
        text: "Practice real PostgreSQL and MongoDB queries in the browser. PostgreSQL 17 runs as WebAssembly through PGlite; no server, no signup.",
        href: "https://github.com/arafat1023/QueryPlayground",
    },
    {
        title: "ZeroShutter",
        meta: "Open source · React + Canvas",
        text: "Privacy-first image editor that never uploads: crop, adjust, watermark and batch-export to ZIP, with EXIF stripped automatically.",
        href: "https://github.com/arafat1023/ZeroShutter",
    },
];

export const skills: [string, string][] = [
    ["Languages", "TypeScript, JavaScript, Python"],
    ["Backend", "Node.js, Express.js, NestJS, Flask"],
    ["Frontend", "React, Vue.js, Next.js, Tailwind CSS"],
    ["Data", "PostgreSQL, MongoDB, Redis"],
    ["Cloud", "Azure, AWS, Docker, Nginx"],
    ["Testing", "Jest, Mocha, Vitest, Playwright, pytest"],
];

export const timeline: { when: string; what: string; where: string }[] = [
    { when: "Jan 2023 – now", what: "Senior Software Engineer", where: "Nerddevs Ltd., Dhaka" },
    { when: "Mar – May 2025", what: "ACMP 4.0, management certificate", where: "IBA, University of Dhaka" },
    { when: "Jan 2025", what: "Instructor, Laravel & Django", where: "RUET, EDGE Government Program" },
    { when: "Sep 2021 – Dec 2022", what: "Software Engineer", where: "Nerddevs Ltd., Dhaka" },
    { when: "Mar 2019 – Aug 2021", what: "Software Engineer", where: "Sheraspace Ltd., Dhaka" },
    { when: "2014 – 2018", what: "B.Sc., Computer Science & Engineering", where: "BRAC University" },
];
