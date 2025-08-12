import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCopy } from "react-icons/fa";
import { useState } from "react";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);
  const email = "gavin.onghai@yale.edu";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="px-8"
    >
      <div>
        <h1 className="w-full font-bold mb-6">My Contact</h1>
        <p className="mb-6 w-full">
          I’m always open to interesting conversations, collaborations, and opportunities. Feel free to send a message!
        </p>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg" />
            <a
              href={`mailto:${email}`}
              className="hover:underline transition-all"
            >
              {email}
            </a>
            <button
              onClick={copyEmail}
              className="text-neutral-400 hover:text-white-600 transition"
              title="Copy email"
            >
              <FaCopy />
            </button>
            {copied && <span className="text-sm">Copied!</span>}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>New Haven, CT & Port Jefferson, NY</span>
          </div>
        </div>


        {/* Social links */}
        <div className="flex gap-6 mt-8 justify-center">
          <a
            href="https://www.linkedin.com/in/gavin-onghai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 dark:hover:text-white transition"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/onghaig"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-600 dark:hover:text-white transition"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
