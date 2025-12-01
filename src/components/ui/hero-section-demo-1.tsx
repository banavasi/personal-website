"use client";

import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function HeroSectionOne() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <BackgroundRippleEffect />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h1 className="relative z-10 text-4xl font-bold text-white md:text-6xl lg:text-8xl">
            {"Shashank Shandilya"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className="relative z-10 mx-auto max-w-2xl py-6 text-center text-xl font-normal text-neutral-300"
          >
            Senior Technical Lead at OneOrigin • 8+ years building AI-powered automation, cloud-native platforms, and scalable systems that drive business impact
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="/projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
              <span className="relative z-10 text-black">View My Work</span>
            </a>
            <a href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-transparent px-8 py-3.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/5">
              <span className="relative z-10 text-white">Let's Connect</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
