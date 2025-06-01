"use client";

export default function CompleteContent() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[#f8f5ef] px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-serif font-semibold text-center mb-4">
        Your Prayer
        <br />
        Journey Today
      </h1>
      <p className="max-w-2xl text-xl md:text-2xl font-serif text-center mb-12 mt-2 text-gray-900">
        These are the words that spoke to your heart, the reflections they
        stirred within you, and the prayer you offered to God. May they remain
        with you as you go.
      </p>
      <div className="w-full max-w-2xl flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Lectio
          </h2>
          <p className="text-2xl md:text-2xl font-serif mb-2">
            &quot;the light, life, shines in the darkness&quot;
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Meditatio
          </h2>
          <p className="text-2xl md:text-2xl font-serif mb-2">
            God&apos;s light always shines, offering hope and courage in even
            the darkest moments.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Oratio
          </h2>
          <p className="text-2xl md:text-2xl font-serif">
            Thank You, Lord, for being my light and my salvation. Help me see
            Your light when I feel surrounded by darkness.
          </p>
        </div>
      </div>
    </div>
  );
}
