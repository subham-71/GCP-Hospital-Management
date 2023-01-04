import React, { useEffect, useState } from 'react'
import "../Styles/HospitalProfile.css"
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

import Navbar from './Navbar';

const HospitalProfile = () => {

  const [hospitalInfo, setHospitalInfo] = useState();
  const [doctors, setDoctors] = useState([])
  const [resourcesLended, setResourcesLended] = useState([])
  const [resourcesBorrowed, setResourcesBorrowed] = useState([])
  const [bloodData, setBloodData] = useState([])
  const [organData, setOrganData] = useState([])
  const [equipment, setEquipment] = useState([])
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  const getHospitalInfo = async () => {
    const docRef = await db.collection('hospital').doc(currentUser.uid).get()
    const data = docRef.data()
    setHospitalInfo(data)
    setDoctors(data.doctors)
    setResourcesLended(data.resourcesLended)
    setResourcesBorrowed(data.resourcesBorrowed)
    setBloodData(data.bloodData)
    setOrganData(data.organData)
    setEquipment(data.equipmentData)
  }

  useEffect(() => {
    getHospitalInfo()
  }, [])

  return (
    <>
    <Navbar />
      <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="row mt-5" id="kkkl">
            <div className="card card-deck h-90 m-lg-1" id="prof">
              <div className="card-body text-center">
                <h5 className="card-title">INFORMATION</h5>
                <p className="card-text">
                </p><table className="table" id="lef">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>{hospitalInfo && hospitalInfo.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>{hospitalInfo && hospitalInfo.address}</td>
                    </tr>
                    <tr>
                      <th scope="row">Contact number (Primary)</th>
                      <td>{hospitalInfo && hospitalInfo.contactPrimary}</td>
                    </tr>
                    <tr>
                      <th scope="row">Contact number (Secondary)</th>
                      <td>{hospitalInfo && hospitalInfo.contactSecondary}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{hospitalInfo && hospitalInfo.email}</td>
                    </tr>
                  </tbody>
                </table>
                <p />
                <button type="button" className="btn" style={{ backgroundColor: '#009999', color: 'white' }} onClick={() => navigate("/hospital-signup")}>Update</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1 text-center text-white" id="tbb">
          <div className="card shadow">
            <div className="card-header border-0" style={{ backgroundColor: '#0b596d' }}>
              <h3 className="mb-0">DOCTORS AVAILABLE</h3>
            </div>
            <div className="table-responsive ">
              <table className="table align-items-center table-flush" id="ab">
                <thead className="thead-light" style={{ width: '100%' }}>
                  <tr style={{ width: '100%' }}>
                    <th scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th scope="col" style={{ width: 'calc(100%/3)' }} />
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => {
                    return (
                      <tr>
                        <th scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-1.jpg" className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>{doctor.name}</b></div>
                          <small className="form-text" style={{ fontSize: '12px' }}>{doctor.role}</small>
                        </td>
                        <td>
                          <button onClick={()=>navigate(`/book-appointment/${doctor.id}`)} className="btn btn-outline-success">Book an appointment</button>
                        </td>
                        <td />
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col text-center text-white" id="tbb">
          <div className="card shadow">
            <div className="card-header border-0" style={{ backgroundColor: '#0b596d' }}>
              <h3 className="mb-0">RECENT APPOINTMENTS</h3>
            </div>
            <div className="table-responsive ">
              <table className="table align-items-center table-flush" id="ab">
                <thead className="thead-light" style={{ width: '100%' }}>
                  <tr style={{ width: '100%' }}>
                    <th scope="col" style={{ width: 'calc(100%/6)' }}>Doctor</th>
                    <th scope="col" style={{ width: 'calc(100%/6)' }}>Patients</th>
                    <th scope="col" style={{ width: 'calc(100%/6)' }}>Speciality</th>
                    <th scope="col" style={{ width: 'calc(100%/5)' }}>Timings</th>
                    <th scope="col" style={{ width: 'calc(100%/5)' }}>Days</th>
                    <th scope="col" style={{ width: 'calc(100%/5)' }}>Amount</th>
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
      </div> */}
      <div className="row">
        <div className="col-5">
          <div className="row">
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* modal */}
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <div class="mb-3">
        <input type="text" className="form-control" id="blood" aria-label="volume" />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
            <div className="col text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{ backgroundColor: '#0b596d' }}>
                  <h3 className="mb-0">RESOURCES LENDED</h3>
                </div>
                <div className="table-responsive">
                  <table className="table" id="kb">
                    <thead className="thead-light" style={{ width: '100%' }}>
                      <tr style={{ width: '100%' }}>
                        <th scope="col-4" style={{ width: '100%' }}>Name</th>
                        <th scope="col" style={{ width: '100%' }}>Address</th>
                        <th scope="col" style={{ width: '100%' }}>Requirement</th>
                        <th scope="col" style={{ width: '100%' }}>Quantity</th>
                        <th scope="col" style={{ width: '100%' }}>Date of issue</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        resourcesLended.map((resource) => {
                          return (
                            <tr>
                              <td>{resource.name} </td>
                              <td>{resource.address}</td>
                              <td>{resource.requirement}</td>
                              <td>{resource.quantity}</td>
                              <td>{resource.doi}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{ backgroundColor: '#0b596d' }}>
                  <h3 className="mb-0">RESOURCES BORROWED</h3>
                </div>
                <div className="table-responsive ">
                  <table className="table align-items-center table-flush" id="kb">
                    <thead className="thead-light" style={{ width: '100%' }}>
                      <tr style={{ width: '100%' }}>
                        <th scope="col" style={{ width: 'calc(100%/5)' }}>Name</th>
                        <th scope="col" style={{ width: 'calc(100%/5)' }}>Address</th>
                        <th scope="col" style={{ width: 'calc(100%/5)' }}>Requirement</th>
                        <th scope="col" style={{ width: 'calc(100%/5)' }}>Quantity</th>
                        <th scope="col" style={{ width: 'calc(100%/5)' }}>Date of issue</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        resourcesBorrowed.map((resource) => {
                          return (
                            <tr>
                              <td>{resource.name} </td>
                              <td>{resource.address}</td>
                              <td>{resource.requirement}</td>
                              <td>{resource.quantity}</td>
                              <td>{resource.doi}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1" style={{ minHeight: '500px' }} id="tbb">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1COz-HejK3DR1ZW6mh_y-3451YCzOQHk&ehbc=2E312F" width="100%" height="100%" />
        </div>
      </div>
      <div className="col ml-5 pl-5" id="ryt">
        {/* <div class="row" id="heading" style="text-align: center;">
                              <h1>RESOURCES AVAILABLE</h1>
                          </div> */}
        <div className="row mt-5">
          <div className="col-6 offset-3 my-2 pl-0">
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
                      {
                        bloodData?.map((blood, index) => {
                          return (
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{blood.bloodGroup}</td>
                              <td>{blood.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
                </div>
                {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                <p />
              </div>
            </div>
            {/* Card */}
          </div>
          <div className="col-6 offset-3 my-2 pl-0" id="iiu">
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
                      {
                        organData?.map((organ, index) => {
                          return (
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{organ.name}</td>
                              <td>{organ.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                <p />
              </div>
            </div>
            {/* Card */}
          </div>
          <div className="col-6 offset-3 mr-2 my-2 pl-0">
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
                      {
                        equipment.map((equip, index) => {
                          return(
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{equip.name}</td>
                              <td>{equip.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                      
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
    </>
  );
}

export default HospitalProfile