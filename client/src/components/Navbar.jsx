import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logoJob.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      {/* <div className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="links">
            <Link className="link" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span>{currentUser?.username}</span>
            {currentUser ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
            <span className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </span>
          </div>
        </div>
      </div> */}
      <header>
       <div className="header-area header-transparrent">
           <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            <div className="logo">
                                <a href="index.html"><img src={Logo} alt=""/></a>
                            </div>  
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><a className="text-decoration-none" href="/">Home</a></li>
                                            <li>
                                              <Link className="link" to="/?cat=art">
                                                <h6>Art</h6>
                                              </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>          
                                <div className="header-btn d-none f-right d-lg-block">
                                      <a href="#" className="btn head-btn1">
                                        {currentUser ? (
                                          <Link className="link" to="/write">
                                            Write
                                          </Link>
                                        ) : (
                                          <Link className="link" to="/register">
                                            Register
                                          </Link>
                                        )}
                                      </a>
                                    <a href="#" className="btn head-btn2">
                                    {currentUser ? (
                                      <span onClick={logout}>Logout</span>
                                    ) : (
                                      <Link className="link" to="/login">
                                        Login
                                      </Link>
                                    )}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
