"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
// import Hyperspeed from "../../reactbits/Backgrounds/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const Stars = () => {
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array;
  return (
    <Points positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Hyperspeed background */}
      <div className="absolute inset-0 z-0">
        {/* <Hyperspeed /> */}
      </div>

      {/* Animated Grid Overlay */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      {/* 3D Stars Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Badge className="rounded-full border-none flex items-center justify-center gap-2 bg-blue-600/20 dark:bg-blue-600/30 text-blue-600 dark:text-blue-400 backdrop-blur-md shadow-lg shadow-blue-600/40 dark:shadow-blue-500/40">
            <Zap className="fill-current" />
            Junior Fullstack Web Developer
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-gray-900 dark:text-white drop-shadow-lg"
        >
          Building{" "}
          <span
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-md font-mono shadow-lg shadow-blue-600/50 dark:shadow-blue-500/50"
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
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-[17px] md:text-lg text-gray-600 dark:text-gray-300 max-w-xl"
        >
          Hey there! I&apos;m{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Jawad Akabour</span>, a
          Junior Full Stack Developer
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
