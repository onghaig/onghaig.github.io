import MyFace from "./myface";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CycleText() {
  const words = ["Software Developer", "EECS Student", "Hahn Scholar"];
  const [index, setIndex] = useState(1);
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
          <h1 className="text-3xl lg:text-4xl font-bold">Gavin Onghai</h1>
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
          <div className="text-xsm lg:text-lg text-left font-light mt-4 indent-10 leading-relaxed space-y-2">
            <p>
              I’m a sophomore at Yale University studying Electrical Engineering and Computer Science with a Certificate in Data Science. 
              I’m fascinated by projects that blend engineering precision with real-world impact, whether that’s with code, hardware, or both.
            </p>

            <p>
              As a Hahn Scholar in Professor Mengxia Liu’s lab, I’m developing a <strong className="font-bold">lensless imaging system</strong> that uses computational imaging techniques 
              to capture and reconstruct data invisible to the human eye. The mix of optics, AI, and problem-solving keeps me constantly learning.
            </p>

            <p>
              Outside the lab, I’m a developer for the Yale Computer Society, contributing to the full-stack development of <strong className="font-bold">Yale Menus</strong>, a platform used daily by thousands of students to check campus dining menus in real time.
            </p>

            <p>
              Before Yale, I explored materials science and chemistry through the Garcia and Simons Summer Research Programs at Stony Brook University, 
              working on projects from <strong className="font-bold">graphene-based polymer blends</strong> to recycling biowaste into <strong className="font-bold">sustainable water filters</strong>.
            </p>

            <p>
              When I’m not coding or in the lab, you’ll likely find me lifting at the gym, playing tennis or chess, reading, or 
              debating ideas with friends, since great projects start with great conversations.
            </p>
          </div>
        </div>
      <MyFace/>
    </section>
  );
}
