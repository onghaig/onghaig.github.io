import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
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
];

const iconMap: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
};

export default function Sidebar() {
  // each section gets a number 0-1 indicating how close its center is to viewport center
  const [proximity, setProximity] = useState<Record<string, number>>(
    () => Object.fromEntries(sections.map(({ id }) => [id, 0]))
  );

  const update = useCallback(() => {
    const vpCenter = window.innerHeight / 2;
    setProximity(prev => {
      const next = { ...prev };
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vpCenter);
        const maxDist = vpCenter + rect.height / 2; // farthest the section center can be
        next[id] = Math.max(0, 1 - dist / maxDist); // 1 → exactly centered, 0 → far away
      });
      return next;
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const fontSize = (ratio: number) => 1.25 + ratio * 1.75; // rem, roughly text-xl → text-5xl
  const opacity = (ratio: number) => 0.4 + ratio * 0.6;

  return (
    <aside
      className="group fixed lg:inset-y-0 lg:left-0 lg:w-72
                 lg:flex lg:flex-col lg:px-2 lg:py-8
                 inset-x-0 top-0 flex-row justify-around
                 bg-white/0 hover:bg-white/20 hover:backdrop-blur-md
                 text-white transition-all duration-200"
    >
      <span className="text-4xl font-semibold tracking-wide
                       opacity-40 group-hover:opacity-100 transition-opacity">
        Gavin Onghai
      </span>

      {sections.map(({ id, label }) => {
        const r = proximity[id] ?? 0;
        return (
          <Link
            key={id}
            to={id}
            smooth
            duration={500}
            spy
            offset={-60}
            className="cursor-pointer hover:scale-150 transition-transform"
            style={{
              fontSize: `${fontSize(r)}rem`,
              opacity: opacity(r),
              transform: `scale(${.9 + r * 0.2})`,
            }}
          >
            {label}
          </Link>
        );
      })}

      <div className="flex justify-center gap-4">
        {links.map(({ id, url, iconTag, label }) => {
          const Icon = iconMap[iconTag];
          return (
            <a
              key={id}
              href={url}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 group-hover:opacity-100 transition-opacity duration-400 hover:scale-200"
            >
              <Icon className="w-7 h-7" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}