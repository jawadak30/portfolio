import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  ShieldCheck,
  Server,
  Wrench,
  Hammer,
  LayoutTemplate,
  Boxes,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FiUsers, FiActivity, FiCheckSquare } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiExpress,
  SiSymfony,
} from "react-icons/si";

// ================== SOFT SKILLS ==================
const softSkills = [
  {
    title: "Collaboration & Teamwork",
    description:
      "Able to work effectively within agile teams, communicate clearly, and contribute to group projects.",
    icon: <FiUsers className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Analytical Thinking",
    description:
      "Skilled at analyzing complex problems, designing solutions, and optimizing systems.",
    icon: <FiActivity className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Project Management",
    description:
      "Experienced in planning, coordinating, and delivering projects on time using Agile/Scrum methodologies.",
    icon: <FiCheckSquare className="w-12 h-12 text-purple-500" />,
  },
];

const SoftSkillsSection = () => (
  <section
    id="soft-skills"
    className="py-20 px-6 bg-gray-50 dark:bg-[#0a0a0a] transition-colors"
  >
    <div className="max-w-4xl mx-auto text-center mb-12">
      <Badge variant="secondary" className="mb-4">
        Soft Skills
      </Badge>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        What I Bring to the Team
      </h2>
      <p className="mt-2 sm:mt-4 text-lg text-gray-700 dark:text-gray-300">
        Skills beyond coding that make me a valuable team member.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {softSkills.map((skill, i) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
          whileHover={{
            rotateX: 15,
            rotateY: 15,
            scale: 1.1,
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          }}
          className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          {/* ICON */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotateY: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            {skill.icon}
          </motion.div>

          {/* TITLE */}
          <motion.h3
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
          >
            {skill.title}
          </motion.h3>

          {/* DESCRIPTION */}
          <motion.p
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-gray-700 dark:text-gray-300"
          >
            {skill.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ================== TECHNICAL SKILLS ==================
const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      description: "HTML, CSS, JavaScript, React, AJAX, Typescript",
      icon: <LayoutTemplate className="w-12 h-12 text-blue-500" />,
      techIcons: [
        <FaHtml5 className="text-orange-500 w-10 h-10" key="html" />,
        <FaCss3Alt className="text-blue-600 w-10 h-10" key="css" />,
        <FaJs className="text-yellow-400 w-10 h-10" key="js" />,
        <FaReact className="text-cyan-500 w-10 h-10" key="react" />,
        <SiTypescript className="text-blue-700 w-10 h-10" key="ts" />,
      ],
    },
    {
      title: "Backend",
      description: "PHP (Laravel 11, Symfony), Node.js, Express.js, Python",
      icon: <Server className="w-12 h-12 text-purple-600" />,
      techIcons: [
        <FaPhp className="text-indigo-500 w-10 h-10" key="php" />,
        <SiLaravel className="text-red-500 w-10 h-10" key="laravel" />,
        <SiSymfony className="text-black w-10 h-10" key="symfony" />,
        <FaNodeJs className="text-green-600 w-10 h-10" key="node" />,
        <FaPython className="text-yellow-500 w-10 h-10" key="python" />,
        <SiExpress className="text-gray-700 w-10 h-10" key="express" />,
      ],
    },
    {
      title: "Databases",
      description: "MySQL, MongoDB",
      icon: <Database className="w-12 h-12 text-green-600" />,
      techIcons: [
        <SiMysql className="text-blue-700 w-10 h-10" key="mysql" />,
        <SiMongodb className="text-green-500 w-10 h-10" key="mongodb" />,
      ],
    },
    {
      title: "DevOps",
      description: "Docker",
      icon: <Wrench className="w-12 h-12 text-sky-600" />,
      techIcons: [<FaDocker className="text-sky-500 w-10 h-10" key="docker" />],
    },
    {
      title: "Security",
      description: "JWT, OAuth 2.0, Sanctum",
      icon: <ShieldCheck className="w-12 h-12 text-red-500" />,
      techIcons: [
        <FaShieldAlt className="text-red-500 w-10 h-10" key="jwt" />,
        <FaKey className="text-yellow-500 w-10 h-10" key="oauth" />,
      ],
    },
    {
      title: "Tools",
      description: "Git, GitHub, GitLab",
      icon: <GitBranch className="w-12 h-12 text-gray-800" />,
      techIcons: [
        <FaGitAlt className="text-orange-600 w-10 h-10" key="git" />,
        <FaGithub className="text-black w-10 h-10" key="github" />,
        <FaGitlab className="text-orange-400 w-10 h-10" key="gitlab" />,
      ],
    },
    {
      title: "Methodology",
      description: "Agile, Scrum",
      icon: <Boxes className="w-12 h-12 text-yellow-600" />,
    },
    {
      title: "Microservices",
      description: "",
      icon: <Hammer className="w-12 h-12 text-indigo-700" />,
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          Skills
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          My Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }} // appear once
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              rotateX: 20,
              rotateY: 20,
              scale: 1.15,
              boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
            }}
            className="bg-[#111] p-6 rounded-xl shadow-lg cursor-pointer"
            style={{ perspective: "1200px" }}
          >
            {/* ICON */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotateY: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-4"
            >
              {skill.icon}
            </motion.div>

            {/* TITLE */}
            <motion.h3
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="text-xl font-semibold mb-2"
            >
              {skill.title}
            </motion.h3>

            {/* DESCRIPTION */}
            <motion.p
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-gray-400"
            >
              {skill.description}
            </motion.p>

            {/* TECH ICONS */}
            <div className="flex gap-2 flex-wrap justify-center mt-4">
              {skill.techIcons &&
                skill.techIcons.map((icon, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], rotateZ: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { Skills, SoftSkillsSection };
