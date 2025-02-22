import React from "react";

const Vission = () => {
  return (
    <>
      {/* Page Banner */}
      <section
        className="pt-28 pb-32 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/page-banner-10.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 text-white text-center">
          <h2 className="text-4xl font-bold">Vision</h2>
          <nav className="flex justify-center mt-4">
            <ol className="flex space-x-2 text-lg">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="text-gray-300">/ Vision</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 px-6">
            <h3 className="text-3xl font-semibold">Vision</h3>
            <h5 className="text-xl mt-2">Welcome to JD GLOBAL School</h5>
            <p className="mt-4 text-gray-700 text-justify">
              We are a proactive school that believes that within each child lies
              the inherent potential that needs nurturing in a harmonious way.
              Instilling a habit of learning to learn is the cornerstone of the
              education we offer. We prepare our children for a rapidly changing
              world by equipping them with critical thinking skills, a global
              perspective, and respect for core values.
            </p>
            <p className="mt-4 text-gray-700 text-justify">
              We are committed to a unique learning approach and an 'Effortless
              Learning' environment that helps children become lifelong
              learners. The school is led and guided by able navigators of
              national and international repute.
            </p>
          </div>
          <div className="md:w-1/3 px-6 mt-6 md:mt-0">
            <img
              src="/images/about/vision.jpg"
              alt="Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Vission;
