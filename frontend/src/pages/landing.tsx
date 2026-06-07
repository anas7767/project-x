import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  ShoppingBag,
  Store,
  Building2,
  ChevronRight,
  ShoppingCart,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock3,
  Package,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.pexels.com/photos/26861411/pexels-photo-26861411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900";
const SHELVES_IMAGE =
  "https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBzaGVsdmVzfGVufDB8fHx8MTc4MDgwODcxN3ww&ixlib=rb-4.1.0&q=85&w=1100";
const DELIVERY_IMAGE =
  "https://images.pexels.com/photos/6169046/pexels-photo-6169046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-paper text-slate-900 flex flex-col" data-testid="landing-page">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-14 lg:pt-20 pb-20 lg:pb-28 overflow-hidden">
        {/* Soft dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />
        {/* Gold corner glow */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#FFD700]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#003087]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003087]/5 border border-[#003087]/10 mb-6"
              data-testid="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#003087]" />
              <span className="text-xs font-semibold tracking-wider text-[#003087] uppercase">
                Trusted by 130+ kirana retailers
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-heading text-[2.6rem] sm:text-5xl lg:text-[4.25rem] xl:text-[5rem] font-extrabold leading-[1.02] tracking-tight text-slate-900"
              data-testid="hero-headline"
            >
              India's Retail{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#003087]">Supply Engine</span>
                <span className="absolute left-0 bottom-1 h-3 lg:h-4 w-full bg-[#FFD700]/70 -z-0 rounded-sm"></span>
              </span>
              <br />
              for Bharat's kirana.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed"
              data-testid="hero-subheadline"
            >
              Order FMCG, snacks and local brands directly from manufacturers at wholesale rates.
              Stock today, pay <span className="font-semibold text-slate-900">in up to 60 days</span> &mdash;
              with a no-questions-asked exchange guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link href="/register/retailer" className="sm:w-auto w-full">
                <Button
                  size="lg"
                  className="h-14 px-7 text-base font-bold bg-[#003087] text-white hover:bg-[#002060] rounded-xl w-full sm:w-auto shadow-[0_8px_30px_-8px_rgba(0,48,135,0.45)]"
                  data-testid="hero-retailer-cta"
                >
                  <Store className="mr-2 h-5 w-5" />
                  I am a Retailer
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register/brand" className="sm:w-auto w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-7 text-base font-bold border-2 border-slate-300 text-slate-900 hover:border-[#003087] hover:text-[#003087] hover:bg-white rounded-xl w-full sm:w-auto bg-white/60"
                  data-testid="hero-brand-cta"
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  I am a Brand
                </Button>
              </Link>
            </motion.div>

            {/* Trust mini row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2" data-testid="trust-kyc">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2-min digital KYC
              </div>
              <div className="flex items-center gap-2" data-testid="trust-credit">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant credit limits
              </div>
              <div className="flex items-center gap-2" data-testid="trust-exchange">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 60-day exchange
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Layered image collage */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none"
            >
              {/* Main image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/15 border border-white">
                <img
                  src={HERO_IMAGE}
                  alt="Indian kirana shop interior with stocked shelves"
                  className="w-full h-full object-cover"
                  loading="eager"
                  data-testid="hero-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/40 via-transparent to-transparent" />
              </div>

              {/* Floating credit badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-4 lg:-left-10 top-10 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-5 py-4 flex items-center gap-3 border border-slate-100"
                data-testid="hero-credit-badge"
              >
                <div className="w-11 h-11 rounded-xl bg-[#003087] flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Credit Limit</div>
                  <div className="font-heading text-2xl font-extrabold text-slate-900 leading-none">
                    ₹2,40,000
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Approved instantly
                  </div>
                </div>
              </motion.div>

              {/* Floating order card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-3 lg:-right-6 bottom-8 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-4 py-3 border border-slate-100 max-w-[14rem]"
                data-testid="hero-order-card"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Order Dispatched</span>
                </div>
                <div className="text-sm font-semibold text-slate-900">42 SKUs &middot; 6 brands</div>
                <div className="text-xs text-slate-500 mt-1">Arrives in 36 hrs &middot; Nashik</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Brand strip / partners marquee */}
        <div className="relative mt-16 lg:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500 text-center mb-6" data-testid="brand-strip-label">
            Brands stocking up with FERI
          </div>
          <div className="overflow-hidden" data-testid="brand-marquee">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[
                "Raj Foods",
                "Spice Garden",
                "SnackTime",
                "LocalBest",
                "Anand Dairy",
                "Konkan Naturals",
                "Maratha Mills",
                "Bharat Beverages",
              ]
                .concat([
                  "Raj Foods",
                  "Spice Garden",
                  "SnackTime",
                  "LocalBest",
                  "Anand Dairy",
                  "Konkan Naturals",
                  "Maratha Mills",
                  "Bharat Beverages",
                ])
                .map((b, i) => (
                  <span key={i} className="font-heading text-2xl font-bold text-slate-300 hover:text-[#003087] transition-colors">
                    {b}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-white border-y border-slate-200/80" data-testid="stats-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { value: "130+", label: "Active retailers", accent: "#003087" },
              { value: "₹15L+", label: "Revenue processed", accent: "#FF9933" },
              { value: "2", label: "Cities live", accent: "#003087" },
              { value: "60-Day", label: "Exchange guarantee", accent: "#FF9933" },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="text-center lg:text-left lg:px-4 lg:border-r last:lg:border-r-0 border-slate-200"
              >
                <div className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: s.accent }} data-testid={`stat-value-${i}`}>
                  {s.value}
                </div>
                <div className="mt-2 text-xs lg:text-sm uppercase tracking-[0.18em] font-semibold text-slate-500" data-testid={`stat-label-${i}`}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 lg:py-28 relative" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-14 lg:mb-20">
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#FF9933] mb-3">How it works</div>
            <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              From sign-up to stocked shelves in <span className="text-[#003087]">under 72 hours.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                icon: ShieldCheck,
                title: "Register & KYC",
                desc: "Sign up with your phone number. Upload GST/Aadhaar. Get a digital KYC verdict in minutes.",
              },
              {
                step: "02",
                icon: ShoppingBag,
                title: "Browse & Order",
                desc: "Pick from 1000+ wholesale SKUs across FMCG, snacks and regional brands. One unified cart.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Grow on Credit",
                desc: "Pay later with Net-15/30/60 day terms. Unsold? Exchange within 60 days — no questions asked.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="relative p-7 bg-white rounded-3xl border border-slate-200 hover:border-[#003087]/30 hover:shadow-xl hover:shadow-[#003087]/5 hover:-translate-y-1 transition-all duration-300 group"
                data-testid={`how-step-${i}`}
              >
                <div className="absolute top-4 right-5 font-heading text-6xl font-extrabold text-slate-100 group-hover:text-[#FFD700]/40 transition-colors">
                  {s.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#003087] flex items-center justify-center mb-5 relative z-10">
                  <s.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-slate-900 mb-2 relative z-10">{s.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed relative z-10">{s.desc}</p>
                {i < 2 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-8 h-8 text-slate-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES - BENTO */}
      <section id="features" className="py-20 lg:py-28 bg-slate-50/60 border-y border-slate-200/70" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-14">
            <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#FF9933] mb-3">Why FERI</div>
            <h2 className="font-heading text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Built for the modern <span className="text-[#003087]">Indian retailer.</span>
            </h2>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {/* Large tile: Catalog */}
            <motion.div
              {...fadeUp}
              className="md:col-span-7 md:row-span-2 rounded-3xl bg-white border border-slate-200 p-7 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:shadow-slate-900/5 transition-shadow"
              data-testid="feature-catalog"
            >
              <div className="absolute -right-12 -bottom-12 w-72 h-72 rounded-full bg-[#FFD700]/10 blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-[#FFD700] flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-[#003087]" />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">Curated wholesale catalog</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed max-w-md mb-6">
                High-margin FMCG, snacks and local brands &mdash; vetted, priced and dispatched directly by manufacturers. No middlemen.
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/8]">
                <img src={SHELVES_IMAGE} alt="Stocked grocery shelves" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
            </motion.div>

            {/* Credit */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="md:col-span-5 rounded-3xl bg-[#003087] text-white p-7 lg:p-8 relative overflow-hidden hover:shadow-xl hover:shadow-[#003087]/20 transition-shadow"
              data-testid="feature-credit"
            >
              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#FFD700]/20 blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-[#FFD700] flex items-center justify-center mb-5">
                <CreditCard className="w-6 h-6 text-[#003087]" />
              </div>
              <h3 className="font-heading text-2xl font-extrabold mb-3">Instant credit, no paperwork</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed mb-5">
                Dynamic credit limits tailored to your shop's performance. Net-15, 30 or 60 day terms.
              </p>
              <div className="flex items-baseline gap-2">
                <div className="font-heading text-4xl font-extrabold text-[#FFD700]">60</div>
                <div className="text-sm font-semibold text-blue-100">Days credit window</div>
              </div>
            </motion.div>

            {/* Exchange */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="md:col-span-5 rounded-3xl bg-white border border-slate-200 p-7 lg:p-8 hover:shadow-xl hover:shadow-slate-900/5 transition-shadow"
              data-testid="feature-exchange"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-3">60-day product exchange</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Unsold inventory eating your margins? Swap it for fast-moving SKUs in under 48 hours.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <Clock3 className="w-4 h-4" /> 48-hr exchange pickup
              </div>
            </motion.div>

            {/* Delivery */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.24 }}
              className="md:col-span-7 rounded-3xl bg-white border border-slate-200 p-7 lg:p-8 hover:shadow-xl hover:shadow-slate-900/5 transition-shadow flex flex-col md:flex-row gap-6 items-center"
              data-testid="feature-delivery"
            >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#FF9933]/15 flex items-center justify-center mb-5">
                  <Truck className="w-6 h-6 text-[#FF9933]" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-slate-900 mb-3">Fast, tracked delivery</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  Optimized hub-and-spoke logistics ensure your shelves are never empty &mdash; track every crate live.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 w-full md:w-44 lg:w-56 aspect-square">
                <img src={DELIVERY_IMAGE} alt="Delivery in progress" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOR BRANDS CTA */}
      <section
        id="brands"
        className="py-20 lg:py-28 relative overflow-hidden bg-[#003087]"
        data-testid="brands-cta-section"
      >
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-[#FFD700]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 mb-6">
                <Building2 className="w-3.5 h-3.5 text-[#FFD700]" />
                <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase">For Brands</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight">
                Get distribution without
                <br />
                a sales team.
              </h2>
              <p className="mt-5 text-lg text-blue-100/90 leading-relaxed max-w-xl">
                List your products on FERI and reach hundreds of verified kirana stores instantly. We handle credit
                risk, logistics and payments &mdash; you focus on the product.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
                {[
                  { icon: Package, label: "Zero listing fees" },
                  { icon: TrendingUp, label: "Real-time sell-through data" },
                  { icon: ShieldCheck, label: "We bear credit risk" },
                  { icon: Truck, label: "Plug-in logistics" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-blue-50/95 text-[15px]" data-testid={`brand-benefit-${i}`}>
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <b.icon className="w-4 h-4 text-[#FFD700]" />
                    </div>
                    <span className="font-medium">{b.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/register/brand">
                  <Button
                    size="lg"
                    className="h-14 px-7 bg-[#FFD700] text-[#003087] hover:bg-[#FFC700] font-bold rounded-xl text-base shadow-[0_8px_30px_-8px_rgba(255,215,0,0.6)]"
                    data-testid="brand-cta-list"
                  >
                    List your products
                    <ArrowUpRight className="ml-1.5 h-5 w-5" />
                  </Button>
                </Link>
                <a href="mailto:anas983shaikh@gmail.com">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-7 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-bold rounded-xl text-base"
                    data-testid="brand-cta-contact"
                  >
                    Talk to our team
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/20 border border-white/40">
                <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#003087] mb-2">Brand snapshot</div>
                <div className="font-heading text-2xl font-extrabold text-slate-900 mb-6">Spice Garden &mdash; Q3 on FERI</div>

                <div className="space-y-5">
                  {[
                    { label: "Stores activated", value: "84", trend: "+38 this month" },
                    { label: "GMV processed", value: "₹6,40,000", trend: "+22% MoM" },
                    { label: "Avg. payment cycle", value: "27 days", trend: "guaranteed" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between pb-5 border-b border-slate-100 last:border-0 last:pb-0" data-testid={`brand-metric-${i}`}>
                      <div>
                        <div className="text-xs uppercase tracking-widest font-semibold text-slate-500">{m.label}</div>
                        <div className="font-heading text-3xl font-extrabold text-slate-900 mt-1">{m.value}</div>
                      </div>
                      <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        {m.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="py-16 lg:py-20 bg-white" data-testid="final-cta-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Ready to upgrade your <span className="text-[#003087]">kirana sourcing?</span>
          </h3>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Join 130+ retailers stocking smarter, faster and with breathing room on credit.
          </p>
          <Link href="/register/retailer">
            <Button size="lg" className="h-14 px-8 bg-[#003087] text-white hover:bg-[#002060] font-bold rounded-xl text-base" data-testid="final-cta-button">
              Start free &mdash; takes 2 minutes
              <ArrowUpRight className="ml-1.5 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#003087] flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-extrabold text-[#003087]">FERI</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.18em] font-semibold">Wholesale</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4 max-w-xs">
              India's retail supply engine &mdash; powering kirana stores with credit, catalog and logistics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Product</div>
              <div className="flex flex-col gap-2">
                <a href="#how-it-works" className="text-slate-600 hover:text-[#003087]">How it works</a>
                <a href="#features" className="text-slate-600 hover:text-[#003087]">Features</a>
                <a href="#brands" className="text-slate-600 hover:text-[#003087]">For Brands</a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Account</div>
              <div className="flex flex-col gap-2">
                <Link href="/login" className="text-slate-600 hover:text-[#003087]">Retailer Login</Link>
                <Link href="/login" className="text-slate-600 hover:text-[#003087]">Brand Portal</Link>
                <Link href="/register/retailer" className="text-slate-600 hover:text-[#003087]">Register Free</Link>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Get in touch</div>
            <a href="mailto:anas983shaikh@gmail.com" className="text-sm text-slate-700 font-semibold hover:text-[#003087]" data-testid="footer-email">
              anas983shaikh@gmail.com
            </a>
            <p className="text-xs text-slate-500 mt-2">Nashik &middot; Pune &middot; Mumbai</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 FERI Wholesale. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#003087]">Privacy</a>
            <a href="#" className="hover:text-[#003087]">Terms</a>
            <a href="#" className="hover:text-[#003087]">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
