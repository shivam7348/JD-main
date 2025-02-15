import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const images = [
    'images/gallery/1.jpg',
    'images/gallery/2.jpg',
    'images/gallery/3.jpeg',
    'images/gallery/4.jpg',
    'images/gallery/5.jpg',
    'images/gallery/6.jpg',
    'images/gallery/7.jpg',
    'images/gallery/8.jpg',
    'images/gallery/9.jpg',
    'images/gallery/10.jpg',
    'images/gallery/11.jpg',
    'images/gallery/12.jpg',
  ];

  const thumbs = [
    'images/gallery/gal1.jpeg',
    'images/gallery/gal3.jpeg',
    'images/gallery/gal9.jpeg',
    'images/gallery/gal4.jpeg',
    'images/gallery/gal6.jpeg',
    'images/gallery/gal10.jpeg',
    'images/gallery/gal11.jpeg',
    'images/gallery/gal8.jpeg',
    'images/gallery/gal12.jpeg',
    'images/gallery/gal2.jpeg',
    'images/gallery/gal13.jpeg',
    'images/gallery/gal5.jpeg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section
        className="pt-24 pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('images/page-banner-8.jpg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">Gallery</h2>
            <nav aria-label="breadcrumb">
              <ol className="flex justify-center space-x-2">
                <li className="text-white"><a href="/">Home</a></li>
                <li className="text-white">/</li>
                <li className="text-white" aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="photo-gallery bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">OUR GALLERY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {thumbs.map((thumb, index) => (
              <div
                key={index}
                className="item cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={thumb}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={closeLightbox}
          slides={images.map((image) => ({ src: image }))}
          index={photoIndex}
          on={{
            view: ({ index: currentIndex }) => setPhotoIndex(currentIndex),
          }}
        />
      )}
    </div>
  );
};

export default Gallery;