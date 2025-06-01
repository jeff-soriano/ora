"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/LoadingPage";

export default function CompleteContent({
  biblePassageComponent,
}: {
  biblePassageComponent: React.ReactNode;
}) {
  const router = useRouter();
  const [lectioReflection, setLectioReflection] = useState("");
  const [meditatioReflection, setMeditatioReflection] = useState("");
  const [oratioReflection, setOratioReflection] = useState("");

  useEffect(() => {
    const storedLectioReflection = localStorage.getItem("lectioReflection");
    const storedMeditatioReflection = localStorage.getItem(
      "meditatioReflection"
    );
    const storedOratioReflection = localStorage.getItem("oratioReflection");

    if (
      storedLectioReflection &&
      storedMeditatioReflection &&
      storedOratioReflection
    ) {
      setLectioReflection(storedLectioReflection);
      setMeditatioReflection(storedMeditatioReflection);
      setOratioReflection(storedOratioReflection);
    } else {
      router.push("/lectio-divina");
    }
  }, [router]);

  if (!lectioReflection || !meditatioReflection || !oratioReflection) {
    return <LoadingPage />;
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f5ef] px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4">
        Your Prayer
        <br />
        Journey Today
      </h1>
      <p className="max-w-2xl text-xl md:text-2xl font-serif md:text-center mb-12 mt-2 text-gray-900">
        These are the words that spoke to your heart, the reflections they
        stirred within you, and the prayer you offered to God. May they remain
        with you as you go.
      </p>
      {biblePassageComponent}
      <div className="w-full max-w-2xl flex flex-col md:text-center gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Lectio
          </h2>
          <p className="text-2xl md:text-2xl font-serif mb-2">
            &quot;{lectioReflection}&quot;
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Meditatio
          </h2>
          <p className="text-2xl md:text-2xl font-serif mb-2">
            &quot;{meditatioReflection}&quot;
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Oratio
          </h2>
          <p className="text-2xl md:text-2xl font-serif">
            &quot;{oratioReflection}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
