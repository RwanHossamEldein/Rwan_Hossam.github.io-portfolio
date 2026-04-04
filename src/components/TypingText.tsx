import { useState, useEffect } from "react";

const colors = [
  "hsl(25 95% 53%)",   // amber/orange
  "hsl(35 100% 50%)",  // golden
  "hsl(15 90% 55%)",   // warm coral
];

const TypingText = ({ texts, className = "" }: { texts: string[]; className?: string }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={className} style={{ color: colors[textIndex % colors.length] }}>
      {texts[textIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
