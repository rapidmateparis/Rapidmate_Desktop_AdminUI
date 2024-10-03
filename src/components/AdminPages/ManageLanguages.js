import React, { useState } from "react";
import Header from "../Header/Header";
import Spanish from "../../assets/images/Spanish.png";
import English from "../../assets/images/English.png";
import Mandarin from "../../assets/images/Mandarin.png";
import French from "../../assets/images/French.png";
import Arabic from "../../assets/images/Arabic.png";
import { Form } from "react-bootstrap";

// Sample data for languages
const consumerLanguages = [
  { name: "Spanish", image: Spanish },
  { name: "English", image: English },
  { name: "Mandarin", image: Mandarin },
  { name: "French", image: French },
  { name: "Arabic", image: Arabic },
];

const deliveryBoyLanguages = [
    { name: "Spanish", image: Spanish },
    { name: "English", image: English },
    { name: "Mandarin", image: Mandarin },
    { name: "French", image: French },
    { name: "Arabic", image: Arabic },
];

const enterpriseLanguages = [
    { name: "Spanish", image: Spanish },
    { name: "English", image: English },
    { name: "Mandarin", image: Mandarin },
    { name: "French", image: French },
    { name: "Arabic", image: Arabic },
];

const ManageLanguages = () => {
  // State for push notification switches
  const [notifications, setNotifications] = useState({
    consumer: consumerLanguages.reduce((acc, lang) => {
      acc[lang.name] = false;
      return acc;
    }, {}),
    deliveryBoy: deliveryBoyLanguages.reduce((acc, lang) => {
      acc[lang.name] = false;
      return acc;
    }, {}),
    enterprise: enterpriseLanguages.reduce((acc, lang) => {
      acc[lang.name] = false;
      return acc;
    }, {}),
  });

  // Handle switch change
  const handlePushNotificationChange = (category, langName) => (event) => {
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [category]: {
        ...prevNotifications[category],
        [langName]: event.target.checked,
      },
    }));
  };

  return (
    <>
      {/* Header Start Here */}
      <Header />
      {/* Section start here  */}
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminManages-LanguagesTitleCard">
            <h2 className="adminManages-LanguagesTitle">Manage Languages</h2>
          </div>
          <div className="row">
            {/* Consumer Section */}
            <div className="col-md-4">
              <div className="adminManages-languageitemCard">
                <h4 className="adminManages-languageAccountType">Consumer</h4>
                {consumerLanguages.map((lang) => (
                  <div key={lang.name} className="adminManages-languagedetailsCard">
                    <div className="adminManages-languageflagCard">
                      <img
                        className="adminManage-LanguagesFlagsImgs"
                        src={lang.image}
                        alt={`${lang.name} flag`}
                      />
                      <p className="adminManage-LanguagesNameText">{lang.name}</p>
                    </div>
                    <Form className="adminManage-Languagescustomswitch">
                      <Form.Check
                        type="switch"
                        id={`push-notification-switch-consumer-${lang.name}`}
                        checked={notifications.consumer[lang.name]}
                        onChange={handlePushNotificationChange('consumer', lang.name)}
                        aria-label={`Push notification switch for ${lang.name}`}
                        className={
                          notifications.consumer[lang.name]
                            ? "push-notifications-switch active"
                            : "push-notifications-switch"
                        }
                      />
                    </Form>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Boy Section */}
            <div className="col-md-4">
              <div className="adminManages-languageitemCard">
                <h4 className="adminManages-languageAccountType">Delivery Boy</h4>
                {deliveryBoyLanguages.map((lang) => (
                  <div key={lang.name} className="adminManages-languagedetailsCard">
                    <div className="adminManages-languageflagCard">
                      <img
                        className="adminManage-LanguagesFlagsImgs"
                        src={lang.image}
                        alt={`${lang.name} flag`}
                      />
                      <p className="adminManage-LanguagesNameText">{lang.name}</p>
                    </div>
                    <Form className="adminManage-Languagescustomswitch">
                      <Form.Check
                        type="switch"
                        id={`push-notification-switch-delivery-boy-${lang.name}`}
                        checked={notifications.deliveryBoy[lang.name]}
                        onChange={handlePushNotificationChange('deliveryBoy', lang.name)}
                        aria-label={`Push notification switch for ${lang.name}`}
                        className={
                          notifications.deliveryBoy[lang.name]
                            ? "push-notifications-switch active"
                            : "push-notifications-switch"
                        }
                      />
                    </Form>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Section */}
            <div className="col-md-4">
              <div className="adminManages-languageitemCard">
                <h4 className="adminManages-languageAccountType">Enterprise</h4>
                {enterpriseLanguages.map((lang) => (
                  <div key={lang.name} className="adminManages-languagedetailsCard">
                    <div className="adminManages-languageflagCard">
                      <img
                        className="adminManage-LanguagesFlagsImgs"
                        src={lang.image}
                        alt={`${lang.name} flag`}
                      />
                      <p className="adminManage-LanguagesNameText">{lang.name}</p>
                    </div>
                    <Form className="adminManage-Languagescustomswitch">
                      <Form.Check
                        type="switch"
                        id={`push-notification-switch-enterprise-${lang.name}`}
                        checked={notifications.enterprise[lang.name]}
                        onChange={handlePushNotificationChange('enterprise', lang.name)}
                        aria-label={`Push notification switch for ${lang.name}`}
                        className={
                          notifications.enterprise[lang.name]
                            ? "push-notifications-switch active"
                            : "push-notifications-switch"
                        }
                      />
                    </Form>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageLanguages;
