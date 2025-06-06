export default function AIInsightPrompt({
  onClick,
  header = "Want to go deeper?",
  body = "Let Ora gently reflect on your prayer and offer spiritual insight — like a spiritual director, but digital.",
  disclaimer = "By clicking above, you agree to share your prayer reflections with a trusted third-party AI (OpenAI) to generate spiritual insight. Your responses won’t be stored or reused. This is optional and meant to gently support your prayer life.",
}: {
  onClick: () => void;
  header?: string;
  body?: string;
  disclaimer?: string;
}) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f8f5ef] shadow-md border border-[#f5f3ee] rounded-2xl shadow-sm">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-1 md:mr-2">🕊️</span>
        <h2 className="text-xl md:text-3xl font-serif font-bold">{header}</h2>
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-900">{body}</p>
      <button
        onClick={onClick}
        className="w-full bg-[#5c4037] hover:bg-[#473126] text-white md:text-lg font-semibold rounded-lg py-3 mb-2 flex items-center justify-center transition-colors cursor-pointer"
      >
        Receive Insight <span className="ml-2">&rarr;</span>
      </button>
      <p className="text-sm text-gray-900 italic">{disclaimer}</p>
    </div>
  );
}
