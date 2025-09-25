"use client";

import React from "react";
import type { ElementType } from "react";

interface ResponsiveTextProps {
  text?: string;
  className?: string;
  as?: ElementType; // allows h1/h2/p etc.
  children?: React.ReactNode;
}
export default function ResponsiveText({
  text,
  className = "",
  as: Tag = "p",
  children,
}: ResponsiveTextProps) {
  const fluidStyle = {
    fontSize: "clamp(1rem, 2vw + 0.5rem, 2.2rem)", // fluid between 16px and 35.2px
  };

  // Tailwind example: 'text-base sm:text-lg md:text-xl xl:text-2xl'
  const Component = Tag as ElementType;

  return (
    <Component
      style={fluidStyle}
      className={`text-base sm:text-lg md:text-xl xl:text-2xl font-medium ${className}`}
    >
      {children ?? text}
    </Component>
  );
}

