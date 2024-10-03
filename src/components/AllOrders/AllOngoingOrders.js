import React from "react";
import Package from "../../assets/images/Package.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const orders = [
  {
    id: 1,
    image: Package,
    title: "Delivered on Apr 19, 2024 at 11:30 AM",
    status: "Priority",
    from: "North Street, ABC",
    to: "5th Avenue, XYZ",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
  {
    id: 2,
    image: Package,
    title: "Delivered on Apr 19, 2024 at 11:30 AM",
    status: "",
    from: "North Street, ABC",
    to: "5th Avenue, XYZ",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
  {
    id: 3,
    image: Package,
    title: "Delivered on Apr 19, 2024 at 11:30 AM",
    status: "",
    from: "North Street, ABC",
    to: "5th Avenue, XYZ",
    Orderid: "98237469",
    Orderby: "John Doe",
    deliveryboy: "Mike Anthony",
    vehicle: "Mini Truck",
  },
];

const AllOngoingOrders = () => {
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
                {order.status && (
                  <p className="adminAllOngoing-PriorityText">{order.status}</p>
                )}
              </div>
              <div className="adminAllOngoing-details">
                <div className="adminAllOngoing-fromLocCard">
                  <FontAwesomeIcon
                    className="adminAllOngoing-fromLocIcon"
                    icon={faLocationDot}
                  />
                  <p className="adminAllOngoing-fromLocText">
                    From <span>{order.from}</span>
                  </p>
                </div>

                <div className="adminAllOngoing-fromLocCard">
                  <FontAwesomeIcon
                    className="adminAllOngoing-fromLocIcon"
                    icon={faLocationCrosshairs}
                  />
                  <p className="adminAllOngoing-fromLocText">
                    To <span>{order.to}</span>
                  </p>
                </div>
                <p className="adminAllOngoing-OrderiDtext">
                  Order ID: <span>{order.Orderid}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Order by: <span>{order.Orderby}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Delivery boy: <span>{order.deliveryboy}</span>
                </p>
                <p className="adminAllOngoing-OrderiDtext">
                  Vehicle: <span>{order.vehicle}</span>
                </p>
                <Link to="/delivery-details" className="adminAllOngoing-ViewDeliveryDetail">View</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllOngoingOrders;
