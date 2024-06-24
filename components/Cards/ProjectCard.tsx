import Image from "next/image";
import * as React from "react";
import { Project } from "@/types/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasImages = project.images.length > 0;

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full transform transition-all duration-500 hover:scale-105 group">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 relative">
        <div className="flex flex-row space-x-1 sm:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-sm sm:text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div
        className={`flex flex-col lg:flex-row overflow-hidden border-t-[2px] border-indigo-900 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 ${
          hasImages ? "gap-4" : ""
        }`}
      >
        <code
          className={`font-mono text-xs sm:text-sm lg:text-base ${
            hasImages ? "lg:basis-3/5" : "w-full"
          }`}
        >
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 sm:ml-6 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 sm:ml-6 lg:ml-8 mr-2 text-white">
              myRole:
            </span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
        {hasImages && (
          <div className="lg:basis-2/5 relative mt-4 lg:mt-0">
            <div className="grid grid-cols-2 gap-2 transform transition-transform duration-500 group-hover:scale-105">
              {project.images.slice(0, 4).map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={image}
                    width={220}
                    height={140}
                    alt={`${project.name} image ${index + 1}`}
                    className="rounded-lg transition-all duration-1000 cursor-pointer hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
