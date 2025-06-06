"use client";

import { useState, useEffect } from "react";
import LoadingIcon from "@/components/LoadingIcon";
import { generateJournalEntryInsight } from "@/lib/openai";
import AIReflectionBlock from "@/components/AIReflectionBlock";

export default function GenerateJournalEntryInsight({
  journalEntry,
  date,
}: {
  journalEntry: string;
  date: string;
}) {
  const [aiInsight, setAiInsight] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedAiInsight = localStorage.getItem(`journalEntryInsight-${date}`);
    if (storedAiInsight) {
      setAiInsight(storedAiInsight);
    }
  }, [date]);

  const handleClick = async () => {
    setIsLoading(true);

    const aiInsight = await generateJournalEntryInsight(journalEntry);

    setAiInsight(aiInsight);
    setIsLoading(false);
    localStorage.setItem(`journalEntryInsight-${date}`, aiInsight);
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
        <span className="text-2xl mr-2">✨</span>
        <h2 className="text-xl md:text-3xl font-serif font-bold">
          Would you like Ora to gently reflect on this entry?
        </h2>
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-900">
        Let Ora gently reflect on your journal entry and offer spiritual insight
        — like a spiritual director, but digital.
      </p>
      <button
        onClick={handleClick}
        className="w-full bg-black text-white md:text-lg font-semibold rounded-lg py-3 mb-2 flex items-center justify-center hover:bg-gray-900 transition-colors cursor-pointer"
      >
        Generate Spiritual Insight <span className="ml-2">&rarr;</span>
      </button>
      <p className="text-sm text-gray-900 italic">
        By clicking above, you agree to share your journal entry with a trusted
        third-party AI (OpenAI) to generate spiritual insight. Your responses
        won’t be stored or reused. This is optional and meant to gently support
        your prayer life.
      </p>
    </div>
  );
}
