import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-3xl w-full text-center space-y-8">
        <p className="text-lg md:text-xl italic">Be still, and know that I am God.</p>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif">
            Enter into prayer.
            <br />
            Find rest in Him.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ora is a quiet space for journaling, Scripture reflection, and guided prayer—powered by AI, centered in Christ.
          </p>
        </div>

        <Link href="/journal">
          <button className="px-8 py-3 bg-white border border-black rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
            Begin Prayer
          </button>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <Link href="/scripture" className="group">
          <div className="p-8 rounded-2xl border text-center space-y-4 hover:border-black transition-colors cursor-pointer">
            <div className="flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6z"/>
              </svg>
            </div>
            <h2 className="text-xl font-serif">Daily Scripture</h2>
            <p className="text-gray-600">Read and reflect on the Word of God, one day at a time</p>
          </div>
        </Link>

        <Link href="/journal" className="group">
          <div className="p-8 rounded-2xl border text-center space-y-4 hover:border-black transition-colors cursor-pointer">
            <div className="flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 2a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zm-4 3H8v2h8V5zm0 4H8v2h8V9zm0 4H8v2h8v-2z"/>
              </svg>
            </div>
            <h2 className="text-xl font-serif">Prayer Journal</h2>
            <p className="text-gray-600">Write freely, receive gentle AI reflections a spiritual director</p>
          </div>
        </Link>

        <Link href="/lectio" className="group">
          <div className="p-8 rounded-2xl border text-center space-y-4 hover:border-black transition-colors cursor-pointer">
            <div className="flex justify-center">
              <svg className="w-12 h-12" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z"/>
              </svg>
            </div>
            <h2 className="text-xl font-serif">Lectio Divina</h2>
            <p className="text-gray-600">Guided, ancient prayer to hear God's voice in Scripture</p>
          </div>
        </Link>
      </section>

      {/* Quote Section */}
      <section className="max-w-3xl w-full mt-20 text-center space-y-4">
        <blockquote className="text-2xl md:text-3xl font-serif italic">
          "Prayer is the inner bath of love into which the soul plunges itself."
        </blockquote>
        <cite className="text-gray-600">— St. Jean-Marie Vianney</cite>
      </section>

      {/* About Section */}
      <section className="max-w-2xl w-full mt-20 text-center">
        <h2 className="text-2xl font-serif mb-4">ABOUT ORA</h2>
        <p className="text-gray-600">
          Ora (Latin for 'pray') is your personal chapel in the digital world. 
          Designed to help you slow down, hear God, and grow in faith—one reflection at a time.
        </p>
      </section>
    </div>
  );
}
