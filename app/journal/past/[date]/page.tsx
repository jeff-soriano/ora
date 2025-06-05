"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PastJournalEntryPage() {
  const router = useRouter();
  const params = useParams();
  const date = decodeURIComponent(params.date as string);
  const [entry, setEntry] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    const savedEntry = localStorage.getItem(`journal-${date}`);
    const savedTitle = localStorage.getItem(`journal-title-${date}`);
    setEntry(savedEntry);
    setTitle(savedTitle);
  }, [date]);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full px-2 md:px-0">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-2 font-medium">
        Your Entry from
        <br />
        {date}
      </h1>
      <div className="text-xl md:text-2xl font-sans text-center mb-8">
        A glimpse into your journey with God.
      </div>
      <div className="w-full max-w-2xl rounded-2xl border border-[#e5e2da] bg-white px-6 py-8 mb-8">
        {title && (
          <div className="text-2xl md:text-3xl font-serif text-gray-900 whitespace-pre-line font-semibold mb-4">
            {title}
          </div>
        )}
        <div className="text-xl md:text-2xl font-serif text-gray-900 whitespace-pre-line">
          {entry || (
            <span className="text-gray-400">
              (No entry found for this date.)
            </span>
          )}
        </div>
      </div>
      <div className="text-lg font-sans text-center text-gray-700">
        This entry is private and saved only
        <br />
        on this device.
      </div>
      <button
        className="mt-4 mb-6 text-lg font-sans text-black cursor-pointer flex items-center gap-2"
        onClick={() => router.push("/journal/past")}
      >
        <span className="text-2xl">&#8592;</span>{" "}
        <span className="hover:underline">Back to Past Entries</span>
      </button>
    </div>
  );
}
