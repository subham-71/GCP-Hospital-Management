import React, { useRef, useEffect, useState } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { updateDoc, getDocs } from 'firebase/firestore';

const DoctorSignup = () => {


  const Hospital  = useRef();
  const [hospitals, setHospitals] = useState([])
  const ref = db.collection('hospital');
  const { currentUser } = useAuth();
  const userDoc = db.collection('doctor').doc(currentUser.uid);
  const name = useRef();
  const specialization = useRef();
  const education = useRef();
  const contact = useRef();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const HospitalId = useRef();


  useEffect(() => {
    let e1 = document.getElementById("inputGroupSelect03");
    const onChangeOption = () => {
      Hospital.current = e1.options[e1.selectedIndex].text;
      HospitalId.current = e1.value;
    }
    e1.onchange = onChangeOption;
    onChangeOption();
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const udoc = await userDoc.get();
      setUser(udoc.data());
      name.current.value = udoc.data().name;
      specialization.current.value = udoc.data().specialization;
      education.current.value = udoc.data().education;
      contact.current.value = udoc.data().contact;
    };
    getUsers()
  }, [])


  useEffect(() => {
    const getHospitals = async () => {
      const data = await getDocs(ref);
      //  console.log(data.docs);
      setHospitals(data.docs.map((doc) => ({ ...doc.data(),id : doc.id })));
      // console.log(hospitals);
    };
    getHospitals();
  }, [])

  const updateUser = async () => {
    const newFields = {
      name: name.current.value,
      specialization: specialization.current.value,
      education: education.current.value,
      contact: contact.current.value,
      hospital: Hospital.current,
      hospitalId: HospitalId.current
    };
    await updateDoc(userDoc, newFields)
    navigate('/doctor-profile')
  };
  return (

    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
        <div className="card-header" style={{ backgroundColor: 'rgba(0, 83, 83,0.5)' }}>
          <h3 style={{ color: '#084545' }}>DOCTOR DETAILS</h3>
        </div>
        <div id="carouselExampleIndicators" data-bs-interval="false">
          <div>
          </div>
          <div>
            <div>
              <div className="col p-2">
                <div className="row p-2 justify-content-center">
                  <div className="col-8 p-2">
                    <label htmlFor="name">Name</label>
                    <input ref={name} type="text" className="form-control time" id="name" placeholder="Name" aria-label="Time" />
                  </div>
                  <div className="col-8 p-2">
                    <label htmlFor="spec">Specialization</label>
                    <input ref={specialization} type="text" className="form-control" id="spec" placeholder="Specialization" aria-label="Date" />
                  </div>
                  <div className="col-8 p-2">
                    <label htmlFor="edu">Education</label>
                    <input ref={education} type="text" className="form-control" id="edu" placeholder="Education" aria-label="Date" />
                  </div>
                  <div className="col-8 p-2">
                    <label htmlFor="contact">Contact number</label>
                    <input ref={contact} type="text" className="form-control" id="contact" placeholder="Contact number" aria-label="Date" />
                  </div>
                  {/* TO-DO: fETCH HOSPITAL NAMES FROM DATABASE AND SHOW IN DROPDOWN */}
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <div className="input-group">
                        <select className="custom-select text-muted form-control" id="inputGroupSelect03">
                          <option selected>Select Hospital</option>
                          {
                            hospitals.map((hospital) => {
                              return (
                                <option value={hospital.id}>{hospital.name}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-8 p-2">
                    <button type="submit" className="btn btn-primary" onClick={() => { updateUser() }}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignup