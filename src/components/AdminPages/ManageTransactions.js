import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ConsumerTransactions from "../AllTransactions/ConsumerTransactions";
import DeliveryboyTransactions from "../AllTransactions/DeliveryboyTransactions";
import EnterpriseTransactions from "../AllTransactions/EnterpriseTransactions";

const ManageTransactions = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">Manage transactions</h2>
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
              </button>
            </div>
            <button className="adminAll-usersHeadFilter">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="adminAll-usersConsumerCard">
                <div className="tabs">
                  <div className="tab-headers">
                    <button
                      className={`tab-button ${activeTab === "section1" ? "active" : ""}`}
                      onClick={() => setActiveTab("section1")}
                    >
                      Consumers
                    </button>
                    <button
                      className={`tab-button ${activeTab === "section2" ? "active" : ""}`}
                      onClick={() => setActiveTab("section2")}
                    >
                      Delivery Boy
                    </button>
                    <button
                      className={`tab-button ${activeTab === "section3" ? "active" : ""}`}
                      onClick={() => setActiveTab("section3")}
                    >
                      Enterprise
                    </button>
                  </div>
                  <div className="tab-content">
                    {activeTab === "section1" && (
                      <div className="section">
                        <ConsumerTransactions />
                      </div>
                    )}
                    {activeTab === "section2" && (
                      <div className="section">
                        <DeliveryboyTransactions/>
                      </div>
                    )}
                    {activeTab === "section3" && (
                      <div className="section">
                        <EnterpriseTransactions/>
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

export default ManageTransactions;
