import Head from "next/head";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CodeIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionContent from "../components/SectionContent";
import Articles from "../components/Articles";
import FrameWorks from "../components/Frameworks";
import AnimatedSectionContent from "../components/AnimatedSectionContent";
import AnimatedLines from "../components/AnimatedLines";
import ProjectCard from "../components/Projects";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="bg-neutral-800 font-montserrat text-white overflow-hidden">
      <Head>
        <title>Max Freundlich</title>
        <meta
          name="description"
          content="Max Freundlich. Fullstack Developer."
        />
        <link rel="icon" href="/static/images/icon/16.ico" />
      </Head>

      <main id="top">
        <div className="h-screen flex justify-center items-center overflow-hidden px-4 pb-8">
          <SectionContent className="z-10">
            <div>
              <h1 className="text-3xl md:text-6xl">
                Hi, I'm <span className="text-blue-400">Max</span>
              </h1>
              <p className="md:text-xl mt-4">Full Stack Developer</p>
              <div className="text-sm md:text-base mt-8">
                <p>
                  I'm a software developer based right outside of Philadelphia,
                  PA. I like building simple, fast, responsive websites.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <a
                href="mailto:mfreundlich1@gmail.com"
                className="hover:underline flex items-center min-h-[48px]"
              >
                <div className="w-6 md:w-12">
                  <MailIcon className="w-6 md:w-12" />
                </div>
                <span className="text-sm md:text-base ml-4">Email me</span>
              </a>
              <a
                href="https://github.com/maxwfreu"
                className="hover:underline flex items-center min-h-[48px]"
              >
                <div className="w-6 md:w-12">
                  <CodeIcon className="w-6 md:w-12" />
                </div>
                <span className=" text-sm md:text-base ml-4">
                  Follow me on Github
                </span>
              </a>
            </div>
          </SectionContent>
        </div>
      </main>
      <section className="relative px-4 pb-8 sm:pb-16">
        <SectionContent className="pb-8 sm:pb-16">
          <div>
            <h2 className="text-xl md:text-6xl pb-4" id="projects">
              Projects
            </h2>
            <div className="h-1 w-full rounded-md bg-gradient-to-r  from-fuchsia-400 to-blue-300" />
          </div>
        </SectionContent>

        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl pb-32 ">
          <Projects />
        </div>
      </section>
      <section className="relative px-4 pb-8 sm:pb-16">
        <SectionContent className="pb-8 sm:pb-16">
          <div>
            <h2 className="text-xl md:text-6xl pb-4" id="projects">
              Articles
            </h2>
            <div className="h-1 w-full rounded-md bg-gradient-to-r  from-fuchsia-400 to-blue-300" />
          </div>
        </SectionContent>

        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl pb-32 ">
          <Articles />
        </div>
      </section>
    </div>
  );
}
