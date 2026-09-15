import React, { Suspense } from "react";
import ShopPageContent from "./ShopPageContent";
import { Metadata } from 'next';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ category?: string }> }): Promise<Metadata> {
    const { category } = await searchParams;

    if (category?.toLowerCase() === 'semnalistica') {
        return {
            title: 'Semnalistică și Indicatoare PVC/Autocolant',
            description: 'Indicatoare SSM, PSI, semnalistică de interior și plăcuțe de uși pentru sedii de firmă. Printate UV pe PVC Forex, autocolant sau alucobond, cu sistem de prindere la alegere. Preț de producător.',
            keywords: ['semnalistica', 'indicatoare pvc', 'semne protectia muncii', 'indicatoare ssm', 'indicatoare psi', 'semnalistica magazine'],
            alternates: { canonical: '/shop?category=semnalistica' },
        };
    }

    return {
        title: 'Shop - Panouri Rigide, Semnalistică și Tot Catalogul de Print',
        description: 'Catalogul complet Anexa1: panouri rigide PVC, alucobond și plexiglas, semnalistică și indicatoare, plus bannere, autocolante, tablouri canvas și kituri pentru fonduri europene. Preț de producător, livrare în toată țara.',
        keywords: ['shop print', 'anexa1 produse', 'bannere online', 'tablouri personalizate', 'autocolante vinyl', 'rollup', 'afise'],
        alternates: { canonical: '/shop' },
    };
}

import Breadcrumbs from '@/components/Breadcrumbs';

export default function ShopPage() {
    return (
        <div className="pt-24 max-w-7xl mx-auto px-4">
            <Breadcrumbs items={[{ label: 'Magazin', href: '/shop' }]} />
            <Suspense fallback={<div className="container py-20 text-center">Se încarcă produsele...</div>}>
                <ShopPageContent />
            </Suspense>
        </div>
    );
}
