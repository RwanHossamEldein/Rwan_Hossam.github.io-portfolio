import { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />
      <ScrollProgress />
      <ParticleBackground />
      <ThemeToggle />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <VolunteerSection />
        <ContactSection />
        <Footer />
      </div>
      <BackToTop />
    </>
  );
};

export default Index;
