'use client';

import { useState, useEffect, useRef } from 'react';
import Typewriter from './typewriter';
import TextType from './text-type';
import ScrambledText from './scrambled-text';
import CountUp from './count-up';

const typingText = [
  "got bizz?, hook me up!",
  "make your first publication!",
  "bored ? there are always projects with me",
  "new to research ? I know a guy that know a guy",
  "explore oppotunities together",
];

export default function ProfileSection() {
  const [coffeeCount, setCoffeeCount] = useState('1337');
  const [isGlitching, setIsGlitching] = useState(false);
  const [terminalFlicker, setTerminalFlicker] = useState(false);
  const [glitchText, setGlitchText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Popular port numbers for the glitch effect
  const portNumbers = ['80', '443', '22', '21', '25', '53', '110', '143', '993', '995', '587', '465', '3306', '5432', '6379', '27017', '8080', '3000', '8000', '9000', '4200', '5000', '1337', '31337', '8888', '9999', 'Error'];

  // Glitch characters for text scrambling
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  // Function to scramble text
  const scrambleText = (text: string) => {
    return text.split('').map(() =>
      glitchChars[Math.floor(Math.random() * glitchChars.length)]
    ).join('');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTerminalFlicker(true);

      // Multiple rapid glitch cycles
      let glitchCycle = 0;
      const glitchInterval = setInterval(() => {
        const randomPort = portNumbers[Math.floor(Math.random() * portNumbers.length)];
        const scrambled = scrambleText(randomPort);
        setGlitchText(scrambled);
        setCoffeeCount(randomPort);

        glitchCycle++;
        if (glitchCycle > 8) { // More intensive glitching
          clearInterval(glitchInterval);
          // Final stabilization - land on a random number instead of always 1337
          const finalPort = portNumbers[Math.floor(Math.random() * portNumbers.length)];
          setTimeout(() => {
            setCoffeeCount(finalPort);
            setGlitchText('');
            setIsGlitching(false);
            setTerminalFlicker(false);
          }, 100);
        }
      }, 50); // Faster glitch cycles

    }, 4000); // Glitch every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { number: 5, label: 'hackathons conquered' },
    { number: 2, label: 'research publications' },
    { number: coffeeCount, label: 'coffee consumed', isGlitch: true },
  ];

  const statusLines = [
    '> looking for bounty',
    '> open for hacking',
    '> on payroll',
    '> corpo atm :(',
    '> compiling σ̴͒͜͠ÿ̵̝ѕ̶͙̈́т̷̖͠ε̴̯̅м̶̘̚ ̴̼̕d̶͚̐г̷̦͝ι̶̇ͅƒ̷̝͌τ̵̲̀…',
    '> ѣ̶̫͐r̶̘̈́e̵̺̎a̷͔̍t̷̤̑h̸̞̓ι̵̡̕n̵̡̅g̵̗͘ ̵̝̒p̵͙̏a̶͓̿c̵͙̈́k̶̯̈́ę̴̓t̵̺̑ѕ̸̠̈…',
    '> coffee.exe running',
    '> ▓▒░d̸̙͝͠a̵̯͂̚ṯ̴̃͋a̵͇̅ ̷̲̈́b̷̢̋l̷͚͐e̷͖͊ê̸̖d̶̫͌░▒▓',
    '> waiting for block confirmation',
    '> ∞̵͈̿r̸̪͒é̸̥s̷̨̏o̵̜͒n̴̖̚a̵̬͘ṇ̶̋c̷̛̪e̴̖͑ ̷̦̿ò̶̢v̷̥̾ẻ̶̢r̷͉̓f̵̬̀l̶̫̓o̴̢̔w̵̟͗∞',
    '> ░̨͖͊̀͒͠ͅ░̡̯̽͋̈̕ ș̷̋y̴͈̽n̴̥͝ᴄ̴͖̀ ̸͓̆è̶͜г̴̎ͅг̵̞̾o̶̟͗г̶̢͂ ∗'
  ];


  const aboutText = `I'm a web3 builder and a blockchain researcher, I work on various things within the blockchain space. I believe in decentralized and transparency. My expertise lies in DeFi, and while we’re not there yet, I believe a world free from centralized control where people are no longer pawns of big corporations -yes, I'm a huge fan of cyberpunk aesthetics. If you fw what I stand for, hit me up. Let do some bizz choom!`;

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">

          {/* Left Column - Profile Picture */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="space-y-6 flex-1 flex flex-col">
              {/* Profile Picture */}
              <div className="aspect-square bg-transparent border border-gray-600/30 rounded-lg overflow-hidden">
                <img
                  src="/nft.jpg"
                  alt="Profile NFT"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-transparent border-2 border-dashed border-gray-600/30 flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
                  NFT placeholder
                  <br />
                  (nft.png)
                </div>
              </div>

              {/* Status Block */}
              <div className="bg-transparent border border-gray-600/30 p-4 rounded-lg flex-1 flex flex-col">
                <h3 className="text-green-400 font-bold mb-4 text-sm">// status</h3>
                <div className="space-y-1 text-xs text-gray-300 flex-1 overflow-hidden">
                  {statusLines.map((line, idx) => (
                    <ScrambledText
                      key={idx}
                      radius={150}
                      duration={0.4}
                      scrambleChars="!<>-_\\/[]{}—=+*^?#________"
                      className="font-mono whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {line}
                    </ScrambledText>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9 space-y-8 flex flex-col">

            {/* About Block */}
            <div className="bg-transparent border border-gray-600/30 p-6 rounded-lg flex-1">
              <h2 className="text-green-400 font-bold mb-4 text-lg">// about.md</h2>
              <div className="text-gray-300 leading-relaxed text-sm min-h-[100px]">
                <Typewriter
                  text={aboutText}
                  speed={15}
                  cursor={false}
                  start={isVisible}
                />
              </div>
            </div>

            {/* Stats Block */}
            <div className="bg-transparent border border-gray-600/30 p-6 rounded-lg relative">
              <h3 className="text-green-400 font-bold mb-4 text-lg">// stats.json</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center space-y-2">
                    <div className={`text-2xl font-bold font-mono relative ${stat.isGlitch ? `
                        ${isGlitching ? 'text-red-400' : 'text-green-400'} 
                        transition-all duration-75
                        ${isGlitching ? 'transform skew-x-2' : ''}
                      ` : 'text-white'
                      }`}>
                      {stat.isGlitch && isGlitching && glitchText ? (
                        <>
                          <span className="absolute inset-0 text-red-500 opacity-60 animate-pulse">
                            {glitchText}
                          </span>
                          <span className="absolute inset-0 text-blue-500 opacity-40 transform translate-x-0.5">
                            {glitchText}
                          </span>
                          <span className="relative z-10 text-green-400 animate-bounce">
                            {stat.number}
                          </span>
                        </>
                      ) : (
                        <span className={isGlitching && stat.isGlitch ? 'animate-bounce' : ''}>
                          {stat.isGlitch ? stat.number : <CountUp to={stat.number as number} duration={2} separator="," />}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Block */}
            <div id="contact-section" className="bg-transparent border border-gray-600/30 p-6 rounded-lg">
              <h3 className="text-green-400 font-bold mb-4 text-lg">// contact.sh</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <TextType
                    text={typingText}
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="px-6 py-3 bg-green-400 text-black hover:bg-green-500 transition-colors text-sm font-bold rounded"
                  >
                    $ ./send_message
                  </button>
                  <button
                    onClick={() => window.open('mailto:trongtrawork@gmail.com', '_blank')}
                    className="px-6 py-3 border border-gray-600/30 text-gray-300 hover:bg-gray-800/20 transition-colors text-sm rounded"
                  >
                    email --direct
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/Trong-Tra', '_blank')}
                    className="px-6 py-3 border border-gray-600/30 text-gray-300 hover:bg-gray-800/20 transition-colors text-sm rounded"
                  >
                    github --profile
                  </button>
                </div>
                <div className="text-xs text-gray-500 font-mono mt-4">
                  $ whoami && echo "let's build the decentralized future together, choom!"
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}