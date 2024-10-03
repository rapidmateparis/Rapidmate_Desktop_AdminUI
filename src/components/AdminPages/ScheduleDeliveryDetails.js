import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Requester from "../../assets/images/Requester.png";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const ScheduleDeliveryDetails = () => {
  return (
    <>
      {/* Header Start Here  */}
      <Header />

      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">Delivery Details</h2>
            <button className="adminAll-usersHeaddownloadBtn">
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="adminDashboard-deliveryDetailsMainCard">
                <div className="row">
                  <div className="col-md-8">
                    <div className="adminDashboard-ScheduleDeliveryOverviewShadowCard">
                      <div className="adminDashboard-ScheduleDeliveryOverviewMainCard">
                        <h4 className="adminDashboard-ScheduleDeliveryOverviewText">
                          Schedule overview:
                        </h4>
                        <div className="adminDashboard-ScheduleDeliveryOverviewCard">
                          <div>
                            <h2 className="adminDashboard-ScheduleDeliveryStatusCount">
                              20
                            </h2>
                            <p className="adminDashboard-ScheduleDeliveryStatustext">
                              Total days
                            </p>
                          </div>

                          <div>
                            <h2 className="adminDashboard-ScheduleDeliveryStatusCount">
                              80
                            </h2>
                            <p className="adminDashboard-ScheduleDeliveryStatustext">
                              Total Hours
                            </p>
                          </div>

                          <div>
                            <h2 className="adminDashboard-ScheduleDeliveryStatusCount">
                              €2.3k
                            </h2>
                            <p className="adminDashboard-ScheduleDeliveryStatustext">
                              Aprox earning
                            </p>
                          </div>
                        </div>

                        <div className="adminDashboard-ScheduleDeliveryDateTimeCard">
                          <p className="adminDashboard-ScheduleDeliveryFromdate">
                            From <b>20-02-24, 10 AM</b>
                          </p>
                          <FontAwesomeIcon icon={faArrowRight} />
                          <p className="adminDashboard-ScheduleDeliveryFromdate">
                            To <b>10-03-24, 02 PM</b>
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link
                          className="adminDashboard-ScheduleDeliverySeeDeailsCard"
                          to="/schedule-details"
                        >
                          <p className="adminDashboard-ScheduleDeliverySeeDeailsText">
                            See details
                          </p>
                          <FontAwesomeIcon
                            className="adminDashboard-ScheduleDeliverySeeDeailsArrow"
                            icon={faArrowRight}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="adminDashboard-deliveryDetailsRequesterCard">
                      <img
                        className="adminDashboard-deliveryDetailsRequesterImg"
                        src={Requester}
                        alt="img"
                      />
                      <div>
                        <h4 className="adminDashboard-deliveryDetailsrequserText">
                          John Doe
                        </h4>
                        <p className="adminDashboard-deliveryDetailsAddressText">
                          Île-de-France
                        </p>
                      </div>
                      <p className="adminDashboard-deliveryRequesterText">
                        Requester
                      </p>
                    </div>

                    <div className="adminDashboard-scheduleRequestActionBtnsMainCard">
                        <Link to="/assign-deliveryboy" className="adminDashboard-scheduleRequestAcceotBtn">Accept</Link>
                        <div className="adminDashboard-scheduleRequestActionBtns">
                            <button className="adminDashboard-scheduleRequestIgnoreBtn">Ignore</button>
                            <button className="adminDashboard-scheduleRequestRejectBtn">Reject</button>
                        </div>
                    </div>
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

export default ScheduleDeliveryDetails;
