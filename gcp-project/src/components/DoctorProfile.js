import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import sample from '../images/sample.png'

import Navbar from './Navbar'

import "../Styles/DoctorProfile.css"
import { db, storage } from '../firebase'
import { ref, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


const DoctorProfile = () => {
  const { currentUser } = useAuth()
  const [doctorInfo, setDoctorInfo] = useState()
  const [doctorEvents, setDoctorEvents] = useState([])
  const navigate = useNavigate()
  
  const [pfpSrc, setPfpSrc] = useState(null);
  const getPfp = async () => {
    try {
      const storageRef = ref(storage, `pictures/${currentUser.uid}--pfp.png`);
      const url = await getDownloadURL(storageRef);
      setPfpSrc(url);
    } catch(err) {
      return;
    }
  }

  const getDoctorInfo = async () => {
    console.log(currentUser.uid)
    const docRef = db.collection("doctor").doc(currentUser.uid);
    const doc = await docRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log(doc.data())
      setDoctorInfo(doc.data())
      if(doc.data().events){
      setDoctorEvents(doc.data().events)
      }
    }
  }

  useEffect(() => {
    getDoctorInfo()
    getPfp()
  }, [currentUser])


  const nav_links = [
    {
      name: 'Profile',
      link: '/doctor-profile'
    },
    {
      name: 'Patient List',
      link: '/patient-list'
    }
  ]
  return (
    <>
      <Navbar Link={nav_links} pfpLink = {pfpSrc}/>
      <div className="body" style={{ backgroundColor: 'whitesmoke' }} >
        <div className="container">
          <div className="row" id>
            <div className="col-md-5 my-5">
              {/* card(INFORMATION) start */}
              <div className="card">
                <div className="card-header" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }} id="ch">
                  <b>INFORMATION</b>
                </div>
                <div className="card-body text-center">
                  <div id="flexwala">
                    <img id="propic" alt="profile picture" src={pfpSrc ? pfpSrc:sample} className="rounded-3"/>

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
                        <td>{doctorInfo && doctorInfo.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Specialization</th>
                        <td>{doctorInfo && doctorInfo.specialization}</td>
                      </tr>
                      <tr>
                        <th scope="row">Education</th>
                        <td>{doctorInfo && doctorInfo.education}</td>
                      </tr>
                      <tr>
                        <th scope="row">Contact number</th>
                        <td>{doctorInfo && doctorInfo.contact}</td>
                      </tr>
                      <tr>
                        <th scope="row">E-mail address</th>
                        <td>{doctorInfo && doctorInfo.email}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" className="btn mt-2" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }} onClick={() => navigate("/doctor-signup")}>Update</button>
                </div>
              </div>
              {/* card(INFORMATION) end  */}
            </div>
            <div className="col-6 my-5 offset-md-1">
              <div className="card text-center">
                <div className="card-header" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }} id="ch">
                  <b>TODAY'S PATIENTS</b>
                </div>
                <div className="card-body" id="tbl">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: '100%/3' }} scope="col">Sr. no.</th>
                        <th style={{ width: '100%/3' }} scope="col">Patient id</th>
                        <th style={{ width: '100%/3' }} scope="col">Patient name</th>
                        <th style={{ width: '100%/3' }} scope="col">Time of visit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        doctorEvents.map((event, index) => {
                          const appdate = new Date(event.start);
                          const today = new Date();
                          if (today.toDateString() === appdate.toDateString())
                            return (
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <th><a href>{event.patientId}</a></th>
                                <td>{event.patientName}</td>
                                <td>{appdate.getHours() + ":" + appdate.getMinutes()}</td>
                              </tr>
                            )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-center" id="ch" style={{ backgroundColor: 'white' }}>
                  <button className="btn" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }} onClick={() => { navigate("/patient-list") }}>View past patients</button>
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
      </div>
    </>
  );
}

export default DoctorProfile