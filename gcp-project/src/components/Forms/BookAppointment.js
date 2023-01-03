import React, { useRef } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import '../../Styles/BookAppointment.css'

export default function BookAppointment() {

  const { currentUser } = useAuth();
  const symptomRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const doctorRef = useRef();
  async function addAppointment(e) {
    e.preventDefault();

    const res = await db.collection('appointments').add({
      patientid: currentUser.uid,
      doctorid: "123",
      time: timeRef.current.value,
      date: dateRef.current.value,
    })

  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
          <div className="card-header" style={{ backgroundColor: 'rgba(0, 83, 83,0.5)' }}>
            <h3 style={{ color: '#084545' }}>Book Appointment</h3>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col p-2">
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input type="text" className="form-control" placeholder="Patient Name" aria-label="Name" style={{ backgroundColor: 'white' }} />
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input type="text" className="form-control" placeholder="Dr. Rajiv" aria-label="Doctor" style={{ backgroundColor: 'white' }} disabled="disabled" ref={doctorRef} />
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input type="number" className="form-control" placeholder="Contact Number" aria-label="Contact" />
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input type="date" className="form-control" placeholder="Date" aria-label="Date" ref={dateRef} />
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2 text-center">
                      <input type="time" className="form-control" placeholder="Time" aria-label="Time" ref={timeRef} />
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2 text-center">
                      <input type="text" className="form-control" placeholder="Reason of Visit" aria-label="Reason" />
                    </div>
                  </div>
                </div>
                {/* submit */}
                <div className="row p-2 justify-content-center">
                  <div className="col-8 p-2 text-center">
                    <button type="button" className="btn btn-primary" onClick={addAppointment}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
