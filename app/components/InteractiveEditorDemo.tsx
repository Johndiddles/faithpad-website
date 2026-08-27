"use client";

import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Columns,
  Share2,
  Folder,
  Check,
  Highlighter,
  SlidersHorizontal,
} from "lucide-react";

interface ScriptureCard {
  id: string;
  reference: string;
  translations: Record<string, string>;
}

const SAMPLE_SCRIPTURES: Record<string, ScriptureCard> = {
  "john-3-16": {
    id: "john-3-16",
    reference: "John 3:16",
    translations: {
      ESV: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
      NIV: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      KJV: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      NLT: "For this is how God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
      AMP: "For God so [greatly] loved and dearly prized the world, that He [even] gave His [One and] only begotten Son, so that whoever believes and trusts in Him [as Savior] shall not perish, but have eternal life.",
    },
  },
  "romans-8-28": {
    id: "romans-8-28",
    reference: "Romans 8:28",
    translations: {
      ESV: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
      NIV: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
      KJV: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      NLT: "And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.",
      AMP: "And we know [with great confidence] that God [who is deeply concerned about us] causes all things to work together [as a plan] for good for those who love God...",
    },
  },
  "ephesians-2-8": {
    id: "ephesians-2-8",
    reference: "Ephesians 2:8-9",
    translations: {
      ESV: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
      NIV: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
      KJV: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.",
      NLT: "God saved you by his grace when you believed. And you can’t take credit for this; it is a gift from God. Salvation is not a reward for the good things we have done...",
      AMP: "For it is by grace [God’s remarkable, undeserved favor] that you have been saved through faith; and this [salvation] is not of yourselves, it is the gift of God...",
    },
  },
};

const SAMPLE_NOTES = [
  {
    id: "sermon-1",
    title: "Sunday Message: The Architecture of Grace",
    folder: "Sermon Series 2026",
    date: "Aug 24, 2026",
  },
  {
    id: "study-2",
    title: "Romans Small Group: Life in the Spirit",
    folder: "Small Group Outlines",
    date: "Aug 20, 2026",
  },
  {
    id: "research-3",
    title: "Covenant Theology & New Covenant Promises",
    folder: "Theology Research",
    date: "Aug 15, 2026",
  },
];

export default function InteractiveEditorDemo() {
  const [selectedNote, setSelectedNote] = useState("sermon-1");
  const [globalTranslation, setGlobalTranslation] = useState("ESV");
  const [expandedVerses, setExpandedVerses] = useState<Record<string, boolean>>({
    "john-3-16": true,
    "romans-8-28": false,
    "ephesians-2-8": true,
  });
  const [customTranslationOverride, setCustomTranslationOverride] = useState<
    Record<string, string>
  >({});
  const [highlightActive, setHighlightActive] = useState(true);

  const toggleVerse = (id: string) => {
    setExpandedVerses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setCardTranslation = (id: string, trans: string) => {
    setCustomTranslationOverride((prev) => ({ ...prev, [id]: trans }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto apple-card overflow-hidden bg-white border border-black/10 shadow-xl">
      {/* Device / Editor Header Bar */}
      <div className="bg-[#f5f5f7] border-b border-black/8 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Mock Window Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          <span className="text-xs font-mono text-[#86868b] ml-2 hidden sm:inline">
            Faith Pad Studio &bull; Live Editor
          </span>
        </div>

        {/* Global Translation Selector Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6e6e73] font-medium hidden sm:inline">
            Default Translation:
          </span>
          <div className="flex items-center bg-white border border-black/10 rounded-lg p-0.5 shadow-2xs">
            {["ESV", "NIV", "KJV", "NLT", "AMP"].map((trans) => (
              <button
                key={trans}
                type="button"
                onClick={() => setGlobalTranslation(trans)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  globalTranslation === trans
                    ? "bg-[#1d1d1f] text-white shadow-xs"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                {trans}
              </button>
            ))}
          </div>
        </div>

        {/* Sync Status Badge */}
        <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Synced to Cloud</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-black/8 min-h-[500px]">
        {/* Left Sidebar: Folder & Notes Navigator */}
        <div className="md:col-span-4 bg-[#fafafc] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
                Folders & Outlines
              </span>
              <span className="text-xs text-[#86868b]">3 Notes</span>
            </div>

            <div className="space-y-1.5">
              {SAMPLE_NOTES.map((note) => {
                const isSelected = selectedNote === note.id;
                return (
                  <button
                    key={note.id}
                    type="button"
                    onClick={() => setSelectedNote(note.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      isSelected
                        ? "bg-white border border-black/10 shadow-xs"
                        : "hover:bg-black/4 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs text-[#c5a028] font-medium mb-1">
                      <Folder className="w-3.5 h-3.5" />
                      <span>{note.folder}</span>
                    </div>
                    <div className="font-semibold text-sm text-[#1d1d1f] line-clamp-1">
                      {note.title}
                    </div>
                    <div className="text-xs text-[#86868b] mt-1">{note.date}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="bg-white border border-black/8 rounded-xl p-3.5 mt-4 text-xs text-[#6e6e73] space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#1d1d1f] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a028]" />
              <span>Interactive Preview</span>
            </div>
            <p>
              Click any scripture badge to expand or collapse verse text. Switch
              translations to see instantaneous YouVersion rendering.
            </p>
          </div>
        </div>

        {/* Right Area: Dynamic Note Canvas */}
        <div className="md:col-span-8 p-6 sm:p-8 bg-white flex flex-col justify-between">
          {/* Note Editor Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-black/6 mb-6">
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <span className="px-2 py-0.5 rounded-md bg-[#f5f5f7] font-medium text-[#1d1d1f]">
                  Sermon Outline
                </span>
                <span>&bull;</span>
                <span>Last edited just now</span>
              </div>

              {/* Toolbar Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHighlightActive(!highlightActive)}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                    highlightActive
                      ? "bg-amber-50 border-amber-300 text-amber-900"
                      : "border-black/10 text-[#6e6e73] hover:bg-black/5"
                  }`}
                  title="Toggle highlight preview"
                >
                  <Highlighter className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium hidden sm:inline">Highlight</span>
                </button>
                <div className="flex items-center gap-1 text-xs text-[#6e6e73] px-2 py-1 rounded-md bg-[#f5f5f7]">
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Shared (EDIT)</span>
                </div>
              </div>
            </div>

            {/* Note Content */}
            <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f]">
                The Architecture of Grace: Understanding Justification
              </h2>

              <p className="text-sm sm:text-base text-[#3a3a3c] leading-relaxed">
                Paul&apos;s theological treatise begins with the comprehensive
                breakdown of human self-reliance. Redemption is not an achievement of
                flesh, but an unmerited dispensation of divine favor.
              </p>

              {/* SCRIPTURE BLOCK 1: John 3:16 */}
              {(() => {
                const item = SAMPLE_SCRIPTURES["john-3-16"];
                const isExpanded = expandedVerses["john-3-16"];
                const activeTrans =
                  customTranslationOverride["john-3-16"] || globalTranslation;
                const verseText =
                  item.translations[activeTrans] || item.translations["ESV"];

                return (
                  <div className="rounded-xl border border-black/10 overflow-hidden bg-[#fafafc] transition-all">
                    <button
                      type="button"
                      onClick={() => toggleVerse("john-3-16")}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-black/2 text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-[#1d1d1f] text-white flex items-center justify-center">
                          <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                        </div>
                        <span className="font-semibold text-sm text-[#1d1d1f]">
                          {item.reference}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#e8e8ed] font-medium text-[#1d1d1f]">
                          {activeTrans}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#86868b]">
                        <span>{isExpanded ? "Collapse" : "Expand verse"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 border-t border-black/6 bg-white animate-in fade-in duration-200">
                        <p className="text-sm font-serif italic text-[#1d1d1f] leading-relaxed border-l-2 border-[#c5a028] pl-3 my-2">
                          &ldquo;{verseText}&rdquo;
                        </p>
                        <div className="flex items-center justify-between pt-2 text-[11px] text-[#86868b]">
                          <span>Source: YouVersion Bible Platform API</span>
                          <div className="flex items-center gap-1">
                            {["ESV", "NIV", "NLT", "AMP"].map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => setCardTranslation("john-3-16", t)}
                                className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                                  activeTrans === t
                                    ? "bg-[#1d1d1f] text-white"
                                    : "hover:bg-black/5 text-[#6e6e73]"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Highlighting Demo Paragraph */}
              <p className="text-sm sm:text-base text-[#3a3a3c] leading-relaxed">
                When examining the Greek root{" "}
                <span className="font-medium text-[#1d1d1f]">charis</span>, we
                discover that righteousness is granted as a finished legal decree.{" "}
                <span
                  className={
                    highlightActive
                      ? "bg-amber-100/90 text-amber-950 px-1 py-0.5 rounded"
                      : ""
                  }
                >
                  &ldquo;Grace cannot be bought, multiplied by ritual, or diminished by
                  past failure.&rdquo;
                </span>
              </p>

              {/* SCRIPTURE BLOCK 2: Ephesians 2:8 (Side-by-Side Comparison Demo) */}
              <div className="rounded-xl border border-black/10 overflow-hidden bg-white">
                <div className="bg-[#f5f5f7] px-4 py-2.5 border-b border-black/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Columns className="w-3.5 h-3.5 text-[#c5a028]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                      Translation Comparison Stack &bull; Ephesians 2:8-9
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-black/8 p-4 gap-4 sm:gap-0 bg-white">
                  <div className="sm:pr-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#1d1d1f]">ESV</span>
                      <span className="text-[10px] text-[#86868b]">Literal Translation</span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif text-[#1d1d1f] leading-relaxed italic">
                      &ldquo;For by grace you have been saved through faith. And this
                      is not your own doing; it is the gift of God, not a result of
                      works, so that no one may boast.&rdquo;
                    </p>
                  </div>

                  <div className="sm:pl-4 pt-3 sm:pt-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#c5a028]">AMP</span>
                      <span className="text-[10px] text-[#86868b]">Amplified Context</span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif text-[#1d1d1f] leading-relaxed italic">
                      &ldquo;For it is by grace [God&apos;s remarkable, undeserved favor]
                      that you have been saved through faith; and this [salvation] is
                      not of yourselves, it is the gift of God...&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note Status Indicator */}
          <div className="pt-6 mt-6 border-t border-black/6 flex items-center justify-between text-xs text-[#86868b]">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Auto-saved locally and synchronized with PostgreSQL cloud</span>
            </div>
            <span className="font-mono text-[11px]">3 blocks &bull; 412 words</span>
          </div>
        </div>
      </div>
    </div>
  );
}
