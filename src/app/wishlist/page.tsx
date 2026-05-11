"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlistStore } from "@/lib/store";
import { ProductCard } from "@/components/products/ProductCard";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-outfit text-white">
          My <span className="gradient-text">Wishlist</span>
        </h1>
        <p className="text-[#64748B] mt-1">{items.length} saved item{items.length !== 1 ? "s" : ""}</p>
      </div>

      {items.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-24">
          <Heart className="h-16 w-16 text-[#00D4FF]/20 mx-auto mb-6" />
          <h2 className="text-xl font-bold text-white mb-3">Your wishlist is empty</h2>
          <p className="text-[#64748B] mb-8">Save products you love for later</p>
          <Link href="/products">
            <Button className="neon-btn text-[#0A0A0F] font-bold px-10 h-12 rounded-xl">
              Explore Products <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
