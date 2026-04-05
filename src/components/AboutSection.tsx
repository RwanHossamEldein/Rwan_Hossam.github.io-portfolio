import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aboutAnimation from "@/assets/lottie/about.json";
import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        About <span className="neon-text">Me</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-primary" />

      <motion.div
        className="w-36 h-36 mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Lottie animationData={aboutAnimation} loop autoplay />
      </motion.div>

      <div className="glass-card rounded-2xl p-8 md:p-12">
        <p className="text-muted-foreground leading-relaxed text-lg">
          I'm a Computer Science student specializing in <strong className="text-foreground">Flutter development</strong>.
          Passionate about building scalable, high-performance mobile applications with a strong
          focus on <strong className="text-foreground">clean architecture</strong>, thoughtful UX, and pixel-perfect UI.
          I believe in writing maintainable code and delivering products that users love.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
