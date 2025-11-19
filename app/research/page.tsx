'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Calendar, User } from 'lucide-react';

const research = [
  {
    title: 'Lotus: a Hybrid Cross-Chain Framework for Privacy-Preserving Digital Identity',
    date: 'Oct 2025',
    role: 'Co-Author & Presenter',
    description: `A framework harmonizing sovereign digital credential issuance with cross-chain privacy-preserving verification. Lotus uses a permissioned PoA blockchain for authoritative, state-backed identity credentials and deploys zero-knowledge proof (zk-SNARK) bridges for selective, private, cross-chain verification. Designed for national-scale applications, Lotus enables both legally compliant and privacy-respecting digital identities usable across multiple blockchain ecosystems.`,
    achievements: [
      "Developed and implemented hybrid architecture combining state-backed credential issuance with privacy-preserving cross-chain verification.",
      "Built two main protocols: state-anchored credential issuance (PoA) and cross-chain selective disclosure using zk-SNARKs.",
      "Optimized identity proof sizes (<600 bytes) and fast end-to-end verification (<2 seconds).",
      "Achieved on-chain cost reductions up to 75% vs. standard EVM deployments (minimum 244 Gwei per credential).",
      "Engineered robust security design against validator collusion, trusted setup leaks, contract vulnerabilities, and relayer attacks."
    ],
    technologies: [
      "Permissioned Proof-of-Authority (PoA) blockchain",
      "zk-SNARKs (Groth16)",
      "EVM-compatible smart contracts",
      "Decentralized Identifiers (DID)",
      "Verifiable Credentials (VC)",
      "Merkle trees",
      "Selective disclosure protocols",
      "Parallel proof generation",
      "Cross-chain relayers"
    ],
    publicationLink: '#',
  },
  {
    title: 'Proof-of-Merit: A Reputation-Weighted VRF-PoA Consensus and Governance for Educational Blockchains',
    date: 'Dec 2025',
    role: 'Co-Author & Presenter',
    description: `A novel consensus and governance framework that integrates Proof-of-Authority with Verifiable Random Functions (VRFs) and a dual-token merit model. Proof-of-Merit (PoM) introduces non-transferable, academically earned reputation as a core component of validator selection and governance weighting, enabling Sybil-resistant, pedagogically aligned blockchain infrastructure for Learn-to-Earn ecosystems. Implemented on Hyperledger Besu and benchmarked with Hyperledger Caliper, PoM strengthens fairness, reduces centralization risks, and maintains competitive performance while embedding educational merit directly into consensus dynamics.`,
  achievements: [
    "Designed and formalized a hybrid VRF-PoA consensus protocol weighted by both economic stake and non-transferable academic reputation.",
    "Engineered a dual-token governance model that anchors voting power in verifiable merit, mitigating plutocracy and Sybil attacks.",
    "Implemented PoM on Hyperledger Besu and conducted end-to-end benchmarking using Hyperledger Caliper.",
    "Achieved significant fairness improvements, reducing block-production Gini coefficient to 0.1932 and raising Nakamoto coefficient to 8.",
    "Introduced reputation decay and cooldown mechanisms to prevent long-term validator dominance and merit saturation.",
    "Defined a VRF randomness pipeline using finalized block data to eliminate last-mover influence and entropy grinding attacks.",
    "Conducted sensitivity analysis demonstrating optimal fairness at wr = 0.4 within the stake–reputation weighting model."
  ],
  technologies: [
    "Verifiable Random Functions (VRF)",
    "Proof-of-Authority (PoA) consensus",
    "Dual-token tokenomics",
    "Hyperledger Besu",
    "Hyperledger Caliper benchmarking",
    "Self-Sovereign Identity (SSI)",
    "Reputation-weighted governance",
    "BFT finality",
    "Merit decay & fairness optimization"
  ],
  publicationLink: '#',
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              research.md
            </h1>
            <p className="text-green-400 text-lg">
              // my contributions etched into the ledger of time
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {research.map((paper, idx) => (
              <div
                key={idx}
                className="border border-gray-700 bg-black/50 p-8 space-y-6 hover:border-green-400 transition-colors"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    {paper.title}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{paper.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{paper.role}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {paper.description}
                </p>

                <div className="space-y-3">
                  <p className="font-semibold text-white">Key Achievements:</p>
                  <ul className="space-y-2">
                    {paper.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <span className="text-green-400">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold text-white">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs border border-gray-600 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={paper.publicationLink}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 transition-colors mt-4"
                >
                  <span>↗</span>
                  Read Publication
                </a>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-500 space-y-2 py-8">
            <p>// blockchain isn't just a tech, it is a realm and there are a lot more to discover</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
