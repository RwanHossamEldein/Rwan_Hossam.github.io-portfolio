import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillGroups = [
  { title: "Programming Languages", items: ["Dart", "Python", "Go", "Java"], accent: false },
  { title: "Mobile", items: ["Flutter", "Firebase"], accent: true },
  { title: "State Management", items: ["Riverpod", "Provider", "BLoC"], accent: false },
  { title: "Architecture", items: ["MVC", "MVP", "MVVM", "Clean Architecture"], accent: true },
  { title: "Tools", items: ["Git", "GitHub"], accent: false },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        My <span className="neon-text">Skills</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-primary" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="glass-card rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className={`font-semibold text-lg mb-4 ${group.accent ? "neon-text-purple" : "neon-text"}`}>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1 text-sm bg-muted text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
