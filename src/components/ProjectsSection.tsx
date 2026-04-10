import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Lottie from "lottie-react";
import SectionWrapper from "./SectionWrapper";
import projectsAnim from "@/assets/lottie/projects.json";

type Category = "freelance" | "personal" | "course";

const projects: { category: Category; name: string; description: string; link?: string; playStoreLink?: string }[] = [
  {
    category: "freelance",
    name: "Payss Merchant App",
    description: "Scalable Flutter merchant application with REST API integration, Riverpod state management, and Clean Architecture design.",
    link: "https://github.com/RwanHossamEldein/payss-merchant-showcase",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.payss.merchant",
  },
  { category: "personal", name: "Text-to-Speech App (Speak-it-right)", description: "Speech synthesis & recognition", link: "https://github.com/RwanHossamEldein/Speak-it-right" },
  { category: "personal", name: "Snake Game", description: "Classic game built with Flutter", link: "https://github.com/RwanHossamEldein/snake-game" },
  { category: "personal", name: "Emotion Recognition System", description: "AI-powered emotion detection", link: "https://github.com/RwanHossamEldein/Recognizing-human_facial_expressions" },
  { category: "personal", name: "Weather App", description: "Real-time weather forecasting", link: "https://github.com/RwanHossamEldein/Weather-App" },
  { category: "personal", name: "ToDayDo App", description: "Task management application", link: "https://github.com/RwanHossamEldein/ToDayDo" },
  { category: "course", name: "LingoSign App", description: "Sign language learning application", link: "https://github.com/RwanHossamEldein/Lingo-Sign" },
];

const tabs: { key: Category; label: string }[] = [
  { key: "freelance", label: "Freelance" },
  { key: "personal", label: "Personal" },
  { key: "course", label: "Course" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("freelance");
  const filtered = projects.filter((p) => p.category === active);
  const isSingle = filtered.length === 1;

  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 mb-4">
            <Lottie animationData={projectsAnim} loop />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="neon-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary" />
        </div>

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

        <div className={`grid gap-6 max-w-5xl mx-auto ${isSingle ? "sm:grid-cols-1 max-w-md" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {filtered.map((p, i) => (
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
                {p.playStoreLink && (
                  <a
                    href={p.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-sm neon-text hover:underline"
                  >
                    Google Play <ExternalLink className="h-3.5 w-3.5" />
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
