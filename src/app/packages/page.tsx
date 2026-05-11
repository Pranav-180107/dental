"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PACKAGES = [
  {
    id: "starter",
    name: "Starter Clinic",
    price: 2,
    unit: "Lakhs",
    badge: null,
    description: "Perfect for solo practitioners starting their first clinic",
    features: [
      "1 Dental Chair Unit (basic)",
      "Ultrasonic Scaler",
      "Basic Handpiece Set",
      "Sterilization Cassette",
      "Starter Consumables Kit",
      "6 months support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 5,
    unit: "Lakhs",
    badge: "Most Popular",
    description: "Complete setup for a growing multi-chair clinic",
    features: [
      "2 Premium Dental Chair Units",
      "Digital OPG X-Ray",
      "NSK High-Speed Handpieces (set of 4)",
      "LED Curing Light + Scaler",
      "Autoclave Sterilizer",
      "Full Composite Kit",
      "1 Year Support + GST Invoice",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 15,
    unit: "Lakhs+",
    badge: "Best Value",
    description: "Hospital-grade setup for chains and specialty clinics",
    features: [
      "4+ Premium Chair Units",
      "CBCT / OPG Digital Imaging",
      "Full Instrument Suite",
      "CAD/CAM System",
      "Implant Kit (full protocol)",
      "Staff Training Program",
      "Dedicated Account Manager",
      "Lifetime Support",
    ],
  },
];

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30">
          <Zap className="h-3 w-3 mr-1" /> Turnkey Solutions
        </Badge>
        <h1 className="text-4xl font-black font-outfit text-white mb-3">
          Clinic Setup <span className="gradient-text">Packages</span>
        </h1>
        <p className="text-[#64748B] max-w-xl mx-auto">
          Everything you need to open and equip your dental clinic — curated by experts, delivered to your door.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {PACKAGES.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              pkg.badge === "Most Popular"
                ? "border-[#00D4FF]/40 bg-gradient-to-b from-[#00D4FF]/08 to-[#0D1117] shadow-[0_0_40px_rgba(0,212,255,0.15)]"
                : "border-[#00D4FF]/10 bg-[#0D1117]/80"
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#00D4FF] text-[#0A0A0F] font-bold border-none shadow-[0_0_16px_rgba(0,212,255,0.5)] px-4 py-1">
                  <Star className="h-3 w-3 mr-1 fill-current" /> {pkg.badge}
                </Badge>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-sm text-[#64748B] mb-5">{pkg.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black gradient-text">₹{pkg.price}</span>
                <span className="text-lg font-bold text-[#00D4FF]">{pkg.unit}</span>
              </div>
              <p className="text-xs text-[#64748B] mt-1">Customizable · GST inclusive</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-[#BAE6FD]">
                  <Check className="h-4 w-4 text-[#10B981] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/bulk-order">
              <Button className={`w-full h-11 rounded-xl font-bold ${pkg.badge === "Most Popular" ? "neon-btn text-[#0A0A0F]" : "border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 bg-transparent"}`}>
                Get This Package <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="card-glass rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Need a Custom Package?</h2>
        <p className="text-[#64748B] mb-6">Our dental setup experts will design a solution tailored to your specialty and budget.</p>
        <Link href="/contact">
          <Button className="neon-btn text-[#0A0A0F] font-bold px-8 h-11 rounded-xl">
            Talk to an Expert
          </Button>
        </Link>
      </div>
    </div>
  );
}
