import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Globe, MessageCircle, Share2, Rss } from "lucide-react";

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
    { label: "Return Policy", href: "/returns" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Bulk/Dealer Inquiry", href: "/bulk-order" },
    { label: "Wishlist", href: "/wishlist" },
  ],
};

// Social links using available lucide icons as substitutes
const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Rss, href: "#", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#00D4FF]/10 bg-[#0D1117] overflow-hidden">
      {/* Ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00D4FF]/03 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* Real logo */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-[#00D4FF]/20 blur-md group-hover:bg-[#00D4FF]/35 transition-all" />
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#00D4FF]/30 shadow-[0_0_16px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_24px_rgba(0,212,255,0.7)] transition-all">
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
                <div className="text-white font-bold text-lg leading-tight">Thaarwin</div>
                <div className="text-[11px] text-[#00D4FF]/70 tracking-widest uppercase">Enterprises</div>
              </div>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              India&apos;s premium dental marketplace trusted by 10,000+ professionals. Genuine products, best prices, fast delivery.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#00D4FF]/15 bg-[#00D4FF]/05 flex items-center justify-center text-[#64748B] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#00D4FF] to-[#00B5A8]" />
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748B] hover:text-[#00D4FF] transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#00D4FF]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-gradient-to-b from-[#00D4FF] to-[#00B5A8]" />
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                <span>
                  123 Dental Hub, Medical District,
                  <br />
                  New Delhi, India 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#00D4FF] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#00D4FF] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#00D4FF] shrink-0" />
                <a href="mailto:support@thaarwin.com" className="hover:text-[#00D4FF] transition-colors">
                  support@thaarwin.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-[#64748B] mb-3">Get exclusive dental deals in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 h-9 px-3 rounded-lg bg-[#111827] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-xs focus:outline-none focus:border-[#00D4FF]/40 transition-all"
                />
                <button className="h-9 px-3 rounded-lg neon-btn text-[#0A0A0F] font-bold text-xs">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#00D4FF]/08 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} Thaarwin Enterprises. All rights reserved.{" "}
            <span className="text-[#00D4FF]/50">The Dental Marker Space</span>
          </p>
          <div className="flex gap-6 text-xs text-[#64748B]">
            <Link href="/privacy" className="hover:text-[#00D4FF] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#00D4FF] transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-[#00D4FF] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
