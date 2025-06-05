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
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [status, setStatus] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTitle = localStorage.getItem(`journal-title-${today}`) || "";
    setTitle(savedTitle);
    const savedEntry = localStorage.getItem(`journal-${today}`) || "";
    setEntry(savedEntry);
  }, [today]);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
    setStatus("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem(`journal-title-${today}`, e.target.value);
      setStatus("Saved \u2713");
    }, 1000);
  }

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
    <div className="animate-fade-in">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
        Your Journal for {today}
      </h1>
      {/* Prompt */}
      <div className="text-xl md:text-2xl font-sans text-center mb-6">
        What would you like to share with God today?
      </div>
      {/* Title Input */}
      <input
        className="w-full max-w-3xl rounded-2xl border border-[#e5e2da] bg-transparent p-4 text-lg md:text-xl font-sans mb-4 focus:outline-none focus:ring-2 focus:ring-amber-800"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title (optional)"
      />
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
