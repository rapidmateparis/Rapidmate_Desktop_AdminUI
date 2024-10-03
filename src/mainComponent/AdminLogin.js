import React, { useState } from "react";
import "../assets/css/Home.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
    window.location.reload();
  };

  return (
    <>
      <section className="adminLogin-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="adminLogin-MainCard">
                <div className="adminLogin-Card">
                  <div className="adminLogin-welcomeCard">
                    <h2 className="adminLogin-welcomeTitle">Welcome!</h2>
                    <p className="adminLogin-subTitle">Login with email</p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="adminLogin-Labels">
                        Email
                      </Form.Label>
                      <Form.Control type="email" placeholder="Type here.." />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="adminLogin-Labels">
                        Password
                      </Form.Label>
                      <div className="password-wrapper">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Type here.."
                        />
                        <span
                          className="password-toggle"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <FontAwesomeIcon
                              className="adminLogin-eyeBtn"
                              icon={faEye}
                            />
                          ) : (
                            <FontAwesomeIcon
                              className="adminLogin-eyeBtn"
                              icon={faEyeSlash}
                            />
                          )}
                        </span>
                      </div>
                    </Form.Group>
                    <div className="adminLogin-ForgotPasswordCard">
                      <Link to="/" className="adminLogin-ForgotPasswordText">
                        Forgot your password?
                      </Link>
                    </div>
                    <div className="adminLogin-buttonCard">
                      <button onClick={handleLoginClick} className="adminLogin-button">
                        Login
                      </button>
                    </div>
                    <div className="adminLogin-alreadyAccountCard">
                      <Link to="/employee-signup" className="adminLogin-alreadyAccountText">
                        Don’t have an account yet? <span className="adminLogin-RegisterText">Register</span>
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
