import { projects } from '../projectData/projects';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
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
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 md:w-1/2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
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
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
