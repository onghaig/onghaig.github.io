import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  { id: "about",    label: "About" },
  { id: "skills",   label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume",   label: "Resume" },
  { id: "contact",  label: "Contact" },
];

const links = [
  { id: "github",   label: "GitHub",   url: "https://github.com/onghaig", iconTag: "FaGithub" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/gavin-onghai/", iconTag: "FaLinkedin" },
];

const iconMap: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
};

export default function Sidebar() {
  // 0–1 proximity to viewport center per section
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
        const maxDist = vpCenter + rect.height / 2;
        next[id] = Math.max(0, 1 - dist / maxDist);
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

  const fontSize = (ratio: number) => 1.25 + ratio * 1.75; // rem
  const opacity  = (ratio: number) => 0.4  + ratio * 0.6;

  const currentSection = sections.reduce((active, section) =>
    (proximity[section.id] ?? 0) > (proximity[active.id] ?? 0) ? section : active
  , sections[0]);

  return (
    <>
      {/* Mobile Navigation Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-white">
            {currentSection.label}
          </span>
          <a
            href="https://onghaig.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Gavin Onghai
          </a>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside
        className="
          hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-72
          lg:flex-col lg:h-svh 
          group bg-gray-50 hover:bg-gray-200 dark:bg-white/0 dark:hover:bg-white/20 hover:backdrop-blur-md 
          transition-all duration-200
        "
      >
        {/* Header / Name */}
        <div className="px-4 py-6">
          <span className="text-4xl font-semibold tracking-wide opacity-40 group-hover:opacity-100 transition-opacity">
            <a href="https://onghaig.github.io" target="_blank" rel="noopener noreferrer">
              Gavin Onghai
            </a>
          </span>
        </div>

        {/* Evenly distributed nav (fills all remaining height) */}
        <nav className="flex-1 flex flex-col">
          {sections.map(({ id, label }) => {
            const r = proximity[id] ?? 0;
            return (
              <Link
                key={id}
                to={id}
                smooth
                duration={500}
                spy
                offset={0}
                className="
                  flex-1 flex items-center justify-center
                  cursor-pointer select-none
                "
              >
                {/* scale/opacity on inner span so each row keeps equal height */}
                <span
                  className="transition-transform duration-300 will-change-transform"
                  style={{
                    fontSize: `${fontSize(r)}rem`,
                    opacity: opacity(r),
                    transform: `scale(${0.9 + r * 0.2})`,
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer / Socials pinned at bottom */}
        <div className="px-4 py-6">
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
                  className="opacity-40 hover:opacity-100 transition-opacity duration-300 hover:scale-125"
                >
                  <Icon className="w-7 h-7" />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
