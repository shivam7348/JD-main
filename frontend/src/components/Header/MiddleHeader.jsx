import { useState } from "react";

const MiddleHeader = () => {
    const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 shadow-md z-20 ">
    {/* Left Side - Logo & Name */}
    <div className="flex flex-col md:flex-row items-center mx-auto text-center md:text-left">
      <img
        src="https://jdglobalschool.in/images/logo.jpeg"
        alt="Logo"
        className="h-16 md:h-20 w-auto"
      />
      <span className="text-2xl md:text-4xl font-semibold mt-2 md:mt-0 md:ml-5 text-red-800">
        J.D GLOBAL SCHOOL
      </span>
    </div>
  
    {/* Right Side - Mobile Number & Admission Button */}
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-3 md:mt-0">
      <img
        src="https://jdglobalschool.in/images/all-icon/support.png"
        alt="Support Icon"
        className="h-6 w-6"
      />
      <span className="text-base md:text-lg font-semibold text-gray-700">
        📞 8882229658
      </span>
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-blue-800"
        onClick={() => setShowForm(true)}
      >
        ADMISSION
      </button>
    </div>
  
    {/* Admission Form Modal */}
    {showForm && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Admission Form</h2>
          <form>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter your name"
            />
  
            <label className="block mb-2">Mobile Number:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter your mobile number"
            />
  
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter your email"
            />
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
  
          <button
            className="mt-4 w-full text-center text-red-600"
            onClick={() => setShowForm(false)}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default MiddleHeader;
