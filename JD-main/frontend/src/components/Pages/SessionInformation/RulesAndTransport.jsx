import React from 'react';
import Banner from '../../Banner/Banner';


const RulesAndTransport = () => {
    const breadcrumbItems = [
        { name: 'Home', link: '/', active: true },
      ];
    return (
        <>
            {/* Page Banner Section */}
            <Banner 
        title="Rules and Transport" 
        image="images/home-banner.jpg"  // Image for the home page
        breadcrumbItems={breadcrumbItems} 
      />

            {/* School Transport Section */}
            <section id="contact-page" className="pt-16 pb-10 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-wrap">
                        {/* Left Column */}
                        <div className="col-lg-7 w-full lg:w-7/12">
                            <div className="section-title">
                                <h3 className="text-3xl font-bold">School Transport</h3>
                                <h5 className="pt-2 text-xl">Welcome to ADPS Public School</h5>
                                <br />
                            </div>
                            <p className="text-lg mb-4">1. School bus routes are drawn up based on convenience and demand while ensuring that no route is too long. Parents should consult the School's transport in-charge for necessary details.</p>
                            <p className="text-lg mb-4">2. Students are not allowed to sit in parked buses during school hours.</p>
                            <p className="text-lg mb-4">3. A student using the School bus is expected to be at the bus stop at least five minutes before the scheduled arrival of the bus.</p>
                            <p className="text-lg mb-4">4. Students are issued two identity cards (Student's I-card and parent's I card i.e. the student I card should be worn by the student before boarding the bus and be worn at all times till the completion of the return journey. The student will be handed over only to the parents at the given bus stop and in the absence of parents the authorized person should carry parents I card on the basis of which the student will be handed over.</p>
                            <p className="text-lg mb-4">5. Students are allowed to use only their allotted bus and bus stop. No change will be allowed without prior permission of the school in writing.</p>
                            <p className="text-lg mb-4">6. Buses will not wait for late-comers.</p>
                            <p className="text-lg mb-4">7. If a student misses her / his allotted bus, he / she should not try to board any other bus. It is the responsibility of parents to drop their wards to the school. Such students may however, return by their allotted bus.</p>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-5 w-full lg:w-5/12">
                            <img src="images/about/fee.jpg" alt="School Transport" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Additional Rules Section */}
                    <div className="row mt-8">
                        <div className="col-lg-12 w-full">
                            <p className="text-lg mb-4">8. All students must occupy the seats immediately after boarding their respective buses. The reservation of seats for co-commuters is not allowed under any circumstances.</p>
                            <p className="text-lg mb-4">9. No student should travel standing on the footboard.</p>
                            <p className="text-lg mb-4">10. Students must not move around when the buses in motion.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RulesAndTransport;