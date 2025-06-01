export default function ReflectionBlock({
  reflection,
}: {
  reflection: string;
}) {
  return (
    <div className="bg-gray-200 text-gray-800 p-4 shadow-sm flex flex-col space-y-1 mb-8">
      <p className="text-lg md:text-xl font-serif leading-relaxed font-medium">
        "{reflection}"
      </p>
    </div>
  );
}
