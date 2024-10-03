import React from "react";
import Header from "../Header/Header";
import Consumer from "../../assets/images/consumer.png";
import DeliveryBoy from "../../assets/images/delivery-boy.png";
import Enterprise from "../../assets/images/architecture.png";
import TotalOrder from "../../assets/images/order-delivery.png";
import CompletedOrder from "../../assets/images/checking.png";
import CanceledOrder from "../../assets/images/cancel.png";
import Request from "../../assets/images/request-Icon.png";
import ManageOrder from "../../assets/images/manage-orderIcon.png";
import ManageAds from "../../assets/images/manage-adsIcon.png";
import ManagePayment from "../../assets/images/manage-paymentIcon.png";
import ManageSchedules from "../../assets/images/manage-schedulesIcon.png";
import SupportRequest from "../../assets/images/support-requestIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* Header Start Here  */}
      <Header />

      {/* Dashboard Section start Here  */}
      <section className="adminDashboard-Section">
        <div>
          <div className="row manageRow">
            <div className="col-md-12">
              <div className="adminDashboard-TodayCard">
                <h2 className="adminDashboard-TodayDate">26 August, 2024</h2>
                <p className="adminDashboard-TitleDiscription">
                  Rapidmate admin panel
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">
                    Total Consumers
                  </p>
                  <h4 className="adminDashboard-ConsumersCounts">08</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={Consumer}
                  alt="icon"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">
                    Total Delivery boys
                  </p>
                  <h4 className="adminDashboard-ConsumersCounts">52</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={DeliveryBoy}
                  alt="icon"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">
                    Total Enterprises
                  </p>
                  <h4 className="adminDashboard-ConsumersCounts">362</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={Enterprise}
                  alt="icon"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">Total Orders</p>
                  <h4 className="adminDashboard-ConsumersCounts">12K</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={TotalOrder}
                  alt="icon"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">
                    Completed Orders
                  </p>
                  <h4 className="adminDashboard-ConsumersCounts">11.5K</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={CompletedOrder}
                  alt="icon"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="adminDashboard-OrderCards">
                <div>
                  <p className="adminDashboard-ConsumersTexts">
                    Canceled Orders
                  </p>
                  <h4 className="adminDashboard-ConsumersCounts">486</h4>
                </div>
                <img
                  className="adminDashboard-ConsumersImg"
                  src={CanceledOrder}
                  alt="icon"
                />
              </div>
            </div>
          </div>

          <div className="adminDashboard-AllRequestCards">
            <div className="row manageRow">
              <div className="col-md-4">
                <Link to="/">
                  <div className="adminDashboard-RequestCard">
                    <img
                      className="adminDashboard-RequestImg"
                      src={Request}
                      alt="Icon"
                    />
                    <div>
                      <h4 className="adminDashboard-RequestTitleText">12 new requests</h4>
                      <p className="adminDashboard-RequestDiscriptionText">You recently missed 10 connections</p>
                    </div>
                    <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                  </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/">
                <div className="adminDashboard-RequestCard">
                  <img className="adminDashboard-ManageOrderImg" src={ManageOrder} alt="Icon"/>
                  <div>
                    <h4 className="adminDashboard-ManageOrderText">Manage delivery orders</h4>
                  </div>
                  <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/">
                <div className="adminDashboard-RequestCard">
                  <img className="adminDashboard-ManageAdsImg" src={ManageAds} alt="Icon"/>
                  <div>
                    <h4 className="adminDashboard-ManageOrderText">Manage Ads</h4>
                  </div>
                  <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/">
                <div className="adminDashboard-RequestCard">
                  <img className="adminDashboard-ManagePaymentImg" src={ManagePayment} alt="Icon"/>
                  <div>
                    <h4 className="adminDashboard-ManageOrderText">Manage Payments & Transactions</h4>
                  </div>
                  <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/">
                <div className="adminDashboard-RequestCard">
                  <img className="adminDashboard-ManageSchedulesImg" src={ManageSchedules} alt="Icon"/>
                  <div>
                    <h4 className="adminDashboard-ManageOrderText">Manage Schedules</h4>
                  </div>
                  <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                </div>
                </Link>
              </div>

              <div className="col-md-4">
                <Link to="/">
                <div className="adminDashboard-RequestCard">
                  <img className="adminDashboard-SupportRequestImg" src={SupportRequest} alt="Icon"/>
                  <div>
                    <h4 className="adminDashboard-ManageOrderText">Support Requests</h4>
                  </div>
                  <FontAwesomeIcon
                      className="adminDashboard-RequestArrowRightIcon"
                      icon={faArrowRight}
                    />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
