import type { JSX } from "astro/jsx-runtime";

import { pallete } from "../lib/pallete";

type CubeProps = {
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
};

export function Cube({
  size = 100,
  strokeColor = "black",
  strokeWidth = 5,
  className,
}: CubeProps): JSX.Element {
  return (
    <>
      <style>{`
      @keyframes fillCycle {
        0%   { fill: ${pallete.yellow}; }
        20%  { fill: ${pallete.purple}; }
        40%  { fill: ${pallete.green}; }
        60%  { fill: ${pallete.orange}; }
        80%  { fill: ${pallete.blue}; }
        100% { fill: ${pallete.yellow}; }
      }

      .animated-background {
        animation: fillCycle 10s infinite ease-in-out;
      }
      .delay-1 { animation-delay: 0s; }
      .delay-2 { animation-delay: -2s; }
      .delay-3 { animation-delay: -4s; }
      `}</style>
      <svg
        width={size}
        className={className}
        height={(size * 115) / 100} // Adjust height to maintain aspect ratio
        viewBox="0 0 100 115"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top face */}
        <polygon
          className="animated-background delay-1"
          points="50,5 95,32.5 50,60 5,32.5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        {/* Left face */}
        <polygon
          className="animated-background delay-2"
          points="5,32.5 50,60 50,110 5,82.5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        {/* Right face */}
        <polygon
          className="animated-background delay-3"
          points="95,32.5 50,60 50,110 95,82.5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
