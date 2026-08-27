import Link from "next/link";
import { ShieldCheck, Lock, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Faith Pad",
  description:
    "Comprehensive privacy policy for Faith Pad, detailing our data practices for OAuth authentication, notes storage, YouVersion integration, AI detection, and 30-day deletion grace policy.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 26, 2026";

  return (
    <div className="flex flex-col w-full">
      {/* 1. HEADER SECTION */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/8 text-xs font-medium text-[#1d1d1f] mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Transparency & Data Protection</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl mx-auto leading-tight">
          Faith Pad Privacy Policy
        </h1>

        <p className="mt-4 text-xs sm:text-sm text-[#86868b]">
          Effective & Last Updated: {lastUpdated} &bull; Version 1.2
        </p>
      </section>

      {/* 2. SUMMARY OVERVIEW CARDS */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="apple-card p-5 bg-[#fafafc]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] mb-1">
              <Lock className="w-4 h-4 text-[#c5a028]" />
              <span>Zero Note Monetization</span>
            </div>
            <p className="text-xs text-[#6e6e73]">
              We never sell your notes, sermon outlines, or devotional entries
              to third-party advertisers or data brokers.
            </p>
          </div>

          <div className="apple-card p-5 bg-[#fafafc]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] mb-1">
              <BookOpen className="w-4 h-4 text-[#c5a028]" />
              <span>YouVersion Integration</span>
            </div>
            <p className="text-xs text-[#6e6e73]">
              Scripture queries are routed through server proxies without
              transmitting personal identity coordinates.
            </p>
          </div>

          <div className="apple-card p-5 bg-[#fafafc]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] mb-1">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>30-Day Protected Deletion</span>
            </div>
            <p className="text-xs text-[#6e6e73]">
              Full 30-day grace period with automatic cancellation if you log in
              or request to cancel.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DETAILED PRIVACY CLAUSES */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="apple-card p-8 sm:p-12 bg-white space-y-10 text-sm text-[#3a3a3c] leading-relaxed">
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              1. Introduction & Overview
            </h2>
            <p>
              Faith Pad (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to protecting the privacy,
              sanctity, and security of our users. This Privacy Policy describes
              how we collect, store, process, and protect your personal
              information when you use the Faith Pad mobile application (iOS and
              Android), our cloud sync infrastructure, and the Faith Pad web
              services.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">
                  A. Account & Authentication Data
                </h3>
                <p className="text-[#6e6e73]">
                  Faith Pad utilizes passwordless OpenID Connect / OAuth2
                  workflows (Google Sign-In and Sign in with Apple). When you
                  authenticate, we collect your name, email address, avatar URL,
                  and OAuth provider unique subject identifier to provision and
                  identify your user profile.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">
                  B. User Content, Notes & Folder Hierarchies
                </h3>
                <p className="text-[#6e6e73]">
                  We store the structured content blocks you create, including
                  sermon outlines, text titles, timestamps, folder names, text
                  formatting (highlights, bold, italics), and scripture
                  reference blocks. These are stored securely in PostgreSQL
                  using encrypted JSONB structures.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">
                  C. User Configuration & Preferences
                </h3>
                <p className="text-[#6e6e73]">
                  We retain your theological application preferences, including
                  your global default Bible translation (e.g., ESV, NIV, KJV,
                  NLT, AMP) and your AI Smart Reference Detection toggle status.
                </p>
              </div>

              {/* <div>
                <h3 className="font-semibold text-[#1d1d1f] mb-1">
                  D. Collaboration & Sharing Data
                </h3>
                <p className="text-[#6e6e73]">
                  When you utilize our note sharing feature, we process the email
                  address of your invited collaborator and your selected
                  permission level (<code className="bg-[#f5f5f7] px-1 py-0.5 rounded text-xs text-[#1d1d1f]">VIEW</code> or{" "}
                  <code className="bg-[#f5f5f7] px-1 py-0.5 rounded text-xs text-[#1d1d1f]">EDIT</code>).
                </p>
              </div> */}
            </div>
          </div>

          {/* Section 3: Third-Party Integrations */}
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              3. Third-Party Integrations & Services
            </h2>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#fafafc] border border-black/8">
                <div className="flex items-center gap-2 font-semibold text-[#1d1d1f] mb-1">
                  <BookOpen className="w-4 h-4 text-[#c5a028]" />
                  <span>YouVersion Bible Platform SDK</span>
                </div>
                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  Faith Pad connects with the YouVersion Platform SDK to deliver
                  biblical passages and translation comparisons. When scripture
                  is requested, our servers fetch passage text using book,
                  chapter, and verse coordinates. No personal note contents or
                  user profile data are shared with the YouVersion platform.
                </p>
              </div>

              {/* <div className="p-4 rounded-xl bg-[#fafafc] border border-black/8">
                <div className="flex items-center gap-2 font-semibold text-[#1d1d1f] mb-1">
                  <Sparkles className="w-4 h-4 text-[#c5a028]" />
                  <span>AI Smart Reference Parsing</span>
                </div>
                <p className="text-xs text-[#6e6e73] leading-relaxed">
                  When AI Smart Detection is active, typed shorthand references
                  (e.g., &ldquo;Jn 3:16&rdquo;) are parsed via a cloud edge
                  endpoint to identify standardized biblical citations. This
                  processing is stateless and transient; snippets are not stored
                  for LLM model training.
                </p>
              </div> */}
            </div>
          </div>

          {/* Section 4: Data Storage & Security */}
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              4. Data Storage, Keychain & Security
            </h2>
            <p className="mb-3">
              We employ strict security practices to safeguard your spiritual
              notes and identity:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#6e6e73]">
              <li>
                <strong>Device Keychain:</strong> Long-lived authentication JWTs
                are cryptographically stored on your device using{" "}
                <code className="bg-[#f5f5f7] px-1 py-0.5 rounded text-xs text-[#1d1d1f]">
                  expo-secure-store
                </code>{" "}
                (iOS Keychain and Android Keystore).
              </li>
              <li>
                <strong>Encrypted In Transit & At Rest:</strong> All network
                requests between the mobile app, web platform, and cloud backend
                are enforced over TLS 1.3. Databases utilize managed encryption
                at rest.
              </li>
              <li>
                <strong>Offline Sync Queue:</strong> Local edits made offline
                are safely queued in client-side storage and synchronized using
                optimistic concurrency checks to prevent accidental overwrites.
              </li>
            </ul>
          </div>

          {/* Section 5: Account Deletion Policy & 30-Day Grace Period */}
          <div className="p-6 rounded-2xl bg-[#fafafc] border-2 border-black/10 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-[#1d1d1f]">
              <Clock className="w-5 h-5 text-red-600" />
              <span>5. Account Deletion & 30-Day Protected Grace Period</span>
            </div>
            <p className="text-xs sm:text-sm text-[#3a3a3c] leading-relaxed">
              We respect your right to completely delete your account and all
              associated data. When you submit an account deletion request, the
              following conditions strictly apply:
            </p>
            <div className="space-y-2 text-xs text-[#3a3a3c]">
              <div className="p-3 bg-white rounded-xl border border-black/8">
                <strong>1. 30-Day Execution Window:</strong> Your account enters
                a 30-day pending deletion period before data is permanently
                wiped.
              </div>
              <div className="p-3 bg-white rounded-xl border border-black/8">
                <strong>2. Automatic Cancellation via Login:</strong> If you log
                into the Faith Pad mobile app anytime during the 30 days, your
                account deletion request is{" "}
                <strong>automatically canceled</strong> and your account
                restored without data loss.
              </div>
              <div className="p-3 bg-white rounded-xl border border-black/8">
                <strong>3. Manual Cancellation Option:</strong> You can also
                write to{" "}
                <span className="font-mono text-[#1d1d1f]">
                  support@faithpad.app
                </span>{" "}
                or submit a cancellation request on our{" "}
                <Link
                  href="/delete-account"
                  className="text-[#1d1d1f] font-semibold underline"
                >
                  Account Deletion page
                </Link>{" "}
                within the 30 days.
              </div>
              <div className="p-3 bg-white rounded-xl border border-black/8">
                <strong>4. Permanent Purge:</strong> After 30 days have elapsed
                without cancellation, all profile records, folder structures,
                notes, blocks, and share provisions are irreversibly deleted
                from our production databases and backup cycles.
              </div>
            </div>
          </div>

          {/* Section 6: User Rights */}
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              6. Your Rights (GDPR, CCPA & App Store Standards)
            </h2>
            <p className="mb-2">
              Regardless of your geographic location, Faith Pad grants you full
              control over your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#6e6e73]">
              <li>
                <strong>Right to Access & Portability:</strong> View your
                profile and notes directly within the app.
              </li>
              <li>
                <strong>Right to Rectification:</strong> Update your default
                translation, name, or settings anytime in Settings.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request full permanent
                deletion of your account and notes via our{" "}
                <Link
                  href="/delete-account"
                  className="text-[#1d1d1f] underline font-medium"
                >
                  Account Deletion Portal
                </Link>
                .
              </li>
            </ul>
          </div>

          {/* Section 7: Contact Information */}
          <div className="pt-6 border-t border-black/8">
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight mb-2">
              7. Contact Us
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6e73] mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-[#fafafc] border border-black/8 inline-block text-xs space-y-1">
              {/* <div>
                <span className="font-semibold text-[#1d1d1f]">Email: </span>
                <a
                  href="mailto:privacy@faithpad.app"
                  className="font-mono text-[#1d1d1f] underline"
                >
                  privacy@faithpad.app
                </a>
              </div> */}
              <div>
                <span className="font-semibold text-[#1d1d1f]">Support: </span>
                <a
                  href="mailto:support@faithpad.app"
                  className="font-mono text-[#1d1d1f] underline"
                >
                  support@faithpad.app
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
