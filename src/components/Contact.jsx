import React, { useState } from "react";
import resumePDF from "../assets/Rehima_Official_Resume.pdf";

export const Contact = ({ darkMode }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleMail = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:rehimakemal224@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setLoading(false);
      setSuccess(true);
      form.reset();

      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            Message ready to send ✅
          </div>
        )}

        {/* HEADER */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-green-500">Me</span>
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Let’s connect, I usually respond fast 🚀
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div
          className={`container mx-auto px-5${
            darkMode
              ? "bg-gray-900 border-gray-800"
              : "bg-gray-50 border-gray-200"   
          }`} data-aos="fade-up" data-aos-delay="300"

        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <div>
              <p className="mb-8 text-lg">
                I am actively seeking job opportunities or collaborations. Feel free to reach out via email{" "}
                <span className="text-green-500">
                  rehimakemal224@gmail.com
                </span>
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  {
                    name: "GitHub",
                    link: "https://github.com/Rehima1",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/rehima-kemal-1530a7307/",
                  },
                  {
                    name: "Email",
                    link: "mailto:rehimakemal224@gmail.com",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full border border-gray-600 
                    hover:border-green-500 hover:text-green-500 
                    hover:scale-105 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500 text-green-500
                hover:bg-green-500 hover:text-white hover:scale-105 transition"
              >
                Download Resume (PDF)
              </a>
            </div>

            {/* RIGHT SIDE FORM */}
            <form
              onSubmit={handleMail}
              className={`p-8 rounded-2xl border ${
                darkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"  
              }`}
            >
              {/* NAME */}
              <div className="mb-5">
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-4 rounded-xl bg-transparent border border-gray-700 
                  focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                  outline-none transition"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="mb-5">
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full p-4 rounded-xl bg-transparent border border-gray-700 
                  focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                  outline-none transition"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-xl bg-transparent border border-gray-700 
                  focus:border-green-500 focus:ring-2 focus:ring-green-500/20 
                  outline-none transition"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-green-600 text-white font-semibold 
                hover:bg-green-700 transition disabled:opacity-50"
              >
                {loading ? "Preparing..." : "Send Message"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};