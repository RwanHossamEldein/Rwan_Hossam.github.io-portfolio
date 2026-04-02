import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

type Category = "freelance" | "personal" | "course";

const projects: { category: Category; name: string; description: string; link?: string }[] = [
  {
    category: "freelance",
    name: "Payss Merchant App",
    description: "REST API, Riverpod, Clean Architecture",
    link: "https://github.com/RwanHossamEldein/payss-merchant-showcase",
  },
  { category: "personal", name: "Text-to-Speech App (Speak-it-right)", description: "Speech synthesis & recognition" },
  { category: "personal", name: "Snake Game", description: "Classic game built with Flutter" },
  { category: "personal", name: "Emotion Recognition System", description: "AI-powered emotion detection" },
  { category: "personal", name: "Weather App", description: "Real-time weather forecasting" },
  { category: "personal", name: "ToDo App", description: "Task management application" },
  { category: "course", name: "LingoSign App", description: "Sign language learning application" },
];

const tabs: { key: Category; label: string }[] = [
  { key: "freelance", label: "Freelance" },
  { key: "personal", label: "Personal" },
  { key: "course", label: "Course" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("freelance");

  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          My <span className="neon-text">Projects</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === t.key ? "neon-button" : "glass-button"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {projects
            .filter((p) => p.category === active)
            .map((p, i) => (
              <motion.div
                key={p.name}
                className="glass-card rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm neon-text hover:underline"
                  >
                    View on GitHub <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
