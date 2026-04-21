import React from "react";

export const Experiences = ({ darkMode }) => {
  const experienceData = [
    {
    company: "Contract Project",
    role: "Research Assistant",
    year: "01/2026 - Present",
    desc: [
      "Working on 'Trustworthy Explainable AI in Medical Imaging: A Survey Study'",
      "Conducting literature review, data synthesis, and structured data organization",
      "Supporting data validation and assisting in reporting for publication preparation",
      "Working remotely to meet project milestones and ensure research rigor"
    ]
  },
  {
    company: "Collektr",
    role: "Data Analyst",
    year: "03/2025 - 03/2026",
    desc: [
      "Cleaned, transformed, and orchestrated large datasets using ETL pipelines, improving data processing efficiency and reducing runtime",
      "Designed and deployed 10+ interactive dashboards in Looker Studio and Tableau, enabling executives to track KPIs and make real-time business decisions",
      "Leveraged BigQuery for data warehousing and live reporting, accelerating analytical workflows and improving time-to-insight across teams",
      "Automated recurring data workflows using Airflow and dbt, reducing manual reporting workload and increasing team productivity",
      "Performed cohort, retention, and customer behavior analysis to support data-driven marketing strategies",
      "Partnered with cross-functional teams (Sales, Logistics, Operations) to translate business needs into actionable data insights",
      "Analyzed datasets of over 10M+ records to identify trends, uncover business opportunities, and drive strategic decisions"
    ]
  },
  {
    company: "Takaful Alarabia",
    role: "Marketing Representative",
    year: "04/2018 - 06/2018",
    desc: [
      "Promoted card insurance products through direct calls and social media campaigns",
      "Engaged with potential customers, explained insurance benefits, and encouraged sign-ups"
    ]
  }
  ];

  return (
    <section
      id="experiences"
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-5">

        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? "#fff" : "#000" }}
          >
            My <span style={{ color: "green" }}>Experience</span>
          </h1>

          <p style={{ color: darkMode ? "#aaa" : "#444" }}>
            My professional experience journey
          </p>
        </div>

        <div className="relative border-l-2 border-green-600 ml-4 sm:ml-10">

          {experienceData.map((item, index) => (
            <div
              key={index}
              className="mb-10 ml-6"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 150}`}
            >

              <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 mt-2"></div>


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
                   {item.role}
                </h3>

                <p className="text-green-500 font-semibold mb-1">
                  {item.company}
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