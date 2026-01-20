import { cn } from "@/lib/utils";
import React from "react";

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  accentColor?: "green" | "blue" | "red" | "none";
}

export function NeoCard({ 
  children, 
  className, 
  hoverEffect = true,
  accentColor = "none",
  ...props 
}: NeoCardProps) {
  const accentClasses = {
    green: "hover:shadow-[8px_8px_0px_0px_var(--color-neon-green)]",
    blue: "hover:shadow-[8px_8px_0px_0px_var(--color-electric-blue)]",
    red: "hover:shadow-[8px_8px_0px_0px_var(--color-alert-red)]",
    none: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
  };

  return (
    <div 
      className={cn(
        "bg-card text-card-foreground border-4 border-black dark:border-white p-6 transition-all duration-200",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
        hoverEffect && "hover:-translate-y-1 hover:-translate-x-1",
        hoverEffect && accentClasses[accentColor],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
