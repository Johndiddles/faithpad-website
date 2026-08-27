"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  // Building2,
  // Bug,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  // ShieldCheck,
  Send,
} from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "How does Scripture insertion and YouVersion integration work?",
    answer:
      "Faith Pad provides two easy ways to insert scripture: You can type a standard reference (like 'John 3:16' or 'Rom 8:28') which our smart parsing engine resolves into a collapsible badge, or you can use the manual bottom-sheet picker to select book, chapter, verse, and version.",
  },
  {
    question: "Which Bible translations are supported?",
    answer:
      "Faith Pad supports the most widely read global translations through the YouVersion Platform SDK, including ESV (English Standard Version), NIV (New International Version), KJV (King James Version), NLT (New Living Translation), AMP (Amplified Bible) and more. You can set a global default in Settings or compare translations side by side.",
  },
  {
    question: "Can I use Faith Pad offline during services with weak WiFi?",
    answer:
      "Yes. Faith Pad includes a local offline synchronization queue. You can write, format notes, and expand previously cached scripture passages completely offline. When network connectivity is restored, deltas are synchronized safely to the cloud.",
  },
  {
    question:
      "How do I request an account deletion or cancel a pending request?",
    answer:
      "You can submit an account deletion request on our dedicated Account Deletion page. Every deletion request has a strict 30-day grace period. If you log in to your account at any point during these 30 days, your deletion is automatically canceled and your data is preserved. You can also write to support to cancel anytime before the 30 days elapse.",
  },
  // {
  //   question: "How does note sharing and collaboration work?",
  //   answer:
  //     "You can share any note or study outline by entering a collaborator's email address and choosing their permission level: VIEW (read-only) or EDIT (collaborative real-time editing).",
  // },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate high-speed asynchronous processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId(`FP-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO / TITLE SECTION */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-black/8 text-xs font-medium text-[#1d1d1f] mb-6">
          <Mail className="w-3.5 h-3.5 text-[#c5a028]" />
          <span>Support</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] max-w-3xl mx-auto leading-tight">
          How can our team help you?
        </h1>

        <p className="mt-6 text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Have questions about Faith Pad, suggestions for new features, or
          interested in equipping your church ministry? We&apos;d love to hear
          from you.
        </p>
      </section>

      {/* 2. CONTACT CHANNELS & FORM GRID */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Support Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="apple-card p-6 bg-[#fafafc]">
              <h2 className="text-base font-bold text-[#1d1d1f] tracking-tight mb-1">
                Direct Contact Channels
              </h2>
              <p className="text-xs text-[#86868b] mb-4">
                Our support team typically responds within 24 hours on business
                days.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-black/8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]">
                      <MessageSquare className="w-4 h-4 text-[#c5a028]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1d1d1f]">
                        General & App Support
                      </div>
                      <a
                        href="mailto:support@faithpad.app"
                        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] font-mono"
                      >
                        support@faithpad.app
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="p-4 rounded-xl bg-white border border-black/8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]">
                      <Building2 className="w-4 h-4 text-[#c5a028]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1d1d1f]">
                        Church & Ministry Partnerships
                      </div>
                      <a
                        href="mailto:partners@faithpad.app"
                        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] font-mono"
                      >
                        partners@faithpad.app
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-black/8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1d1d1f]">
                        Privacy & Data Compliance
                      </div>
                      <a
                        href="mailto:privacy@faithpad.app"
                        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] font-mono"
                      >
                        privacy@faithpad.app
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Quick Link Card to Deletion Page */}
            <div className="apple-card p-6 bg-white border-l-4 border-l-[#1d1d1f]">
              <h3 className="text-sm font-bold text-[#1d1d1f] mb-1">
                Looking for Account Deletion?
              </h3>
              <p className="text-xs text-[#6e6e73] mb-3">
                Need to submit a data erasure request or cancel an active 30-day
                deletion?
              </p>
              <Link
                href="/delete-account"
                className="text-xs font-semibold text-[#1d1d1f] hover:underline flex items-center gap-1"
              >
                <span>Visit Account Deletion Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="apple-card p-8 sm:p-10 bg-white">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#6e6e73] max-w-md mx-auto">
                    Thank you for reaching out! Your ticket has been logged with
                    ID:{" "}
                    <span className="font-mono font-bold text-[#1d1d1f]">
                      {ticketId}
                    </span>
                    . We will respond to{" "}
                    <span className="font-semibold text-[#1d1d1f]">
                      {formState.email}
                    </span>{" "}
                    shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          subject: "support",
                          message: "",
                        });
                      }}
                      className="apple-button-secondary px-6 py-2.5 text-xs uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-1">
                      Send us a message
                    </h2>
                    <p className="text-xs sm:text-sm text-[#86868b]">
                      Fill out the form below and we will get back to you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Pastor John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-black transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@church.org"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-black transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Category */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                    >
                      Inquiry Category *
                    </label>
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-black transition-all"
                    >
                      <option value="support">
                        General Support & Account Assistance
                      </option>
                      <option value="feedback">
                        Feature Feedback & Translation Suggestions
                      </option>
                      {/* <option value="partnership">
                        Church & Ministry Partnerships
                      </option> */}
                      <option value="bug">Technical Bug Report</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#1d1d1f] mb-1.5"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Share your question, suggestion, or request with as much detail as possible..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-black/12 bg-[#fafafc] text-sm text-[#1d1d1f] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-black transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="apple-button-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#86868b] text-center">
                    We protect your privacy according to our{" "}
                    <Link
                      href="/privacy"
                      className="underline hover:text-[#1d1d1f]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] border-t border-black/8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#c5a028] font-bold">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="apple-card overflow-hidden bg-white border border-black/8 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-black/2 cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#1d1d1f]">
                      {item.question}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#86868b] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#86868b] shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6e6e73] leading-relaxed border-t border-black/5 pt-3 animate-in fade-in duration-150">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
