// Banner.js
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, image, breadcrumbItems }) => {
  return (
    <section
      id="page-banner"
      className="pt-28 pb-44 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,  // dynamic background image
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-banner-cont text-left mt-10">
              <h2 className="text-4xl font-bold text-white ml-4">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex justify-center space-x-2">
                  {breadcrumbItems.map((item, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${item.active ? 'text-gray-300' : ''}`}
                    >
                      <Link
                        href={item.link}
                        className="text-white hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
