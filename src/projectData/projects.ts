import LenslessImg from './LenslessImg.png';
import ImproveEdgeImg from './improveEdgeextension.png';
import AntennaImg from './Antenna.jpg';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies?: string[];
  completed?: string;
}

export const projects: Project[] = [
  {
    title: "Lensless Polarimetric Imaging",
    description: "Lensless computational imaging pipeline, with capabilities in estimating Stokes parameters with ADMM.",
    image: LenslessImg,
    link: "https://github.com/onghaig/LenslessPiCam",
    technologies: ["Python", "NumPy", "Computer Vision", "ADMM"],
    completed: "2025"
  },
  {
    title: "ImproveEdge Extension",
    description: "Created a custom homepage and new tab extension with extensive feature set, working with API calls, React JSX, Vite, and TailwindCSS",
    image: ImproveEdgeImg,
    link: "https://github.com/onghaig/ImprovEdge-Extension",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    completed: "2024"
  },
  {
    title: "Yale Menus: Campus Dining App",
    description: "Responsive mobile app for browsing dining halls with offline cache, search, and allergen filters.",
    image: "https://yalemenus.com/images/logo/logo.png",
    link: "https://yalemenus.com/",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    completed: "2024"
  },
  {
    title: "Yagi-Uda Antenna Design",
    description: "Designed and created a Yagi-Uda antenna for 2.4 GHz WiFi with ~15 dBi gain.",
    image: AntennaImg,
    technologies: ["RF Design", "HFSS", "Hardware"],
    completed: "2023"
  }
];