import Image from 'next/image';
import { Globe } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  award?: string;
}

export default function ProductCard({
  name,
  description,
  tags,
  link,
  award,
}: ProductCardProps) {
  return (
    <div className="border border-gray-700 bg-black/50 p-4 sm:p-6 space-y-4 hover:border-green-400 transition-colors group h-full flex flex-col">
      <div className="flex justify-between items-start gap-3">
        <div className="space-y-1 min-w-0">
          <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors">
            {name}
          </h3>
          {award && (
            <span className="inline-block px-2 py-1 text-xs bg-yellow-900/30 border border-yellow-600 text-yellow-400 whitespace-nowrap">
              🏆 {award}
            </span>
          )}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {link.includes('github.com') ? (
              <Image
                src="/github-mark.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer invert"
              />
            ) : (
              <Globe className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity text-white" />
            )}
          </a>
        )}
      </div>

      <p className="text-sm text-gray-300 leading-relaxed flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            className="px-2 py-1 text-xs border border-gray-600 text-gray-300 hover:border-green-400 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
