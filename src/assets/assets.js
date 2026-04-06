import logo from './logo.png'
import hero_section1 from'./section.jpg'
import p_arror from './arror.png'
import m_hero from './mhero.jpg'
import toggle from './toggle.png'
import cross from './cross.png'
import point from './point.png'
import target from './target.png'
import check from './check.png'
import growth from './growth.png'
import jurney from './jurney.jpg'
import jurney2 from './jurney2.jpg'
import jurney3 from './jurney3.jpg'
import why_choose from './why_choose.jpg'
import why_choose1 from './why_choose1.jpg'
import phone from './phone.png'
import message from './message.png'


export const assets = {
    logo,
    hero_section1,
    p_arror,
    m_hero,
    toggle,
    cross,
    point,
    growth,
    check,
    target,
    jurney,
    jurney2,
    jurney3,
    why_choose,
    why_choose1,
    phone,
    message


}

export const sectors = [
  {
    title: "Technology & SaaS",
    desc: "SaaS metrics, ARR growth, and scalable product positioning.",
    metrics: ["ARR", "Churn Rate", "LTV/CAC"]
  },
  {
    title: "Consumer & D2C",
    desc: "Brand growth, retention, and performance marketing alignment.",
    metrics: ["CAC", "Repeat Rate", "AOV"]
  },
  {
    title: "Retail",
    desc: "Store economics, expansion strategy, and inventory planning.",
    metrics: ["Store ROI", "Inventory Turns", "Margins"]
  },
  {
    title: "Climate & Sustainability",
    desc: "Impact metrics and ESG alignment for climate funds.",
    metrics: ["Carbon Impact", "ESG Score", "Grant Pipeline"]
  },
  {
    title: "Healthy & Weakness",
    desc: "Regulatory navigation, clinical validation positioning, and impact-driven investor targeting.",
    metrics: ["Carbon Impact", "ESG Score", "Grant Pipeline"]
  },
  {
    title: "Customer Tech",
    desc: "Engagement metrics, monetization models, and growth-stage narratives for tech-forward investors.",
    metrics: ["Carbon Impact", "ESG Score", "Grant Pipeline"]
  },
  {
    title: "Climate & Sustainbility",
    desc: "Engagement metrics, monetization models, and growth-stage narratives for tech-forward investors.",
    metrics: ["Carbon Impact", "ESG Score", "Grant Pipeline"]
  }
];

// chapter data
export const journey = [
  {
    step: "01",
    Image: assets.jurney,
    title: "Pre-Seed",
    subtitle: "Turning Ideas Into Fundable Businesses",
    desc: "It starts with a late night, a laptop, and a belief that something can be built differently. At this stage, the idea is raw — exciting but unstructured. Most founders know their problem deeply but struggle to translate that conviction into a language investors understand.",
    extra: "We step in as the builder beside the builder. Not to tell you what to do — but to help you see your own company through the lens of someone writing a cheque.",
    industries: "Tech · D2C · Retail",
    outcome: "Make the startup credible enough to be taken seriously.",
    features: [
    {
      heading: "Business & Strategy",
      points: [
        "Problem validation & market clarity",
        "Founder-market fit articulation",
        "Business model structuring"
      ]
    },
    {
      heading: "Pitch & Storytelling",
      points: [
        "Complete pitch deck creation",
        "Market sizing logic",
        "Competitive landscape mapping"
      ]
    },
    {
      heading: "Financial Planning",
      points: [
        "3-5 year financial models",
        "Unit economics",
        "Valuation benchmarking"
      ]
    },
    {
      heading: "Legal & Compliance",
      points: [
        "Company incorporation advisory",
        "DPIIT & MSME registration",
        "Cap table & ESOP readiness"
      ]
    }
  ]
  },

  {
    step: "02",
    Image: assets.jurney2,
    title: "Seed Stage",
    subtitle: "Turning Ideas Into Fundable Businesses",
    desc: "The idea has survived its first tests. There's early traction, a small team, and the weight of a real question: can this scale? This is where most startups hit a wall — not because the product isn't good, but because the fundraising process is unstructured and reactive.",
    extra: "We become your fundraising project manager. Every investor conversation is prepared for, every follow-up is tracked, every objection is anticipated. Fundraising stops being a hope — it becomes a process.",
    industries: "Industries: SaaS · Consumer Tech · Retail · Climate",
    outcome: "Close the round with the right investors, at the right valuation, on the right terms.",
    features: [
    {
      heading: "Fundraising Strategy",
      points: [
        "Right raise size & dilution strategy",
        "Milestone-capital alignment",
        "Investor category positioning"
      ]
    },
    {
      heading: "Investor Mapping & Outreach",
      points: [
        "Sector-aligned angels & seed funds",
        "Warm intros & structured cold outreach",
        "Response tracking & follow-ups"
      ]
    },
    {
      heading: "Pitch Optimization",
      points: [
        "Live iteration from investor feedback",
        "Founder Q&A preparation",
        "Engagement cycle strategy"
      ]
    },
    {
      heading: "Due Diligence Readiness",
      points: [
        "Data room preparation",
        "Financial & legal coordination",
        "Investor query support"
      ]
    }
  ]
    
  },
  {
    step: "03",
    Image: assets.jurney3,
    title: "Seed Stage",
    subtitle: "Turning Ideas Into Fundable Businesses",
    desc: "The idea has survived its first tests. There's early traction, a small team, and the weight of a real question: can this scale? This is where most startups hit a wall — not because the product isn't good, but because the fundraising process is unstructured and reactive.",
    extra: "We become your fundraising project manager. Every investor conversation is prepared for, every follow-up is tracked, every objection is anticipated. Fundraising stops being a hope — it becomes a process.",
    industries: "Industries: SaaS · Consumer Tech · Retail · Climate",
    outcome: "Position the company as an institutional-grade investment opportunity.",
    features: [
    {
      heading: "Growth Planning",
      points: [
        "Institutional-grade financial models",
        "Unit economics deep-dives",
        "Growth vs burn trade-off analysis"
      ]
    },
    {
      heading: "Narrative & Metrics",
      points: [
        "Growth-stage investor storytelling",
        "Metric benchmarking vs funded peers",
        "Market leadership positioning"
      ]
    },
    {
      heading: "Investor Targeting",
      points: [
        "VC funds aligned with stage & sector",
        "Strategic investors & family offices",
        "Global investor mapping"
      ]
    },
    {
      heading: "Legal & Structural",
      points: [
        "Shareholder agreements review",
        "Term sheet evaluation",
        "Post-fundraise structuring"
      ]
    }
  ]
  }
];


export const frameworkData = [
  {
    step: "01",
    week: "Week 1–2",
    title: "Investor Readiness",
    points: [
      "Pitch deck restructuring",
      "Financial model & valuation alignment",
      "Legal & compliance review"
    ]
  },
  {
    step: "02",
    week: "Week 2–4",
    title: "Investor Mapping & Outreach",
    points: [
      "Stage-aligned investor shortlisting",
      "Outreach strategy design",
      "Active tracking & follow-ups"
    ]
  },
  {
    step: "03",
    week: "Week 4–8",
    title: "Investor Interactions",
    points: [
      "Pitch preparation & rehearsal",
      "Live feedback-based refinements",
      "Investor Q&A handling"
    ]
  },
  {
    step: "04",
    week: "Week 8–10",
    title: "Due Diligence",
    points: [
      "Data room coordination",
      "Financial & legal clarifications",
      "Negotiation support"
    ]
  },
  {
    step: "05",
    week: "Week 10–12",
    title: "Term Sheet & Closure",
    points: [
      "Term sheet review & discussions",
      "Fund transfer & compliance filings",
      "Post-funding execution transition"
    ]
  }
];