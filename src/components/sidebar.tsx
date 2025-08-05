import { useState, useEffect } from "react"; 
import { Link, Events } from "react-scroll";

const sections = [
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills" },
  { id: "resume",   label: "Resume" },
  { id: "contact",  label: "Contact" },
  { id: "blog",     label: "Blog" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");

  // Keep <active> in sync with the section that’s in view
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", (to) => setActive(to));
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <aside
      /* ⬅ fixed left edge, transparent → opaque on hover  */
      className="fixed inset-y-0 left-0 z-40 w-72 flex flex-col gap-12
                 bg-white/0 hover:bg-white/90 transition-colors
                 border-gray-200/50 backdrop-blur
                 px-4 py-8 shadow-lg/0 hover:shadow-lg"
    >
      {/* Logo or initials at the top */}
      <span className="mb-6 text-4xl font-semibold tracking-wide">
        Gavin Onghai
      </span>

      {/* Navigation links */}
      {sections.map(({ id, label }) => (
        <Link
          key={id}
          to={id}
          smooth
          duration={500}
          spy
          className={`text-xl cursor-pointer transition-all
            ${active === id ? "font-bold text-white" : "text-gray-700"}
            hover:text-4xl`}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
}
