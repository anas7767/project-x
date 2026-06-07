import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";

export function Navbar() {
  const { isAuthenticated, user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav
      data-testid="site-navbar"
      className="w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" data-testid="logo-home-link">
          <div className="w-9 h-9 rounded-xl bg-[#003087] flex items-center justify-center group-hover:scale-[1.04] transition-transform">
            <ShoppingCart className="w-5 h-5 text-[#FFD700]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-xl font-extrabold text-[#003087]">FERI</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.18em] font-semibold">Wholesale</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-[#003087] transition-colors" data-testid="nav-how-it-works">How it works</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-[#003087] transition-colors" data-testid="nav-features">Features</a>
          <a href="#brands" className="text-sm font-medium text-slate-600 hover:text-[#003087] transition-colors" data-testid="nav-brands">For Brands</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <Link href={`/dashboard/${user?.role}`}>
              <Button className="font-semibold bg-[#003087] text-white hover:bg-[#002060]" data-testid="nav-dashboard-btn">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-slate-700 hover:text-[#003087] hover:bg-slate-100" data-testid="nav-login-btn">Login</Button>
              </Link>
              <Link href="/register/retailer">
                <Button className="bg-[#003087] text-white hover:bg-[#002060] font-semibold rounded-xl px-5" data-testid="nav-register-btn">
                  Register Free
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white" data-testid="nav-mobile-menu">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 py-2">How it works</a>
            <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 py-2">Features</a>
            <a href="#brands" onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 py-2">For Brands</a>
            <div className="flex gap-2 pt-2">
              <Link href="/login" className="flex-1">
                <Button variant="outline" className="w-full border-slate-300 text-slate-700">Login</Button>
              </Link>
              <Link href="/register/retailer" className="flex-1">
                <Button className="w-full bg-[#003087] text-white">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
