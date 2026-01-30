'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ProductCard from '@/components/product-card';
import Typewriter from '@/components/typewriter';
import CountUp from '@/components/count-up';
import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Hakifi',
    description:
      'Production-grade DeFi platform that I shipped during my time at Nami Foundation, featuring my VWAP-hugged TWAP formula innovation. Optimized execution engine that hugs market price while minimizing slippage and MEV exposure.',
    tags: ['DeFi', 'TWAP', 'MEV', 'Production'],
    award: 'Shipped at Nami Foundation',
    link: 'https://hakifi.xyz/',
  },
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
  { label: 'Hackathon Wins', value: 5, isNumber: true },
  { label: 'Prize Money', value: 13000, isNumber: true, prefix: '$', suffix: '+' },
  { label: 'Years Active', value: 1, isNumber: true, suffix: '+' },
  { label: 'Sleepless Days', value: 30, isNumber: true },
];

export default function ProductsPage() {
  const [animationComplete, setAnimationComplete] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typewriter className="text-4xl md:text-5xl font-bold tracking-tight"
              text="product.s.sol"
              speed={50}
              cursor={false}
              start={true}
            />
            <Typewriter className="text-green-400 text-lg"
              text="// products that I shipped"
              speed={50}
              cursor={false}
              start={true}
            />
          </div>
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border border-gray-700 bg-black/50 p-4 text-center hover:border-green-400 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold text-green-400">
                  {stat.isNumber ? (
                    <>
                      {stat.prefix || ''}
                      <CountUp
                        to={stat.value as number}
                        duration={1.5}
                        separator=","
                        onEnd={() => {
                          setTimeout(() => {
                            setAnimationComplete(prev => ({ ...prev, [idx]: true }));
                          }, 2600);
                        }}
                      />
                      {stat.suffix && animationComplete[idx] ? stat.suffix : ''}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  tags={product.tags}
                  award={product.award}
                  link={product.link}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>// building the next impactful product...</p>
            <p className="text-xs">console.log("shipping in progress")</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
