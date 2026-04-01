// ============================================================
// PORTFOLIO CONSTANTS — Update this file to change any profile
// ============================================================

export const PERSON = {
  name: "Aakash Sinha",
  title: "Analyst — Business Analysis & Functional Validation",
  tagline: "Bridging business requirements with financial platform delivery",
  email: "aakashsinha262@gmail.com",
  phone: "+91 6387014338",
  linkedin: "https://www.linkedin.com/in/aakashsinha13/",
  location: "Gurugram, Haryana",
  about: `Analyst at FNZ with hands-on experience in UAT, functional validation, and requirement analysis 
  across financial platforms. I bridge the gap between business requirements and technical delivery — 
  ensuring platform behaviour aligns with client needs across investment, trading, and wealth management 
  workflows. Passionate about financial domain knowledge and data-driven decision making.`,
};

export const EXPERIENCE = [
  {
    company: "FNZ",
    role: "Analyst Tester",
    period: "June 2025 – Present",
    subtitle: "Financial Platform | UAT | Functional and Requirement Validation",
    logoKey: "fnz",
    logoBg: "#000000",
    bullets: [
      "Analyzed business requirements, user stories, and functional changes to validate platform behavior and ensure alignment with client needs.",
      "Supported UAT, functional validation, and workflow analysis across investment and trading-related processes.",
      "Collaborated with cross-functional teams, including developers, automation teams, and stakeholders, to resolve issues and support delivery.",
      "Identified and tracked functional gaps, defects, and business-impact issues using JIRA and supported change validation activities.",
      "Built domain understanding in financial platforms, trade lifecycle, settlement, FX, Equities, Mutual Funds, ETFs, and ETIs.",
    ],
  },
];

export const CLIENT_PROJECTS = [
  {
    client: "ABG – Requirement & Workflow Validation Support",
    clientShort: "ABG",
    region: "Sweden",
    about:
      "ABG Sundal Collier is a Nordic investment bank, publicly quoted and listed on the Oslo Stock Exchange.",
    logoKey: "abg",
    logoBg: "#ffffff",
    bullets: [
      "Supported requirement analysis, workflow validation, and functional checks for platform enhancements in a financial services setup.",
      "Collaborated with developers, automation teams, and internal stakeholders to clarify feature expectations and resolve functional issues.",
      "Validated business scenarios, user stories, and system outputs to ensure alignment with client and operational requirements.",
      "Developed 50+ validation scripts to support functional checks and reduce manual effort across recurring feature releases.",
    ],
    tags: ["Requirement Analysis", "Workflow Validation", "UAT", "JIRA"],
  },
  {
    client: "CFS – UAT & Business Validation Support",
    clientShort: "CFS",
    region: "Australia",
    about:
      "Colonial First State (CFS) specialises in mutual funds, asset allocation, and portfolio management — serving financial advisors, brokers, and investment bankers.",
    logoKey: "cfs",
    logoBg: "#ffffff",
    bullets: [
      "Executed UAT for 12+ features, validating business requirements and expected workflow behavior across platform updates.",
      "Identified and tracked 10+ functional issues before production release, supporting release quality and business readiness.",
      "Worked with product managers, developers, and stakeholders to resolve UAT observations within defined timelines.",
    ],
    tags: ["UAT", "Functional Testing", "Defect Tracking", "Release Quality"],
  },
];

export const TECHNICAL_PROJECTS = [
  {
    name: "Pizza Store Analysis",
    period: "2024",
    tools: ["SQL", "Data Visualisation", "Data Cleaning", "Data Modeling"],
    bullets: [
      "Executed advanced SQL queries to analyze 21,350 orders, uncovering critical sales trends and improving data-driven decision-making for business growth.",
      "Conducted detailed trend analysis, identifying an average of 138 pizzas ordered per day, enabling precise inventory planning and improved supply chain efficiency.",
      "Identified Thai Chicken Pizza as the highest revenue-generating item, contributing $43,434.25 in sales, highlighting key product performance for strategic marketing.",
    ],
    stat: "21,350 orders analyzed",
    icon: "🍕",
  },
  {
    name: "Supermarket Store Analysis",
    period: "May 2024",
    tools: ["MS Excel", "Graphs", "Charts", "Data Visualisation", "Data Cleaning", "Data Modeling"],
    bullets: [
      "Collected and organized data from 30,000+ supermarket transactions, analyzing key trends including 65% higher purchase likelihood among women and 35% of sales concentrated in three states.",
      "Cleaned and processed data using Excel PivotTables and conditional formatting for in-depth analysis, ensuring accuracy and consistency.",
      "Created bar charts, line graphs, pie charts, and histograms to visually represent data insights for business decision-making.",
    ],
    stat: "30,000+ transactions",
    icon: "🛒",
  },
];

export const SKILLS = [
  {
    category: "Business Analysis",
    icon: "📋",
    items: ["Requirement Analysis", "User Stories", "Functional Specifications", "UAT"],
  },
  {
    category: "Agile & Delivery",
    icon: "🔄",
    items: ["Agile", "Scrum", "Sprint Collaboration", "Stand-ups", "Regression", "Smoke Validation"],
  },
  {
    category: "Stakeholder Collaboration",
    icon: "🤝",
    items: ["Client Walkthroughs", "Requirement Discussions", "Global Team Communication"],
  },
  {
    category: "Platform Processes",
    icon: "🏦",
    items: ["Financial Platform Workflows", "Trade", "Settlement", "FX", "Change Validation"],
  },
  {
    category: "Tools & Reporting",
    icon: "🛠️",
    items: ["SQL", "MS Excel (VLOOKUP, Pivot Tables)", "Tableau", "JIRA", "Google Sheets"],
  },
  {
    category: "Domain Expertise",
    icon: "💹",
    items: ["Financial Services", "Wealth Management", "Equities", "Mutual Funds", "ETFs", "ETIs"],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    specialisation: "B.Tech",
    institution: "Maulana Azad National Institute of Technology (NIT), Bhopal",
    period: "July 2021 – June 2025",
    cgpa: "7.78 CGPA",
    logoKey: "manit",
    logoBg: "#ffffff",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
