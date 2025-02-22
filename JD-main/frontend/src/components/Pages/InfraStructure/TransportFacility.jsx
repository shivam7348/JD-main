import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bus1 from "./transportImg/bus1.jpg"
import bus2 from "./transportImg/bus2.jpg"


const TransportFacility = () => {
  // Sample data for transport facilities
  const transportData = [
    {
      id: 1,
      title: "School Buses",
      description: "Safe and reliable school buses with GPS tracking.",
      image: bus1, // Replace with your image URL
    },
    {
      id: 2,
      title: "Pickup & Drop",
      description: "Convenient pickup and drop services for students.",
      image: bus2, // Replace with your image URL
    },
    {
      id: 3,
      title: "Safety Measures",
      description: "Trained drivers and safety protocols for all vehicles.",
      image: "https://via.placeholder.com/400x200", // Replace with your image URL
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } },
  };

  return (
    <>
      <section
        className="pt-24 pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('images/page-banner-8.jpg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Transport Facilities</h2>
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center space-x-2 my-3">
                <li className="text-white"><Link to="/">Home</Link></li>
                <li className="text-white">/</li>
                <li className="text-white" aria-current="page">Transport </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transportData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    </>
    
    
  );
};

export default TransportFacility;