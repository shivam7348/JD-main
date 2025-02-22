import React from "react";

const SchoolTransport = () => {
  return (
    <>
      {/* Page Banner */}
      <section
        className="relative pt-28 pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/page-banner-12.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative z-10 mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Rules of Code And Conduct</h2>
          <nav className="mt-2">
            <ol className="flex justify-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li className="text-white">/ Rule of Code And Conduct</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* School Transport Rules */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold">School Transport</h3>
              <h5 className="pt-2 text-lg font-semibold">
                Welcome to ADPS Public School
              </h5>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>
                  School bus routes are drawn up based on convenience and
                  demand.
                </li>
                <li>
                  Students are not allowed to sit in parked buses during school
                  hours.
                </li>
                <li>
                  Be at the bus stop at least five minutes before the bus
                  arrives.
                </li>
                <li>
                  Students must wear their identity card before boarding the bus
                  and keep it on throughout the journey.
                </li>
                <li>
                  Only allotted buses and stops can be used unless permitted in
                  writing.
                </li>
                <li>Buses will not wait for late-comers.</li>
                <li>
                  If a student misses their bus, parents must drop them at
                  school.
                </li>
                <li>
                  Students must take their seats immediately after boarding.
                </li>
                <li>No student should travel standing on the footboard.</li>
                <li>Students must remain seated while the bus is in motion.</li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/images/about/fee.jpg"
                alt="School Transport"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolTransport;
