import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, BookOpen, Download } from "lucide-react";
import TypingText from "./TypingText";
import FlutterLogo from "./FlutterLogo";
import profileImage from "@/assets/profile.png";

const PROFILE_IMAGE = profileImage;
const CV_LINK = "https://drive.google.com/file/d/1UThcMv8R2ovIDyLRfKqgrrYVGdIauv2W/view?usp=sharing";

const socials = [
  { icon: Github, href: "https://github.com/RwanHossamEldein", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rwan-hossam-08ba39295/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rwanhossam0@gmail.com", label: "Email" },
  { icon: BookOpen, href: "https://medium.com/@RwanHossam", label: "Medium" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["about", "skills", "projects", "achievements", "contact"];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-5"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <span className="neon-text font-mono text-lg font-bold">{"<RH />"}</span>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="text-sm capitalize text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
    {/* Floating Flutter logo background */}
    <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
      <FlutterLogo size={300} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="animate-float">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden neon-border animate-neon-pulse">
              <img
                src={PROFILE_IMAGE}
                alt="Rwan Hossam Eldein"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1 text-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-3">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Rwan Hossam<br />
            <span className="neon-text">Eldein</span>
          </h1>
          <div className="h-8 mb-6">
            <TypingText
              texts={[
                "Flutter Developer",
                "Cross-Platform Mobile Apps",
                "Clean Architecture Enthusiast",
              ]}
              className="font-mono text-lg text-muted-foreground"
            />
          </div>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            I build scalable and user-friendly mobile applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="#projects" className="neon-button inline-flex items-center gap-2">
              View Projects
            </a>
            <a href="#contact" className="glass-button inline-flex items-center gap-2">
              Contact Me
            </a>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 glass-card"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <Navbar />
  </section>
);

export default HeroSection;
