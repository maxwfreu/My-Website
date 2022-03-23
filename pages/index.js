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

export default function Home() {
  return (
    <div className="bg-neutral-800 font-montserrat text-white">
      <Head>
        <title>Max Freundlich</title>
        <meta name="description" content="Max Freundlich" />
        <link rel="icon" href="/static/images/icon/16.ico" />
      </Head>

      <main id="top">
        <div className="h-screen flex justify-center items-center relative overflow-hidden">
          <SectionContent className="z-10">
            <div>
              <h1 className="text-6xl">
                Hi, I'm <span className="text-blue-500">Max</span>
              </h1>
              <p className="text-xl mt-4">Full Stack Developer</p>
              <div className="mt-8">
                <p>
                  I'm a software developer based right outside of Philadelphia,
                  PA. I like building simple, fast, responsive websites.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <a
                href="mailto:mfreundlich1@gmail.com"
                className="hover:underline flex items-center"
              >
                <MailIcon height={32} /> <span className="ml-4">Email me</span>
              </a>
              <a
                href="github.com/maxwfreu"
                className="hover:underline flex items-center"
              >
                <CodeIcon height={32} />{" "}
                <span className="ml-4">Follow me on Github</span>
              </a>
            </div>
          </SectionContent>
          <div className="absolute bottom-3 left-1/2 z-10">
            <a href="#projects">
              <ArrowDownIcon height={32} />
            </a>
          </div>
          <AnimatedLines />
        </div>
      </main>
      <section>
        <SectionContent className="pb-16">
          <h2 className="text-5xl" id="projects">
            Projects
          </h2>
        </SectionContent>
        <AnimatedSectionContent className="pb-16 my-10 lg:my-40">
          <div className="w-100 h-76 hidden lg:block">
            <Image
              src="/static/images/auger.png"
              height={300}
              width={500}
              className="rounded-md shadow"
            />
          </div>
          <div>
            <motion.h2
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="text-5xl"
            >
              <a
                className="text-blue-500 underline"
                href="https://augermetrics.com"
              >
                Auger
              </a>{" "}
              Metrics
            </motion.h2>
            <FrameWorks
              frameworks={[
                { name: "Next.js", color: "bg-rose-500" },
                { name: "Tailwind", color: "bg-teal-500" },
                { name: "React", color: "bg-yellow-500" },
                { name: "Postgres", color: "bg-blue-500" },
                { name: "Stripe", color: "bg-indigo-500" },
              ]}
            />
            <p className="mt-2">
              Auger is an ongoing side project of mine. My goal is to build a
              platform that can seemlessly integrate with an existing CI/CD
              pipeline and report build time statistics overtime. Auger will
              notify developers via comment on a PR when a test suites execution
              time has exceeded the average duration. This way developers can
              quickly catch long running tests and actively reduce CI execution
              time rather waiting for build times to grow out of control.
            </p>
          </div>
          <div className="w-100 h-76 block lg:hidden">
            <Image
              src="/static/images/auger.png"
              height={300}
              width={500}
              className="rounded-md shadow"
            />
          </div>
        </AnimatedSectionContent>
        <AnimatedSectionContent className="pb-16 lg:pb-40 mt-10 lg:mt-40">
          <div>
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="text-5xl"
            >
              <a
                className="text-blue-500 underline"
                href="https://www.scrumptioustab.com/"
              >
                Scrumptious
              </a>{" "}
              Tab
            </motion.h2>
            <FrameWorks
              frameworks={[
                { name: "Netlify", color: "bg-rose-500" },
                { name: "Styled JSX", color: "bg-teal-500" },
                { name: "React", color: "bg-indigo-500" },
              ]}
            />

            <p className="mt-2">
              Scrumptious Tab was a chrome extension that converts your new tab
              into a kanban board. As someone who is hyper-focused on
              productively I wanted to optimize workflow anyway I could. I
              wanted a feature rich kanban board that loaded instantly and
              didn't an internet connection. At it's prime, Scrumptious had over
              1000 daily active users. Eventually I opted to make it{" "}
              <a
                src="https://github.com/maxwfreu/scrumptioustab"
                className="underline"
              >
                open source
              </a>
              .
            </p>
          </div>
          <div className="w-100 h-76">
            <Image
              src="/static/images/scrumptious.png"
              height={300}
              width={500}
              className="rounded-md shadow"
            />
          </div>
        </AnimatedSectionContent>
      </section>
      <section className="relative pb-1y">
        <SectionContent className="pb-16">
          <h2 className="text-5xl" id="projects">
            Articles
          </h2>
        </SectionContent>

        <SectionContent className="pb-32 ">
          <Articles />
        </SectionContent>
        <div className="absolute bottom-8 left-1/2">
          <a href="#top">
            <ArrowUpIcon height={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
