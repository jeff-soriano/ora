import Link from "next/link";

export default function LectioDivinaPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-8 md:py-20">
      <h1 className="text-5xl md:text-6xl font-serif mb-8">Lectio Divina</h1>
      <p className="max-w-2xl text-xl md:text-2xl font-sans mb-8 text-gray-800">
        Lectio Divina (which means &quot;divine reading&quot;) is an ancient
        form of Christian prayer, which leads you to a deep contemplation of
        Scripture and fruitful conversation with God.
      </p>
      <p className="max-w-2xl text-xl md:text-2xl font-sans mb-12 text-gray-800">
        This app will lead you through a daily Lectio Divina practice. The
        entire prayer can be as long or as short as you like, but we recommend
        spending at least a few minutes of meditation on each step.
      </p>
      <div className="w-full flex justify-center">
        <Link href="/lectio-divina/lectio">
          <button className="bg-amber-800 text-white text-xl md:text-2xl px-8 py-4 rounded-md hover:bg-amber-900 transition-colors hover:cursor-pointer font-semibold shadow-md">
            Begin Lectio Divina
          </button>
        </Link>
      </div>
    </div>
  );
}
