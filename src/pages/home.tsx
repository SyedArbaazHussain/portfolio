// src/pages/home.tsx
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/Lamp";
import { FlipWords } from "@/app/components/FlipWords";
import { SparklesCore } from "@/app/components/Sparkles";
import { TypeWriterEffectSmooth } from "@/app/components/TypeWriterEffect";

const Home = () => {
  const TechWords = [
    "Full Stack Developer",
    "Design Learnee",
    "Tech Enthusiast",
    "Machine Learning Learnee",
  ];
  const name = [
    {
      text: "Syed",
      className:
        "text-red-500 dark:text-red-500 md:text-6xl text-2xl lg:text-7xl",
    },
    {
      text: "Arbaaz",
      className:
        "text-green-500 dark:text-green-500 md:text-6xl text-2xl lg:text-7xl",
    },
    {
      text: "Hussain",
      className:
        "text-blue-500 dark:text-blue-500 md:text-6xl text-2xl lg:text-7xl",
    },
  ];
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.2, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="h-[20rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            <div className="h-[40rem] w-full bg-transparant flex flex-col items-center justify-center overflow-hidden rounded-md">
              <div className="md:text-5xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
                Hello &nbsp;It&apos;s <TypeWriterEffectSmooth words={name} />{" "}
              </div>
              <div className="inline-flex md:text-5xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
                {" "}
                I&apos;m &nbsp; a &nbsp; <FlipWords words={TechWords} />
              </div>
              <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={120}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-transparant [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
};

export default Home;
