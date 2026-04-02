import { Atom } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const TrainingSection = () => (
  <SectionWrapper id="training">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Quantum <span className="neon-text">Training</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

      <div className="glass-card rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <Atom className="h-7 w-7 neon-text" />
          <h3 className="text-xl font-bold">Quantum Computing & Programming</h3>
        </div>
        <p className="text-muted-foreground mb-1">Summer Training 2025</p>
        <p className="text-sm neon-text font-mono font-semibold mb-6">Grade: 278 / 300</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Quantum Gates", "Entanglement", "Superposition", "Quantum Algorithms"].map((t) => (
            <span key={t} className="rounded-full px-3 py-1 text-xs bg-muted text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Hands-on labs, final project, and certificates included.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default TrainingSection;
