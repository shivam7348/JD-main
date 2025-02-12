import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const TopHeader = () => {
  return (
    <header className="bg-blue-800 text-white p-2">
      <div className="flex flex-wrap items-center justify-center md:justify-between px-4 text-center">
        
        {/* Address Section */}
        <div className="flex items-center space-x-2 text-sm md:text-base md:w-1/2 justify-center md:justify-start">
          <FaMapMarkerAlt className="h-5 w-5 text-red-400" />
          <span className="p-1">
            226, Sai Enclave, Nandgram, Opp. KM Residency, Raj Nagar Extn, Ghaziabad-201003
          </span>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-2 mt-2 md:mt-0 md:w-1/2 justify-center md:justify-end">
          <FaEnvelope className="h-6 w-6 cursor-pointer text-blue-300 hover:text-blue-400" />
          <span className="text-sm md:text-base">jdglobal.school@gmail.com</span> {/* Add Email */}
        </div>

      </div>
    </header>
  );
};

export default TopHeader;
