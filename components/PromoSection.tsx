import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * Trei aplicații tipice ale panourilor rigide, fiecare cu materialul, grosimea
 * și sistemul de prindere pe care le recomandăm de obicei. Înlocuiește vechiul
 * carusel de "parteneri", care trimitea către alte domenii și nu spunea nimic
 * despre ce produce Anexa1.
 */
const APPLICATIONS = [
    {
        href: "/materiale/plexiglass",
        eyebrow: "Plăcuță de sediu",
        title: "Firma, CUI-ul și programul, la intrarea în sediu",
        spec: "Plexiglas 5 mm sau alucobond 3 mm · print UV pe verso · 4 distanțiere inox Ø 19 mm",
        text: "Formatele uzuale sunt 30×20, 40×30 și 60×40 cm. Printul pe spatele plexiglasului rămâne protejat de zgârieturi, iar distanțierele țin placa la 20 mm de perete.",
        image: "/products/materiale/plexiglass/plexiglass-1.webp",
        alt: "Plăcuță de sediu din plexiglas montată pe distanțiere inox",
    },
    {
        href: "/materiale/alucobond",
        eyebrow: "Panou de fațadă",
        title: "Panou de firmă deasupra vitrinei, care nu se deformează la soare",
        spec: "Alucobond 3 mm · print UV direct sau folie laminată · șuruburi în cadru sau șină de aluminiu",
        text: "Miezul de polietilenă între două foi de aluminiu ține panoul plan la orice lungime și rezistă 5-10 ani afară. Îl debităm la dimensiunea exactă a fațadei.",
        image: "/products/materiale/alucobond/alucobond-1.webp",
        alt: "Panou de fațadă din alucobond printat UV",
    },
    {
        href: "/materiale/pvc-forex",
        eyebrow: "Semnalistică de interior",
        title: "Plăcuțe de uși, direcționale și indicatoare pentru birouri",
        spec: "PVC Forex 3 sau 5 mm · print UV · bandă dublu-adezivă 3M sau distanțiere",
        text: "Ușor, mat, ușor de curățat. Pentru seturi complete de semnalistică (SSM, PSI, birouri numerotate) avem și modele gata de comandat în magazin.",
        image: "/products/materiale/pvc-forex/pvc-forex-1.webp",
        alt: "Semnalistică de interior printată pe PVC Forex",
    },
];

export default function PromoSection() {
    return (
        <section className="bg-white py-16 md:py-24 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="max-w-2xl mb-10 md:mb-14">
                    <p className="text-sky-800 font-bold uppercase tracking-[0.15em] text-xs md:text-sm mb-3">Aplicații tipice</p>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Trei comenzi pe care le facem în fiecare săptămână, cu specificațiile lor.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {APPLICATIONS.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            className="group flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-sky-800 hover:shadow-md transition-all"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={s.image}
                                    alt={s.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-sky-800 text-[11px] font-bold uppercase tracking-widest mb-2">{s.eyebrow}</p>
                                <h3 className="text-slate-900 text-lg font-extrabold leading-snug mb-3">{s.title}</h3>
                                <p className="font-mono text-[11px] leading-relaxed text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 mb-3">{s.spec}</p>
                                <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.text}</p>
                                <span className="inline-flex items-center gap-2 text-sky-800 font-bold text-sm mt-5 group-hover:gap-3 transition-all">
                                    Configurează <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
