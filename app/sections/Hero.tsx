import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="gradient-hero relative py-[74px] md:py-24 bg-black text-white overflow-clip">
      {/* Oval shape bellow button and center */}
      <div className="absolute r-gradient-effect h-[375px] w-[750px] md:h-[768px] md:w-[1536px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-96px)] md:top-[calc(100%-120px)] lg:w-[2400px] lg:h-[1200px]"></div>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="clip-gradient-text">Version 19.1.1 is here</span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <div className="relative inline-flex">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter  max-w-xs md:max-w-xl mx-auto">
              One Task at a Time
            </h1>
            {/* Arrow and Message Icon effect */}
            <Image
              src={cursorImage}
              alt="Cursor image"
              height={200}
              width={200}
              className="absolute right-[540px] top-[108px] hidden md:inline"
            />
            <Image
              src={messageImage}
              alt="Message image"
              height={200}
              width={200}
              className="absolute top-[55px] left-[498px] hidden md:inline"
            />
        </div>
        </div>
        

        <p className="text-center text-xl mt-8 max-w-md mx-auto">
          Experience the satisfaction of achievement with an app crafted to
          monitor progress, inspire your endeavors, and applaud your victories.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
}
