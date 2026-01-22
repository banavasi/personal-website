import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectIconsProps {
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectIcons({ githubUrl, liveUrl }: ProjectIconsProps) {
  const [showGithubTooltip, setShowGithubTooltip] = useState(false);
  const [showLiveTooltip, setShowLiveTooltip] = useState(false);

  const hasGithub = githubUrl && githubUrl !== '#' && githubUrl !== '';
  const hasLiveUrl = liveUrl && liveUrl !== '#' && liveUrl !== '';

  return (
    <div className="flex gap-2">
      {/* GitHub Button */}
      {hasGithub ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          aria-label="View on GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      ) : (
        <div className="relative">
          <div
            className="flex h-10 w-10 cursor-not-allowed items-center justify-center border-4 border-black bg-gray-100 opacity-50 dark:border-white dark:bg-zinc-900"
            onMouseEnter={() => setShowGithubTooltip(true)}
            onMouseLeave={() => setShowGithubTooltip(false)}
          >
            <Github className="h-5 w-5" />
          </div>
          {showGithubTooltip && (
            <div className="text-neon-green border-neon-green animate-in fade-in absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 border-4 bg-black px-4 py-2 font-mono text-xs font-bold whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,255,65,1)] duration-200">
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
          className="flex h-10 w-10 items-center justify-center border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-black dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
          aria-label="View live site"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      ) : (
        <div className="relative">
          <div
            className="flex h-10 w-10 cursor-not-allowed items-center justify-center border-4 border-black bg-gray-100 opacity-50 dark:border-white dark:bg-zinc-900"
            onMouseEnter={() => setShowLiveTooltip(true)}
            onMouseLeave={() => setShowLiveTooltip(false)}
          >
            <ExternalLink className="h-5 w-5" />
          </div>
          {showLiveTooltip && (
            <div className="text-neon-green border-neon-green animate-in fade-in absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 border-4 bg-black px-4 py-2 font-mono text-xs font-bold whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,255,65,1)] duration-200">
              <div className="text-center">🔒 PRIVATE PROJECT</div>
              <div className="text-center text-[10px] opacity-80">Live site not available</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
