import Image from 'next/image';

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
    <div className="border border-gray-700 bg-black/50 p-6 space-y-4 hover:border-green-400 transition-colors group">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors">
            {name}
          </h3>
          {award && (
            <span className="inline-block px-2 py-1 text-xs bg-yellow-900/30 border border-yellow-600 text-yellow-400">
              🏆 {award}
            </span>
          )}
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/github-mark.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer invert"
            />
          </a>
        ) : (
          <Image
            src="/github-mark.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="opacity-50 group-hover:opacity-100 transition-opacity invert"
          />
        )}
      </div>

      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

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
