import React from 'react';

interface TimelineContentProps {
  title: string;
  org: string;
  desc: string;
  achievements: string[];
}

export const TimelineContent: React.FC<TimelineContentProps> = ({ title, org, desc, achievements }) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <div className="text-lg text-indigo-400 mb-3">{org}</div>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
      
      <div className="space-y-3 mt-6">
        {achievements.map((achievement, idx) => (
          <div key={idx} className="flex gap-3 items-start">
            <span className="text-indigo-400 mt-1.5 flex-shrink-0">✓</span>
            <p className="text-sm text-gray-500 leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
