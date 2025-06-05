"use client";

import { useRouter, usePathname } from "next/navigation";

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isToday = pathname === "/journal";

  const buttonClassnames =
    "flex-1 px-3 md:px-6 py-2 text-base md:text-lg font-semibold border-b focus:outline-none transition-colors cursor-pointer";
  const selectedClassnames = "text-black border-black";
  const unselectedClassnames =
    "bg-transparent text-gray-500 hover:border-black hover:text-black";

  return (
    <div className="min-h-screen flex flex-col items-center px-2 md:px-4 py-8 bg-[#f8f5ef]">
      {/* Tab Switcher */}
      <div className="flex mb-8 mt-2 bg-[#f5f3ee] overflow-hidden w-full max-w-md h-12">
        <button
          className={`${buttonClassnames} ${
            isToday ? selectedClassnames : unselectedClassnames
          }`}
          onClick={() => router.push("/journal")}
        >
          Today's Entry
        </button>
        <button
          className={`${buttonClassnames}
            ${!isToday ? selectedClassnames : unselectedClassnames}
          `}
          onClick={() => router.push("/journal/past")}
        >
          View Past Entries
        </button>
      </div>
      {children}
    </div>
  );
}
