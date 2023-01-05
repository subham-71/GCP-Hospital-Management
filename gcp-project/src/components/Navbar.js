import React from "react";
import "../Styles/Navbar.css"
import { useAuth } from '../contexts/AuthContext';
import sample from "../images/sample.png"
import { useNavigate } from "react-router-dom";


const Navbar = ({Link=null, pfpLink=null}) => {
  const {logout} = useAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
    navigate('/login')
  };
  
  return (

    <div className="d-flex flex-row flex-shrink-0" id="navbar">
      {/* <div className="container" style={{ height: '10rem' }}>
      </div> */}
      {/* <div id="nav_layout">
      <ul className="nav nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="#" className="nav-link active py-3" aria-current="page" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            <i className="fa fa-user-o" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link py-3" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
            <i className="fa fa-dashboard" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link py-3" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
            <i className="fa fa-calendar-o" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link py-3" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
            <i className="fa fa-folder-o" />
          </a>
        </li>
        <li>
        </li>
      </ul>
      </div> */}
      <div className="dropdown " id="nav_layout">
        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={pfpLink ? pfpLink : sample} alt="mdo" className="rounded-circle" width={24} height={24} />
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          {/* <li><a className="dropdown-item" href="#">Reset</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li> */}
          {Link && 
            Link.map((item, index) => {
              return (
                <li><a className="dropdown-item item" href={item.link}>{item.name}</a></li>
              )
            })
          }
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li><button className="dropdown-item" onClick={()=>handleLogout()}>Sign out</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
