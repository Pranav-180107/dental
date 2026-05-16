import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Globe, MessageCircle, Share2, Rss, ShieldCheck, Building2 } from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Special Offers", href: "/deals" },
    { label: "Top Brands", href: "/brands" },
    { label: "Dental Blog", href: "/blog" },
    { label: "Clinic Packages", href: "/packages" },
  ],
  "Customer Service": [
    { label: "Track Your Order", href: "/track-order" },
    { label: "Return Policy", href: "/return-exchange" },
    { label: "Shipping & Delivery", href: "/shipping-policy" },
    { label: "FAQs", href: "/faq" },
    { label: "Bulk/Dealer Inquiry", href: "/bulk-order" },
    { label: "Wishlist", href: "/wishlist" },
  ],
};

const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Rss, href: "#", label: "Blog" },
];

// ── Centralised business constants ────────────────────────────────────────────
export const BUSINESS = {
  legalName:     "Thaarwin Enterprises",
  tradeName:     "Thaarwin Enterprises",
  gstin:         "34AAJFT6857B2Z1",
  constitution:  "Partnership Firm",
  phone:         "98942 55884",
  phoneHref:     "tel:+919894255884",
  email:         "support@thaarwin.com",
  emailHref:     "mailto:support@thaarwin.com",
  address:       "Ground Floor, 29/B/41, Thiyagaraja Street, Puducherry – 605001",
  partners:      ["Nambiar Jeyaraj", "Asirvatham Hemajayanthi"],
} as const;

export function Footer() {
  return (
    <footer className="relative border-t border-[#1B5E20]/10 bg-[#FFFFFF] overflow-hidden">
      {/* Ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#1B5E20]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1B5E20]/03 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">

        {/* ── GST Trust Strip ──────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 py-3 px-6 rounded-xl bg-[#1B5E20]/05 border border-[#1B5E20]/12">
          <span className="flex items-center gap-2 text-xs font-semibold text-[#1B5E20]">
            <ShieldCheck className="h-3.5 w-3.5" />
            GST Registered Business
          </span>
          <span className="text-xs text-[#5D4037] font-mono font-medium">GSTIN: {BUSINESS.gstin}</span>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 text-xs text-[#5D4037] hover:text-[#1B5E20] transition-colors font-medium">
            <Phone className="h-3 w-3 text-[#1B5E20]" /> 📞 {BUSINESS.phone}
          </a>
          <span className="text-xs text-[#5D4037] italic">{BUSINESS.constitution}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-[#1B5E20]/20 blur-md group-hover:bg-[#1B5E20]/35 transition-all" />
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#1B5E20]/30 shadow-[0_0_16px_rgba(27,94,32,0.4)] group-hover:shadow-[0_0_24px_rgba(27,94,32,0.7)] transition-all">
                  <Image
                    src="/logo.jpeg"
                    alt="Thaarwin Enterprises Logo"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-[#3E2723] font-bold text-lg leading-tight">Thaarwin</div>
                <div className="text-[11px] text-[#1B5E20]/70 tracking-widest uppercase">Enterprises</div>
              </div>
            </Link>
            <p className="text-sm text-[#5D4037] leading-relaxed mb-6">
              India&apos;s premium dental marketplace trusted by 10,000+ professionals. Genuine products, best prices, fast delivery.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#1B5E20]/15 bg-[#1B5E20]/05 flex items-center justify-center text-[#5D4037] hover:text-[#1B5E20] hover:border-[#1B5E20]/40 hover:shadow-[0_0_12px_rgba(27,94,32,0.2)] transition-all"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#3E2723] font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#1B5E20] to-[#00796B]" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5D4037] hover:text-[#1B5E20] transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#1B5E20]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[#3E2723] font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#1B5E20] to-[#00796B]" />
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-[#5D4037]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ground Floor, 29/B/41,<br />
                  Thiyagaraja Street,<br />
                  Puducherry – 605001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#1B5E20] shrink-0" />
                <a href={BUSINESS.phoneHref} className="hover:text-[#1B5E20] transition-colors font-medium">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#1B5E20] shrink-0" />
                <a href={BUSINESS.emailHref} className="hover:text-[#1B5E20] transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-[#5D4037] mb-3">Get exclusive dental deals in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-9 px-3 rounded-lg bg-[#FAF6ED] border border-[#1B5E20]/15 text-[#3E2723] placeholder:text-[#5D4037] text-xs focus:outline-none focus:border-[#1B5E20]/40 transition-all"
                />
                <button className="h-9 px-3 rounded-lg neon-btn text-[#FFFDF5] font-bold text-xs">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Legal / Business Info */}
          <div>
            <h4 className="text-[#3E2723] font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#1B5E20] to-[#00796B]" />
              Business Info
            </h4>
            <div className="space-y-3 text-xs text-[#5D4037]">
              <div className="flex items-start gap-2">
                <Building2 className="h-3.5 w-3.5 text-[#1B5E20] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-[#3E2723]">{BUSINESS.legalName}</div>
                  <div className="text-[#5D4037]">{BUSINESS.constitution}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1B5E20] shrink-0" />
                <div>
                  <div className="text-[10px] text-[#5D4037] uppercase tracking-wide">GSTIN</div>
                  <div className="font-mono font-semibold text-[#3E2723] tracking-wider">{BUSINESS.gstin}</div>
                </div>
              </div>
              <div className="pt-1 border-t border-[#1B5E20]/10">
                <div className="text-[10px] uppercase tracking-wide text-[#5D4037] mb-1">Partners</div>
                {BUSINESS.partners.map(p => (
                  <div key={p} className="text-[#3E2723] font-medium">{p}</div>
                ))}
              </div>
              <div className="pt-1 border-t border-[#1B5E20]/10">
                <div className="text-[10px] uppercase tracking-wide text-[#5D4037] mb-1">Registered Office</div>
                <div className="leading-relaxed text-[#3E2723]">{BUSINESS.address}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1B5E20]/08 pt-6">
          {/* Legal declaration */}
          <p className="text-[10px] text-[#5D4037] text-center leading-relaxed mb-4 max-w-3xl mx-auto">
            Thaarwin Enterprises is a Partnership Firm registered under GST with GSTIN: {BUSINESS.gstin}, having its
            registered office at {BUSINESS.address}. For queries, contact{" "}
            <a href={BUSINESS.phoneHref} className="text-[#1B5E20] font-medium hover:underline">{BUSINESS.phone}</a>
            {" "}or{" "}
            <a href={BUSINESS.emailHref} className="text-[#1B5E20] font-medium hover:underline">{BUSINESS.email}</a>.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#5D4037]">
              &copy; {new Date().getFullYear()} Thaarwin Enterprises. All rights reserved.{" "}
              <span className="text-[#1B5E20]/50">The Dental Marker Space</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-[#5D4037]">
              <Link href="/privacy-policy" className="hover:text-[#1B5E20] transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-[#1B5E20] transition-colors">Terms of Service</Link>
              <Link href="/refund-cancellation" className="hover:text-[#1B5E20] transition-colors">Refund & Cancellation</Link>
              <Link href="/shipping-policy" className="hover:text-[#1B5E20] transition-colors">Shipping & Delivery</Link>
              <Link href="/return-exchange" className="hover:text-[#1B5E20] transition-colors">Return & Exchange</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
