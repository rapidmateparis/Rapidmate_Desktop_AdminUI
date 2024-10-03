import React from "react";
import Enterprise from "../../assets/images/HomeIcon.png";
import Consumer from "../../assets/images/PickupDrop-Icon.png";
import Deliveryboy from "../../assets/images/Deliveryboy-Icon.png";

const users = [
  {
    id: 1,
    image: Enterprise,
    name: "Zoe Wright",
    email: "zoew@email.com",
    type: "Enterprise",
    status: "Accepted",
    dateTime: "26-03-24 10:30 AM",
  },
  {
    id: 2,
    image: Consumer,
    name: "Zoe Wright",
    email: "zoew@email.com",
    type: "Pickup & Dropoff",
    status: "Accepted",
    dateTime: "26-03-24 10:30 AM",
  },
  {
    id: 3,
    image: Deliveryboy,
    name: "Zoe Wright",
    email: "zoew@email.com",
    type: "Delivery Boy",
    status: "Accepted",
    dateTime: "26-03-24 10:30 AM",
  },
];

const AcceptedJoinRequests = () => {
  const UserInfoCard = ({ item }) => {
    // Determine the class names based on the type
    let userTypeClass = "";
    let imageClass = "";

    switch (item.type) {
      case "Enterprise":
        userTypeClass = "user-type-enterprise";
        imageClass = "user-image-enterprise";
        break;
      case "Pickup & Dropoff":
        userTypeClass = "user-type-consumer";
        imageClass = "user-image-consumer";
        break;
      case "Delivery Boy":
        userTypeClass = "user-type-deliveryboy";
        imageClass = "user-image-deliveryboy";
        break;
      default:
        userTypeClass = "user-type-default"; // Fallback class
        imageClass = "user-image-default"; // Fallback class
    }

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
            <p className="userJoinRequestAccepted">{item.status}</p>
          </div>
          <div className="col-md-2 date">
            <p className="userJoinRequestTitles">{item.dateTime}</p>
          </div>
          <div className="col-md-1">
            <button className="userJoinRequestViewBtn">View</button>
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
    </>
  );
};

export default AcceptedJoinRequests;
