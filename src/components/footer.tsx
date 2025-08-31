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
import { Dock, DockItem, DockIcon, DockLabel } from "@/components/ui/shadcn-io/dock";

interface Footer7Props {
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

const defaultSocialLinks = [
  { icon: <FaInstagram className="h-full w-full text-pink-500" />, href: "https://www.instagram.com/jawadakabour_05", label: "Instagram" },
  { icon: <FaFacebook className="h-full w-full text-blue-500" />, href: "https://www.facebook.com/profile.php?id=61551423717711", label: "Facebook" },
  { icon: <FaLinkedin className="h-full w-full text-blue-500" />, href: "https://www.linkedin.com/in/jawad-akabour-7b6a662b8", label: "LinkedIn" },
  { icon: <FaGithub className="h-full w-full text-black dark:text-white" />, href: "https://github.com/jawadak30", label: "GitHub" },
  { icon: <FaEnvelope className="h-full w-full text-red-500" />, href: "mailto:jawadakabour30@gmail.com", label: "Email" },
  { icon: <FaWhatsapp className="h-full w-full text-green-500" />, href: "https://wa.me/212603847763", label: "WhatsApp" },
];

const Footer = ({
  socialLinks = defaultSocialLinks,
  copyright = "© Jawad Akabour. All rights reserved.",
}: Footer7Props) => {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-10">
      <p className="mb-6 text-xs text-muted-foreground">Contact Me</p>

      <Dock className="items-end pb-3">
        {socialLinks.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.4, rotate: 5 }}
          >
            <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
              <DockLabel>{item.label}</DockLabel>
              <DockIcon>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full w-full flex items-center justify-center"
                >
                  {item.icon}
                </a>
              </DockIcon>
            </DockItem>
          </motion.div>
        ))}
      </Dock>

      <p className="mt-8 text-xs text-muted-foreground">
        {copyright}
      </p>
    </section>
  );
};

export { Footer };
export default Footer;
