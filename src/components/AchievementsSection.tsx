import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  "DEPI Top Student",
  "DEPI Graduation",
  "HackerRank Best Mentor",
  "HackerRank Best Member",
  "AI & Machine Learning (Microsoft & Sprints)",
  "Cloud Computing (Creativa Hub Alexandria)",
  "Flutter Development (Sprints)",
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Achievements & <span className="neon-text">Certifications</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-primary" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            className="glass-card rounded-2xl p-5 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Award className="h-6 w-6 shrink-0 neon-text" />
            <span className="text-sm font-medium">{a}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
