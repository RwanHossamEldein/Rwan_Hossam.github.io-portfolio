import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Lottie from "lottie-react";
import SectionWrapper from "./SectionWrapper";
import educationAnim from "@/assets/lottie/education.json";

const EducationSection = () => (
  <SectionWrapper id="education">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        <span className="neon-text">Education</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

      <motion.div
        className="glass-card rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="shrink-0 w-32 h-32">
          <Lottie animationData={educationAnim} loop />
        </div>
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
          </div>
          <p className="text-primary font-semibold mb-3">Faculty of Science — Alexandria University</p>
          <span className="inline-block rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-primary mb-3">
            2022 – 2026 · Excellent with Honors
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Graduated with <strong className="text-foreground">Excellent with Honors</strong>, having built a
            strong foundation in core computer science fundamentals including data structures,
            algorithms, and software engineering.
          </p>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
