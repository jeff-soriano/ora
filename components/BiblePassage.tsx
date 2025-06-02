import { cache } from "react";
import { fetchBibleVerseCitation } from "@/lib/openai";
import getBibleVerse from "@/lib/getBibleVerse";

// Revalidate the page every 24 hours so that we get a new passage
// every day. Doing this for MVP but ideal solution is using something
// like Redis. Because really this is only invalidating 24 hours after
// the first request. So if the first cache happens at 11:59 pm we
// won't get a new one at 12:00 am
export const revalidate = 86400; // 24 hours in seconds

const getBibleVerseCitation = cache(async (bibleVerse: string) => {
  return await fetchBibleVerseCitation(bibleVerse);
});

export default async function BiblePassage() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const bibleVerse = await getBibleVerse(today);
  console.log("bibleVerse", bibleVerse);
  const bibleVerseCitation = await getBibleVerseCitation(bibleVerse);

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
