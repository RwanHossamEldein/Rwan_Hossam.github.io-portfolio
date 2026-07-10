import { useState } from "react";
import { motion } from "framer-motion";
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.303-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" />
  </svg>
);
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
  { category: "personal", name: "ToDayDo App", description: "Task management application", link: "https://github.com/RwanHossamEldein/ToDayDo" },
  { category: "personal", name: "Weather App", description: "Real-time weather forecasting", link: "https://github.com/RwanHossamEldein/Weather-App" },
  { category: "personal", name: "Emotion Recognition System", description: "AI-powered emotion detection", link: "https://github.com/RwanHossamEldein/Recognizing-human_facial_expressions" },
  { category: "personal", name: "Snake Game", description: "Classic game built with Flutter", link: "https://github.com/RwanHossamEldein/snake-game" },
  { category: "personal", name: "Text-to-Speech App (Speak-it-right)", description: "Speech synthesis & recognition", link: "https://github.com/RwanHossamEldein/Speak-it-right" },
  { category: "personal", name: "The-Batman-Runner", description: "A fast-paced 2D Endless Runner game built with Flutter and Flame Engine. Help Batman navigate through Gotham's obstacles, avoid Joker's traps, and survive as long as possible using smooth jumping and flying mechanics.", link: "https://github.com/RwanHossamEldein/The-Batman-Runner" },
  { category: "personal", name: "HanSprint", description: "An innovative 2D endless runner built with Flutter & Flame, controlled entirely by real-time body gestures via front camera using Google ML Kit Pose Detection.", link: "https://github.com/RwanHossamEldein/HandSprint" },
  { category: "personal", name: "Alphabet-sign-detection", description: "Arabic sign language letter recognition project. I worked on a dataset for Arabic letters, used MediaPipe for landmarks, then trained a Neural Network Model for recognition. I also built a FastAPI endpoint to serve the model and integrated it with TTS packages to read letters out loud. I tested whether model accuracy drops after integration into a website or mobile app and found no significant difference. The project can recognize Arabic sign letters and form words by combining them, but not yet full words from a single gesture. Currently supports English and Arabic, with full Arabic integration coming soon." },
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
                <div className="flex items-center gap-3 mt-4">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm neon-text hover:underline"
                    >
                      <GitHubIcon className="h-5 w-5" /> GitHub
                    </a>
                  )}
                  {p.playStoreLink && (
                    <a
                      href={p.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm neon-text hover:underline"
                    >
                      <GooglePlayIcon className="h-5 w-5" /> Google Play
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
