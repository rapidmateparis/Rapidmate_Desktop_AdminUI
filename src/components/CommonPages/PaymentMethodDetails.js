import React from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Mastercard from "../../assets/images/logos_mastercard.png";

const PaymentMethodDetails = () => {
  // Array of transactions
  const transactions = [
    { date: "12-09-24", description: "Ordered delivery", amount: "€34.00" },
    { date: "11-09-24", description: "Online purchase", amount: "€50.00" },
    { date: "10-09-24", description: "In-store purchase", amount: "€20.00" },
    // Add more items here
  ];

  return (
    <>
      {/* Header Start Here  */}
      <Header />

      <section>
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Payment method details</h2>
          </div>
          <div className="adminDashboardManage-PaymentMethodsMainCard">
            <div className="row">
              <div className="col-md-4">
                <div className="adminDashboardPayment-MethodDetailsCard">
                  <div className="adminDashboardPayment-MethodDetailsCardLogoNameCard">
                    <h4 className="adminDashboardPayment-MethodDetailsCardHolderName">
                      John Doe
                    </h4>
                    <img
                      className="adminDashboardPayment-MethodDetailsCardLogoImg"
                      src={Mastercard}
                      alt="cardLogo"
                    />
                  </div>
                  <p className="adminDashboardPayment-MethodDetailsCardNumber">
                    1234 5678 9012 3456
                  </p>
                  <div className="adminDashboardPayment-MethodDetailsCardCvvCard">
                    <p>Expires 08-28</p>
                    <p>CVV 123</p>
                  </div>
                </div>

                <div>
                    <button className="adminDashboardPayment-MethodDetailsCardDeactivateBtn">Deactivate</button>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <h4 className="adminDashboardPayment-MethodDetailsCarduserName">
                        User Name
                      </h4>
                      <p className="adminDashboardPayment-MethodDetailsCardUserAddress">
                        <span>
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>{" "}
                        North Street, ABC
                      </p>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div>
                      <p className="adminDashboardPayment-MethodDetailsCardUserAddress">
                        Status
                      </p>
                      <p className="adminDashboardPayment-MethodDetailsCardUserSubTitles">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div>
                      <p className="adminDashboardPayment-MethodDetailsCardUserAddress">
                        Last used
                      </p>
                      <p className="adminDashboardPayment-MethodDetailsCardUserSubTitles">
                        2 hr ago
                      </p>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div>
                      <p className="adminDashboardPayment-MethodDetailsCardUserAddress">
                        Total transactions
                      </p>
                      <p className="adminDashboardPayment-MethodDetailsCardUserSubTitles">
                        <span>€</span>156.25
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row">
                    {transactions.map((transaction, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="adminDashboardPayment-MethodDetailsCardMoneySpentMianCard">
                          <div>
                            <p className="adminDashboardPayment-MethodDetailsCardUserAddress">{transaction.date}</p>
                            <p className="adminDashboardPayment-MethodDetailsCardUserSubTitles">{transaction.description}</p>
                          </div>
                          <p className="adminDashboardPayment-MethodDetailsCardUserSubTitles">{transaction.amount}</p>
                        </div>
                      </div>
                    ))}
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

export default PaymentMethodDetails;
