import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3,
  SiLinux, SiGit, SiNodedotjs, SiReact, SiTailwindcss,
  SiNumpy, SiPandas, SiScikitlearn,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { Cpu, CircuitBoard } from "lucide-react";

export default function Skills() {
  const iconSize = 22;

  return (
    <section id="skills" className="relative min-h-[60vh] flex flex-col justify-start px-4 lg:px-8 pt-16 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="font-semibold mb-3">Languages</h3>
          <ul className="flex flex-wrap gap-3">
            <li title="Python" aria-label="Python"><SiPython size={iconSize} /></li>
            <li title="C/C++" aria-label="C/C++"><SiCplusplus size={iconSize} /></li>
            <li title="JavaScript" aria-label="JavaScript"><SiJavascript size={iconSize} /></li>
            <li title="HTML5" aria-label="HTML5"><SiHtml5 size={iconSize} /></li>
            <li title="CSS3" aria-label="CSS3"><SiCss3 size={iconSize} /></li>
            <li title="Verilog" aria-label="Verilog"><Cpu size={iconSize} /></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tools & Systems</h3>
          <ul className="flex flex-wrap gap-3">
            <li title="Windows" aria-label="Windows"><FaWindows size={iconSize} /></li>
            <li title="Linux (CLI)" aria-label="Linux (CLI)"><SiLinux size={iconSize} /></li>
            <li title="VS Code" aria-label="VS Code"><DiVisualstudio size={iconSize} /></li>
            <li title="Git" aria-label="Git"><SiGit size={iconSize} /></li>
            <li title="Bash/Shell" aria-label="Bash/Shell"><CircuitBoard size={iconSize} /></li>
            <li title="Node.js" aria-label="Node.js"><SiNodedotjs size={iconSize} /></li>
            <li title="React" aria-label="React"><SiReact size={iconSize} /></li>
            <li title="TailwindCSS" aria-label="TailwindCSS"><SiTailwindcss size={iconSize} /></li>
            <li title="Vivado" aria-label="Vivado"><CircuitBoard size={iconSize} /></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-3">Core Skills & Libraries</h3>
          <div className="space-y-2">
            <ul className="flex flex-wrap gap-2">
              {["Data Structures", "Object-Oriented Programming", "FPGA Programming & Simulation", "Research & Documentation"]
                .map((skill) => (
                  <li key={skill} className="px-2 py-1 rounded bg-gray-100 text-sm">{skill}</li>
                ))}
            </ul>
            <ul className="flex flex-wrap gap-3 pt-1">
              <li title="NumPy" aria-label="NumPy"><SiNumpy size={iconSize} /></li>
              <li title="Pandas" aria-label="Pandas"><SiPandas size={iconSize} /></li>
              <li title="scikit-learn" aria-label="scikit-learn"><SiScikitlearn size={iconSize} /></li>
              <li className="px-2 py-1 rounded bg-gray-100 text-sm">Matplotlib</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
