import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import type { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import resume from "../assets/resume english.pdf";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="  mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 ">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
<div className="flex-1 md:text-left items-center justify-between display-flex flrx-direction-col">
  <Badge variant="secondary" className="mb-4">
    About Me
  </Badge>
  <ProfileImage className="mt-3 mb-8 block md:hidden" />
  <h2 className="text-4xl font-bold mb-4 tracking-tight">
    Full Stack Developer passionate about building real-world solutions
  </h2>
  <p className="text-muted-foreground mb-6 text-justify">
    I’m a Full Stack Developer trained in modern software development, with hands-on experience in both frontend and backend technologies. My expertise spans React, Laravel 11, Docker, JWT, OAuth, and microservice architecture. I enjoy contributing to impactful projects, solving real-world problems, and collaborating within agile teams. Currently, I’m focused on building scalable and secure platforms that serve users effectively.
  </p>
  <div className="flex flex-wrap gap-4 justify-start">
    <Button className="rounded-full" asChild>
      <a href="https://github.com/jawadak30" target="_blank" rel="noopener noreferrer">
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
</div>

        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <img src="/placeholder.svg" alt="" className="object-cover w-full h-full" />
    </div>
  </div>
);
export default About;
