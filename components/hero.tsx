import Link from 'next/link';
import TextType from './text-type';
import Typewriter from './typewriter';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6">
        {/* Main title with error style */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight min-h-[160px] md:min-h-[144px] flex flex-col justify-center">
            <Typewriter
              text={["Error (7RoN-7r@)", "tron.t.sol is not c@ff3in3d"]}
              speed={70}
              waitTime={500}
            />
          </h1>
          <div className="text-gray-400 text-2xl mt-4 h-8">
            <Typewriter
              text={["// web3 builder, blockchain researcher, hacker, bounty hunter"]}
              speed={40}
              initialDelay={550}
              cursor={false}
            />
          </div>
        </div>

        {/* Status indicator */}
        <div className="text-green-400 text-2xl">status: [×] flat_lined_by_bug()</div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-6">
          <Link
            href="/projects"
            className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all text-sm"
          >
            view products
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all text-sm"
          >
            get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
