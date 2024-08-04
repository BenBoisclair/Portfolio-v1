import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFramerLogo } from "react-icons/pi";
import { FiFigma } from "react-icons/fi";
import { ReactNode } from "react";

export const TechnologyTooltip = ({
  text,
  icon,
}: {
  text: string;
  icon: ReactNode;
}) => {
  return (
    <TooltipProvider key={text}>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="text-lg font-bold bg-black rounded-3xl">
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const technology = {
  Nextjs: (
    <TechnologyTooltip
      icon={
        <RiNextjsFill size={40} className="hover:text-purple-600 ease-in-out" />
      }
      text={"  Nextjs"}
    />
  ),
  Supabase: (
    <TechnologyTooltip
      icon={
        <RiSupabaseFill
          size={40}
          className="hover:text-green-600 ease-in-out"
        />
      }
      text={"Supabase"}
    />
  ),
  Typescript: (
    <TechnologyTooltip
      icon={
        <BiLogoTypescript
          size={40}
          className="hover:text-blue-600 ease-in-out"
        />
      }
      text={"Typescript"}
    />
  ),
  Framer: (
    <TechnologyTooltip
      icon={
        <PiFramerLogo size={40} className="hover:text-cyan-600 ease-in-out" />
      }
      text={"Framer Motion"}
    />
  ),
  Figma: (
    <TechnologyTooltip
      icon={<FiFigma size={40} className="hover:text-pink-600 ease-in-out" />}
      text={"Figma"}
    />
  ),
};
