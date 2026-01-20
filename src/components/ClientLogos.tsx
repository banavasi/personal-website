import React from "react";

interface Client {
  name: string;
  logo: string;
  url?: string;
  invertOnLight?: boolean; // Whether to invert logo colors in light mode
}

const clients: Client[] = [
  {
    name: "Arizona State University",
    logo: "/images/clients/asu.png",
    url: "https://www.asu.edu",
    invertOnLight: false, // ASU logo has color, don't invert
  },
  {
    name: "Starbucks",
    logo: "/images/clients/starbucks.svg",
    url: "https://www.starbucks.com",
    invertOnLight: false, // Starbucks has green/black, don't invert
  },
  {
    name: "Uber",
    logo: "/images/clients/uber.svg",
    url: "https://www.uber.com",
    invertOnLight: true, // Uber is black, needs white on dark bg
  },
  {
    name: "OneOrigin",
    logo: "/images/clients/oneorigin.svg",
    url: "https://www.oneorigin.us",
    invertOnLight: true, // OneOrigin is white, needs black on light bg
  },
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-20 bg-black dark:bg-white border-t-4 border-b-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase text-white dark:text-black">
            TRUSTED BY
          </h2>
          <div className="hidden md:block w-32 h-4 bg-neon-green"></div>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client) => {
            // Determine inversion class based on client settings
            const invertClass = client.invertOnLight 
              ? "filter invert dark:invert-0" 
              : "";
            
            return (
              <div
                key={client.name}
                className="group relative flex items-center justify-center"
              >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-32 md:h-40 border-4 border-white dark:border-black bg-white dark:bg-black p-6 transition-all duration-200 hover:shadow-[8px_8px_0px_0px_rgba(0,255,65,1)] hover:-translate-x-1 hover:-translate-y-1"
                  aria-label={`Visit ${client.name}`}
                >
                  {/* Logo Container */}
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`max-w-full max-h-full object-contain transition-all duration-200 group-hover:scale-110 ${invertClass}`}
                      loading="lazy"
                    />
                  </div>
                </a>

                {/* Tooltip on Hover */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-white dark:bg-black text-black dark:text-white px-3 py-1 text-xs font-mono border-2 border-neon-green whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,255,65,1)]">
                    {client.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="font-mono text-sm md:text-base text-white dark:text-black">
            Building <span className="font-bold text-neon-green">enterprise-scale</span> solutions for{" "}
            <span className="font-bold text-electric-blue">education</span>,{" "}
            <span className="font-bold text-alert-red">technology</span>, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};
