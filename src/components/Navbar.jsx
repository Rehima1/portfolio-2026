import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Experiences", link: "#experiences" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-green-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-green-600",
    textActive: "text-green-700",
    button: "from-green-500 to-green-700",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-green-900 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-green-400",
    textActive: "text-green-400",
    button: "from-green-600 to-green-800",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavItemClick = (e, itemName) => {
    e.preventDefault();
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
    const target = document.getElementById(itemName.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">

          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Rehima Portfolio
            </span>
          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <motion.a
                  href={item.link}
                  onClick={(e) => handleNavItemClick(e, item.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  } hover:text-green-600`}
                >
                  {item.name}
                </motion.a>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.button}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Dark Mode + Hire Me Button */}
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-lg rounded-xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => handleNavItemClick(e, item.name)}
                  whileHover={{ x: 5 }}
                  className={`block py-3 px-4 rounded-lg text-center font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? darkMode
                        ? "bg-gray-800 text-white"
                        : "bg-green-50 text-green-700"
                      : darkMode
                      ? "text-gray-300"
                      : "text-gray-800"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;