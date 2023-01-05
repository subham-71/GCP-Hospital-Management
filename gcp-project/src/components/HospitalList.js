import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import Navbar from './Navbar';
import { getDocs } from 'firebase/firestore';
import { db, storage } from '../firebase'
import { ref, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function HospitalList() {
    const {currentUser} = useAuth();
    const [hospitals, setHospitals] = useState([])
    const ref = db.collection('hospital');
    const navigate=useNavigate();

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

    useEffect(() => {
        const getHospitals = async () => {
          const data = await getDocs(ref);
          console.log(data)
          setHospitals(data.docs.map((doc) => ({ ...doc.data(),id : doc.id })));
        };
        getHospitals();
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
            <Navbar Link={nav_links} pfpLink = {pfpSrc}/>
            <div className='main-content2'>
                <div className="p-2">

                    <div className="container1">
                        <table className="table_pat">
                            <thead>
                                <tr>
                                    <th scope="col">Hospital Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">
                                        Email
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {hospitals.map((hospital) => {
                                return(
                                <tr>
                                    <td className="editable" data-type="text">{hospital && hospital.name}</td>
                                    <td className="editable" data-type="address">{hospital && hospital.address}</td>
                                    <td className="editable" data-type="number">{hospital && hospital.contactPrimary}</td>
                                    <td className="editable" data-type="email">{hospital && hospital.email}</td>
                                    <td className="editable" data-type="text">
                                        <button className="link-button" onClick={()=>navigate(`/hospital-page/${hospital.id}`)}>
                                        <i class="uil uil-arrow-right icon"></i>
                                        </button>
                                    
                                    </td>
                                
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        <br />
                        <div className="container2">
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
