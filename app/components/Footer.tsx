import Link from "next/link";
import { BookOpen, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/8 text-[#6e6e73] text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section: Scripture Quote */}
        <div className="border-b border-black/8 pb-8 mb-10 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base sm:text-lg text-[#1d1d1f] leading-relaxed">
            &ldquo;Thy word is a lamp unto my feet, and a light unto my
            path.&rdquo;
          </p>
          <p className="text-xs uppercase tracking-widest text-[#c5a028] font-semibold mt-2">
            Psalm 119:105
          </p>
        </div>

        {/* Multi-column navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-[#1d1d1f] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Features & Workflow
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#interactive-demo"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Interactive Editor Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/#theology-tools"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  YouVersion Integration
                </Link>
              </li> */}
              <li>
                <Link
                  href="/#download"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Mobile Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Theological Tools */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-[#1d1d1f] uppercase tracking-wider">
              Theology & Study
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <span className="text-[#86868b]">
                  Collapsible Scripture Badges
                </span>
              </li>
              <li>
                <span className="text-[#86868b]">
                  Multi-Translation Comparison
                </span>
              </li>
              {/* <li>
                <span className="text-[#86868b]">
                  ESV &bull; NIV &bull; KJV &bull; NLT &bull; AMP
                </span>
              </li> */}
              {/* <li>
                <span className="text-[#86868b]">AI Smart Reference Detection</span>
              </li> */}
            </ul>
          </div>

          {/* Col 3: Company & Community */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-[#1d1d1f] uppercase tracking-wider">
              Faith Pad
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  About Faith Pad
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Contact & Support
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/contact?subject=partnership"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Church Partnerships
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Col 4: Legal & User Rights */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-[#1d1d1f] uppercase tracking-wider">
              Legal & Safety
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1d1d1f] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="hover:text-[#1d1d1f] transition-colors font-medium text-[#1d1d1f]"
                >
                  Request Account Deletion
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#86868b] flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                  30-Day Protected Grace Period
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#c5a028]" />
            <span className="text-[#1d1d1f] font-semibold">Faith Pad</span>
            <span>
              &copy; {new Date().getFullYear()} Faith Pad. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#86868b]">
            <span>
              Designed with reverence for sermon preparation and Bible study.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
