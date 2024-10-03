import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Deliveryboy from "../../assets/images/Deliveryboy.jpeg";
import { Form } from "react-bootstrap";

// Sample data for delivery boys
const deliveryBoys = [
  { id: "deliveryboy1", name: "Mike Anthony", vehicles: "Mini Truck, Scooter, Partner", status: "Unavailable" },
  { id: "deliveryboy2", name: "John Doe", vehicles: "Bike, Van", status: "Available" },
  { id: "deliveryboy3", name: "Jane Smith", vehicles: "Scooter, Truck", status: "Unavailable" },
  { id: "deliveryboy4", name: "Jane Smith", vehicles: "Scooter, Truck, Van", status: "Available" },
];

const AssignDeliveryboy = () => {
  const [query, setQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  const handleCardSelect = (id) => {
    setSelectedCard(id);
  };

  return (
    <>
      {/* Header Start Here */}
      <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">Assign delivery boy</h2>
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
          <div className="adminDashboard-AssigndeliveryboyMainCard">
            <div className="row">
              {deliveryBoys.map((deliveryboy) => (
                <div className="col-md-4" key={deliveryboy.id}>
                  <div
                    className={`adminDashboard-AssigndeliveryboyCard ${selectedCard === deliveryboy.id ? 'selected' : ''}`}
                    onClick={() => handleCardSelect(deliveryboy.id)}
                  >
                    <img
                      className="adminDashboard-AssigndeliveryboyImg"
                      src={Deliveryboy}
                      alt="Deliveryboy"
                    />
                    <div>
                      <h4 className="adminDashboard-AssigndeliveryboyName">
                        {deliveryboy.name}
                      </h4>
                      <p className="adminDashboard-AssigndeliveryboyVehicles">
                        {deliveryboy.vehicles}
                      </p>
                      <button className="adminDashboard-AssigndeliveryboyProfileView">
                        View profile{" "}
                        <span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </button>
                    </div>
                    <div className="adminDashboard-AssigndeliveryboySelectionCard">
                      <Form>
                        <Form.Check
                          type="radio"
                          id={deliveryboy.id}
                          checked={selectedCard === deliveryboy.id}
                          onChange={() => handleCardSelect(deliveryboy.id)}
                          className="visually-hidden-radios"
                        />
                      </Form>
                      {deliveryboy.status === "Unavailable" && (
                        <p className="adminDashboard-AssigndeliveryboyUnavailableText">
                          {deliveryboy.status}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
               <div className="col-md-12">
                    <div className="adminDashboard-AssigndeliveryboyBtnCard">
                      <button>Assign delivery boy</button>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignDeliveryboy;
