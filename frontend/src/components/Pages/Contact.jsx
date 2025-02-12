
import { MdAttachEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">Keep in touch</p>

          <form>
            <div className="mb-6">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="tel"
                placeholder="Enter Your No"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/2 bg-blue-50 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Address</h2>
          <p className="text-gray-700 mb-4">
            <span><FaHome/></span> 226, Sai Enclave, Nandgram, Opp. KM Residency, Raj Nagar Extn., Ghaziabad-201003
          </p>
          <p className="text-gray-700 mb-4"> <span><FaPhoneAlt/></span>Phone: 8882229658</p>
          <p className="text-gray-700"> <span><MdAttachEmail/></span>Email: jdglobalschool@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;