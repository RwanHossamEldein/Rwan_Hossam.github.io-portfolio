import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import thankyouAnimation from "@/assets/lottie/thankyou.json";

const MediumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.52-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm2.94 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
  </svg>
);

const socials = [
  { icon: Github, href: "https://github.com/RwanHossamEldein" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rwan-hossam-08ba39295/" },
  { icon: Mail, href: "mailto:rwanhossam0@gmail.com" },
  { icon: MediumIcon, href: "https://medium.com/@RwanHossam" },
];

const Footer = () => (
  <footer className="relative border-t border-border py-24">
    <div className="container mx-auto px-6 text-center">
      <div className="w-40 h-40 mx-auto mb-6">
        <Lottie animationData={thankyouAnimation} loop autoplay />
      </div>
      <motion.p
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Thank you for visiting my <span className="neon-text">portfolio</span>
      </motion.p>
      <p className="text-muted-foreground mb-10 text-lg">Let's build something amazing together.</p>
      <div className="flex justify-center gap-4 mb-10">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-3 glass-card"
          >
            <Icon className="h-5 w-5 text-muted-foreground" />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Rwan Hossam. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
