import React from 'react'
import Banner from './../../Banner/Banner';

function Laboratory() {
  const breadcrumbItems = [
    { name: 'Home', link: '/', active: true },
  ];
  return (
    <div>
      <Banner
        title="Laboratory"
        image="images/home-banner.jpg"  // Image for the home page
        breadcrumbItems={breadcrumbItems}
      />
    </div>
  )
}

export default Laboratory