import React from 'react'
import { Link, NavLink } from 'react-router-dom'
let isHidden = true
function eyeFunc() {
    const eye = document.getElementById("eye")
    const password = document.getElementById("password")
    if (isHidden) {
        eye.classList.remove("fa-eye")
        eye.classList.add("fa-eye-slash")
        password.setAttribute("type", "text")
        isHidden = false
    } else {
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
        password.setAttribute("type", "password")
        isHidden = true
    }
}
function LoginAsPatient() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-8 col-8 mx-auto rounded-4 overflow-hidden" style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                        <div className="row">
                            <div className="col-12 col-lg-5 p-3">
                                <form action="">
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <h3>Login to Patient</h3>
                                        </div>
                                        <div className="col-3 border-bottom border-3 border-info mb-2"></div>
                                        <div className="col-12 mb-2 position-relative">
                                            <input type="text" placeholder='Enter your mobile' className='login-input' />
                                            <i className="fa-solid fa-mobile-screen-button text-info position-absolute top-0 start-0 mt-3 ms-3"></i>
                                        </div>
                                        <div className="col-12 mb-2 position-relative">
                                            <input type="password" placeholder='Enter your Password' className='login-input' id='password' />
                                            <i className="fa-solid fa-lock text-info position-absolute top-0 start-0 mt-3 ms-3"></i>
                                            <i className="fa-solid fa-eye text-info position-absolute top-0 end-0 mt-3 me-3" style={{ cursor: "pointer" }} id='eye' onClick={eyeFunc}></i>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <h6>Forgot Password ?</h6>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <h6>Don't have an account ? Signup</h6>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <input type="submit" value="Login" className='login-btn' />
                                        </div>
                                        <div className="col-12 mb-2">
                                            <NavLink to='/login/doctor'>
                                                <button className='login-btn'>As a Doctor</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-lg-7 p-0 d-none d-lg-block" style={{height: "440px"}}>
                                <img src="/images/login-as-patient.png" alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAsPatient