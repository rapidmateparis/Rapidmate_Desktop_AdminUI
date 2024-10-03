import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PackageUp from "../../assets/images/Package-Up.png";
import PackageDown from "../../assets/images/Package-Down.png";
import Requester from "../../assets/images/Requester.png";
import Deliveryboy from "../../assets/images/Deliveryboy.jpeg";
import MasterCard from "../../assets/images/logos_mastercard.png";
import Header from "../Header/Header";

const DeliveryDetails = () => {
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
                  <div className="col-md-6">
                    <div className="adminDashboard-deliveryDetailsPickupCard">
                      <img
                        className="adminDashboard-deliveryDetailsPickupPackage"
                        src={PackageUp}
                        alt="img"
                      />
                      <div>
                        <p className="adminDashboard-deliveryDetailsPickupText">
                          Pickup information
                        </p>
                        <h4 className="adminDashboard-deliveryDetailsCompanyName">
                          Company Name
                        </h4>
                        <p className="adminDashboard-deliveryDetailsAddressText">
                          22 Rue de la Liberté, Paris, Île-de-France.
                        </p>
                      </div>
                    </div>

                    <div className="adminDashboard-deliveryDetailsPickupCard">
                      <img
                        className="adminDashboard-deliveryDetailsPickupPackage"
                        src={PackageDown}
                        alt="img"
                      />
                      <div>
                        <p className="adminDashboard-deliveryDetailsPickupText">
                          Drop off information
                        </p>
                        <h4 className="adminDashboard-deliveryDetailsCompanyName">
                          Company Name
                        </h4>
                        <p className="adminDashboard-deliveryDetailsAddressText">
                          22 Rue de la Liberté, Paris, Île-de-France.
                        </p>
                      </div>
                    </div>

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

                    <div className="adminDashboard-deliveryDetailsRequesterCard">
                      <img
                        className="adminDashboard-deliveryDetailsRequesterImg"
                        src={Deliveryboy}
                        alt="img"
                      />
                      <div>
                        <h4 className="adminDashboard-deliveryDetailsrequserText">
                          Mike Anthony
                        </h4>
                        <p className="adminDashboard-deliveryDetailsAddressText">
                          Mini Truck
                        </p>
                      </div>
                      <p className="adminDashboard-deliveryRequesterText">
                        Delivery boy
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="adminDashboard-deliveryOrderFareMaincard">
                      <div className="adminDashboard-deliveryOrderFareTextCards">
                        <div>
                          <p className="adminDashboard-deliveryOrderFareText">
                            Order fare
                          </p>
                          <p className="adminDashboard-deliveryDetailsTravelTimeDis">
                            Travelled 12 km in 32 mins
                          </p>
                        </div>
                        <h4 className="adminDashboard-deliveryOrderFarePrice">
                          €34.00
                        </h4>
                      </div>

                      <div className="adminDashboard-deliveryOrderFareLowcard">
                        <p>Order fare</p>
                        <p>
                          <b>€30.00</b>
                        </p>
                      </div>

                      <div className="adminDashboard-deliveryOrderFareLowcard">
                        <p>Waiting</p>
                        <p>
                          <b>€03.00</b>
                        </p>
                      </div>

                      <div className="adminDashboard-deliveryOrderFareLowcard">
                        <p>Platform fee</p>
                        <p>
                          <b>€01.00</b>
                        </p>
                      </div>

                      <div className="adminDashboard-deliveryOrderFareLowcard">
                        <p>Amount charged</p>
                        <p>
                          <b>€34.00</b>
                        </p>
                      </div>

                      <div className="adminDashboard-deliveryMasterCard">
                        <img className="adminDashboard-deliveryMasterimg" src={MasterCard} alt="img"/>
                        <p>Paid with mastercard</p>
                      </div>
                    </div>

                    <div className="adminDashboard-deliveryPackageInfoCard">
                        <p className="adminDashboard-deliveryPackageInfoText">Package information</p>
                        <p className="adminDashboard-deliveryPackageoderText">Order ID: <b>20394</b></p>
                        <p className="adminDashboard-deliveryPackageoderText">Comments: <b>Lorem ipsum dolor sit amet conse ctetur. Ridiculus nunc platea sed.</b></p>
                        <p className="adminDashboard-deliveryPackageoderText">Vehicle: <b>Pickup truck</b></p>
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

export default DeliveryDetails;
