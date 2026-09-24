import { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";
import GlobalStructuredData from "../components/GlobalStructuredData";
import Header from "../components/Navbar"; // Use Navbar as Header
import Footer from "../components/Footer";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";
import ContactButton from "../components/ContactButton";
import CookieConsent from "../components/CookieConsent";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anexa1.ro"),
  title: {
    default: "Anexa1.ro - Panouri Rigide, Plăcuțe de Sediu și Semnalistică pentru Firme",
    template: "%s | Anexa1.ro",
  },
  description:
    "Panouri publicitare rigide printate UV pentru sedii, fațade și semnalistică: PVC Forex, alucobond, plexiglas, polipropilenă, carton plume. Configurator cu preț instant, producție proprie, livrare 2-4 zile lucrătoare. În catalog și bannere, afișe, autocolante, textile, canvas și kituri fonduri UE.",
  keywords: [
    "panouri rigide publicitare",
    "panou pvc forex",
    "placa alucobond personalizata",
    "placuta sediu plexiglas",
    "semnalistica firme",
    "panou fatada magazin",
    "panou santier",
    "print uv pe materiale rigide",
    "anexa1"
  ],
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  verification: {
    google: 'FPQT6X0QSD',
  },
  openGraph: {
    title: "Anexa1.ro | Panouri Rigide și Semnalistică pentru Firme",
    description:
      "PVC Forex, alucobond, plexiglas, polipropilenă și carton plume printate UV, cu sistem de prindere la alegere. Configurator cu preț instant, producție proprie.",
    url: "https://www.anexa1.ro",
    siteName: "Anexa1.ro",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/products/materiale/alucobond/alucobond-1.jpg",
        width: 1200,
        height: 630,
        alt: "Anexa1.ro - Panou alucobond printat UV, montat pe fațadă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anexa1.ro | Panouri Rigide și Semnalistică pentru Firme",
    description: "Plăcuțe de sediu, panouri de fațadă și semnalistică pe PVC, alucobond și plexiglas, cu preț instant.",
    images: ["/products/materiale/alucobond/alucobond-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" data-theme="light">
      <head>
        {/* Consent Mode v2 — must run before gtag.js, so it lives here in the root
            layout <head>. (`Script strategy="beforeInteractive"` is ignored inside
            client components, so it cannot live in CookieConsent.) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              try {
                if (localStorage.getItem('cookie_consent') === 'granted') {
                  gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'analytics_storage': 'granted'
                  });
                }
              } catch (e) {}
            `,
          }}
        />
        {/* GA4 property "Anexa1.ro", în contul Culoarea din Viata SA SRL.
            În HTML-ul inițial ca verificatorul Google să îl vadă; Consent Mode
            de mai sus controlează stocarea. Vechiul ID G-4J0WMEX7J3 era comun
            cu homeprint.ro și adbanner.ro, în contul mutat la coș. */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E0ZF4WEY46" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());
              gtag('config', 'G-E0ZF4WEY46');
            `,
          }}
        />
        <link rel="icon" href="/logo.svg" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        {/* mydashboard.ro: vizite, surse de trafic si legatura cu platile (proiectul Print) */}
        <script defer src="https://mydashboard.ro/t.js" data-site="d56e4346614fcb28" />
      </head>

      <body className={`${inter.variable} ${outfit.variable} bg-white text-slate-900 antialiased font-sans selection:bg-blue-500 selection:text-white relative`}>
        <CookieConsent />
        <Providers>
          <Header />
          <main className="w-full overflow-x-hidden">
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </main>
          <Footer />
          <GlobalStructuredData />
          <ContactButton />
        </Providers>
      </body>
    </html>
  );
}
