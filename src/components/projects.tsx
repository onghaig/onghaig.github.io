import { useState } from 'react';
import { projects } from '../projectData/projects';
import { motion } from 'framer-motion';

// How many projects show before the visitor has to ask for more.
const VISIBLE_COUNT = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  const hiddenCount = projects.length - VISIBLE_COUNT;

  return (
    <section id="projects" className="px-8 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div id="projects-list" className="flex flex-col gap-12">
        {visible.map((project, idx) => {
          // The first three fade in as the visitor scrolls to them. The rest are
          // revealed by a deliberate click, so they animate on reveal instead —
          // a scroll-triggered card can otherwise mount below the fold and stay
          // stuck at opacity 0 if it never intersects the viewport.
          const revealedByClick = idx >= VISIBLE_COUNT;

          return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            {...(revealedByClick
              ? { animate: { opacity: 1, y: 0 } }
              : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } })}
            // Stagger within each row of three, so cards revealed by "See more"
            // animate in promptly instead of inheriting an ever-growing delay.
            transition={{ duration: 0.5, delay: (idx % VISIBLE_COUNT) * 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Image */}
            <div className="flex-shrink w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="max-w-96 max-h-128 rounded-lg shadow-lg w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {project.images && (
                <div className="flex flex-wrap gap-2 mt-2 max-w-96">
                  {project.images.map((shot, shotIdx) => (
                    <img
                      key={shot}
                      src={shot}
                      alt={`${project.title} screenshot ${shotIdx + 2}`}
                      loading="lazy"
                      className="w-[calc(50%-0.25rem)] rounded-md shadow-md object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 md:w-1/2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              {project.role && (
                <p className="text-sm font-light text-neutral-600 dark:text-neutral-400 -mt-2">
                  {project.role}
                </p>
              )}
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {project.linkLabel ?? 'View Project →'}
                </a>
              )}
            </div>
          </motion.div>
          );
        })}
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls="projects-list"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {showAll ? 'Show less' : `See more projects (${hiddenCount})`}
          </button>
        </div>
      )}
    </section>
  );
}
