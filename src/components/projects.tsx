import antennaImg from "../projectData/Antenna.jpg";
import LenslessImg from "../projectData/LenslessImg.png";

export default function Projects() {
  const projects = [
    {
      title: "Lensless Polarimetric Imaging",
      description:
        "Lensless computational imaging pipeline, with capabilities in estimating Stokes parameters with ADMM.",
      image: LenslessImg,
    },
    {
      title: "Yale Menus: Campus Dining App",
      description:
        "Responsive mobile app for browsing dining halls with offline cache, search, and allergen filters.",
      image: "https://yalemenus.com/images/logo/logo.png",
      link: "https://yalemenus.com/",
    },
    {
      title: "Yagi-Uda Antenna Design",
      description:
        "Designed and created a Yagi-Uda antenna for 2.4 GHz WiFi with ~15 dBi gain.",
      image: antennaImg,
    }
  ];

  return (
    <section id="projects" className="px-8 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Image */}
            <div className="flex-shrink w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-96 max-h-128rounded-lg shadow-lg w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-4 md:w-1/2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                {project.description}
              </p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
