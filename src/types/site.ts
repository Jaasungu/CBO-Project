export type ColorTheme = 'indigo' | 'slate' | 'emerald' | 'amber';
export type FontPair = 'modern-sans' | 'geometric' | 'editorial-serif';
export type ViewportMode = 'desktop' | 'tablet' | 'mobile' | 'fluid';

export interface NavLink {
  label: string;
  href: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  metric: string;
  metricContext: string;
  colSpan: 1 | 2;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: 'Strategy' | 'Digital' | 'Brand' | 'Systems';
  outcome: string;
  timeline: string;
  description: string;
  client: string;
  imageUrl?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  deliverables: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  impact: string;
}

export interface WebsiteConfig {
  id: string;
  templateName: string;
  brandName: string;
  tagline: string;
  primaryCtaLabel: string;
  navLinks: NavLink[];
  hero: {
    title: string;
    subhead: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    imageUrl: string;
    imageAlt: string;
  };
  proofStrip: {
    label: string;
    stat: string;
    context: string;
  }[];
  capabilities: {
    sectionKicker: string;
    sectionTitle: string;
    items: CapabilityItem[];
  };
  caseStudies: {
    sectionKicker: string;
    sectionTitle: string;
    items: CaseStudyItem[];
  };
  pricing: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubhead: string;
    tiers: PricingTier[];
  };
  testimonials: {
    sectionKicker: string;
    sectionTitle: string;
    items: TestimonialItem[];
  };
  contact: {
    sectionKicker: string;
    sectionTitle: string;
    subhead: string;
    email: string;
    officeLocation: string;
  };
  theme: {
    color: ColorTheme;
    fontPair: FontPair;
  };
  sectionsVisible: {
    hero: boolean;
    proof: boolean;
    capabilities: boolean;
    caseStudies: boolean;
    pricing: boolean;
    testimonials: boolean;
    contact: boolean;
  };
}

export const TEMPLATES: Record<string, WebsiteConfig> = {
  aura: {
    id: 'aura',
    templateName: 'Aura Digital (Creative Agency)',
    brandName: 'Aura Studio',
    tagline: 'High-performance digital design & web engineering for category leaders.',
    primaryCtaLabel: 'Schedule Discovery Call',
    navLinks: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Selected Work', href: '#work' },
      { label: 'Results', href: '#results' },
      { label: 'Engagement', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      title: 'We design digital products that drive market leadership.',
      subhead: 'Aura partners with high-growth companies to architect brand identities, responsive web platforms, and converted pipelines with craft and speed.',
      primaryCtaText: 'Schedule Discovery Call',
      secondaryCtaText: 'Explore Selected Work',
      imageUrl: '/src/assets/images/hero_agency_studio_1793635070416.jpg',
      imageAlt: 'Creative agency team collaborating in modern glass studio at twilight',
    },
    proofStrip: [
      { label: 'Client Pipeline Value', stat: '$148M', context: 'Generated across 34 product launches' },
      { label: 'Conversion Lift', stat: '+64%', context: 'Average improvement post-redesign' },
      { label: 'Average Delivery Time', stat: '6.5 wks', context: 'From sprint zero to production live' },
      { label: 'Net Promoter Score', stat: '94', context: 'Based on client retrospectives in 2026' },
    ],
    capabilities: {
      sectionKicker: 'Core Capabilities',
      sectionTitle: 'Engineered for measurable commercial outcomes',
      items: [
        {
          id: 'cap-1',
          number: '01',
          title: 'Full-Stack Web Architecture',
          description: 'Production web applications built with TypeScript, React, and modular serverless systems with sub-second paint times and WCAG AA accessibility.',
          metric: '99.98%',
          metricContext: 'Production uptime across deployed client applications',
          colSpan: 2,
        },
        {
          id: 'cap-2',
          number: '02',
          title: 'Brand Systems & Visual Direction',
          description: 'Comprehensive design guidelines, typographic scales, design tokens, and curated component libraries that scale across your entire organization.',
          metric: '3×',
          metricContext: 'Faster cross-team feature shipping velocity',
          colSpan: 1,
        },
        {
          id: 'cap-3',
          number: '03',
          title: 'Conversion Optimization & Inbound Engines',
          description: 'Precision landing funnels, structured messaging hierarchy, and friction-free user journeys engineered to turn cold organic visitors into qualified pipeline.',
          metric: '+142%',
          metricContext: 'Qualified demo bookings in first 90 days',
          colSpan: 1,
        },
        {
          id: 'cap-4',
          number: '04',
          title: 'Interactive Spatial & Micro-Interactions',
          description: 'Fluid 60fps animations, intuitive tactile feedback, and bespoke interactive visualizations that make complex products feel instantly comprehensible.',
          metric: '< 16ms',
          metricContext: 'Frame render budget with zero compositor jank',
          colSpan: 2,
        },
      ],
    },
    caseStudies: {
      sectionKicker: 'Selected Deployments',
      sectionTitle: 'Proven outcomes for companies defining their category',
      items: [
        {
          id: 'cs-1',
          title: 'Meridian Capital Platform Redesign',
          category: 'Systems',
          outcome: '+$4.2M Pipeline in 60 Days',
          timeline: '8 Weeks Delivery',
          client: 'Meridian Private Equity',
          description: 'Replaced a fragmented legacy portal with a unified institutional investor hub featuring real-time document discovery and automated deal data rooms.',
          imageUrl: '/src/assets/images/hero_tech_datacenter_1793635069965.jpg',
        },
        {
          id: 'cs-2',
          title: 'Kanso Living Architectural Portfolio',
          category: 'Digital',
          outcome: '+215% Inbound Commissions',
          timeline: '5 Weeks Delivery',
          client: 'Kanso Architecture Group',
          description: 'Crafted an editorial spatial showcase highlighting residential timber builds across the Pacific Northwest with custom photography galleries.',
          imageUrl: '/src/assets/images/showcase_architectural_home_1793635070142.jpg',
        },
        {
          id: 'cs-3',
          title: 'Norden Craft Specialty Goods',
          category: 'Brand',
          outcome: '3.8× Direct-to-Consumer GMV',
          timeline: '6 Weeks Delivery',
          client: 'Norden Ceramic Studios',
          description: 'Executed complete brand identity, packaging system, and headless e-commerce store with international currency checkout and inventory sync.',
          imageUrl: '/src/assets/images/showcase_artisan_craft_1793635070480.jpg',
        },
        {
          id: 'cs-4',
          title: 'Verve Robotics Launch Campaign',
          category: 'Strategy',
          outcome: '18,500 Qualified Waitlist Signups',
          timeline: '4 Weeks Delivery',
          client: 'Verve Automation Labs',
          description: 'Architected interactive interactive 3D product showcase and technical whitepaper portal ahead of Series A funding announcement.',
          imageUrl: '/src/assets/images/hero_agency_studio_1793635070416.jpg',
        },
      ],
    },
    pricing: {
      sectionKicker: 'Transparent Engagement',
      sectionTitle: 'Structured sprint pricing tailored to your roadmap',
      sectionSubhead: 'Every engagement includes a dedicated design lead, senior engineer, and full IP transfer with zero vendor lock-in.',
      tiers: [
        {
          id: 'tier-launch',
          name: 'Launch Sprint',
          price: '$6,500',
          period: 'one-time / 2 weeks',
          description: 'Ideal for early-stage companies and product drops requiring a marquee marketing landing page and converted lead funnel.',
          deliverables: [
            'Bespoke 5-section marketing landing page',
            'Full responsive desktop & mobile execution',
            'Lead capture integration with automated email trigger',
            'Typography & color design token setup',
            'Production deployment with sub-second performance',
          ],
          ctaText: 'Reserve Launch Sprint',
        },
        {
          id: 'tier-flagship',
          name: 'Flagship Platform',
          price: '$14,500',
          period: 'one-time / 5 weeks',
          description: 'Comprehensive web architecture and design system for scaling brands looking to consolidate multiple pages into a coherent engine.',
          isPopular: true,
          deliverables: [
            'Full multi-page architecture (Up to 8 core views)',
            'Complete component design system in React & Tailwind',
            'Interactive case studies & dynamic filtering logic',
            'Dynamic lead qualification & CRM intake workflows',
            'Dual-theme light/dark mode support',
            '30 days post-launch warranty & team handover',
          ],
          ctaText: 'Schedule Platform Scoping',
        },
        {
          id: 'tier-partner',
          name: 'Design & Code Retainer',
          price: '$8,200',
          period: 'per month / recurring',
          description: 'Dedicated senior design and full-stack engineering capacity integrated directly into your product sprints.',
          deliverables: [
            'Dedicated 40 hours monthly senior engineering',
            'Rapid prototype creation for new feature iterations',
            'Continuous SEO, performance, and accessibility audits',
            'Bi-weekly roadmap review and async Slack channel',
            'Cancel or pause anytime with 14-day notice',
          ],
          ctaText: 'Apply for Retainer Slot',
        },
      ],
    },
    testimonials: {
      sectionKicker: 'Client Verifications',
      sectionTitle: 'Straightforward feedback from founders and engineering leaders',
      items: [
        {
          quote: 'Aura delivered our entire institutional portal in five weeks flat. Our conversion on qualified investor inquiries went from 8% to 22% within thirty days of launch.',
          author: 'Elena Rostova',
          role: 'Managing Partner',
          organization: 'Meridian Capital Partners',
          impact: '2.75× Inquiry Conversion Rate',
        },
        {
          quote: 'The craft and speed are rare. They did not just design a pretty layout; they completely re-engineered our message and made our technical product instantly clear.',
          author: 'David Chen',
          role: 'Chief Technology Officer',
          organization: 'Verve Robotics',
          impact: '18,500 Waitlist Pre-orders',
        },
      ],
    },
    contact: {
      sectionKicker: 'Start a Project',
      sectionTitle: 'Ready to build something distinctive?',
      subhead: 'Tell us about your timeline and objectives. We respond with a scoping proposal within one business day.',
      email: 'partnerships@aurastudio.agency',
      officeLocation: '742 Montgomery St, San Francisco, CA',
    },
    theme: {
      color: 'indigo',
      fontPair: 'modern-sans',
    },
    sectionsVisible: {
      hero: true,
      proof: true,
      capabilities: true,
      caseStudies: true,
      pricing: true,
      testimonials: true,
      contact: true,
    },
  },
  vanguard: {
    id: 'vanguard',
    templateName: 'Vanguard Systems (Tech & Cloud)',
    brandName: 'Vanguard Cloud',
    tagline: 'High-throughput cloud data architecture and real-time observability.',
    primaryCtaLabel: 'Deploy Sandbox Instance',
    navLinks: [
      { label: 'Infrastructure', href: '#capabilities' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Benchmarks', href: '#results' },
      { label: 'Compute Tiers', href: '#pricing' },
      { label: 'Talk to an Engineer', href: '#contact' },
    ],
    hero: {
      title: 'Resilient cloud infrastructure built for sub-millisecond execution.',
      subhead: 'Vanguard delivers dedicated compute clusters, distributed vector indexing, and zero-egress telemetry for engineering organizations processing petabytes daily.',
      primaryCtaText: 'Deploy Sandbox Instance',
      secondaryCtaText: 'Review System Benchmarks',
      imageUrl: '/src/assets/images/hero_tech_datacenter_1793635069965.jpg',
      imageAlt: 'High-tech server room with illuminated dark computing racks',
    },
    proofStrip: [
      { label: 'Global Mean Latency', stat: '4.8ms', context: 'Measured across 28 edge point-of-presence zones' },
      { label: 'Data Ingestion Rate', stat: '1.2TB/s', context: 'Peak sustained throughput without backpressure' },
      { label: 'Core SLA Guarantee', stat: '99.999%', context: 'Financial uptime warranty backed by smart contract' },
      { label: 'Cost Reduction vs AWS', stat: '42%', context: 'Average egress and compute savings verified' },
    ],
    capabilities: {
      sectionKicker: 'System Specifications',
      sectionTitle: 'Distributed computing without proprietary vendor lock-in',
      items: [
        {
          id: 'v-1',
          number: '01',
          title: 'Distributed Compute Orchestration',
          description: 'Stateless containerized workload runners with cold start times under 30 milliseconds and automatic horizontal scale-to-zero when idle.',
          metric: '28ms',
          metricContext: 'Median worker container startup time',
          colSpan: 2,
        },
        {
          id: 'v-2',
          number: '02',
          title: 'Zero-Egress Distributed Storage',
          description: 'S3-compatible global object storage with encrypted multi-region replication and absolutely zero egress bandwidth fees.',
          metric: '$0.00',
          metricContext: 'Egress fees charged across all tier bandwidths',
          colSpan: 1,
        },
        {
          id: 'v-3',
          number: '03',
          title: 'Hardware-Enforced Cryptographic Enclaves',
          description: 'Confidential compute instances running on AMD SEV-SNP chips with attestation verification and zero root access for host operators.',
          metric: '256-bit',
          metricContext: 'Hardware memory encryption key rotation',
          colSpan: 1,
        },
        {
          id: 'v-4',
          number: '04',
          title: 'Real-Time Vector Indexing Engine',
          description: 'High-cardinality approximate nearest neighbor search capable of querying billion-scale vector embeddings with sub-10ms recall.',
          metric: '9.2ms',
          metricContext: 'Query latency on 100M dense embeddings',
          colSpan: 2,
        },
      ],
    },
    caseStudies: {
      sectionKicker: 'Technical Benchmarks',
      sectionTitle: 'Battle-tested under real production spikes',
      items: [
        {
          id: 'cs-v1',
          title: 'FinScale High-Frequency Settlement',
          category: 'Systems',
          outcome: '0.00% Packet Loss during 4M req/s Spikes',
          timeline: 'Production Deployment',
          client: 'FinScale Technologies',
          description: 'Migrated transactional ledger to Vanguard distributed instances, reducing peak p99 latency from 140ms down to 12ms.',
          imageUrl: '/src/assets/images/hero_tech_datacenter_1793635069965.jpg',
        },
        {
          id: 'cs-v2',
          title: 'BioGenomic Mapping Pipeline',
          category: 'Digital',
          outcome: '73% Faster Sequence Batch Processing',
          timeline: 'Cluster Optimization',
          client: 'BioGenomic Institute',
          description: 'Accelerated genetic variant identification pipelines using parallel spot compute nodes with immediate fault recovery.',
          imageUrl: '/src/assets/images/hero_agency_studio_1793635070416.jpg',
        },
      ],
    },
    pricing: {
      sectionKicker: 'Compute Capacity',
      sectionTitle: 'Deterministic compute pricing with zero surprise bills',
      sectionSubhead: 'Fixed monthly hardware allocations with transparent burst pricing. Cancel or scale anytime.',
      tiers: [
        {
          id: 'tier-dev',
          name: 'Developer Cluster',
          price: '$240',
          period: 'per month / fixed',
          description: 'Dedicated staging cluster with 8 vCPUs, 32GB RAM, and 500GB NVMe storage for pre-production testing.',
          deliverables: [
            '8 Dedicated AMD EPYC vCPUs',
            '32GB ECC DDR5 Memory',
            '500GB NVMe RAID-1 Storage',
            'Unlimited ingress & egress traffic',
            'Automated nightly snapshot backups',
          ],
          ctaText: 'Launch Developer Node',
        },
        {
          id: 'tier-scale',
          name: 'Production Fleet',
          price: '$1,250',
          period: 'per month / fixed',
          description: 'Multi-zone redundant cluster with automated failover, private VPC peering, and 24/7 dedicated engineering support.',
          isPopular: true,
          deliverables: [
            '48 Dedicated AMD EPYC vCPUs across 3 zones',
            '192GB ECC DDR5 Memory',
            '4TB NVMe Ultra-Fast Storage',
            'Sub-15 minute SLA response guarantee',
            'Hardware security module (HSM) keys',
            'Dedicated solutions architect channel',
          ],
          ctaText: 'Deploy Production Fleet',
        },
        {
          id: 'tier-enterprise',
          name: 'Bare Metal Dedicated',
          price: '$4,800',
          period: 'per month / bespoke',
          description: 'Custom bare-metal cabinets connected via private dark fiber links for financial and healthcare compliance.',
          deliverables: [
            'Full dual-socket AMD server blades',
            'SOC 2 Type II, HIPAA & ISO 27001 compliance',
            'Custom hardware attestation profiles',
            'Direct dark-fiber cross connects',
            '100% financial uptime SLA guarantee',
          ],
          ctaText: 'Contact Cloud Architect',
        },
      ],
    },
    testimonials: {
      sectionKicker: 'Verified Deployments',
      sectionTitle: 'Trusted by infrastructure architects',
      items: [
        {
          quote: 'Our monthly AWS bill was exceeding $65,000 mostly from egress charges. Vanguard slashed that by 40% while cutting our API p99 latency in half.',
          author: 'Marcus Vance',
          role: 'VP of Infrastructure',
          organization: 'DataStream Global',
          impact: '42% Cost Reduction / 2× Speed',
        },
      ],
    },
    contact: {
      sectionKicker: 'Schedule Architecture Review',
      sectionTitle: 'Speak directly with an infrastructure engineer',
      subhead: 'No sales pitch. Share your workload metrics and our architects will benchmark performance for your stack.',
      email: 'architecture@vanguardcloud.io',
      officeLocation: '500 Howard Street, San Francisco, CA',
    },
    theme: {
      color: 'slate',
      fontPair: 'geometric',
    },
    sectionsVisible: {
      hero: true,
      proof: true,
      capabilities: true,
      caseStudies: true,
      pricing: true,
      testimonials: true,
      contact: true,
    },
  },
  solstice: {
    id: 'solstice',
    templateName: 'Solstice Living (Architecture & Space)',
    brandName: 'Solstice Atelier',
    tagline: 'Sustainable architectural residences shaped by natural light and regional timber.',
    primaryCtaLabel: 'Request Private Monograph',
    navLinks: [
      { label: 'Philosophy', href: '#capabilities' },
      { label: 'Residences', href: '#work' },
      { label: 'Craft & Metrics', href: '#results' },
      { label: 'Commissions', href: '#pricing' },
      { label: 'Inquiry', href: '#contact' },
    ],
    hero: {
      title: 'Architectural residences crafted in harmony with landscape.',
      subhead: 'Solstice designs bespoke private homes and contemplative spaces defined by rammed earth, blackened cedar, and quiet daylight orchestration.',
      primaryCtaText: 'Request Private Monograph',
      secondaryCtaText: 'View Built Works',
      imageUrl: '/src/assets/images/showcase_architectural_home_1793635070142.jpg',
      imageAlt: 'Modern concrete and cedar residence nestled among pine trees at sunset',
    },
    proofStrip: [
      { label: 'Completed Residences', stat: '24', context: 'Across California, Oregon, and Washington' },
      { label: 'AIA & Architectural Awards', stat: '16', context: 'Recognized for regional material stewardship' },
      { label: 'Passive Energy Efficiency', stat: 'Net-Zero', context: 'Targeted on 100% of new commissions' },
      { label: 'Material Sourcing Distance', stat: '< 150mi', context: 'Average radius for stone and timber origins' },
    ],
    capabilities: {
      sectionKicker: 'Design Philosophy',
      sectionTitle: 'Spaces conceived as quiet continuations of the terrain',
      items: [
        {
          id: 's-1',
          number: '01',
          title: 'Site-Specific Solar Orientation',
          description: 'Every roof overhang, window datum, and thermal mass wall is calibrated to the summer solstice solar azimuth to eliminate mechanical cooling loads.',
          metric: '85%',
          metricContext: 'Daylight autonomy across living zones',
          colSpan: 2,
        },
        {
          id: 's-2',
          number: '02',
          title: 'Regional Mass Timber Engineering',
          description: 'Precision cross-laminated timber (CLT) panels and local Douglas fir beams that sequester carbon while creating warm acoustic envelopes.',
          metric: '180t',
          metricContext: 'Average carbon offset per residential build',
          colSpan: 1,
        },
        {
          id: 's-3',
          number: '03',
          title: 'Tactile Material Authenticity',
          description: 'Cast-in-place board-marked concrete, hand-troweled lime plaster, and unlacquered bronze fittings that develop an honest patina with time.',
          metric: '100+ yr',
          metricContext: 'Structural lifecycle durability specification',
          colSpan: 1,
        },
        {
          id: 's-4',
          number: '04',
          title: 'Indoor-Outdoor Biophilic Thresholds',
          description: 'Concealed pocketing glass doors and continuous stone floors that dissolve the boundary between enclosed living quarters and native garden plantings.',
          metric: '0.12',
          metricContext: 'Air changes per hour envelope airtightness',
          colSpan: 2,
        },
      ],
    },
    caseStudies: {
      sectionKicker: 'Built Residences',
      sectionTitle: 'A selection of completed commissions',
      items: [
        {
          id: 'cs-s1',
          title: 'The Pine Ridge Pavilion',
          category: 'Strategy',
          outcome: 'AIA Pacific Northwest Honor Award',
          timeline: 'Completed 2025',
          client: 'Private Residence, Bend OR',
          description: 'A 4,200 sq ft single-level residence nestled inside an old-growth ponderosa grove featuring rammed-earth thermal cores.',
          imageUrl: '/src/assets/images/showcase_architectural_home_1793635070142.jpg',
        },
        {
          id: 'cs-s2',
          title: 'Coast Range Sanctuary',
          category: 'Brand',
          outcome: 'Net-Positive Energy Certification',
          timeline: 'Completed 2024',
          client: 'Private Residence, Mendocino CA',
          description: 'Cliffside retreat built from salvaged redwood and zinc cladding, completely powered by rooftop solar array and rainwater harvesting.',
          imageUrl: '/src/assets/images/showcase_artisan_craft_1793635070480.jpg',
        },
      ],
    },
    pricing: {
      sectionKicker: 'Commission Models',
      sectionTitle: 'Disciplined practice accepting three commissions annually',
      sectionSubhead: 'We maintain an intentional studio size to ensure principal architect oversight on every detail from soil test to key handover.',
      tiers: [
        {
          id: 'tier-concept',
          name: 'Site Feasibility & Concept',
          price: '$12,000',
          period: 'one-time study',
          description: 'Comprehensive topographical survey, zoning analysis, microclimate mapping, and preliminary massing studies for raw land acquisitions.',
          deliverables: [
            'On-site environmental & daylight mapping',
            'Zoning setback and environmental review',
            '3 Curated massing and orientation concepts',
            'Preliminary material and timber schedule',
            'Full concept presentation booklet',
          ],
          ctaText: 'Commission Feasibility Study',
        },
        {
          id: 'tier-full',
          name: 'Full Architectural Practice',
          price: '14% - 16%',
          period: 'of construction budget',
          description: 'End-to-end architectural services through schematic design, permitting, construction documentation, and weekly on-site administration.',
          isPopular: true,
          deliverables: [
            'Complete architectural schematic & design development',
            'Structural mass-timber engineering coordination',
            'Custom interior cabinetry & lighting schedules',
            'City permit expediting and hearing representation',
            'Weekly on-site construction administration until move-in',
          ],
          ctaText: 'Inquire for Commission',
        },
      ],
    },
    testimonials: {
      sectionKicker: 'Resident Experiences',
      sectionTitle: 'Reflections from homeowners living in Solstice spaces',
      items: [
        {
          quote: 'Waking up in this home changed how our family lives. The light enters each room exactly when you need it, and the quietness of the timber acoustics is profound.',
          author: 'Sarah & Julian Thorne',
          role: 'Homeowners',
          organization: 'Pine Ridge Pavilion',
          impact: 'Completed 2025',
        },
      ],
    },
    contact: {
      sectionKicker: 'Private Consultation',
      sectionTitle: 'Discuss your residential site with our team',
      subhead: 'We welcome conversations regarding land acquisitions, retreats, and architectural projects for 2026 and 2027.',
      email: 'studio@solsticeatelier.com',
      officeLocation: '1120 NW Couch St, Portland, Oregon',
    },
    theme: {
      color: 'amber',
      fontPair: 'editorial-serif',
    },
    sectionsVisible: {
      hero: true,
      proof: true,
      capabilities: true,
      caseStudies: true,
      pricing: true,
      testimonials: true,
      contact: true,
    },
  },
  kanso: {
    id: 'kanso',
    templateName: 'Kanso Craft (Artisan & Goods)',
    brandName: 'Kanso Goods',
    tagline: 'Curated stoneware, cast ceramics, and organic linen goods for daily ritual.',
    primaryCtaLabel: 'Explore Curated Collection',
    navLinks: [
      { label: 'Craft & Clay', href: '#capabilities' },
      { label: 'The Works', href: '#work' },
      { label: 'Provenance', href: '#results' },
      { label: 'Wholesale & Sets', href: '#pricing' },
      { label: 'Studio Visits', href: '#contact' },
    ],
    hero: {
      title: 'Objects shaped by hand for thoughtful everyday rituals.',
      subhead: 'Slow-fired ceramics, tactile stoneware pitchers, and natural linen textiles crafted in limited studio batches from regional clays and botanical dyes.',
      primaryCtaText: 'Explore Curated Collection',
      secondaryCtaText: 'Read Provenance Notes',
      imageUrl: '/src/assets/images/showcase_artisan_craft_1793635070480.jpg',
      imageAlt: 'Handcrafted ceramic pitcher and stoneware bowls on neutral travertine stone',
    },
    proofStrip: [
      { label: 'Wood-Kiln Temperature', stat: '1,280°C', context: 'High-fire cone 10 reduction for vitrified density' },
      { label: 'Batch Limitation', stat: '85 pcs', context: 'Maximum editions thrown per glaze formulation' },
      { label: 'Natural Clay Purity', stat: '100%', context: 'Wild-harvested sedimentary iron clays from Nagano' },
      { label: 'Plastic-Free Packaging', stat: 'Zero Plastic', context: 'Recycled shredded paper and wax-sealed cartons' },
    ],
    capabilities: {
      sectionKicker: 'Studio Discipline',
      sectionTitle: 'Honoring imperfections and the hand of the maker',
      items: [
        {
          id: 'k-1',
          number: '01',
          title: 'Single-Batch Wood Kiln Firings',
          description: 'Each vessel spends 72 hours inside our anagama kiln where flying wood ash creates natural unrepeatable amber glaze gradients.',
          metric: '72 hrs',
          metricContext: 'Continuous manual wood-stoking cycle',
          colSpan: 2,
        },
        {
          id: 'k-2',
          number: '02',
          title: 'Organic Food-Safe Mineral Glazes',
          description: 'Formulated exclusively from crushed feldspar, rice husk ash, and local iron oxides without synthetic chemical stabilizers.',
          metric: '0% Toxins',
          metricContext: 'Lead, cadmium, and synthetic colorant free',
          colSpan: 1,
        },
        {
          id: 'k-3',
          number: '03',
          title: 'Tactile Weight & Balance',
          description: 'Designed specifically for the curve of the palm, balancing dense thermal retention with a pleasant lightweight lip for drinking.',
          metric: '420g',
          metricContext: 'Ideal ergonomic center-of-mass balance',
          colSpan: 1,
        },
        {
          id: 'k-4',
          number: '04',
          title: 'Dishwasher & Oven Durable',
          description: 'High-temperature vitrification binds the clay body into non-porous stoneware that resists thermal shock and daily kitchen use.',
          metric: 'Cone 10',
          metricContext: 'High-fired vitrification milestone',
          colSpan: 2,
        },
      ],
    },
    caseStudies: {
      sectionKicker: 'Signature Editions',
      sectionTitle: 'Limited releases available for collectors',
      items: [
        {
          id: 'cs-k1',
          title: 'Ash-Glazed Pouring Pitcher & Cups',
          category: 'Brand',
          outcome: 'Edition of 40 Signed Pieces',
          timeline: 'Nagano Kiln Run',
          client: 'Studio Signature Collection',
          description: 'Hand-thrown stoneware pitcher with pinched pouring spout and pair of tactile matching water cups with natural wood ash glaze.',
          imageUrl: '/src/assets/images/showcase_artisan_craft_1793635070480.jpg',
        },
        {
          id: 'cs-k2',
          title: 'Architectural Tea Service',
          category: 'Digital',
          outcome: 'Collaboration with Kyoto Teahouse',
          timeline: 'Autumn Harvest Edition',
          client: 'Wabi Teas',
          description: 'Matte black iron clay teapot with carved cypress handle and cedar presentation box wrapped in unbleached organic linen.',
          imageUrl: '/src/assets/images/hero_agency_studio_1793635070416.jpg',
        },
      ],
    },
    pricing: {
      sectionKicker: 'Curated Sets',
      sectionTitle: 'Handcrafted stoneware sets for table and studio',
      sectionSubhead: 'Each piece arrives stamped with the studio maker mark and accompanied by an archival firing certificate.',
      tiers: [
        {
          id: 'tier-morning',
          name: 'The Morning Ritual Set',
          price: '$180',
          period: 'set of 3 pieces',
          description: 'Two hand-thrown coffee cups and a matching pourer in warm travertine ash glaze for slow morning brewing.',
          deliverables: [
            '2 × 300ml Tactile Stoneware Cups',
            '1 × 450ml Hand-pinched Milk/Drip Pitcher',
            'Raw linen storage pouch',
            'Signed studio provenance card',
            'Complimentary insured courier delivery',
          ],
          ctaText: 'Acquire Morning Set',
        },
        {
          id: 'tier-table',
          name: 'The Full Dinner Suite',
          price: '$520',
          period: 'set of 12 pieces',
          description: 'Complete dining setting for four, including rimmed dinner plates, soup bowls, and dessert vessels in matching natural glaze.',
          isPopular: true,
          deliverables: [
            '4 × 26cm Flat Dinner Plates',
            '4 × 18cm Deep Cereal/Soup Bowls',
            '4 × 15cm Side Dessert Plates',
            'Reinforced wood storage crate',
            'Lifetime break-and-replace guarantee at 50% discount',
          ],
          ctaText: 'Acquire Table Suite',
        },
      ],
    },
    testimonials: {
      sectionKicker: 'Collector Notes',
      sectionTitle: 'Notes from homes and restaurants using Kanso vessels',
      items: [
        {
          quote: 'Holding these cups is a tactile joy every morning. The weight is balanced, the lip is smooth, and the wood ash glaze has subtle nuances that deepen with tea drinking.',
          author: 'Kenji Takahashi',
          role: 'Restaurateur & Tea Sommelier',
          organization: 'Sora Dining Tokyo',
          impact: 'Collector since 2023',
        },
      ],
    },
    contact: {
      sectionKicker: 'Studio Inquiries',
      sectionTitle: 'Wholesale orders and private commissions',
      subhead: 'We partner with selected boutique hotels, restaurants, and private residences on bespoke tabletop commissions.',
      email: 'atelier@kansogoods.com',
      officeLocation: '218 Kyoto Arts District, Japan',
    },
    theme: {
      color: 'emerald',
      fontPair: 'editorial-serif',
    },
    sectionsVisible: {
      hero: true,
      proof: true,
      capabilities: true,
      caseStudies: true,
      pricing: true,
      testimonials: true,
      contact: true,
    },
  },
};
