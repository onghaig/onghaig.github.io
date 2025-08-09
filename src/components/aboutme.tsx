import MyFace from "./myface";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CycleText() {
  const words = ["Software Developer", "Student", "Researcher", "Hahn Scholar"];
  const [index, setIndex] = useState(0);
  const total = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300); 
    return () => clearInterval(interval);
  }, [total]);

    return (
    <span className="inline-block"> {/* Ensure the span is inline-block for proper alignment */}
      <AnimatePresence mode="wait">
        <motion.h1 
          key={`words_${index}`} // Key is important to trigger animation on change
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.08 }} // Customize your animation transition
          className="inline-block font-bold text-3xl lg:text-4xl" // Align styles with your h1
        >
          {words[index]} 
        </motion.h1>
      </AnimatePresence>
    </span>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="relative px-4 lg:px-8 py-16 lg:py-32 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start max-w-3xl text-center lg:text-left">
          <p className="font-extralight">
            Hi there, I'm
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold">Gavin OngHai</h1>
          <div className="opacity-40">
          <CycleText/>
          </div>
        <div className="flex flex-wrap gap-2 text-sm font-extralight mt-1">
          <span>Port Jefferson, NY <span>-</span> New Haven, CT</span>
          <span>•</span>
          <a
            href="mailto:gavin.onghai@yale.edu"
            className="text-blue-600 hover:underline"
          >
            gavin.onghai@yale.edu
          </a>
          <span>•</span>
          <span>19</span>
        </div>
        <p className="text-lg lg:text-xl text-center lg:text-left font-light max-w-5xl mt-4 lg:indent-10 leading-relaxed">
          I am a sophomore and Hahn Scholar at Yale University studying Electrical Engineering and Computer Science. Much of my past
          work has been in material science and chemistry. Currently, I am focusing on software and hardware development, as well as
          learning about financial markets. I hope you enjoy looking through my
          website!
        </p>
        </div>
      <MyFace/>
    </section>
  );
}
