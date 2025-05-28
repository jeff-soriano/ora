import Link from "next/link";

export default function LectioDivinaPage() {
  return (
    <div className="min-h-screen text-center md:text-left flex flex-col items-center px-6 py-12 md:py-20 bg-background">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-serif mb-8">Lectio Divina</h1>

      <p className="max-w-2xl text-xl md:text-2xl font-sans mb-6">
        Lectio Divina (which means &quot;divine reading&quot;) is an ancient
        form of Christian prayer, which leads you to a deep contemplation of
        Scripture and fruitful conversation with God.
      </p>

      <p className="max-w-2xl text-xl md:text-2xl font-sans mb-8">
        This app will lead you through a daily Lectio Divina practice. The
        entire prayer can be as long or as short as you like, but we recommend
        spending at least a few minutes of meditation on each step.
      </p>

      <Link href="/lectio-divina/lectio">
        <button className="bg-amber-800 text-white text-xl md:text-2xl px-6 py-3 rounded-md hover:bg-amber-900 transition-colors hover:cursor-pointer">
          Begin Lectio Divina
        </button>
      </Link>
    </div>
  );
}
