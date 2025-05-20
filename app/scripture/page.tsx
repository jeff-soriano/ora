'use client'

import { useEffect, useState } from "react";

export default function ScripturePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20 bg-background">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif mb-8">
        Today&rsquo;s Scripture
      </h1>

      {loading ? (
        <div className="mt-6 text-xl text-gray-500 italic font-serif animate-pulse">
          Opening the Word...
        </div>
      ) : (
        <>
          {/* Scripture Block */}
          <div className="max-w-2xl mx-auto mb-6">
            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6">
              Peace I leave with you;<br />
              my peace I give to you. Not<br />
              as the world gives do I give<br />
              to you. Let not your hearts<br />
              be troubled, neither let them<br />
              be afraid.
            </p>
            <div className="text-lg md:text-xl font-serif text-right mt-4 mb-2">
              - John 14:27
            </div>
          </div>

          {/* AI Reflection Block */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="rounded-2xl bg-gray-100 text-gray-900 p-6 md:p-8 shadow-sm flex flex-col space-y-1">
              <div className="flex items-start">
                <span className="text-2xl text-gray-400 mr-2 font-serif">&ldquo;</span>
                <span className="text-lg md:text-xl">
                  Christ speaks peace into the hearts of the anxious. What might He be saying to you today?
                </span>
              </div>
              <div className="flex justify-end items-end w-full space-x-2">
                <span className="text-xs text-gray-500 font-medium">AI</span>
                <span className="text-2xl text-gray-400 font-serif">&rdquo;</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 