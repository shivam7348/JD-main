import React from "react";


const categories = [
  { id: 1, name: "Music Class", img: "https://jdglobalschool.in/images/all-icon/ctg-1.png", color: "bg-blue-500" },
  { id: 2, name: "Sports Class", img: "https://jdglobalschool.in/images/all-icon/ctg-2.png", color: "bg-green-500" },
  { id: 3, name: "Library", img: "https://jdglobalschool.in/images/all-icon/ctg-2.png", color: "bg-yellow-500" },
  { id: 4, name: "Dance Class", img: "https://jdglobalschool.in/images/all-icon/ctg-5.jpg", color: "bg-red-500" },
  { id: 5, name: "Computer Class", img: "https://jdglobalschool.in/images/all-icon/ctg-6.jpg", color: "bg-purple-500" },
];

const CategorySection = () => {
  return (
    <section id="category-part" className="py-12  mx-20">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Best platform to learn everything</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className={`w-36 sm:w-44 md:w-48 lg:w-52 flex flex-col items-center p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${category.color}`}
            >
              <img src={category.img} alt={category.name} className="w-30 h-20 mb-2 object-fit" />
              <span className="text-white text-lg font-semibold">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
