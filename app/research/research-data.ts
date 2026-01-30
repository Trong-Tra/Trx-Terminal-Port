export interface ResearchPaper {
  title: string;
  date: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  publicationLink: string;
  images?: {
    src: string;
    caption: string;
  }[];
  personalThoughts?: string;
}

export const research: ResearchPaper[] = [
  {
    title: 'Lotus: a Hybrid Cross-Chain Framework for Privacy-Preserving Digital Identity',
    date: 'Oct 2025',
    role: 'Co-Author & Presenter',
    description: `A framework harmonizing sovereign digital credential issuance with cross-chain privacy-preserving verification. Lotus uses a permissioned PoA blockchain for authoritative, state-backed identity credentials and deploys zero-knowledge proof (zk-SNARK) bridges for selective, private, cross-chain verification. Designed for national-scale applications, Lotus enables both legally compliant and privacy-respecting digital identities usable across multiple blockchain ecosystems.`,
    achievements: [
      "Developed and implemented hybrid architecture combining state-backed credential issuance with privacy-preserving cross-chain verification.",
      "Built two main protocols: state-anchored credential issuance (PoA) and cross-chain selective disclosure using zk-SNARKs.",
      "Optimized identity proof sizes (<600 bytes) and fast end-to-end verification (<2 seconds).",
      "Achieved on-chain cost reductions up to 75% vs standard EVM deployments (minimum 244 Gwei per credential).",
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
    publicationLink: 'https://ieeexplore.ieee.org/document/11231625',
    images: [
      {
        src: '/research/lotus/lotus-architecture.png',
        caption: 'Lotus hybrid architecture: PoA blockchain for credential issuance with zk-SNARK bridges for cross-chain verification'
      },
      {
        src: '/research/lotus/constant-zkp-size.png',
        caption: 'Constant-size zk-SNARK proofs for selective disclosure of multiple credential attributes'
      },
      {
        src: '/research/lotus/zk-SNARK-proof-gen.png',
        caption: 'zk-SNARK proof generation times across different worker thread counts and VC volumes.'
      },
      {
        src: '/research/lotus/system-latency.png',
        caption: 'End-to-end latency of a single credential verification.'
      }
    ],
    personalThoughts: `This publication was quite a story. Initially it was meant to compete in a hackathon, wasn't even about the prize money but rather the glory and reputation among peers. We ended up losing the hackathon along with realizing this won't stand up to industrial standards but rather a solid foundation for academic contribution.\n\nThe real challenge was balancing the conflicting requirements of governments wanting control and legal compliance, while users want privacy and decentralization. The "aha moment" came when we realized we could split these concerns: let governments control credential issuance (they do that anyway), but give users complete control over verification and disclosure.\n\nWhat excites me most isn't the 75% cost reduction or the sub-2-second verification times (though those are cool). It's that this could actually get adopted. What we had in mind was a solution that would improve national system, specifically - our nation, Vietnam. But if its can scale to that level, certainly it can be adapted as a nation-wide solution for other countries as well.\n\nThe journey from hackathon to IEEE publication was intense but rewarding. It taught me that sometimes, the best innovations come from constraints and that balancing different stakeholder needs is key to building impactful technology.`,
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
    images: [
      {
        src: '/research/proof-of-merit/proof-of-merit-architecture.png',
        caption: 'Proof-of-Merit architecture: VRF-PoA consensus weighted by stake and academic reputation for educational blockchains'
      },
      {
        src: '/research/proof-of-merit/gov-constraints.png',
        caption: 'Sybil-resistant governance constraints'
      },
      {
        src: '/research/proof-of-merit/performance-metrics.png',
        caption: 'Performance metrics comparison across consensus protocols'
      },
      {
        src: '/research/proof-of-merit/gini-coefficient.png',
        caption: 'Gini coefficient sensitivity to reputation weight'
      }
    ],
    personalThoughts: `Building Proof-of-Merit felt like fighting against the "rich get richer" problem that plagues most blockchain systems. Everyone talks about decentralization, but in reality, most PoS chains just give more power to people with more money. As much as I love blockchain but that's plutocracy with extra steps.\n\n Now, you might wonder how all this ties into the academic angle. Funny enough, this paper actually a work of our team to build a private blockchain for the university, it's was meant to be our legacy to the university, as this would become a cool benefit for students and maybe attract more people to attend the university. However, we don't want a blockchain consensus to be just any existence standard and call it a day. If we were going to build something, it had to actually solve a real problem. So we took a shot at the original PoS issue, starting small, with this private academic blockchain.\n\nThe breakthrough came when we realized that academic reputation is naturally Sybil-resistant. You can’t fake a PhD or research output. Well, technically you can try… but good luck, it’s expensive, slow, and painfully obvious. By making reputation non-transferable and tied to real academic contributions, we ended up with a system where influence comes from actual knowledge, not wealth.\n\nOne thing that really surprised me during development was how much people pushed back on the idea of reputation decay. Everyone wanted their hard-earned points to last forever. And sure, I get it. But that’s exactly how entrenched power structures form. The decay mechanic forces you to keep contributing if you want to stay relevant — which honestly lines up perfectly with how academia is supposed to work. It’s kind of like how IELTS expires, but instead of just disregarding people’s effort after two years, we wanted a system that still respects past work while encouraging continuous engagement. You shouldn’t get thrown off the bus, but you also shouldn’t get a permanent VIP seat for something you did a decade ago.`,
  }
];