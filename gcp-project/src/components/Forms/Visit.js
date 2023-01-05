import React, { useRef, useState, useEffect } from 'react'
import '../../Styles/VisitStyle.css'
import '../../Styles/UpdatePatientStyle.css'
import {db, storage} from '../../firebase'
import {useParams, useNavigate} from 'react-router-dom'
import { ref, uploadBytes } from "firebase/storage";
import {updateDoc} from "firebase/firestore";
import { useAuth } from '../../contexts/AuthContext';

export default function Visit() {
  const {patId} = useParams();
  const [pres,setPres] = useState(null);
  const dateRef = useRef();
  const timeRef = useRef();
  const {currentUser} = useAuth();
  const [patient, setPatient] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const patientDoc = db.collection('patient').doc(patId);
  const doctorDoc = db.collection('doctor').doc(currentUser.uid);

  const navigate = useNavigate();

  useEffect(() => {
    const getPatients = async () => {
      const pdoc = await patientDoc.get();
      setPatient(pdoc.data());
    };
    const getDoctors = async () => {
      const ddoc = await doctorDoc.get();
      setDoctor(ddoc.data());
    };
    getPatients();
    getDoctors();
  },[]);

  const uploadVisit = async () => {
    //e.preventDefault();
    if(pres == null)  return;
    const dateEv = new Date(`${dateRef.current.value} ${timeRef.current.value}`);
    //const userVisit = user.visit;
    const userVisits = patient.visits;
    const newUserPFields = {
      visits: [...userVisits, {
        title: "Appointment with " + doctor.name,
        start: dateEv.toISOString()
      }]
    };
    const presRef = ref(storage, `prescriptions/${patId}/${dateRef.current.value}`);
    await updateDoc(patientDoc, newUserPFields);
    await uploadBytes(presRef, pres);

    navigate('/patient-list')
  }

  return (
    <div className="my-auto vh-100 d-flex align-items-center justify-content-center">
      <div>
        <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
          <div className="card-header" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }}>
            <h3 style={{ color: '#084545' }}>PATIENT VISIT DETAILS</h3>
          </div>
          <div className="col p-2">
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <label htmlFor="visit_time">Time</label>
                <input ref = {timeRef} type="time" className="form-control time" id="visit_time" placeholder="Time" aria-label="Time" />
              </div>
              <div className="col-8 p-2">
                <label htmlFor="visit_date">Date</label>
                <input ref = {dateRef} type="date" className="form-control" id="visit_date" placeholder="Date" aria-label="Date" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
            <div className="col-8 p-2">
                <label htmlFor="visit_time">Add Prescription</label>
                <input onChange = {(event)=>{setPres(event.target.files[0])}} className="form-control" type="file" id="prescription" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="d-flex justify-content-center p-2">
                <div className="col">
                  <div className="d-flex justify-content-center">
                    <div className="row">
                      <button onClick = {()=>{uploadVisit()}} className="btn btn-primary mb-3">Submit</button>
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
