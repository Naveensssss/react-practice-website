import React from 'react'

function Doctors() {
    const cardContent = [
        { img: "/images/doctor1.avif", name: "Dr Ruchi Goyal", post: "Vice Chairman - Medical Oncology (Breast, Gynaecology, Thoracic)", specialities: "Cancer Care / Oncology, Gynecologic Oncology, Thoracic Oncology, Medical Oncology, Breast Cancer", experience: "12+ Years", gender: "Female" },
        { img: "/images/doctor2.jpg", name: "Dr Swati Mishra", post: "Director - Nephrology", specialities: "Nephrology, Kidney Transplant", experience: "14+ Years", gender: "Female" },
        { img: "/images/doctor3.jpg", name: "Dr. Naveen Kumar", post: "Principal Director - Interventional Cardiology", specialities: "Cardiac Sciences, Cardiology, Interventional Cardiology, Cardiac Electrophysiology-Pacemaker", experience: "8+ Years", gender: "Male" },
        { img: "/images/doctor4.jpg", name: "Dr. Sunil Chaudhary", post: "Principal Director, Chief Surgeon & Head - Neonatal & Congenital Heart Surgery", specialities: "Cardiac Sciences, Paediatrics (Ped), Paediatric (Ped) Cardiac Surgery", experience: "11+ Years", gender: "Male" },
        { img: "/images/doctor5.jpg", name: "Dr. Keshav Dewan", post: "Principal Director (Critical Care) & Director (Internal Medicine)", specialities: "Internal Medicine, Critical Care", experience: "10+ Years", gender: "Male" },
        { img: "/images/doctor6.jpg", name: "Dr. Anushka Das", post: "Director & HOD - Ophthalmology", specialities: "Eye Care / Ophthalmology", experience: "15+ Years", gender: "Female" },
        { img: "/images/doctor7.jpg", name: "Dr. Saket Bhardwaj", post: "Director - Surgical Oncology (Head & Neck)", specialities: "Surgical Oncology, Cancer Care / Oncology, Head & Neck Oncology", experience: "13+ Years", gender: "Male" },
        { img: "/images/doctor8.jpg", name: "Dr. Kanika Gupta", post: "Director Surgical Oncology (Gynae & Robotic Surgery)", specialities: "Surgical Oncology, Cancer Care / Oncology, Gynecologic Oncology, Robotic Surgery, Gynaecologic Laparoscopy", experience: "8+ Years", gender: "Female" },
    ]
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <form action="">
                            <div className="row">
                                <div className="col-12 col-lg-4 col-md-4 mb-4 d-flex align-items-end">
                                    <input type="search" placeholder='Search by Doctor' className='form-control doctor-input' />
                                </div>
                                <div className="col-12 col-lg-3 col-md-3 mb-4 offset-lg-5 offset-md-5">
                                    <h5 className='text-primary'>Filters</h5>
                                    <button className="doctor-filter" data-bs-toggle="dropdown" data-bs-target="#filter">
                                        Speciality
                                        <i class="fa-solid fa-caret-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" id='filter' style={{width: "260px"}}>
                                        <li className='ps-2 py-1'>Search</li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Skin" className='form-check-input' />
                                            <label htmlFor="Skin" className='form-label'>Skin</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Aesthetic-and-Reconstructive-surgery" className='form-check-input' />
                                            <label htmlFor="Aesthetic-and-Reconstructive-surgery" className='form-label'>Aesthetic and Reconstructive surgery</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Allergy" className='form-check-input' />
                                            <label htmlFor="Allergy" className='form-label'>Allergy</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Anasthesia" className='form-check-input' />
                                            <label htmlFor="Anasthesia" className='form-label'>Anasthesia</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Arthroscopy-&-Sports-Injury" className='form-check-input' />
                                            <label htmlFor="Arthroscopy-&-Sports-Injury" className='form-label'>Arthroscopy & Sports Injury</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Audiology" className='form-check-input' />
                                            <label htmlFor="Audiology" className='form-label'>Audiology</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Bariatric-Surgery/Metabolic" className='form-check-input' />
                                            <label htmlFor="Bariatric-Surgery/Metabolic" className='form-label'>Bariatric Surgery/Metabolic</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Bone-Marrow-Transplant" className='form-check-input' />
                                            <label htmlFor="Bone-Marrow-Transplant" className='form-label'>Bone Marrow Transplant</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Breast-Cancer" className='form-check-input' />
                                            <label htmlFor="Breast-Cancer" className='form-label'>Breast Cancer</label>
                                        </li>
                                        <li className='ps-2 py-1'>
                                            <input type="checkbox" name="speciality" id="Cance-Care/Oncology" className='form-check-input' />
                                            <label htmlFor="Cance-Care/Oncology" className='form-label'>Cance Care/Oncology</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h4 className='text-primary'>Doctors Available</h4>
                    </div>
                    {cardContent.map((item, b) => {
                        return (<div className="col-12 col-lg-6 col-md-6 mb-4" key={b}>
                            <div className='rounded-3 p-4' style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={item.img} alt="" width="100%" className='rounded-3' />
                                    </div>
                                    <div className="col-9" style={{ minHeight: "160px" }}>
                                        <h5 className='text-primary'>{item.name}</h5>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>{item.post}</p>
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}>{item.specialities}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5">
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}><b>Experience: </b>{item.experience}</p>
                                    </div>
                                    <div className="col-6 col-lg-5 offset-1 offset-lg-2 text-end">
                                        <p style={{ fontSize: "14px", fontWeight: "500" }}><b>Gender: </b>{item.gender}</p>
                                        <button className='doctor-btn' style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px" }}>Book an Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Doctors