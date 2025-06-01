export default function AIReflectionBlock({
  aiReflection,
}: {
  aiReflection: string;
}) {
  return (
    <div className="max-w-2xl mx-auto mt-6 animate-fade-in">
      <div className="rounded-2xl bg-gray-100 text-gray-900 p-6 md:p-8 shadow-sm flex flex-col space-y-1">
        <div className="flex items-start">
          <span className="text-2xl text-gray-400 mr-2 font-serif">
            &ldquo;
          </span>
          <span className="text-lg md:text-xl">{aiReflection}</span>
        </div>
        <div className="flex justify-end items-end w-full space-x-2">
          <span className="text-xs text-gray-500 font-medium">AI</span>
          <span className="text-2xl text-gray-400 font-serif">&rdquo;</span>
        </div>
      </div>
    </div>
  );
}
