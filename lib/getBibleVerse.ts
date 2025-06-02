import { cache } from "react";
import { fetchBibleVerse } from "./openai";

export default cache(fetchBibleVerse);
