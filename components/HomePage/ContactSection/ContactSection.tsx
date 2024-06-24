// import React from "react";
// import Link from "next/link";
// import { CiLocationOn } from "react-icons/ci";
// import { BiLogoLinkedin } from "react-icons/bi";
// import { MdAlternateEmail } from "react-icons/md";
// import { IoLogoGithub, IoMdCall } from "react-icons/io";
// import ContactForm from "@/components/Forms/ContactForm";
// import { personalDetails } from "@/utils/data/personalDetails";
// import { FaXTwitter, FaFacebook, FaStackOverflow } from "react-icons/fa6";

// const ContactSection: React.FC = () => {
//   return (
//     <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
//       {/* Decorative Header for Larger Screens */}
//       <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           CONTACT
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>

//       {/* Main Content Area */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//         <ContactForm />

//         <div className="lg:w-3/4">
//           <div className="flex flex-col gap-5 lg:gap-9">
//             {/* Contact Details */}
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <MdAlternateEmail
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalDetails.email}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <IoMdCall
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalDetails.phone}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <CiLocationOn
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalDetails.address}</span>
//             </p>
//           </div>

//           {/* Social Media Links */}
//           <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
//             <Link target="_blank" href={personalDetails.github}>
//               <IoLogoGithub
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalDetails.linkedIn}>
//               <BiLogoLinkedin
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalDetails.stackOverflow}>
//               <FaStackOverflow
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             {/* <Link target="_blank" href={personalDetails.twitter}>
//               <FaXTwitter
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalDetails.facebook}>
//               <FaFacebook
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import ContactForm from "@/components/Forms/ContactForm";
import { personalDetails } from "@/utils/data/personalDetails";
import { FaXTwitter, FaFacebook, FaStackOverflow } from "react-icons/fa6";

const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="relative my-12 lg:my-16 mt-24 text-white">
      {/* Decorative Header for Larger Screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />

        <div className="lg:w-3/4">
          <div className="flex flex-col gap-5 lg:gap-9">
            {/* Contact Details */}
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalDetails.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalDetails.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalDetails.address}</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 lg:mt-16 flex flex-wrap gap-5 lg:gap-10">
            <Link target="_blank" href={personalDetails.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalDetails.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalDetails.stackOverflow}>
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            {/* Uncomment and add additional social media links as needed */}
            {/* <Link target="_blank" href={personalDetails.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalDetails.facebook}>
              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
