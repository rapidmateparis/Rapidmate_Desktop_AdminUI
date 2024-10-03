import React from "react";
import LevisLogo from "../../assets/images/Levis-Logo.png";
import LevisBanner from "../../assets/images/Levis-Sale-Banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdRequestDetails = () => {
  return (
    <>
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">New Ad Requests Details</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="adminDashboard-newadRequestDetailsMainCard">
                <div className="adminDashboard-newadRequestDetailsBannerLogoCard">
                  <div className="adminDashboard-newadRequestDetailsLogoCard">
                    <img src={LevisLogo} alt="Levi's" />
                  </div>
                  <div className="adminDashboard-newadRequestDetailsBannerCard">
                    <img src={LevisBanner} alt="Levi's" />
                    <div className="adminDashboard-newadRequestDetailsDescriptionCard">
                      <h4>Levis SALE!</h4>
                      <p>1901 Thornridge Cir. Shiloh, California</p>
                      <div className="adminDashboard-newadRequestDetailsLearnMoreBtnCard">
                        <Link
                          className="adminDashboard-newadRequestDetailsLearnMoreBtn"
                          to="/"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="adminDashboard-newadRequestDetailsCompanyDetailsMaincards">
                  <div className="row">
                    <div className="col-md-3">
                      <div>
                        <h4 className="adminDashboard-newadRequestDetailsCompanyNametext">
                          Company Name
                        </h4>
                        <p className="adminDashboard-newadRequestDetailsCompanyAddresstext">
                          <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>{" "}
                          North Street, ABC
                        </p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">
                          Ad Link
                        </p>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLink">
                          www.website.com
                        </p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">
                          Industry
                        </p>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLink">
                          Industry
                        </p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">
                          CPC
                        </p>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLink">
                          €5.00
                        </p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">
                          Budget
                        </p>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLink">
                          €100.00
                        </p>
                      </div>
                    </div>

                    <div className="col-md-2">
                      <div>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">
                          Ad ID
                        </p>
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLink">
                          1237213521361
                        </p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="adminDashboard-newadRequestDetailsCompanyAdLiveCard">
                        <p className="adminDashboard-newadRequestDetailsCompanyAdLiveText">
                          LIVE NOW
                        </p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="adminDashboard-adDetailsSpentCard">
                            <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">Spent today</p>
                            <div>
                              <p className="adminDashboard-newadRequestDetailsCompanyAdLink">€15.00</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="adminDashboard-adDetailsSpentCard">
                            <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">Impressions</p>
                            <div>
                              <p className="adminDashboard-newadRequestDetailsCompanyAdLink">56</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="adminDashboard-adDetailsTotalSpendingsCard">
                             <p className="adminDashboard-newadRequestDetailsCompanyAdLinktext">Total spendings</p>
                             <p className="adminDashboard-newadRequestDetailsCompanyAdLink">€85.00</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="adminDashboard-newadRequestDetailsCompanyAdAcrtionsBtnCard">
                        <button className="adminDashboard-newadRequestDetailsCompanyAdRemoveBtn">Remove</button>
                        <button className="adminDashboard-newadRequestDetailsCompanyAdCancelBtn">
                          Pause
                        </button>
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

export default AdRequestDetails;
