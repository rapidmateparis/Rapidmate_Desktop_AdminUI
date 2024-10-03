import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import Bicycle from "../../assets/images/Bicycle.png";
import Motorbike from "../../assets/images/Motorbike.png";
import Car from "../../assets/images/Car-Img.png";
import Partner from "../../assets/images/Partner.png";
import Van from "../../assets/images/Mini-Van.png";
import Pickup from "../../assets/images/Mini-Truck.png";
import Truck from "../../assets/images/Semi-Truck.png";
import Package from "../../assets/images/Big-Package.png";
import AddVehicles from "../CommonPages/AddVehicles";
import Header from "../Header/Header";

const vehicles = [
  {
    id: 1,
    image: Bicycle,
    name: "Cycle",
    capacity: "5 liters",
    availability: "Available",
    type: "cycle",
  },
  {
    id: 2,
    image: Motorbike,
    name: "Scooter",
    capacity: "50 liters",
    availability: "Available",
    type: "scooter",
  },
  {
    id: 3,
    image: Car,
    name: "Car",
    capacity: "150 liters",
    availability: "Available",
    type: "car",
  },
  {
    id: 4,
    image: Partner,
    name: "Partner",
    capacity: "250 liters",
    availability: "Not available",
    type: "partner",
  },
  {
    id: 5,
    image: Van,
    name: "Van",
    capacity: "350 liters",
    availability: "Available",
    type: "van",
  },
  {
    id: 6,
    image: Pickup,
    name: "Pickup",
    capacity: "450 liters",
    availability: "Available",
    type: "pickup",
  },
  {
    id: 7,
    image: Truck,
    name: "Truck",
    capacity: "600 liters",
    availability: "Available",
    type: "truck",
  },
  {
    id: 7,
    image: Package,
    name: "Other",
    capacity: "Custom",
    availability: "Available",
    type: "other",
  },
];

const ManageVehicles = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getImageClass = (type) => {
    switch (type) {
      case "cycle":
        return "vehicle-cycle-img";
      case "scooter":
        return "vehicle-scooter-img";
      case "car":
        return "vehicle-car-img";
      case "partner":
        return "vehicle-partner-img";
      case "van":
        return "vehicle-van-img";
      case "pickup":
        return "vehicle-pickup-img";
      case "truck":
        return "vehicle-truck-img";
      default:
        return "vehicle-other-img";
    }
  };

  const getAvailabilityClass = (availability) => {
    return availability !== "Available" ? "adminDashboard-ManageVehicleUnavailable" : "";
  };

  return (
    <>
     {/* Header Start Here */}
     <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Manage Vehicles</h2>
            <div>
              <button className="adminAll-usersHeadplus" onClick={handleShowModal}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="row">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="col-md-4">
                <div className="adminDashboard-ManageVehicleCard">
                  <img
                    className={`adminDashboard-ManageVehicleImg ${getImageClass(vehicle.type)}`}
                    src={vehicle.image}
                    alt={vehicle.name}
                  />
                  <div>
                    <h4 className="adminDashboard-ManageVehicleNameText">
                      {vehicle.name}
                    </h4>
                    <div className="adminDashboard-ManageVehicleNameCard">
                      <p className="adminDashboard-ManageVehicleCapacity">
                        {vehicle.capacity}
                      </p>
                      <p className={`adminDashboard-ManageVehicleAvailable ${getAvailabilityClass(vehicle.availability)}`}>
                        {vehicle.availability}
                      </p>
                    </div>
                  </div>
                  <button className="adminDashboard-ManageVehicleEditBtn">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AddVehicles show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default ManageVehicles;
