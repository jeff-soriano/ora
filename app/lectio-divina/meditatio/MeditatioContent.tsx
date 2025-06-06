"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";
import ReflectionBlock from "@/components/ReflectionBlock";

export default function MeditatioContent({
  biblePassageComponent,
}: {
  biblePassageComponent: React.ReactNode;
}) {
  const router = useRouter();
  const [meditatioReflection, setMeditatioReflection] = useState("");
  const [lectioReflection, setLectioReflection] = useState("");

  useEffect(() => {
    const storedLectioReflection = localStorage.getItem("lectioReflection");
    if (storedLectioReflection) {
      setLectioReflection(storedLectioReflection);
    } else {
      router.push("/lectio-divina");
    }
  }, [router]);

  const handleNextStep = () => {
    localStorage.setItem("meditatioReflection", meditatioReflection);
    router.push("/lectio-divina/oratio");
  };

  if (!lectioReflection) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-serif mb-2 text-center">
        Meditatio
      </h1>
      <div className="uppercase tracking-widest font-semibold text-lg mb-8 text-center">
        Meditation
      </div>
      <div className="max-w-2xl w-full">
        <p className="text-2xl md:text-3xl md:text-center font-serif mb-8 text-gray-900">
          Re-read the passage, then ponder the words you received in Lectio.
          Contemplate how they apply to your life.
        </p>
        {biblePassageComponent}
        <ReflectionBlock reflection={lectioReflection} />
        <label className="block font-bold text-xl md:text-2xl mb-4 text-center text-gray-900">
          What is God saying to you through these words?
        </label>
        <textarea
          className="w-full border border-gray-400 rounded-md px-4 py-3 mb-8 text-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
          value={meditatioReflection}
          onChange={(e) => setMeditatioReflection(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            onClick={handleNextStep}
            className="bg-black text-white text-lg md:text-xl px-12 py-4 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md hover:cursor-pointer"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
