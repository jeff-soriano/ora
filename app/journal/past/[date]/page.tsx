"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import GenerateJournalEntryInsight from "./GenerateJournalEntryInsight";
import LoadingPage from "@/components/LoadingPage";

export default function PastJournalEntryPage() {
  const router = useRouter();
  const params = useParams();
  const date = decodeURIComponent(params.date as string);
  const [entry, setEntry] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedEntry = localStorage.getItem(`journal-${date}`);
    const savedTitle = localStorage.getItem(`journal-title-${date}`);
    setEntry(savedEntry);
    setTitle(savedTitle);
    setIsLoading(false);
  }, [date]);

  function handleDelete() {
    localStorage.removeItem(`journal-${date}`);
    localStorage.removeItem(`journal-title-${date}`);
    localStorage.removeItem(`journalEntryInsight-${date}`);
    setShowModal(false);
    router.push("/journal/past");
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl h-full px-2 md:px-0 animate-fade-in">
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
      {entry && (
        <GenerateJournalEntryInsight journalEntry={entry} date={date} />
      )}
      <div className="text-lg font-sans text-center text-gray-700 mt-4">
        This entry is private and saved only
        <br />
        on this device.
      </div>
      <button
        className="mt-4 mb-2 text-lg font-sans text-black cursor-pointer flex items-center gap-2"
        onClick={() => router.push("/journal/past")}
      >
        <span className="text-2xl">&#8592;</span>{" "}
        <span className="hover:underline">Back to Past Entries</span>
      </button>
      <button
        className="cursor-pointer mt-2 mb-6 bg-[#924343] hover:bg-[#7d3a3a] text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
        onClick={() => setShowModal(true)}
      >
        Delete This Entry
      </button>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-4 text-center text-[#a15555]">
              Delete This Entry?
            </h3>
            <p className="text-lg font-sans text-center mb-6 text-gray-800">
              This will permanently delete all data associated with this entry
              from this device. This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-5 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="cursor-pointer bg-[#924343] hover:bg-[#7d3a3a] text-white font-semibold px-5 py-2 rounded-lg"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
