import React, { useState,useEffect } from 'react'
import '../Styles/HospitalQuery.css'
import { db } from '../firebase';
import {getDocs} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function HospitalQuery() {

  const [queries,setQueries] = useState([]);
  const ref = db.collection('hospitalQuery');
  const navigate = useNavigate()
  const [selected,setSelected] = useState([]);

  const sendEmail = ()=>{
    // console.log(selected);
    const emailId = selected.email;
    // Todo: body of email
    window.location = `mailto:${emailId}`;
  }
  useEffect(() =>{
    const getQueries = async () => {
       const data = await getDocs(ref);
      //  console.log(data.docs);
       setQueries(data.docs.map((doc)=>({...doc.data()})));
       console.log(queries);
    };
    getQueries();
 },[])

  return (
    <>
    <Navbar />
    <div className="main-content">
    <div className="container">
      <div className="item1">
        <h3 className='hospital-query-h3 text-center mx-auto' style={{width:'1035px'}} >Active Queries</h3>
        <table id="query_table" data-paginate="true">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name of Hospital</th>
              <th scope="col">Address</th>
              <th scope="col">Requirement</th>
              <th scope="col">Quantity</th>
              <th scope="col">Urgency</th>
            </tr>
          </thead>
          <tbody>
            {
              queries.map(
                (query) => {
                  return(
                    <tr>
                    <td><input type="radio" name="selected" onClick={()=>setSelected(query)} /></td>
                    <td>{query.name}</td>
                    <td>{query.address}</td>
                    <td>{query.requirement}</td>
                    <td>{query.quantity}</td>
                    <td>{query.urgency}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
      <br />
      <div className="item3">
        <button type="button" className="btn btn-primary" onClick={()=>sendEmail()}>Reply to Query</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate("/query-raise")}>Raise a Query</button>
      </div>
    </div>
    </div>
    </>
  )
}
