import React from "react";
import linkedin from "../assets/linkedin-96.png";
import github from "../assets/github-96.png";

export const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-5 ${
        darkMode
          ? "bg-gray-900 border-t border-gray-700"
          : "bg-gray-100 border-t"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT */}
        <h2 className="text-sm font-semibold">
          Rehima <span className="text-green-500">Kemal</span>
        </h2>

        {/* CENTER */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </p>

        {/* RIGHT */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/rehima-kemal-1530a7307/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-5 h-5 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://github.com/Rehima1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-5 h-5 hover:scale-110 transition"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};