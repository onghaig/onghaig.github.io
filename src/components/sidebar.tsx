import { useState, useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills" },
  { id: "resume",   label: "Resume" },
  { id: "contact",  label: "Contact" },
  { id: "blog",     label: "Blog" },
];

const links = [
  { id: "github",    label: "GitHub",    url: "https://github.com/onghaig", iconTag: "FaGithub"},
  { id: "linkedin",  label: "LinkedIn",  url: "https://www.linkedin.com/in/gavin-onghai/", iconTag: "FaLinkedin"},
]

const iconMap: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
};

export default function Sidebar() {
  const [active, setActive] = useState("");


  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <aside
      className="group fixed lg:inset-y-0 lg:left-0 lg:w-72
                 lg:flex lg:flex-col lg:px-2 lg:py-8
                 inset-x-0 top-0 flex-row justify-around
                 bg-white/0 hover:bg-white/20 hover:backdrop-blur-md
                 text-white transition-all duration-200"
    >
      <span className="mb-6 text-4xl font-semibold tracking-wide
                       opacity-40 group-hover:opacity-100 transition-opacity">
        Gavin Onghai
      </span>

      {sections.map(({ id, label }) => (
        <Link
          key={id}
          to={id}
          smooth
          duration={500}
          spy                 /* let react-scroll watch this link */
          offset={-60}        /* adjust if you have a fixed header */
          onSetActive={() => setActive(id)}   /* ← update state */
          className={`text-xl cursor-pointer transition-all
            opacity-40 group-hover:opacity-100
            ${active === id ? "font-semibold !text-5xl" : "font-light"}
            hover:text-5xl hover:font-semibold !text-white
            `}
        >
          {label}
        </Link>
      ))}
      <div className=" flex justify-center gap-4">
        {links.map(({ id, url, iconTag, label }) => {
          const Icon = iconMap[iconTag];
          return (
            <a
              key={id}
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 group-hover:opacity-100 transition-opacity
                         duration-400 hover:scale-200 hover:"
            >
              <Icon className="w-7 h-7" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
