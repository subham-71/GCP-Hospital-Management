import React, { useRef, useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import '../../Styles/BookAppointment.css';
import { updateDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

export default function BookAppointment() {

  const { docId } = useParams()
  const { currentUser } = useAuth();
  const symptomRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const [user, setUser] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const userDoc = db.collection('patient').doc(currentUser.uid);
  const doctorDoc = db.collection('doctor').doc(docId);


  useEffect(() => {
    const getUsers = async () => {
      const udoc = await userDoc.get();
      setUser(udoc.data());
    };
    const getDoctor = async () => {
      const udoc = await doctorDoc.get();
      setDoctor(udoc.data());
    };
    getUsers();
    getDoctor();
  }, [])


  const addAppointment = async (e) => {

    e.preventDefault();
    console.log(docId)
    const appdocRef = await db.collection('appointments').add({
      patientid: currentUser.uid,
      doctorid: docId,
      time: timeRef.current.value,
      date: dateRef.current.value,
      descripiton: symptomRef.current.value
    })
    // console.log(user)
    const dateEv = new Date(`${dateRef.current.value} ${timeRef.current.value}`);
    const userAppointment = user.appointment;
    const userEvents = user.events;
    const newUserPFields = {
      appointment: [...userAppointment, appdocRef],
      events:[...userEvents, {
        title: "Appointment with " + doctor.name,
        start: dateEv.toISOString()
      }]
    };

    const doctorAppointment = user.appointment;
    const doctorEvents = user.events;
    const newDoctorPFields = {
      appointment: [...doctorAppointment, appdocRef],
      events:[...doctorEvents, {
        title: "Appointment with " + user.name,
        start: dateEv.toISOString()
      }]
    };
    await updateDoc(userDoc, newUserPFields)
    await updateDoc(doctorDoc, newDoctorPFields)
  }

  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center my-4">
            Book Appointment
          </h2>
          <form onSubmit={addAppointment}>
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-lg-4">
                Date
              </label>
              <div className="col-sm-8 col-lg-8">
                <input ref={dateRef} type="date" id="date" className="form-control" />
              </div>
            </div>
            {/**/}
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-lg-4">
                Time
              </label>
              <div className="col-sm-8 col-lg-8">
                <input ref={timeRef} type="time" id="time" className="form-control" />
              </div>
            </div>
            {/**/}
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-lg-4">
                Reason of Visit
              </label>
              <div className="col-sm-8 col-lg-8">
                <textarea ref={symptomRef} id="symptoms" className="form-control" required defaultValue={""} />
              </div>
            </div>
            {/**/}
            <br />
            <div className="form-group row justify-content-end">
              <div className="col-sm-5">
                <button type="submit" className="btn btn-form">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
