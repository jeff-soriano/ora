"use client";

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </div>
  );
}
