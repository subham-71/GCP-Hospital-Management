import React, { useEffect, useState } from 'react';
import '../Styles/PatientList.css';
import Navbar from './Navbar';
import { getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function HospitalList() {

    const [hospitals, setHospitals] = useState([])
    const ref = db.collection('hospital');
    const navigate=useNavigate();

    useEffect(() => {
        const getHospitals = async () => {
          const data = await getDocs(ref);
          console.log(data)
          setHospitals(data.docs.map((doc) => ({ ...doc.data(),id : doc.id })));
        };
        getHospitals();
      }, [])
    
    return (
        <>
            <Navbar />
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
