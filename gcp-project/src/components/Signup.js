import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Signup() {
  return (
    <div>
        <div className="container mt-3">
        </div>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                  <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                    <div className="text w-100">
                      <h2>Welcome to Sign Up</h2>
                      <p>Already have an account?</p>
                      <Link className="btn btn-white btn-outline-white" to="/login">Sign In</Link>
                    </div>
                  </div>
                  <div className="login-wrap p-4 p-lg-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Register</h3>
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
                      <div className="form-group mb-3">
                        <label className="label" htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Password" required />
                      </div>
                      <div className="form-group">
                        <button type="submit" id="register" className="form-control btn btn-primary submit px-3">Register</button>
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
      </div>
  )
}
