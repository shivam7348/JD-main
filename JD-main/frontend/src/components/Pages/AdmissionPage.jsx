import React from 'react';

const AdmissionPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    };

    return (
        <>
            {/* Page Banner Section */}
            <section className="pt-24 pb-28 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-back-school-banners-set-with-photo_23-2149042680.jpg')" }}>
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white">Admission</h2>
                    </div>
                </div>
            </section>

            {/* Contact and Admission Info Section */}
            <section className="pt-20 pb-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Admission Process */}
                        <div>
                            <h3 className="text-2xl font-bold">JD Global School</h3>
                            <br />
                            <h5 className="text-xl font-semibold">Admission is a 2 step process as follows:</h5>
                            <br />
                            <h5 className="text-lg font-semibold">Step 1- Procuring Prospectus:</h5>
                            <p className="mt-2">It can be collected on payment from the school administrative office on all working days between 8.00 a.m. – 2.00 p.m.</p>
                            <h5 className="text-lg font-semibold mt-4">Step 2- Registration:</h5>
                            <p className="mt-2">The applicant is required to submit the following in the school:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li>1. Duly filled registration form</li>
                                <li>2. Registration Fee;</li>
                                <li>3. Transfer Certificate;</li>
                                <li>4. Photocopy of report card of last two years; and</li>
                                <li>5. Date of Birth Certificate issued by the Municipal Corporation;</li>
                                <li>6. Download Admission Form Here</li>
                            </ul>
                            <a href="images/amizica.pdf" download="Admission Form" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">ADMISSION FORM</a>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h5 className="text-xl font-semibold">Contact Us</h5>
                            <h2 className="text-2xl font-bold mt-2">Keep in touch</h2>
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="mb-4">
                                    <input type="text" name="name" placeholder="Your name" className="w-full p-2 border rounded" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" name="subject" placeholder="Subject" className="w-full p-2 border rounded" required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" name="phone" placeholder="Phone" className="w-full p-2 border rounded" required />
                                </div>
                                <div className="mb-4">
                                    <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" required></textarea>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdmissionPage;