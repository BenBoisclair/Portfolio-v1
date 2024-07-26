"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import PageWrapper from "../components/PageWrapper";
import { BiArrowBack, BiChevronLeft, BiLogoTypescript } from "react-icons/bi";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/Tooltip";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiFramerLogo } from "react-icons/pi";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";

const TechnologyTooltip = ({
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
        <TooltipContent side="bottom" className="text-lg font-bold">
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const technology = {
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

type ProjectTypes = {
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

const projects: ProjectTypes[] = [
  {
    name: "TasteMap",
    company: {
      href: "https://www.thehominians.com/",
      name: "@The Hominians Limited Co.",
    },
    href: "Taste-Map.com",
    details:
      "Explore true market tourism in Thailand with the help of TasteMap.",
    description:
      "Occaecat tempor minim culpa ad quis incididunt do reprehenderit veniam aute fugiat. Adipisicing cillum commodo enim dolor eu do proident tempor ea occaecat ullamco. Sit nostrud sit pariatur. Voluptate suntquis culpa aliqua elit sint reprehenderit aliqua officia.",
    imagePath: "/TasteMap.png",
    date: "2021",
    technology: [technology.Nextjs, technology.Typescript, technology.Supabase],
  },
  {
    name: "Chum",
    company: {
      name: "@Riva",
    },
    href: "www.chumnow.com",
    date: "2023",
    details:
      "Occaecat tempor minim culpa ad quis incididunt do reprehenderit veniam aute fugiat.",
    description:
      "Occaecat tempor minim culpa ad quis incididunt do reprehenderit veniam aute fugiat. Adipisicing cillum commodo enim dolor eu do proident tempor ea occaecat ullamco. Sit nostrud sit pariatur. Voluptate suntquis culpa aliqua elit sint reprehenderit aliqua officia.",
    imagePath: "/Chum.png",
    technology: [technology.Nextjs, technology.Typescript, technology.Supabase],
  },
  {
    name: "Portfolio/v1",

    date: "2024",
    details:
      "Occaecat tempor minim culpa ad quis incididunt do reprehenderit veniam aute fugiat.",
    description:
      "Occaecat tempor minim culpa ad quis incididunt do reprehenderit veniam aute fugiat. Adipisicing cillum commodo enim dolor eu do proident tempor ea occaecat ullamco. Sit nostrud sit pariatur. Voluptate suntquis culpa aliqua elit sint reprehenderit aliqua officia.",
    imagePath: "/PortfolioV1.png",
    technology: [
      technology.Nextjs,
      technology.Typescript,
      technology.Framer,
      technology.Figma,
    ],
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<number>(0);

  const selectProject = (key: number) => {
    setSelectedProject(key);
  };

  const projectListVariants = {
    hidden: { y: "100%" },
    show: { y: "0%" },
  };

  return (
    <PageWrapper className="md:p-28 max-h-screen">
      <div className="w-full px-6">
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1], type: "spring" }}
          onClick={() => router.back()}
          className="flex w-fit items-center gap-2 text-white/80 hover:text-white cursor-pointer group pt-6 md:pt-0">
          <BiArrowBack size={30} className=" group-hover:animate-bounce" />
          <p>Home</p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1">
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white p-6 h-full space-y-2">
          {!!projects[selectedProject].href ? (
            <Link
              href={projects[selectedProject].href}
              className={cn(
                `md:text-5xl text-4xl font-bold flex items-center group cursor-pointer`,
                { "cursor-default": !projects[selectedProject].href }
              )}>
              {projects[selectedProject].name}

              <MdOutlineArrowOutward
                size={60}
                className="group-hover:animate-bounce w-10 md:w-[60px]"
              />
            </Link>
          ) : (
            <h1
              className={cn(
                `md:text-5xl text-4xl font-bold flex items-center group cursor-pointer`,
                { "cursor-default": !projects[selectedProject].href }
              )}>
              {projects[selectedProject].name}
            </h1>
          )}
          <div
            className={cn(
              `flex md:items-center flex-col md:flex-row mb-16 md:mb-0`,
              {
                "justify-between": !!projects[selectedProject].company,
              }
            )}>
            {!!projects[selectedProject].company?.href ? (
              <Link
                href={projects[selectedProject].company?.href}
                target="_blank"
                className="text-white/80 hover:text-white">
                {projects[selectedProject].company?.name}
              </Link>
            ) : (
              <p className="text-white/80 hover:text-white">
                {projects[selectedProject].company?.name}
              </p>
            )}

            <p className="text-white/80 mt-2 md:mt-0">
              {projects[selectedProject].date}
            </p>
          </div>
          <p>{projects[selectedProject].description}</p>
          <div className="flex gap-2">
            {projects[selectedProject].technology.map((tech, key) => (
              <div key={key * 2}>{tech}</div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={projectListVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, type: "tween" }}
          className="text-white p-6 h-full overflow-scroll no-scrollbar flex flex-col gap-4">
          {projects.map((project, key) => {
            return (
              <ProjectCard
                selectedProject={selectedProject}
                project={project}
                onClick={selectProject}
                key={key}
                id={key}
              />
            );
          })}
        </motion.div>
      </div>
    </PageWrapper>
  );
}

type ProjectCardProps = {
  className?: string;
  project: ProjectTypes;
  onClick: (key: number) => void;
  id: number;
  selectedProject: number;
};

function ProjectCard({
  className,
  project,
  onClick,
  id,
  selectedProject,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        `w-full flex p-5 gap-4 group cursor-pointer hover:bg-white/80 rounded-lg`,
        className,
        {
          "bg-white/80 border-t-4 border-r-4 border-gray-100":
            id === selectedProject,
        }
      )}>
      <Image
        src={project.imagePath}
        alt={"Project Image"}
        width={150}
        height={100}
        className={cn(
          `rounded-sm border-2 border-white/50 h-fit group-hover:border-black`,
          {
            "border-black": id === selectedProject,
          }
        )}
      />
      <div>
        <div>
          <p
            className={cn(`font-bold group-hover:text-black`, {
              "text-black": id === selectedProject,
            })}>
            {project.name}
          </p>
          {/* <div className="flex gap-2 items-center">
                  <RiNextjsFill color="white" opacity={80} size={30} />
                  <SiTypescript color="white" opacity={80} size={25} />
                </div> */}
        </div>
        <p
          className={cn(`text-sm group-hover:text-black`, {
            "text-black": id === selectedProject,
          })}>
          {project.details}
        </p>
      </div>
    </div>
  );
}
