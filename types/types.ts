import { StaticImageData } from "next/image";

export interface appPreferences {
  theme: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  demo: string;
  code: string;
  images: StaticImageData[];
}
