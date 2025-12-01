"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function SkillsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const skills = [
    "Python",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Machine Learning",
    "AI Automation",
    "Cloud Architecture",
    "Microservices",
    "CI/CD",
    "GraphQL",
    "REST APIs",
    "System Design",
    "DevOps",
    "Terraform",
  ];

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      const width = marquee.scrollWidth / 2;
      
      gsap.to(marquee, {
        x: -width,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="relative w-full bg-black py-12 overflow-hidden flex items-center">
      <div className="relative w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-12 whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 px-8 py-3 text-4xl font-semibold text-neutral-200"
            >
              <span className="text-neutral-500 text-4xl">✦</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
