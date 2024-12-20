import React from 'react'

function Navbar() {
    return (
        <>
            <div class="bg-success-subtle">
                <div className="container">
                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 me-4 ">
                        <div className="col-md-3 mb-2 mb-md-0">
                            <a class="navbar-brand text-body-emphasis fs-5" href="#">
                                <img src="public/img/Pakistan_Museum_of_Natural_History_logo-removebg-preview.jpg" alt="Logo" width="90" height="90" class="d-inline-block mx-2" /> PMNH
                            </a>
                        </div>
 
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 me-5">
                            <li><a href="#" className="nav-link home px-4 text-body-emphasis">Home</a></li>
                            <li><a href="#" className="nav-link home px-4 text-body-emphasis ">About</a></li>
                            <li><a href="#" className="nav-link home px-4 text-body-emphasis ">Museum</a></li>
                            <li><a href="#" className="nav-link home px-4 text-body-emphasis ">Galleries</a></li>
                        </ul>

                        <div className="col-md-3 text-end">
                            <button type="button" className="btn btn-outline-success btn btn-success btnview text-light fs-5 me-3">View Exhibitions</button>
                        </div>
                    </header>
                </div>
            </div>

        </>
    )
}

export default Navbar