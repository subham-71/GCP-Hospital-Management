import React from 'react'
import './UpdatePatientStyle.css'

export default function UpdatePatient() {
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <div className="card" style={{width: '40rem', height: '100%', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)', backgroundColor: 'rgba(219, 218, 218, 0.4)'}}>
            <div className="card-header" style={{backgroundColor: 'rgba(0, 83, 83,0.5)'}}>
              <h3 style={{color: '#084545'}}>Raise a Query</h3>
            </div>
            
                  <div className="col p-2">
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <input type="text" className="form-control" placeholder="Name of Hospital" aria-label="Name of Hospital" style={{backgroundColor: 'white'}} />
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <input type="text" className="form-control" placeholder="Resource Required" aria-label="Resource Required" style={{backgroundColor: 'white'}} />
                      </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <input type="number" className="form-control" placeholder="Quantity(Units)" aria-label="Quantity(Units)" />
                      </div>
                    </div>
                    
                    

                    <div className="row p-2 justify-content-center">
                      <div className="col-8 p-2">
                        <div className="input-group">
                          <select className="custom-select text-muted form-control" id="inputGroupSelect02">
                            <option selected>Select Urgency</option>
                            <option value={1}>Low</option>
                            <option value={2}>Medium</option>
                            <option value={3}>High</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                    <div className="row mt-4">
                      <button className="btn mb-4" style={{ backgroundColor: '#227373'}}>Send Query</button>
                      
                      {/* <a href="#" class="btn btn-primary">Update</a> */}
                    </div>
                  </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}
