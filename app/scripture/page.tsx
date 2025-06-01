import { cache } from "react";
import OpenAI from "openai";
import BiblePassage from "@/components/BiblePassage";
import AIReflectionBlock from "@/components/AIReflectionBlock";
import { fetchBibleVerse } from "@/lib/openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getBibleVerse = cache(async (date: string) => {
  return await fetchBibleVerse(date);
});

const getBibleVerseReflection = cache(async (bibleVerse: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Write as if you are a warm, trusted spiritual director guiding someone through quiet time with God. Write 2–3 sentences of gentle, pastoral reflection that invites the reader into contemplative prayer based on the following passage from the Bible, ending with a question that is fruitful for spiritual reflection:
    ${bibleVerse}`,
  });
  return response.output_text;
});

export default async function ScripturePage() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const bibleVerse = await getBibleVerse(today);
  const bibleVerseReflection = await getBibleVerseReflection(bibleVerse);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 md:py-20 bg-background">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif mb-8">
        Today&rsquo;s Scripture
      </h1>

      {/* Scripture Block */}
      <BiblePassage />

      {/* AI Reflection Block */}
      <AIReflectionBlock aiReflection={bibleVerseReflection} />
    </div>
  );
}
