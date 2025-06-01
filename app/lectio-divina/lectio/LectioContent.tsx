"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LectioContent({
  biblePassageComponent,
}: {
  biblePassageComponent: React.ReactNode;
}) {
  const router = useRouter();
  const [lectioReflection, setLectioReflection] = useState("");

  useEffect(() => {
    localStorage.removeItem("lectioReflection");
    localStorage.removeItem("meditatioReflection");
    localStorage.removeItem("oratioReflection");
  }, []);

  const handleNextStep = () => {
    localStorage.setItem("lectioReflection", lectioReflection);
    router.push("/lectio-divina/meditatio");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f5ef] px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-serif mb-2 text-center">
        Lectio
      </h1>
      <div className="uppercase tracking-widest font-semibold text-lg mb-8 text-center">
        Reading
      </div>
      <div className="max-w-2xl w-full">
        <p className="text-2xl md:text-3xl font-serif mb-8 text-center text-gray-900">
          Read the passage slowly and reflect on its meaning.
        </p>
        {biblePassageComponent}
        <label className="block font-bold text-xl md:text-2xl mb-4 text-center text-gray-900">
          What words or phrases stand out to you?
        </label>
        <input
          type="text"
          className="w-full border border-gray-400 rounded-md px-4 py-3 mb-8 text-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
          value={lectioReflection}
          onChange={(e) => setLectioReflection(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={handleNextStep}
            className="bg-black text-white text-lg md:text-xl px-12 py-4 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md hover:cursor-pointer"
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}
