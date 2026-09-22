"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

/** Toate familiile de produs, panourile rigide primele (specialitatea Anexa1). */
const PRODUCT_LINKS = [
    { href: "/materiale/pvc-forex", label: "Panouri PVC Forex" },
    { href: "/materiale/alucobond", label: "Panouri alucobond" },
    { href: "/materiale/plexiglass", label: "Plăcuțe plexiglas" },
    { href: "/materiale/polipropilena", label: "Polipropilenă alveolară" },
    { href: "/materiale/carton", label: "Carton plume" },
    { href: "/shop/semnalistica", label: "Semnalistică și indicatoare" },
    { href: "/banner", label: "Bannere frontlit și mesh" },
    { href: "/banner-verso", label: "Banner față-verso" },
    { href: "/rollup", label: "Roll-up" },
    { href: "/window-graphics", label: "Window graphics" },
    { href: "/autocolante", label: "Autocolante" },
    { href: "/afise", label: "Afișe, pliante, flyere" },
    { href: "/carti-vizita", label: "Cărți de vizită" },
    { href: "/tricouri", label: "Textile personalizate" },
    { href: "/canvas", label: "Canvas și fototapet" },
    { href: "/fonduri-pnrr", label: "Kituri fonduri UE" },
];

const GUIDE_LINKS = [
    { href: "/material", label: "Fișe tehnice materiale" },
    { href: "/servicii", label: "Finisaje și sisteme de prindere" },
    { href: "/norme", label: "Norme și reglementări" },
    { href: "/stil", label: "Stiluri de design" },
    { href: "/blog", label: "Ghiduri de montaj" },
    { href: "/industrii", label: "Soluții pe industrii" },
    { href: "/judet", label: "Livrare pe județe" },
    { href: "/dimensiuni", label: "Prețuri pe dimensiuni" },
    { href: "/preturi", label: "Prețuri pe cantități" },
    { href: "/sectoare-bucuresti", label: "Sectoare București" },
];

const COMPANY_LINKS = [
    { href: "/despre-noi", label: "Despre Anexa1" },
    { href: "/seap", label: "Achiziții SEAP / SICAP" },
    { href: "/contact", label: "Ofertă pentru sedii și rețele" },
    { href: "/livrare", label: "Livrare și termene" },
    { href: "/urmareste-comanda", label: "Status comandă" },
    { href: "/configuratoare", label: "Toate configuratoarele" },
    { href: "/noutati", label: "Noutăți" },
];

const LEGAL_LINKS = [
    { href: "/termeni", label: "Termeni" },
    { href: "/confidentialitate", label: "Confidențialitate" },
    { href: "/politica-cookies", label: "Cookies" },
    { href: "/politica-retur", label: "Retur" },
    { href: "/retragere-contract", label: "Retragere din contract" },
    { href: "/stergere-date", label: "Ștergere date" },
    { href: "/harta-site", label: "Harta site" },
];

export default function Footer() {
    const pathname = usePathname();

    if (pathname?.startsWith("/admin") || pathname === "/editor") return null;

    const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, "").replace(/^0/, "+40")}`;

    return (
        <footer className="bg-slate-50 text-slate-600 relative isolate border-t border-slate-200 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-sky-800" />

            <div className="container mx-auto px-6 lg:px-12 !max-w-7xl py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">
                    {/* Brand */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <Image
                                src="/logo.svg"
                                alt="Anexa1.ro"
                                width={36}
                                height={36}
                                className="w-9 h-9 object-contain"
                                loading="lazy"
                            />
                            <span className="text-xl font-black text-slate-900 tracking-tight">Anexa<span className="text-sky-800">1</span>.ro</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Panouri rigide și semnalistică pentru firme, print UV în producție proprie, livrare în toată țara.
                        </p>
                        <div className="space-y-3 text-sm">
                            <a href={phoneHref} className="flex items-center gap-3 hover:text-sky-800 transition-colors">
                                <Phone size={16} className="text-sky-800 shrink-0" />
                                <span>{siteConfig.business.contact.phoneDisplay}</span>
                            </a>
                            <a href={`mailto:${siteConfig.business.contact.email.toLowerCase()}`} className="flex items-center gap-3 hover:text-sky-800 transition-colors">
                                <Mail size={16} className="text-sky-800 shrink-0" />
                                <span>{siteConfig.business.contact.email.toLowerCase()}</span>
                            </a>
                            <div className="flex items-center gap-3">
                                <Clock size={16} className="text-sky-800 shrink-0" />
                                <span>Luni - Vineri 09:00 - 18:00</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-sky-800 shrink-0 mt-0.5" />
                                <span>{siteConfig.business.address.fullAddress}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                            {siteConfig.socialLinks.filter((l) => l.title !== "Twitter" && l.title !== "Email").map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.title}
                                    className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-sky-800 hover:border-sky-800 transition-colors"
                                >
                                    <link.icon size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Produse: toate familiile, pe două coloane */}
                    <div className="lg:col-span-3">
                        <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">Produse</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                            {PRODUCT_LINKS.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="hover:text-sky-800 transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <FooterColumn title="Ghiduri" links={GUIDE_LINKS} />
                    <FooterColumn title="Firme & instituții" links={COMPANY_LINKS} />
                    <FooterColumn title="Legal" links={LEGAL_LINKS} />
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        &copy; {new Date().getFullYear()} {siteConfig.domain} · {siteConfig.business.legalName} · CUI {siteConfig.business.cui}
                    </p>
                    <div className="flex items-center gap-2">
                        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/250x50-icon-anpc-sal.webp" alt="Soluționarea Alternativă a Litigiilor" width={200} height={40} className="h-10 w-auto" loading="lazy" />
                        </a>
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <img src="/250x50-icon-anpc-sol.webp" alt="Soluționarea Online a Litigiilor" width={200} height={40} className="h-10 w-auto" loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
    return (
        <div className="lg:col-span-2">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-4">{title}</h4>
            <ul className="space-y-1.5 text-[13px]">
                {[...links.filter((l) => l.href === "/judet" || l.href === "/dimensiuni" || l.href === "/preturi"), ...links.filter((l) => l.href !== "/judet" && l.href !== "/dimensiuni" && l.href !== "/preturi")].slice(0, 6).map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className="hover:text-sky-800 transition-colors">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
