"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import PageNav from "@/components/PageNav";
import { projects, ProjectTypes } from "@/data/projects";

export default function ProjectsPage() {
  const [activeProject, setactiveProject] = useState<number>(0);

  const selectProject = (key: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setactiveProject(key);
    setTimeout(() => {
      const projectInfoElement = document.getElementById("projectInfo");
      if (projectInfoElement) {
        projectInfoElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const projectListVariants = {
    hidden: { x: "100%" },
    show: { x: "0%" },
  };

  return (
    <PageWrapper id="top" className="md:p-28 md:max-h-screen flex flex-col">
      <PageNav />
      <div className="md:grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 flex flex-col">
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white p-6 space-y-2 overflow-y-auto custom-scrollbar max-h-full md:max-h-full">
          <Link
            href={projects[activeProject].href ?? ""}
            className={cn(
              `md:text-5xl text-4xl font-bold flex group cursor-pointer`,
              { "cursor-default": !projects[activeProject].href }
            )}>
            {projects[activeProject].name}

            <MdOutlineArrowOutward
              size={40}
              className={cn(`group-hover:-translate-y-2 w-8`, {
                hidden: !projects[activeProject].href,
              })}
            />
          </Link>
          <div
            className={cn(
              `flex md:items-center flex-col md:flex-row mb-16 md:mb-0`,
              {
                "justify-between": !!projects[activeProject].company,
              }
            )}>
            {!!projects[activeProject].company?.href ? (
              <Link
                href={projects[activeProject].company?.href}
                target="_blank"
                className="text-white/80 hover:text-white md:text-2xl text-xl">
                {projects[activeProject].company?.name}
              </Link>
            ) : (
              <p className="text-white/80 hover:text-white md:text-2xl text-xl">
                {projects[activeProject].company?.name}
              </p>
            )}

            <p className="text-white/80 mt-2 md:mt-0 md:text-2xl text-xl">
              {projects[activeProject].date}
            </p>
          </div>
          <p className=" whitespace-pre-wrap md:text-2xl text-xl">
            {projects[activeProject].description}
          </p>
          <div className="py-5">
            <h4 className=" font-semibolda ">Built With</h4>
            <div className="flex gap-2">
              {projects[activeProject].technology.map((tech, key) => (
                <div key={key * 2}>{tech}</div>
              ))}
            </div>
          </div>
          <Image
            src={projects[activeProject].imagePath}
            alt={"Project Image"}
            width={500}
            height={200}
            className={cn(`rounded-xl mt-20 border-2 border-gray-700`)}
          />
        </motion.div>
        <motion.div
          variants={projectListVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, type: "tween" }}
          className="text-white md:p-12 p-6 overflow-scroll no-scrollbar flex md:flex-col gap-4 order-first md:order-last bg-black ">
          {projects.map((project, key) => {
            return (
              <ProjectCard
                activeProject={activeProject}
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
  activeProject: number;
};

function ProjectCard({
  className,
  project,
  onClick,
  id,
  activeProject,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        `max-w-[500px] h-fit md:w-full md:h-fit flex md:p-5 md:gap-4 gap-1 group cursor-pointer hover:bg-white/80 hover:border-gray-300 md:flex-row flex-col rounded-xl border-gray-700 border-2 ease-in-out transition-all bg-gray-950 group `,
        className,
        {
          "bg-gray-300 border-gray-300": id === activeProject,
        }
      )}>
      <div
        className={cn(
          `aspect-video md:w-[20rem] md:max-w-[10rem] w-[16rem] relative overflow-hidden rounded-xl group-hover:shadow-xl`,
          {
            "shadow-xl": id === activeProject,
          }
        )}>
        <Image
          src={project.imagePath}
          alt={"Project Image"}
          fill={true}
          objectFit="cover"
          className={cn(` rounded-sm aspect-auto   group-hover:border-black`, {
            // "border-black": id === activeProject,
          })}
        />
      </div>

      <div className="flex flex-col p-2 md:p-0">
        <div className="flex items-center justify-between">
          <p
            className={cn(`font-bold group-hover:text-black text-lg`, {
              "text-black": id === activeProject,
            })}>
            {project.name}
          </p>
          <p
            className={cn(
              `font-bold group-hover:text-black text-lg md:hidden`,
              {
                "text-black": id === activeProject,
              }
            )}>
            {projects[id].date}
          </p>
        </div>
        <p
          className={cn(`text-sm group-hover:text-black md:block hidden`, {
            "text-black": id === activeProject,
          })}>
          {project.details}
        </p>
      </div>
    </div>
  );
}
