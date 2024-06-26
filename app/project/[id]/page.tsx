import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/types";

// Function to fetch project details
async function projectDetails(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/projects/${id}`
    // `http://localhost:3000/api/projects/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data?.project;
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const fetchData = async () => {
    try {
      const data: Project = await projectDetails(params.id);
      return data;
    } catch (error) {
      console.error("Error fetching project data:", error);
      throw error;
    }
  };

  const data = await fetchData();

  return (
    <div className="container mx-auto px-4 py-32 sm:px-6 lg:px-8">
      <main className="relative">
        {/* Background Image */}
        <Image
          alt="Hero"
          width={1572}
          height={795}
          src="/assets/svgs/designs/section.svg"
          className="absolute left-0 right-0 top-0 -z-10"
        />

        {/* Sticky Header Section */}
        <div className="shadow-md">
          {/* Decorative Blur Element */}
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>

          {/* Header Content */}
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-2xl rounded-md">
              {data?.name}
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col-reverse md:flex-row pt-4">
          {/* Left Content */}
          <div className="flex flex-col gap-8 md:w-2/3 md:pr-8">
            <p className="mt-8 text-lg">{data?.description}</p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {data?.images?.map((image: any, index: number) => (
                <div key={index} className="relative">
                  <Image
                    src={image}
                    width={282}
                    height={142}
                    loading="lazy"
                    alt={`${data?.name} Image ${index + 1}`}
                    className="rounded-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Demo Link */}
            <div className="mt-8">
              <Link
                role="button"
                target="_blank"
                href={data?.demo}
                className="inline-block px-4 py-3 text-sm md:text-base font-medium uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-full transition-all duration-200 ease-out hover:text-white hover:no-underline"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="mt-12 md:w-1/3 md:pl-8">
            <h5 className="text-lg md:text-2xl font-semibold mb-4">
              Tools Used
            </h5>
            <div className="flex flex-wrap gap-2">
              {data?.tools?.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs md:text-sm font-semibold px-3 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
            <h5 className="text-lg md:text-2xl font-semibold mt-8 mb-4">
              Role
            </h5>
            <p className="text-sm md:text-lg shadow-md rounded px-4 text-[#16F2B3]">
              {data?.role}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
