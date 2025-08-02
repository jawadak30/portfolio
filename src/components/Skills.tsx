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


import { Feature17 } from "@/components/ui/feature17";

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
  FaKey, // for OAuth
  FaShieldAlt, // for JWT/Security if needed
} from "react-icons/fa";

import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiExpress,
} from "react-icons/si";

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
      description: "PHP (Laravel 11), Node.js, Express.js, Python",
      icon: <Server className="w-12 h-12 text-purple-600" />,
      techIcons: [
        <FaPhp className="text-indigo-500 w-10 h-10" key="php" />,
        <SiLaravel className="text-red-500 w-10 h-10" key="laravel" />,
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
    <Feature17
      heading="My Technical Skills"
      subheading="Skills"
      features={skills}
    />
  );
};

export { Skills };
