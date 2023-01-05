import React, { useEffect, useRef, useState } from 'react'
import { updateDoc, } from "firebase/firestore";
import { db} from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const HospitalSignup = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState([]);
  const userDoc = db.collection('hospital').doc(currentUser.uid);
  
  const name = useRef();
  const address = useRef();
  const contactPrimary = useRef();
  const contactSecondary = useRef();
  const navigate = useNavigate();
  

  useEffect(() => {
    const getUsers = async () => {
      const udoc = await userDoc.get();
      setUser(udoc.data());
      name.current.value = udoc.data().name;
      address.current.value = udoc.data().address
      contactPrimary.current.value = udoc.data().contactPrimary
      contactSecondary.current.value = udoc.data().contactSecondary
    };
    getUsers()
  }, [])

  const updateUser = async () => {
    const newFields = {
      name: name.current.value == null ? user.name : name.current.value,
      address: address.current.value == null ? user.address : address.current.value,
      contactPrimary: contactPrimary.current.value == null ? user.contactPrimary : contactPrimary.current.value,
      contactSecondary: contactSecondary.current.value == null ? user.contactSecondary : contactSecondary.current.value,
    };
    await updateDoc(userDoc, newFields)
    navigate('/hospital-profile')
  };

    return (

        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="card" style={{width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)'}}>
            <div className="card-header" style={{backgroundColor: 'rgba(0, 83, 83,0.5)'}}>
              <h3 style={{color: '#084545'}}>HOSPITAL DETAILS</h3>
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
                        <input ref={name} type="text" className="form-control time" id="name" placeholder="Name" aria-label="Name" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="address">Address</label>
                        <input ref={address} type="text" className="form-control" id="address" placeholder="Specialization" aria-label="Date" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="pnumber">Contact number(Primary)</label>
                        <input ref={contactPrimary} type="number" className="form-control" id="pnumber" placeholder="Education" aria-label="number" />
                      </div>
                      <div className="col-8 p-2">
                        <label htmlFor="snumber">Contact number(Secondary)</label>
                        <input ref={contactSecondary} type="number" className="form-control" id="snumber" placeholder="Email address" aria-label="number" />
                      </div>
                      {/* TO-DO: fETCH HOSPITAL NAMES FROM DATABASE AND SHOW IN DROPDOWN */}
                      <div className="col-8 p-2">
                            <button type="submit" className="btn btn-primary" onClick={() => {updateUser()}}>Submit</button>
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

export default HospitalSignup