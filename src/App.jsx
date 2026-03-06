import "./App.css"
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Doctors from "./Doctors";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import LoginAsDoctor from "./LoginAsDoctor";
import LoginAsPatient from "./LoginAsPatient";
import Contact from "./Contact";


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 w-100 px-0">
            <div className="navbar navbar-expand-lg" style={{boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"}}>
              <div className="navbar-brand d-flex align-items-center ms-3">
                <img src="/images/logo.png" width="60px" />
                <h1 className="d-inline ms-3"><b>Medical</b> Health care</h1>
              </div>
              <button className="navbar-toggler">
                <span className="navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#off"></span>
              </button>
              <div className="offcanvas offcanvas-end" id="off" data-bs-backdrop="false">
                <div className="offcanvas-header">
                  <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="nav navbar-nav ms-auto me-3">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link fs-5 fw-bold me-3">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/doctors" className="nav-link fs-5 fw-bold me-3">Doctors</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/route" className="nav-link fs-5 fw-bold me-3">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link fs-5 fw-bold me-3">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link fs-5 fw-bold me-3">Contact Us</NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink to="/login/doctor" className="nav-link fs-5 fw-bold">Login</NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink to="/login" className={()=>window.location.pathname.includes("/login")?"nav-link fs-5 fw-bold active":"nav-link fs-5 fw-bold"}>Login</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/doctors" element={<Doctors></Doctors>}></Route>
          <Route path="/route" element={<Service></Service>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Navigate to="/login/doctor"></Navigate>}></Route>
          <Route path="/login/doctor" element={<LoginAsDoctor></LoginAsDoctor>}></Route>
          <Route path="/login/patient" element={<LoginAsPatient></LoginAsPatient>}></Route>
          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
