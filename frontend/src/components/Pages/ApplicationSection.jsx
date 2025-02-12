
const ApplicationSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-6">
        {/* Apply for Fall Section */}
        <div className="flex-1 bg-blue-100 p-6 rounded-lg shadow-md min-w-[300px]">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Apply for Fall</h2>
          <p className="text-gray-700">
            Whether you’re coming straight out of high school, already enrolled at another university, or going back to college, we’ll walk you through the process of becoming a Panther.
          </p>
        </div>

        {/* Apply for Scholarship Section */}
        <div className="flex-1 bg-green-100 p-6 rounded-lg shadow-md min-w-[300px]">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Apply for Scholarship</h2>
          <p className="text-gray-700">
            Scholarships are awarded based upon various criteria, such as academic merit, diversity and inclusion, athletic skill, financial need, among others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;