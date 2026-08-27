import Link from "next/link";
import {
  BookOpen,
  Columns,
  CloudCheck,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  // Sparkles,
  // FolderTree,
  // Users,
} from "lucide-react";
// import InteractiveEditorDemo from "./components/InteractiveEditorDemo";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Subtle Apple-style Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/8 text-xs font-medium text-[#1d1d1f] mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#c5a028]" />
          <span>Theology & Sermon Workspace &bull; Version 1.0</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] max-w-4xl mx-auto leading-[1.08]">
          Your sacred space for sermons and study.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed font-normal">
          Faith Pad unites an Apple-inspired minimalist canvas with structural
          theological workflows—instant YouVersion scripture insertion, live
          translation comparisons, and zero-friction cloud sync.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#download"
            className="apple-button-primary px-8 py-3.5 text-sm sm:text-base font-medium flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
          >
            <span>Download for iOS & Android</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          {/* <Link
            href="#interactive-demo"
            className="apple-button-secondary px-8 py-3.5 text-sm sm:text-base font-medium flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Try Live Editor Demo</span>
          </Link> */}
        </div>

        {/* Device Badges / Compatibility */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#86868b] pb-16 border-b border-b-gray-100">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1d1d1f]" />
            iOS & iPadOS
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1d1d1f]" />
            Android Ready
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1d1d1f]" />
            YouVersion Platform
          </span>
        </div>
      </section>

      {/* <section
        id="interactive-demo"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#c5a028] font-bold">
              Interactive Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mt-2">
              Experience the editor firsthand.
            </h2>
            <p className="text-sm sm:text-base text-[#6e6e73] mt-3">
              Tap verse badges below to expand scripture passages or toggle
              Bible translations in real time.
            </p>
          </div>

          <InteractiveEditorDemo />
        </div>
      </section> */}

      {/* 3. CORE ARCHITECTURAL FEATURES */}
      <section
        id="features"
        className="pt-10 pb-20 sm:pt-0 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#c5a028] font-bold">
            Theological Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mt-3 leading-tight">
            Engineered without compromise for spiritual depth.
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] mt-4">
            Traditional word processors interrupt your flow with endless
            formatting and app switching. Faith Pad keeps your eyes on the text.
          </p>
        </div>

        {/* Feature Cards Grid (Apple Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Collapsible Verses */}
          <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <BookOpen className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Collapsible Scripture Blocks
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Referenced verses appear as compact, elegant badges. Tap to
                unfold the full passage directly inside your note without
                disrupting your outline hierarchy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>Powered by YouVersion Platform API</span>
            </div>
          </div>

          {/* Card 2: Translation Comparison */}
          <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <Columns className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Side-by-Side Comparisons
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Examine subtle nuances across ESV, NIV, KJV, NLT, and AMP side
                by side in multi-card stacks to grasp Greek and Hebrew depth.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>Multi-Translation Matrix</span>
            </div>
          </div>

          {/* Card 3: AI Smart Shorthand */}
          {/* <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <Sparkles className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                AI Reference Detection
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Type informal shorthand like <code className="bg-[#f5f5f7] px-1.5 py-0.5 rounded text-xs text-[#1d1d1f]">Rom 8:28</code> or <code className="bg-[#f5f5f7] px-1.5 py-0.5 rounded text-xs text-[#1d1d1f]">Jn 3:16</code>, and watch it seamlessly morph into an interactive card as you type.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>Sub-250ms Cloud Edge Parsing</span>
            </div>
          </div> */}

          {/* Card 4: Folder Organization */}
          {/* <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <FolderTree className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Hierarchical Sermon Folders
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Group personal devotions, teaching series, and seminary
                coursework into clean, nested folders with live note counters
                and swipe management.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>Optimized FlashList Architecture</span>
            </div>
          </div> */}

          {/* Card 5: Real-time Sharing */}
          {/* <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <Users className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Collaborative Study Loops
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Share notes securely via email coordinates with granular VIEW or
                EDIT permissions. Build teaching outlines together with co-pastors
                or study partners.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>Granular Access Matrix</span>
            </div>
          </div> */}

          {/* Card 6: Zero-Friction Cloud Persistence */}
          <div className="apple-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] border border-black/8 flex items-center justify-center text-[#1d1d1f] mb-6">
                <CloudCheck className="w-6 h-6 text-[#c5a028]" />
              </div>
              <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
                Silent Cloud Persistence
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Background synchronization concurrent with typing. Optimistic
                locking protects your content across devices with zero data
                loss, even offline.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-black/6 flex items-center text-xs font-semibold text-[#1d1d1f] gap-1">
              <span>PostgreSQL JSONB + Local Sync Queue</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGNED FOR PURPOSE / PERSONAS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#c5a028] font-bold">
              Tailored Workflows
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] mt-3">
              Crafted for every stage of theological life.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Persona 1: Pastors */}
            <div className="apple-card p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]">
                  For Pastors & Preachers
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Preach with clarity, not clutter.
              </h3>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-6">
                Draft sermons without copy-pasting scripture from 5 different
                browser tabs. Switch between ESV and Amplified to clarify nuance
                from the pulpit with distraction-free typography.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Organize full year sermon series into categorized folders
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Collapsible passages keep outlines tight and readable
                  </span>
                </li>
              </ul>
            </div>

            {/* Persona 2: Small Group Leaders */}
            {/* <div className="apple-card p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]">
                  For Small Groups & Discipleship
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Lead discussions that stay centered on the Word.
              </h3>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-6">
                Share study guides with group members. Set view permissions for
                attendees or invite co-leaders to collaboratively build
                discussion questions before meeting.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Email-based instant note sharing with VIEW/EDIT controls
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Synchronized updates across iOS, iPad, and Android
                  </span>
                </li>
              </ul>
            </div> */}

            {/* Persona 3: Seminary & Academic Students */}
            <div className="apple-card p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]">
                  For Theological Students, Churchgoers & Devotees
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Rigorous textual analysis in one view.
              </h3>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-6">
                Compare translation variance during exegesis classes. Capture
                lecture arguments, highlight key concepts, and structure
                research papers without formatting friction.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>Direct side-by-side translation matrices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Structured block-based JSON storage preserving formatting
                  </span>
                </li>
              </ul>
            </div>

            {/* Persona 4: Sunday Churchgoers */}
            {/* <div className="apple-card p-8 sm:p-10 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]">
                  For Churchgoers & Devotees
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-3">
                Catch every word without looking down too long.
              </h3>
              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed mb-6">
                Type scripture references fast as the speaker quotes them. Let
                Faith Pad pull the text automatically so you never miss the
                point of the message.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#1d1d1f]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>
                    Non-glaring, gentle UI designed for sanctuary lighting
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a028]" />
                  <span>Quick-access manual Bible selector bottom sheet</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* 5. DOWNLOAD & APP STORE CTA */}
      <section
        id="download"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center"
      >
        <div className="apple-card bg-[#1d1d1f]  p-10 sm:p-16 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium  border border-white/15">
              <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Available for Mobile & Tablet</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Begin your sacred study with Faith Pad today.
            </h2>

            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              Experience the clarity of scripture-integrated note-taking. Free
              to download on iOS and Android.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#333] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Smartphone className="w-4 h-4" />
                <span>App Store (iOS)</span>
              </a>
              <a
                href="#download"
                className="bg-black/80 border border-white/20 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-black text-white transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Smartphone className="w-4 h-4" />
                <span>Google Play (Android)</span>
              </a>
            </div>

            {/* <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#86868b]">
              <span>Passwordless Google</span>
              <span>&bull;</span>
              <span>YouVersion Platform Verified</span>
              <span>&bull;</span>
              <span>30-Day Protected Account Data</span>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
