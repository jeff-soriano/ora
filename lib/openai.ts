"use server";

import OpenAI from "openai";
import { Redis } from "@upstash/redis";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const fetchBibleVerse = async () => {
  const today = new Date().toISOString().split("T")[0];
  let verse = await redis.get(`bibleVerse:${today}`);
  if (verse) return verse as string;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Today is ${today}. Choose a passage from the Bible that is in line with today's Catholic lectionary reading and is fruitful for spiritual reflection. The passage should be 3-4 verses long. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the passage, no other text. Do not return the citation of the passage, just the text of the passage. Do not add quotation marks to the passage.`,
  });
  verse = response.output_text;

  await redis.set(`bibleVerse:${today}`, verse, {
    ex: getSecondsUntilMidnight(),
  });

  return verse as string;
};

export const fetchBibleVerseCitation = async (bibleVerse: string) => {
  const cacheKey = `bibleVerseCitation:${bibleVerse}`;
  let citation = await redis.get(cacheKey);
  if (citation) return citation as string;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Given the following passage from the Bible, return the citation of the passage. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the citation, no other text.\n${bibleVerse}`,
  });
  citation = response.output_text;
  await redis.set(cacheKey, citation, { ex: getSecondsUntilMidnight() });
  return citation as string;
};

export const fetchBibleVerseReflection = async (bibleVerse: string) => {
  const cacheKey = `bibleVerseReflection:${bibleVerse}`;
  let reflection = await redis.get(cacheKey);
  if (reflection) return reflection as string;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `You are a warm, trusted, Christian spiritual counselor. Write 2–3 sentences of gentle, pastoral reflection that invites the reader into contemplative prayer based on the following passage from the Bible, ending with a question that is fruitful for spiritual reflection:\n${bibleVerse}`,
  });
  reflection = response.output_text;
  await redis.set(cacheKey, reflection, { ex: getSecondsUntilMidnight() });
  return reflection as string;
};

export const generateLectioDivinaInsight = async (
  bibleVerse: string,
  lectioReflection: string,
  meditatioReflection: string,
  oratioReflection: string
) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `You are a warm, trusted, Christian spiritual counselor. Based on the following bible verse and lectio divina reflections, summarize the user's prayer journey in 1-2 sentences, then generate related pastoral guidance and insight in 2-3 sentences which will help this person grow closer to God.
    Bible verse: ${bibleVerse}
    Lectio reflection: ${lectioReflection}
    Meditatio reflection: ${meditatioReflection}
    Oratio reflection: ${oratioReflection}`,
  });
  return response.output_text;
};

export const generateJournalEntryInsight = async (journalEntry: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `You are a warm, trusted, Christian spiritual counselor. Based on the following journal entry, generate a pastoral reflection in 2-3 sentences which will help this person grow closer to God. Then offer a single verse of the Bible that is relevant to the journal entry (do not prepend with something like "Bible verse:" just end with the plain text of the verse).
    Journal entry: ${journalEntry}`,
  });
  return response.output_text;
};

const getSecondsUntilMidnight = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);
  return Math.floor((tomorrow.getTime() - now.getTime()) / 1000);
};
