import React from 'react'

function cards() {
  return (
    <>
      <div className="background">
        <div className="album ">
          <div className="container">
            <br />
            <br />

            <h1 className="text-center fw-bold text-body-emphasis">Museum Gallery</h1>
            <br />
            <br />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/first.png" className="card-img-top" width="100%" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">This gallery will be a big hit with historians and kids alike, as it contains fossils found in Pakistan from creatures that are now extinct. Some of the fossils are 650 million years old. Complete skeletons of an elephant and a giraffe are also on display in the centre of this gallery.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/second.png" className="card-img-top" width="100%" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">The gallery contains displays of animals, birds, and plants in their natural habitats. The biodiversity in Pakistan is truly showcased here, as the exhibits include species found in the northern alpine ranges, as well as the southern beaches.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/third.png" className="card-img-top" width="100%" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">The Whale Shark is the largest fish in the world. It is a rare species with its population decreasing at an alarming rate. Called a Whale Shark because it resembles a whale in its size and feeding habits, this specimen is nearly 40 foot long and was 50 years old when it was found dead on the coast near Karachi in 2012.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/fourth.png" className="card-img-top" width="100%" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">The Eco Gallery focuses on the lifecycle of plants and animals, as well as the developments of rocks. It showcases rock formations and food chains of animals. It even has a huge tree trunk of a Deodar tree with rings showcasing its age and a detailed account of the weather conditions the tree faced over its lifetime.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/fifth.png" className="card-img-top" width="100%" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">A fish-eating crocodile, the species is found in the northern parts of the River Indus in Pakistan. With a light or dark olive skin and long and thin jaws that are adapted to catch fish, this species has been declared as Critically Endangered by the International Union for Conservation of Nature (IUCN).</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img src="/img/sixth.png" className="card-img-top" width="100vh" height="225" alt="..." />
                  <div className="card-body">
                    <p className="card-text">As stated above, a gigantic blue whale skeleton greets guests at the entrance. The species is native to all the oceans and is among the largest animals to exist on earth. It is an endangered species due to its rapidly dying population.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 text-center background2">
        <h1 className="display-5 fw-bold text-body-emphasis">Baluchitherium</h1>
        <br />
        <br />
        <img src="/img/seventh.png" className="d-block mx-lg-auto mb-4 img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-body-emphasis fw-normal">One of the largest mammals to walk the earth, the Baluchitherium was a hornless rhino that lived nearly 30 million years ago. The name originated from the words ‘Baluchi’ representing Balochistan, and ‘therium’ meaning beast. This is because it was initially discovered in the Bugti Hills in Balochistan. It is said that the mammal was around 18 feet in height. A life-sized model can be found on display in the grounds of the PMNH.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">More Info</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default cards