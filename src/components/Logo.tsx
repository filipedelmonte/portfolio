import type { JSX } from "astro/jsx-runtime";
import { useState } from "react";

import { Cube } from "./Cube";
import { pallete } from "../lib/pallete";
import { cn } from "../lib/cn";

const ANIMATION_MS = 500;

export function Logo(): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <style>{`

      @keyframes background-pan {
        from {
          background-position: 0% center;
        }
        
        to {
          background-position: -200% center;
        }
      }

      .magic {
        animation: background-pan 20s linear infinite;
        background: linear-gradient(
          to left,
          var(--color-zinc-800),
          ${pallete.yellow},
          ${pallete.purple},
          ${pallete.green},
          ${pallete.orange},
          ${pallete.blue},
          var(--color-zinc-800)
        );
        background-size: 500%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      }
      `}</style>

      <a
        href="/"
        className={cn(
          {
            "transition-transform scale-105": hovered,
            "scale-110": clicked,
          },
          "-m-1.5 p-1.5 flex items-center gap-x-2 lg:gap-x-6"
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
      >
        <Cube size={48} />
        <h1
          className={cn(
            {
              magic: hovered,
            },
            "text-md lg:text-3xl font-semibold text-zinc-800 dark:text-zinc-100"
          )}
        >
          lobodelmonte.dev
        </h1>
      </a>
    </>
  );
}
