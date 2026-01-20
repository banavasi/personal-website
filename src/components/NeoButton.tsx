import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
}

export function NeoButton({ 
  children, 
  className, 
  variant = "primary",
  size = "default",
  ...props 
}: NeoButtonProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[4px_4px_0px_0px_var(--color-neon-green)]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[4px_4px_0px_0px_var(--color-electric-blue)]",
    outline: "bg-transparent border-4 border-black dark:border-white hover:bg-accent hover:text-accent-foreground hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    default: "h-12 px-6 py-2",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12"
  };

  return (
    <Button
      className={cn(
        "rounded-none font-bold uppercase tracking-wider transition-all duration-200",
        "border-2 border-transparent", // Base border
        variant === "outline" && "border-4", // Thicker border for outline
        variants[variant],
        sizes[size],
        "active:translate-y-1 active:translate-x-1 active:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
