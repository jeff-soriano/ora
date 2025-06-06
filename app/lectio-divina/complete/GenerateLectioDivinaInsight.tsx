"use client";

import { useState, useEffect } from "react";
import LoadingIcon from "@/components/LoadingIcon";
import { generateLectioDivinaInsight, fetchBibleVerse } from "@/lib/openai";
import AIReflectionBlock from "@/components/AIReflectionBlock";
import AIInsightPrompt from "@/components/AIInsightPrompt";

export default function GenerateLectioDivinaInsight({
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

  useEffect(() => {
    const storedAiInsight = localStorage.getItem("aiInsight");
    if (storedAiInsight) {
      setAiInsight(storedAiInsight);
    }
  }, []);

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
    localStorage.setItem("aiInsight", aiInsight);
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
      header="Want to go deeper?"
      body="Let Ora gently reflect on your prayer and offer spiritual insight — like
        a spiritual director, but digital."
      disclaimer="By clicking above, you agree to share your prayer reflections with a
        trusted third-party AI (OpenAI) to generate spiritual insight. Your
        responses won’t be stored or reused outside this device. This is optional and meant to
        gently support your prayer life."
    />
  );
}
