"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    (() => setMobileMenuOpen(false))();
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "apple-glass border-b border-black/8 shadow-xs"
          : "bg-white/90 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between backdrop-blur-md ">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black rounded-lg"
        >
          <Image
            src={"/images/icon.png"}
            alt="Faith Pad Logo"
            width={40}
            height={40}
            className="rounded-[10px]"
          />
          <span className="font-semibold text-lg tracking-tight text-[#1d1d1f] flex items-center">
            Faith<span className="text-[#c5a028] ml-0.5">Pad</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors duration-150 ${
                  isActive
                    ? "font-semibold text-[#1d1d1f]"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#download"
            className="apple-button-primary px-4 py-2 text-xs uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Download</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1d1d1f] rounded-md hover:bg-black/5 focus:outline-hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/8 bg-white px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-base py-2 transition-colors ${
                    isActive
                      ? "font-semibold text-[#1d1d1f]"
                      : "text-[#6e6e73] hover:text-[#1d1d1f]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-black/5">
            <Link
              href="/#download"
              className="apple-button-primary w-full py-3 text-sm flex items-center justify-center gap-2"
            >
              <span>Download Faith Pad</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
