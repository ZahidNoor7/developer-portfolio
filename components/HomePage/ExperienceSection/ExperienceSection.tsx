import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "@/components/Cards/GlowCard";
import experience from "@/public/lottie/code.json";
import AnimationLottie from "@/components/Animations/AnimationLottie";
import { professionalExperience } from "@/utils/data/professionalExperience";

export default function ExperienceSection() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        src="/assets/svgs/designs/section.svg"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-4 sm:px-5 text-lg sm:text-xl rounded-md">
            Experiences
          </span>
          <span className="w-16 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {professionalExperience.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      alt="Hero"
                      width={1080}
                      height={200}
                      src="/assets/svgs/designs/blur.svg"
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4 sm:gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={28} />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base mb-2 font-medium">
                          {experience.title}
                        </p>
                        <p className="text-xs sm:text-sm">
                          {experience.company}
                          {experience.additionalInfo && (
                            <span className="text-xs text-[#16f2b3]">
                              {experience.additionalInfo}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
