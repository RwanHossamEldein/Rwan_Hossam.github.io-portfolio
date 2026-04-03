import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const VolunteerSection = () => (
  <SectionWrapper id="volunteer">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        Volunteer <span className="neon-text-purple">Experience</span>
      </h2>
      <div className="w-16 h-1 mx-auto mb-10 rounded-full" style={{ background: "hsl(271 81% 56%)" }} />

      <motion.div
        className="glass-card rounded-2xl p-8 md:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Users className="h-7 w-7 neon-text-purple" />
          <div>
            <h3 className="text-xl font-bold">Community Coordinator</h3>
            <p className="text-sm text-muted-foreground">Flutter Community HackerRank AUFC – June 2025</p>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="neon-text-purple mt-1">●</span>
            <span>Completed intensive training covering Dart, Flutter, and architectural patterns such as MVC, MVP, MVVM, and Clean Architecture.</span>
          </li>
          <li className="flex gap-2">
            <span className="neon-text-purple mt-1">●</span>
            <span>Promoted to Community Coordinator after showcasing strong technical and leadership skills.</span>
          </li>
          <li className="flex gap-2">
            <span className="neon-text-purple mt-1">●</span>
            <span>Delivered technical sessions during the bootcamp, mentoring junior members and assisting in practical Flutter.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default VolunteerSection;
