import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import {db} from "../firebase";



export default function PatientList() {
  
  async function getDetails(patientId) {
    const doc = db.collection("patient").doc(patientId);
    const docData = await doc.get()
    if (docData.exists) return docData.data(); 
  }
  const patientArr = ["N9z4uPZxfNXPl098kpBpWcHDn152", "RQ8FNr3vgvefIFVZHcJR1WI4s693", "bDp6VO8MGycL4ndtmngFWLtarEd2"]
  const [patientDetail, setPatientDetail] = useState([])
  const [loading, setLoading] = useState(false)
  
  const getDetail = () =>{
    patientArr.forEach(async (elem)=>{
      const detail = await getDetails(elem);
      setPatientDetail((prev)=>[...prev, detail])
    })
  }
  
  useEffect(()=>{
      getDetail();
  },[loading]);

  useEffect(()=>{
    setLoading(true)
  })
  
  return (
    <div>
      <div id="fixed-div">
        <div id="left-div">Name :<div id="name">Dr. Ashima Goyal </div></div>
        <div id="right-div">Hospital :<div id="hospital">Fortis</div></div>
      </div>
      <div className="container1">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient ID</th>
              <th scope="col">Last Visit</th>
              <th scope="col">Treatment Status</th>
              <th scope="col">Settings</th>
            </tr>
          </thead>
          <tbody>
            {patientDetail.map((entry) => {
              return (
              <tr>
                <td className="editable" data-type="text">{entry.name}</td>
                <td className="editable" data-type="number">{entry.number}</td>
                <td className="editable" data-type="date">2022-01-01</td>
                <td className="editable" data-type="text">Completed</td>
                <td>
                  <button className="btn btn-danger btn-xs btn-delete">Remove</button> {/* replaced link with button */}
                  <button className="btn btn-info btn-xs btn-edit">Edit</button> {/* replaced link with button */}
                </td>
              </tr>)
            })}
            <tr>
              <td className="editable" data-type="text">Jane Doe</td>
              <td className="editable" data-type="number">987654</td>
              <td className="editable" data-type="date">2022-02-01</td>
              <td className="editable" data-type="text">In progress</td>
              <td>
                <button className="btn btn-danger btn-xs btn-delete">Remove</button> {/* replaced link with button */}
                <button className="btn btn-info btn-xs btn-edit">Edit</button> {/* replaced link with button */}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div id="add"><button className=" btn btn-primary" onClick={() => document.getElementById("registration-form").style.display = 'block'}>Add Patient</button></div>
        <div className="container2">
          <div className="row">
            <div className="col-md-4">
              <form className="patient-form" id="registration-form">
                <div className="form-group">
                  <label htmlFor="patient-name">Patient Name</label>
                  <input type="text" className="form-control" id="patient-name" placeholder="Enter patient name" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" className="form-control" id="age" placeholder="Enter age" />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-control" id="gender">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height</label>
                  <input type="number" className="form-control" id="height" placeholder="Enter height in cm" />
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight</label>
                  <input type="number" className="form-control" id="weight" placeholder="Enter weight in kg" />
                </div>
                <div className="form-group">
                  <label htmlFor="blood-group">Blood Group</label>
                  <select className="form-control" id="blood-group">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="last-visit">Last Visit</label>
                  <input type="date" className="form-control" id="last-visit" />
                </div>
                <button type="submit" id="submit" className="btn btn-success">Submit</button>
                <button type="cancel" id="cancel" className="btn btn-warning" onClick={() => document.getElementById("registration-form").style.display = 'none'}>Cancel</button>
              </form></div></div></div>
      </div>
    </div>
  )
}
