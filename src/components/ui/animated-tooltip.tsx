"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
  className, // Added className prop
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string; // Type definition for className
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    // Added a div to wrap the map and apply the className prop
    <div className={`flex flex-row items-center justify-center ${className}`}>
      {items.map((item) => (
        <div
          className="group relative -mr-4" // Adjusted margin for closer packing if desired
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-3 py-1.5 text-xs shadow-xl" // Reduced padding and font size slightly
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-sm font-bold text-white"> {/* Adjusted font size */}
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={40} // Reduced image height
            width={40} // Reduced image width
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-10 w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105" // Reduced Tailwind classes for size
          />
        </div>
      ))}
    </div>
  );
};

// Example Usage (for demonstration, you can place this in your App.js or a separate file)
// This part is just for showing how to use the component.
const App = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://placehold.co/40x40/FF5733/FFFFFF?text=JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Product Manager",
      image:
        "https://placehold.co/40x40/33FF57/000000?text=JS",
    },
    {
      id: 3,
      name: "Robert Johnson",
      designation: "UI/UX Designer",
      image:
        "https://placehold.co/40x40/3357FF/FFFFFF?text=RJ",
    },
    {
      id: 4,
      name: "Emily White",
      designation: "Data Scientist",
      image:
        "https://placehold.co/40x40/FF33A1/FFFFFF?text=EW",
    },
    {
      id: 5,
      name: "Michael Brown",
      designation: "Marketing Specialist",
      image:
        "https://placehold.co/40x40/A133FF/FFFFFF?text=MB",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <AnimatedTooltip items={people} className="gap-x-2" /> {/* Example of using className */}
    </div>
  );
};

export default App;
