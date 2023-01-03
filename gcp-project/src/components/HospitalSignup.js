import React from 'react'

const HospitalSignup = () => {
    return (

        <div className="d-flex align-items-center justify-content-center mt-4">
          <div className="card" style={{width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)'}}>
            <div className="card-header" style={{backgroundColor: 'rgba(0, 83, 83,0.5)'}}>
              <h3 style={{color: '#084545'}}>HOSPITAL DETAILS</h3>
            </div>
            <div id="carouselExampleIndicators" data-bs-interval="false">
              <div>
              </div>
              <div>
                <div>
                  <div className="col p-2">
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control time" id="name" placeholder="Name" aria-label="Name" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Specialization" aria-label="Date" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="pnumber">Contact number(Primary)</label>
                        <input type="number" className="form-control" id="pnumber" placeholder="Education" aria-label="number" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="snumber">Contact number(Secondary)</label>
                        <input type="number" className="form-control" id="snumber" placeholder="Email address" aria-label="number" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="mail">Email Address</label>
                        <input type="text" className="form-control" id="mail" placeholder="Contact number" aria-label="Email" />
                      </div>
                      {/* TO-DO: fETCH HOSPITAL NAMES FROM DATABASE AND SHOW IN DROPDOWN */}
                      <div className="col-8 p-2">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default HospitalSignup