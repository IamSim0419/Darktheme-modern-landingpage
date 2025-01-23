"use client";

import AcmeLogo from "@/assets/images/acme.png";
import QuantumLogo from "@/assets/images/quantum.png";
import EchoLogo from "@/assets/images/echo.png";
import CelestialLogo from "@/assets/images/celestial.png";
import PulseLogo from "@/assets/images/pulse.png";
import ApexLogo from "@/assets/images/apex.png";
import Image from "next/image";
import { motion } from "motion/react";

const images = [
  { src: AcmeLogo, alt: "Acme Logo" },
  { src: QuantumLogo, alt: "Quantum Logo" },
  { src: EchoLogo, alt: "Echo Logo" },
  { src: CelestialLogo, alt: "Celestial Logo" },
  { src: PulseLogo, alt: "Pulse Logo" },
  { src: ApexLogo, alt: "Apex Logo" },
];

export default function LogoTicker() {
  return (
    <section className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by leading innovative teams worldwide</h2>

        {/* Logo images */}
        <div className="flex overflow-hidden mt-9 blur-gradient-effect">
          <motion.div 
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex flex-none gap-16 pr-16">
            {[...images, ...images].map(({ src, alt }, idx) => (
            <Image 
              src={src} 
              alt={alt} 
              key={idx} 
              className="flex-none h-8 w-auto" // flex-none ensures the image maintains its size
            />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
