import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";

const HeroSection = () => {
return (
    <section 
    id="hero-section" className="container mx-auto h-screen flex"> 
    <div className="relative self-center">
        <img src="/images/img-basketball.png" 
        width={290} 
        height={290} 
        alt="image sporton hero"
        className="grayscale absolute left-20 top-0" />
        <div className=" relative ml-40 w-full">
          <div className="text-primary italic">Friday Sale, 50%
            </div>
             <h1 className="font-extrabold text-[60px] italic bg-gradient-to-b leading-tight from-black to[#979797D1] bg-clip-text text-transparent"> 
                WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
             </h1>
                <p className="w-1/3 mt-5 leading-tight text-[15px]">
                Engineered for endurance and designed for speed. 
                Experience gear that moves as fast as you do.
                Premium fabrics. Unmatched comfort. Limitless motion.
                 </p>
             <div className="flex gap-7">
                <button className="bg-[#FF5F3F] px-6 py-3 rounded-md mt-7 text-white font-medium hover:bg-[#FF5F3F] duration-300">
                    Explore More 
                    <FiFastForward className="inline-block ml-2"/>
                </button>
                 <button className="bg-ghost px-6 py-3 rounded-md mt-7 text-dark font-medium hover:bg-gray-700 duration-300">
                    Watch Video 
                    <img src="/images/icon-play-video.svg" 
                    className="inline-block ml-2"
                    width={29} 
                    height={29}/>
                </button>
            </div>
         </div>
         <img 
         src="/images/img-hero.png" 
         width={432} 
         height={487} 
         alt="image sporton hero"
         className="absolute right-90 top-45 -translate-y-1/2"/>
    </div>
    <img src="/images/img-ornament-hero.svg"
    width={290}
    height={290}
    alt="image sporton hero" 
    className="absolute right-40 top-20"/>
    </section>
)

}

export default HeroSection;