'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { FaXTwitter, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa6';
import Typewriter from '@/components/typewriter';

const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: FaXTwitter,
    url: 'https://x.com/Trx_Tra',
  },
  {
    name: 'Discord',
    icon: FaDiscord,
    url: 'https://discord.com/users/751995623347060907',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    url: 'https://t.me/Tra_Trx',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/minh-trong-tra-work/',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Typewriter
              className="text-4xl md:text-5xl font-bold tracking-tight"
              text="contact.json"
              speed={50}
              cursor={false}
              start={true}
            />
            <Typewriter
              className="text-green-400 text-lg"
              text="// chasing glory and making breads together"
              speed={50}
              cursor={false}
              start={true}
            />
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center flex-1 py-4 border border-gray-700 bg-black/50 transition-all hover:border-green-400 group"
                title={social.name}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Contact Text Block */}
          <div className="border border-gray-700 bg-black/50 p-8 md:p-12 max-w-4xl mx-auto">
            <Typewriter
              className="text-2xl font-bold mb-6 text-green-400"
              text="// reach_out.md"
              speed={50}
              cursor={false}
              start={true}
            />

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                 <p>
                    I'm down to help if you're building something and need <span className="text-green-400 font-semibold">an extra hand</span>.
                    If you're new to <span className="text-green-400 font-semibold">web3</span> and want to get started, my team and I are more than happy
                    to help <span className="text-green-400 font-semibold">bootstrap your journey</span>. We're currently running several projects with
                    solid direction, strong potential, and room for passionate contributors. <span className="text-green-400 font-semibold">(We do pay you, don't expect much tho...)</span>
                  </p>

                  <p>
                    If you're a <span className="text-green-400 font-semibold">researcher</span> who feels stuck or needs a professor as a supervisor for your
                    next paper, feel free to reach out as well. I've been involved in <span className="text-green-400 font-semibold">multiple research
                    projects</span> and would be glad to support you with <span className="text-green-400 font-semibold">innovative ideas</span>. Just keep in mind
                    that I'm mostly <span className="text-green-400 font-semibold">industry-focused</span>. I can connect you with the right people rather
                    than directly participate in the research myself, so you’ve got nothing to worry about.
                  </p>

                  <p>
                    If you're joining my team on the <span className="text-green-400 font-semibold">industry side</span>, we're pretty chill. 
                    We work <span className="text-green-400 font-semibold">remotely</span> and don't have strict geographic constraints.
                    That said, I still prefer if you're in the <span className="text-green-400 font-semibold">HCMC Metropolitan Area</span> so we can
                    occasionally grab a coffee or a beer.
                    <br /><br />
                    For researchers looking for direction or connections through me, I prefer that you
                    are (or were) a student at one of the <span className="text-green-400 font-semibold">VNU-HCM universities</span>, this ensures we have
                    some shared foundation to start from and makes the publication paperwork much easier.
                  </p>

                  <p>
                    For any reasonable inquiries, feel free to <span className="text-green-400 font-semibold">book a meeting</span> using the button below or
                    reach out through my social links above. However, if you're <span className="text-green-400 font-semibold">serious about working
                    with me</span>, I strongly prefer that you book a meeting so we can have a proper time slot
                    to discuss everything in detail.
                  </p>
                </div>
            </div>

            {/* Calendly Button */}
            <div className="flex justify-end mt-8">
              <a
                href="https://calendly.com/trongtrawork/tron-lounge"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-400 text-black hover:bg-green-500 transition-colors font-bold"
              >
                $ book_meeting
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>// let's turn coffee into code together</p>
            <p className="text-xs">
              if (message.isInteresting()) {'{'}response.send_immediately(); {'}'}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
