import { motion } from "framer-motion";
import { Award, ExternalLink, Atom } from "lucide-react";
import Lottie from "lottie-react";
import SectionWrapper from "./SectionWrapper";
import achievementsAnim from "@/assets/lottie/achievements.json";

const achievements: { name: string; link: string }[] = [
  { name: "DEPI Top Student", link: "https://drive.google.com/file/d/1AfgaEmZ274virXbH66g_Q_invji5nUcE/view?usp=sharing" },
  { name: "DEPI Graduation", link: "https://drive.google.com/file/d/1-gETwrs5oo-79scn1f1nJ-P1dAUp5OqH/view?usp=sharing" },
  { name: "HackerRank Best Mentor", link: "https://drive.google.com/file/d/1r2uehS_Rny13dggbXGYgNG4nRQ7dYR0A/view?usp=sharing" },
  { name: "HackerRank Best Member", link: "https://drive.google.com/file/d/1AVaxNMafoOJJtVSAC1zG8RJ_Uq2pW7I4/view?usp=sharing" },
  { name: "AI & Machine Learning (Microsoft & Sprints)", link: "https://drive.google.com/file/d/1hMPkl2pxovzfTpZxrrsiqh5r-MnbieqC/view?usp=sharing" },
  { name: "Cloud Computing (Creativa Hub Alexandria)", link: "https://drive.google.com/file/d/1FN4L8voxn4-WCswFL1XZSeSZsh1-pt-l/view?usp=sharing" },
  { name: "Flutter Development (Sprints)", link: "https://drive.google.com/file/d/1U4PtxtwRm4gdb94qe_vQ_FZbJ4Nxu0nn/view?usp=sharing" },
];

const quantumCerts = [
  "https://drive.google.com/file/d/1MJI7A7Ylu4uEfj3IT70WPPttB7dmx6LD/view?usp=sharing",
  "https://drive.google.com/file/d/1JEyoCJxsW9MvBRM-ZA7J3V0kMGJqqE43/view?usp=sharing",
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 mb-4">
          <Lottie animationData={achievementsAnim} loop />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Achievements & <span className="neon-text">Certifications</span>
        </h2>
        <div className="w-16 h-1 rounded-full bg-primary" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-10">
        {achievements.map((a, i) => (
          <motion.a
            key={a.name}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Award className="h-6 w-6 shrink-0 neon-text" />
            <span className="text-sm font-medium flex-1">{a.name}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>

      {/* Quantum Training */}
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Atom className="h-7 w-7 neon-text-purple" />
            <h3 className="text-xl font-bold">Quantum Computing & Programming</h3>
          </div>
          <p className="text-muted-foreground mb-1">Summer Training 2025</p>
          <p className="text-sm text-muted-foreground mb-1">Organized by QWorld, AIU, QEgypt, AleQCG</p>
          <p className="text-sm neon-text-purple font-mono font-semibold mb-6">Grade: 278 / 300</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {["Quantum Gates", "Entanglement", "Superposition", "Quantum Algorithms"].map((t) => (
              <span key={t} className="rounded-full px-3 py-1 text-xs bg-muted text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Hands-on programming labs + final project.
          </p>
          <div className="flex gap-3">
            {quantumCerts.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm neon-text-purple hover:underline"
              >
                Certificate {i + 1} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
