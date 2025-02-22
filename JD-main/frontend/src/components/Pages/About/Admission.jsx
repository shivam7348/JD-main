// src/components/Admission.js
import React from 'react';
import SmallBanner from '../../Banner/SmallBanner';


const Admission = () => {
  return (
    <>
      {/* <Header /> */}
      <SmallBanner 
        title="About Us" 
        image="images/about/gal11.jpeg" 
      />

      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">JD Global School</h3>
              <h5 className="text-lg font-semibold mb-4">Admission is a 2 step process as follows:</h5>
              <h5 className="text-lg font-semibold mb-2">Step 1- Procuring Prospectus:</h5>
              <p className="mb-4">
                It can be collected on payment from the school administrative office on all working days between 8.00 a.m. – 2.00 p.m.
              </p>
              <h5 className="text-lg font-semibold mb-2">Step 2- Registration:</h5>
              <p className="mb-4">The applicant is required to submit the following in the school:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>1. Duly filled registration form</li>
                <li>2. Registration Fee;</li>
                <li>3. Transfer Certificate;</li>
                <li>4. Photocopy of report card of last two years; and</li>
                <li>5. Date of Birth Certificate issued by the Municipal Corporation;</li>
                <li>6. Download Admission Form Here</li>
              </ul>
              <a
                href="images/amizica.pdf"
                download="Admission Form"
                className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
              >
                ADMISSION FORM
              </a>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
              <h2 className="text-2xl font-bold mb-4">Keep in touch</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Admission;