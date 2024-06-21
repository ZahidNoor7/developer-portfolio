import Image from "next/image";
import { personalDetails } from "@/utils/data/personalDetails";

export default function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl">
            Let Me Introduce MySelf...!
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalDetails.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            width={280}
            height={280}
            alt="Muhammad Zahhid Noor"
            src={personalDetails.profile}
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
