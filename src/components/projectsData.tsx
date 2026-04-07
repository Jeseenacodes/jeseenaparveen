import React from "react";

export interface Project {
  title: string;
  desc: string;
  category: string;
  metrics: { val: string; label: string }[];
  tags: string[];
  href: string;
  liveHref?: string;
  featured?: boolean;
  svg: React.ReactNode;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Learning & Activity App for Kids",
    desc: "Conceptualized and built a fully deployed interactive children's web app using AI-assisted vibe coding — from idea to live product.",
    category: "AI · UX Design",
    metrics: [{ val: "3", label: "Features" }, { val: "Live", label: "Deployed" }],
    tags: ["Lovable", "AI Development", "UX Design"],
    href: "https://github.com/Jeseenacodes/AI-Powered-Eid-Learning-Card-Creator-App",
    liveHref: "https://little-noories.lovable.app/",
    featured: true,
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <rect x="30" y="40" width="60" height="40" rx="8" className="fill-primary/80" />
        <rect x="120" y="30" width="60" height="40" rx="8" className="fill-muted-foreground/30" />
        <rect x="210" y="60" width="60" height="40" rx="8" className="fill-primary/40" />
        <rect x="70" y="100" width="60" height="40" rx="8" className="fill-muted-foreground/20" />
        <rect x="170" y="110" width="60" height="40" rx="8" className="fill-primary/60" />
      </svg>
    ),
  },
  {
    title: "Zesty Drinks — Sales & Operations Analytics",
    desc: "End-to-end analysis of sales, customer behavior, product performance, inventory, and shipping for a beverage company.",
    category: "Power BI · Snowflake",
    metrics: [{ val: "$275M", label: "Revenue Pipeline" }, { val: "5", label: "Dashboard Pages" }],
    tags: ["Power BI", "Snowflake", "DAX", "RLS"],
    href: "https://github.com/Jeseenacodes/Zesty_Drinks_Dashboard-PBI",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <rect x="40" y="130" width="30" height="50" rx="2" className="fill-primary/70" />
        <rect x="80" y="100" width="30" height="80" rx="2" className="fill-primary/80" />
        <rect x="120" y="70" width="30" height="110" rx="2" className="fill-muted-foreground/30" />
        <rect x="160" y="90" width="30" height="90" rx="2" className="fill-primary/70" />
        <rect x="200" y="50" width="30" height="130" rx="2" className="fill-muted-foreground/40" />
        <rect x="240" y="110" width="30" height="70" rx="2" className="fill-primary/60" />
      </svg>
    ),
  },
  {
    title: "Massachusetts General Hospital — Revenue Analytics",
    desc: "Analyzed 10+ years of patient data across encounters, costs, payer coverage, and procedures to uncover major operational and financial inefficiencies.",
    category: "SQL · Healthcare",
    metrics: [{ val: "$75M", label: "Revenue Risk" }, { val: "164%", label: "Patient Growth" }, { val: "771", label: "Readmissions" }],
    tags: ["SQL", "CTEs", "Window Functions"],
    href: "https://github.com/Jeseenacodes/Hospital_analytics_SQL",
    featured: true,
    svg: (
      <svg viewBox="0 0 600 220" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(12 80% 62%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(12 80% 62%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,180 80,140 160,120 240,130 320,90 400,65 480,75 560,40 600,50 600,220 0,220" fill="url(#g1)" />
        <polyline points="0,180 80,140 160,120 240,130 320,90 400,65 480,75 560,40 600,50" stroke="hsl(155 70% 45%)" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "HR Attrition Analysis Dashboard",
    desc: "Analyzed workforce attrition for 1,480 employees; identified a 16% attrition rate — above the 10–12% industry benchmark.",
    category: "Power BI · DAX · Excel",
    metrics: [{ val: "16%", label: "Attrition Rate" }, { val: "1,480", label: "Employees" }],
    tags: ["Power BI", "DAX", "Excel", "HR Analytics"],
    href: "https://github.com/Jeseenacodes/HR-Attrition-Dashboard-PBI",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <rect x="30" y="140" width="35" height="30" rx="3" className="fill-primary/60" />
        <rect x="75" y="80" width="35" height="90" rx="3" className="fill-primary/80" />
        <rect x="120" y="100" width="35" height="70" rx="3" className="fill-muted-foreground/30" />
        <rect x="165" y="120" width="35" height="50" rx="3" className="fill-primary/70" />
        <rect x="210" y="150" width="35" height="20" rx="3" className="fill-primary/50" />
      </svg>
    ),
  },
  {
    title: "Databel — Customer Churn Analysis",
    desc: "Identified 26.86% churn rate in telecom — above industry benchmark — and pinpointed competitor offers as the #1 driver.",
    category: "Power BI · Telecom",
    metrics: [{ val: "26.86%", label: "Churn Rate" }, { val: "4", label: "Dashboard Pages" }],
    tags: ["Power BI", "DAX", "Segmentation"],
    href: "https://github.com/Jeseenacodes/Customer-Churn-Analysis---Databel---PBI",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <circle cx="150" cy="90" r="70" fill="none" stroke="hsl(155 70% 45%)" strokeWidth="16" strokeDasharray="290 150" opacity="0.7" />
        <circle cx="150" cy="90" r="70" fill="none" className="stroke-muted-foreground/30" strokeWidth="16" strokeDasharray="150 290" strokeDashoffset="-290" opacity="0.4" />
        <text x="150" y="85" fontFamily="Arial" fontSize="20" fontWeight="800" className="fill-foreground" textAnchor="middle">26.86%</text>
        <text x="150" y="102" fontFamily="Arial" fontSize="9" className="fill-muted-foreground" textAnchor="middle">CHURN RATE</text>
      </svg>
    ),
  },
  {
    title: "Retail Customer Behavior Analytics",
    desc: "Full-stack analysis of 3,900 transactions using Python EDA, PostgreSQL, and Power BI — surfacing $233K in sales insights.",
    category: "Python · SQL · Power BI",
    metrics: [{ val: "3,900", label: "Transactions" }, { val: "3,116", label: "Loyal Customers" }],
    tags: ["Python", "PostgreSQL", "Power BI"],
    href: "https://github.com/Jeseenacodes/Customer_Behavior_Analytics-Python_SQL_PBI",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stopColor="hsl(155 70% 45%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(155 70% 45%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,150 50,120 100,90 150,100 200,70 250,55 300,60 300,180 0,180" fill="url(#g2)" />
        <polyline points="0,150 50,120 100,90 150,100 200,70 250,55 300,60" stroke="hsl(155 70% 45%)" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "NZ Motor Vehicle Theft Analysis",
    desc: "73% YoY theft increase identified across NZ regions using SQL + Python with choropleth maps.",
    category: "SQL · Python",
    metrics: [{ val: "73%", label: "YoY Increase" }, { val: "4,553", label: "Thefts Analyzed" }],
    tags: ["MySQL", "Python", "GeoPandas"],
    href: "https://github.com/Jeseenacodes/Motor_Vehicle_Thefts-SQL_Python",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <defs>
          <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(155 70% 45%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(155 70% 45%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="0,160 60,130 120,100 180,115 240,80 300,60 300,180 0,180" fill="url(#g3)" />
        <polyline points="0,160 60,130 120,100 180,115 240,80 300,60" stroke="hsl(155 70% 45%)" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Football Striker Performance Segmentation",
    desc: "Segmented 500 football strikers using 20 performance variables; built a Total Contribution Score.",
    category: "Python · Scikit-learn",
    metrics: [{ val: "500", label: "Strikers" }, { val: "20", label: "Variables" }],
    tags: ["Python", "Scikit-learn", "Matplotlib"],
    href: "https://github.com/Jeseenacodes/Football-striker-segmentation",
    svg: (
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <circle cx="90" cy="80" r="25" className="fill-primary/30 stroke-primary" strokeWidth="1" />
        <circle cx="160" cy="100" r="35" className="fill-muted-foreground/15 stroke-muted-foreground/40" strokeWidth="1" />
        <circle cx="220" cy="70" r="20" className="fill-primary/20 stroke-primary" strokeWidth="1" />
        <circle cx="130" cy="130" r="18" className="fill-primary/15 stroke-primary" strokeWidth="1" />
      </svg>
    ),
  },
];
