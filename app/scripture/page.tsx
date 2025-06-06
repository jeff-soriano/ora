import BiblePassage from "@/components/BiblePassage";
import AIReflectionBlock from "@/components/AIReflectionBlock";
import { fetchBibleVerse, fetchBibleVerseReflection } from "@/lib/openai";

export default async function ScripturePage() {
  const bibleVerse = await fetchBibleVerse();
  const bibleVerseReflection = await fetchBibleVerseReflection(bibleVerse);

  return (
    <>
      {/* Scripture Block */}
      <div className="mb-6">
        <BiblePassage />
      </div>

      {/* AI Reflection Block */}
      <AIReflectionBlock aiReflection={bibleVerseReflection} />
    </>
  );
}
