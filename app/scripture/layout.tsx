export default function ScriptureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 md:py-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif mb-8">
        Today's Scripture
      </h1>
      {children}
    </div>
  );
}
