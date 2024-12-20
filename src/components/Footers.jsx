import React from 'react'

function Footers() {
    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 ">
                        <div className="col mb-3">
                            <div classNameName="col-md-3 mb-2 mb-md-0">
                                <a className="navbar-brand" href="#">
                                    <img src="public/img/Pakistan_Museum_of_Natural_History_logo-removebg-preview.jpg" alt="Logo" width="90" height="90" className="d-inline-block" /> <h6 className="footers">Pakistan Museum of Natural History</h6>
                                </a>
                            </div>
                        </div>

                        <div className="col mb-3">
                        </div>

                        <div className="col mb-3">
                            <h5>About PMNH</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">History</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Objectives</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Activities</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Major Equipments</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Jobs & Tenders</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pension Cell</a></li>
                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h5>Important Links</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Ministry of Science & Technology <br /> (MoST)Government of Pakistan</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pakistan Science Foundation (PSF)</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pakistan Scientific and Technological <br /> Information Center (PASTIC)</a></li>

                            </ul>
                        </div>

                        <div className="col mb-3">
                            <h5>News & Media</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">MoU signed</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Site Map</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Downloads</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>

                <div className=" bg-black ">
                    <div className="container ">
                        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 " >
                            <p className="col-md-4 mb-0 fw-normal text-light">&copy;2023 Pakistan Museum of Natural History,Islamabad. All Rights Reserved.</p>

                            <ul className="nav col-md-4 justify-content-end">
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQ </a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Contact Us </a></li>

                            </ul>
                        </footer>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footers