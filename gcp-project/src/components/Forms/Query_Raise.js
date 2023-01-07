import React, { useRef, useState, useEffect } from 'react'
import '../../Styles/UpdatePatientStyle.css';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Query_Raise() {

  const name = useRef();
  const address = useRef();
  const email = useRef();
  const Urgency = useRef();
  const quantity = useRef();
  const requirement = useRef();

  useEffect(() => {
    let e1 = document.getElementById("inputGroupSelect03");
    const onChangeOption = () => {
      Urgency.current = e1.options[e1.selectedIndex].text;
      // console.log(BloodGroup,Gender);
    }
    e1.onchange = onChangeOption;
    onChangeOption();
  }, [])


  const navigate = useNavigate();

  const updateQuery = async () => {

    console.log(name);

    await db.collection('hospitalQuery').add(
      {
        name: name.current.value,
        urgency: Urgency.current == "Select Urgency" ? "Low" : Urgency.current,
        quantity: quantity.current.value,
        requirement: requirement.current.value,
        address: address.current.value,
        email: email.current.value
      })
    //await addDoc(userDoc, newFields)
    navigate('/hospital-query')
  };



  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)' }}>
          <div className="card-header" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%)' }}>
            <h3 style={{ color: 'white' }}>Raise a Query</h3>
          </div>

          <div className="col p-2">
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <input ref={name} type="text" className="form-control" placeholder="Name of Hospital" aria-label="Name of Hospital" style={{ backgroundColor: 'white' }} />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <div className="input-group">
                  <input ref={requirement} type="text" className="form-control" placeholder="Resource required" aria-label="Resource required" style={{ backgroundColor: 'white' }} />
                </div>
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <input ref={quantity} type="number" className="form-control" placeholder="Quantity(Units)" aria-label="Quantity(Units)" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <input ref={address} type="text" className="form-control" placeholder="Address" aria-label="Address" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <input ref={email} type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
              </div>
            </div>
            <div className="row p-2 justify-content-center">
              <div className="col-8 p-2">
                <div className="input-group">
                  <select className="custom-select text-muted form-control" id="inputGroupSelect03">
                    <option selected>Select Urgency</option>
                    <option value={"Low"}>Low</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"High"}>High</option>
                  </select>
                </div>
              </div>
            </div>



            {/* <div className="row p-2 justify-content-center">
                <div className="col-8 p-2">
                  <div className="input-group">
                    <select className="custom-select text-muted form-control" id="inputGroupSelect02">
                      <option selected>Select Urgency</option>
                      <option onClick ={()=>setPriority("Low")}>Low</option>
                      <option value={2}>Medium</option>
                      <option value={3}>High</option>
                    </select>
                  </div>
                </div>
              </div> */}

            <div className="d-flex justify-content-center">
              <div className="row mt-4">
                <button className="btn mb-4" style={{ background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%) ' , color : 'white'}} onClick={() => updateQuery()}>Send Query</button>

                {/* <a href="#" class="btn btn-primary">Update</a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}