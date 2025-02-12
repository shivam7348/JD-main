import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo Section */}
        {/* <Link to="/" className="text-xl font-bold text-red-800">
          Logo
        </Link> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`absolute md:static left-0 right-0 top-full w-full md:w-auto bg-white md:bg-transparent ${
            menuOpen ? "block" : "hidden"
          } md:block shadow-lg md:shadow-none`}
        >
          <ul className="md:flex md:items-center text-sm md:text-base font-semibold divide-y md:divide-y-0 divide-gray-100">
            <NavItem to="/">HOME</NavItem>

            {/* About Dropdown */}
            <NavDropdown title="ABOUT US" items={[
              { to: "/about/message", label: "DIRECTOR MESSAGE" },
              { to: "/about/vision", label: "VISION" },
              { to: "/about/mission", label: "MISSION" }
            ]} />

            <NavItem to="/admission">ADMISSION</NavItem>

            {/* Academic Zone Dropdown */}
            <NavDropdown title="ACADEMIC ZONE" items={[
              { to: "/academic-zone/activities", label: "ACTIVITIES" },
              { to: "/academic-zone/tc-enquiry", label: "TC ENQUIRY" },
              { to: "/academic-zone/annual-planner", label: "ANNUAL PLANNER" },
              { to: "/academic-zone/exam-schedule", label: "EXAMINATION SCHEDULE" }
            ]} />

            {/* Session Information Dropdown */}
            <NavDropdown title="SESSION INFORMATION" items={[
              { to: "/sessioni-info/schooltiming", label: "SCHOOL TIMING" },
              { to: "/sessioni-info/freeregulation", label: "FREE REGULATION" },
              { to: "/sessioni-info/rulecode-condt", label: "RULE OF CODE AND CONDUCT" }
            ]} />

            {/* Infrastructure Dropdown */}
            <NavDropdown title="INFRASTRUCTURE" items={[
              { to: "/infrastructure/transport-facilities", label: "TRANSPORT FACILITY" },
              { to: "/infrastructure/schoolcampus", label: "SCHOOL CAMPUS" },
              { to: "/infrastructure/laboratory", label: "LABORATORY" },
              { to: "/infrastructure/smartclasses", label: "SMART CLASSES" },
              { to: "/infrastructure/library", label: "LIBRARY" },
              { to: "/infrastructure/sportsground", label: "SPORTS GROUND" }
            ]} />

            <NavItem to="/gallery">GALLERY</NavItem>
            <NavItem to="/contact">CONTACT</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Helper components for cleaner code
const NavItem = ({ to, children }) => (
  <li className="md:mx-2">
    <Link
      to={to}
      className="block px-4 py-3 md:py-2 hover:text-yellow-500 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative group md:mx-2">
      <button
        className="w-full text-left px-4 py-3 md:py-2 hover:text-yellow-500 transition-colors duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-200 md:hidden ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <ul
        className={`
          md:absolute md:left-0 md:top-full 
          bg-gray-50 md:bg-white 
          md:shadow-lg 
          md:min-w-[200px]
          md:hidden md:group-hover:block
          ${isOpen ? "block" : "hidden"}
        `}
      >
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="block px-6 py-2 hover:bg-gray-100 hover:text-yellow-500 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Header;