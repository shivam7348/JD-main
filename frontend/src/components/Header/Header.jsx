import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About us',
      path: '/about',
      dropdownItems: [
        { title: "Director's Message", path: '/message' },
        { title: 'Vision', path: '/vision' },
        { title: 'Mission', path: '/mission' },
      ],
    },
    {
      title: 'Admission',
      path: '/admission',
    },
    {
      title: 'Academic Zone',
      path: '/academic',
      dropdownItems: [
        { title: 'Activities', path: '/activities' },
        { title: 'Tc Enquiry', path: '/tc-enquiry' },
        { title: 'Annual Planner', path: '/annual-planner' },
        { title: 'Examination Schedule', path: '/examination-schedule' },
      ],
    },
    {
      title: 'Session Information',
      path: '/session',
      dropdownItems: [
        { title: 'School Timing', path: '/time' },
        { title: 'Fee Regulation', path: '/fees' },
        { title: 'Rule Of Code And Conduct', path: '/rules' },
      ],
    },
    {
      title: 'Infrastructure',
      path: '/infrastructure',
      dropdownItems: [
        { title: 'Transport Facility', path: '/transport' },
        { title: 'School Campus', path: '/campus' },
        { title: 'Laboratory', path: '/lab' },
        { title: 'Smart Classes', path: '/smart-classes' },
        { title: 'Library', path: '/library' },
        { title: 'Sports Ground', path: '/sports' },
      ],
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];

  const MenuItem = ({ item, index }) => {
    const hasDropdown = item.dropdownItems?.length > 0;
    const isActive = activeDropdown === index;

    return (
      <li className="relative group">
        <a
          href={item.path}
          className="block py-2 text-white hover:bg-red-700 transition-colors duration-200"
          onClick={(e) => {
            if (hasDropdown) {
              e.preventDefault();
              setActiveDropdown(isActive ? null : index);
            }
          }}
          onMouseEnter={() => {
            if (hasDropdown && window.innerWidth >= 768) {
              setActiveDropdown(index);
            }
          }}
        >
          {item.title}
        </a>
        {hasDropdown && (
          <ul
            className={`${
              isActive ? 'block' : 'hidden'
            } md:group-hover:block absolute left-0 bg-red-600 shadow-lg mt-0 rounded min-w-[200px] z-50`}
          >
            {item.dropdownItems.map((dropdownItem, idx) => (
              <li key={idx}>
                <a
                  href={dropdownItem.path}
                  className="block px-4 py-2 text-white hover:bg-red-700 whitespace-nowrap transition-colors duration-200"
                >
                  {dropdownItem.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Header */}
      <div className="hidden lg:block bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/all-icon/map.png" alt="location" className="h-5 w-5" />
              <span className="text-sm">226, Sai Enclave, Nandgram, Opp. KM Residency, Raj Nagar Extn, Ghaziabad-201003</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/all-icon/email.png" alt="email" className="h-5 w-5" />
              <span className="text-sm">jdglobal.school@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Support */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.jpeg" alt="JD Global School" className="h-20" />
            <h1 className="text-xl font-serif text-red-600">J.D GLOBAL SCHOOL</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/images/all-icon/support.png" alt="support" className="h-10" />
              <div>
                <p className="text-sm">Need Help? call us free</p>
                <a href="tel:9555744337" className="text-sm font-semibold">9555744337</a>
              </div>
            </div>
            <a href="/admission" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              ADMISSION
            </a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block bg-red-600`}
        ref={dropdownRef}
      >
        <div className="container mx-auto px-4">
          <ul className="md:flex md:space-x-6 py-2">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} index={index} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;