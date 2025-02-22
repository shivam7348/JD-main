import React from "react";

const Contact = () => {
  return (
    <section id="contact-page" className="py-12 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h5 className="text-lg font-semibold">Contact Us</h5>
              <h2 className="text-2xl font-bold">Keep in touch</h2>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="p-3 w-full border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 w-full border rounded"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="p-3 w-full border rounded"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="p-3 w-full border rounded"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
                className="p-3 w-full border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold">Address</h5>
            <p className="text-gray-600">
              If you have any further questions, please don’t hesitate to
              contact us.
            </p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-3">
                <i className="fa fa-home text-blue-500"></i>
                <p>
                  Munshi Harpal Singh Colony, Shahpur Bamheta, Lal Kuan,
                  Ghaziabad.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa fa-phone text-blue-500"></i>
                <a
                  href="tel://9899275937"
                  className="text-blue-500 hover:underline"
                >
                  9899275937
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa fa-envelope-o text-blue-500"></i>
                <a
                  href="mailto:info@adpsschool.in"
                  className="text-blue-500 hover:underline"
                >
                  info@adpsschool.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
