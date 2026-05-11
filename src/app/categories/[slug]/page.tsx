"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#64748B] mb-8">
        <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#00D4FF] transition-colors">Products</Link>
        <span>/</span>
        <span className="text-[#00D4FF]">{category.name}</span>
      </div>

      {/* Category Hero */}
      <div className={`relative rounded-2xl overflow-hidden mb-10 p-8 border border-[#00D4FF]/10 bg-gradient-to-r ${category.gradient} bg-[#0D1117]`}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-[#0A0A0F]/60 border border-[#00D4FF]/20 flex items-center justify-center text-5xl shadow-[0_0_24px_rgba(0,212,255,0.15)]">
            {category.icon}
          </div>
          <div>
            <Badge className="mb-2 bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/25 text-[10px]">
              {category.count} products
            </Badge>
            <h1 className="text-3xl font-black font-outfit text-white">
              {category.name}
            </h1>
            <p className="text-[#64748B] text-sm mt-1">
              Premium dental {category.name.toLowerCase()} supplies from top brands
            </p>
          </div>
        </div>
      </div>

      {/* Back link */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#00D4FF] transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All Products
      </Link>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">{category.icon}</div>
          <h2 className="text-xl font-bold text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-[#64748B] text-sm">
            We&apos;re stocking {category.name} products. Check back soon!
          </p>
          <Link href="/products" className="mt-6 inline-block">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="px-6 py-3 rounded-xl neon-btn text-[#0A0A0F] font-bold text-sm"
            >
              Browse All Products
            </motion.div>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
