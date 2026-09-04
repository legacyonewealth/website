import { SolutionCategory, ApproachStep, ValueItem, FounderProfile } from '../types';

export const BRAND_INFO = {
  legalEntity: 'LegacyOne Wealth Financial Services LLP',
  brandName: 'LegacyOne Wealth',
  tagline: 'Create Wealth. Protect What Matters. Build a Legacy.',
  motto: 'Create, Grow, Preserve – Legacy',
  familyDoctorMetaphor: 'Every family has a family doctor. We endeavor to be your family\'s trusted wealth partner.',
  cityRoots: 'Born in Mumbai. Built for India.',
  location: {
    address: '5th Floor, CLC Tower, Sector-44, Gurgaon, Haryana - 122003',
    city: 'Gurgaon',
    country: 'India',
    phone: '+91 98XXX XXXXX',
    email: 'invest@legacyonewealth.com',
    supportEmail: 'invest@legacyonewealth.com',
    hours: 'Monday – Friday: 9:30 AM – 6:30 PM IST'
  },
  regulatoryDisclaimer: `LegacyOne Wealth Financial Services LLP is engaged in the distribution and facilitation of financial products and services, subject to applicable laws and regulations. The firm operates as a financial products distributor/intermediary within the applicable regulatory framework and is not a SEBI-registered Investment Adviser (RIA). Information presented on this website is for general informational purposes and should not be construed as a guarantee of returns, performance, or fee-based independent investment advice. Investments and financial products are subject to market risks and product-specific terms and conditions. Past performance is not indicative of future results. Product availability, eligibility, and tax treatment may vary based on individual circumstances and prevailing regulations. Clients should carefully review all relevant product information documents before making financial decisions.`
};

export const DIFFERENCE_ITEMS = [
  {
    id: 'client-first',
    title: 'Client First',
    description: 'Every relationship begins with understanding you, your family, and your goals. Our objective is long-term wealth optimisation rather than pushing individual products.',
    icon: 'ShieldCheck'
  },
  {
    id: 'one-wealth-view',
    title: 'One Wealth View',
    description: 'A broader, holistic view across investments, protection, taxation, and wealth-transfer considerations to ensure no financial aspect operates in a silo.',
    icon: 'Compass'
  },
  {
    id: 'technical-depth',
    title: 'Technical Depth',
    description: 'Deep understanding across a wide spectrum of financial products and market opportunities, backed by structured evaluation and continuous research.',
    icon: 'BookOpen'
  },
  {
    id: 'market-discipline',
    title: 'Market Discipline',
    description: 'Built on the financial-market ethos, disciplined execution, and on-ground market understanding shaped in India\'s financial capital.',
    icon: 'Building2'
  },
  {
    id: 'global-perspective',
    title: 'Global Perspective',
    description: 'Continuous awareness of global macroeconomic developments, asset-class trends, and cross-border developments where legally permissible.',
    icon: 'Globe'
  },
  {
    id: 'long-term-relationships',
    title: 'Long-Term Relationships',
    description: 'We endeavor to remain your trusted wealth partner through different stages of life and across generations, rather than focusing merely on transactions.',
    icon: 'Users'
  }
];

export const VALUES_ITEMS: ValueItem[] = [
  {
    title: 'Integrity',
    description: 'Uncompromising adherence to ethical conduct, transparency, and doing what is right for the client at every juncture.',
    icon: 'Award'
  },
  {
    title: 'Transparency',
    description: 'Complete clarity in communications, product structures, risk factors, and distribution mechanisms.',
    icon: 'Eye'
  },
  {
    title: 'Client First',
    description: 'Your aspirations and constraints define every recommendation. We never start with a pre-decided product.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Knowledge',
    description: 'Relentless commitment to technical depth, product due diligence, and staying abreast of dynamic market trends.',
    icon: 'GraduationCap'
  },
  {
    title: 'Responsibility',
    description: 'Treating client trust and capital stewardship with the utmost discipline, prudence, and seriousness.',
    icon: 'Shield'
  },
  {
    title: 'Long-Term Thinking',
    description: 'Focusing on sustainable compounding, wealth preservation, and intergenerational continuity over fleeting fads.',
    icon: 'TrendingUp'
  },
  {
    title: 'Confidentiality',
    description: 'Discreet, bank-grade privacy regarding your personal affairs, financial holdings, and family legacy planning.',
    icon: 'Lock'
  },
  {
    title: 'Relationship',
    description: 'Being available across market cycles as your family\'s enduring wealth sounding board and partner.',
    icon: 'Sparkles'
  }
];

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: 'creation-growth',
    title: 'Wealth Creation & Growth',
    subtitle: 'Strategic capital growth and structured accumulation across market cycles.',
    description: 'Facilitating access to diversified, high-quality investment vehicles designed to match varied risk appetites and wealth-building horizons.',
    iconName: 'TrendingUp',
    products: [
      {
        id: 'mutual-funds',
        name: 'Mutual Funds (MFs)',
        tagline: 'Systematic compounding across equity, debt, and hybrid assets',
        description: 'Access to a comprehensive universe of actively managed and index-oriented mutual fund schemes across large-cap, mid-cap, flexi-cap, thematic, debt, and liquid categories for disciplined wealth accumulation.',
        suitability: 'Suitable for individuals and families seeking liquid, professionally managed, tax-efficient long-term wealth compounding.',
        keyAspects: ['SIP & STP Facilitation', 'Goal-based allocation', 'Direct distributor servicing', 'Portfolio rebalancing support'],
        category: 'creation'
      },
      {
        id: 'pms',
        name: 'Portfolio Management Services (PMS)',
        tagline: 'Focused, high-conviction discretionary and non-discretionary equity portfolios',
        description: 'Curated access to leading institutional portfolio managers offering concentrated strategies, active alpha generation, and institutional governance.',
        suitability: 'HNIs seeking tailored equity ownership with higher conviction strategies (subject to SEBI minimum investment mandates).',
        keyAspects: ['Direct stock ownership', 'Concentrated alpha strategies', 'Detailed performance attribution', 'Quarterly manager updates'],
        category: 'creation'
      },
      {
        id: 'aifs',
        name: 'Alternative Investment Funds (AIFs)',
        tagline: 'Private equity, venture capital, structured credit, and long-short funds (Cat I, II, III)',
        description: 'Facilitating participation in private market opportunities, real estate funds, pre-IPO growth equity, and specialized hedge strategies for qualified high-net-worth investors.',
        suitability: 'Ultra-HNIs and family offices looking for non-market-correlated returns and differentiated asset classes.',
        keyAspects: ['Category I, II & III options', 'Private market exposure', 'Long-term value creation', 'Institutional risk underwriting'],
        category: 'creation'
      },
      {
        id: 'reits-invits',
        name: 'REITs & InvITs',
        tagline: 'Institutional-grade real estate and infrastructure yield instruments',
        description: 'Access to liquid, income-generating instruments backed by premium Grade-A commercial office parks, logistics hubs, and national infrastructure assets.',
        suitability: 'Investors seeking regular cash distributions combined with potential capital appreciation from prime commercial assets.',
        keyAspects: ['Regular distribution mandates', 'Fractional ownership in Grade-A assets', 'Liquidity through stock exchanges', 'Inflation-hedging properties'],
        category: 'creation'
      },
      {
        id: 'bonds-ncds',
        name: 'Bonds & NCDs',
        tagline: 'Predictable cash flows through sovereign, PSU, and corporate fixed income',
        description: 'Curated distribution of Government Securities (G-Secs), State Development Loans (SDLs), AAA/AA+ rated corporate bonds, and Non-Convertible Debentures (NCDs) to anchor capital preservation.',
        suitability: 'Investors seeking steady, predictable income streams and capital stability to balance equity market volatility.',
        keyAspects: ['High-credit-rated issuances', 'Defined tenure and coupon schedule', 'Secondary market liquidity options', 'Capital preservation focus'],
        category: 'creation'
      }
    ]
  },
  {
    id: 'wealth-protection',
    title: 'Wealth Protection & Risk Management',
    subtitle: 'Safeguarding family security, health, and enterprise assets against uncertainties.',
    description: 'A comprehensive wealth strategy is incomplete without safeguarding what you have built. We facilitate access to structured risk management and insurance solutions.',
    iconName: 'Shield',
    products: [
      {
        id: 'life-insurance',
        name: 'Life & Term Protection',
        tagline: 'Pure risk cover and comprehensive family income security',
        description: 'High-sum-assured term insurance solutions with tailored riders (critical illness, accidental disability, waiver of premium) to protect your family\'s standard of living and long-term commitments.',
        suitability: 'Earning heads of families, business owners, and individuals with financial liabilities or dependent family members.',
        keyAspects: ['High coverage at optimal premiums', 'Married Women\'s Property (MWP) Act protection options', 'Keyman insurance for enterprises', 'Custom claim-support assistance'],
        category: 'protection'
      },
      {
        id: 'health-protection',
        name: 'Comprehensive Health & Critical Care',
        tagline: 'High-cover medical protection, top-ups, and global treatment access',
        description: 'Super top-up structures, global treatment riders, and comprehensive indemnity policies ensuring medical inflation does not erode accumulated wealth.',
        suitability: 'Families seeking uninterrupted access to premier healthcare institutions without depleting investment reserves.',
        keyAspects: ['Zero co-payment structures', 'Restoration benefits & worldwide coverage options', 'Critical illness lumsum payout', 'Cashless network hospital coordination'],
        category: 'protection'
      },
      {
        id: 'asset-protection',
        name: 'Asset & Wealth Protection Solutions',
        tagline: 'Safeguarding personal, commercial, and legacy tangible assets',
        description: 'Facilitating specialized protection structures for high-value residential properties, art, luxury assets, and enterprise liability exposures.',
        suitability: 'Business owners, senior executives, and collectors seeking comprehensive liability and asset safeguards.',
        keyAspects: ['Directors & Officers (D&O) liability', 'Commercial property risk mitigation', 'Home and valuable asset coverage', 'Disaster and casualty protection'],
        category: 'protection'
      }
    ]
  },
  {
    id: 'wealth-optimisation',
    title: 'Wealth Optimisation & Tax Efficiency',
    subtitle: 'Structuring investments with a sharp focus on net post-tax outcomes and goal alignment.',
    description: 'Helping clients evaluate the tax efficiency of their overall financial holdings, streamline asset allocation, and align product structures with family goals.',
    iconName: 'PieChart',
    products: [
      {
        id: 'tax-planning-assistance',
        name: 'Tax-Efficiency Assistance',
        tagline: 'Optimising post-tax returns across the financial product spectrum',
        description: 'Guidance on tax-advantaged structures within applicable provisions of the Indian Income Tax Act, capital gains harvesting considerations, indexation strategies, and tax-efficient asset location.',
        suitability: 'HNIs and salaried professionals looking to legally maximize post-tax portfolio retention.',
        keyAspects: ['Capital gains review', 'LTCG / STCG harvesting awareness', 'Tax-efficient distribution structures', 'Coordination with client\'s CA/tax advisors'],
        category: 'optimisation'
      },
      {
        id: 'portfolio-review',
        name: 'Holistic Portfolio Review',
        tagline: 'Diagnostic review of existing holdings for overlap, underperformance, and risk',
        description: 'A structured evaluation of your existing mutual funds, direct stocks, insurance policies, and fixed income to identify redundancies, excessive expense ratios, or unintended risk concentrations.',
        suitability: 'Investors with scattered holdings accumulated over years across multiple institutions.',
        keyAspects: ['Fund overlap identification', 'Expense ratio rationalisation', 'Asset allocation heat mapping', 'Consolidated risk-adjusted score'],
        category: 'optimisation'
      },
      {
        id: 'legacy-transfer-planning',
        name: 'Wealth Transfer & Legacy Considerations',
        tagline: 'Frictionless intergenerational wealth continuity and succession structuring',
        description: 'Facilitating smooth transmission of financial assets to the next generation through nomination hygiene, joint-holding structures, and assistance with estate planning facilitation.',
        suitability: 'Families seeking peace of mind regarding the seamless handover of family wealth.',
        keyAspects: ['Nomination and title audit', 'Transmission process assistance', 'Family wealth orientation for heirs', 'Private trust and succession partner coordination'],
        category: 'optimisation'
      }
    ]
  },
  {
    id: 'specialised-global',
    title: 'Specialised & Global Perspective',
    subtitle: 'Tracking unique market opportunities and cross-border developments with prudence.',
    description: 'We continuously monitor emerging opportunities, specialized financial instruments, and global economic currents to provide timely perspective within regulatory boundaries.',
    iconName: 'Compass',
    products: [
      {
        id: 'specialised-opportunities',
        name: 'Specialised & Emerging Opportunities',
        tagline: 'Evaluating niche and unlisted market developments where legally permitted',
        description: 'Tracking unique market offerings, unlisted shares, structured market-linked debentures, and specialized yield products based on client eligibility and clear risk underwriting.',
        suitability: 'Accredited investors seeking selective allocation to specialized opportunities with defined risk parameters.',
        keyAspects: ['Rigorous pre-filtering', 'Transparent risk disclosure', 'Strict regulatory adherence', 'Suitability-first qualification'],
        category: 'specialised'
      },
      {
        id: 'global-perspective',
        name: 'Global Macro & Cross-Border Perspective',
        tagline: 'Tracking international markets and LRS-permitted structures',
        description: 'Maintaining continuous intelligence on global interest rate cycles, currency trends, and international fund-of-funds or LRS-compliant structures as allowed under RBI guidelines.',
        suitability: 'Clients with global aspirations, overseas children education commitments, or geographic diversification goals.',
        keyAspects: ['RBI LRS compliance awareness', 'Global asset class tracking', 'Currency risk considerations', 'International feeder fund facilitation'],
        category: 'specialised'
      }
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    stepNumber: '01',
    title: 'Know You & Your Story',
    headline: 'Every relationship begins with listening',
    summary: 'We delve into your family background, profession, financial history, commitments, and the values that drive your aspirations.',
    details: [
      'Understanding your family dynamics, life stage, and dependent needs',
      'Reviewing profession, business cash flows, and liquidity horizons',
      'Identifying your core financial philosophy and long-term vision'
    ],
    icon: 'UserCheck'
  },
  {
    stepNumber: '02',
    title: 'Understand Your Risk',
    headline: 'Distinguishing risk appetite from true risk capacity',
    summary: 'We evaluate how much volatility your portfolio can sustain objectively versus how comfortable you are emotionally during market cycles.',
    details: [
      'Assessing risk appetite (psychological comfort with drawdowns)',
      'Evaluating risk capacity (income stability, emergency buffer, time horizon)',
      'Aligning portfolio temperament with life milestones'
    ],
    icon: 'ShieldAlert'
  },
  {
    stepNumber: '03',
    title: 'Map Your Wealth Ecosystem',
    headline: 'Creating a single unified picture of what you already own',
    summary: 'We audit your existing investments, insurance coverage, fixed income, real estate, and liabilities to identify gaps and overlaps.',
    details: [
      'Collating scattered holdings across institutions and asset managers',
      'Diagnosing portfolio redundancies, high fee drag, or underperforming assets',
      'Evaluating existing life and health protection adequacy'
    ],
    icon: 'Layers'
  },
  {
    stepNumber: '04',
    title: 'Define Your Goals & Milestones',
    headline: 'Transforming aspirations into structured financial milestones',
    summary: 'Categorizing goals into short-term liquidity, medium-term milestones (education, property, business expansion), and long-term legacy.',
    details: [
      'Short-term (1-3 yrs): Capital preservation & emergency liquidity',
      'Medium-term (3-7 yrs): Children\'s higher education, milestone assets',
      'Long-term (7+ yrs): Retirement independence & intergenerational transfer'
    ],
    icon: 'Target'
  },
  {
    stepNumber: '05',
    title: 'Explore & Evaluate Solutions',
    headline: 'Selecting suitable instruments from a wide financial universe',
    summary: 'We evaluate relevant products across Mutual Funds, PMS, AIFs, Bonds, Insurance, and structured instruments that fit your specific parameters.',
    details: [
      'Selecting high-quality managers and instruments with proven track records',
      'Ensuring tax efficiency, appropriate liquidity, and transparent cost structures',
      'Providing clear suitability explanations before execution'
    ],
    icon: 'Search'
  },
  {
    stepNumber: '06',
    title: 'Implement & Stay the Course',
    headline: 'A lifelong partnership through changing market cycles',
    summary: 'We facilitate seamless transaction execution and maintain continuous dialogue, conducting periodic reviews as your life and markets evolve.',
    details: [
      'Smooth onboarding and digital transaction facilitation',
      'Periodic portfolio reviews and rebalancing discussions',
      'Active family support during life changes or claims'
    ],
    icon: 'Repeat'
  }
];

export const FOUNDERS: FounderProfile[] = [
  {
    id: 'founder-1',
    name: 'Viveik Jalan',
    designation: 'Managing Partner',
    role: 'Business Leadership, Asset Management, Wealth Strategy & Investment Solutions',
    shortBio: 'MBA - Finance (Nottingham UK) & Narsee Monjee (Mumbai) graduate with 15+ years across Private Equity, Investment Banking, cross-border Portfolio Management and new-age Business Leadership.',
    bio: 'An MBA - Finance (Nottingham UK) and Narsee Monjee (Mumbai) graduate, Viveik Jalan is a senior Management and Finance professional with 17+ years of post MBA experience in diverse industries and functions including Private Equity, Investment Banking, Financial Planning & Analysis, and Business Leadership/Management Consulting (new-age start-ups and SMEs) encompassing Strategy, Growth, Business Turnaround and Transformation, spanning varied geographies and cultures.',
    background: 'Being a part of the core investment team at a listed Private Equity investment arm in middle-east, Viveik has managed an approximately USD 270M Oil & Gas portfolio spread across North America, Asia, Middle-East and Africa covering the entire investment lifecycle - deal sourcing and analysis, deal structuring and valuation, post-acquisition portfolio management, and evaluation/execution of exit strategies targeting required IRRs.',
    expertise: ['Private Equity & Investment Banking', 'Multi-Asset Allocation & Distribution', 'Portfolio Turnaround & Valuation', 'Cross-Border Deal Structuring', 'new-age Business Leadership', 'HNI Wealth Stewardship'],
    mumbaiHeritage: 'Alumnus of Narsee Monjee (Mumbai) and Nottingham (UK), combining global institutional discipline with deep commercial and capital market relationships.',
    imageUrl: '/Vivek Pic.jpg',
    emailPlaceholder: 'vivek.jalan@legacyonewealth.com'
  },
  {
    id: 'founder-2',
    name: 'Chetan Chavan',
    designation: 'Partner',
    role: 'Mutual Fund & Insurance Distribution, Relationship Management',
    shortBio: 'A BFSI seasoned professional with over 27 years in Asset Management/ Mutual fund Distribution & Life Insurance across LICMF, Edelweiss, Mirae Asset, and HDFC Life.',
    bio: 'A BFSI seasoned professional with over 27 years in Asset Management/ Mutual fund Distribution & Life Insurance. Having spent 10 years with LICMF, followed by being a core member of the Distribution team with Edelweiss Asset and Mirae Asset in various Zonal Head roles, Chetan brings comprehensive institutional and retail distribution excellence.',
    background: 'Five years of exclusive Insurance Distribution at HDFC LIFE - BROCA Channel, leading strategic tie-ups in Mumbai, Bengaluru & Rest of Karnataka. Combined with 22+ years in premier asset management distribution, delivering robust multi-asset allocation and disciplined wealth protection.',
    expertise: ['Asset Management & Mutual Funds', 'Life Insurance Distribution (BROCA)', 'Zonal & Institutional Distribution', 'Strategic Tie-ups & Partnerships', 'Enduring Client Stewardship'],
    mumbaiHeritage: 'Over 27 years of leadership across Mumbai, Bengaluru, and Karnataka, anchoring distribution in relationship integrity, risk management, and client trust.',
    imageUrl: '/PHOTO-2026-09-02-19-42-06.jpg',
    emailPlaceholder: 'chetan.chavan@legacyonewealth.com'
  }
];

export const FAQS = [
  {
    question: 'What is LegacyOne Wealth\'s regulatory status?',
    answer: 'LegacyOne Wealth Financial Services LLP is a financial products distribution and wealth solutions firm. We operate as an intermediary/distributor facilitating access to Mutual Funds, PMS, AIFs, Bonds, Insurance, and other permitted financial products. We are not a SEBI-registered Investment Adviser (RIA) and do not charge fee-based independent advisory fees.'
  },
  {
    question: 'How is LegacyOne Wealth different from standard distributors?',
    answer: 'While many distributors focus on single product transactions, LegacyOne Wealth takes a "One Wealth View". We begin with your complete family picture—understanding risk capacity, existing assets, tax considerations, and protection requirements—before evaluating suitable options across a wide universe of products.'
  },
  {
    question: 'What types of clients does LegacyOne Wealth cater to?',
    answer: 'We primarily serve emerging and established High-Net-Worth Individuals (HNIs), business owners, senior corporate executives, medical and legal professionals, and families seeking structured wealth growth, risk protection, and intergenerational succession.'
  },
  {
    question: 'Do you promise guaranteed returns on investments?',
    answer: 'No. All financial market investments (Mutual Funds, Equities, PMS, AIFs, Bonds, etc.) carry market risks, and past performance is not indicative of future returns. We strictly adhere to regulatory guidelines and emphasize realistic compounding, risk management, and disciplined asset allocation.'
  },
  {
    question: 'How can I get started with LegacyOne Wealth?',
    answer: 'You can begin by clicking "Start a Conversation" or filling out our contact form. Our founding team will arrange an introductory discovery conversation to understand your current financial framework and objectives.'
  }
];
