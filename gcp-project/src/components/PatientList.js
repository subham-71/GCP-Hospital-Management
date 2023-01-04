import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import {db} from "../firebase";
import { useAuth } from '../contexts/AuthContext';



export default function PatientList() {

  const {currentUser} = useAuth();
  
  async function getDetails(patientId) {
    const doc = db.collection("patient").doc(patientId);
    const docData = await doc.get()
    if (docData.exists) return docData.data(); 
  }
  const [patientArr, setPatientArr] = useState([])
  const [patientDetail, setPatientDetail] = useState([])
  
  const getDetail = () =>{
    let patientList = [];
    patientArr.forEach(async (elem)=>{
      const detail = await getDetails(elem);
      patientList = [...patientList, detail]
      setPatientDetail(patientList)
    })
  }

  const getPatientArr = async () => {
    const doc = db.collection("doctor").doc(currentUser.uid);
    const docData = await doc.get()
    if (docData.exists) {
      console.log(docData.data().patients)
      setPatientArr(docData.data().patients)
    }
  }

  useEffect(()=>{
      getDetail();
  },[patientArr]);

  useEffect(()=>{
    getPatientArr()
  },[])
  
  return (
    <div>
      <div id="fixed-div">
        <div id="left-div">Name :<div id="name">Dr. Someone </div></div>
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
                <td className="editable" data-type="text">{entry && entry.name}</td>
                <td className="editable" data-type="number">{entry && entry.number}</td>
                <td className="editable" data-type="date">{entry && entry.date}</td>
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
                <button id="remove" className="btn btn-danger btn-xs btn-delete">Remove</button> {/* replaced link with button */}
                <button id="edit"className="btn btn-info btn-xs btn-edit">Edit</button> {/* replaced link with button */}
              </td>
            <td><i class="uil uil-arrow-right icon"></i></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="container2">
          <div className="row">
            <div className="col-md-4">
              </div></div></div>
      </div>
    </div>
  )
}
