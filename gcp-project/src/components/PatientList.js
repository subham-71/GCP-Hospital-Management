import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import { db } from "../firebase";
import { useAuth } from '../contexts/AuthContext';



export default function PatientList() {

  const { currentUser } = useAuth();
  const [doctor, setDoctor] = useState();

  async function getDetails(patientId) {
    const doc = db.collection("patient").doc(patientId);
    const docData = await doc.get()
    if (docData.exists) return docData.data();
  }
  const [patientArr, setPatientArr] = useState([])
  const [patientDetail, setPatientDetail] = useState([])

  const getDetail = () => {
    let patientList = [];
    if(patientArr==undefined || patientArr.length === 0) return;
    patientArr.forEach(async (elem) => {
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
      setDoctor(docData.data())
    }
  }

  useEffect(() => {
    getDetail();
  }, [patientArr]);

  useEffect(() => {
    getPatientArr()
  }, [])

  return (
    <div>
      <div id="fixed-div">
        <div id="left-div">Name :<div id="name">{doctor && doctor.name}</div></div>
        <div id="right-div">Hospital :<div id="hospital">{doctor && doctor.hospital}</div></div>
      </div>
      <div className="container1">
        <table className="table_pat">
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
