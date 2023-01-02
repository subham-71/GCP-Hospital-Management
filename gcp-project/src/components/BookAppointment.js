import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import './BookAppointment.css'

export default function BookAppointment() {

  const { currentUser } = useAuth();
  const symptomRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  async function addAppointment(e) {
    e.preventDefault();

    const res = await db.collection('appointments').add({
      patientid: currentUser.uid,
      doctorid: "123",
      time: timeRef.current.value,
      date: dateRef.current.value,
    })

    console.log(res);
  }

  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center my-4">
            Book Appointment
          </h2>
          <form onSubmit={addAppointment}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-4">
                Patient Name
              </label>
              <div className="col-sm-8 col-lg-8">
                <input type="text" id="patient-name" className="form-control" placeholder="Name" required />
              </div>
            </div>
            {/**/}
            <br />
            <div className="form-group row">
              <label className="col-sm-4 col-lg-4">
                Contact
              </label>
              <div className="col-sm-8 col-lg-8">
                <input type="tel" id="contact" className="form-control" placeholder={123} required />
              </div>
            </div>
            {/**/}
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
      </div></div>
  )
}
