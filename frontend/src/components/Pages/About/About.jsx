
const AboutUs = () => {
  return (
    <>
      {/* Search Box */}
      {/* <div className="search-box">
        <div className="search-form">
          <div className="closebtn">
            <span></span>
            <span></span>
          </div>
          <form action="#">
            <input
              type="text"
              placeholder="Search by keyword"
              className="p-2 rounded border"
            />
            <button className="bg-blue-500 p-2 rounded text-white">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div> */}

      {/* Page Banner */}
      {/* <section
        id="page-banner"
        className="pt-24 pb-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(images/page-banner-7.jpg)' }}
      >
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">About Us</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </nav>
        </div>
      </section> */}

      {/* About Us */}
      <section  className="pt-16 pb-6 px-6 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3">
            <div className="section-title mb-8">
              <h3 className="text-3xl font-semibold">About us</h3>
              <h5 className="pt-2 text-xl font-medium text-green-500">
                WELCOME TO J.D GLOBAL SCHOOL
              </h5>
            </div>
            <div className=" text-gray-700 leading-relaxed">
              <p className="text-justify mb-6">
                Our school motto stands for the school's belief that knowledge
                leads to enlightenment and prosperity.
              </p>
              <ul className="list-disc pl-7 space-y-3">
                <li>Our mission "Every great dream begins with a dreamer."</li>
                <li>
                  Established in 2018, under the aegis of Leading Business
                  Houses, JD Global School, Ghaziabad is a CBSE affiliated,
                  Progressive school. Within a short span, this accredited school
                  has earned a reputation as one of NCR's high potential senior
                  secondary schools.
                </li>
                <li>
                  We forge ahead with our vision of preparing students to
                  encounter a rapidly changing world by equipping them with
                  critical thinking skills, a global perspective, and respect for
                  core values.
                </li>
                <li>
                  We are committed to a unique learning approach and an
                  effortless learning environment that helps children become
                  lifelong learners. The school is led and guided by able
                  navigators of national and international repute.
                </li>
                <br />
                <li>
                  The hallmark of JD Global School is the special "Indianness"
                  curriculum, put in place for inculcating values in students that
                  are designed to connect to real life and affect the lives of
                  students. After all, the aim of education is to create good
                  human beings.
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img
              src="/src/components/Slider/sliderImg/slider1.jpg"
              alt="About JD Global School"
              className="w-full rounded-lg shadow-md"
            />
          </div>
         
        </div>
        <button className="">
          Read More
      </button>
      </section>
      

      {/* Counter Section */}
      {/* <div
        id="counter-part"
        className="bg-cover pt-10 pb-28 bg-center"
        style={{ backgroundImage: 'url(images/bg-2.jpg)' }}
      >
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="singel-counter text-center">
              <span className="block text-4xl font-semibold text-white">
                <span className="counter">30,000</span>+
              </span>
              <p className="text-white">Students Enrolled</p>
            </div>
            <div className="singel-counter text-center">
              <span className="block text-4xl font-semibold text-white">
                <span className="counter">41,000</span>+
              </span>
              <p className="text-white">Courses Uploaded</p>
            </div>
            <div className="singel-counter text-center">
              <span className="block text-4xl font-semibold text-white">
                <span className="counter">11,000</span>+
              </span>
              <p className="text-white">People Certified</p>
            </div>
            <div className="singel-counter text-center">
              <span className="block text-4xl font-semibold text-white">
                <span className="counter">39,000</span>+
              </span>
              <p className="text-white">Global Teachers</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutUs;
