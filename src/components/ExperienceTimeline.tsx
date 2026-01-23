import React from "react";
import { Timeline } from "./ui/timeline";
import { TimelineContent } from "./TimelineContent";

interface Experience {
  title: string;
  org: string;
  date: string;
  current?: boolean;
  desc: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  const timelineData = experiences.map((exp) => ({
    title: exp.date,
    content: (
      <TimelineContent
        title={exp.title}
        org={exp.org}
        desc={exp.desc}
        achievements={exp.achievements}
      />
    ),
  }));

  return <Timeline data={timelineData} />;
};
