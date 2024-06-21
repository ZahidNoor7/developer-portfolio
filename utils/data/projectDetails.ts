import { Project } from "@/types/types";

import SkimmingAI_1 from "/public/assets/images/projects/Skimming AI/SkimmingAI_1.png";
import SkimmingAI_2 from "/public/assets/images/projects/Skimming AI/SkimmingAI_2.png";
import SkimmingAI_3 from "/public/assets/images/projects/Skimming AI/SkimmingAI_3.png";
import SkimmingAI_4 from "/public/assets/images/projects/Skimming AI/SkimmingAI_4.png";
import SkimmingAI_5 from "/public/assets/images/projects/Skimming AI/SkimmingAI_5.png";

import Sanaulla_1 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_1.png";
import Sanaulla_2 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_2.png";
import Sanaulla_3 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_3.png";
import Sanaulla_4 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_4.png";
import Sanaulla_5 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_5.png";
import Sanaulla_6 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_6.png";
import Sanaulla_7 from "/public/assets/images/projects/Sanaulla Store/Sanaulla_7.png";

import Kees_1 from "/public/assets/images/projects/Kees/Kees_1.png";
import Kees_2 from "/public/assets/images/projects/Kees/Kees_2.png";
import Kees_3 from "/public/assets/images/projects/Kees/Kees_3.png";
import Kees_4 from "/public/assets/images/projects/Kees/Kees_4.png";
import Kees_5 from "/public/assets/images/projects/Kees/Kees_5.png";
import Kees_6 from "/public/assets/images/projects/Kees/Kees_6.png";

import PCB_1 from "/public/assets/images/projects/PCB/PCB_1.png";
import PCB_2 from "/public/assets/images/projects/PCB/PCB_2.png";
import PCB_3 from "/public/assets/images/projects/PCB/PCB_3.png";
import PCB_4 from "/public/assets/images/projects/PCB/PCB_4.png";
import PCB_5 from "/public/assets/images/projects/PCB/PCB_5.png";
import PCB_6 from "/public/assets/images/projects/PCB/PCB_6.png";

import Destination_1 from "/public/assets/images/projects/Destination/Destination_1.png";
import Destination_2 from "/public/assets/images/projects/Destination/Destination_2.png";
import Destination_3 from "/public/assets/images/projects/Destination/Destination_3.png";
import Destination_4 from "/public/assets/images/projects/Destination/Destination_4.png";
import Destination_5 from "/public/assets/images/projects/Destination/Destination_5.png";
import Destination_6 from "/public/assets/images/projects/Destination/Destination_6.png";
import Destination_7 from "/public/assets/images/projects/Destination/Destination_7.png";

import ReactFuse_1 from "/public/assets/images/projects/React Fuse/ReactFuse_1.png";
import ReactFuse_2 from "/public/assets/images/projects/React Fuse/ReactFuse_2.png";
import ReactFuse_3 from "/public/assets/images/projects/React Fuse/ReactFuse_3.png";
import ReactFuse_4 from "/public/assets/images/projects/React Fuse/ReactFuse_4.png";
import ReactFuse_5 from "/public/assets/images/projects/React Fuse/ReactFuse_5.png";
import ReactFuse_6 from "/public/assets/images/projects/React Fuse/ReactFuse_6.png";
import ReactFuse_7 from "/public/assets/images/projects/React Fuse/ReactFuse_7.png";

export const projectDetails: Project[] = [
  {
    id: 1,
    name: `Skimming AI`,
    description: `SkimmingAI is an AI-powered tool that allows users to ask questions and get accurate answers by analyzing PDF,
DOCX, TXT, and CSV documents they upload. The system quickly scans the documents for answers and provides
relevant references and page numbers, along with a clear answer in most cases.`,
    tools: [
      "NextJs",
      "Redux Toolkit",
      "Tailwind CSS",
      "NodeJs",
      "MySQL",
      "Nginx",
      "Google Analytics",
      "Docker",
      "AWS",
    ],
    role: "Frontend Developer",
    demo: "https://www.app.skimming.ai/",
    code: "",
    images: [
      SkimmingAI_1,
      SkimmingAI_2,
      SkimmingAI_3,
      SkimmingAI_4,
      SkimmingAI_5,
    ],
  },
  {
    id: 2,
    name: "Sanaullah Marketplace",
    description: `Sanaullah Marketplace is based on Comverse e-commerce platform and will. also include enhanced MultiLocation
features and integration with Gingkgo Inventory Sync ERP System.`,
    tools: [
      "NextJs-13",
      "Ant Design",
      "Tailwind CSS",
      "Redux Toolkit",
      "NextAuth",
      "MoEngage",
      "Google Analytics",
      "Facebook Pixel",
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "D.R.F",
      "Docker",
      "Redis",
      "AWS ECS",
      "AWS Elastic Cache",
    ],
    role: "Frontend Developer",
    demo: "https://www.sanaullastore.com/",
    code: "",
    images: [
      Sanaulla_1,
      Sanaulla_2,
      Sanaulla_3,
      Sanaulla_4,
      Sanaulla_5,
      Sanaulla_6,
      Sanaulla_7,
    ],
  },
  {
    id: 3,
    name: "Republic Menswear",
    description: `Republic by Omer Farooq is based on Comverse e-commerce platform and will. also include enhanced
MultiLocation features and integration with Ginkgo Inventory Sync ERP System.
It’s a Headless e-commerce website whose storefront designed on NextJS with backend on Django/Python.
Powered by enhanced and improved features of Comverse platform which includes saving users Cart on
backend and restoring it cart. Inventory restock notifications.`,
    tools: [
      "NextJs-13",
      "Ant Design",
      "Redux Toolkit",
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "D.R.F",
      "Docker",
      "Redis",
      "AWS ECS",
      "AWS Elastic Cache",
    ],
    role: "Frontend Developer",
    demo: "https://www.republicbespoke.com/",
    code: "",
    images: [],
  },
  {
    id: 4,
    name: "PCB - Pakistan Cricket Board (Official Store)",
    description: `PCB's Official Merchandise Store based on Comverse E-commerce platform with additional feature of Multilocation.`,
    tools: [
      "ReactJs",
      "PWA",
      "Semantic UI",
      "Redux Toolkit",
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "D.R.F",
      "Docker",
      "Redis",
      "AWS ECS",
      "AWS Elastic Cache",
    ],
    role: "Frontend Developer",
    demo: "https://shop.pcb.com.pk/",
    code: "",
    images: [PCB_1, PCB_2, PCB_3, PCB_4, PCB_5, PCB_6],
  },
  {
    id: 5,
    name: "Kees - E-commerce platform in Qatar",
    description: `KEES is a multi-vendor marketplace website of Qatar based on Comverse e-commerce platform.`,
    tools: [
      "ReactJs",
      "PWA",
      "Semantic UI",
      "Redux Toolkit",
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "D.R.F",
      "Docker",
      "Redis",
      "AWS ECS",
      "AWS Elastic Cache",
    ],
    role: "Frontend Developer",
    demo: "https://kees.qa",
    code: "",
    images: [Kees_1, Kees_2, Kees_3, Kees_4, Kees_5, Kees_6],
  },
  {
    id: 6,
    name: "Comverse",
    description: `Comverse is a custom multi-vendor e-commerce marketplace that has built-in all basic and advanced e-
commerce features like:
Product Management
Order Management
CMS
CRM
Local and International Payment Gateways
Logistics Services
ERP Integration,
Push Notifications
Advanced Discounts Module
Multi-location with Multi-currency Inventory Management
Advance Shipping Charges Management.`,
    tools: [
      "React/NextJs",
      "Ant Design",
      "Tailwind CSS",
      "Redux Toolkit",
      "NextAuth",
      "Google Analytics",
      "Facebook Pixel",
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "D.R.F",
      "Docker",
      "Redis",
      "AWS ECS",
      "AWS Elastic Cache",
    ],
    role: "Frontend Developer",
    demo: "https://staging.comverseglobal.com/",
    code: "",
    images: [Kees_1, PCB_1, Sanaulla_1],
  },
  {
    id: 7,
    name: "Destinations (Project by Daewoo)",
    description: `Destinations is a unique idea by Deawoo Express to promote tourism in Pakistan using information technology.
Users can select any destination they want to explore from snowy roads of Karakoram Highway to desert lands of
Thar using there smart phone app. The app will show a curated travel plan from user's location including all
information regarding the tour such as days required for travel, nearby places of interest along there path as well
as local hotels and restaurants where they can rest and refresh. The project included mobile apps for both
Android and iOS platforms, an admin panel for administrators to upload content and create curated tours, a
centralised backend app which provides all calculations and data to all apps.`,
    tools: [
      "Angular 12",
      "Angular Material",
      "Python",
      "Django",
      "MySQL",
      "Flutter",
      "D.R.F",
      "Docker",
      "AWS",
    ],
    role: "Frontend Developer",
    demo: "https://destinations.com.pk/",
    code: "",
    images: [
      Destination_1,
      Destination_2,
      Destination_3,
      Destination_4,
      Destination_5,
      Destination_6,
      Destination_7,
    ],
  },
  {
    id: 8,
    name: "React Fuse Theme Admin Dashboard",
    description: `Contributed to the development of the Fuse Theme Admin Dashboard, an open-source React-based admin
panel on GitHub. Created 20 essential modules tailored to client needs within a limited timeframe.
Demonstrated adaptability to existing codebases and proficiency in React. Enhanced user experience by
leveraging React's capabilities. Added significant value to the project.`,
    tools: [
      "ReactJs",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "PWA",
      "AWS",
      "Docker",
      "Vercel",
    ],
    role: "Frontend Developer",
    demo: "https://fuse-theme-latest.vercel.app/",
    code: "",
    images: [
      ReactFuse_1,
      ReactFuse_2,
      ReactFuse_3,
      ReactFuse_4,
      ReactFuse_5,
      ReactFuse_6,
      ReactFuse_7,
    ],
  },
  //   {
  //     id: 9,
  //     name: "Look Into Hex",
  //     description: `Designed and built a Marketplace app focused on staking, where users can participate in staking activities.
  // Leveraged React for the frontend to ensure an interactive user interface, integrated Apex Charts for data
  // visualization, and incorporated web3 for seamless blockchain interaction. This application enables users to
  // engage in staking processes efficiently and securely.`,
  //     tools: [
  //       "ReactJs",
  //       "Redux",
  //       "Material UI",
  //       "Tailwind CSS",
  //       "ApexCharts",
  //       "Web 3",
  //       "PWA",
  //       "Vercel",
  //     ],
  //     role: "",
  //     demo: "https://blockchain-lookintohex.vercel.app/",
  //     code: "",
  //     images: [],
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: ``,
//     description: ``,
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: '',
// },
