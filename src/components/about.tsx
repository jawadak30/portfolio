"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { GithubLogo } from "./icons";
import resume from "../assets/jawad akabour english resume.pdf";
import profile from "../assets/profile/profile.png";
import { easeInOut } from "framer-motion";

const About = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: easeInOut },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          {/* Profile Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, rotateY: -45, scale: 0.8 }}
            animate={
              imageInView
                ? { opacity: 1, rotateY: 0, scale: 1 }
                : { opacity: 0, rotateY: -45, scale: 0.8 }
            }
            transition={{ duration: 1.5, ease: easeInOut }}
            whileHover={{
              rotateX: 15,
              rotateY: 15,
              scale: 1.1,
              transition: { type: "spring", stiffness: 150 },
            }}
            className="hidden md:block"
            style={{ perspective: "1000px" }}
          >
            <ProfileImage />
          </motion.div>

          {/* Content */}
          <motion.div
            ref={contentRef}
            variants={variants}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="flex-1 md:text-left flex flex-col justify-center items-center"
          >
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>

            {/* Profile image for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="mt-3 mb-8 block md:hidden"
              whileHover={{
                rotateX: 15,
                rotateY: 15,
                scale: 1.1,
                transition: { type: "spring", stiffness: 150 },
              }}
              style={{ perspective: "1000px" }}
            >
              <ProfileImage />
            </motion.div>

            {/* Animated Heading */}
            <motion.h2
              initial={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 0 }}
              animate={{
                rotateX: [0, 180, 0],
                rotateY: [0, 180, 0],
                scale: [1, 1.3, 1],
                opacity: 1,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: 0,
              }}
              className="text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white"
            >
              Full Stack Developer passionate about building real-world solutions
            </motion.h2>

            {/* Animated Subheading */}
            <motion.p
              className="mb-6 text-justify text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              I’m a Full Stack Developer trained in modern software development,
              with hands-on experience in both frontend and backend technologies.
              My expertise spans React, Laravel 11, Symfony, Docker, JWT, OAuth,
              and microservice architecture. I enjoy contributing to impactful
              projects, solving real-world problems, and collaborating within agile
              teams. Currently, I’m focused on building scalable and secure
              platforms that serve users effectively.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full" asChild>
                <a
                  href="https://github.com/jawadak30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo />
                  View Github
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a href={resume} download>
                  <Download />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({ className }: { className?: string }) => (
  <motion.div
    className={cn(
      "mt-10 w-48 h-48 md:w-64 md:h-64 overflow-hidden bg-gray-200 dark:bg-gray-800",
      className
    )}
    style={{
      borderRadius: "50%",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2) dark:rgba(0,0,0,0.5)",
    }}
    animate={{
      rotateY: [0, 15, -15, 0],
      rotateX: [0, -10, 10, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <img
      src={profile}
      alt="Profile"
      className="object-cover w-full h-full"
      style={{ borderRadius: "50%" }}
    />
  </motion.div>
);

export default About;
