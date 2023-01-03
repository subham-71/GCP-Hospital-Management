import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import doctorEvents from './doctorEvents'

import "../Styles/DoctorProfile.css"

const DoctorProfile = () => {
    return (
    <div className="container">
      <div className="row" id>
        <div className="col-md-5 my-5">
          {/* card(INFORMATION) start */}
          <div className="card">
            <div className="card-header" id="ch">
              <b>INFORMATION</b>
            </div>
            <div className="card-body">
              <div id="flexwala">
                <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                  <img id="propic" alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-3" />
                </a>
              </div><table className="table">
                {/* <thead>
                                  <tr>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                  </tr>
                              </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Dr. Manvi Sehgal</td>
                  </tr>
                  <tr>
                    <th scope="row">Specialization</th>
                    <td>Dentist</td>
                  </tr>
                  <tr>
                    <th scope="row">Education</th>
                    <td>MD Honours, AIMS Delhi</td>
                  </tr>
                  <tr>
                    <th scope="row">Contact number</th>
                    <td>888888888</td>
                  </tr>
                  <tr>
                    <th scope="row">E-mail address</th>
                    <td>Dffgbcrt@abc.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Name</th>
                    <td>Dr. Manvi Sehgal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* card(INFORMATION) end  */}
        </div>
        <div className="col-md-6 my-5 offset-md-1">
          <div className="card text-center">
            <div className="card-header" id="ch">
              <b>TODAY'S PATIENTS</b>
            </div>
            <div className="card-body" id="tbl">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{width: '100%/3'}} scope="col">Sr. no.</th>                                    
                    <th style={{width: '100%/3'}} scope="col">Patient id</th>
                    <th style={{width: '100%/3'}} scope="col">Patient name</th>
                    <th style={{width: '100%/3'}} scope="col">Time of visit</th>                                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <th><a href>4444325</a></th>
                    <td>Jane Austin</td>
                    <td>3 p.m.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer text-center" id="ch">
              <a className="btn btn-primary">View past patients</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="hero">
          <div id="calendar" >
          <FullCalendar
              plugins={[dayGridPlugin]}
              events={doctorEvents}
              displayEventEnd="true"
              eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile