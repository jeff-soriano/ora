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
  const selectedClassnames =
    "font-semibold bg-white text-black rounded-full focus:outline-none shadow-sm";
  const unselectedClassnames = "text-gray-700 focus:outline-none";

  const handleClick = () => {
    if (isToday) {
      router.push("/journal/past");
    } else {
      router.push("/journal");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-[#f8f5ef]">
      {/* Tab Switcher */}
      <button
        onClick={handleClick}
        className="flex mb-8 mt-2 rounded-full bg-[#f5f3ee] overflow-hidden border border-[#e5e2da] cursor-pointer"
      >
        <div
          className={`px-6 py-2 text-lg ${
            isToday ? selectedClassnames : unselectedClassnames
          }`}
        >
          Today's Entry
        </div>
        <div
          className={`px-6 py-2 text-lg ${
            isToday ? unselectedClassnames : selectedClassnames
          }`}
        >
          View Past Entries
        </div>
      </button>
      {children}
    </div>
  );
}
