"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import CoolBlob from "@/components/CoolBlob";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { MdOutlineNavigateNext } from "react-icons/md";
import Particles from "@/components/magicui/particles";

const content = {
  name: "Benedict",
  lastname: "Boisclair",
  role: "Frontend Web Developer",
  about: "Hey, I'm Ben. I build and maintain web applications for startups.",
};

const navigationItems = ["Projects"];

const socials = [
  {
    href: "https://github.com/BenBoisclair",
    icon: <FaGithub size={32} />,
  },
  {
    href: "https://www.linkedin.com/in/benedict-boisclair-971958169/",
    icon: <FaLinkedin size={32} />,
  },
];

export default function Home() {
  return (
    <PageWrapper className="max-h-screen">
      <CoolBlob bottom={0} right={0} className="hidden md:block" />

      <CoolBlob
        bottom={0}
        right={0}
        width={150}
        height={150}
        className="md:hidden "
      />

      <div className="flex items-center justify-center h-screen bg-transparent ">
        <div className="text-white max-w-xl p-6">
          <main className="space-y-6">
            <div className="space-y-2">
              <motion.h1
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                className="md:text-5xl font-light -ml-[2px] text-3xl">
                {content.name}
                <span className="font-bold">{content.lastname}</span>
              </motion.h1>
              <p className="md:text-3xl text-2xl font-light">{content.role}</p>
            </div>
            <p className="text-gray-400 text-lg md:text-2xl">{content.about}</p>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <NavLink key={item}>{item}</NavLink>
              ))}
            </nav>
            <div className="flex space-x-4">
              {socials.map((social, key) => (
                <Link
                  key={key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400">
                  {social.icon}
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </PageWrapper>
  );
}

function NavLink({ children }: { children: string }) {
  return (
    <Link
      id={children.toLowerCase()}
      href={children.toLowerCase()}
      className="flex items-center text-gray-200 hover:text-black hover:bg-white/80 hover:font-bold transition ease-in-out cursor-pointer text-xl md:text-2xl">
      <MdOutlineNavigateNext size={30} />

      {children}
    </Link>
  );
}
