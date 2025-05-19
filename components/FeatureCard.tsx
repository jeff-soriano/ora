import Link from 'next/link';

interface FeatureCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ href, icon, title, description }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="h-full p-8 rounded-2xl border text-center space-y-4 hover:border-black transition-colors cursor-pointer">
        <div className="flex justify-center">
          {icon}
        </div>
        <h2 className="text-xl font-serif">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
} 