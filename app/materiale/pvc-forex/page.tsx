import ConfiguratorDispatcher from "@/components/configurator/ConfiguratorDispatcher";
import ProductSchema from "@/components/ProductSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import { Metadata } from 'next';
import { Suspense } from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Panouri PVC Forex — Semnalistică Instituțională, PNRR și Firme de Magazin | Anexa1',
    description: 'Panouri din PVC expandat (Forex), rigide și ușoare, la mijloc între polipropilenă și Alucobond ca durabilitate. Grosimi 3-10mm, conforme MIV pentru panouri de vizibilitate PNRR/fonduri europene, semnalistică SSM și firme de magazin. Preț instant.',
    keywords: ['pvc forex', 'panouri firma magazin', 'pvc expandat semnalistica', 'placi pvc rigide', 'forex outdoor', 'panou vizibilitate pnrr forex', 'placa pvc conforma miv', 'anexa1'],
    alternates: {
        canonical: '/materiale/pvc-forex',
    },
    openGraph: {
        title: 'Panouri PVC Forex — Semnalistică Instituțională, PNRR și Firme de Magazin',
        description: 'PVC expandat rigid, grosimi 3-10mm. Documentul de referință pentru panouri de firmă, semnalistică SSM/ISU și plăci de vizibilitate pentru proiecte cu finanțare europeană, conforme MIV.',
        url: '/materiale/pvc-forex',
        type: 'website',
        images: [{ url: '/products/master/placi-pvc-forex-personalizat-print-uv.png' }],
    },
};

const faqs = [
    {
        question: "Unde se situează PVC Forex-ul față de polipropilenă și Alucobond?",
        answer: "Exact la mijloc. E mai rigid și mai rezistent în timp decât polipropilena celulară (Akyplac), dar costă mai puțin decât Alucobond. E alegerea potrivită pentru un panou de firmă sau de semnalistică ce trebuie să dureze câțiva ani, fără bugetul unei firme premium din aluminiu."
    },
    {
        question: "Rezistă la exterior, la soare și ploaie?",
        answer: "Da, e un material folosit frecvent la semnalistică outdoor — panouri de firmă montate pe fațadă, indicatoare, panouri de șantier, plăci de vizibilitate pentru proiecte cu finanțare europeană. Pe suprafețe foarte mari expuse direct la soare puternic, poate apărea o ușoară curbare după 2-3 ani, situație în care recomandăm Alucobond."
    },
    {
        question: "Ce grosime aleg pentru o firmă de magazin?",
        answer: "5mm e standardul pentru majoritatea panourilor de firmă montate pe fațadă — cel mai versatil pentru semnalistică generală, pe cadru. Pentru panouri mici de interior, 3mm e suficient; pentru panouri mari suspendate pe distanțiere, fără cadru de susținere, recomandăm 8-10mm pentru rigiditate."
    },
    {
        question: "Se poate folosi și la interior, nu doar outdoor?",
        answer: "Da, e la fel de potrivit pentru semnalistică indoor — panouri de birou, indicatoare interioare, standuri, plăcuțe SSM pe uși — unde combinația de rigiditate și cost redus îl face o alegere practică."
    },
    {
        question: "E potrivit ca panou temporar sau placă permanentă pentru un proiect cu finanțare europeană (PNRR, POR, AFIR)?",
        answer: "Da, PVC Forex de minim 5mm e materialul recomandat pentru panoul temporar afișat pe durata execuției unui proiect cu finanțare europeană. Pentru placa permanentă de la finalul proiectului, care rămâne montată 3-5 ani pe perioada de monitorizare, recomandăm în schimb Alucobond sau Plexiglass — mai rezistente la deformare pe termen lung. Detaliem exact ce material se cere în fiecare fază în ghidul nostru de vizibilitate pentru fonduri europene."
    },
    {
        question: "Placa PVC Forex respectă manualul de identitate vizuală (MIV) pentru proiectul meu?",
        answer: "Producem grafica exact după specificațiile din manualul de identitate vizuală aplicabil (PNRR, POR, POIM, AFIR) — proporțiile și spațiul de protecție ale siglei UE, culorile oficiale, elementele obligatorii de text. La cerere, oferim și confirmarea scrisă a conformității grafice pentru dosarul proiectului."
    },
    {
        question: "Ce documente primesc la livrare pentru dosarul de achiziție sau control ulterior?",
        answer: "Factură fiscală (inclusiv RO e-Factura, unde e cazul), aviz de însoțire a mărfii cu descrierea tehnică exactă a plăcii (material, grosime, dimensiuni), și, la cerere, certificat de conformitate și fișă tehnică a materialului. Sunt exact anexele verificate la un control ulterior de monitorizare a unui proiect cu fonduri europene."
    },
    {
        question: "PVC Forex e suficient pentru un panou de identificare a șantierului (PDS)?",
        answer: "Da. Legea 50/1991 impune dimensiunea minimă de 90x60cm pentru panoul de identificare a investiției, iar PVC de 5mm, rezistent 100% la exterior (UV, vânt), e materialul standard folosit pentru acest tip de panou obligatoriu pe durata lucrărilor."
    },
    {
        question: "Pot folosi PVC Forex pentru indicatoare SSM (protecția muncii)?",
        answer: "Da, e materialul standard conform pentru indicatoarele SSM impuse de HG 971/2006 — suport PVC de 3mm, cu simbolurile grafice standardizate ISO (galben pentru avertizare, roșu pentru interdicție, albastru pentru obligativitate) și cerneală rezistentă la decolorare chimică."
    },
    {
        question: "Cum se montează un panou PVC Forex — șuruburi sau distanțiere?",
        answer: "Depinde de scenariu. Pentru montaj lipit direct pe perete sau structură plană, PVC Forex ușor e alegerea rațională. Pentru montaj suspendat pe distanțiere metalice, la câțiva centimetri de perete, pe suprafețe mari, PVC-ul subțire nu ține forma — acolo recomandăm grosime mare (8-10mm) sau, pentru suprafețe foarte mari, Alucobond. Spre deosebire de Plexiglass, PVC-ul nu are nevoie de joc suplimentar la găurile de prindere cu șurub, pentru că se dilată termic mult mai puțin."
    },
    {
        question: "Print UV direct sau autocolant cașerat pe placa PVC Forex?",
        answer: "Printul UV direct pe placă oferă rezistență superioară la zgârieturi și la desprindere pe margini, fiind recomandat pentru orice panou expus îndelung — inclusiv pentru plăcile de vizibilitate verificate la control. Cașerarea (autocolant printat separat, aplicat pe placă) are avantajul că poți schimba doar grafica, fără să înlocuiești placa, util la panouri actualizate periodic (meniuri, afișaje sezoniere)."
    },
    {
        question: "Ce se întâmplă cu PVC Forex-ul montat afară pe timp de iarnă?",
        answer: "Devine ușor mai casant la temperaturi foarte scăzute, deci manipularea sau un montaj suplimentar în ger puternic cere puțină grijă la colțuri. Nu e un motiv de îngrijorare pentru panourile deja montate — doar un detaliu de care ținem cont la instalare."
    },
    {
        question: "Cum se curăță și se întreține un panou PVC Forex montat la exterior?",
        answer: "Se curăță simplu, cu apă și detergent neutru, la fel ca Alucobondul. Nu necesită produse speciale, spre deosebire de Plexiglass, care cere o cârpă moale și evitarea soluțiilor pe bază de alcool sau amoniac."
    },
    {
        question: "Care e diferența practică față de Alucobond pentru o placă permanentă de proiect?",
        answer: "Alucobondul, fiind un compozit cu miez de polietilenă între două foi de aluminiu, practic nu se ondulează la căldură indiferent de durata expunerii, ceea ce contează pentru o placă ce trebuie să arate impecabil 3-5 ani de monitorizare. PVC Forex rămâne alegerea corectă și mai economică pentru panoul temporar din faza de execuție, unde durata de expunere e mai scurtă."
    }
];

export default function PVCForexPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Se încarcă configuratorul PVC Forex...</div>}>
            <div className="pt-20">
                <h1 className="sr-only">Panouri PVC Forex — Semnalistică Instituțională, Vizibilitate PNRR și Firme de Magazin</h1>
                <BreadcrumbSchema
                    items={[
                        { name: "Acasă", item: "/" },
                        { name: "Materiale", item: "/materiale" },
                        { name: "PVC Forex", item: "/materiale/pvc-forex" }
                    ]}
                />
                <ProductSchema
                    name="Panou PVC Forex Personalizat"
                    description="Panou rigid din PVC expandat (Forex), la mijloc între polipropilenă și Alucobond ca durabilitate, ideal pentru firme de magazin, semnalistică instituțională (SSM, ISU, PDS) și panouri de vizibilitate pentru proiecte cu finanțare europeană."
                    image="/products/master/placi-pvc-forex-personalizat-print-uv.png"
                    url="/materiale/pvc-forex"
                    price="35.00"
                />
                <ConfiguratorDispatcher configuratorId="pvc-forex" />

                <FAQSchema faqs={faqs} />

                <section className="bg-white py-16 mt-16 border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                PVC Forex — Panoul de Mijloc pentru Firmă, Semnalistică și Vizibilitate Instituțională
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Placa din PVC expandat (Forex) stă <strong className="text-blue-600">exact între polipropilenă și Alucobond</strong> ca durabilitate și preț — soluția cea mai comună pentru firme de magazin, semnalistică outdoor sau indoor și panouri instituționale reglementate (SSM, ISU, șantier, vizibilitate fonduri europene).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 inline-block">Pentru ce se folosește</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                        <div>
                                            <strong className="block text-slate-900">Firme de magazin montate pe fațadă</strong>
                                            <span className="text-slate-600 text-sm">Rigid și ușor, rezistă bine ani de zile la exterior, la un cost mult mai mic decât Alucobond.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                        <div>
                                            <strong className="block text-slate-900">Semnalistică reglementată (SSM, ISU, PDS)</strong>
                                            <span className="text-slate-600 text-sm">Suport standard pentru indicatoare de protecția muncii (HG 971/2006), semnalistică de urgență și panoul de identificare a șantierului (Legea 50/1991, minim 90x60cm).</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                        <div>
                                            <strong className="block text-slate-900">Panou temporar de vizibilitate PNRR / fonduri europene</strong>
                                            <span className="text-slate-600 text-sm">Materialul recomandat pentru panoul afișat obligatoriu pe durata execuției unui proiect cu finanțare europeană, conform manualului de identitate vizuală (MIV) aplicabil.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></div>
                                        <div>
                                            <strong className="block text-slate-900">Echilibru cost-durabilitate</strong>
                                            <span className="text-slate-600 text-sm">Nu ai nevoie de bugetul unei firme premium din aluminiu, dar vrei mai multă rigiditate decât o placă de polipropilenă.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Ce grosime să alegi</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    5mm e standardul pentru firme de magazin montate pe fațadă și pentru panoul de identificare a șantierului. 3mm pentru panouri mici de interior sau plăcuțe SSM, 8-10mm pentru panouri mari suspendate pe distanțiere, fără cadru de susținere.
                                </p>
                                <p className="text-slate-600 leading-relaxed font-bold">
                                    Pe suprafețe foarte mari expuse direct la soare puternic, poate apărea o ușoară curbare după 2-3 ani — pentru acele cazuri, sau pentru o placă permanentă de proiect care trebuie să reziste 3-5 ani de monitorizare, recomandăm Alucobond.
                                </p>
                            </div>
                        </div>

                        {/* Thickness / use-case table */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Grosimi PVC Forex și utilizarea recomandată</h3>
                            <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-100">
                                <table className="min-w-full bg-white text-sm">
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Grosime</th>
                                            <th className="px-6 py-4 text-left font-bold">Utilizare recomandată</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">1mm (fotoluminiscent)</td>
                                            <td className="px-6 py-4">Semnalistică de urgență ISU — indicatoare de evacuare, vizibile în întuneric total (Legea 307/2006).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">3mm</td>
                                            <td className="px-6 py-4">Panouri mici de interior, plăcuțe de birou, indicatoare SSM (HG 971/2006), formate sub A2.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">5mm</td>
                                            <td className="px-6 py-4">Standardul pentru firme de magazin montate pe fațadă, semnalistică generală pe cadru și panoul de identificare a șantierului (PDS, minim 90x60cm).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">8-10mm</td>
                                            <td className="px-6 py-4">Panouri mari montate pe distanțiere, fără cadru de susținere, unde rigiditatea proprie trebuie să țină forma pe toată suprafața.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Comparison table vs Alucobond / Plexiglass */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">PVC Forex vs Alucobond vs Plexiglass — după scenariul de montaj</h3>
                            <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-100">
                                <table className="min-w-full bg-white text-sm">
                                    <thead className="bg-slate-900 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Scenariu</th>
                                            <th className="px-6 py-4 text-center font-bold">Material recomandat</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Lipit pe perete, interior, buget redus</td>
                                            <td className="px-6 py-4 text-center text-blue-600 font-bold">PVC Forex</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Panou temporar de execuție, proiect cu fonduri europene</td>
                                            <td className="px-6 py-4 text-center text-blue-600 font-bold">PVC Forex (minim 5mm)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Placă permanentă, monitorizare 3-5 ani</td>
                                            <td className="px-6 py-4 text-center">
                                                <Link href="/materiale/alucobond" className="text-blue-600 font-bold hover:underline">Alucobond</Link> sau <Link href="/materiale/plexiglass" className="text-blue-600 font-bold hover:underline">Plexiglass</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Suspendat pe distanțiere, suprafață mare</td>
                                            <td className="px-6 py-4 text-center">
                                                <Link href="/materiale/alucobond" className="text-blue-600 font-bold hover:underline">Alucobond</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Exterior, fațadă, expunere permanentă la soare</td>
                                            <td className="px-6 py-4 text-center">
                                                <Link href="/materiale/alucobond" className="text-blue-600 font-bold hover:underline">Alucobond</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold bg-slate-50">Casetă luminoasă, litere volumetrice retroiluminate</td>
                                            <td className="px-6 py-4 text-center">
                                                <Link href="/materiale/plexiglass" className="text-blue-600 font-bold hover:underline">Plexiglass</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-slate-500 text-sm text-center mt-4 max-w-2xl mx-auto">
                                Detalii complete despre alegerea materialului rigid în funcție de montaj, în{" "}
                                <Link href="/blog/ghid-materiale-rigide-semnalistica-pvc-alucobond-plexiglass" className="text-blue-600 hover:underline">
                                    ghidul de montaj PVC Forex, Alucobond și Plexiglass
                                </Link>.
                            </p>
                        </div>

                        {/* Compliance / institutional section */}
                        <div className="mb-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Panou PVC Forex pentru proiecte cu finanțare europeană (PNRR, POR, AFIR)</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Dacă implementezi un proiect cu finanțare europeană, panoul temporar afișat pe durata execuției lucrărilor e obligatoriu pentru proiectele care depășesc, de regulă, 500.000 euro — și trebuie să conțină titlul proiectului, obiectivul principal și logourile UE și ale programului de finanțare, produse strict conform manualului de identitate vizuală (MIV). PVC Forex de minim 5mm e materialul standard recomandat pentru această fază.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                La finalul proiectului, panoul temporar trebuie <strong>înlocuit</strong>, nu doar demontat, cu o placă permanentă care rămâne la locație pe toată perioada de monitorizare (de regulă 3-5 ani) — acolo unde recomandăm Alucobond sau Plexiglass, mai rezistente la deformare pe termen lung decât PVC-ul expandat.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Producem grafica după proporțiile și spațiul de protecție exacte ale siglei UE și oferim, la cerere, confirmarea scrisă a conformității pentru dosarul proiectului — un detaliu verificat punctual la vizitele de monitorizare.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Link href="/blog/ghid-vizibilitate-obligatorie-fonduri-europene-kit" className="block bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition">
                                    <span className="block font-bold text-slate-900 mb-1">Ghid de vizibilitate fonduri europene</span>
                                    <span className="text-slate-600 text-sm">Ce material se cere în fiecare fază a proiectului, pe cronologie.</span>
                                </Link>
                                <Link href="/blog/placute-permanente-panouri-eu-audit-reguli" className="block bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition">
                                    <span className="block font-bold text-slate-900 mb-1">Ce verifică un monitor la vizită</span>
                                    <span className="text-slate-600 text-sm">Cele 4 puncte de control ale unei vizite de monitorizare a vizibilității.</span>
                                </Link>
                                <Link href="/blog/anexe-obligatorii-dosar-achizitie-print-conformitate" className="block bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition">
                                    <span className="block font-bold text-slate-900 mb-1">Anexele obligatorii la dosar</span>
                                    <span className="text-slate-600 text-sm">Ce documente ceri de la furnizor pentru un control ulterior.</span>
                                </Link>
                            </div>
                        </div>

                        {/* Mounting section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 inline-block">Sisteme de fixare: lipit sau pe distanțiere</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Pentru montaj lipit direct pe perete sau pe o structură plană, cu adeziv dublu-adeziv sau cașerare, greutatea proprie nu e o problemă, iar PVC-ul expandat, ușor, e alegerea rațională.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Pentru montaj suspendat pe distanțiere metalice (standoff-uri), la câțiva centimetri de perete pentru efect vizual premium, PVC-ul subțire nu ține forma pe suprafețe mari — alegeți grosime mare (8-10mm) sau, pe suprafețe foarte mari, Alucobond.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Spre deosebire de Plexiglass, care cere un joc suplimentar de 1-2mm la găurile de prindere cu șurub din cauza dilatării termice, PVC Forex nu are nevoie de acest joc.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 inline-block">Durabilitate și rezistență la exterior</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    La expunere continuă la soare puternic, pe suprafețe mari fără ramă de susținere, PVC-ul expandat poate suferi o ușoară curbare după 2-3 ani. Alucobondul, compozit cu miez de polietilenă între două foi de aluminiu, practic nu se ondulează la căldură, indiferent de durata expunerii.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Pe timp de iarnă, PVC-ul devine ușor mai casant la temperaturi foarte scăzute, cerând puțină grijă suplimentară la colțuri în timpul montajului. Întreținerea rămâne simplă: apă și detergent neutru, la fel ca Alucobondul.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Printul UV direct pe placă, folosit implicit la comenzile Anexa1, oferă rezistență superioară la zgârieturi față de cașerarea cu autocolant, fiind recomandat pentru orice panou expus îndelung sau verificat la control.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-slate-200 pt-16">
                            <h3 className="text-3xl font-black text-slate-900 mb-8 text-center uppercase">Întrebări Frecvente</h3>
                            <div className="space-y-6 max-w-3xl mx-auto">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
                                        <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Suspense>
    );
}
