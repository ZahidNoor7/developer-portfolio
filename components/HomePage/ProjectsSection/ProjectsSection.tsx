import Link from "next/link";
import * as React from "react";
import { Project } from "@/types/types";
import ProjectCard from "@/components/Cards/ProjectCard";
import { projectDetails } from "@/utils/data/projectDetails";
import GitHubCalendar, { ThemeInput } from "react-github-calendar";

const ProjectsSection: React.FC = () => {
  const customTheme = {
    light: ["#043024", "#0a7959", "#0ea97d", "#10c28e", "#14F2B2"],
    dark: ["#043024", "#0a7959", "#0ea97d", "#10c28e", "#14F2B2"],
  };

  return (
    <div id="projects" className="relative z-40 my-12 lg:my-24">
      <div className="sticky top-10">
        {/* Decorative Blur Element */}
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-30"></div>

        {/* Header Section */}
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-1/2 transform -translate-x-1/2 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="pt-24">
        <div className="flex flex-col gap-12 lg:gap-24">
          {projectDetails.map((project: Project, index: number) => (
            <div
              key={project.id}
              id={`sticky-card-${index + 1}`}
              className="sticky-card w-full mx-auto max-w-4xl sticky top-[20px]"
            >
              <Link target="_blank" href={`/project/${project.id}`}>
                <div className="box-border flex items-center justify-center rounded shadow-lg transition-transform duration-500 hover:scale-100 mb-12 lg:mb-20 hover:z-30 lg:hover:scale-105">
                  <ProjectCard project={project} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl lg:text-3xl pb-5">
          Days I <strong className="text-[#14F2B2]">Code</strong>
        </h1>
        <GitHubCalendar
          fontSize={16}
          blockSize={15}
          blockMargin={5}
          colorScheme="dark"
          username="grubersjoe"
          theme={customTheme as ThemeInput} // Cast customTheme to ThemeInput
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
