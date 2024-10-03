import React, { useState } from "react";
import Enterprise from "../../assets/images/HomeIcon.png";
import Consumer from "../../assets/images/PickupDrop-Icon.png";
import Deliveryboy from "../../assets/images/Deliveryboy-Icon.png";
import Scooter from "../../assets/images/Scooter.png";
import Car from "../../assets/images/Car.png";
import EnterpriseNewJoinRequestModal from "../CommonPages/NewJoinRequestModal";

const users = [
  {
    id: 1,
    image: Enterprise,
    name: "Zoe Wright",
    email: "zoew@email.com",
    password: "1234466",
    phone: "9026985751",
    companyName: "Company Name",
    industry: "Industry",
    deliveries: "500",
    country: "France",
    department: "Ain",
    commune: "Ambérieu-en-Bugey",
    city: "Siret",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat gravida mauris aenean posuere porttitor mauris dignissim. Consectetur nascetur porta elit sagittis facilisis.",
    type: "Enterprise",
    status: "pending",
    dateTime: "26-03-24 10:30 AM",
  },
  {
    id: 2,
    image: Consumer,
    name: "Zoe Wright",
    email: "zoew@email.com",
    password: "1234466",
    phone: "9026985751",
    country: "France",
    accountType: "Individual",
    type: "Pickup & Dropoff",
    status: "pending",
    dateTime: "26-03-24 10:30 AM",
  },
  {
    id: 3,
    image: Deliveryboy,
    name: "Zoe Wright",
    email: "zoew@email.com",
    password: "1234466",
    phone: "9026985751",
    country: "France",
    department: "Ain",
    commune: "Ambérieu-en-Bugey",
    city: "Siret",
    vehicles: [
      { id: 1, type: 'Scooter', vehicleImage: Scooter,  },
      { id: 2, type: 'Car', vehicleImage: Car, },
    ],
    type: "Delivery Boy",
    status: "pending",
    dateTime: "26-03-24 10:30 AM",
  },
];

const NewJoinRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShow = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const getImageModalClass = (type) => {
    switch (type) {
      case "Enterprise":
        return "modal-user-image-enterprise";
      case "Pickup & Dropoff":
        return "modal-user-image-consumer";
      case "Delivery Boy":
        return "modal-user-image-deliveryboy";
      default:
        return "";
    }
  };

  const getUserTypeClass = (type) => {
    switch (type) {
      case "Enterprise":
        return "user-type-enterprise";
      case "Pickup & Dropoff":
        return "user-type-consumer";
      case "Delivery Boy":
        return "user-type-deliveryboy";
      default:
        return "user-type-default";
    }
  };

  const UserInfoCard = ({ item }) => {
    const userTypeClass = getUserTypeClass(item.type);
    const imageClass = (() => {
      switch (item.type) {
        case "Enterprise":
          return "user-image-enterprise";
        case "Pickup & Dropoff":
          return "user-image-consumer";
        case "Delivery Boy":
          return "user-image-deliveryboy";
        default:
          return "user-image-default";
      }
    })();

    return (
      <div className="adminAll-JoinRequestsCard">
        <div className="row">
          <div className="col-md-1">
            <img
              src={item.image}
              alt={item.name}
              className={`user-image ${imageClass}`}
            />
          </div>
          <div className="col-md-2 name">
            <p className="userJoinRequestTitles">{item.name}</p>
          </div>
          <div className="col-md-3 email">
            <p className="userJoinRequestTitles">{item.email}</p>
          </div>
          <div className="col-md-2 date">
            <p className={`userJoinRequestAccType ${userTypeClass}`}>
              {item.type}
            </p>
          </div>
          <div className="col-md-1 date">
            <p className="userJoinRequestPending">{item.status}</p>
          </div>
          <div className="col-md-2 date">
            <p className="userJoinRequestTitles">{item.dateTime}</p>
          </div>
          <div className="col-md-1">
            <button
              className="userJoinRequestViewBtn"
              onClick={() => handleShow(item)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <p className="userJoinRequestHeadTitles">Name</p>
        </div>
        <div className="col-md-3">
          <p className="userJoinRequestHeadTitles">Email</p>
        </div>
        <div className="col-md-2">
          <p className="userJoinRequestHeadTitles">Account Type</p>
        </div>
        <div className="col-md-1">
          <p className="userJoinRequestHeadTitles">Status</p>
        </div>
        <div className="col-md-2">
          <p className="userJoinRequestHeadTitles">Date & Time</p>
        </div>
        <div className="col-md-1">
          <p></p>
        </div>
      </div>
      <div className="list-container">
        {users.map((user) => (
          <UserInfoCard key={user.id} item={user} />
        ))}
      </div>

      {/* Modal Component */}
      <EnterpriseNewJoinRequestModal
        show={showModal}
        handleClose={handleClose}
        user={selectedUser}
        imageModalClass={
          selectedUser ? getImageModalClass(selectedUser.type) : ""
        }
        userTypeClass={selectedUser ? getUserTypeClass(selectedUser.type) : ""}
      />
    </>
  );
};

export default NewJoinRequests;
