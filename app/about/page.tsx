export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 animate-fade-in">
      <div className="max-w-2xl w-full mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-6">
          About
        </h1>
        <div className="text-xl md:text-2xl font-sans text-center mb-6 text-gray-900">
          Ora is a simple tool for slowing down, praying deeply, and connecting
          with the Word of God — right where you are.
        </div>
        <div className="italic text-lg md:text-xl text-center mb-10 text-gray-700">
          ‘Speak, Lord, your servant is listening.’
          <br />
          <span className="not-italic text-base">— 1 Sam 3:10</span>
        </div>
        <h2 className="text-2xl font-serif font-bold mb-4">
          What you can do with Ora
        </h2>
        <ul className="mb-10 space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-2xl mr-1">🙏</span>
            <span className="text-lg md:text-xl font-sans text-gray-900">
              <b>Pray with Scripture</b> — Start your day with a Bible verse and
              quiet reflection.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl mr-1">✝️</span>
            <span className="text-lg md:text-xl font-sans text-gray-900">
              <b>Practice Lectio Divina</b> — Let God speak through His Word in
              four peaceful steps.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl mr-1">📖</span>
            <span className="text-lg md:text-xl font-sans text-gray-900">
              <b>Keep a Journal</b> — Capture your conversations with God, one
              day at a time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl mr-1">🕊️</span>
            <span className="text-lg md:text-xl font-sans text-gray-900">
              <b>Reflect with Insight</b>{" "}
              <span className="text-[#a68c6d]">*</span> — Let Ora gently guide
              you further with AI-powered spiritual encouragement.
            </span>
          </li>
        </ul>
        <h2 className="text-2xl font-serif font-bold mb-4">
          <span className="text-[#a68c6d]">*</span> Privacy & AI use
        </h2>
        <div className="text-lg md:text-xl font-sans mb-4 text-gray-900">
          Ora uses AI thoughtfully, never invasively.
        </div>
        <ul className="list-disc pl-6 mb-6 text-gray-900">
          <li>Your reflections are stored only on your device</li>
          <li>AI is only used when you opt in</li>
          <li>
            Responses are never stored or reused by <b>third parties</b>
          </li>
        </ul>
        <div className="text-base md:text-lg font-sans mb-6 text-gray-900">
          As a busy parent, I built Ora to create an open door to prayer, not
          another task on a checklist. It's for those who long to grow closer to
          God in a gentle, unpressured way.
        </div>
        <div className="text-base md:text-lg font-sans mb-10 text-gray-900">
          May Ora be a small light in your day — a space for stillness, prayer,
          and grace.
        </div>
        <div className="italic text-lg md:text-xl text-center text-gray-700">
          ‘In the silence of the heart, God speaks.’
          <br />
          <span className="not-italic text-base">— St. Teresa of Calcutta</span>
        </div>
      </div>
    </div>
  );
}
