import { motion } from "framer-motion";
import React from "react";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaPython,
  FaVuejs,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  techIcons?: React.ReactNode[]; // ✅ Added techIcons support
}

interface Feature17Props {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const Feature17 = ({
  heading = "My Tech Stack",
  subheading = "Languages & Tools",
  features = [
    {
      title: "HTML5",
      description: "Markup language for structuring web content.",
      icon: <FaHtml5 className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "CSS3",
      description: "Styling language for beautiful user interfaces.",
      icon: <FaCss3Alt className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "JavaScript",
      description: "Dynamic scripting language for the web.",
      icon: <FaJs className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "React",
      description: "Component-based UI framework by Meta.",
      icon: <FaReact className="w-6 h-6 text-sky-500" />,
    },
    {
      title: "TypeScript",
      description: "Typed superset of JavaScript.",
      icon: <SiTypescript className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Laravel",
      description: "Elegant PHP framework for web apps.",
      icon: <FaLaravel className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Node.js",
      description: "Runtime for building server-side apps in JS.",
      icon: <FaNodeJs className="w-6 h-6 text-green-600" />,
    },
    {
      title: "PHP",
      description: "Server-side scripting language.",
      icon: <FaPhp className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Python",
      description: "General-purpose language for AI, web, and automation.",
      icon: <FaPython className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Java",
      description: "Robust, class-based programming language.",
      icon: <FaJava className="w-6 h-6 text-red-700" />,
    },
    {
      title: "Vue.js",
      description: "Progressive JS framework for UIs.",
      icon: <FaVuejs className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Angular",
      description: "Application-design framework for SPAs.",
      icon: <FaAngular className="w-6 h-6 text-red-600" />,
    },
    {
      title: "Docker",
      description: "Container platform for app packaging.",
      icon: <FaDocker className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Git",
      description: "Version control system for tracking code.",
      icon: <FaGitAlt className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "SQL / NoSQL",
      description: "Databases like MySQL, MongoDB, PostgreSQL.",
      icon: <FaDatabase className="w-6 h-6 text-emerald-600" />,
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-32" id="skills">
      <div className="container mx-auto max-w-7xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">{subheading}</p>
        <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
        <div className="mx-auto mt-14 grid gap-x-14 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: idx * 0.1,
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center text-center bg-muted/30 backdrop-blur-md rounded-xl p-6 hover:scale-[1.03] transition-all duration-300"
            >
              <span className="mb-4">{feature.icon}</span>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>

              {feature.techIcons && (
                <div className="flex gap-2 mt-3 flex-wrap justify-center">
                  {feature.techIcons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature17 };
