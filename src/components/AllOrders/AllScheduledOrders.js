import React from "react";
import Calender from "../../assets/images/Calender.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const orders = [
  {
    id: 1,
    image: Calender,
    title: "11 AM to 04 PM",
    shift: "5 hours shift",
    location: "North Franchise",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
  {
    id: 2,
    image: Calender,
    title: "11 AM to 04 PM",
    shift: "5 hours shift",
    location: "North Franchise",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
  {
    id: 3,
    image: Calender,
    title: "11 AM to 04 PM",
    shift: "5 hours shift",
    location: "North Franchise",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
];

const AllScheduledOrders = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-12">
          {orders.map((order) => (
            <div key={order.id} className="adminAllOngoingMainCard">
              <div className="adminAllOngoing-headSecCard">
                <img
                  className="adminAllOngoing-PackageImage"
                  src={order.image}
                  alt="Package"
                />
                <h4 className="adminAllOngoing-DateTimeText">{order.title}</h4>
                <h4 className="adminAllOngoing-ShiftStatusText">{order.shift}</h4>
              </div>
              <div className="adminAllOngoing-details">
                <div className="adminAllOngoing-fromLocCard">
                  <FontAwesomeIcon
                    className="adminAllOngoing-fromLocIcon"
                    icon={faLocationDot}
                  />
                  <p className="adminAllOngoing-fromLocText">
                    From <span>{order.location}</span>
                  </p>
                </div>

                <p className="adminAllOngoing-OrderiDtext">
                  Order ID: <span>{order.Orderid}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Shift requested by: <span>{order.Orderby}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Delivery boy: <span>{order.deliveryboy}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Vehicle: <span>{order.vehicle}</span>
                </p>
                <Link to="/schedule-delivery-details" className="adminAllOngoing-ViewDeliveryDetail">View</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllScheduledOrders;
