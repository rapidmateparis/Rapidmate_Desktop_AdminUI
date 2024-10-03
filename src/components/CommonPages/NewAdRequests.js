import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Levis from "../../assets/images/Levis-Logo.png";
import Subway from "../../assets/images/Subway-Logo.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const newList = [
  {
    id: 1,
    image: Levis,
    company: "Company Name",
    address: "North Street, ABC",
    industry: "Clothes",
    budget: "100k",
  },
  {
    id: 2,
    image: Subway,
    company: "Company Name",
    address: "North Street, ABC",
    industry: "Clothes",
    budget: "100k",
  },
  {
    id: 3,
    image: Levis,
    company: "Company Name",
    address: "North Street, ABC",
    industry: "Clothes",
    budget: "100k",
  },
  {
    id: 4,
    image: Subway,
    company: "Company Name",
    address: "North Street, ABC",
    industry: "Clothes",
    budget: "100k",
  },
  {
    id: 5,
    image: Levis,
    company: "Company Name",
    address: "North Street, ABC",
    industry: "Clothes",
    budget: "100k",
  },
];

const NewAdRequests = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Header */}
      <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Manage Vehicles</h2>
          </div>
          <div className="row">
            {newList.map((item) => (
              <div key={item.id} className="col-md-4">
                <Link to="/new-ad-requests-details">
                  <div className="adminDashboard-NewAdRequestMainCard">
                    <img
                      className="adminDashboard-newAdsCompanyLogosImg"
                      src={item.image}
                      alt={item.company}
                    />
                    <div>
                      <h4 className="adminDashboard-ManageVehicleNameText">
                        {item.company}
                      </h4>
                      <div className="adminDashboard-ManageVehicleNameCard">
                        <p className="adminDashboard-ManageVehicleCapacity">
                          <span className="admindashboard-newAdRequestLocDot">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                          {item.address}
                        </p>
                      </div>

                      <div className="admindashboard-newAdRequestIndustryTypeCard">
                        <p className="admindashboard-newAdRequestIndustryTypeText">
                          Industry: <b>{item.industry}</b>
                        </p>
                        <p className="admindashboard-newAdRequestIndustryTypeText">
                          Budget: <b>€{item.budget}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewAdRequests;
