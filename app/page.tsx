import Script from 'next/script';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight, Phone, MapPin, CheckCircle2, Ruler, Layers, Wrench, Building2, Store, HardHat, Signpost,
  ShieldCheck, Factory, Timer, Truck, MessageCircle,
} from "lucide-react";
import { siteConfig } from '@/lib/siteConfig';
import { CONFIGURATORS_REGISTRY } from '@/lib/configurators-registry';
import { INDUSTRIE_DATA } from '@/lib/seo/industriiData';
import PromoSection from '@/components/PromoSection';

export const metadata: Metadata = {
  authors: [{ name: 'Echipa Anexa1.ro', url: 'https://www.anexa1.ro' }],
  title: 'Panouri Rigide Publicitare, Plăcuțe de Sediu și Semnalistică | Preț Instant',
  description: 'Anexa1 produce panouri publicitare rigide pentru firme: PVC Forex 3-10 mm, alucobond 3 mm, plexiglas, polipropilenă și carton plume, printate UV, cu distanțiere inox, șuruburi sau bandă adezivă. În catalog și bannere, mesh, afișe, autocolante, textile, canvas și kituri fonduri UE. Preț instant, livrare 2-4 zile lucrătoare.',
  keywords: ['panouri rigide publicitare', 'panou pvc forex', 'placa alucobond', 'placuta sediu plexiglas', 'semnalistica firme', 'panou fatada', 'panou santier', 'print uv panouri', 'anexa1'],
  other: {
    "article:published_time": "2024-01-01T08:00:00+02:00",
    "article:modified_time": "2026-09-11T09:00:00+02:00"
  },
  alternates: {
    canonical: 'https://www.anexa1.ro',
  },
  openGraph: {
    title: 'Anexa1.ro — Panouri rigide și semnalistică pentru sedii și fațade',
    description: 'PVC Forex, alucobond, plexiglas, polipropilenă, carton plume. Alegi grosimea și sistemul de prindere, vezi prețul pe loc.',
    url: 'https://www.anexa1.ro',
    siteName: 'Anexa1.ro',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/products/materiale/alucobond/alucobond-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Anexa1.ro - Panou alucobond printat UV, montat pe fațadă',
      }
    ],
  },
};

/** Fișa de alegere a materialului: grosime, unde se montează, cât ține afară, cum se prinde. */
const MATERIALS = [
  { href: "/materiale/pvc-forex", name: "PVC Forex", thickness: "3 mm", where: "Plăcuțe de uși, semnalistică de interior, afișaj în vitrină", outdoor: "1-2 ani, la adăpost", fixing: "Bandă dublu-adezivă, distanțiere" },
  { href: "/materiale/pvc-forex", name: "PVC Forex", thickness: "5 mm", where: "Panouri de interior și exterior până la 1 m pe latură", outdoor: "2-3 ani", fixing: "Șuruburi cu dibluri, distanțiere inox" },
  { href: "/materiale/pvc-forex", name: "PVC Forex", thickness: "10 mm", where: "Panouri autoportante, litere și forme decupate", outdoor: "3-5 ani", fixing: "Șuruburi, șină de aluminiu" },
  { href: "/materiale/alucobond", name: "Alucobond (dibond)", thickness: "3 mm", where: "Fațade, panouri de firmă, plăci de sediu, panouri de șantier", outdoor: "5-10 ani", fixing: "Distanțiere inox, cadru sau șină de aluminiu" },
  { href: "/materiale/plexiglass", name: "Plexiglas", thickness: "3 mm", where: "Plăcuțe de sediu de interior, aviziere, nume de birou", outdoor: "3-5 ani", fixing: "Distanțiere inox Ø 13 mm" },
  { href: "/materiale/plexiglass", name: "Plexiglas", thickness: "5 mm", where: "Plăcuțe de sediu de exterior, panouri premium, recepții", outdoor: "5+ ani", fixing: "Distanțiere inox Ø 19 mm" },
  { href: "/materiale/polipropilena", name: "Polipropilenă alveolară", thickness: "3,5 mm", where: "Panouri imobiliare, săgeți direcționale, campanii scurte", outdoor: "6-12 luni", fixing: "Coliere, sfoară prin capse, țăruși" },
  { href: "/materiale/polipropilena", name: "Polipropilenă alveolară", thickness: "5 mm", where: "Panouri de șantier temporare, garduri de evenimente", outdoor: "12 luni", fixing: "Coliere pe gard, cadru de lemn" },
  { href: "/materiale/carton", name: "Carton plume", thickness: "5 mm", where: "Prezentări, standuri, afișaj de interior", outdoor: "Doar interior", fixing: "Bandă dublu-adezivă, șevalet" },
  { href: "/materiale/carton", name: "Carton plume", thickness: "10 mm", where: "Standee, panouri expo, decor de eveniment", outdoor: "Doar interior", fixing: "Picior de susținere, bandă" },
];

const MOUNTING = [
  { icon: Wrench, title: "Distanțiere inox", spec: "Ø 13 sau 19 mm · 4 buc./placă", desc: "Placa stă la 15-20 mm de perete, cu capace înșurubate. Standardul pentru plăcuțe de sediu din plexiglas și alucobond, la interior și exterior." },
  { icon: Ruler, title: "Șuruburi cu dibluri", spec: "Găuri Ø 5-6 mm, la 2 cm de margine", desc: "Cel mai simplu montaj pe zidărie sau beton pentru PVC 5-10 mm și alucobond. Găurim noi în atelier, la pozițiile cerute." },
  { icon: Layers, title: "Bandă dublu-adezivă", spec: "3M VHB · suprafețe netede, până la 0,5 mp", desc: "Pentru PVC 3 mm și carton plume, pe uși, sticlă, gresie sau metal vopsit. Aplicată de noi pe verso, se lipește la fața locului." },
  { icon: Signpost, title: "Șină și profil de aluminiu", spec: "Panouri de peste 1 m sau cu grafică schimbată periodic", desc: "Profil fixat pe fațadă, panoul se glisează în șină. Schimbi grafica fără să găurești din nou peretele." },
];

const USE_CASES = [
  { icon: Building2, title: "Sediu de firmă", href: "/materiale/plexiglass", material: "Plexiglas 5 mm sau alucobond 3 mm", size: "30×20 până la 60×40 cm", fixing: "Distanțiere inox", note: "Denumire, CUI, program și logo, printate UV pe verso sau pe față, cu placa debitată la formatul cerut." },
  { icon: Store, title: "Fațadă de magazin", href: "/materiale/alucobond", material: "Alucobond 3 mm", size: "Până la 400×150 cm dintr-o bucată", fixing: "Șuruburi în cadru sau șină", note: "Panou de firmă plan, care nu se deformează la soare. Print UV direct sau folie laminată pentru culori exacte." },
  { icon: HardHat, title: "Panou de șantier", href: "/materiale/polipropilena", material: "Polipropilenă 5 mm sau alucobond 3 mm", size: "100×150 sau 200×150 cm", fixing: "Coliere pe gard, cadru de lemn", note: "Panouri de identificare a investiției, inclusiv cele cerute de programele cu finanțare europeană." },
  { icon: Signpost, title: "Semnalistică interioară", href: "/materiale/pvc-forex", material: "PVC Forex 3 mm", size: "Formate A5-A3 sau la comandă", fixing: "Bandă dublu-adezivă", note: "Plăcuțe de uși, direcționale, indicatoare SSM și PSI pentru birouri, clinici, școli și hale." },
];

const FAQ = [
  {
    q: "Ce grosime de PVC Forex aleg pentru un panou de exterior?",
    a: "Pentru panouri până la 1 m pe latură, montate cu șuruburi pe perete, 5 mm este suficient. Peste 1 m sau pentru panouri care stau liber (fără perete în spate) recomandăm 10 mm. PVC-ul de 3 mm îl folosim doar la interior sau în vitrine, pentru că se curbează la soare."
  },
  {
    q: "Care e diferența între alucobond și PVC pentru un panou de firmă pe fațadă?",
    a: "Alucobondul este un sandwich de două foi de aluminiu cu miez de polietilenă: rămâne perfect plan la orice dimensiune și rezistă 5-10 ani afară. PVC-ul expandat este mai ieftin și mai ușor, dar la peste 1 m pe latură începe să se onduleze în soare. Pentru fațade și plăci de sediu care trebuie să arate bine ani la rând, alegem alucobond."
  },
  {
    q: "Cum se montează o plăcuță de sediu din plexiglas?",
    a: "Cu patru distanțiere inox, Ø 13 mm pentru plăcuțe mici sau Ø 19 mm pentru formate de peste 40 cm. Găurim placa în atelier la 2 cm de margine, iar distanțierele vin în pachet cu dibluri și șuruburi. Printul UV se face pe spatele plăcii, astfel încât grafica să rămână protejată de zgârieturi și de vreme."
  },
  {
    q: "Ce fișier trebuie să trimit pentru print UV pe panouri rigide?",
    a: "PDF sau TIFF la scară 1:1, în CMYK, cu 3 mm de bleed pe fiecare latură și minimum 150 dpi la dimensiunea finală. Pentru găurile de montaj și pentru decupajele la formă lasă 2 cm de siguranță față de elementele importante. Dacă nu ai grafică, un grafician îți pregătește machetă pe baza textului și logo-ului."
  },
  {
    q: "Livrați panourile rigide în toată țara? Cum sunt ambalate?",
    a: "Da, prin curier, în 2-4 zile lucrătoare de la producție, în toată România și în toate sectoarele Bucureștiului. Panourile pleacă cu colțare de protecție și folie, iar plexiglasul păstrează folia de protecție de fabrică până la montaj. Pentru formate de peste 200 cm sau comenzi pentru mai multe sedii ne poți suna pentru un termen și un cost de transport exact."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

/** Industrii cu cerere constantă de panouri rigide și semnalistică, în ordinea afișării. */
const FEATURED_INDUSTRIES = [
  'constructii', 'imobiliare', 'arhitectura-proiectare', 'administratie-publica', 'retail', 'medical',
  'industrial', 'logistica', 'banking', 'horeca', 'educatie', 'servicii-profesionale',
];

/** Familiile de produs în ordinea afișării pe grid: panourile rigide primele. */
const CATEGORY_ORDER = ['rigid', 'outdoor', 'vinyl', 'events', 'institutional', 'indoor', 'print', 'publicitar', 'textile', 'decor'];

const CATEGORY_LABEL: Record<string, string> = {
  rigid: 'Panou rigid',
  outdoor: 'Outdoor',
  vinyl: 'Folie',
  events: 'Evenimente',
  institutional: 'Instituții',
  indoor: 'Interior',
  print: 'Tipar',
  publicitar: 'Tipar',
  textile: 'Textile',
  decor: 'Decor',
};

function startPrice(p: (typeof CONFIGURATORS_REGISTRY)[number]): string | null {
  const band = p.pricing?.bands?.[0]?.price;
  const base = p.pricing?.basePricePerSqm;
  const price = band ?? base;
  if (!price) return null;
  const unit = p.pricing?.type === 'per_sqm' ? 'lei/mp' : 'lei/buc';
  return `de la ${String(price).replace('.', ',')} ${unit}`;
}

/** Linkul din registru; prefixul /configurator este doar un alias 308 către ruta reală. */
function productHref(p: (typeof CONFIGURATORS_REGISTRY)[number]): string {
  const href = p.url || `/configurator/${p.slug}`;
  return href.startsWith('/configurator/') ? href.slice('/configurator'.length) : href;
}

export default function Home() {
  const products = [...CONFIGURATORS_REGISTRY].sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a.category);
    const ib = CATEGORY_ORDER.indexOf(b.category);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  const industries = FEATURED_INDUSTRIES
    .map((slug) => INDUSTRIE_DATA.find((i) => i.slug === slug))
    .filter((i): i is (typeof INDUSTRIE_DATA)[number] => Boolean(i));
  const phoneHref = `tel:${siteConfig.phone.replace(/\s+/g, '').replace(/^0/, '+40')}`;
  const whatsappHref = `https://wa.me/${siteConfig.business.contact.whatsapp.replace('+', '')}`;

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-sky-800 selection:text-white">
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO + MATERIAL CHOOSER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sky-800 font-bold uppercase tracking-[0.2em] text-xs mb-5">Panouri rigide · print UV · producție proprie</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
                Panouri publicitare rigide pentru sedii, fațade și semnalistică.
              </h1>
              <p className="text-slate-600 text-lg max-w-xl leading-relaxed mb-8">
                PVC Forex, alucobond, plexiglas, polipropilenă și carton plume, debitate la dimensiune, printate UV și livrate cu sistemul de prindere ales de tine. Alegi materialul din tabel, pui dimensiunile, vezi prețul. Restul catalogului (bannere, afișe, textile, canvas, kituri fonduri UE) este mai jos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#materiale" className="inline-flex items-center justify-center gap-2 bg-sky-800 text-white font-bold px-7 py-4 rounded-md hover:bg-sky-900 transition-colors">
                  Alege materialul
                  <ArrowRight size={18} />
                </Link>
                <a href={phoneHref} className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-7 py-4 rounded-md border border-slate-300 hover:border-sky-800 transition-colors">
                  <Phone size={16} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white">
                <Image
                  src="/products/materiale/plexiglass/plexiglass-1.webp"
                  alt="Plăcuță de sediu din plexiglas printată UV, montată pe distanțiere inox"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <dl className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { k: "Grosimi", v: "3 - 10 mm" },
                  { k: "Format maxim", v: "400 × 150 cm" },
                  { k: "Producție", v: "24 - 48 h" },
                ].map((s) => (
                  <div key={s.k} className="rounded-md border border-slate-200 bg-white px-3 py-2.5">
                    <dt className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{s.k}</dt>
                    <dd className="text-slate-900 font-black text-sm md:text-base mt-0.5">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div id="materiale" className="mt-12 md:mt-16 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
              <div>
                <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-2">Fișa de alegere</p>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Material și grosime, după locul de montaj</h2>
              </div>
              <Link href="/material" className="inline-flex items-center gap-2 text-sky-800 font-bold text-sm hover:gap-3 transition-all">
                Fișele tehnice complete <ArrowRight size={16} />
              </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 text-[11px] uppercase tracking-widest text-slate-600">
                    <th className="px-4 py-3 font-bold">Material</th>
                    <th className="px-4 py-3 font-bold">Grosime</th>
                    <th className="px-4 py-3 font-bold">Unde se montează</th>
                    <th className="px-4 py-3 font-bold">Rezistență exterior</th>
                    <th className="px-4 py-3 font-bold">Sistem de prindere</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {MATERIALS.map((m) => (
                    <tr key={`${m.name}-${m.thickness}`} className="hover:bg-sky-50/60 transition-colors">
                      <td className="px-4 py-3 font-bold text-slate-900 whitespace-nowrap">
                        <Link href={m.href} className="hover:text-sky-800 underline decoration-slate-300 underline-offset-4">{m.name}</Link>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-800 whitespace-nowrap">{m.thickness}</td>
                      <td className="px-4 py-3 text-slate-600">{m.where}</td>
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{m.outdoor}</td>
                      <td className="px-4 py-3 text-slate-600">{m.fixing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MOUNTING SYSTEMS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-3">Sisteme de montaj</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-5">Panoul vine gata de montat, cu găurile și accesoriile la locul lor.</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Alegi sistemul de prindere în configurator. Noi găurim, frezăm sau aplicăm banda în atelier, așa că la fața locului rămâne doar fixarea pe perete.
              </p>
              <Link href="/servicii" className="inline-flex items-center gap-2 text-sky-800 font-bold text-sm hover:gap-3 transition-all">
                Toate finisajele și serviciile <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOUNTING.map((m) => (
                <div key={m.title} className="rounded-xl border border-slate-200 p-5 hover:border-sky-800 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                      <m.icon size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-slate-900 font-extrabold leading-tight">{m.title}</h3>
                  </div>
                  <p className="font-mono text-[11px] text-slate-700 bg-slate-50 border border-slate-200 rounded px-2.5 py-1.5 mb-3">{m.spec}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS: full catalog */}
      <section id="produse" className="bg-slate-50 border-y border-slate-200 py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-3">Catalog complet · {products.length} configuratoare</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Panourile rigide primele, dar printăm și restul.</h2>
            </div>
            <Link href="/configuratoare" className="inline-flex items-center gap-2 text-sky-800 font-bold text-sm hover:gap-3 transition-all">
              Toate configuratoarele <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p, index) => {
              const price = startPrice(p);
              return (
                <Link
                  key={p.id}
                  href={productHref(p)}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-sky-800 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[4/3] bg-white border-b border-slate-100">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={index < 4}
                        loading={index < 4 ? undefined : "lazy"}
                      />
                    ) : null}
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded px-2 py-1">
                      {CATEGORY_LABEL[p.category] || p.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-slate-900 font-extrabold leading-tight group-hover:text-sky-800 transition-colors">{p.name}</h3>
                    <p className="text-slate-500 text-xs leading-snug mt-2 line-clamp-2">{p.description}</p>
                    <div className="mt-auto pt-3 flex items-center justify-between gap-2 text-xs">
                      {price ? <span className="text-sky-800 font-bold">{price}</span> : <span className="text-slate-500">Preț în configurator</span>}
                      <span className="text-slate-400 uppercase tracking-wider text-[10px]">{p.turnaroundTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <PromoSection />

      {/* USE CASES */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-10">
            <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-3">Cazuri de utilizare</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Ce material, ce format, ce prindere: patru situații standard.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {USE_CASES.map((u) => (
              <Link key={u.title} href={u.href} className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-sky-800 hover:shadow-md transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                    <u.icon size={20} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-slate-900 font-extrabold leading-tight group-hover:text-sky-800 transition-colors">{u.title}</h3>
                </div>
                <dl className="text-xs space-y-1.5 mb-4">
                  <div className="flex gap-2"><dt className="w-20 shrink-0 text-slate-500 uppercase tracking-wider text-[10px] font-bold pt-0.5">Material</dt><dd className="text-slate-800 font-semibold">{u.material}</dd></div>
                  <div className="flex gap-2"><dt className="w-20 shrink-0 text-slate-500 uppercase tracking-wider text-[10px] font-bold pt-0.5">Format</dt><dd className="text-slate-800 font-semibold">{u.size}</dd></div>
                  <div className="flex gap-2"><dt className="w-20 shrink-0 text-slate-500 uppercase tracking-wider text-[10px] font-bold pt-0.5">Prindere</dt><dd className="text-slate-800 font-semibold">{u.fixing}</dd></div>
                </dl>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{u.note}</p>
                <span className="inline-flex items-center gap-2 text-sky-800 font-bold text-sm mt-4 group-hover:gap-3 transition-all">Configurează <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES + LOCAL DELIVERY */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-3">Pe industrii</p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-6">Cine comandă panouri rigide și semnalistică</h2>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <Link key={ind.slug} href={`/industrii/${ind.slug}`} className="px-4 py-2 rounded-md border border-slate-200 bg-white text-slate-700 text-sm hover:border-sky-800 hover:text-sky-800 transition-colors">
                  {ind.name.split(' (')[0]}
                </Link>
              ))}
              <Link href="/industrii" className="px-4 py-2 rounded-md bg-sky-800 text-white text-sm font-bold hover:bg-sky-900 transition-colors">
                Toate industriile
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              {[
                { icon: Factory, title: "Atelier propriu", desc: "Print UV și debitare CNC la noi, nu la intermediari." },
                { icon: ShieldCheck, title: "Fișier verificat", desc: "Un grafician verifică bleed-ul, rezoluția și pozițiile găurilor." },
                { icon: Timer, title: "Gata în 2-4 zile", desc: "De la bunul de tipar la predarea către curier." },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-3 rounded-md border border-slate-200 px-4 py-3">
                  <div className="w-9 h-9 rounded-md bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                    <f.icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm leading-tight">{f.title}</p>
                    <p className="text-slate-500 text-xs leading-snug mt-1">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={20} className="text-sky-800" />
              <h2 className="text-slate-900 font-extrabold text-lg">Livrare în toată țara, 2-4 zile lucrătoare</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Expediem prin curier din atelierul nostru din județul Buzău către orice reședință de județ și către toate sectoarele Bucureștiului. Panourile pleacă cu colțare de protecție și folie, plexiglasul cu folia de fabrică pe ambele fețe.
            </p>
            <ul className="space-y-2 text-sm text-slate-700 mb-5">
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-sky-800 shrink-0 mt-0.5" /> AWB și factură pe e-mail la expediere</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-sky-800 shrink-0 mt-0.5" /> Plată cu cardul, transfer sau ramburs</li>
              <li className="flex gap-2"><CheckCircle2 size={16} className="text-sky-800 shrink-0 mt-0.5" /> Instituții publice: plată la termen, prin Trezorerie</li>
            </ul>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/judet" className="text-sky-800 font-bold hover:underline">Pe județe</Link>
              <span className="text-slate-400">·</span>
              <Link href="/sectoare-bucuresti" className="text-sky-800 font-bold hover:underline">Sectoare București</Link>
              <span className="text-slate-400">·</span>
              <Link href="/livrare" className="text-sky-800 font-bold hover:underline">Termene și costuri</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs mb-3">Întrebări frecvente</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Ce ne întreabă firmele înainte să comande un panou</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-slate-900 font-bold">
                  <span>{f.q}</span>
                  <span className="text-sky-800 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-slate-600 text-sm leading-relaxed mt-3 pr-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20 !max-w-7xl">
        <div className="relative rounded-2xl overflow-hidden bg-sky-800 p-8 md:p-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">Ai dimensiunile? Ai și prețul, cu prinderea inclusă.</h2>
            <p className="text-sky-100 font-medium mb-8">Fără cont, fără cerere de ofertă. Material, grosime, sistem de montaj, dimensiuni: prețul se recalculează la fiecare modificare.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/materiale/pvc-forex" className="inline-flex justify-center items-center gap-2 bg-white text-sky-900 font-bold px-8 py-4 rounded-md hover:bg-sky-50 transition-colors">
                Configurează un panou PVC <ArrowRight size={18} />
              </Link>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-sky-900/60 text-white font-bold px-8 py-4 rounded-md border border-white/20 hover:bg-sky-900 transition-colors">
                <MessageCircle size={16} /> Trimite specificațiile pe WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-6 text-center text-xs text-slate-500">
        <Truck size={14} className="inline mr-1 -mt-0.5" /> Livrare prin {siteConfig.shipping.provider} în toată România
      </div>
    </div>
  );
}
