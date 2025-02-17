import React from "react";
const ApplicationSection = () => {
  return (
    <section id="apply-aprt" className=" my-20 mx-15 ">
      <div className="container mx-auto px-4">
        <div className="apply">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="apply-cont bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Apply for Fall</h3>
                <p>
                  Whether you’re coming straight out of high school, already
                  enrolled at another university or going back to college, we’ll
                  walk you through the process of becoming a Panther.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="apply-cont bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Apply for Scholarship
                </h3>
                <p>
                  Scholarships are awarded based upon various criteria, such as
                  academic merit, diversity and inclusion, athletic skill,
                  financial need, among others. such as academic merit,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
