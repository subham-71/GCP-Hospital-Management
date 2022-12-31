import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <section className="ftco-section">
        <div className="toast" id="toast">
          {/* <div class="toast-header"> */}
          {/* <strong class="me-auto">Toast Header</strong> */}
          {/* <button type="button" class="btn-close" data-bs-dismiss="toast"></button> */}
          {/* </div> */}
          <div className="toast-body">
            {/* text in red */}
            <div>
              Invalid username or password
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} style={{width: '0%'}} aria-valuemax={100} />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <Link className="btn btn-white btn-outline-white" to="/signup">Sign Up</Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">Username</label>
                      <input type="text" className="form-control" placeholder="Username" required />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">Password</label>
                      <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="form-group" id="submit">
                      <button type="submit" className="form-control btn btn-primary submit px-3">Sign
                        In</button>
                    </div>
                    {/* choice for doctor,patient or hospital using radio button */}
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Doctor
                          <input type="radio" name="choice" defaultValue="doctor" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Patient
                          <input type="radio" name="choice" defaultValue="patient" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">Hospital
                          <input type="radio" name="choice" defaultValue="hospital" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
