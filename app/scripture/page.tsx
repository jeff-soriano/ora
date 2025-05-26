import OpenAI from "openai";

const client = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

// Revalidate the page every 24 hours so that we get a new passage
// every day. Doing this for MVP but ideal solution is using something 
// like Redis. Because really this is only invalidating 24 hours after 
// the first request. So if the first cache happens at 11:59 pm we 
// won't get a new one at 12:00 am
export const revalidate = 86400; // 24 hours in seconds

const getBibleVerse = async (date: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Today is ${date}. Choose a passage from the Bible that is in line with today's Catholic lectionary reading and is fruitful for spiritual reflection. The passage should be 3-4 verses long. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the passage, no other text. Do not return the citation of the passage, just the text of the passage. Do not add quotation marks to the passage.`
  });
  return response.output_text;
};

const getBibleVerseCitation = async (bibleVerse: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Given the following passage from the Bible, return the citation of the passage. Use the Revised Standard Version 2nd Catholic Edition(RSV) of the Bible. Only return the citation, no other text.
    ${bibleVerse}`
  });
  return response.output_text;
};

const getBibleVerseReflection = async (bibleVerse: string) => {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Write as if you are a warm, trusted spiritual director guiding someone through quiet time with God. Write 2–3 sentences of gentle, pastoral reflection that invites the reader into contemplative prayer based on the following passage from the Bible, ending with a question that is fruitful for spiritual reflection:
    ${bibleVerse}`
  });
  return response.output_text;
};

export default async function ScripturePage() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const bibleVerse = await getBibleVerse(today);
  const bibleVerseCitation = await getBibleVerseCitation(bibleVerse);
  const bibleVerseReflection = await getBibleVerseReflection(bibleVerse);

  return (
      <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20 bg-background">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif mb-8">
        Today&rsquo;s Scripture
      </h1>

    
          {/* Scripture Block */}
          <div className="max-w-2xl mx-auto mb-6 animate-fade-in">
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6">
              {bibleVerse}
            </p>
            <div className="text-lg md:text-xl font-serif text-right mt-4 mb-2">
              - {bibleVerseCitation}
            </div>
          </div>

          {/* AI Reflection Block */}
          <div className="max-w-2xl mx-auto mt-6 animate-fade-in">
            <div className="rounded-2xl bg-gray-100 text-gray-900 p-6 md:p-8 shadow-sm flex flex-col space-y-1">
              <div className="flex items-start">
                <span className="text-2xl text-gray-400 mr-2 font-serif">&ldquo;</span>
                <span className="text-lg md:text-xl">
                  {bibleVerseReflection}
                </span>
              </div>
              <div className="flex justify-end items-end w-full space-x-2">
                <span className="text-xs text-gray-500 font-medium">AI</span>
                <span className="text-2xl text-gray-400 font-serif">&rdquo;</span>
              </div>
            </div>
          </div>
      </div>
  );
} 