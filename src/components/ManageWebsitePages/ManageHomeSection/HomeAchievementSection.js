import React from "react";
import Header from "../../Header/Header";
import { Form } from "react-bootstrap";

const HomeAchievementSection = () => {
  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">
              Home Achievement Section
            </h2>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-12">
                <Form>
                  <Form.Group className="mb-3" controlId="metaKeywords">
                    <Form.Label>Companies Trust us</Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaKeywords">
                    <Form.Label>Successful deliveries</Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaKeywords">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaKeywords">
                    <Form.Label>Average delivery time</Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>
                </Form>

                <button className="adminWebsiteSettings-SeoConfigurationUpdateBtn">
                  Upadte
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAchievementSection;
