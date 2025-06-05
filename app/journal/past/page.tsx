"use client";
import { useRouter } from "next/navigation";

export default function PastJournalPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-2">
        Your Journal
        <br />
        Entries
      </h1>
      <div className="text-xl md:text-2xl font-sans text-center mb-8">
        Return to what the Lord has shown you.
      </div>
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
        onClick={() => router.push("/journal")}
      >
        Start New Entry <span className="ml-2">&rarr;</span>
      </button>
    </div>
  );
}
