import React, { useState } from "react";
import "../assets/css/Home.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const EmployeeSignup = () => {
  const navigate = useNavigate();
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!confirmPassword);
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
                    <h2 className="adminLogin-welcomeTitle">
                      Employee signup!
                    </h2>
                    <p className="adminLogin-subTitle">
                      Please Fill Your Details
                    </p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <div className="password-wrapper">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <div className="password-wrapper">
                        <Form.Control
                          type={confirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                        />
                        <span
                          className="password-toggle"
                          onClick={handleToggleConfirmPassword}
                        >
                          {confirmPassword ? (
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

                    <Form.Group className="mb-3" controlId="formPlaintext">
                      <div className="pickupSignup-container">
                        <Form.Select
                          className="select-numberByCountry"
                          aria-label="Default select example"
                        >
                          <option value="1">+33</option>
                          <option value="2">+91</option>
                          <option value="3">+11</option>
                        </Form.Select>
                        <Form.Control
                          className="password-field signup-user-name"
                          type="text"
                          placeholder="0 00 00 00 00"
                        />
                      </div>
                    </Form.Group>

                    <div className="adminLogin-buttonCard">
                      <button onClick={handleLoginClick} className="adminLogin-button">
                        Signup
                      </button>
                    </div>
                    <div className="adminLogin-alreadyAccountCard">
                      <Link to="/" className="adminLogin-alreadyAccountText">
                        Already have an account?{" "}
                        <span className="adminLogin-RegisterText">Login</span>
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

export default EmployeeSignup;
