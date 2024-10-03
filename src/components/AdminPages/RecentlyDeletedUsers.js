import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ConsumerRecentlyDeletedUsers from "../AllRecentlyDeletedUsers/ConsumerRecentlyDeletedUsers";
import DeliveryboyRecentlyDeletedUsers from "../AllRecentlyDeletedUsers/DeliveryboyRecentlyDeletedUsers";
import EnterpriseRecentlyDeletedUsers from "../AllRecentlyDeletedUsers/EnterpriseRecentlyDeletedUsers";

const RecentlyDeletedUsers = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const [query, setQuery] = useState("");

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
            <h2 className="adminAll-usersTitleText">Recently deleted users</h2>
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
                        <ConsumerRecentlyDeletedUsers/>
                      </div>
                    )}
                    {activeTab === "section2" && (
                      <div className="section">
                        <DeliveryboyRecentlyDeletedUsers/>
                      </div>
                    )}
                    {activeTab === "section3" && (
                      <div className="section">
                        <EnterpriseRecentlyDeletedUsers/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyDeletedUsers;
