"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Menu, X, ChevronDown, Package, Heart, MapPin, LogOut, PencilRuler, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import CartWidget from "./CartWidget";
import SearchBox from "./SearchBox";
import HeaderFreeShipping from "./HeaderFreeShipping";
import { siteConfig } from "@/lib/siteConfig";

const DesktopNav = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav
            className="flex items-center gap-1"
            onMouseLeave={() => setOpenDropdown(null)}
        >
            {siteConfig.headerNav.map((item) =>
                item.highlight ? (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="ml-3 px-5 py-2 text-xs font-bold text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-all tracking-wide uppercase"
                    >
                        {item.label}
                    </Link>
                ) : item.children ? (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                    >
                        <button
                            type="button"
                            aria-expanded={openDropdown === item.label}
                            aria-haspopup="true"
                            onClick={() =>
                                setOpenDropdown((prev) =>
                                    prev === item.label ? null : item.label
                                )
                            }
                            className={`flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide px-4 py-4 cursor-pointer transition-colors border-x border-transparent ${openDropdown === item.label ? 'bg-slate-900 text-white' : 'text-slate-200 hover:bg-slate-800'}`}
                        >
                            {item.label}
                            <ChevronDown
                                size={13}
                                className={`opacity-60 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div
                            className={`absolute top-full left-0 z-[1001] w-max min-w-[240px] transition-all duration-200 ${
                                openDropdown === item.label
                                    ? "opacity-100 translate-y-0 pointer-events-auto visible"
                                    : "opacity-0 -translate-y-1 pointer-events-none invisible"
                            }`}
                        >
                            <div className="bg-white border border-t-0 border-slate-200 shadow-[0_22px_60px_-30px_rgba(2,6,23,0.35)]">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className="block text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 px-4 py-2.5 border-b border-slate-100 last:border-0 transition-all font-semibold"
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-[13px] font-bold uppercase tracking-wide text-slate-200 hover:bg-slate-800 px-4 py-4 transition-colors"
                    >
                        {item.label}
                    </Link>
                )
            )}
        </nav>
    );
};

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

    const { status, data: session } = useSession();

    // Account state for dropdown
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    const toggleMobileSection = (section: string) => {
        setOpenMobileSection(openMobileSection === section ? null : section);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    // Account dropdown close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isAccountOpen && !target.closest('.account-dropdown')) {
                setIsAccountOpen(false);
            }
        };

        if (isAccountOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isAccountOpen]);


    // Hide Navbar on admin pages or Editor Online
    if (pathname?.startsWith("/admin") || pathname === "/editor") {
        return null;
    }

    return (
        <>
            <header
                className={`w-full transition-all duration-300 z-[999] top-0 ${scrolled
                    ? "fixed bg-white shadow-[0_1px_0_rgba(15,23,42,0.10),0_18px_70px_-46px_rgba(15,23,42,0.40)]"
                    : "sticky bg-white"
                    }`}
            >
                {/* Utility bar */}
                <div className="hidden md:flex items-center justify-end gap-6 bg-slate-950 text-slate-400 text-[11px] font-semibold uppercase tracking-wider px-6 py-1.5">
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '').replace(/^0/, '+40')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Phone size={11} /> {siteConfig.phone}
                    </a>
                    <span className="text-blue-500">Livrare 24-48h în toată țara</span>
                </div>

                {/* ROW 1: Logo, Search, and Actions */}
                <div className="container mx-auto px-4 w-full max-w-7xl h-16 sm:h-[76px] flex items-center justify-between gap-4">
                    {/* Mobile Menu Toggle & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="xl:hidden p-2 -ml-2 text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu size={24} />
                        </button>

                        <Link href="/" className="flex items-center group">
                            <div className="relative w-32 sm:w-40 h-9">
                                <Image
                                    src="/logo.svg"
                                    alt="Anexa1.ro"
                                    fill
                                    className="object-contain object-left group-hover:opacity-85 transition-opacity"
                                    priority
                                    {...({ fetchPriority: "high" } as any)}
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Centered Desktop Search */}
                    <div className="hidden lg:block flex-1 max-w-xl px-8">
                        <SearchBox
                            placeholder="Ce produse cauți astăzi?"
                            className="w-full border border-slate-300 rounded-md bg-slate-50 focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-700 focus-within:border-blue-700 transition-all"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <Link
                            href="/editor"
                            className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-bold text-xs tracking-tight transition-all active:scale-[0.99] group"
                        >
                            <PencilRuler size={16} className="group-hover:rotate-12 transition-transform" />
                            Editor Online
                        </Link>

                        <div className="w-px h-6 bg-slate-200 hidden sm:block mx-1"></div>

                        {/* Account Area */}
                        {session?.user ? (
                            <div className="relative account-dropdown hidden sm:block z-50">
                                <button
                                    onClick={() => setIsAccountOpen(!isAccountOpen)}
                                    className="flex items-center gap-2 p-1.5 pr-3 bg-white border border-slate-300 rounded-md hover:border-blue-600 transition-colors"
                                >
                                    <div className="w-7 h-7 rounded-sm bg-slate-950 flex items-center justify-center text-white font-bold text-xs">
                                        {(session.user.name?.[0] || session.user.email?.[0] || "U").toUpperCase()}
                                    </div>
                                    <span className="text-xs font-semibold text-slate-800 max-w-[80px] truncate">{session.user.name?.split(' ')[0] || 'Cont'}</span>
                                    <ChevronDown size={14} className="text-slate-400" />
                                </button>

                                <div className={`absolute top-[120%] right-0 w-64 transition-all duration-200 ease-out z-[999] origin-top-right ${isAccountOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                                    <div className="bg-white shadow-[0_22px_60px_-30px_rgba(2,6,23,0.35)] border border-slate-200 overflow-hidden">
                                        <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                                            <p className="text-sm font-bold text-slate-900 truncate">{session.user.name}</p>
                                            <p className="text-[11px] text-slate-500 font-bold truncate uppercase tracking-wider mt-0.5">{session.user.email}</p>
                                        </div>
                                        <div className="py-1">
                                            <Link href="/account?tab=orders" onClick={() => setIsAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-all">
                                                <Package size={16} /> Comenzile mele
                                            </Link>
                                            <Link href="/account?tab=favorites" onClick={() => setIsAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-all">
                                                <Heart size={16} /> Favorite
                                            </Link>
                                            <Link href="/account" onClick={() => setIsAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-all">
                                                <User size={16} /> Profilul meu
                                            </Link>
                                            <Link href="/account?tab=addresses" onClick={() => setIsAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-all">
                                                <MapPin size={16} /> Adrese
                                            </Link>
                                            <div className="h-px bg-slate-100 my-1"></div>
                                            <button onClick={() => signOut()} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 hover:text-red-700 transition-all">
                                                <LogOut size={16} /> Delogare
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-950 hover:text-white transition-colors border border-slate-300">
                                <User size={18} strokeWidth={2} />
                            </Link>
                        )}

                        {/* Cart */}
                        <CartWidget />
                    </div>
                </div>

                {/* ROW 2: Navigation Menu */}
                <div className="hidden xl:block bg-slate-950">
                    <div className="container mx-auto px-4 !max-w-7xl flex items-center justify-center">
                        <DesktopNav />
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[1000] bg-white xl:hidden flex flex-col animate-in fade-in slide-in-from-right duration-300">
                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                        <div className="relative w-32 h-9">
                            <Image
                                src="/logo.svg"
                                alt="Anexa1.ro"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-3 bg-slate-100 rounded-md text-slate-900 hover:bg-slate-200 transition-colors"
                            aria-label="Închide meniul"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 pb-0">
                        <SearchBox
                            placeholder="Caută produse..."
                            className="w-full border border-slate-300 rounded-md"
                        />
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-8">
                        <div className="flex flex-col gap-6">
                            {siteConfig.headerNav.map((item) => (
                                <div key={item.label} className="border-b border-slate-100 pb-4 last:border-0">
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() => toggleMobileSection(item.label)}
                                                className="w-full flex items-center justify-between text-lg font-bold tracking-tight text-slate-900 py-2"
                                            >
                                                {item.label}
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${openMobileSection === item.label ? 'rotate-180 text-blue-700' : ''}`} />
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${openMobileSection === item.label ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="flex flex-col gap-2 pl-4 pt-4 border-l-2 border-slate-200 ml-2">
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="text-slate-500 hover:text-blue-700 py-2 text-sm font-semibold"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`block text-lg font-bold tracking-tight py-2 ${item.highlight ? 'text-blue-700' : 'text-slate-900 hover:text-blue-700'}`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 border-t border-slate-200 bg-slate-50">
                        <Link
                            href="/editor"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-3 py-4 bg-blue-700 text-white rounded-md font-bold tracking-widest uppercase text-xs hover:bg-blue-800 active:scale-[0.98] transition-all"
                        >
                            <PencilRuler size={18} />
                            Editor Online
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
