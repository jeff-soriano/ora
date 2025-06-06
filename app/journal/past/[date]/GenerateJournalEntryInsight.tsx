"use client";

import { useState, useEffect } from "react";
import LoadingIcon from "@/components/LoadingIcon";
import { generateJournalEntryInsight } from "@/lib/openai";
import AIReflectionBlock from "@/components/AIReflectionBlock";
import AIInsightPrompt from "@/components/AIInsightPrompt";

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
    <AIInsightPrompt
      onClick={handleClick}
      header="Reflect with Ora?"
      body="Ora can offer a quiet, spiritual reflection on your journal — like a gentle voice of encouragement from a digital spiritual director."
      disclaimer="By clicking above, you agree to share your journal entry with a trusted third-party AI (OpenAI) to generate spiritual insight. Your responses won’t be stored or reused outside this device. This is optional and meant to gently support your prayer life."
    />
  );
}
