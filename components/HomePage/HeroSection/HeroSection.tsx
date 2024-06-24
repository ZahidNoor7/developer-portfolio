import Link from "next/link";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { personalDetails } from "@/utils/data/personalDetails";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 pt-20 lg:py-12 lg:pt-24">
      {/* Background Image */}
      <Image
        alt="Hero"
        width={1572}
        height={795}
        src="/assets/svgs/designs/hero.svg"
        className="absolute top-[60px] z-10 w-full h-auto object-cover"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 w-full max-w-screen-2xl">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is&nbsp;
            <span className="text-pink-500">{personalDetails.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">
              {personalDetails.designation}
            </span>
            .
          </h1>

          {/* Social Media Links */}
          <div className="my-8 md:my-12 flex items-center gap-4 md:gap-5">
            <Link
              href={personalDetails.github}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300 "
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalDetails.linkedIn}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300 "
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalDetails.stackOverflow}
              target="_blank"
              className="transition-all hover:text-[#16f2b3] hover:scale-125 duration-300 "
            >
              <FaStackOverflow size={24} />
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 w-full md:w-auto"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 justify-center hover:gap-3 w-full">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              role="button"
              target="_blank"
              href={personalDetails.resume}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold w-full md:w-auto justify-center"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          {/* Code-like Information Display */}
          <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Muhammad Zahid Noor</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">ReactJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Ant-Design</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Semantic-UI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Material-UI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Bootstrap</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Git</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-amber-300">true</span>
                <span className="text-gray-400">{","}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">coffee:</span>
                <span className="text-amber-300">true</span>
                <span className="text-gray-400">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
