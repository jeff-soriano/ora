import { cache } from "react";
import OpenAI from "openai";
import BiblePassage from "@/components/BiblePassage";
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

function BibleVerseReflection({
  bibleVerseReflection,
}: {
  bibleVerseReflection: string;
}) {
  return (
    <div className="max-w-2xl mx-auto mt-6 animate-fade-in">
      <div className="rounded-2xl bg-gray-100 text-gray-900 p-6 md:p-8 shadow-sm flex flex-col space-y-1">
        <div className="flex items-start">
          <span className="text-2xl text-gray-400 mr-2 font-serif">
            &ldquo;
          </span>
          <span className="text-lg md:text-xl">{bibleVerseReflection}</span>
        </div>
        <div className="flex justify-end items-end w-full space-x-2">
          <span className="text-xs text-gray-500 font-medium">AI</span>
          <span className="text-2xl text-gray-400 font-serif">&rdquo;</span>
        </div>
      </div>
    </div>
  );
}

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
      <BibleVerseReflection bibleVerseReflection={bibleVerseReflection} />
    </div>
  );
}
