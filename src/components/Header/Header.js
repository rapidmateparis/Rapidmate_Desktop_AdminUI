import React, { useEffect } from "react";
import Logo from "../../assets/images/App-Icon.png";
import Admin from "../../assets/images/Admin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
      navigate('/');
      window.location.reload();
  };
  
  return (
    <>
      <section className="adminHeader-Section">
        <div className="adminHeader-LogoCard">
          <img className="adminHeader-Logo" src={Logo} alt="logo" />
          <h2 className="adminHeader-CompanyName">Rapidmate</h2>
        </div>
        <div className="adminHeader-ProfileCard">
          <Link className="adminHeader-BellIconBtn" to="/some-path">
            <FontAwesomeIcon icon={faBell} />
          </Link>

          <Link className="adminHeader-settingIconBtn" to="/some-path">
            <FontAwesomeIcon icon={faGear} />
          </Link>

          <Dropdown>
            <Dropdown.Toggle
              className="pickupHeader-profileActionBtn"
              id="dropdown-basic"
            >
              <img
                className="pickupHeader-ProfileImg"
                src={Admin}
                alt="Profile"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="pickupHeader-accountTextsActions" to="/">
                  Your Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="pickupHeader-accountTextsActions">
                <Link className="pickupHeader-accountTextsActions" to="/">
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="pickupHeader-accountTextsActions">
                <button onClick={handleLogout} className="pickupHeader-accountTextsActions" to="/">
                  Logout
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
    </>
  );
};

export default Header;
