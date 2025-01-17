import AppScreen from "@/assets/images/app-screen.png";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-black text-white product-gradient py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tighter">User-Friendly Interface</h2>
        <div className="md:max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Experience the satisfaction of achievement with an app crafted to monitor your progress, inspire your efforts, and celebrate your victories, one task at a time.
          </p>
        </div>
        
        <Image 
          src={AppScreen}  
          alt="The product screenshot" 
          className="mt-14"  
        />
      </div>
    </section>
  )
}
