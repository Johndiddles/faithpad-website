import Link from "next/link";
import {
  BookOpen,
  Sparkles,
  Shield,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Faith Pad — Our Mission & Theological Philosophy",
  description:
    "Learn why Faith Pad was built: to eliminate the friction between the sanctuary and the study desk with scripture-integrated note-taking.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HEADER SECTION */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/8 text-xs font-medium text-[#1d1d1f] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#c5a028]" />
          <span>Our Vision & Philosophy</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl mx-auto leading-tight">
          Where sacred study meets modern craft.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Faith Pad was born from a simple observation: mainstream note-taking
          apps were never built for the theological depth, speed, and reverence
          of live preaching and focused scripture study.
        </p>
      </section>

      {/* 2. THE PROBLEM VS THE SOLUTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] border-y border-black/8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="apple-card p-8 sm:p-10 bg-white">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm mb-6">
                &times;
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                The Friction of Generic Tools
              </h2>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-4">
                Sitting in a sanctuary or study desk with traditional note apps
                forces you into a constant cycle of disruption:
              </p>
              <ul className="space-y-3 text-sm text-[#3a3a3c]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&bull;</span>
                  <span>
                    Switching back and forth between a Bible app, a browser, and
                    a blank document during fast-paced messages.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&bull;</span>
                  <span>
                    Copying and pasting long scripture passages that clutter
                    your notes and ruin outline readability.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">&bull;</span>
                  <span>
                    Complex markdown and bloated formatting controls that demand
                    attention away from what the speaker is saying.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="apple-card p-8 sm:p-10 bg-white border-2 border-black/15 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#1d1d1f] text-[#d4af37] flex items-center justify-center font-bold text-sm mb-6">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                The Faith Pad Architecture
              </h2>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-4">
                Faith Pad turns the note canvas into an active theological
                workspace:
              </p>
              <ul className="space-y-3 text-sm text-[#1d1d1f]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant Scripture Resolution:</strong> Simply type a
                    verse reference, and Faith Pad pulls verified text via the
                    YouVersion API.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Collapsible Badges:</strong> Keep notes compact;
                    expand verses only when you want to read them.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Multi-Translation Side-by-Side:</strong> Compare
                    ESV, NIV, KJV, NLT, and AMP directly in the note.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR FOUR CORE PILLARS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#c5a028] font-bold">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mt-2">
            The foundation of everything we build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1 */}
          <div className="apple-card p-8">
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-4">
              <BookOpen className="w-5 h-5 text-[#c5a028]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              1. Reverence for Scripture
            </h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              We treat scripture not as raw string data, but as sacred text.
              Integrations are carefully structured to preserve verse numbers,
              translations, and accurate context without alteration.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="apple-card p-8">
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-4">
              <Sparkles className="w-5 h-5 text-[#c5a028]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              2. Apple-Grade Simplicity
            </h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              True power lies in restraint. We reject cluttered sidebars, nested
              plugins, and distracting themes in favor of clean typography and
              purpose-built theological utilities.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="apple-card p-8">
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-4">
              <Compass className="w-5 h-5 text-[#c5a028]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              3. Academic & Devotional Harmony
            </h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Whether you are a pastor preparing a 4-week series on Romans or a
              believer writing morning devotionals, Faith Pad scales seamlessly
              without steep learning curves.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="apple-card p-8">
            <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] mb-4">
              <Shield className="w-5 h-5 text-[#c5a028]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              4. Uncompromised User Sovereignty
            </h3>
            <p className="text-sm text-[#6e6e73] leading-relaxed">
              Your notes are personal. We never monetize user notes, sell
              personal data, or lock your content behind proprietary traps. We
              enforce a protected 30-day grace policy for all account
              lifecycles.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] border-t border-black/8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
            Experience a better way to capture God&apos;s Word.
          </h2>
          <p className="text-sm sm:text-base text-[#6e6e73]">
            Download Faith Pad today on iOS and Android and start taking notes
            with clarity and purpose.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#download"
              className="apple-button-primary px-8 py-3.5 text-sm font-medium flex items-center justify-center gap-2"
            >
              <span>Get Faith Pad Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="apple-button-secondary px-8 py-3.5 text-sm font-medium flex items-center justify-center gap-2"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
