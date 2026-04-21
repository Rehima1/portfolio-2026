import React from 'react'
import AboutImg from '../assets/pic.png';

export const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        
        {/* IMAGE SIDE */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-80 h-80 lg:w-[30rem] lg:h-[30rem]">
            
            {/* Decorative Background */}
            <div
              className="absolute -inset-10 lg:-inset-20 bg-gradient-to-l from-emerald-400 via-green-500 to-emerald-600 rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            {/* Image */}
            <img
              src={AboutImg}
              alt="Rehima"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg z-10 transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="900"
            />
          </div>
        </figure>

        {/* TEXT SIDE */}
        <article
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2 lg:pl-10"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-emerald-400 green bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-gradient-to-r from-green-900/10 to-green-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I'm a Data Analyst who has always seen the world through patterns, I notice what doesn't add up, I dig until it does, and I don't stop until the answer is clear.
            At my previous company, I built over 30 executive dashboards, cut computational costs by 65%, and made sense of datasets exceeding 30 million records. I work across SQL, Python, BigQuery, Tableau, Looker Studio, Airflow, and dbt, but the tool has never been the point. The point is always the decision waiting on the other side of the data.
            I also contribute to research on Explainable AI in Medical Imaging, because I believe data at its best doesn't just help businesses,  it helps people.
            I'm here to solve problems that actually matter, and I'm very good at it.
          </p>

          {/* STATS SECTION */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">

            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                1+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Years Experience
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                20+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Projects
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                25+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Analytics Dashboards Built
              </div>
            </div>
          
 

          </div>
        </article>

      </div>
    </section>
  )
}