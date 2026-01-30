import Link from 'next/link';
import TextType from './text-type';
import Typewriter from './typewriter';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center">
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        {/* Main title with error style */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex flex-col justify-center">
            <Typewriter
              text={["Error (7RoN-7r@)", "tron.t.sol is not c@ff3in3d"]}
              speed={70}
              waitTime={500}
            />
          </h1>
          <div className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 h-auto sm:h-8 px-2 sm:px-0">
            <Typewriter
              text={["// web3 jack of all trades, builder, architect, researcher, hacker, bounty hunter"]}
              speed={40}
              initialDelay={550}
              cursor={false}
            />
          </div>
        </div>

        {/* Status indicator */}
        <div className="text-green-400 text-lg sm:text-xl md:text-2xl">
          status: [×] flat_lined_by_bug()
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
          <Link
            href="/products"
            className="px-8 sm:px-10 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all text-sm"
          >
            view products
          </Link>
          <Link
            href="/contact"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-gray-200 transition-all text-sm"
          >
            get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
