import { cache } from "react";
import { fetchBibleVerse } from "./openai";

const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

export default cache(async () => {
  const bibleVerse = await fetchBibleVerse(today);
  return bibleVerse;
});
