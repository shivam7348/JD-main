import { FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const TopHeader = () => {
  return (
    <header className="bg-blue-800 text-white p-2">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 px-4 text-center">
        
        {/* Address Section */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaMapMarkerAlt className="h-5 w-5 text-red-400" />
          <div className="p-1">
           
              226, Sai Enclave, Nandgram, Opp. KM Residency, Raj Nagar Extn, Ghaziabad-201003
           
          </div>
        </div>

        {/* Announcement Section */}
        <div className="flex items-center space-x-2 text-sm md:text-base">
          <FaBullhorn className="h-5 w-5 text-yellow-400" />
          <div className="p-1">
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              🚨 Announcement: Admission Open! 🚨
            </Marquee>
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopHeader;