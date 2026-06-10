import { ReactNode } from 'react';

export const site = {
  meta: {
    title: 'karem – Meme Energy for Web3',
    description: 'karem is a premium meme-driven Web3 project with strong builder energy and launch-ready transparency. Built for the new era of Web3.'
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Staking', href: '#staking' },
    { label: 'Launch', href: '#launch' },
    { label: 'How to Join', href: '#howtobuy' },
    { label: 'Security', href: '#security' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' }
  ],
  about: {
    hero: 'Premium meme energy for serious Web3 builders. karem unites fun and trust, launching on BNB Chain with transparent, community-first foundations.',
    description: 'karem is a Web3 meme project designed for the future. We combine viral meme power with transparent, builder-led development. Our mission: create a fun, fair, and secure ecosystem for the Web3 community, with a focus on clarity, trust, and long-term value.',
    points: [
      'Meme-driven, but builder-owned and transparent.',
      'No fake claims—just real, verifiable contracts.',
      'Launchpad readiness for a safe, audited launch.',
      'Open roadmap and future staking for ecosystem growth.'
    ]
  },
  stats: [
    { label: 'Token Symbol', value: 'kkr' },
    { label: 'Network', value: 'BNB Chain' },
    { label: 'Supply', value: 'To be announced' },
    { label: 'Launchpad', value: 'KORAX (Planned)' },
    { label: 'Staking', value: 'Coming soon' },
    { label: 'Contract Audits', value: 'Planned' }
  ],
  tokenomics: {
    description: 'The $kkr token is designed for simplicity and fairness. Exact supply and allocations will be published before launch, with no hidden allocations or unfair advantages. All tokenomics details will be made public and verifiable.',
    breakdown: [
      {
        percent: '40%',
        title: 'Community & Ecosystem',
        description: 'Allocated for growth, rewards, and incentives for the karem ecosystem.'
      },
      {
        percent: '30%',
        title: 'Liquidity & Exchange',
        description: 'Ensures deep liquidity and fair access for all participants.'
      },
      {
        percent: '20%',
        title: 'Staking & Rewards',
        description: 'Reserved for future staking contracts and on-chain rewards.'
      },
      {
        percent: '10%',
        title: 'Development',
        description: 'Supports ongoing project improvement and security.'
      }
    ]
  },
  staking: {
    description: 'karem will introduce staking after launch, focusing on security and community rewards. All staking contracts will be audited and fully transparent. Stay tuned for official staking releases and addresses.'
  },
  launch: {
    description: 'The $kkr token will be launched on the KORAX Launchpad, prioritizing auditability, security, and community fairness. All launch details, timelines, and links will be published here and on official channels.'
  },
  howToBuy: {
    intro: 'Ready to join karem? Here’s how to prepare for the launch and become part of the meme builder movement:',
    steps: [
      'Set up a Web3 wallet (MetaMask, Rainbow, etc.)',
      'Connect your wallet using the Connect button above',
      'Watch for official $kkr launch updates and links',
      'Verify smart contract addresses after deployment',
      'Join community socials for support and updates'
    ]
  },
  security: {
    description: 'We make security a top priority. All karem contracts will be open source, audited, and verified on BNB Chain explorers. No shortcuts—just builder-grade transparency.',
    points: [
      'Planned third-party audits before launch',
      'Public contract addresses for all major contracts',
      'No hidden functions or backdoors',
      'Active bug bounty and responsible disclosure process'
    ]
  },
  roadmap: {
    intro: 'karem’s journey is mapped with transparency. Here’s our planned path to meme-powered Web3 impact:',
    phases: [
      {
        title: 'Phase 1 — Genesis',
        items: [
          'Project concept & meme energy foundation',
          'Initial community formation',
          'Website launch with live wallet integration',
          'Publish roadmap and tokenomics draft'
        ]
      },
      {
        title: 'Phase 2 — Launch Readiness',
        items: [
          'KORAX Launchpad integration',
          'Token contract deployment & verification',
          'Initial audit process',
          'Open staking design'
        ]
      },
      {
        title: 'Phase 3 — Ecosystem Growth',
        items: [
          'Official $kkr launch on KORAX',
          'Open staking for community rewards',
          'Expand partnerships and integrations',
          'Community-driven governance exploration'
        ]
      }
    ]
  },
  contracts: {
    token: null,
    staking: null,
    vault: null
  },
  socials: [
    { label: 'X / Twitter', url: null, icon: null },
    { label: 'Telegram', url: null, icon: null },
    { label: 'YouTube', url: null, icon: null },
    { label: 'TikTok', url: null, icon: null },
    { label: 'Instagram', url: null, icon: null },
    { label: 'Facebook', url: null, icon: null },
    { label: 'Discord', url: null, icon: null }
  ],
  faq: [
    {
      q: 'When will $kkr launch?',
      a: 'The official $kkr launch will take place on the KORAX Launchpad. Exact dates and details will be shared on this website and future official channels.'
    },
    {
      q: 'What is the total supply of $kkr?',
      a: 'The total supply and all tokenomics details will be published before launch for full transparency.'
    },
    {
      q: 'Will there be staking?',
      a: 'Yes, staking is planned after launch, with contracts and addresses published for security.'
    },
    {
      q: 'How can I verify contracts?',
      a: 'All smart contract addresses and verifications will be published on this site after deployment.'
    },
    {
      q: 'How do I join the community?',
      a: 'Socials will be announced after launch. Stay tuned for official links!'
    }
  ]
};
