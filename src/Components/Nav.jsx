import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in ${
        show ? colors.navBgSolid : `bg-gradient-to-b ${colors.navBg} to-transparent`
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-12 py-5">
        {/* Left side - Logo and Nav links */}
        <div className="flex items-center space-x-8">
          <img
            className="w-24 md:w-32 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            onClick={() => navigate("/")}
          />
          
          {/* Navigation Links - Show on medium screens and up */}
          <div className={`hidden md:flex space-x-4 lg:space-x-6 text-sm ${colors.text}`}>
            <a href="/" className={`${colors.text} ${colors.hoverText} transition`}>
              Home
            </a>
            <a href="/tvshows" className={`${colors.textSecondary} ${colors.hoverText} transition`}>
              TV Shows
            </a>
            <a href="/movies" className={`${colors.textSecondary} ${colors.hoverText} transition`}>
              Movies
            </a>
            <a href="#" className={`${colors.textSecondary} ${colors.hoverText} transition`}>
              New & Popular
            </a>
            <a href="#" className={`${colors.textSecondary} ${colors.hoverText} transition`}>
              My List
            </a>
          </div>
        </div>

        {/* Right side - Theme Toggle, Search, Login & Avatar */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Search Icon */}
          <svg
            onClick={() => navigate("/search")}
            className={`w-5 h-5 md:w-6 md:h-6 ${colors.text} cursor-pointer hover:${colors.textSecondary} transition`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className={`${colors.text} text-sm font-semibold hover:${colors.textSecondary} transition`}
          >
            Login
          </button>
          
          {/* Avatar */}
        <ProfileDropdown/>
        </div>
      </div>
    </nav>
  );
}

export default Nav;