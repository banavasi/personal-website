import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectIconsProps {
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectIcons({ githubUrl, liveUrl }: ProjectIconsProps) {
  const [showGithubTooltip, setShowGithubTooltip] = useState(false);
  const [showLiveTooltip, setShowLiveTooltip] = useState(false);

  const hasGithub = githubUrl && githubUrl !== "#" && githubUrl !== "";
  const hasLiveUrl = liveUrl && liveUrl !== "#" && liveUrl !== "";

  return (
    <div className="flex gap-2">
      {/* GitHub Button */}
      {hasGithub ? (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 flex items-center justify-center border-4 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="View on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      ) : (
        <div className="relative">
          <div 
            className="h-10 w-10 flex items-center justify-center border-4 border-black dark:border-white bg-gray-100 dark:bg-zinc-900 opacity-50 cursor-not-allowed"
            onMouseEnter={() => setShowGithubTooltip(true)}
            onMouseLeave={() => setShowGithubTooltip(false)}
          >
            <Github className="h-5 w-5" />
          </div>
          {showGithubTooltip && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-neon-green border-4 border-neon-green font-mono font-bold text-xs px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,255,65,1)] whitespace-nowrap z-50 animate-in fade-in duration-200">
              <div className="text-center">🔒 PRIVATE PROJECT</div>
              <div className="text-center text-[10px] opacity-80">Source code not available</div>
            </div>
          )}
        </div>
      )}
      
      {/* Live Site Button */}
      {hasLiveUrl ? (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 w-10 flex items-center justify-center border-4 border-black dark:border-white bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="View live site"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      ) : (
        <div className="relative">
          <div 
            className="h-10 w-10 flex items-center justify-center border-4 border-black dark:border-white bg-gray-100 dark:bg-zinc-900 opacity-50 cursor-not-allowed"
            onMouseEnter={() => setShowLiveTooltip(true)}
            onMouseLeave={() => setShowLiveTooltip(false)}
          >
            <ExternalLink className="h-5 w-5" />
          </div>
          {showLiveTooltip && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-neon-green border-4 border-neon-green font-mono font-bold text-xs px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,255,65,1)] whitespace-nowrap z-50 animate-in fade-in duration-200">
              <div className="text-center">🔒 PRIVATE PROJECT</div>
              <div className="text-center text-[10px] opacity-80">Live site not available</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
