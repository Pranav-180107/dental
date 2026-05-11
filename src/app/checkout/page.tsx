"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, CreditCard, Truck, ChevronRight, Lock, Smartphone, Wallet, Building2, Banknote, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";

const STEPS = ["Cart", "Address", "Payment", "Confirmation"];

const PAYMENT_METHODS = [
  { id: "upi", label: "UPI", icon: Smartphone, desc: "PhonePe, GPay, Paytm, BHIM" },
  { id: "card", label: "Debit/Credit Card", icon: CreditCard, desc: "Visa, Mastercard, RuPay, Amex" },
  { id: "wallet", label: "Wallets", icon: Wallet, desc: "Paytm, Mobikwik, Freecharge" },
  { id: "netbanking", label: "Net Banking", icon: Building2, desc: "All major Indian banks" },
  { id: "emi", label: "EMI", icon: Zap, desc: "No-cost EMI on cards" },
  { id: "cod", label: "Cash on Delivery", icon: Banknote, desc: "Pay when delivered" },
];

const UPI_APPS = ["PhonePe", "Google Pay", "Paytm", "BHIM UPI", "Other UPI"];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, getTotal, couponDiscount, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [selectedUpi, setSelectedUpi] = useState("PhonePe");
  const [upiId, setUpiId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<"success" | "failure" | null>(null);

  const subtotal = getSubtotal();
  const total = getTotal();
  const shipping = subtotal >= 5000 ? 0 : 149;
  const finalTotal = total + shipping;

  const [address, setAddress] = useState({
    name: "", phone: "", email: "", pincode: "",
    address: "", city: "", state: "", landmark: "",
  });

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const simulatePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      const success = Math.random() > 0.15; // 85% success rate
      setProcessing(false);
      setPaymentResult(success ? "success" : "failure");
      if (success) {
        setStep(3);
        clearCart();
      }
    }, 2500);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-10">
      {STEPS.slice(1).map((s, i) => (
        <div key={s} className="flex items-center">
          <div className={`flex flex-col items-center gap-1`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
              i + 1 < step ? "bg-[#10B981] text-white shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              : i + 1 === step ? "neon-btn text-[#0A0A0F] shadow-[0_0_16px_rgba(0,212,255,0.5)]"
              : "bg-[#111827] border border-[#00D4FF]/15 text-[#64748B]"
            }`}>
              {i + 1 < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`text-xs font-medium ${i + 1 <= step ? "text-[#00D4FF]" : "text-[#64748B]"}`}>{s}</span>
          </div>
          {i < STEPS.length - 2 && (
            <div className={`w-16 sm:w-24 h-px mx-3 mb-4 transition-all ${i + 1 < step ? "bg-[#10B981]" : "bg-[#00D4FF]/15"}`} />
          )}
        </div>
      ))}
    </div>
  );

  const OrderSummary = () => (
    <div className="card-glass rounded-xl p-5 sticky top-24">
      <h3 className="font-semibold text-white mb-4 text-sm">Order Summary</h3>
      <div className="space-y-3 mb-4 max-h-52 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-lg bg-[#111827] border border-[#00D4FF]/10 shrink-0 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-[#BAE6FD] line-clamp-1">{item.name}</div>
              <div className="text-xs text-[#64748B]">Qty: {item.quantity}</div>
            </div>
            <div className="text-xs font-semibold text-white shrink-0">₹{(item.price * item.quantity).toLocaleString("en-IN")}</div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#00D4FF]/08 pt-3 space-y-2 text-xs text-[#BAE6FD]">
        <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div>
        {couponDiscount > 0 && <div className="flex justify-between text-[#10B981]"><span>Discount</span><span>-₹{((subtotal * couponDiscount) / 100).toLocaleString("en-IN")}</span></div>}
        <div className="flex justify-between"><span>Shipping</span><span className={shipping === 0 ? "text-[#10B981]" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span></div>
        <div className="flex justify-between font-bold text-white text-sm pt-2 border-t border-[#00D4FF]/08">
          <span>Total</span><span>₹{finalTotal.toLocaleString("en-IN")}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-[10px] text-[#64748B]">
        <Lock className="h-3 w-3 text-[#00D4FF]" /> Secured by SSL encryption
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-6xl">
      <h1 className="text-2xl font-bold font-outfit text-white mb-8">
        Checkout
      </h1>
      <StepIndicator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {/* ── Step 1: Address ── */}
            {step === 1 && (
              <motion.div key="address" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="card-glass rounded-xl p-6">
                  <h2 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#00D4FF]" /> Delivery Address
                  </h2>
                  <form onSubmit={handleAddressSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {[
                        { key: "name", label: "Full Name", placeholder: "Dr. John Doe", type: "text", full: false },
                        { key: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", full: false },
                        { key: "email", label: "Email Address", placeholder: "doctor@clinic.com", type: "email", full: true },
                        { key: "pincode", label: "Pincode", placeholder: "110001", type: "text", full: false },
                        { key: "city", label: "City", placeholder: "New Delhi", type: "text", full: false },
                        { key: "state", label: "State", placeholder: "Delhi", type: "text", full: false },
                        { key: "address", label: "Flat, House No, Street", placeholder: "123, Example Street", type: "text", full: true },
                        { key: "landmark", label: "Landmark (Optional)", placeholder: "Near hospital", type: "text", full: true },
                      ].map(({ key, label, placeholder, type, full }) => (
                        <div key={key} className={full ? "sm:col-span-2" : ""}>
                          <label className="block text-xs font-medium text-[#BAE6FD] mb-1.5">{label}</label>
                          <input
                            type={type}
                            required={!label.includes("Optional")}
                            placeholder={placeholder}
                            value={address[key as keyof typeof address]}
                            onChange={(e) => setAddress({ ...address, [key]: e.target.value })}
                            className="w-full h-10 px-3 rounded-lg bg-[#111827] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all"
                          />
                        </div>
                      ))}
                    </div>
                    <Button type="submit" className="w-full h-12 neon-btn text-[#0A0A0F] font-bold rounded-xl">
                      Continue to Payment <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* ── Step 2: Payment ── */}
            {step === 2 && (
              <motion.div key="payment" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="card-glass rounded-xl p-6">
                  <h2 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[#00D4FF]" /> Payment Method
                  </h2>

                  {/* Payment Options */}
                  <div className="space-y-3 mb-6">
                    {PAYMENT_METHODS.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                            paymentMethod === method.id
                              ? "border-[#00D4FF]/50 bg-[#00D4FF]/05 shadow-[0_0_16px_rgba(0,212,255,0.1)]"
                              : "border-[#00D4FF]/10 hover:border-[#00D4FF]/25"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${paymentMethod === method.id ? "bg-[#00D4FF]/20" : "bg-[#111827]"}`}>
                            <Icon className={`h-5 w-5 ${paymentMethod === method.id ? "text-[#00D4FF]" : "text-[#64748B]"}`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white">{method.label}</div>
                            <div className="text-xs text-[#64748B]">{method.desc}</div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === method.id ? "border-[#00D4FF]" : "border-[#64748B]"
                          }`}>
                            {paymentMethod === method.id && <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Payment Method Sub-options */}
                  {paymentMethod === "upi" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-[#111827] border border-[#00D4FF]/10 mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {UPI_APPS.map((app) => (
                          <button
                            key={app}
                            onClick={() => setSelectedUpi(app)}
                            className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                              selectedUpi === app ? "border-[#00D4FF]/50 bg-[#00D4FF]/10 text-[#00D4FF]" : "border-[#00D4FF]/10 text-[#64748B] hover:border-[#00D4FF]/25"
                            }`}
                          >
                            {app}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter UPI ID (e.g., name@paytm)"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-[#0D1117] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/40 transition-all"
                      />
                    </motion.div>
                  )}

                  {paymentMethod === "card" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-[#111827] border border-[#00D4FF]/10 mb-6 space-y-3">
                      <input type="text" placeholder="Card Number" className="w-full h-10 px-3 rounded-lg bg-[#0D1117] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/40 transition-all" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="Expiry MM/YY" className="h-10 px-3 rounded-lg bg-[#0D1117] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/40 transition-all" />
                        <input type="text" placeholder="CVV" className="h-10 px-3 rounded-lg bg-[#0D1117] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/40 transition-all" />
                      </div>
                      <input type="text" placeholder="Name on Card" className="w-full h-10 px-3 rounded-lg bg-[#0D1117] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/40 transition-all" />
                    </motion.div>
                  )}

                  {/* Pay Button */}
                  <Button
                    onClick={simulatePayment}
                    disabled={processing}
                    className="w-full h-12 neon-btn text-[#0A0A0F] font-bold rounded-xl text-base"
                  >
                    {processing ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#0A0A0F]/30 border-t-[#0A0A0F] rounded-full animate-spin" />
                        Processing Payment…
                      </span>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" /> Pay ₹{finalTotal.toLocaleString("en-IN")}
                      </>
                    )}
                  </Button>

                  {paymentResult === "failure" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/25 text-center">
                      <p className="text-red-400 text-sm font-medium">Payment failed. Please try again.</p>
                    </motion.div>
                  )}

                  <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-[#64748B]">
                    <span className="flex items-center gap-1"><Lock className="h-3 w-3 text-[#00D4FF]" /> 256-bit SSL</span>
                    <span>Razorpay Secured</span>
                    <span>PCI DSS Compliant</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: Confirmation ── */}
            {step === 3 && (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-glass rounded-xl p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                >
                  <Check className="h-12 w-12 text-[#10B981]" />
                </motion.div>
                <h2 className="text-3xl font-black font-outfit text-white mb-2">Order Confirmed! 🎉</h2>
                <p className="text-[#64748B] mb-2">Thank you for ordering from Thaarwin Enterprises</p>
                <div className="inline-block px-4 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6">
                  <span className="text-xs text-[#64748B]">Order ID: </span>
                  <span className="text-sm font-bold text-[#00D4FF]">TW{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-8">
                  <div className="p-3 rounded-xl bg-[#0D1117] border border-[#00D4FF]/08 text-center">
                    <Truck className="h-5 w-5 text-[#00D4FF] mx-auto mb-1" />
                    <div className="text-xs text-[#64748B]">Est. Delivery</div>
                    <div className="text-xs font-semibold text-white">3-5 Days</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1117] border border-[#00D4FF]/08 text-center">
                    <CreditCard className="h-5 w-5 text-[#00D4FF] mx-auto mb-1" />
                    <div className="text-xs text-[#64748B]">Paid</div>
                    <div className="text-xs font-semibold text-white">₹{finalTotal.toLocaleString("en-IN")}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D1117] border border-[#00D4FF]/08 text-center">
                    <Check className="h-5 w-5 text-[#10B981] mx-auto mb-1" />
                    <div className="text-xs text-[#64748B]">Status</div>
                    <div className="text-xs font-semibold text-[#10B981]">Confirmed</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => router.push("/products")} className="neon-btn text-[#0A0A0F] font-bold px-8 h-11 rounded-xl">
                    Continue Shopping
                  </Button>
                  <Button onClick={() => router.push("/account/orders")} variant="outline" className="h-11 px-8 rounded-xl border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 font-medium">
                    Track Order
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary Sidebar */}
        <div className="hidden lg:block">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
