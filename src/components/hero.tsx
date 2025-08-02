import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import Hyperspeed from "../../reactbits/Backgrounds/Hyperspeed/Hyperspeed";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <Badge className="rounded-full border-none flex items-center justify-center gap-2">
          <Zap className="fill-current" />
          Junior Fullstack Web Developer
        </Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Building{" "}
          <span
            className="inline-block text-white bg-blue-600 px-3 py-1 rounded-md font-mono"
            style={{ minWidth: "11ch" }}
          >
            <Typewriter
              words={["Scalable", "Engaging", "Modern", "Robust", "Innovative"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>{" "}
          Web Experiences
        </h1>

        <p className="mt-6 text-[17px] md:text-lg">
          Hey there! I&apos;m Jawad Akabour, a Junior Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
