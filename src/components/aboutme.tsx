import MyFace from "./myface";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CycleText() {
  const words = ["Software Developer", "EECS Student", "Hahn Scholar"];
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
    <section id="about" className="relative min-h-[80vh] px-4 lg:px-8 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start max-w-3xl">
          <p className="font-extralight text-left">
            Hi there, I'm
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold">Gavin Onghai</h1>
          <div className="opacity-50">
            <span> <h1 className="hidden lg:inline-block text-lg sm:text-xl lg:text-4xl font-bold mr-4 opacity-50 cycle-text">•</h1></span>
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
          <div className="text-xsm lg:text-lg text-left dark:text-neutral-400 font-light mt-4 indent-10 leading-relaxed space-y-2">
            <p>
              I’m a sophomore at <strong className="dark:text-neutral-300 font-bold">Yale University</strong> pursuing a Bachelor's degree in <strong className="dark:text-neutral-300 font-bold">Electrical Engineering and Computer Science</strong> and a <strong className="dark:text-neutral-300 font-bold">Certificate in Data Science</strong>.
            </p>
            <p>
            I’m currently exploring <strong className="dark:text-neutral-300 font-bold">finance, software engineering, and hardware systems,</strong> with a focus on learning how data and computation drive innovation across these fields.
            </p>
            <p>
              As a <a href="https://yaledailynews.com/blog/2023/02/26/inside-the-hahn-scholars-programs-push-to-recruit-top-stem-students/" 
              className="!font-extrabold dark:text-white underline hover:text-black hover:bg-white transition-all">
              Hahn Scholar</a> in <a href="https://www.liu-research.com/" className="!font-extrabold dark:text-white underline hover:text-black hover:bg-white transition-all">Professor Mengxia Liu’s lab</a>, I’m developing a <strong className="dark:text-neutral-300 font-bold">lensless imaging system</strong> that
               uses computational imaging techniques 
              to capture and reconstruct data invisible to the human eye.
            </p>

            <p>
              Outside the lab, I’m a developer for the <a href="https://yalecomputersociety.org/" 
              className="!font-extrabold dark:text-white underline hover:text-black hover:bg-white transition-all">Yale Computer Society</a>, contributing to the full-stack development of <strong className="dark:text-neutral-300 font-bold">Yale Menus</strong>, a platform used daily by thousands of students to check campus dining menus in real time.
            </p>

            <p>
              Before Yale, I explored materials science and chemistry through the <a href="https://www.stonybrook.edu/commcms/garcia/summer_program/program_description" 
              className="!font-extrabold dark:text-white underline hover:text-black hover:bg-white transition-all">Garcia</a> and <a href="https://www.stonybrook.edu/simons/" 
              className="!font-extrabold dark:text-white underline hover:text-black hover:bg-white transition-all">Simons Summer Research Programs</a> at <strong className="dark:text-neutral-300 font-bold">Stony Brook University</strong>, 
              working on projects ranging from <strong className="dark:text-neutral-300 font-bold">graphene-based polymer blends</strong> to creating <strong className="dark:text-neutral-300 font-bold">sustainable water filters</strong> by recycling biowaste.
            </p>

            <p>
              When I’m not coding or in the lab, you’ll likely find me lifting at the gym, learning guitar, playing tennis or chess, reading, or 
              debating ideas with friends.
            </p>
          </div>
        </div>
      <MyFace/>
    </section>
  );
}
