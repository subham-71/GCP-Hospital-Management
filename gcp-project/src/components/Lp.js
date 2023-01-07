import React from 'react'
import { useNavigate } from 'react-router-dom'
import './lp.css'

export default function Lp() {
  const navigate = useNavigate()
  return (
    <div>
        <div id="header">
          <div id="tophead" className="container">
            <div className="row">
              <div className="col-md-4">
                <h1 id="logo" className="mt-md-1">Company Name</h1>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <ul id="menu" >
                    <li> <a href="#banner">Home</a></li>
                    <li> <a href="#aboutus">About Us</a></li>
                    <li> <a href="#testimonials">Testimonials</a></li>
                    <li><button className="lp-b" onClick={()=>navigate("/login")}>Login</button></li>
                    <li> <button className="lp-b" onClick={()=>navigate("/signup")}>Signup</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="banner" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-8">
                <div className="banner-title">
                  <h1 className="title">Welcome aboard !!</h1>
                  <p className="lead">Implementing telehealth to provide access to health care services remotely and manage your healthcare in a better way. Here's a platform to provide dedicated healthcare under one roof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mx-auto" id="aboutus" style={{background: 'linear-gradient(135deg, #f75959 0%, #f35587 100%) '}}>
          <div className="row" id="about">
            <div className="col-12">
              <h2 className="section-head">About us</h2>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-ambulance" />
                <h3>Sign-up as Hospital</h3>
                <p>This portal allows all hospitals to raise a query(incase they need some resource) and to reply to a query(if they have surplus resources and can share/sell). Along with this, they will have to update the amount of resources available to them at regular intervals</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-user-md" />
                <h3>Sign-up as Doctor</h3>
                <p>After signing up as a doctor, you will get your daily appointments at a single click. Also, you will be able to view all your patients' past records along with their health monitoring graphs. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-hotel" />
                <h3>Sign-up as patient</h3>
                <p>A patient can book online appointment at any hospital of their choice and also access the past prescriptions and medicines recommended by their doctors, all at one place</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container section" id="testimonials">
          {/* <div class="row">
            <div class="col-md-12">
                <h2 class="section-head">Testimonials</h2>
            </div>
            <div class="col-md-6">
                <div class="testimonial">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sint eos recusandae et beatae!
                        Porro eveniet cumque hic qui dolorum?</p>
                    <img src="" alt="" srcset="">
                    <div class="author">Bill Gates</div>
                    <div class="company">Microsoft</div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="testimonial">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sint eos recusandae et beatae!
                        Porro eveniet cumque hic qui dolorum?</p>
                    <img src="" alt="" srcset="">
                    <div class="author">Bill Gates</div>
                    <div class="company">Microsoft</div>
                </div>
            </div>
        </div> */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h2 className="section-head">Testimonials</h2>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  {/* Carousel */}
                  <div className="carousel-inner">
                    <div className="item carousel-item active">
                      <div className="img-box"><img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" /></div>
                      <p className="testimonial">It is a great help to book any preferred doctor instantly.</p>
                      <p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" /></div>
                      <p className="testimonial">Amazing website! Makes our work much easier and organized as doctors</p>
                      <p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" /></div>
                      <p className="testimonial">Being a diabetic patient, it helped me keep a track of my glucose level</p>
                      <p className="overview"><b>Hellen Wright</b>, Athelete</p>
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <button className="carousel-control left carousel-control-prev"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i className="fa fa-angle-left" />
                  </button>
                  <button className="carousel-control right carousel-control-next"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <i className="fa fa-angle-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section">
          <div className="row text-center d-flex justify-content-center">
            <div className="col-md-6">
              <h2 id="contact"className="section-head">Contact us</h2>
              <form>
                {/* Name input */}
                <div className="form-outline mb-4">
                  <input type="text" id="form4Example1" className="form-control" />
                  <label className="form-label" htmlFor="form4Example1">Name</label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form4Example2" className="form-control" />
                  <label className="form-label" htmlFor="form4Example2">Email address</label>
                </div>
                {/* Message input */}
                <div className="form-outline mb-4">
                  <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} />
                  <label className="form-label" htmlFor="form4Example3">Message</label>
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex mb-4">
                  {/* <input className="form-check-input me-2" type="checkbox" defaultValue id="form4Example4" defaultChecked />
                  <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this message
                  </label> */}
                  <label className="checkbox-wrap checkbox-primary mb-0">Send me a copy of this message
                        <input type="checkbox" name="copy_response" defaultValue id="form4Example4" defaultChecked />
                        <span className="checkmark" />
                  </label>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">Team details</div>
          <div className="footer text-center d-flex align-items-center justify-content-center">
            <table className="table table-borderless text-center" style={{width: '50%'}}>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href= "mailto:2020csb1106@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2 social" />
                    <a href="https://www.linkedin.com/in/parth-jain-7148061bb/" className="fa fa-linkedin-square fa-lg mx-2 social" />
                    <a href="https://github.com/Parth-Jain-2002" className="fa fa-github fa-lg mx-2 social" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">PranavKumar Mallela</td>
                  <td><a href="mailto:2020csb1112@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/pranavkumar-mallela-27980b210/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/pranav-mallela" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Pooja Goyal</td>
                  <td><a href="mailto:2020csb1108@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/pooja-goyal-565401200/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/Pooja-Goyal-1" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Sukhmeet Singh</td>
                  <td><a href="mailto:2020csb1129@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/sukhmeet-singh-cse/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/SukhmeetSingh2002" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Pratham Kundan</td>
                  <td><a href="mailto:2020csb1114@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/pratham-kundan-126513208/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/prathamkundan" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Alankrit Kadian</td>
                  <td><a href="mailto:2021csb1065@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/alankrit-kadian-a848a623a/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/alankritkadian" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Siddhi Apraj</td>
                  <td><a href="mailto:2021mcb1251@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/siddhi-apraj-9b837a231/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/SiddhiApraj7" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Ashima Goyal</td>
                  <td><a href="mailto:2021csb1075@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/ashima-goyal-66966b227/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/ashima-09" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Simran Kaur</td>
                  <td><a href="mailto:2021csb1134@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/simran-kaur-096bb5244/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/Simran042" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Tanisha Daharwal</td>
                  <td><a href="mailto:2021mcb1251@iitrpr.ac.in" className="fa fa-envelope fa-lg mx-2" />
                    <a href="https://www.linkedin.com/in/tanisha-daharwal-4b2394226/" className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href="https://github.com/tanishadaharwal" className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
