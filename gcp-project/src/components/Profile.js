import React from 'react'
import sample from '../images/sample.png'
import './Profile.css'

export default function Profile() {
  return (
    <>
    <div>
        <div className="row">
          <nav className="navbar navbar-light" style={{backgroundColor: '#009999', opacity: '0.5', height: '3rem'}}>
          </nav>
        </div>
        <div className="container mt-3">
          <div className="row row-cols-3">
            <div className="col-sm-5 p-3" style={{width: '40%'}}>
              <div className="card mt-3" style={{width: '18rem', borderRadius: '10%'}}>
                <div className="text-center mt-2">
                  <img src={sample} style={{height: '10rem', width: '10rem'}} className="card-img-top" alt="..." />
                </div>
                <div className="card-body text-center mb-4">
                  <h5>XYZ</h5>
                  <h6 className="text-muted">Age: 34</h6>
                  <button type="button" className="btn" style={{backgroundColor: '#009999', color: 'white'}}>Update</button>
                </div>
              </div>
              <div className="card mt-4" style={{width: '18rem', borderRadius: '10%'}}>
                <div className="card-body text-center">
                  <p className="card-text">
                  </p><table className="table" id="lef">
                    <tbody>
                      <tr>
                        <th scope="row" style={{fontFamily: '"Quicksand", sans-serif'}}>Name</th>
                        <td>Mark</td>
                      </tr>
                      <tr>
                        <th scope="row">Age</th>
                        <td>34</td>
                      </tr>
                      <tr>
                        <th scope="row">Gender</th>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <th scope="row">Patient ID</th>
                        <td>113456</td>
                      </tr>
                      <tr>
                        <th scope="row">Blood Group</th>
                        <td>O+</td>
                      </tr>
                      <tr>
                        <th scope="row">Height</th>
                        <td>170 cm</td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td>70 Kg</td>
                      </tr>
                      <tr>
                        <th scope="row">Last visit</th>
                        <td>29-03-2022</td>
                      </tr>
                    </tbody>
                  </table>
                  <p />
                </div>
              </div>
            </div>
            {/* <div class="container"> */}
            <div className="col p-4">
              {/* <div class="card" style="width:43rem; height: 320px;"> */}
              {/* <h4 style="color: #004d4d;">VITALS</h4> */}
              <div className="container p-2" style={{width: '45rem'}}>
                <div className="card">
                  <div className="card-header fw-bold" style={{color: '#004d4d'}}>
                    VITALS
                  </div>
                  <div className="row mx-4 p-3">
                    {/* <div class="card" style="width:130px; height:130px; border-radius: 10%; text-align: center;"> */}
                    <div className="col-4">
                      <div className="card temp">
                        <i className="uil uil-heartbeat icon heart" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>Heart Rate
                        </h6>
                        <p className="readings fw-bold " style={{color: '#004d4d', fontSize: '15px'}}>72 bpm
                        </p>
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="col-4">
                      <div className="card temp">
                        <i className="uil uil-heart-rate icon" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>Pulse</h6>
                        <p className="readings fw-bold" style={{color: '#004d4d', fontSize: '15px'}}>80 bpm
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card temp">
                        <i className=" uil uil-stethoscope-alt icon" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>Blood
                          Pressure</h6>
                        <p className="readings fw-bold" style={{color: '#004d4d', fontSize: '15px'}}>130/75mm
                          Hg</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mx-4 p-3">
                    <div className="col-4">
                      <div className="card temp">
                        <i className="uil uil-tear icon" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>Glucose</h6>
                        <p className="readings fw-bold" style={{color: '#004d4d', fontSize: '15px'}}>130mg/dL
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card temp">
                        <i className="uil uil-medical-square-full icon" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>SpO2</h6>
                        <p className="readings fw-bold" style={{color: '#004d4d', fontSize: '15px'}}>90%</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card temp">
                        <i className="uil uil-temperature-half icon" />
                        <h6 className="fw-semibold" style={{color: '#004d4d', fontSize: '15px'}}>Temperature
                        </h6>
                        <p className="readings fw-bold" style={{color: '#004d4d', fontSize: '15px'}}>98.5°F
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container p-2" style={{width: '45rem', height: '15rem'}}>
                <div className="accordion" id="accordionExample" style={{height: '40rem'}}>
                  <div className="accordion-item" style={{color: '#004d4d'}}>
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: '#004d4d'}}>
                        PRESCRIPTIONS
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="One" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="col">
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              21.12.22 (Wednesday)
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              15.12.22 (Thursday)
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              27.11.22 (Saturday)
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              20.11.22 (Saturday)
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              01.11.22 (Monday)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: '#004d4d'}}>
                        PERSONAL DOCUMENTS
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="col">
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              Birth Certificate
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              Aadhar Card
                            </a>
                          </div>
                          <div className="row">
                            <a download  className="link" style={{color: '#004d4d'}}>
                              <i className="uil uil-file-download-alt icon" style={{fontSize: '20px'}} />
                              Insurance Documents
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* <div class="overflow-auto"> */}
            </div>
          </div>
          {/* calender */}
          <div className="container">
            <h5 className="fw-bold fs-2 p-2 text-center" style={{color: '#004d4d'}}>VISITS</h5>
            <section>
              <div className="calendar-container card p-4" style={{borderRadius: '10%'}}>
                <div id="calendar" style={{backgroundColor: 'white', padding: '1rem'}}>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
