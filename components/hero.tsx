export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="space-y-6">
        {/* Main title with error style */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Error (7RoN-7r@) 
            <br />
            tron.t.sol is not c@ff3in3d
          </h1>
          <p className="text-gray-400 text-2xl mt-4">
            {'//'} web3 builder, blockchain researcher, hacker, bounty hunter
          </p>
        </div>

        {/* Status indicator */}
        <div className="text-green-400 text-2xl">status: [×] flat_lined()</div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-6">
          <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all text-sm">
            view products
          </button>
          <button className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all text-sm">
            get in touch
          </button>
        </div>
      </div>
    </section>
  )
}
