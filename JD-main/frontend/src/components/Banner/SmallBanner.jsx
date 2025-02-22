// SmallBanner.js
import React from 'react';

function SmallBanner({ title, image }) {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-500">{title}</h2>
        </div>
      </div>
    </section>
  );
}

export default SmallBanner;
