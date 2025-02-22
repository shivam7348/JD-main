import React from "react";
import { FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import axios from "axios";

const TopHeader = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/get/announcements`)
      .then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setError("Failed to load announcements.");
        setLoading(false);
      });
  }, []);

  return (
    <header className="bg-blue-800 text-white p-2">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 px-4 text-center">
        {/* Address Section */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaMapMarkerAlt className="h-5 w-5 text-red-400" />
          <div className="p-1">
            226, Sai Enclave, Nandgram, Opp. KM Residency, Raj Nagar Extn,
            Ghaziabad-201003
          </div>
        </div>

        {/* Announcement Section */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaBullhorn className="h-5 w-5 text-yellow-400" />
          <div className="p-1">
            {loading ? (
              <span>Loading announcements...</span>
            ) : error ? (
              <span>{error}</span>
            ) : (
              <Marquee speed={50} gradient={false} pauseOnHover={true}>
                {announcements.map((announcement, index) => (
                  <span key={index}>
                    {announcement.text} &nbsp;&nbsp;&nbsp;
                  </span>
                ))}
              </Marquee>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
