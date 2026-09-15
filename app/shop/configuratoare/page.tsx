import { Metadata } from 'next';
import ConfiguratorShopClient from "@/components/ConfiguratorShopClient";

export const metadata: Metadata = {
    title: 'Configuratoare Online - Panouri Rigide și Materiale Publicitare',
    description: 'Alege produsul și configurează-l online: panouri PVC, alucobond și plexiglas pentru sedii și fațade, semnalistică, bannere, autocolante, afișe, roll-up, canvas. Preț instant, fără cerere de ofertă.',
    keywords: ['configurator panouri rigide', 'panou pvc forex pret', 'placa alucobond personalizata', 'placuta sediu plexiglas', 'configurator print', 'anexa1'],
    alternates: {
        canonical: '/shop/configuratoare',
    },
};

export default function ConfiguratorShopPage() {
    return <ConfiguratorShopClient />;
}
