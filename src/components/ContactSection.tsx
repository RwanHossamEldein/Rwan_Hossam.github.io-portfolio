import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./SectionWrapper";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (name: string, email: string, message: string) => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    if (!message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = formRef.current!;
    const fd = new FormData(form);
    const name = fd.get("user_name") as string;
    const email = fd.get("user_email") as string;
    const message = fd.get("message") as string;

    const v = validate(name, email, message);
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus("loading");
    try {
      // Replace these with your actual EmailJS service/template/public key
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <div className="w-16 h-1 mx-auto mb-10 rounded-full bg-primary" />

        <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
          {(["user_name", "user_email"] as const).map((field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={field === "user_name" ? "Your Name" : "Your Email"}
                className="w-full rounded-lg bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition"
              />
              {errors[field.replace("user_", "")] && (
                <p className="text-xs text-destructive mt-1">{errors[field.replace("user_", "")]}</p>
              )}
            </div>
          ))}

          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-lg bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary transition resize-none"
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            className="neon-button w-full flex items-center justify-center gap-2 disabled:opacity-60"
            whileTap={{ scale: 0.97 }}
            animate={status === "error" ? { x: [0, -8, 8, -8, 8, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            {status === "loading" && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            )}
            {status === "success" && <CheckCircle className="h-5 w-5" />}
            {status === "error" && <AlertCircle className="h-5 w-5" />}
            {status === "idle" && <Send className="h-4 w-4" />}
            {status === "idle"
              ? "Send Message"
              : status === "loading"
              ? "Sending..."
              : status === "success"
              ? "Message Sent!"
              : "Failed — Try Again"}
          </motion.button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
