import BiblePassage from "@/components/BiblePassage";
import AIReflectionBlock from "@/components/AIReflectionBlock";
import { fetchBibleVerse, fetchBibleVerseReflection } from "@/lib/openai";

export default async function ScripturePage() {
  const bibleVerse = await fetchBibleVerse();
  const bibleVerseReflection = await fetchBibleVerseReflection(bibleVerse);

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
