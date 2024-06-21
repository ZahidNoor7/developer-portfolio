import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import SkillsSection from "@/components/HomePage/SkillsSection/SkillsSection";
import ContactSection from "@/components/HomePage/ContactSection/ContactSection";
import ProjectsSection from "@/components/HomePage/ProjectsSection/ProjectsSection";
import EducationSection from "@/components/HomePage/EducationSection/EducationSection";
import ExperienceSection from "@/components/HomePage/ExperienceSection/ExperienceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
