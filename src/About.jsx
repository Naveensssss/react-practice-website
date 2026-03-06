import React from 'react'

function About() {
    return (
        <>
            <div className="container-fluid about-background">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 text-center text-lg-start text-md-start ms-auto text-secondary">
                        <h1>WHO WE ARE</h1>
                        <h4 className='fw-normal'>At medical health care, we are driven by the zeal to put 'kindness' & 'care' back into modern medical services. our mission is to make medical care easily available to the people in the society and make the cost pocket friendly.</h4>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 d-none d-lg-block d-md-block">
                                <img src="/images/about-coma.svg" alt="" width='100%' />
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-12">
                                <h5 className='fw-normal'>Our team consists of qualified, trained and sensitive doctors and medical staff. We believe that apart from the best quality of medicines and healthcare equipment, it is equally important to train our teams to be humane and compassionate. Our aim is to provide good service to the patients and make people aware of the disease and we provide 24X7 service for any emergency.</h5>
                            </div>
                            <div className="col-lg-1 col-md-1 d-none d-lg-block d-md-block">
                                <img src="/images/about-coma.svg" alt="" width='100%' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block rounded-5">
                        <img src="/images/about-medical.jpg" alt="" width='100%' />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 px-5 mb-4">
                        <div className='border-top border-4 border-info text-secondary shadow text-center py-3 px-2 rounded-3'>
                            <h2>Our Vision</h2>
                            <p>To position oursleves in the lead role on the healthcare map</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 px-5 mb-4">
                        <div className='border-top border-4 border-info text-secondary shadow text-center py-3 px-2 rounded-3'>
                            <h2>Our Mission</h2>
                            <p>To achieve excellence brin health care with evidence based ethical clinical practices by a team of highly skilled professionals using cutting edge technology.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 px-5 mb-4 mx-auto">
                        <div className='border-top border-4 border-info text-secondary shadow text-center py-3 px-2 rounded-3'>
                            <h2>Core Values</h2>
                            <p>To carry the highest standards of integrity, respect, inclusiveness, transparency and adherence to ethical standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About