"use client";

import EcoSystem from "@/assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

type FeatureProps = {
  features: {
    title: string;
    description: string;
  }[];
};

export default function Feature({ features }: FeatureProps) {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const borderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!borderRef.current) return; // removes error
            const borderRect = borderRef.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        }

        window.addEventListener("mousemove", updateMousePosition)
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        }
    }, []);

  return (
    <div className="mt-16 flex flex-col md:flex-row gap-4">
      {features.map(({ title, description }) => (
        <div
          key={title}
          className="relative selection:border border-white/30 px-5 py-10 text-center rounded-xl md:flex-1"
          
        >
          {/* Border effect */}
          <motion.div
            ref={borderRef}
            style={{ 
                WebkitMaskImage: maskImage,
                maskImage,
            }}
            className="absolute inset-0 border-2 border-purple-400 rounded-xl"
          ></motion.div>

          <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
            <EcoSystem />
          </div>
          <h3 className="mt-6 font-bold">{title}</h3>
          <p className="mt-2 text-white/70">{description}</p>
        </div>
      ))}
    </div>
  );
}
