import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    role: "Flutter Developer",
    company: "Alphawave",
    period: "1/8/2026 – Present",
    points: [
      "Developing and maintaining Flutter applications using Clean Architecture.",
      "Building scalable and maintainable features with Bloc.",
      "Integrating REST APIs and Firebase services.",
      "Collaborating with cross-functional teams to deliver high-quality applications.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Alphawave",
    period: "1/5/2026 – 1/8/2026",
    points: [
      "Developed Flutter features under the guidance of senior developers.",
      "Integrated REST APIs and implemented responsive UI components.",
      "Applied Clean Architecture and state management solutions.",
      "Collaborated with the team using Git and GitHub.",
    ],
  },
  {
    role: "Freelance Flutter Developer",
    company: "",
    period: "",
    points: [
      "Developed and delivered Flutter applications for clients.",
      "Implemented responsive UI and integrated backend APIs.",
    ],
  },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Work <span className="neon-text">Experience</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            className="glass-card rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <Briefcase className="h-6 w-6 neon-text shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold">
                  {exp.role}
                  {exp.company && (
                    <span className="text-muted-foreground font-normal"> — {exp.company}</span>
                  )}
                </h3>
                {exp.period && <p className="text-sm text-muted-foreground">{exp.period}</p>}
              </div>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="neon-text mt-1">●</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
