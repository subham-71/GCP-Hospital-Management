import React from 'react'
import "./Styles/HospitalProfile.css"

const Hospital = () => {
    return (

        <div className="container">
          <div className="row">
            <div className="col-md-5">
              {/* <div class="row" id="heading" style="text-align: center;">
                              <h1>RESOURCES AVAILABLE</h1>
                          </div> */}
              <div className="row mt-5" id="kkkl">
                <div className="card card-deck h-90 m-lg-1" id="prof">
                  {/* <div class="picds">
                              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                                  class="card-img-top" id="pic" alt="...">
  
                          </div> */}
                  <div className="card-body">
                    <h5 className="card-title">INFORMATION</h5>
                    <p className="card-text">
                    </p><table className="table" id="lef">
                      <tbody>
                        <tr>
                          <th scope="row">Name</th>
                          <td>ABC Hospital</td>
                        </tr>
                        <tr>
                          <th scope="row">Address</th>
                          <td>Kumaran Colony, Chennai,Bengaluru,660056, India</td>
                        </tr>
                        {/* <tr>
                                          <th scope="row">City</th>
                                          <td>Ambala</td>
                                      </tr> */}
                        {/* <tr>
                                          <th scope="row">State</th>
                                          <td>Haryana</td>
                                      </tr>
                                      <tr>
                                          <th scope="row">Country</th>
                                          <td>India</td>
                                      </tr> */}
                        <tr>
                          <th scope="row">Contact number (Primary)</th>
                          <td>8886786881</td>
                        </tr>
                        <tr>
                          <th scope="row">Contact number (Secondary)</th>
                          <td>8888888546</td>
                        </tr>
                        <tr>
                          <th scope="row">Email</th>
                          <td>yuckkkk@hhh.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-1 text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{backgroundColor: '#0b596d'}}>
                  <h3 className="mb-0">DOCTORS AVAILABLE</h3>
                </div>
                <div className="table-responsive ">
                  <table className="table align-items-center table-flush" id="ab">
                    <thead className="thead-light" style={{width: '100%'}}>
                      <tr style={{width: '100%'}}>
                        <th scope="col" style={{width: 'calc(100%/3)'}} />
                        <th scope="col" style={{width: 'calc(100%/3)'}} />
                        <th scope="col" style={{width: 'calc(100%/3)'}} />
                        <th scope="col" style={{width: 'calc(100%/3)'}} />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>Jane Andre</b></div>
                          <small className="form-text" style={{fontSize: '12px'}}>Dentist</small>
                        </td>
                        <td>
                          <button className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{backgroundColor: '#0b596d'}}>
                  <h3 className="mb-0">RECENT APPOINTMENTS</h3>
                </div>
                <div className="table-responsive ">
                  <table className="table align-items-center table-flush" id="ab">
                    <thead className="thead-light" style={{width: '100%'}}>
                      <tr style={{width: '100%'}}>
                        <th scope="col" style={{width: 'calc(100%/6)'}}>Doctor</th>
                        <th scope="col" style={{width: 'calc(100%/6)'}}>Patients</th>
                        <th scope="col" style={{width: 'calc(100%/6)'}}>Speciality</th>
                        <th scope="col" style={{width: 'calc(100%/5)'}}>Timings</th>
                        <th scope="col" style={{width: 'calc(100%/5)'}}>Days</th>
                        <th scope="col" style={{width: 'calc(100%/5)'}}>Amount</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Jane Andre
                        </th>
                        <td>
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Romina Hadid">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-2.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Alexander Smith">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-3.jpg" className="rounded-circle" />
                            </a>
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Jessica Doe">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </td>
                        <td>
                          Dentist
                        </td>
                        <td>
                          8:00 A.M.- 12:00P.M.
                        </td>
                        <td>
                          Monday, Thursday, Saturday
                        </td>
                        <td>
                          $1200.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col text-center text-white" id="tbb">
                  <div className="card shadow">
                    <div className="card-header border-0" style={{backgroundColor: '#0b596d'}}>
                      <h3 className="mb-0">RESOURCES LENDED</h3>
                    </div>
                    <div className="table-responsive ">
                      <table className="table align-items-center table-flush" id="kb">
                        <thead className="thead-light" style={{width: '100%'}}>
                          <tr style={{width: '100%'}}>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Name</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Address</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Requirement</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Quantity</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Date of issue</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center text-white" id="tbb">
                  <div className="card shadow">
                    <div className="card-header border-0" style={{backgroundColor: '#0b596d'}}>
                      <h3 className="mb-0">RESOURCES LENDED</h3>
                    </div>
                    <div className="table-responsive ">
                      <table className="table align-items-center table-flush" id="kb">
                        <thead className="thead-light" style={{width: '100%'}}>
                          <tr style={{width: '100%'}}>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Name</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Address</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Requirement</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Quantity</th>
                            <th scope="col" style={{width: 'calc(100%/5)'}}>Date of issue</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                          <tr>
                            <td>Hospital B</td>
                            <td>456 Market St</td>
                            <td>Gloves</td>
                            <td>2000</td>
                            <td>02/01/2022</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-1" style={{minHeight: '500px'}} id="tbb">
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1COz-HejK3DR1ZW6mh_y-3451YCzOQHk&ehbc=2E312F" width="100%" height="100%" />
            </div>
          </div>
          <div className="col ml-5 pl-5" id="ryt">
            {/* <div class="row" id="heading" style="text-align: center;">
                              <h1>RESOURCES AVAILABLE</h1>
                          </div> */}
            <div className="row mt-5">
              <div className="col-md-6 offset-md-3 my-2 pl-0">
                {/* Card */}
                <div className="card shadow rounded pl-0 my-2 " id="card">
                  {/* Card image */}
                  <div className="view overlay" id="drop">
                    {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                    <i className="fa fa-tint fa-4x" aria-hidden="true" />
                  </div>
                  {/* Card content */}
                  <div className="card-body">
                    {/* Title */}
                    <h4 className="card-title">BLOOD BANK</h4>
                    {/* Text */}
                    <p className="card-text">
                      View the amount of blood groups currently available in the hospital.
                    </p>
                    {/* Button */}
                    {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                    <div className="read">
                      <button id="btn" className="btn btn-secondary" onclick="toggleHide1()">Show/
                        Hide</button>
                    </div>
                    <p className="card-text">
                    </p><div id="para1">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="lef">
                            <th>S.No. </th>
                            <th>Blood Group</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="lef">
                            <td>1. </td>
                            <td>A+</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>2. </td>
                            <td>A-</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>3. </td>
                            <td>B+</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>4. </td>
                            <td>B-</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>5. </td>
                            <td>AB+</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>6. </td>
                            <td>AB-</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>7. </td>
                            <td>O+</td>
                            <td>5oz</td>
                          </tr>
                          <tr className="lef">
                            <td>8. </td>
                            <td>O-</td>
                            <td>5oz</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                    <p />
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className="col-md-6 offset-md-3 my-2 pl-0" id="iiu">
                {/* Card */}
                <div className="card shadow rounded pl-0 my-2" id="card">
                  {/* Card image */}
                  <div className="view overlay" id="drop">
                    {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                    <i className="fa fa-heart fa-4x" aria-hidden="true" />
                  </div>
                  {/* Card content */}
                  <div className="card-body">
                    {/* Title */}
                    <h4 className="card-title">ORGANS</h4>
                    {/* Text */}
                    <p className="card-text">
                      View the organs currently available in the hospital for transplant.
                    </p>
                    {/* Button */}
                    {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                    <div className="read">
                      <button id="btn" className="btn btn-secondary" onclick="toggleHide2()">Show/
                        Hide</button>
                    </div>
                    <p className="card-text">
                    </p><div id="para2">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="lef">
                            <th>S.No. </th>
                            <th>Organs</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="lef">
                            <td>1. </td>
                            <td>Kidney</td>
                            <td>3</td>
                          </tr>
                          <tr className="lef">
                            <td>2. </td>
                            <td>Heart</td>
                            <td>2</td>
                          </tr>
                          <tr className="lef">
                            <td>3. </td>
                            <td>Eye</td>
                            <td>7</td>
                          </tr>
                          <tr className="lef">
                            <td>4. </td>
                            <td>Calf</td>
                            <td>3</td>
                          </tr>
                          <tr className="lef">
                            <td>5. </td>
                            <td>Brain</td>
                            <td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                    <p />
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className="col-md-6 offset-md-3 mr-2 my-2 pl-0">
                {/* Card */}
                <div className="card shadow rounded mr-2 pl-0 my-2" id="card">
                  {/* Card image */}
                  <div className="view overlay" id="drop">
                    {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                    <i className="fa fa-bed fa-4x" aria-hidden="true" />
                  </div>
                  {/* Card content */}
                  <div className="card-body">
                    {/* Title */}
                    <h4 className="card-title">EQUIPMENTS</h4>
                    {/* Text */}
                    <p className="card-text">
                      View the equipments currently present in the hospital.
                    </p>
                    {/* Button */}
                    {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                    <div className="read">
                      <button id="btn" className="btn btn-secondary" onclick="toggleHide3()">Show/
                        Hide</button>
                    </div>
                    <p className="card-text">
                    </p><div id="para3">
                      <table className="table table-bordered">
                        <thead>
                          <tr className="lef">
                            <th>S.No. </th>
                            <th>Equipment</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="lef">
                            <td>1. </td>
                            <td>Stabilizer</td>
                            <td>5</td>
                          </tr>
                          <tr className="lef">
                            <td>2. </td>
                            <td>Ventilator bed</td>
                            <td>3</td>
                          </tr>
                          <tr className="lef">
                            <td>3. </td>
                            <td>Heart-rate monitor</td>
                            <td>5</td>
                          </tr>
                          <tr className="lef">
                            <td>4. </td>
                            <td>CT-Scanner</td>
                            <td>2</td>
                          </tr>
                          <tr className="lef">
                            <td>5. </td>
                            <td>PET Scans</td>
                            <td>2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                    <p />
                  </div>
                </div>
                {/* Card */}
              </div>
            </div>
            <div className="row mt-4" id="upd">
              <div className="col-4" id="upd1">
                <button className="btn btn-primary" id="upd2">Update your profile</button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Hospital