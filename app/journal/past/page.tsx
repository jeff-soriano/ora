"use client";

import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import JournalEntriesHeader from "./JournalEntriesHeader";

interface JournalEntry {
  date: string;
  title: string;
  entry: string;
}

function getAllJournalEntries(): JournalEntry[] {
  const entries: JournalEntry[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (
      key &&
      key.startsWith("journal-") &&
      !key.startsWith("journal-title-")
    ) {
      const date = key.replace("journal-", "");
      const entry = localStorage.getItem(key) || "";
      const title = localStorage.getItem(`journal-title-${date}`) || "";
      if (entry.trim()) {
        entries.push({ date, title, entry });
      }
    }
  }
  // Sort by date descending
  return entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function PastJournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    setEntries(getAllJournalEntries());
  }, []);

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <JournalEntriesHeader />
        <div className="text-2xl md:text-3xl font-serif text-center mb-2">
          You haven't recorded
          <br />
          any journal entries yet.
        </div>
        <div className="text-lg md:text-xl font-sans text-center mb-8">
          Begin today and see what the Lord speaks to your heart.
        </div>
        <button
          className="rounded-2xl border border-[#e5e2da] bg-white px-8 py-4 text-xl md:text-2xl font-semibold font-sans flex items-center gap-2 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => (window.location.href = "/journal")}
        >
          Start New Entry <span className="ml-2">&rarr;</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <JournalEntriesHeader />
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {entries.map((entry) => (
          <button
            key={entry.date}
            className="rounded-2xl border border-[#e5e2da] bg-white px-6 py-4 shadow-sm text-left cursor-pointer transition hover:bg-gray-50"
            onClick={() =>
              (window.location.href = `/journal/past/${encodeURIComponent(
                entry.date
              )}`)
            }
          >
            <div className="flex items-center gap-2 mb-1">
              <FaRegCalendarAlt className="text-xl text-gray-500" />
              <span className="text-xl md:text-2xl font-serif font-semibold">
                {entry.date}
              </span>
            </div>
            <div className="text-lg md:text-xl font-sans text-gray-800 truncate">
              {entry.title || entry.entry.split("\n")[0]}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
