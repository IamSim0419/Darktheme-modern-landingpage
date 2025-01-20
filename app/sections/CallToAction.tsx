import HelixImg from "@/assets/images/helix2.png"
import EmojiStarImg from "@/assets/images/emojistar.png"
import Image from 'next/image'

export default function CallToAction() {
  return (
    <section className="bg-black text-white text-center py-[72px] md:py-24">
        <div className="container max-w-xl relative">
          {/* Image */}
        <Image src={HelixImg} 
          alt="Helix Image" 
          className="absolute top-6 left-[calc(100%+36px)]" 
        />
        <Image 
          src={EmojiStarImg} 
          alt="Emoji Star Image" 
          className="absolute -top-[120px] right-[calc(100%+24px)]" 
        />
          
          <h2 className="font-bold text-5xl tracking-tighter md:text-6xl">Get instant acces</h2>
          <p className="text-xl text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>

          <form 
            className="mt-10 flex flex-col gap-2.5 max-w-md mx-auto md:flex-row" 
            action="">
            <input 
              type="email"
              placeholder="your@email.com"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] md:flex-1"
            />
            <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
          </form>
        </div>
    </section>
  )
}
