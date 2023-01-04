import React from 'react'

const DoctorSignup = () => {
    return (

        <div className="d-flex align-items-center justify-content-center mt-4">
          <div className="card" style={{width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)'}}>
            <div className="card-header" style={{backgroundColor: 'rgba(0, 83, 83,0.5)'}}>
              <h3 style={{color: '#084545'}}>DOCTOR DETAILS</h3>
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
                        <input type="text" className="form-control time" id="name" placeholder="Name" aria-label="Time" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="spec">Specialization</label>
                        <input type="text" className="form-control" id="spec" placeholder="Specialization" aria-label="Date" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="edu">Education</label>
                        <input type="text" className="form-control" id="edu" placeholder="Education" aria-label="Date" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="mail">Email address</label>
                        <input type="mail" className="form-control" id="mail" placeholder="Email address" aria-label="Date" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="contact">Contact number</label>
                        <input type="text" className="form-control" id="contact" placeholder="Contact number" aria-label="Date" />
                      </div>
                      {/* TO-DO: fETCH HOSPITAL NAMES FROM DATABASE AND SHOW IN DROPDOWN */}
                      <div className="col-8 p-2">
                        <label htmlFor="hosp">Hospital</label>
                        <input type="text" className="form-control" id="hosp" placeholder="Name of Hospital" aria-label="Date" />
                      </div>
                        <div className="col-8 p-2 text-center">
                            <button type="submit" className="btn" style={{backgroundColor:'#227373', color:'white'}}>Submit</button>
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

export default DoctorSignup