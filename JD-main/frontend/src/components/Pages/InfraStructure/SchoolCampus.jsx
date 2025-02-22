import React from 'react'
import Banner from './../../Banner/Banner';

function SchoolCampus() {
  const breadcrumbItems = [
    { name: 'Home', link: '/', active: true },
  ];
  return (
    <div>
      <Banner 
        title="Welcome to Our School" 
        image="images/home-banner.jpg"  // Image for the home page
        breadcrumbItems={breadcrumbItems} 
      />
     
    </div>
  )
}

export default SchoolCampus