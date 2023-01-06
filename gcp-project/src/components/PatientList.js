import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import { db, storage } from "../firebase";
import { ref, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { updateDoc } from 'firebase/firestore';

export default function PatientList() {

  const { currentUser } = useAuth();
  const [doctor, setDoctor] = useState();
  const navigate = useNavigate();

  
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

  async function getDetails(patientId) {
    const doc = db.collection("patient").doc(patientId);
    const docData = await doc.get()
    if (docData.exists) return {...docData.data(),id:doc.id};
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

  const addPatientArr = async (patientId) => {
    const doc = db.collection("doctor").doc(currentUser.uid);
    const docData = await doc.get()
    if (docData.exists) {
      const patientArr = docData.data().patients;
      patientArr.push(patientId);
      await updateDoc(doc, { patients: patientArr }).then(() => {getPatientArr()});
    }
  }

  const deletePatientArr = async (patientId) => {
    const doc = db.collection("doctor").doc(currentUser.uid);
    const docData = await doc.get()
    if (docData.exists) {
      const patientArr = docData.data().patients;
      const index = patientArr.indexOf(patientId);
      if (index > -1) {
        patientArr.splice(index, 1);
      }
      await updateDoc(doc, { patients: patientArr }).then(() => {getPatientArr()});
    }
  }

  useEffect(() => {
    getDetail();
  }, [patientArr]);

  useEffect(() => {
    getPatientArr()
  }, [])


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
    <Navbar Link={nav_links} pfpLink = {pfpSrc} />
    <div className='main-content2'>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Patient</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <input type="text" className="form-control" id="add_patient" aria-label="Patient Id" placeholder="Patient ID"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{addPatientArr(document.getElementById("add_patient").value)}}>Add Patient</button>
              </div>
            </div>
          </div>
        </div>
        </div>
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
            {patientDetail && patientDetail.map((entry) => {
              return (
                <tr>
                  <td className="editable" data-type="text">{entry && entry.name}</td>
                  <td className="editable" data-type="number">{entry && entry.number}</td>
                  <td className="editable" data-type="date">{entry && entry.date}</td>
                  <td className="editable" data-type="text">Completed</td>
                  <td>
                    {/* Todo: Remove function button */}
                    <button id="remove"className="btn btn-danger btn-xs btn-delete" onClick={()=>deletePatientArr(entry.id)}>Remove</button> {/* replaced link with button */}
                    <button id="edit" className="btn btn-info btn-xs btn-edit" onClick={()=>navigate(`/visit/${entry.id}`)}>Add Prescription</button> {/* replaced link with button */}
                  </td>
                </tr>)
                
            })}
          </tbody>
        </table>
        <div className="text-center mt-4">
        <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background: "linear-gradient(135deg, #f75959 0%, #f35587 100%)", color: 'white' }}>
          Add patient
        </button>
        </div>
        <br />
        <div className="container2">
          <div className="row">
            <div className="col-md-4">
            </div></div></div>
      </div>
    </>
  )
}
