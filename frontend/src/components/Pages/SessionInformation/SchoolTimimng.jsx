import React from 'react';


const Timing = () => {
    return (
        <>
            <section id="page-banner" className="pt-28 pb-44 bg-cover bg-center" style={{ backgroundImage: "url('images/page-banner-11.jpg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner-cont text-center">
                                <h2 className="text-4xl font-bold text-white">Timing</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb flex justify-center space-x-2">
                                        <li className="breadcrumb-item"><a href="index.php" className="text-white hover:text-gray-300">Home</a></li>
                                        <li className="breadcrumb-item active text-gray-300" aria-current="page">School Timing</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact-page" className="pt-16 pb-10 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="row flex flex-wrap">
                        <div className="col-lg-7 w-full lg:w-7/12">
                            <div className="section-title">
                                <h3 className="text-3xl font-bold">School Timing</h3>
                                <h5 className="pt-2 text-xl">Welcome to J.D Global School</h5>
                                <br />
                            </div>
                            <h4 className="text-2xl font-semibold">NURSERY TO UKG</h4>
                            <p className="text-lg">Summer : 7.35 a.m. to 12.30 p.m.</p>
                            <p className="text-lg">Winter : 8.30 a.m. to 1.00 p.m</p>
                            <br />
                            <h4 className="text-2xl font-semibold">CLASS I-XII</h4>
                            <p className="text-lg">Summer : 7.30 a.m. to 1.30 p.m.</p>
                            <p className="text-lg">Winter : 8.00 a.m. to 2.00 p.m.</p>
                        </div>
                        <div className="col-lg-5 w-full lg:w-5/12">
                            <img src="https://jdglobalschool.in/images/about/time.jpg" alt="School Timing" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timing;