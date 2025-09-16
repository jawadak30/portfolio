import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description?: string;
  technologies?: string[];
  type?: "work" | "education";
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  type = "work",
}: ExperienceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" as const } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative pl-10 not-last:pb-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className={`absolute h-4 w-4 -left-[7px] top-0 rounded-full border-2 ${type === "work" ? "border-primary bg-background" : "border-blue-500 bg-blue-100"}`} />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-9 h-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full-stack Developer (Pre-employment Internship)",
      company: "Flash Web· Hybrid – Rabat, Morocco",
      period: "Aug 2025 – September 2025",
      description:
        "Developed FlashImmo4You.com – a real estate platform with multi-role management, secure authentication, and project management.",
      technologies: ["Symfony", "SQL", "Docker", "Twig"],
      type: "work",
    },
    {
      title: "Full-stack Developer (Internship)",
      company: "Librairie Papeterie Nationale – Hachette Livre International",
      period: "Jul 2025 – Aug 2025",
      description:
        "Worked on internal system enhancements using Symfony, SQL, Docker, and Twig.",
      technologies: ["Symfony", "SQL", "Docker", "Twig"],
      type: "work",
    },
    {
      title: "Trainee",
      company: "Sagement Vôtre Cabinet",
      period: "2025",
      description:
        "Developed a system for managing appointments, medical records, billing, training sessions, and PDF generation for the Pregnancy Monitoring Cabinet System.",
      technologies: ["Laravel 11", "SQL", "React"],
      type: "work",
    },
    {
      title: "Specialized Technician in Software Development",
      company: "Specialized Institute of Applied Technology - Mohammédia (ISTAM)",
      period: "2023 - 2025",
      description: "Education in Software Development.",
      technologies: [],
      type: "education",
    },
    {
      title: "High School Diploma in Physics and Chemistry",
      company: "IBN HAZM High School",
      period: "2022 - 2023",
      description: "High school education focusing on Physics and Chemistry.",
      technologies: [],
      type: "education",
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience & Education
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A chronological overview of my professional and academic path
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              {...experience}
              type={experience.type as "work" | "education"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
