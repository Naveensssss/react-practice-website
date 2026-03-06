import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });  // You can set other global AOS options here
      }, []);
    return (
        <>
            <div className="container-fluid home-background mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-8 mb-5" data-aos="fade-right">
                            <h1 className='text-white fw-bold'>Get 10% discount</h1>
                            <h1 className='text-white'>on all appointments* booked and paid online.</h1>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-left">
                        <div className="col-lg-9 col-md-12 col-sm-12 bg-white py-4 px-4 rounded-3">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-5 col-md-5 col-sm-12 position-relative mb-4 mb-lg-0 mb-md-0">
                                        <input type="text" className='form-control home-input' placeholder='Search for doctor or speciality' />
                                        <i class="fa-solid fa-magnifying-glass home-input-icon"></i>
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 position-relative mb-4 mb-lg-0 mb-md-0">
                                        <input type="text" className='form-control home-input' placeholder='Search Location' />
                                        <i class="fa-solid fa-location-dot home-input-icon"></i>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-12">
                                        <input type="submit" className='form-control home-search' value='Search' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h1 className='text-info fw-bold'>Specialities</h1>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-2 border-bottom border-4 border-info mt-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality1.svg" alt="" width='70%' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Cancer Care / Oncology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality2.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Robotic Surgery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality3.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Cardiac Sciences</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality4.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Liver Transplant</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality5.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Joint Replacement</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality6.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Neurosciences</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality7.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Gastroenterlogy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7 col-lg-6 col-md-6">
                                <div className="row mb-3">
                                    <div className="col-3">
                                        <img src="/images/speciality8.svg" alt="" height='50px' />
                                    </div>
                                    <div className="col-9 pt-3 ps-5">
                                        <p className='text-primary'>Thoracic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className='fw-bold text-primary'>View all &gt;</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 position-relative"  style={{overflow: "hidden"}}>
                        <img src="/images/find-doctor.jpg" alt="" height="100%"/>
                        <div className='w-50 position-absolute top-0 mt-4 ms-5'>
                            <h4 className='text-white fw-bold'>Looking for an Expert</h4>
                            <h5 className='text-white'>Medical Healthcare is home to some of the eminent doctors.</h5>
                            <button className='home-btn'>Find a Doctor &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-secondary">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='fw-bold mb-4'>Our Services</h1>
                        <h5 className='fw-normal'>Our medical team in prepared to handle a wide range of medical needs, such as primary care, and specialist consultations. We have the knowledge and experience to meet all of your healthcare needs.</h5>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service1.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Schedule your appointment via call/chat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service2.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Doctors at your home</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service3.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Prolonged, detailed and personalized health check ups</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service4.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Prescribed diagnostic tests available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service5.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Medicines available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="row w-75 mx-auto">
                            <div className="col-12">
                                <img src="/images/service6.png" alt="" width='100%' />
                            </div>
                            <div className="col-12 text-center">
                                <p className='fw-bold mt-3'>Regular and timely follow-ups are done to ensure complete recovery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ boxShadow: "0 -10px 15px -5px rgba(0, 0, 0, 0.2)" }}>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img src="/images/logo.png" alt="" width='70px' />
                            <h4 className='text-primary d-inline ms-3'><b>Medical</b> Health care</h4>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h4 className='mb-2'>Contact Us</h4>
                            <h6 className='fw-normal'>Delhi</h6>
                            <h6 className='fw-normal'>& Noida</h6>
                            <h6 className='fw-normal'>Email: <a href="mailto:info@medicalhealthcare.com">info@medicalhealthcare.com</a></h6>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h4 className='mb-3'>Follow Us</h4>
                            <img src="/images/insta.png" alt="" width="50px" className='me-3' />
                            <img src="/images/facebook.png" alt="" width="45px" className='me-3' />
                            <img src="/images/youtube.png" alt="" width="60px" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home