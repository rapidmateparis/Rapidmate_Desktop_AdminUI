import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RequestIcon from "../../assets/images/request-Icon.png";
import CreateNewUserModal from "../CommonPages/CreateNewUserModal";
import LiveAds from "../AllManageAds/LiveAds";
import { Link } from "react-router-dom";
import OfflineAds from "../AllManageAds/OfflineAds";

const ManageAds = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("section1");
  const [query, setQuery] = useState("");
  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleViewUserInfo = (user) => {
    toggleModal();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };
  return (
    <>
      {/* Header Start Here */}
      <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-requestNewAdHeadCard">
            <h2 className="adminAll-usersTitleText">Manage Ads</h2>
            <Link to="/new-ad-requests">
              <div className="adminDashboard-newAdRequestMainCard">
                <img
                  className="adminDashboard-newAdRequestImg"
                  src={RequestIcon}
                  alt="icon"
                />
                <div>
                  <h4 className="adminDashboard-newAdRequesttext">
                    8 new ad requests
                  </h4>
                  <p className="adminDashboard-newAdRequestSubText">
                    Review the pending ad requests
                  </p>
                </div>
                <span className="adminDashboard-newAdRequestArrowicon">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </Link>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="adminAll-usersConsumerCard">
                <div className="tabs">
                  {/* Tab headers */}
                  <div className="tab-headers">
                    <button
                      className={`tab-button ${
                        activeTab === "section1" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("section1")}
                    >
                      Live
                    </button>
                    <button
                      className={`tab-button ${
                        activeTab === "section2" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("section2")}
                    >
                      Offline
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="tab-content">
                    {activeTab === "section1" && (
                      <div className="section">
                        <LiveAds />
                      </div>
                    )}
                    {activeTab === "section2" && (
                      <div className="section">
                        <OfflineAds />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreateNewUserModal show={isModalVisible} handleClose={toggleModal} />
      </section>
    </>
  );
};

export default ManageAds;
