import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import '../Styles/Login.css'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
    //   await login(emailRef.current.value, passwordRef.current.value)
      // if(userRole === "doctor"){
      //   navigate("/patient-list")
      // }
      // else if(userRole === "patient"){
      //   navigate("/profile")
      // }
      // else if(userRole === "hospital"){
      //   navigate("/hospital-query")
      // }
      // else{
      //   navigate("/card")
      // }
    //   navigate("/profile")   
    console.log(emailRef.current.value)
    } catch {
      setError('Wrong email or password')
    }
    setLoading(false)
  }

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
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} style={{ width: '0%' }} aria-valuemax={100} />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Forget Password</h2>
                  <p>Know your password</p>
                  <Link className="btn btn-white btn-outline-white" to="/login">Log In</Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Forget Password</h3>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="signin-form">
                  {error && <Alert variant="danger">{error}</Alert>}
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Email</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group" id="submit">
                    <button disabled={loading} type="submit" className="form-control btn btn-primary submit px-3">Send Email</button>
                  </div>
                  {/* choice for doctor,patient or hospital using radio button */}
                  {/* <div className="form-group d-md-flex">
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
                    </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
