"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/data";

// ─── Cart Types ───────────────────────────────────────────────────────────────
export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  couponCode: string;
  couponDiscount: number;
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
}

const VALID_COUPONS: Record<string, number> = {
  THAARWIN10: 10,
  DENTAL20: 20,
  FIRSTORDER: 15,
  CLINIC25: 25,
};

// ─── Cart Store ───────────────────────────────────────────────────────────────
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: "",
      couponDiscount: 0,

      addItem: (product) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) { get().removeItem(id); return; }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [], couponCode: "", couponDiscount: 0 }),

      applyCoupon: (code) => {
        const discount = VALID_COUPONS[code.toUpperCase()];
        if (discount) {
          set({ couponCode: code.toUpperCase(), couponDiscount: discount });
          return true;
        }
        return false;
      },

      removeCoupon: () => set({ couponCode: "", couponDiscount: 0 }),

      getItemCount: () => get().items.reduce((acc, i) => acc + i.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = (subtotal * get().couponDiscount) / 100;
        return Math.max(0, subtotal - discount);
      },
    }),
    { name: "thaarwin-cart" }
  )
);

// ─── Wishlist Store ────────────────────────────────────────────────────────────
interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  isWishlisted: (id: number) => boolean;
  toggle: (product: Product) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set((state) => ({ items: [...state.items, product] })),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      isWishlisted: (id) => get().items.some((i) => i.id === id),
      toggle: (product) => {
        if (get().isWishlisted(product.id)) get().removeItem(product.id);
        else get().addItem(product);
      },
    }),
    { name: "thaarwin-wishlist" }
  )
);
