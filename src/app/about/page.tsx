import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, HeartPulse, MapPin, Phone, Mail, Building2, Users, FileText } from "lucide-react";
import { BUSINESS } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Thaarwin Enterprises",
  description: "Learn about Thaarwin Enterprises, India's leading dental marketplace. GST Registered Partnership Firm in Puducherry.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-[#5D4037] mb-8">
          <Link href="/" className="hover:text-[#1B5E20] transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 text-[#D7CEC3]" />
          <span className="text-[#3E2723] font-medium">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-16 border border-[#D7CEC3]/60 shadow-[0_4px_20px_rgba(27,94,32,0.05)] text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-[#3E2723] mb-6">
            Empowering Dental Professionals
          </h1>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto leading-relaxed mb-8">
            Thaarwin Enterprises is India&apos;s most trusted marketplace for dental supplies, equipment, and materials.
            We bridge the gap between world-class manufacturers and clinics, ensuring you get genuine products at the best prices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D7CEC3]/50">
            <div>
              <div className="text-3xl font-black text-[#1B5E20] mb-2">10K+</div>
              <div className="text-sm text-[#5D4037] font-medium">Products Catalog</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#00796B] mb-2">5,000+</div>
              <div className="text-sm text-[#5D4037] font-medium">Clinics Served</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#81C784] mb-2">200+</div>
              <div className="text-sm text-[#5D4037] font-medium">Global Brands</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "100% Genuine",
              icon: ShieldCheck,
              desc: "We source directly from manufacturers and authorized distributors to guarantee authenticity."
            },
            {
              title: "Premium Quality",
              icon: Award,
              desc: "From basic consumables to advanced imaging systems, we only list products that meet our high standards."
            },
            {
              title: "Dedicated Support",
              icon: HeartPulse,
              desc: "Our team of dental product experts is always ready to assist you with technical queries and setup."
            }
          ].map((val, i) => (
            <div key={i} className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#D7CEC3]/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#1B5E20]/10 flex items-center justify-center mb-6">
                <val.icon className="h-6 w-6 text-[#1B5E20]" />
              </div>
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">{val.title}</h3>
              <p className="text-[#5D4037] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Company / Legal Information ──────────────────────────────── */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#1B5E20]/20 shadow-[0_4px_24px_rgba(27,94,32,0.07)] overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1B5E20]/08 via-[#FFFFFF] to-[#00796B]/05 px-8 py-6 border-b border-[#1B5E20]/12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B5E20]/15 flex items-center justify-center">
                <FileText className="h-5 w-5 text-[#1B5E20]" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-outfit text-[#3E2723]">Company Information</h2>
                <p className="text-xs text-[#5D4037]">Legal & Registration Details</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1B5E20]/10 border border-[#1B5E20]/20 text-xs font-semibold text-[#1B5E20]">
                <ShieldCheck className="h-3 w-3" /> GST Registered
              </span>
            </div>
          </div>

          {/* Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1B5E20]/08">
            {/* Left column */}
            <div className="p-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-1">Legal Name</div>
                <div className="text-lg font-bold text-[#3E2723]">{BUSINESS.legalName}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-1">Trade Name</div>
                <div className="font-semibold text-[#3E2723]">{BUSINESS.tradeName}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-1">Constitution</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B5E20]/10 text-sm font-semibold text-[#1B5E20] border border-[#1B5E20]/20">
                  <Building2 className="h-3.5 w-3.5" />
                  {BUSINESS.constitution}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-1">GSTIN</div>
                <div className="font-mono text-base font-bold text-[#3E2723] tracking-widest bg-[#1B5E20]/05 px-3 py-1.5 rounded-lg border border-[#1B5E20]/15 inline-block">
                  {BUSINESS.gstin}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-2">Partners</div>
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-[#1B5E20] mt-0.5" />
                  <div className="space-y-1">
                    {BUSINESS.partners.map(p => (
                      <div key={p} className="font-semibold text-[#3E2723]">{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="p-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-2">Principal Place of Business</div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[#1B5E20]" />
                  </div>
                  <div className="text-[#3E2723] font-medium leading-relaxed">
                    Ground Floor, 29/B/41,<br />
                    Thiyagaraja Street,<br />
                    Puducherry – 605001
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-2">Phone</div>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E20]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B5E20]/20 transition-colors">
                    <Phone className="h-4 w-4 text-[#1B5E20]" />
                  </div>
                  <span className="font-bold text-[#3E2723] text-lg group-hover:text-[#1B5E20] transition-colors">
                    {BUSINESS.phone}
                  </span>
                </a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#5D4037] mb-2">Email</div>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E20]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B5E20]/20 transition-colors">
                    <Mail className="h-4 w-4 text-[#1B5E20]" />
                  </div>
                  <span className="font-semibold text-[#00796B] group-hover:text-[#1B5E20] transition-colors">
                    {BUSINESS.email}
                  </span>
                </a>
              </div>
              <div className="pt-4 border-t border-[#1B5E20]/10">
                <p className="text-xs text-[#5D4037] leading-relaxed italic">
                  Thaarwin Enterprises is a duly registered Partnership Firm under the GST Act of India.
                  All transactions are fully compliant with applicable Indian laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
