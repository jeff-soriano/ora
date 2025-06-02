"use client";

import { useState } from "react";
import LoadingIcon from "@/components/LoadingIcon";
import { generateLectioDivinaInsight, fetchBibleVerse } from "@/lib/openai";
import AIReflectionBlock from "@/components/AIReflectionBlock";

export default function GenerateAIInsight({
  lectioReflection,
  meditatioReflection,
  oratioReflection,
}: {
  lectioReflection: string;
  meditatioReflection: string;
  oratioReflection: string;
}) {
  const [aiInsight, setAiInsight] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const bibleVerse = await fetchBibleVerse();
    const aiInsight = await generateLectioDivinaInsight(
      bibleVerse,
      lectioReflection,
      meditatioReflection,
      oratioReflection
    );

    setAiInsight(aiInsight);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-8 ">
        <LoadingIcon />
      </div>
    );
  }

  if (aiInsight) {
    return <AIReflectionBlock aiReflection={aiInsight} />;
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8f5ef] border border-black rounded-2xl shadow-sm">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">💡</span>
        <h2 className="text-xl md:text-3xl font-serif font-bold">
          Want to go deeper?
        </h2>
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-900">
        Let Ora gently reflect on your prayer and offer spiritual insight — like
        a spiritual director, but digital.
      </p>
      <button
        onClick={handleClick}
        className="w-full bg-black text-white md:text-lg font-semibold rounded-lg py-3 mb-2 flex items-center justify-center hover:bg-gray-900 transition-colors cursor-pointer"
      >
        Generate Spiritual Insight <span className="ml-2">&rarr;</span>
      </button>
      <p className="text-sm text-gray-900 italic">
        By clicking above, you agree to share your prayer reflections with a
        trusted third-party AI (OpenAI) to generate spiritual insight. Your
        responses won’t be stored or reused. This is optional and meant to
        gently support your prayer life.
      </p>
    </div>
  );
}
