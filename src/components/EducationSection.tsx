import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const EducationSection = () => (
  <SectionWrapper id="education">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        <span className="neon-text">Education</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

      <motion.div
        className="glass-card rounded-2xl p-8 md:p-10 flex items-start gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="shrink-0 rounded-full p-3 bg-primary/10 border border-primary/20">
          <GraduationCap className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Bachelor of Science in Computer Science</h3>
          <p className="text-primary font-semibold mb-2">Faculty of Science — Alexandria University</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Studying core computer science fundamentals including data structures, algorithms,
            software engineering, and mobile application development.
          </p>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
