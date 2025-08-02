import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import FullScreenCarouselModal from "@/components/ui/modal";
import { easeInOut } from "framer-motion";

import { GithubLogo } from "./icons";
import Carousel from "./../../reactbits/Components/Carousel/Carousel";

import { motion } from "framer-motion";

import HomePageImg from "../assets/sagementvotre/home page.png";
import ReservationImg from "../assets/sagementvotre/reservation.png";
import LoginImg from "../assets/sagementvotre/login.png";
import ReservationDashboardImg from "../assets/sagementvotre/reservation dashboard.png";
import SettingsImg from "../assets/sagementvotre/settings.png";
import Settings2Img from "../assets/sagementvotre/settings2.png";

import Home1 from '../assets/hospitallia/home1 hospitallia.png';
import Home2 from '../assets/hospitallia/home2  hospitallia.png';
import Home3 from '../assets/hospitallia/home3  hospitallia.png';
import loginhospitallia from '../assets/hospitallia/login hospitallia.png';
import registerhospitallia from '../assets/hospitallia/register hostpitallia.png';
import Doctordahs from '../assets/hospitallia/dashboard hosptalia.png';
import Doctordahslang from '../assets/hospitallia/dashboard languages.png';
import invoices from '../assets/hospitallia/invoices.png';
import doctorprofile from '../assets/hospitallia/doctor profile.png';
import authpatient from '../assets/hospitallia/patient side.png';
import reservation from '../assets/hospitallia/doctor info and reservation.png';
import medical_records from '../assets/hospitallia/medical records.png';
import appoinetements from '../assets/hospitallia/appoinetements.png';

import microservices from '../assets/microservices/microservices.png';

import home1cocollab from '../assets/cocollab/home page cocollab.png';
import home2cocollab from '../assets/cocollab/home2 page cocollab.png';
import home3cocollab from '../assets/cocollab/home3 page cocollab.png';
import home4cocollab from '../assets/cocollab/home4 page cocollab.png';
import brands from '../assets/cocollab/all brands.png';
import logincocollab from '../assets/cocollab/login cocollab.png';
import registercocollab from '../assets/cocollab/register cocollab.png';

import home1ista from '../assets/ista/ista home1.png';
import home2ista from '../assets/ista/ista home2.png';
import home3ista from '../assets/ista/ista home3.png';
import home4ista from '../assets/ista/ista home 4.png';
import home5ista from '../assets/ista/ista home 5.png';
import home6ista from '../assets/ista/ista home 11.png';
import modal_logins from '../assets/ista/ista modal logins.png';
import modal_register from '../assets/ista/ista modal register.png';
import login_ista from '../assets/ista/login ista.png';
import register_ista from '../assets/ista/register ista.png';
import login_ista_admin from '../assets/ista/login admin.png';
import auth_user from '../assets/ista/auth user.png';
import auth_user_dark from '../assets/ista/auth user dark.png';
import comments from '../assets/ista/comments.png';
import post_details from '../assets/ista/post details.png';
import modules from '../assets/ista/modules.png';
import modules_details from '../assets/ista/modules details.png';
import sectors from '../assets/ista/sectors.png';
import teachers from '../assets/ista/teachers.png';
import teachers2 from '../assets/ista/teachers 2.png';
import teachers3 from '../assets/ista/teachers 3.png';
import options from '../assets/ista/options.png';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  onCarouselClick?: (images: string[]) => void;
}

// Animation variant for each card
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2,
      ease: easeInOut, // fixed easing here
    },
  },
};

const ProjectCard = ({
  title,
  description,
  images,
  technologies,
  liveUrl,
  githubUrl,
  onCarouselClick,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50 shadow-lg"
    >
      <div className="relative overflow-hidden bg-accent cursor-pointer">
        <Carousel
          items={images.map((img, idx) => ({
            id: idx,
            icon: (
              <img
                src={img}
                alt={`${title} ${idx + 1}`}
                className="object-cover w-full h-full rounded-md"
                onClick={() => onCarouselClick?.(images)}
              />
            ),
          }))}
        />
      </div>

      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

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
    </motion.div>
  );
};

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const handleCarouselClick = (images: string[]) => {
    setSelectedImages(images);
  };

  const closeModal = () => setSelectedImages(null);

  const projects = [
    {
      title: "Sagement Vôtre - Pregnancy Monitoring Cabinet System",
      description:
        "System for managing appointments, medical records, billing, training sessions, and PDF generation. Supports multiple roles: doctor, secretary, patient, and super admin.",
      images: [
        HomePageImg,
        ReservationImg,
        LoginImg,
        ReservationDashboardImg,
        SettingsImg,
        Settings2Img,
      ],
      technologies: ["Laravel 11", "SQL", "React" ,"typescript","tailwindcss"],
    },
    {
      title:
        "Cocollab.ma - The first collaboration platform in Morocco between Brands and Influencers",
      description:
        "The first collaboration platform in Morocco between Brands and Influencers with role-based authentication (influencer, brand, admin).",
      images: [
        home1cocollab,
        home2cocollab,
        home3cocollab,
        home4cocollab,
        brands,
        logincocollab,
        registercocollab,
      ],
      technologies: ["Laravel 11", "Blade", "SQL","Css"],
      liveUrl: "https://www.cocollab.ma/",
    },
    {
      title: "Hospitallia - Hospital Management System",
      description: " Multi-role and multi-language system: Small Hospital Management System.",
      images: [
        Home1,
        Home2,
        Home3,
        loginhospitallia,
        registerhospitallia,
        Doctordahs,
        Doctordahslang,
        invoices,
        doctorprofile,
        authpatient,
        reservation,
        medical_records,
        appoinetements,
      ],
      technologies: ["Laravel 11", "Blade", "SQL","Css"],
      githubUrl: "https://github.com/jawadak30/hospital_management.git",
    },
    {
      title: "Microservice Architecture",
      description:
        "Microservice architecture with API Gateway, Auth-Service, and Notification-Service, including Google OAuth authentication.",
      images: [microservices],
      technologies: ["React", "Laravel", "JWT", "Docker", "SQL"],
      githubUrl: "https://github.com/jawadak30/microservices.git",
    },
    {
      title: "ISTAM Platform - For OFPPT (ISTA Mohammédia)",
      description:
        "Multi-role and multi-language system: Teacher, Intern, Candidate, Admin for managing appointments, medical records, secretaries, billing, training sessions, and PDF generation.",
      images: [
        home1ista,
        home2ista,
        home3ista,
        home4ista,
        home5ista,
        home6ista,
        modal_logins,
        modal_register,
        login_ista,
        register_ista,
        login_ista_admin,
        auth_user,
        auth_user_dark,
        comments,
        post_details,
        modules,
        modules_details,
        sectors,
        teachers,
        teachers2,
        teachers3,
        options,
      ],
      technologies: ["Laravel", "Docker", "Blade", "Ajax", "SQL","Css"],
      githubUrl: "https://github.com/jawadak30/ISTAM-Platform",
    },
  ];

  return (
    <section id="projects" className="relative" style={{ padding: "5px" }}>
      <div className="mx-auto">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onCarouselClick={() => handleCarouselClick(project.images)}
            />
          ))}
        </motion.div>
      </div>

      {selectedImages && (
        <FullScreenCarouselModal images={selectedImages} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;