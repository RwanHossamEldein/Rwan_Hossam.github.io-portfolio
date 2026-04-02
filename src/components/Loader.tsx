import { motion, AnimatePresence } from "framer-motion";
import FlutterLogo from "./FlutterLogo";

const Loader = ({ isLoading }: { isLoading: boolean }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
        style={{ background: "hsl(240 10% 3%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="animate-neon-pulse rounded-full p-6">
          <FlutterLogo size={100} />
        </div>
        <motion.p
          className="mt-6 font-mono text-sm tracking-widest text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Loader;
