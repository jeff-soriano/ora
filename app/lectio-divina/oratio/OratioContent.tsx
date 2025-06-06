"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";
import ReflectionBlock from "@/components/ReflectionBlock";

export default function OratioContent({
  biblePassageComponent,
}: {
  biblePassageComponent: React.ReactNode;
}) {
  const router = useRouter();
  const [oratioReflection, setOratioReflection] = useState("");
  const [meditatioReflection, setMeditatioReflection] = useState("");

  useEffect(() => {
    const storedMeditatioReflection = localStorage.getItem(
      "meditatioReflection"
    );

    if (storedMeditatioReflection) {
      setMeditatioReflection(storedMeditatioReflection);
    } else {
      router.push("/lectio-divina");
    }
  }, [router]);

  const handleNextStep = () => {
    localStorage.setItem("oratioReflection", oratioReflection);
    router.push("/lectio-divina/contemplatio");
  };

  if (!meditatioReflection) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-serif mb-2 text-center">
        Oratio
      </h1>
      <div className="uppercase tracking-widest font-semibold text-lg mb-8 text-center">
        Prayer
      </div>
      <div className="max-w-2xl w-full">
        <p className="text-2xl md:text-3xl md:text-center font-serif mb-8 text-gray-900">
          Read the passage again, then turn your reflection into conversation
          with God. Speak honestly to the Lord.
        </p>
        {biblePassageComponent}
        <ReflectionBlock reflection={meditatioReflection} />
        <label className="block font-bold text-xl md:text-2xl mb-4 text-center text-gray-900">
          How is God inviting you to respond?
        </label>
        <textarea
          className="w-full border border-gray-400 rounded-md px-4 py-3 mb-8 text-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
          value={oratioReflection}
          onChange={(e) => setOratioReflection(e.target.value)}
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
