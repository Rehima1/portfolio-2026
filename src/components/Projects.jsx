import React from "react";
import kd from "../assets/kd_acdemy.png";
import resume from "../assets/resume.png";
import customer from "../assets/customer.png";




export const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "KD-Academy Management System",
      desc: "Developed a full-stack web application for KD Academy that enables course enrollment, attendance tracking, academic performance monitoring, and student profile management. The platform centralizes academic operations, improves administrative efficiency, and enhances communication between students and staff through a responsive and user-friendly interface.",
      tech: ["CSS", "JS","PHP", "Bootstrap", "MySQL"],
      image: kd,
      code: "https://github.com/Rehima1/Kd-Academy",
    },
    {
      title: "Resume Screening System",
      desc: "Developed an AI-powered resume screening system, matching resumes to job descriptions. Implemented resume parsing, category prediction, similarity analysis, and experience extraction features with accuracy exceeding 95+ for the used models.",
      tech: ["Python", "Flask", "Scikit-learn", "NLP", "TF-IDF", "HTML", "CSS", "JS", "Machine Learning"],
      image: resume,
      code: "https://github.com/Rehima1/AI_Resume_Screening",
    },
    {
      title: "Customer Churn Prediction",
      desc: "Built a full-stack web application for predicting customer outcomes using a machine learning model. Designed a React frontend for seamless user input and integrated it with a Flask backend via RESTful APIs. Enabled real-time predictions and intuitive data interaction through a responsive, user-friendly interface.",
      tech: ["React", "Flask", "Python", "Machine Learning", "REST API", "CSS"],
      image: customer,
      code: "https://github.com/Rehima1/UI-churn-prediction",
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            My <span style={{ color: "green" }}>Projects</span>
          </h1>
          <p style={{ color: darkMode ? "#aaa" : "#444" }}>
            Some of my projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 150}`}
              className={`group rounded-2xl overflow-hidden border ${
                darkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              } shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/20`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.code}
                    className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white hover:opacity-90 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Rehima1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 active:scale-95"
          >
            For More Projects
          </a>
        </div>
        

      </div>
    </section>
  );
};