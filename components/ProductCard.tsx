"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingCart } from "lucide-react";
import ProductVariantSelector from "./ProductVariantSelector";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    routeSlug?: string;
    title: string;
    description?: string;
    price: number;
    images?: string[];
    category?: string;
    tags?: string[];
    metadata?: {
      category?: string;
      subcategory?: string;
      isSignage?: boolean;
      isMultiVariant?: boolean;
      variants?: Array<{
        type: 'afis' | 'canvas' | 'tapet' | 'autocolant';
        title: string;
        description: string;
        slug: string;
        price: number;
        route: string;
        configurator: string;
      }>;
      [key: string]: any; // Allow other properties
    };
  };
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  // State pentru modal și fallback imagine
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Verificăm dacă e produs multi-variant (Europosters)
  const isMultiVariant = product.metadata?.isMultiVariant === true;
  const variants = product.metadata?.variants || [];

  // LOGICA DE RUTARE: Determinăm link-ul corect bazat pe categorie
  const catRaw = String((product.metadata as any)?.category ?? product.category ?? "").toLowerCase();
  const isBanner = catRaw === "bannere" || catRaw === "banner";
  const isSemnalistica = catRaw === "semnalistică" || catRaw === "semnalistica";
  const isSignage = product.metadata?.isSignage === true;

  // Prefer routeSlug if it exists, otherwise build it based on category
  let href = product.routeSlug ? (product.routeSlug.startsWith('/') ? product.routeSlug : `/${product.routeSlug}`) : `/product/${product.slug}`;

  // Helper function to safely prepend category if not already present
  const getSafeHref = (prefix: string, slug: string) => {
    if (slug.startsWith(prefix.replace(/^\//, '')) || slug.startsWith(prefix)) {
      return slug.startsWith('/') ? slug : `/${slug}`;
    }
    return `${prefix}/${slug}`;
  };

  // Only apply category overrides if we don't have a specialized routeSlug from the catalog
  if (!product.routeSlug) {
    if (isSignage || isSemnalistica) { 
      href = getSafeHref('/semnalistica-product', product.slug);
    } else if (isBanner) { 
      href = getSafeHref('/banner-product', product.slug);
    } else if (catRaw === "banner-verso") {
      href = getSafeHref('/banner-verso', product.slug);
    } else if (catRaw === "afise") {
      href = getSafeHref('/afise', product.slug);
    } else if (catRaw === "autocolante") {
      href = getSafeHref('/autocolante', product.slug);
    } else if (catRaw === "flayere" || catRaw === "flyere") {
      href = getSafeHref('/flayere', product.slug);
    } else if (catRaw === "pliante") {
      href = getSafeHref('/pliante', product.slug);
    } else if (catRaw === "canvas") {
      href = getSafeHref('/canvas-product', product.slug);
    } else if (catRaw === "acrylic" || catRaw === "sticlă acrilică" || catRaw === "sticla acrilica") {
      href = getSafeHref('/acrylic-product', product.slug);
    } else if (catRaw === "tapet") {
      href = getSafeHref('/tapet', product.slug);
    } else if (catRaw === "stickere") {
      href = getSafeHref('/autocolante', product.slug);
    } else if (catRaw === "carton") {
      href = getSafeHref('/materiale/carton', product.slug);
    } else if (catRaw === "plexiglass" || catRaw === "plexiglas") {
      href = getSafeHref('/materiale/plexiglass', product.slug);
    } else if (catRaw === "alucobond") {
      href = getSafeHref('/materiale/alucobond', product.slug);
    } else if (catRaw === "polipropilena") {
      href = getSafeHref('/materiale/polipropilena', product.slug);
    } else if (catRaw === "pvc-forex") {
      href = getSafeHref('/materiale/pvc-forex', product.slug);
    } else if (catRaw === "fonduri-eu" || catRaw === "fonduri-pnrr") {
      href = `/fonduri-eu`; 
    }
  }

  // LOGICA IMAGINE ROBUSTĂ
  const imgs = product.images ?? [];
  const categoryPath = catRaw === "bannere" ? "banner" : catRaw;
  const configuratorImageWebp = `/products/${categoryPath}/1.webp`;

  let img = configuratorImageWebp;
  if (imgs.length > 0) {
    img = imgs[0];
  }

  const finalImg = imgError ? configuratorImageWebp : img;

  // Handler pentru click
  const handleClick = (e: React.MouseEvent) => {
    if (isMultiVariant) {
      e.preventDefault();
      setShowVariantModal(true);
    }
  };

    const CardContent = (
    <>
      {/* Imagine */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 group border-b border-slate-200">
        {finalImg.startsWith('http') ? (
          <img
            src={finalImg}
            alt={`${product.title} - Tipar digital și personalizare online ${catRaw ? `din categoria ${catRaw}` : ''}`}
            title={`${product.title} | Anexa1 România`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading={priority ? "eager" : "lazy"}
            onError={() => setImgError(true)}
          />
        ) : (
          <Image
            src={finalImg}
            alt={`${product.title} - Tipar digital și personalizare online ${catRaw ? `din categoria ${catRaw}` : ''}`}
            title={`${product.title} | Anexa1 România`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading={priority ? undefined : "lazy"}
            priority={priority}
            onError={() => setImgError(true)}
          />
        )}

        {/* Etichetă categorie - colț, stil tag tehnic */}
        <div className="absolute top-0 left-0 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1.5">
          {product.metadata?.category || product.category || "Produs"}
        </div>

        {/* Badge Multi-Variant */}
        {isMultiVariant && (
          <div className="absolute top-0 right-0 bg-blue-700 text-white px-2.5 py-1.5 z-10 flex items-center gap-1.5">
            <span className="text-[9px] font-bold uppercase tracking-widest">4 variante</span>
          </div>
        )}
      </div>

      {/* Conținut */}
      <div className="p-5 flex flex-col flex-1 bg-white relative">
        <div className="mb-auto">
          <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors duration-300">
            {product.title}
          </h3>
          {product.description && (
            <div
              className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}
          {!product.description && (
            <p className="mt-2 text-sm text-slate-500 line-clamp-2 leading-relaxed">
              Materiale publicitare de înaltă performanță pentru afacerea ta.
            </p>
          )}
        </div>

        {/* Footer Card */}
        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between group/btn cursor-pointer">
          <span className="font-mono text-sm font-bold text-slate-900 tracking-tight">{product.price.toFixed(0)} RON</span>
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-blue-700 group-hover:text-blue-800 transition-colors flex items-center gap-1.5">
            {isMultiVariant ? "Alege" : "Configurează"}
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMultiVariant ? (
        <div
          onClick={handleClick}
          className="group flex flex-col bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-300 h-full cursor-pointer"
        >
          {CardContent}
        </div>
      ) : (
        <Link
          href={href}
          className="group flex flex-col bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-300 h-full"
        >
          {CardContent}
        </Link>
      )}

      {/* Modal pentru variante */}
      {showVariantModal && isMultiVariant && (
        <ProductVariantSelector
          productTitle={product.title}
          productImage={finalImg}
          variants={variants}
          onClose={() => setShowVariantModal(false)}
        />
      )}
    </>
  );
}