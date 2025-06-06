"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/LoadingPage";

export default function ContemplatioStep() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLectioReflection = localStorage.getItem("lectioReflection");
    const storedMeditatioReflection = localStorage.getItem(
      "meditatioReflection"
    );
    const storedOratioReflection = localStorage.getItem("oratioReflection");

    if (
      !storedLectioReflection ||
      !storedMeditatioReflection ||
      !storedOratioReflection
    ) {
      router.push("/lectio-divina");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleNextStep = () => {
    router.push("/lectio-divina/complete");
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-5xl md:text-6xl font-serif mb-2 text-center">
        Contemplatio
      </h1>
      <div className="uppercase tracking-widest font-semibold text-lg mb-8 text-center">
        Contemplation
      </div>
      <div className="max-w-2xl w-full">
        <p className="text-2xl md:text-3xl font-serif mb-8 text-center text-gray-900">
          Be with God. Dwell in the Word. Let it transform you without needing
          to say or do anything.
        </p>
        <p className="block font-bold text-xl md:text-2xl mb-4 text-center text-gray-900 mb-8">
          Let go of thoughts and words. Rest in God&apos;s presence.
        </p>
        <p className="text-xl md:text-2xl font-serif mb-8 text-center text-gray-900">
          When you&apos;re ready, click the button below to continue.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleNextStep}
            className="bg-black text-white md:text-xl px-12 py-4 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md hover:cursor-pointer"
          >
            Complete My Prayer
          </button>
        </div>
      </div>
    </div>
  );
}
