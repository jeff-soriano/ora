import { fetchBibleVerseCitation, fetchBibleVerse } from "@/lib/openai";

export default async function BiblePassage() {
  const bibleVerse = await fetchBibleVerse();
  const bibleVerseCitation = await fetchBibleVerseCitation(bibleVerse);

  return (
    <div className="max-w-2xl mx-auto mb-6 animate-fade-in">
      <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6">
        {bibleVerse}
      </p>
      <div className="text-lg md:text-xl font-serif text-right mt-4 mb-2">
        - {bibleVerseCitation}
      </div>
    </div>
  );
}
