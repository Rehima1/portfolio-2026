import React from "react";

export const Education = ({ darkMode }) => {
  const educationData = [
    {
      school: "Albukhary International University",
      degree: "Bachelor of Computer Science (Data Science)",
      year: "2022 - 2025",
      desc: "I graduated with first class on a full scholarship, earned the Dean's List Award, and spent those years diving into Machine Learning, Data analysis, web development, and Statistics. I published research, presented at an international conference, and built a deep learning model for pediatric heart diagnostics as my final project, the moment I realized data could go far beyond business. Outside the classroom, I served as Team Coordinator for the Hult Prize Foundation, coordinating resources, mentorship, and pitch events for 30+ competing teams. I also competed in frisbee at a serious level and won, because when I commit to something, I see it through, whether that's a dataset or a championship."
    }
  ];

  return (
    <section
      id="education"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: darkMode ? 'bg-gray-900' : 'bg-gray-50' }}
    >
      <div className="container mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? 'bg-gray-900' : 'bg-gray-50'}}
          >
            My <span style={{ color: "green" }}>Education</span>
          </h1>

          <p style={{ color: darkMode ? "#aaa" : "#444" }}>
            My academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-green-600 ml-4 sm:ml-10">

          {educationData.map((item, index) => (
            <div
              key={index}
              className="mb-10 ml-6"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 150}`}
            >

              {/* Dot */}
              <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 mt-2"></div>

              {/* Card */}
              <div
                className="p-5 rounded-xl shadow-2xl shadow-black/70 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }}
              >
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: darkMode ? 'text-white' : 'text-gray-900' }}
                >
                  {item.school}
                </h3>

                <p className="text-green-500 font-semibold mb-1">
                  {item.degree}
                </p>

                <p
                  className="text-sm mb-2"
                  style={{ color: darkMode ? "#aaa" : "#555" }}
                >
                  {item.year}
                </p>

                <p style={{ color: darkMode ? "#ccc" : "#333" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};