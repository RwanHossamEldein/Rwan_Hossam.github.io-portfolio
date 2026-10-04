import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        About <span className="neon-text">Me</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-primary" />

      <motion.div
        className="glass-card rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground leading-relaxed text-lg">
          <strong className="text-foreground">Computer Science graduate</strong> and{" "}
          <strong className="text-foreground">Flutter Developer</strong> passionate about building
          high-quality mobile applications. Experienced in developing cross-platform apps using{" "}
          <strong className="text-foreground">Flutter and Dart</strong> while applying{" "}
          <strong className="text-foreground">Clean Architecture, Clean Code, and SOLID principles</strong>{" "}
          to create scalable and maintainable solutions.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mt-6">
          Beyond development, I enjoy writing technical content that simplifies software engineering
          concepts and helps fellow developers learn and grow. I am always eager to explore new
          technologies and improve my skills through real-world projects and continuous learning.
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
