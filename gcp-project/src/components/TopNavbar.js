import React from "react";
// import "./Navbar.css";

const TopNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="topbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className="navbar-nav me-auto mb-2 mb-lg-0"
                        id="top-nav-ul"
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Something else
                            </a>
                        </li>
                    </ul>
                    {/* notification */}
                    <div className="position-relative me-4">
                        <a className="text-reset me-2" href="#">
                            <i className="fa fa-bell-o" />
                        </a>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            9+
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </div>
                    {/* dropdown */}
                    <div className="dropdown me-4">
                        <a
                            href="#"
                            className="top-profile-image text-white d-flex align-items-center  text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt=""
                                className="rounded-circle"
                                width={32}
                                height={32}
                            />
                            <span
                                className="position-absolute bottom-0 bg-success rounded-circle"
                                style={{
                                    width: "10px",
                                    height: "10px !important",
                                    right: "-5px",
                                }}
                            />
                            <span className="visually-hidden">New alerts</span>
                        </a>
                        <ul
                            id="top-profile"
                            className="dropdown-menu dropdown-menu-end dropdown-menu-dark text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    Reset
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
