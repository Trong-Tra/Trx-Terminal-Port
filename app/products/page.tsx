'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';

const products = [
  {
    name: 'TradeClub',
    description:
      'Social trading on steroids, compete, copy, and liquidate or get liquidated. The degen engine for EVM blockchains.',
    tags: ['SocialFi', 'TradeFi', 'DeFi', 'GameFi'],
    award: 'Metamask x Monad Cookoff 2025 - 1st runner up + Envio bonus',
    link: 'https://github.com/DxcMint868/trade-club-liquidator',
  },
  {
    name: 'Clione',
    description:
      'A TWAP enhancement that help TWAP orders hugged the market price better while reducing slippage and MEV risks.',
    tags: ['HyperCore', 'Perp', 'DeFi'],
    award: 'Hyperliquid Hackathon 2025 - Shield TWAP track winner',
    link: 'https://github.com/Trong-Tra/Clione',
  },
  {
    name: 'Terrum',
    description:
      'Vietnam’s first real estate tokenization platform purpose-built on U2U Network, enabling anyone to invest, earn rental yield, and trade fractional property ownership instantly through digital assets.',
    tags: ['RWA', 'DeFi', 'NFT'],
    award: 'Nominated, Honorable Mention, Branding Partnered by U2U Network',
    link: 'https://github.com/Hirosolo/Terrum',
  },
  {
    name: 'SaigonDAO',
    description:
      'A lending protocol that tailors to the unique needs of local Southeast Asian communities.',
    tags: ['DeFi', 'Lending', 'LST'],
    award: 'SEA Ideathon 2025 - Champion',
    link: 'https://github.com/Trong-Tra/SaigonDAO',
  },
  {
    name: 'Defrost',
    description:
      'Project hub that growth web3 startups need, from idea to launch and beyond.',
    tags: ['LST', 'XCM', 'Parachain'],
    award: 'Back-to-Back Polkadot Hackathon DeFi Champion (’24 & ’25)',
    link: 'https://github.com/Solidithi/Defrost-Contracts',
  },
];

const stats = [
  { label: 'Hackathon Wins', value: '5' },
  { label: 'Prize Money', value: '$12.000+' },
  { label: 'Years Active', value: '1+' },
  { label: 'Sleepless Days', value: '25' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              product.s.sol
            </h1>
            <p className="text-green-400 text-lg">
              // products that I shipped
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border border-gray-700 bg-black/50 p-4 text-center hover:border-green-400 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-400">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                name={product.name}
                description={product.description}
                tags={product.tags}
                award={product.award}
                link={product.link}
              />
            ))}
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>// building the next winning product...</p>
            <p className="text-xs">console.log("shipping in progress")</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
