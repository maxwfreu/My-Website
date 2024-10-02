import { CodeIcon, MailIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Max Freundlich",
  description: "Max Freundlich | Fullstack Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="bg-blackfont-montserrat text-white overflow-hidden">
      <main id="top">
        <div className="h-screen flex justify-center items-center overflow-hidden px-4 pb-8">
          <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div>
              <h1 className="text-3xl md:text-6xl">
                Hi, I&apos;m <span className="text-blue-400">Max</span>
              </h1>
              <div className="text-sm md:text-base mt-8">
                <p>
                  I&apos;m a software developer in Philadelphia, PA. I like
                  building websites.
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
          </div>
        </div>
      </main>
    </div>
  );
}
