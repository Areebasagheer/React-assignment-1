import React from 'react'

function Heros() {
    return (
        <>
            <div className="background">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="public/img/museum.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pakistan Museum of Natural History</h1>
                            <p className="lead text-body-emphasis fs-5 fw-normal">The Pakistan Museum of Natural History (PMNH) Islamabad, was established in 1976, under the Science Foundation (Ministry of Science and Technology, Government of Pakistan). The museum has four divisions, namely Botany, Zoological, Earth Sciences and Public Services.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-outline-success btn-lg px-4 me-md-2">History</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heros