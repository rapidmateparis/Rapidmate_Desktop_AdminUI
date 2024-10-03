import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import AllConsumerUsers from "../AllUsersPages/AllConsumerUsers";
import AllDeliveryboyUsers from "../AllUsersPages/AllDeliveryboyUsers";
import AllEnterpriseUsers from "../AllUsersPages/AllEnterpriseUsers";
import CreateNewUserModal from "../CommonPages/CreateNewUserModal";

const AllUsers = () => {
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
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">All Users</h2>
            <div className="adminAll-userssearch-bar">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
              />
              <button onClick={handleSearch} className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                {/* FontAwesome search icon */}
              </button>
            </div>
            <div>
              <button className="adminAll-usersHeadFilter">
                <FontAwesomeIcon icon={faFilter} />
              </button>
              <button
                onClick={() => handleViewUserInfo()}
                className="adminAll-usersHeadplus"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
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
                      Consumers
                    </button>
                    <button
                      className={`tab-button ${
                        activeTab === "section2" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("section2")}
                    >
                      Delivery Boy
                    </button>
                    <button
                      className={`tab-button ${
                        activeTab === "section3" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("section3")}
                    >
                      Enterprise
                    </button>
                  </div>

                  {/* Tab content */}
                  <div className="tab-content">
                    {activeTab === "section1" && (
                      <div className="section">
                        <AllConsumerUsers />
                      </div>
                    )}
                    {activeTab === "section2" && (
                      <div className="section">
                        <AllDeliveryboyUsers />
                      </div>
                    )}
                    {activeTab === "section3" && (
                      <div className="section">
                        <AllEnterpriseUsers />
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

export default AllUsers;
