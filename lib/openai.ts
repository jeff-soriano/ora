import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const fetchBibleVerse = async (date: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Today is ${date}. Choose a passage from the Bible that is in line with today's Catholic lectionary reading and is fruitful for spiritual reflection. The passage should be 3-4 verses long. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the passage, no other text. Do not return the citation of the passage, just the text of the passage. Do not add quotation marks to the passage.`,
  });
  return response.output_text;
};

export const fetchBibleVerseCitation = async (bibleVerse: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Given the following passage from the Bible, return the citation of the passage. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the citation, no other text.
    ${bibleVerse}`,
  });
  return response.output_text;
};
