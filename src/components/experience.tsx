import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { GraduationCap } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description?: string; // Made optional as not all items will have a description
  technologies?: string[]; // Made optional as not all items will have technologies
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            {/* Using Building2 for both experience and education, as per the previous structure */}
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    // {
    //   title: "Member",
    //   company: "CECAF Association: Creative Entrepreneurship Club for Action and Training",
    //   period: "Present", // The resume doesn't specify a start date, only that he is a member.
    //   description: "Member of the Creative Entrepreneurship Club for Action and Training.",
    //   technologies: [], // No specific technologies mentioned for this experience
    // },
    {
      title: "Trainee",
      company: "Sagement Vôtre Cabinet",
      period: "2025", // The resume only lists "Sagement Vôtre - Pregnancy Monitoring Clinic System" under projects, not directly as a formal experience with dates.
      description: "Developed a system for managing appointments, medical records, billing, training sessions, and PDF generation for the Pregnancy Monitoring Cabinet System.",
      technologies: ["Laravel 11", "SQL", "React"], // Based on the Sagement Vôtre project technologies
    },
    {
      title: "Specialized Technician in Software Development",
      company: "Specialized Institute of Applied Technology - Mohammédia (ISTAM)",
      period: "2023 - 2025",
      description: "Education in Software Development.",
      technologies: [],
    },
    {
      title: "High School Diploma in Physics and Chemistry",
      company: "IBN HAZM High School",
      period: "2022 - 2023",
      description: "High school education focusing on Physics and Chemistry.",
      technologies: [],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="  mx-auto">
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
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;