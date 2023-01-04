import React , {useRef}from 'react'
import '../../Styles/VisitStyle.css'
import '../../Styles/UpdatePatientStyle.css'

export default function Visit() {

  const medicine = useRef();

  return (
    <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="card" style={{width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)'}}>
            <div className="card-header" style={{backgroundColor: 'rgba(0, 83, 83,0.5)'}}>
              <h3 style={{color: '#084545'}}>PATIENT VISIT DETAILS</h3>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active " aria-current="true" style={{backgroundColor: '#005353'}} />
                <button type="button" style={{backgroundColor: '#005353'}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col p-2">
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <label htmlFor="visit_time">Time</label>
                        <input type="time" className="form-control time" id="visit_time" placeholder="Time" aria-label="Time" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="visit_date">Date</label>
                        <input type="date" className="form-control" id="visit_date" placeholder="Date" aria-label="Date" />
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <label htmlFor="visit_time">Enter Medicine</label>
                        <input type="text" className="form-control" placeholder="Medicine" aria-label="Medicine" style={{ backgroundColor: 'white' }}/>
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2 text-center">
                        <button className="btn">Add medicine</button>
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="d-flex align-items-center">
                        <table className="table text-center" id="table" style={{display: 'flex', justifyContent: 'space-around'}}>
                          <tbody><tr>
                              <th>
                                <div className="form-check form-check-inline">
                                  <input type="checkbox" className="form-check-input" id="morning" defaultValue="option1" />
                                  <label className="form-check-label" htmlFor="morning">Morning</label>
                                </div>
                              </th>
                              <th>
                                <div className="form-check form-check-inline">
                                  <input type="checkbox" className="form-check-input" id="afternoon" defaultValue="option2" />
                                  <label className="form-check-label" htmlFor="afternoon">Afternoon</label>
                                </div>
                              </th>
                              <th>
                                <div className="form-check form-check-inline">
                                  <input type="checkbox" className="form-check-input" id="night" defaultValue="option3" />
                                  <label className="form-check-label" htmlFor="night">Night</label>
                                </div>
                              </th>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-8 p-2">
                        <div className="input-group ">
                          <select className="custom-select text-muted form-control" id="test">
                            <option selected>Select Tests</option>
                            <option>Blood Test</option>
                            <option>X-Ray</option>
                            <option>many more</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2 text-center">
                        <button className="btn">Add Tests</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center p-2">
                    <div className="col">
                      <div className="row p-2 justify-content-center">
                        <div className="col-8 p-2">
                          <textarea className="form-control" id="textarea" rows={5} placeholder="Doctor's Remarks" defaultValue={""} />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="row">
                          <button className="btn mb-3">Submit</button>
                          {/* <a href="#" class="btn btn-primary">Update</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{backgroundColor: '#005353'}}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{backgroundColor: '#005353'}}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div></div>
    </div>
  )
}
