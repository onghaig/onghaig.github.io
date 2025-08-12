import {
  SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
  SiLinux, SiGit, SiNodedotjs, SiReact, SiTailwindcss,
  SiNumpy, SiPandas, SiScikitlearn, SiTypescript
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { Cpu, CircuitBoard, LineChart } from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export default function Skills() {
  const iconSize = 32;

  const card =
    "flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 " +
    "border border-transparent border-2 shadow-sm transition-all will-change-transform " +
    "hover:border-gray-400 dark:hover:border-white hover:-translate-y-[8px] hover:shadow-md " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

  const iconClass = "mb-2 text-gray-700 dark:text-gray-100";

  const languages: { icon: IconType; name: string }[] = [
    { icon: SiPython, name: "Python" },
    { icon: SiCplusplus, name: "C/C++" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: Cpu, name: "Verilog" },
  ];

  const tools: { icon: IconType; name: string }[] = [
    { icon: FaWindows, name: "Windows" },
    { icon: SiLinux, name: "Linux (CLI)" },
    { icon: DiVisualstudio, name: "VS Code" },
    { icon: SiGit, name: "Git" },
    { icon: CircuitBoard, name: "Bash/Shell" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: CircuitBoard, name: "Vivado" },
  ];

  const libraries: { icon: IconType; name: string }[] = [
    { icon: SiNumpy, name: "NumPy" },
    { icon: SiPandas, name: "Pandas" },
    { icon: SiScikitlearn, name: "scikit-learn" },
    { icon: LineChart, name: "Matplotlib" }, // ⬅️ monochrome, stylable
  ];

  const renderSkillBox = (Icon: IconType, name: string) => (
    <div key={name} className={card} tabIndex={0}>
      <Icon size={iconSize} className={iconClass} />
      <span className="text-xs font-medium text-gray-900 dark:text-gray-100 text-center">
        {name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="relative min-h-[40vh] flex flex-col justify-start px-4 lg:px-8 pt-16 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl font-bold mb-2">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Languages</h3>
          <div className="grid grid-cols-3 gap-4">
            {languages.map(({ icon, name }) => renderSkillBox(icon, name))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tools & Systems</h3>
          <div className="grid grid-cols-3 gap-4">
            {tools.map(({ icon, name }) => renderSkillBox(icon, name))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Libraries</h3>
          <div className="grid grid-cols-3 gap-4">
            {libraries.map(({ icon, name }) => renderSkillBox(icon, name))}
          </div>
        </div>
      </div>
    </section>
  );
}
