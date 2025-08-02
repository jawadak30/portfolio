import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-10 text-pink-500" />, href: "https://www.instagram.com/jawadakabour_05", label: "Instagram" },
  { icon: <FaFacebook className="size-10 text-blue-500" />, href: "https://www.facebook.com/profile.php?id=61551423717711", label: "Facebook" },
  { icon: <FaLinkedin className="size-10 text-blue-500" />, href: "https://www.linkedin.com/in/jawad-akabour-7b6a662b8", label: "LinkedIn" },
  { icon: <FaGithub className="size-10" />, href: "https://github.com/jawadak30", label: "GitHub" },
  {
    icon: <FaEnvelope className="size-10 text-red-500" />,
    href: "mailto:jawadakabour30@gmail.com",
    label: "Email",
  },
  {
    icon: <FaWhatsapp className="size-10 text-green-500" />,
    href: "https://wa.me/212603847763",
    label: "WhatsApp",
  },
];


const Footer = ({
  socialLinks = defaultSocialLinks,
  copyright = "© Jawad Akabour. All rights reserved.",
}: Footer7Props) => {
  return (
    <section className="flex flex-col items-center justify-center" id="contact">
      <p className="mb-4 text-xs text-muted-foreground md:pl-5">Contact</p>
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6">
            <ul
              className="text-muted-foreground flex items-center space-x-6"
              style={{ justifyContent: "center", height: "200px" }}
            >
              {socialLinks.map((social, idx) => (
                <motion.li
                  key={idx}
                  className="hover:text-primary font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 1 }}
                  whileHover={{ scale: 1.2, rotate: 2 }}
                >
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
export default Footer;
