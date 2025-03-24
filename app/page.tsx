import { MailIcon } from "lucide-react";
import { Metadata } from "next";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

export const metadata: Metadata = {
  title: "Max Freundlich",
  description: "Max Freundlich | Fullstack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="bg-blackfont-montserrat text-black dark:text-white overflow-hidden">
      <main className="h-screen flex justify-center items-center overflow-hidden px-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-6xl">
            Hi, I&apos;m <span className="text-blue-400">Max</span>
          </h1>
          <div className="text-sm md:text-base">
            <p>
              I&apos;m a software developer in Philadelphia, PA. I like building
              websites.
            </p>
            <p>
              I&apos;m currently a Software Engineer at{" "}
              <a
                href="https://everpilot.com"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Everpilot
              </a>
              .
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/maxwfreu"
              className="group"
              target="_blank"
            >
              <SiGithub size={20} className="group-hover:fill-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/max-freundlich-0691a5236/"
              className="group"
              target="_blank"
            >
              <SiLinkedin size={20} className="group-hover:fill-blue-400" />
            </a>
            <a
              href="https://x.com/MaximumCodeage"
              className="group"
              target="_blank"
            >
              <SiX size={20} className="group-hover:fill-blue-400" />
            </a>
            <a
              href="mailto:mfreundlich1@gmail.com"
              className="group"
              target="_blank"
            >
              <MailIcon size={20} className="group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
