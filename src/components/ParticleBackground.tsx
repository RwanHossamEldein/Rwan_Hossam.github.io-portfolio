import { useEffect, useRef } from "react";

const CODE_SYMBOLS = ["</>", "{}", "=>", "();", "[]", "//", "&&", "||", "!=", "==", "++", "**", "??", "...", "fn", "if", "0x", "UI"];

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating code symbols
    const symbols: {
      x: number; y: number; vx: number; vy: number;
      text: string; opacity: number; size: number; rotation: number; rotSpeed: number;
    }[] = [];

    for (let i = 0; i < 25; i++) {
      symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        opacity: Math.random() * 0.25 + 0.08,
        size: Math.random() * 12 + 12,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.005,
      });
    }

    // Small dots
    const dots: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 35; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw code symbols
      symbols.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;
        if (s.x < -50) s.x = canvas.width + 50;
        if (s.x > canvas.width + 50) s.x = -50;
        if (s.y < -50) s.y = canvas.height + 50;
        if (s.y > canvas.height + 50) s.y = -50;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.font = `${s.size}px 'Fira Code', 'Courier New', monospace`;
        ctx.fillStyle = `rgba(37, 99, 235, ${s.opacity})`;
        ctx.textAlign = "center";
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
      });

      // Draw dots
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${d.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby dots
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
