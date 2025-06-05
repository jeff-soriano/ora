"use client";

import { useState, useEffect, useRef } from "react";

function getTodayString() {
  return new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPage() {
  const today = getTodayString();
  const [entry, setEntry] = useState("");
  const [status, setStatus] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`journal-${today}`) || "";
    setEntry(saved);
  }, [today]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setEntry(e.target.value);
    setStatus("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(`journal-${today}`, e.target.value);
      setStatus("Saved \u2713");
    }, 1000); // 1 second debounce
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-[#f8f5ef]">
      {/* Tab Switcher */}
      <div className="flex mb-8 mt-2 rounded-full bg-[#f5f3ee] overflow-hidden border border-[#e5e2da]">
        <button className="px-6 py-2 text-lg font-semibold bg-white text-black rounded-full focus:outline-none shadow-sm">
          Today's Entry
        </button>
        <button className="px-6 py-2 text-lg text-gray-700 focus:outline-none">
          View Past Entries
        </button>
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
        Your Journal for
        <br />
        {today}
      </h1>
      {/* Prompt */}
      <div className="text-xl md:text-2xl font-sans text-center mb-6">
        What would you like to share with God today?
      </div>
      {/* Textarea */}
      <textarea
        className="w-full max-w-3xl h-64 md:h-80 rounded-2xl border border-[#e5e2da] bg-transparent p-6 text-lg md:text-xl font-sans mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-amber-800"
        value={entry}
        onChange={handleChange}
        placeholder="Write your journal entry here..."
      />
      {/* Saved Status */}
      <div className="text-lg font-sans text-center mb-2">{status}</div>
      <div className="text-lg font-sans text-center text-gray-700">
        Your journal is saved privately on this device.
      </div>
    </div>
  );
}
