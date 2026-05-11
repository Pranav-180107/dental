"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Role = "dentist" | "clinic" | "student" | "dealer";

const ROLES: { id: Role; label: string; icon: string }[] = [
  { id: "dentist", label: "Dentist", icon: "👨‍⚕️" },
  { id: "clinic", label: "Clinic", icon: "🏥" },
  { id: "student", label: "Student", icon: "🎓" },
  { id: "dealer", label: "Dealer", icon: "🤝" },
];

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>("dentist");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00D4FF]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#00B5A8]/04 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0099CC] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,212,255,0.5)]">
            <span className="text-[#0A0A0F] font-black text-3xl">T</span>
          </div>
          <h1 className="text-2xl font-bold font-outfit text-white">{isLogin ? "Welcome Back" : "Join Thaarwin"}</h1>
          <p className="text-[#64748B] text-sm mt-1">The Dental Marker Space</p>
        </div>

        {/* Toggle */}
        <div className="flex p-1 rounded-xl bg-[#111827] border border-[#00D4FF]/10 mb-6">
          {["Login", "Sign Up"].map((tab) => (
            <button
              key={tab}
              onClick={() => setIsLogin(tab === "Login")}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                (tab === "Login") === isLogin
                  ? "neon-btn text-[#0A0A0F]"
                  : "text-[#64748B] hover:text-[#BAE6FD]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Role Selection for Sign Up */}
        {!isLogin && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mb-5">
            <label className="block text-xs font-medium text-[#BAE6FD] mb-3">I am a…</label>
            <div className="grid grid-cols-4 gap-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-center transition-all ${
                    selectedRole === role.id
                      ? "border-[#00D4FF]/50 bg-[#00D4FF]/10 shadow-[0_0_12px_rgba(0,212,255,0.15)]"
                      : "border-[#00D4FF]/10 hover:border-[#00D4FF]/25"
                  }`}
                >
                  <span className="text-xl">{role.icon}</span>
                  <span className={`text-[10px] font-medium ${selectedRole === role.id ? "text-[#00D4FF]" : "text-[#64748B]"}`}>
                    {role.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Form */}
        <div className="card-glass rounded-2xl p-6 space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-medium text-[#BAE6FD] mb-1.5">Full Name</label>
              <input type="text" placeholder="Dr. John Doe" className="w-full h-11 px-4 rounded-xl bg-[#111827] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all" />
            </div>
          )}
          <div>
            <label className="block text-xs font-medium text-[#BAE6FD] mb-1.5">
              {isLogin ? "Email or Phone" : "Email Address"}
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
              <input type="email" placeholder="doctor@clinic.com" className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#111827] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-[#BAE6FD]">Password</label>
              {isLogin && <Link href="/auth/forgot" className="text-[10px] text-[#00D4FF] hover:text-[#00F5FF]">Forgot Password?</Link>}
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full h-11 pl-10 pr-11 rounded-xl bg-[#111827] border border-[#00D4FF]/15 text-[#BAE6FD] placeholder:text-[#64748B] text-sm focus:outline-none focus:border-[#00D4FF]/50 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#00D4FF] transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button className="w-full h-11 neon-btn text-[#0A0A0F] font-bold rounded-xl mt-2">
            {isLogin ? "Login to Account" : "Create Account"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          <div className="relative flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-[#00D4FF]/10" />
            <span className="text-xs text-[#64748B]">or continue with</span>
            <div className="flex-1 h-px bg-[#00D4FF]/10" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="h-10 rounded-xl border border-[#00D4FF]/15 bg-[#111827] text-xs font-medium text-[#BAE6FD] hover:border-[#00D4FF]/35 hover:text-[#00D4FF] transition-all flex items-center justify-center gap-2">
              <span>G</span> Google
            </button>
            <button className="h-10 rounded-xl border border-[#00D4FF]/15 bg-[#111827] text-xs font-medium text-[#BAE6FD] hover:border-[#00D4FF]/35 hover:text-[#00D4FF] transition-all flex items-center justify-center gap-2">
              📱 OTP Login
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-[#64748B] mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-[#00D4FF] hover:text-[#00F5FF] font-medium">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
