import MyFace from "./myface";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CycleText() {
  const words = ["Software Developer", "EECS Student", "Researcher", "Hahn Scholar"];
  const [index, setIndex] = useState(0);
  const total = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300); 
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="inline-block pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.h1 
          key={`words_${index}`} 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.2 }} 
          className="inline-block font-bold text-lg sm:text-xl lg:text-4xl cycle-text" 
        >
          {words[index]} 
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="relative min-h-screen px-4 lg:px-8 py-16 lg:py-32 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start max-w-3xl">
          <p className="font-extralight text-left">
            Hi there, I'm
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold">Gavin OngHai</h1>
          <div className="opacity-40">
            <span> <h1 className="hidden lg:inline-block text-lg sm:text-xl lg:text-4xl font-bold mr-4 opacity-100 cycle-text">•</h1></span>
          <CycleText/>
          </div>
        <div className="flex flex-wrap gap-2 text-sm font-extralight mt-1">
          <span>Port Jefferson, NY <span>-</span> New Haven, CT</span>
          <span>•</span>
          <a
            href="mailto:gavin.onghai@yale.edu"
            className="hover:underline hover:text-black hover:bg-white transition-all"
          >
            gavin.onghai@yale.edu
          </a>
          <span>•</span>
          <span>19</span>
        </div>
        <p className="text-md lg:text-xl text-justify font-light mt-4 indent-10 leading-relaxed">
          I am a sophomore at Yale University majoring in Electrical Engineering and Computer Science with a certificate in Data Science.
          Much of my past work has been in material science and chemistry. Currently, I am focusing on software and hardware development, as well as
          learning about financial markets. I hope you enjoy looking through my
          website!
        </p>
        </div>
      <MyFace/>
    </section>
  );
}
