import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Sagement Vôtre - Pregnancy Monitoring Clinic System",
      description:
        "System for managing appointments, medical records, billing, training sessions, and PDF generation. Supports multiple roles: doctor, secretary, patient, and super admin.",
      image: "/placeholder.svg", // Replace with an actual image path
      technologies: ["Laravel 11", "SQL", "React"],
      githubUrl: "https://github.com/jawadak30/SagementVoutre", // Example URL, replace if available
    },
    {
      title: "Cocollab.ma - The first collaboration platform in Morocco between Brands and Influencers",
      description:
        "The first collaboration platform in Morocco between Brands and Influencers with role-based authentication (influencer, brand, admin).",
      image: "/placeholder.svg", // Replace with an actual image path
      technologies: ["Laravel 11", "Blade", "SQL"],
      liveUrl: "https://www.cocollab.ma/", // Live URL for Cocollab.ma
      // githubUrl: "https://github.com/jawadak30/Cocollab.ma", // Example URL, replace if available
    },
    {
      title: "Hospitallia - Hospital Management System",
      description: "Small Hospital Management System.",
      image: "/placeholder.svg", // Replace with an actual image path
      technologies: ["Laravel 11", "Blade", "SQL"],
      githubUrl: "https://github.com/jawadak30/hospital_management.git", // Example URL, replace if available
    },
    {
      title: "Microservice Architecture",
      description:
        "Microservice architecture with API Gateway, Auth-Service, and Notification-Service, including Google OAuth authentication.",
      image: "/placeholder.svg", // Replace with an actual image path
      technologies: ["React", "Laravel", "JWT", "Docker", "SQL"],
      githubUrl: "https://github.com/jawadak30/microservices.git", // Example URL, replace if available
    },
    {
      title: "ISTAM Platform - For OFPPT (ISTA Mohammédia)",
      description:
        "Multi-role system: Teacher, Intern, Candidate, Admin for managing appointments, medical records, secretaries, billing, training sessions, and PDF generation.",
      image: "/placeholder.svg", // Replace with an actual image path
      technologies: ["Laravel", "Docker", "Blade", "Ajax", "SQL"],
      githubUrl: "https://gi#rootthub.com/jawadak30/ISTAM-Platform", // Example URL, replace if available
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;