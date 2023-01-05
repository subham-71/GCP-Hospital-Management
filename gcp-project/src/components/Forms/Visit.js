import React, { useRef } from 'react'
import '../../Styles/VisitStyle.css'
import '../../Styles/UpdatePatientStyle.css'

export default function Visit() {
  const medicine = useRef();

  return (
    <div className="my-auto vh-100 d-flex align-items-center justify-content-center">
      <div>
        <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
          <div className="card-header" style={{ backgroundColor: 'rgba(0, 83, 83,0.5)' }}>
            <h3 style={{ color: '#084545' }}>PATIENT VISIT DETAILS</h3>
          </div>
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
                <label htmlFor="visit_time">Add Prescription</label>
                <input className="form-control" type="file" id="prescription" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="d-flex justify-content-center p-2">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <div className="row">
                      <button className="btn btn-primary mb-3">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div></div>
  )
}
