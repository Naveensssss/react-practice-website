import React from 'react'

function Contact() {
    return (
        <>
            <div className="container-fluid contact-background mb-4"></div>
            <div className="container p-3">
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-6 mb-4">
                        <div className='rounded-4 px-3 py-4' style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                            <h2 className='text-secondary mb-4'>HOW WE CAN HELP YOU?</h2>
                            <ul className='list-unstyled' style={{ fontSize: "17px" }}>
                                <li className='mb-4'>Welcome to Medical Health care! Ensuring your health is our priority.</li>
                                <li className='mb-4'>Schedule your consultation with our expert physicians and specialists effortlessly. Simply choose your preferred date, time, and department.</li>
                                <li className='mb-4'>Our dedicated team will confirm your appointment promptly.</li>
                                <li className='mb-4'><img src="images/location.png" alt="" width="50px" /> Location Delhi 110094</li>
                                <li className='mb-4'><img src="images/call.png" alt="" width="50px" />
                                    <a href="tel: +91-120-95828448" className='text-decoration-none text-dark'>+91-120-95828448</a>
                                </li>
                                <li><img src="images/mail.png" alt="" width="50px" />
                                    <a href="mailto: info@medicalhealthcare.com" className='text-decoration-none text-dark'>info@medicalhealthcare.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 px-lg-5 py-lg-3">
                        <div>
                            <h2 className='text-secondary mb-3'>Quick Enquiry</h2>
                            <form action="">
                                <input type="text" name='name' placeholder='Name' className='form-control mb-3 contact-input' />
                                <input type="email" name='email' placeholder='E-mail' className='form-control mb-3 contact-input' />
                                <input type="tel" name='phone' placeholder='Phone' className='form-control mb-3 contact-input' />
                                <textarea name="message" placeholder='Message' id="" rows="4" className='form-control mb-3 contact-input'></textarea>
                                <input type="submit" value="Send Now" className='contact-btn' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact