import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.jpg"
import { motion } from "framer-motion"


const container =(delay) => ({
  hidden : {x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg-mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Sujith S Devadiga
            </motion.h1>
            <motion.span 
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p
             variants={container(2)}
             initial="hidden"
             animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
             <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}    
             transition={{ease:"linear",delay:2}}    
             className="mb-5"
             >
             <a className="mt-5 flex border-[3px] border-black rounded-[50px] bg-[#00EEFF] text-black p-4 hover:text-[#00EEFF] hover:border-[#00EEFF] hover:bg-black" href="https://drive.google.com/file/d/1HYLiLryanyVNA-anzyeo2Kbst-GtKXxN/view?usp=drive_link">Download Resume</a>
              </motion.div> 
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
            width={400}
            height={400}
            initial={{x:100, opacity:0}}
            animate= {{x:0, opacity:1}}
            transition={{duration:1,delay:1.5}} 
            className="hidden lg:block rounded-xl grayscale hover:grayscale-0"
            src={profilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
