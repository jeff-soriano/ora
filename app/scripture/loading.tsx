function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20 bg-background">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif mb-8">
        Today's Scripture
      </h1>

      <div className="mt-6 text-xl text-gray-500 italic font-serif animate-pulse">
        Opening the Word...
      </div>
    </div>
  );
}

export default Loading;
