export default function About() {
  const aboutText = `I'm a web3 builder and a blockchain researcher, I believe in decentralized and transparency. My expertise revolves around DeFi, we are not there yet, but one day the world shall be free from centralized systems, everyone will no longer being a pawn to big corporations -yes, I'm a huge fan of cyberpunk aesthetics, if you fw what I stand for, hit me up. Let do some bizz choom!`

  return (
    <section className="py-16 px-6 border-t border-b border-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900 border border-gray-700 p-6 text-sm leading-relaxed text-gray-300">
          {aboutText}
        </div>
      </div>
    </section>
  )
}
