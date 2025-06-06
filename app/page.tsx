import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { FaBible, FaCross } from "react-icons/fa";
import { GiQuill } from "react-icons/gi";

export default function Home() {
  const iconSize = "5rem";

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-3xl w-full text-center space-y-8">
        <p className="text-lg md:text-xl italic">
          Be still, and know that I am God.
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif">
            Enter into prayer.
            <br />
            Find rest in Him.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ora is a quiet space for journaling, Scripture reflection, and
            guided prayer—powered by AI, centered in Christ.
          </p>
        </div>

        <Link href="/journal">
          <button className="font-semibold px-8 py-3 bg-white border border-black rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
            Begin Prayer
          </button>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <FeatureCard
          href="/scripture"
          icon={<FaBible size={iconSize} />}
          title="Daily Scripture"
          description="Read and reflect on the Word of God, one day at a time"
        />

        <FeatureCard
          href="/journal"
          icon={<GiQuill size={iconSize} />}
          title="Prayer Journal"
          description="Write freely, receive gentle AI reflections like a spiritual director"
        />

        <FeatureCard
          href="/lectio-divina"
          icon={<FaCross size={iconSize} />}
          title="Lectio Divina"
          description="Guided, ancient prayer to hear God's voice in Scripture"
        />
      </section>

      {/* Quote Section */}
      <section className="max-w-3xl w-full mt-20 text-center space-y-4">
        <blockquote className="text-2xl md:text-3xl font-serif italic">
          &ldquo;Prayer is the inner bath of love into which the soul plunges
          itself.&rdquo;
        </blockquote>
        <cite className="text-gray-600">— St. Jean-Marie Vianney</cite>
      </section>

      {/* About Section */}
      <section className="max-w-2xl w-full mt-20 text-center">
        <h2 className="text-2xl font-serif mb-4">ABOUT ORA</h2>
        <p className="text-gray-600">
          Ora (Latin for 'pray') is your personal chapel in the digital world.
          Designed to help you slow down, hear God, and grow in faith—one
          reflection at a time.
        </p>
      </section>
    </div>
  );
}
