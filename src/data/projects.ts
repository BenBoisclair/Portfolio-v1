import { technology } from "@/components/Technology";
import { ReactNode } from "react";

export type ProjectTypes = {
  name: string;
  href?: string;
  company?: {
    name: string;
    href?: string;
  };
  description: string;
  imagePath: string;
  technology: ReactNode[];
  date?: string;
  details: string;
};

export const projects: ProjectTypes[] = [
  {
    name: "TasteMap",
    company: {
      href: "https://www.thehominians.com/",
      name: "@The Hominians Limited Co.",
    },
    href: "https://www.Taste-Map.com",
    details:
      "Explore true market tourism in Thailand with the help of TasteMap.",
    description: `TasteMap is a platform for market tourism. It aims to help tourists explore markets and make purchase decisions by providing them with an easy to use interface and features such as reviews. \n\nAs CTO of TasteMap, I developed the TasteMap website, provided technical solutions, and analyzed data to drive The Hominian's product team.`,
    imagePath: "/TasteMap.png",
    date: "2021",
    technology: [technology.Nextjs, technology.Typescript, technology.Supabase],
  },
  {
    name: "Chum",
    company: {
      name: "@Riva",
    },
    href: "https://www.chumnow.com",
    date: "2023",
    details:
      "Platform for university students to explore discounts on their favourite brands.",
    description: `Chum is a platform to connect university students with exclusive discounts from their favorite brands across Asia. As the CTO, I contributed to building a user-friendly interface that allows students to easily discover and use a wide range of discounts. \n\nThe platform also provides businesses with a targeted marketing channel to reach the valuable student demographic. \n\nMy role involved implementing features such as personalized discount recommendations, seamless redemption processes, and integration with various brand partners.`,
    imagePath: "/Chum.png",
    technology: [technology.Nextjs, technology.Typescript, technology.Supabase],
  },
  {
    name: "Portfolio/v1",
    // href: { },
    date: "2024",
    details: "The website you're currently on.",
    description:
      "This is the portfolio website you're currently on. The website was designed in Figma and uses Framer Motion to create the animations you see.",
    imagePath: "/PortfolioV1.png",
    technology: [
      technology.Nextjs,
      technology.Typescript,
      technology.Framer,
      technology.Figma,
    ],
  },
];
