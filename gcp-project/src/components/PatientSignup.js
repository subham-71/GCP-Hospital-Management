import React, { useRef, useState, useEffect } from 'react'
import '../Styles/UpdatePatientStyle.css'
import { doc, updateDoc, } from "firebase/firestore";
import { db, storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function PatientSignup() {
  const { currentUser } = useAuth();

  const [user, setUser] = useState([]);
  const [upload, setUpload] = useState(null);
  const [pfp, setPfp] = useState(null);
  const userDoc = db.collection('patient').doc(currentUser.uid);
  
  const name = useRef();
  const age = useRef();
  const height = useRef();
  const weight = useRef();
  const bloodGroup = useRef();
  const gender = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const udoc = await userDoc.get();
      setUser(udoc.data());
      name.current.value = udoc.data().name;
      age.current.value = udoc.data().age;
      height.current.value = udoc.data().height;
      weight.current.value = udoc.data().weight;
      gender.current.selected = udoc.data().gender;
      bloodGroup.current.selected = udoc.data().bloodGroup;
    };
    getUsers()
  }, [])

  const updateUser = async () => {
    uploadFiles()
    uploadPic()
    const newFields = {
      name: name.current.value == null ? user.name : name.current.value,
      age: age.current.value,
      weight: weight.current.value,
      height: height.current.value,
      gender: gender.current.value,
      bloodGroup: bloodGroup.current.value,
      files: upload?[(currentUser.uid + "-" + upload.name)]:[]
    };
    await updateDoc(userDoc, newFields)
    navigate('/profile')
  };

  const uploadFiles = async () => {
    console.log(upload)
    if (upload == null) return;
    const docRef = ref(storage, `documents/${currentUser.uid + "-" + upload.name}`);
    await uploadBytes(docRef, upload);
  }
  
  const uploadPic = async () => {
    console.log(pfp)
    if (pfp == null) return;
    const iamgeRef = ref(storage, `documents/${currentUser.uid + "-" + upload.name}`);
    await uploadBytes(iamgeRef, upload);
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
          <div className="card-header" style={{ backgroundColor: 'rgba(0, 83, 83,0.5)' }}>
            <h3 style={{ color: '#084545' }}>UPDATE PROFILE</h3>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active " aria-current="true" style={{ backgroundColor: '#005353' }} />
              <button type="button" style={{ backgroundColor: '#005353' }} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col p-2 h-50">
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input ref={name} type="text" className="form-control" placeholder="Name" aria-label="Name" style={{ backgroundColor: 'white' }} required/>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input ref={age} type="number" className="form-control" placeholder="Age" aria-label="Age" required/>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <input ref={height} type="number" className="form-control" placeholder="Height (cm)" aria-label="Height" required/>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2 text-center">
                      <input ref={weight} type="number" className="form-control" placeholder="Weight (kgs)" aria-label="Weight" required/>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <div className="input-group">
                        <select ref = {bloodGroup} className="custom-select text-muted form-control" id="inputGroupSelect03" value={user.bloodGroup} required>
                          <option value={"A+"}>A+</option>
                          <option value={"A-"}>A-</option>
                          <option value={"B+"}>B+</option>
                          <option value={"B-"}>B-</option>
                          <option value={"O+"}>O+</option>
                          <option value={"O-"}>O-</option>
                          <option value={"AB+"}>AB+</option>
                          <option value={"AB-"}>AB-</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row p-2 justify-content-center">
                    <div className="col-8 p-2">
                      <div className="input-group">
                        <select ref = {gender} className="custom-select text-muted form-control" id="inputGroupSelect02" value={user.gender} required>
                          <option value={"Male"}>Male</option>
                          <option value={"Female"}>Female</option>
                          <option value={"Others"}>Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center p-2">
                  <div className="col">
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2 text-center">
                        <label htmlFor="formFileMultiple" className="form-label">Add Personal Documents</label>
                        <input onChange={(event) => { setUpload(event.target.files[0]) }} className="form-control" type="file" id="formFileMultiple" multiple />
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2 text-center">
                        <label className="form-label" htmlFor="customFile">Add Profile Picture</label>
                        <input onChange={(event) => { setPfp(event.target.files[0]) }} type="file" className="form-control" id="customFile" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="row mt-4">
                    <button className="btn mb-4" type="submit" onClick={() => {updateUser()}}>Update</button>
                    {/* <a href="#" class="btn btn-primary">Update</a> */}
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ backgroundColor: '#005353' }}>
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ backgroundColor: '#005353' }}>
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
