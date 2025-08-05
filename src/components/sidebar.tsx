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
      className="group fixed lg:inset-y-0 lg:left-0 lg:w-72
                 lg:flex lg:flex-col lg:px-4 lg:py-8
                 inset-x-0 top-0 flex-row justify-around

             bg-white/0           /* fully transparent by default  */
             hover:bg-white/20    /* ~20 % white overlay on hover   */

             hover:backdrop-blur-md
                 text-white          /* keep all text white            */
                 transition-all duration-200" /* smooth opacity animation       */

    >
      {/* Logo or initials at the top */}
      <span className="mb-6 text-4xl font-semibold tracking-wide
                        opacity-40 group-hover:opacity-100  /* 50 % → 100 % */
                        transition-opacity">
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
            opacity-40 group-hover:opacity-100 
            ${active === id ? "font-semibold" : "font-light"}
            hover:text-5xl hover:font-semibold
             !text-white`}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
}
