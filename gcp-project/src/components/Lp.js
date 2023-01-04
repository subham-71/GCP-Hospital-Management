import React from 'react'
import './lp.css'

export default function Lp() {
  return (
    <div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1 id="logo" className="mt-md-1">Company Name</h1>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <ul id="menu" className>
                    <li> <a href="#banner">Home</a></li>
                    <li> <a href="#aboutus">About Us</a></li>
                    <li> <a href="#testimonials">Testimonials</a></li>
                    <li><a href>Login</a></li>
                    <li> <a href>Sign up</a></li>
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
                  <h1 className="title">Some heading goes here</h1>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat alias, nostrum
                    mollitia repellendus ex atque, laudantium quam reiciendis deleniti maxime optio dicta
                    blanditiis necessitatibus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section" id="aboutus">
          <div className="row" id="about">
            <div className="col-md-12">
              <h2 className="section-head">Some Heading Goes Here</h2>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-anchor" />
                <h3>Some Heading</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sint eos recusandae et beatae!
                  Porro eveniet cumque hic qui dolorum?</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-diamond" />
                <h3>Some Heading</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sint eos recusandae et beatae!
                  Porro eveniet cumque hic qui dolorum?</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <i className="fa fa-wifi" />
                <h3>Some Heading</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sint eos recusandae et beatae!
                  Porro eveniet cumque hic qui dolorum?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container section" id="testimonials">

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-center m-auto">
                <h2 className="section-head">Testimonials</h2>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  {/* Carousel */}
                  <div className="carousel-inner">
                    <div className="item carousel-item active">
                      <div className="img-box"><img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" /></div>
                      <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                        eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec
                        turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus.
                        Suspendisse varius nibh non aliquet.</p>
                      <p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" /></div>
                      <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus.
                        Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                        Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit
                        amet gravida nibh, facilisis gravida odio.</p>
                      <p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
                    </div>
                    <div className="item carousel-item">
                      <div className="img-box"><img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" /></div>
                      <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                        id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at
                        accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                        fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                      <p className="overview"><b>Hellen Wright</b>, Athelete</p>
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-angle-left" />
                  </a>
                  <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container section">
          <div className="row text-center d-flex justify-content-center">
            <div className="col-md-6">
              <h2 className="section-head">Contact us</h2>
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
                  <input className="form-check-input me-2" type="checkbox" defaultValue id="form4Example4" defaultChecked />
                  <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this message
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
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href className="fa fa-envelope fa-lg mx-2" />
                    <a href className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href className="fa fa-envelope fa-lg mx-2" />
                    <a href className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href className="fa fa-envelope fa-lg mx-2" />
                    <a href className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href className="fa fa-envelope fa-lg mx-2" />
                    <a href className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">Parth Jain</td>
                  <td><a href className="fa fa-envelope fa-lg mx-2" />
                    <a href className="fa fa-linkedin-square fa-lg mx-2" />
                    <a href className="fa fa-github fa-lg mx-2" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}
