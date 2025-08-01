import {
  Code,
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


const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      description: "HTML, CSS, JavaScript, React, AJAX, Typescript",
      icon: <LayoutTemplate className="size-4 md:size-6" />,
    },
    {
      title: "Backend",
      description: "PHP (Laravel 11), Node.js, Express.js, Python",
      icon: <Server className="size-4 md:size-6" />,
    },
    {
      title: "Databases",
      description: "MySQL, MongoDB",
      icon: <Database className="size-4 md:size-6" />,
    },
    {
      title: "DevOps",
      description: "Docker",
      icon: <Wrench className="size-4 md:size-6" />,
    },
    {
      title: "Security",
      description: "JWT, OAuth 2.0, Sanctum",
      icon: <ShieldCheck className="size-4 md:size-6" />,
    },
    {
      title: "Tools",
      description: "Git, GitHub, GitLab",
      icon: <GitBranch className="size-4 md:size-6" />,
    },
    {
      title: "Methodology",
      description: "Agile, Scrum",
      icon: <Boxes className="size-4 md:size-6" />,
    },
    {
      title: "Microservices",
      description: " ",
      icon: <Hammer className="size-4 md:size-6" />,
    },
  ];

  return (
    <Feature17
      heading="My Technical Skills"
      subheading="Skills"
      features={skills}
      headingClassName="shiny-text"
    />
  );
};

export { Skills };
