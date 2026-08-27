"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Clock,
  LogIn,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  Undo2,
  ArrowRight,
  Info,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [activeTab, setActiveTab] = useState<"request" | "cancel">("request");

  // Deletion Request Form State
  const [deleteEmail, setDeleteEmail] = useState("");
  const [deleteReason, setDeleteReason] = useState("no-longer-needed");
  const [deleteNotes, setDeleteNotes] = useState("");
  const [acknowledgedGracePeriod, setAcknowledgedGracePeriod] = useState(false);
  const [acknowledgedLoginCancel, setAcknowledgedLoginCancel] = useState(false);
  const [isSubmittingDelete, setIsSubmittingDelete] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteReceipt, setDeleteReceipt] = useState("");

  // Cancellation Form State
  const [cancelEmail, setCancelEmail] = useState("");
  const [cancelNotes, setCancelNotes] = useState("");
  const [isSubmittingCancel, setIsSubmittingCancel] = useState(false);
  const [cancelSuccess, setCancelSuccess] = useState(false);
  const [cancelReceipt, setCancelReceipt] = useState("");

  const handleDeleteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deleteEmail || !acknowledgedGracePeriod || !acknowledgedLoginCancel) return;

    setIsSubmittingDelete(true);
    setTimeout(() => {
      setIsSubmittingDelete(false);
      setDeleteSuccess(true);
      setDeleteReceipt(
        `DEL-${Math.floor(100000 + Math.random() * 900000)}-${new Date().getFullYear()}`
      );
    }, 700);
  };

  const handleCancelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cancelEmail) return;

    setIsSubmittingCancel(true);
    setTimeout(() => {
      setIsSubmittingCancel(false);
      setCancelSuccess(true);
      setCancelReceipt(
        `CAN-${Math.floor(100000 + Math.random() * 900000)}-${new Date().getFullYear()}`
      );
    }, 700);
  };

  // Calculate 30 days from now for preview
  const scheduledDate = new Date();
  scheduledDate.setDate(scheduledDate.getDate() + 30);
  const formattedScheduledDate = scheduledDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO / TITLE SECTION */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700 mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>User Data Rights & Account Management</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl mx-auto leading-tight">
          Request Account Deletion
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          We respect your privacy and data sovereignty. Review the deletion
          timeline and conditions below before submitting a request.
        </p>
      </section>

      {/* 2. IMPORTANT 30-DAY CONDITIONS CARD */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="apple-card p-6 sm:p-8 bg-[#fafafc] border border-black/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#1d1d1f] text-white flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#d4af37]" />
            </div>
            <h2 className="text-lg font-bold text-[#1d1d1f] tracking-tight">
              Essential Conditions & 30-Day Protected Grace Period
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* Condition 1: 30-Day Window */}
            <div className="p-4 rounded-xl bg-white border border-black/8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-[10px]">
                  1
                </span>
                <span>30-Day Timeline</span>
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                An account deletion request takes <strong>30 full days</strong> to
                be permanently executed and completed in our systems.
              </p>
            </div>

            {/* Condition 2: Login Cancels Deletion */}
            <div className="p-4 rounded-xl bg-white border border-black/8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>Auto-Cancel via Login</span>
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                If you happen to <strong>log in to your account</strong> within the
                30-day period, the deletion request will automatically be canceled
                and your data preserved.
              </p>
            </div>

            {/* Condition 3: Email Cancellation */}
            <div className="p-4 rounded-xl bg-white border border-black/8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1d1d1f] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center text-[10px]">
                  3
                </span>
                <span>Email Cancellation</span>
              </div>
              <p className="text-xs text-[#6e6e73] leading-relaxed">
                You can also write to{" "}
                <a
                  href="mailto:support@faithpad.app"
                  className="font-mono text-[#1d1d1f] underline"
                >
                  support@faithpad.app
                </a>{" "}
                or use this page to cancel your deletion request within 30 days.
              </p>
            </div>
          </div>

          {/* Callout Notice */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>What happens after 30 days?</strong> Once the 30-day period
              concludes, all your profile records, folders, notes, custom
              theological blocks, and sharing permissions are permanently and
              irreversibly erased from our PostgreSQL servers.
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FORM TABS (Request Deletion vs Cancel Deletion) */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 bg-[#f5f5f7] border border-black/8 rounded-full">
            <button
              type="button"
              onClick={() => setActiveTab("request")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "request"
                  ? "bg-white text-red-600 shadow-xs"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Submit Deletion Request</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("cancel")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "cancel"
                  ? "bg-white text-emerald-700 shadow-xs"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Undo2 className="w-3.5 h-3.5" />
                <span>Cancel Deletion Request</span>
              </span>
            </button>
          </div>
        </div>

        {/* TAB 1: SUBMIT DELETION REQUEST */}
        {activeTab === "request" && (
          <div className="apple-card p-8 sm:p-10 bg-white">
            {deleteSuccess ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                  Deletion Request Scheduled
                </h3>
                <div className="bg-[#fafafc] border border-black/8 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Receipt Reference:</span>
                    <span className="font-mono font-bold text-[#1d1d1f]">
                      {deleteReceipt}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Account Email:</span>
                    <span className="font-semibold text-[#1d1d1f]">
                      {deleteEmail}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Scheduled Final Wipe:</span>
                    <span className="font-semibold text-red-600">
                      {formattedScheduledDate} (in 30 days)
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6e6e73] max-w-md mx-auto leading-relaxed">
                  Your account is now in the 30-day grace period. Remember:{" "}
                  <strong>
                    if you log into the Faith Pad mobile app before{" "}
                    {formattedScheduledDate}, this deletion request will
                    automatically be canceled
                  </strong>
                  .
                </p>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="apple-button-secondary px-6 py-2.5 text-xs uppercase tracking-wider inline-block"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDeleteSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                    Submit Account Deletion Request
                  </h2>
                  <p className="text-xs sm:text-sm text-[#86868b]">
                    Please provide the email associated with your Faith Pad Google
                    or Apple login.
                  </p>
                </div>

                {/* Email input */}
                <div>
                  <label
                    htmlFor="delete-email"
                    className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                  >
                    Registered Account Email Address *
                  </label>
                  <input
                    type="email"
                    id="delete-email"
                    required
                    value={deleteEmail}
                    onChange={(e) => setDeleteEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-all"
                  />
                  <p className="text-[11px] text-[#86868b] mt-1">
                    Must match the email address associated with your mobile app
                    profile.
                  </p>
                </div>

                {/* Reason Selection */}
                <div>
                  <label
                    htmlFor="delete-reason"
                    className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                  >
                    Primary Reason for Deletion
                  </label>
                  <select
                    id="delete-reason"
                    value={deleteReason}
                    onChange={(e) => setDeleteReason(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-all"
                  >
                    <option value="no-longer-needed">
                      I no longer need the app
                    </option>
                    <option value="switching-tools">
                      Switching to another note-taking solution
                    </option>
                    <option value="privacy">Privacy or data concerns</option>
                    <option value="temporary">
                      Taking a temporary break / resetting data
                    </option>
                    <option value="other">Other reason</option>
                  </select>
                </div>

                {/* Optional Feedback */}
                <div>
                  <label
                    htmlFor="delete-notes"
                    className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                  >
                    Additional Feedback or Notes (Optional)
                  </label>
                  <textarea
                    id="delete-notes"
                    rows={3}
                    value={deleteNotes}
                    onChange={(e) => setDeleteNotes(e.target.value)}
                    placeholder="Is there anything we could have done better to support your Bible study or sermon preparation?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-all resize-none"
                  />
                </div>

                {/* Required Acknowledgements */}
                <div className="space-y-3 pt-2 border-t border-black/8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={acknowledgedGracePeriod}
                      onChange={(e) =>
                        setAcknowledgedGracePeriod(e.target.checked)
                      }
                      className="mt-0.5 w-4 h-4 rounded border-black/20 text-[#1d1d1f] focus:ring-black"
                    />
                    <span className="text-xs text-[#3a3a3c] leading-relaxed">
                      I understand that my deletion request takes{" "}
                      <strong>30 days</strong> to complete, after which all my
                      notes, folders, and profile data will be permanently wiped.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={acknowledgedLoginCancel}
                      onChange={(e) =>
                        setAcknowledgedLoginCancel(e.target.checked)
                      }
                      className="mt-0.5 w-4 h-4 rounded border-black/20 text-[#1d1d1f] focus:ring-black"
                    />
                    <span className="text-xs text-[#3a3a3c] leading-relaxed">
                      I understand that <strong>logging into my account</strong>{" "}
                      via the mobile app within the next 30 days will automatically
                      cancel this deletion request.
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={
                    isSubmittingDelete ||
                    !acknowledgedGracePeriod ||
                    !acknowledgedLoginCancel ||
                    !deleteEmail
                  }
                  className="w-full py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
                >
                  {isSubmittingDelete ? (
                    <span>Processing request...</span>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      <span>Confirm & Schedule Deletion (30 Days)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: CANCEL PENDING DELETION */}
        {activeTab === "cancel" && (
          <div className="apple-card p-8 sm:p-10 bg-white">
            {cancelSuccess ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                  Deletion Request Canceled
                </h3>
                <div className="bg-[#fafafc] border border-black/8 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Receipt Reference:</span>
                    <span className="font-mono font-bold text-[#1d1d1f]">
                      {cancelReceipt}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Account Email:</span>
                    <span className="font-semibold text-[#1d1d1f]">
                      {cancelEmail}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#86868b]">Account Status:</span>
                    <span className="font-bold text-emerald-600">
                      ACTIVE & RESTORED
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6e6e73] max-w-md mx-auto">
                  Your pending deletion has been aborted. All your folders, notes,
                  and scriptures remain safe and accessible.
                </p>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="apple-button-secondary px-6 py-2.5 text-xs uppercase tracking-wider inline-block"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCancelSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                    Cancel a Pending Deletion Request
                  </h2>
                  <p className="text-xs sm:text-sm text-[#86868b]">
                    If your account is within the 30-day grace period, enter your
                    email below to cancel the deletion and restore full access.
                  </p>
                </div>

                {/* Instant Login Reminder Callout */}
                <div className="p-4 rounded-xl bg-[#f5f5f7] border border-black/8 flex items-start gap-3 text-xs text-[#1d1d1f]">
                  <LogIn className="w-4 h-4 text-[#c5a028] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong>Quickest Method:</strong> Simply opening the Faith
                    Pad mobile app and logging into your account automatically
                    cancels your pending deletion immediately.
                  </div>
                </div>

                {/* Email input */}
                <div>
                  <label
                    htmlFor="cancel-email"
                    className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                  >
                    Registered Account Email Address *
                  </label>
                  <input
                    type="email"
                    id="cancel-email"
                    required
                    value={cancelEmail}
                    onChange={(e) => setCancelEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 transition-all"
                  />
                </div>

                {/* Optional note */}
                <div>
                  <label
                    htmlFor="cancel-notes"
                    className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                  >
                    Message or Reference (Optional)
                  </label>
                  <textarea
                    id="cancel-notes"
                    rows={2}
                    value={cancelNotes}
                    onChange={(e) => setCancelNotes(e.target.value)}
                    placeholder="Optional details or original receipt reference number..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-600 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmittingCancel || !cancelEmail}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
                >
                  {isSubmittingCancel ? (
                    <span>Submitting cancellation...</span>
                  ) : (
                    <>
                      <Undo2 className="w-4 h-4" />
                      <span>Cancel Account Deletion & Restore Access</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#86868b]">
                  You can also email{" "}
                  <a
                    href="mailto:support@faithpad.app"
                    className="underline text-[#1d1d1f]"
                  >
                    support@faithpad.app
                  </a>{" "}
                  directly to cancel.
                </p>
              </form>
            )}
          </div>
        )}
      </section>

      {/* 4. DATA PURGE BREAKDOWN TABLE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] border-t border-black/8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f]">
              Data Erasure Breakdown
            </h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] mt-1">
              What happens to your information when the 30-day period expires.
            </p>
          </div>

          <div className="apple-card overflow-hidden bg-white border border-black/8">
            <div className="divide-y divide-black/8 text-xs sm:text-sm">
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1d1d1f]">
                    User Identity & OAuth Profile
                  </div>
                  <div className="text-xs text-[#86868b]">
                    Google Sign-In / Apple ID identifiers, display name, email,
                    avatar.
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 font-semibold text-xs">
                  Permanently Deleted
                </span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1d1d1f]">
                    Folders & Notes Content
                  </div>
                  <div className="text-xs text-[#86868b]">
                    All sermon outlines, rich text blocks, highlights, and
                    scripture cards in PostgreSQL.
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 font-semibold text-xs">
                  Permanently Deleted
                </span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1d1d1f]">
                    Sharing & Collaboration Provisions
                  </div>
                  <div className="text-xs text-[#86868b]">
                    Shared access permissions (VIEW/EDIT matrices) assigned to
                    collaborators.
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 font-semibold text-xs">
                  Permanently Deleted
                </span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1d1d1f]">
                    Local Offline Storage Cache
                  </div>
                  <div className="text-xs text-[#86868b]">
                    Device SQLite / SecureStore tokens are invalidated and erased
                    upon app logout.
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 font-semibold text-xs">
                  Device Invalidation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
