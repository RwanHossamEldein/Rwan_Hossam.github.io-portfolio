import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/RwanHossamEldein" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rwan-hossam-08ba39295/" },
  { icon: Mail, href: "mailto:rwanhossam0@gmail.com" },
  { icon: BookOpen, href: "https://medium.com/@RwanHossam" },
];

const Footer = () => (
  <footer className="relative border-t border-border py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="text-muted-foreground mb-4">Thank you for visiting my portfolio</p>
      <div className="flex justify-center gap-4 mb-6">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Rwan Hossam Eldein. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
