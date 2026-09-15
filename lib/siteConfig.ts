import { Facebook, Instagram, Mail, Music } from "lucide-react";

export const siteConfig = {
    name: "Anexa1",
    domain: "Anexa1.ro",
    url: "https://www.anexa1.ro",
    description: "Anexa1.ro - Panouri publicitare rigide și semnalistică pentru firme: PVC Forex, alucobond, plexiglas, polipropilenă și carton plume printate UV, cu sistem de prindere la alegere. Producție proprie, preț instant, livrare 24-48h.",
    email: "contact@Anexa1.ro",
    phone: "0750 473 111",
    address: "Jud. Buzău, Sat Topliceni, Com. Topliceni, G Topliceni, nr. 214",
    // --- MENIUL PRINCIPAL (HEADER) ---
    // Grupare pe familii de produs, cu panourile rigide primele (specialitatea
    // Anexa1). Toate produsele rămân accesibile din meniu.
    headerNav: [
        {
            href: "/materiale/pvc-forex",
            label: "Panouri rigide",
            children: [
                { href: "/materiale/pvc-forex", label: "PVC Forex 3 / 5 / 10 mm" },
                { href: "/materiale/alucobond", label: "Alucobond (dibond) 3 mm" },
                { href: "/materiale/plexiglass", label: "Plexiglas 3 / 5 mm" },
                { href: "/materiale/polipropilena", label: "Polipropilenă alveolară" },
                { href: "/materiale/carton", label: "Carton plume 5 / 10 mm" },
                { href: "/shop/semnalistica", label: "Semnalistică și indicatoare" },
            ],
        },
        {
            href: "/banner",
            label: "Bannere & outdoor",
            children: [
                { href: "/banner", label: "Banner frontlit" },
                { href: "/banner-verso", label: "Banner blockout față-verso" },
                { href: "/mesh", label: "Mesh microperforat" },
                { href: "/rollup", label: "Roll-up" },
                { href: "/window-graphics", label: "Window graphics" },
                { href: "/autocolante", label: "Autocolante" },
                { href: "/shop/bannere", label: "Șabloane de banner" },
            ],
        },
        {
            href: "/afise",
            label: "Print & textile",
            children: [
                { href: "/afise", label: "Afișe" },
                { href: "/pliante", label: "Pliante" },
                { href: "/flayere", label: "Flyere" },
                { href: "/carti-vizita", label: "Cărți de vizită" },
                { href: "/tricouri", label: "Tricouri" },
                { href: "/hanorace", label: "Hanorace" },
                { href: "/sepci", label: "Șepci" },
            ],
        },
        {
            href: "/canvas",
            label: "Decor",
            children: [
                { href: "/canvas", label: "Tablouri canvas" },
                { href: "/tapet", label: "Fototapet" },
                { href: "/shop/canvas", label: "Colecția de canvas" },
            ],
        },
        {
            href: "/fonduri-pnrr",
            label: "Fonduri UE",
            children: [
                { href: "/fonduri-pnrr", label: "Kit PNRR" },
                { href: "/fonduri-regio", label: "Programul Regional" },
                { href: "/fonduri-nationale", label: "Fonduri naționale" },
                { href: "/fonduri-eu", label: "Configurator kit vizibilitate" },
                { href: "/seap", label: "Achiziții SEAP / SICAP" },
            ],
        },
        {
            href: "/configuratoare",
            label: "Preț instant",
            highlight: true,
        },
    ],
    socialLinks: [
        {
            title: "Facebook",
            href: "https://www.facebook.com/Anexa1.ro/",
            icon: Facebook,
        },
        {
            title: "Instagram",
            href: "https://www.instagram.com/Anexa1.ro",
            icon: Instagram,
        },
        {
            title: "TikTok",
            href: "https://www.tiktok.com/@Anexa1.ro",
            icon: Music,
        },
        {
            title: "Email",
            href: "mailto:contact@Anexa1.ro",
            icon: Mail,
        },
    ],
    business: {
        // TODO confirm before launch: same entity as AdBanner/EuPrint ("CULOAREA DIN
        // VIATA SA SRL", CUI 44820819) or a new/different SRL for Anexa1? Kept the
        // shared entity as the default since most of the network invoices under it.
        legalName: "CULOAREA DIN VIATA SA SRL",
        tradeName: "Anexa1",
        cui: "44820819",
        regCom: "J2021001108100",
        vatId: "44820819",
        address: {
            fullAddress: "Jud. Buzău, Sat Topliceni, Com. Topliceni, nr. 214",
            city: "Topliceni",
            county: "Buzău",
            postalCode: "127630",
            country: "România",
        },
        contact: {
            email: "contact@Anexa1.ro",
            phone: "0750 473 111",
            phoneDisplay: "0750 473 111",
            whatsapp: "+40750473111",
        },
    },
    shipping: {
        provider: "DPD",
        standardDelivery: {
            service: "Standard",
            price: 24,
            currency: "RON",
        },
    },
    returnPolicy: {
        returnPeriod: "14 zile",
    },
    ogImage: "/og-image.jpg",
};
