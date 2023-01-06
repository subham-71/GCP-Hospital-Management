import React, { useEffect, useState } from 'react'
import "../Styles/HospitalProfile.css"
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
import sample from '../images/sample.png'

import Navbar from './Navbar';

const HospitalProfile = () => {

  const [hospitalInfo, setHospitalInfo] = useState();
  const [doctors, setDoctors] = useState([])
  const [resourcesLended, setResourcesLended] = useState([])
  const [resourcesBorrowed, setResourcesBorrowed] = useState([])
  const [bloodData, setBloodData] = useState([])
  const [organData, setOrganData] = useState([])
  const [equipment, setEquipment] = useState([])
  const { currentUser } = useAuth()
  const [group, setGroup] = useState()
  const [index,setIndex] = useState()
  const navigate = useNavigate()

  const handleEvent = (item,index)=>{
    setGroup(item)
    setIndex(index)
  }

  const addGroup = async (quantity) => {
    console.log("called")
    const docRef = await db.collection('hospital').doc(currentUser.uid).get()
    const data = docRef.data()
    if(group=="blood"){
      const updateData = data.bloodData
      updateData[index].quantity = quantity
      await db.collection('hospital').doc(currentUser.uid).update({
        bloodData: updateData
      })
    }
    else if(group=="organ"){
      const updateData = data.organData
      updateData[index].quantity = quantity
      await db.collection('hospital').doc(currentUser.uid).update({
        organData: updateData
      })
    }
    else if(group=="equipment"){
      const updateData = data.equipmentData
      updateData[index].quantity = quantity
      await db.collection('hospital').doc(currentUser.uid).update({
        equipmentData: updateData
      })
    }
  }

  const getHospitalInfo = async () => {
    const docRef = await db.collection('hospital').doc(currentUser.uid).get()
    const data = docRef.data()
    if(data){
      setHospitalInfo(data)
      if(data.doctors)
        {setDoctors(data.doctors)}
      if(data.resourcesLended)
        {setResourcesLended(data.resourcesLended)}
      if(data.resourcesBorrowed)
        {setResourcesBorrowed(data.resourcesBorrowed)}
      if(data.bloodData)
        {setBloodData(data.bloodData)}
      if(data.organData)
        {setOrganData(data.organData)}
      if(data.equipmentData)
        {setEquipment(data.equipmentData)}
    }
  }

  useEffect(() => {
    getHospitalInfo()
  }, [addGroup])

  const nav_links = [
    {
      name: 'Profile',
      link: '/hospital-profile'
    },
    {
      name: 'Hospital Query',
      link: '/hospital-query'
    }
  ]
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);

  const toggleHide1 = () => {
    setIsHidden1(!isHidden1);
  }
  const toggleHide2 = () => {
    setIsHidden2(!isHidden2);
  }
  const toggleHide3 = () => {
    setIsHidden3(!isHidden3);
  }

  return (
    <>
   <div className="body-hospital-profile">    
   <Navbar Link={nav_links} />
      <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="row mt-5" id="kkkl">
            <div className="card card-deck h-90 m-lg-1" id="prof">
              <div className="card-body text-center">
                <h5 className="card-title">INFORMATION</h5>
                <p className="card-text">
                </p><table className="table" id="lef">
                  <tbody>
                    <tr>
                      <th className="th-hospital-profile"scope="row">Name</th>
                      <td>{hospitalInfo && hospitalInfo.name}</td>
                    </tr>
                    <tr>
                      <th className="th-hospital-profile"scope="row">Address</th>
                      <td>{hospitalInfo && hospitalInfo.address}</td>
                    </tr>
                    <tr>
                      <th className="th-hospital-profile"scope="row">Contact number (Primary)</th>
                      <td>{hospitalInfo && hospitalInfo.contactPrimary}</td>
                    </tr>
                    <tr>
                      <th className="th-hospital-profile"scope="row">Contact number (Secondary)</th>
                      <td>{hospitalInfo && hospitalInfo.contactSecondary}</td>
                    </tr>
                    <tr>
                      <th className="th-hospital-profile"scope="row">Email</th>
                      <td>{hospitalInfo && hospitalInfo.email}</td>
                    </tr>
                  </tbody>
                </table>
                <p />
                <button type="button" className="btn" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)'}} onClick={() => navigate("/hospital-signup")}>Update</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1 text-center text-white" id="tbb">
          <div className="card shadow">
            <div className="card-header border-0" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)'}}>
              <h3 className="mb-0">DOCTORS AVAILABLE</h3>
            </div>
            <div className="table-responsive ">
              <table className="table align-items-center table-flush" id="ab">
                <thead className="thead-light" style={{ width: '100%' }}>
                  <tr style={{ width: '100%' }}>
                    <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/3)' }} />
                    <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/3)' }} />
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => {
                    return (
                      <tr>
                        <th className="th-hospital-profile"scope="row">
                          <div className="avatar-group">
                            <a href="#" className="avatar avatar-sm" data-toggle="tooltip" data-original-title="Ryan Tompson">
                              <img alt="Image placeholder" src={sample} className="rounded-circle" />
                            </a>
                          </div>
                        </th>
                        <td>
                          <div><b>{doctor && doctor.name}</b></div>
                          <small className="form-text" style={{ fontSize: '12px' }}>{doctor && doctor.role}</small>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="row">
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* modal */}
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <div class="mb-3">
        <input type="text" className="form-control" id="blood-input" aria-label="volume" />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ background: "linear-gradient(135deg, #f75959 0%, #f35587 100%)", color: 'white' }}>Close</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ background: "linear-gradient(135deg, #f75959 0%, #f35587 100%)", color: 'white' }} onClick={()=>{addGroup(document.getElementById("blood-input").value)}}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
            <div className="col text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)'}}>
                  <h3 className="mb-0">RESOURCES LENDED</h3>
                </div>
                <div className="table-responsive">
                  <table className="table" id="kb">
                    <thead className="thead-light" style={{ width: '100%' }}>
                      <tr style={{ width: '100%' }}>
                        <th className="th-hospital-profile"scope="col-4" style={{ width: '20%' }}>Name</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: '20%' }}>Address</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: '20%' }}>Requirement</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: '20%' }}>Quantity</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: '20%' }}>Date of issue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        resourcesLended.map((resource) => {
                          return (
                            <tr>
                              <td>{resource.name} </td>
                              <td>{resource.address}</td>
                              <td>{resource.requirement}</td>
                              <td>{resource.quantity}</td>
                              <td>{resource.doi}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center text-white" id="tbb">
              <div className="card shadow">
                <div className="card-header border-0" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)'}}>
                  <h3 className="mb-0">RESOURCES BORROWED</h3>
                </div>
                <div className="table-responsive ">
                  <table className="table align-items-center table-flush" id="kb">
                    <thead className="thead-light" style={{ width: '100%' }}>
                      <tr style={{ width: '100%' }}>
                        <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/5)' }}>Name</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/5)' }}>Address</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/5)' }}>Requirement</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/5)' }}>Quantity</th>
                        <th className="th-hospital-profile"scope="col" style={{ width: 'calc(100%/5)' }}>Date of issue</th>
                        <th className="th-hospital-profile"scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        resourcesBorrowed.map((resource) => {
                          return (
                            <tr>
                              <td>{resource.name} </td>
                              <td>{resource.address}</td>
                              <td>{resource.requirement}</td>
                              <td>{resource.quantity}</td>
                              <td>{resource.doi}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 offset-1" style={{ minHeight: '500px' }} id="tbb">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1COz-HejK3DR1ZW6mh_y-3451YCzOQHk&ehbc=2E312F" width="100%" height="100%" />
        </div>
      </div>
      <div className="col ml-5 pl-5" id="ryt">
        {/* <div class="row" id="heading" style="text-align: center;">
                              <h1>RESOURCES AVAILABLE</h1>
                          </div> */}
        <div className="row mt-5">
          <div className="col-6 offset-3 my-2 pl-0">
            {/* Card */}
            <div className="card shadow rounded pl-0 my-2 " id="card">
              {/* Card image */}
              <div className="view overlay" id="drop">
                {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                <i className="fa fa-tint fa-4x" aria-hidden="true" />
              </div>
              {/* Card content */}
              <div className="card-body">
                {/* Title */}
                <h4 className="card-title">BLOOD BANK</h4>
                {/* Text */}
                <p className="card-text">
                  View the amount of blood groups currently available in the hospital.
                </p>
                {/* Button */}
                {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                <div className="read">
                  <button id="show1" className="btn"  onClick={toggleHide1}> {isHidden1 ? 'Show' : 'Hide'} </button>
                </div>
                <p className="card-text">
                </p><div id="para1" style={{ display: isHidden1 ? 'none' : 'block' }}>
                  <table className="table table-bordered">
                    <thead>
                      <tr className="lef">
                        <th>S.No. </th>
                        <th>Blood Group</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        bloodData?.map((blood, index) => {
                          return (
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{blood.bloodGroup}</td>
                              <td>{blood.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{handleEvent("blood",index)}}>
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
                </div>
                {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                <p />
              </div>
            </div>
            {/* Card */}
          </div>
          <div className="col-6 offset-3 my-2 pl-0" id="iiu">
            {/* Card */}
            <div className="card shadow rounded pl-0 my-2" id="card">
              {/* Card image */}
              <div className="view overlay" id="drop">
                {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                <i className="fa fa-heart fa-4x" aria-hidden="true" />
              </div>
              {/* Card content */}
              <div className="card-body">
                {/* Title */}
                <h4 className="card-title">ORGANS</h4>
                {/* Text */}
                <p className="card-text">
                  View the organs currently available in the hospital for transplant.
                </p>
                {/* Button */}
                {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                <div className="read">
                  <button id="show2" className="btn" onClick={toggleHide2}> {isHidden2 ? 'Show' : 'Hide'} </button>
                </div>
                <p className="card-text">
                </p><div id="para2" style={{ display: isHidden2 ? 'none' : 'block' }}>
                  <table className="table table-bordered">
                    <thead>
                      <tr className="lef">
                        <th>S.No. </th>
                        <th>Organs</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        organData?.map((organ, index) => {
                          return (
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{organ.name}</td>
                              <td>{organ.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{handleEvent("organ",index)}}>
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                <p />
              </div>
            </div>
            {/* Card */}
          </div>
          <div className="col-6 offset-3 mr-2 my-2 pl-0">
            {/* Card */}
            <div className="card shadow rounded mr-2 pl-0 my-2" id="card">
              {/* Card image */}
              <div className="view overlay" id="drop">
                {/* <a href="#!">
                                          <div class="mask rgba-white-slight"></div>
                                      </a> */}
                <i className="fa fa-bed fa-4x" aria-hidden="true" />
              </div>
              {/* Card content */}
              <div className="card-body">
                {/* Title */}
                <h4 className="card-title">EQUIPMENTS</h4>
                {/* Text */}
                <p className="card-text">
                  View the equipments currently present in the hospital.
                </p>
                {/* Button */}
                {/* <a href="#" id="button" class="btn btn-primary">Button</a> */}
                <div className="read">
                  <button id="show3" className="btn" onClick={toggleHide3}> {isHidden3 ? 'Show' : 'Hide'} </button>
                </div>
                <p className="card-text">
                </p><div id="para3" style={{ display: isHidden3 ? 'none' : 'block' }}>
                  <table className="table table-bordered">
                    <thead>
                      <tr className="lef">
                        <th>S.No. </th>
                        <th>Equipment</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        equipment.map((equip, index) => {
                          return(
                            <tr className="lef">
                              <td>{index+1}. </td>
                              <td>{equip.name}</td>
                              <td>{equip.quantity}
                              <button type="button" className="btn btn-outline float-end" id="pencil-icon" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{handleEvent("equipment",index)}}>
                                <i class="fa fa-pencil"></i>
                              </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                      
                    </tbody>
                  </table>
                </div>
                {/* <button class="btn btn-primary mt-5"> Edit my profile </button> */}
                <p />
              </div>
            </div>
            {/* Card */}
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default HospitalProfile
