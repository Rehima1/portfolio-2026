import Linkedin from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Whatsapp from "../assets/whatsapp.png";
import CV from "../assets/Rehima_Official_Resume.pdf";
import Rehima from "../assets/rehima.png";
import Hello from "../assets/Hello.png";

export const Home = ({ darkMode }) => {
  const socialIcons = [
    { icon: Linkedin, alt: "LinkedIn", link: "https://www.linkedin.com/in/rehima-kemal-1530a7307/" },
    { icon: Github, alt: "GitHub", link: "https://github.com/Rehima1" },
    { icon: Whatsapp, alt: "Whatsapp", link: "https://api.whatsapp.com/send?phone=601137342274&text=Hey%20%F0%9F%91%8B%F0%9F%8F%BE" }
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    button: "bg-green-700 hover:bg-green-800",
    decorativeCircle: "bg-green-700/20"
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    button: "bg-green-500 hover:bg-green-600",
    decorativeCircle: "bg-green-400/30"
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-6">

        {/* LEFT */}
        <div className="lg:w-[45%] w-full flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:scale-110 transition"
                />
              </a>
            ))}
          </div>

          {/* Title */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.textPrimary}`}>
            Hi, I'm <span className="text-green-500">Rehima Kemal</span>
          </h1>

          {/* Description */}
          <p className={`max-w-xl mb-6 text-lg ${theme.textSecondary}`}>
            I take complex data and transform it into compelling stories and smart strategies, because the best insights are useless if they can't inspire action.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a
              href={CV}
              download
              className={`w-full sm:w-1/2 text-center py-3 px-6 rounded-full font-semibold text-white 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 
              ${theme.button}`}
            >
              Download CV
            </a>

            <a
              href="#contact"
              className={`w-full sm:w-1/2 text-center py-3 px-6 rounded-full font-semibold text-white 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 
              ${theme.button}`}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[45%] w-full flex justify-center lg:justify-end relative">
          <div className="relative w-72 sm:w-80 lg:w-96">

            {/* Decorative Circle */}
            <div className={`absolute inset-0 rounded-full blur-3xl ${theme.decorativeCircle}`}></div>

            {/* Image */}
            <img
              src={Rehima}
              alt="Rehima"
              className="relative z-10 w-full rounded-2xl object-cover"
            />

            {/* Hello Icon */}
            <img
              src={Hello}
              alt="hello"
              className="absolute top-[30%] left-4 w-14 sm:w-20 animate-bounce z-20"
            />
          </div>
        </div>

        {/* Background Decorative Circle */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} 
          rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`}
        ></div>

      </section>
    </div>
  );
};