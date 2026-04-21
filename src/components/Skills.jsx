import React from 'react'
import sql from '../assets/sql.png'
import python from '../assets/python.png'
import powerBI from '../assets/power-bi.png'
import R from '../assets/R.png'
import nodeJS from '../assets/nodejs.png'
import java from '../assets/java.png'
import flask from '../assets/flask.png'
import Cloud from '../assets/google-cloud.png'
import looker from '../assets/google-looker.png'
import react from '../assets/react.png'
import tableau from '../assets/tableau.png'
import tens from '../assets/tensorflow.png'

export const Skills = ({ darkMode }) => {

  const shills = [
    { name: 'SQL', icon: sql, level: 95, color: 'bg-green-500' },
    { name: 'Python', icon: python, level: 95, color: 'bg-blue-500' },
    { name: 'Power BI', icon: powerBI, level: 95, color: 'bg-yellow-500' },
    { name: 'Node.js', icon: nodeJS, level: 80, color: 'bg-blue-500' },
    { name: 'Flask', icon: flask, level: 80, color: 'bg-blue-500' },
    { name: 'Google Cloud', icon: Cloud, level: 95, color: 'bg-green-500' },
    { name: 'Looker', icon: looker, level: 95, color: 'bg-yellow-500' },
    { name: 'Tableau', icon: tableau, level: 95, color: 'bg-green-500' },
  ]

  return (
    <section
      id="skills"
      className={`py-14 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container px-5 py-14 mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? 'bg-gray-900' : 'bg-gray-50'}}
          >
            My <span style={{ color: "green" }}>Skills</span>
          </h1>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Here are some of the technologies and tools I have experience with:
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="flex flex-wrap -m-4">
          {shills.map((skill, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >

              {/* CARD */}
              <div
                className={`p-6 rounded-xl border border-gray-700 
                transition-all duration-500 transform group cursor-pointer
                hover:scale-105 hover:-translate-y-2 
                hover:shadow-2xl hover:shadow-green-500/20 
                hover:border-green-500`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                }}
              >

                {/* ICON + NAME */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl p-3 flex items-center justify-center bg-gray-800 group-hover:rotate-6 transition-all duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className={`text-xl font-bold ml-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </h3>
                </div>

                {/* PROGRESS TEXT */}
                <div className="mb-2 flex justify-between items-center">
                  <span className={darkMode ? 'text-white' : 'text-gray-800'}>
                    Proficiency
                  </span>
                  <span className="font-bold text-green-500">
                    {skill.level}%
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className={`w-full rounded-full h-3 overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className={`h-full rounded-full ${skill.color} 
                    transition-all duration-1000 ease-out 
                    w-0 group-hover:w-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}