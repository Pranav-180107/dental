import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { BUSINESS } from "@/components/layout/Footer";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-[#5D4037] mb-8">
          <Link href="/" className="hover:text-[#1B5E20] transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4 text-[#D7CEC3]" />
          <span className="text-[#3E2723] font-medium">{title}</span>
        </nav>

        {/* Content Card */}
        <div className="card-glass rounded-2xl p-8 md:p-12 shadow-primary">
          <div className="border-b border-[#D7CEC3]/50 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-outfit text-[#3E2723] mb-3">
              {title}
            </h1>
            <p className="text-sm text-[#5D4037]">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-stone max-w-none prose-headings:text-[#3E2723] prose-headings:font-outfit prose-headings:font-semibold prose-a:text-[#00796B] hover:prose-a:text-[#1B5E20] prose-p:text-[#5D4037] prose-li:text-[#5D4037] prose-strong:text-[#3E2723]">
            {children}
          </div>

          {/* ── Business Declaration (Razorpay KYC) ──────────────────────── */}
          <div className="mt-10 pt-8 border-t border-[#1B5E20]/15 rounded-xl bg-[#1B5E20]/04 px-6 py-5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-4 w-4 text-[#1B5E20]" />
              <span className="text-xs font-semibold text-[#1B5E20] uppercase tracking-widest">Business Information</span>
            </div>
            <p className="text-xs text-[#5D4037] leading-relaxed">
              <strong className="text-[#3E2723]">{BUSINESS.legalName}</strong> is a{" "}
              {BUSINESS.constitution} registered under GST with GSTIN:{" "}
              <span className="font-mono font-semibold text-[#3E2723]">{BUSINESS.gstin}</span>,
              having its registered office at{" "}
              <strong className="text-[#3E2723]">{BUSINESS.address}</strong>.{" "}
              For any queries, contact us at{" "}
              <a href={BUSINESS.phoneHref} className="text-[#1B5E20] font-medium hover:underline">{BUSINESS.phone}</a>
              {" "}or{" "}
              <a href={BUSINESS.emailHref} className="text-[#1B5E20] font-medium hover:underline">{BUSINESS.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
