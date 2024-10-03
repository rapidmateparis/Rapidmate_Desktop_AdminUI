import React from "react";
import Header from "../../Header/Header";
import { Form } from "react-bootstrap";

const SeoConfiguration = () => {
  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">SEO Configuration</h2>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-12">
                <Form>
                  <Form.Group className="mb-3" controlId="metaKeywords">
                    <Form.Label>
                      Meta Keywords (separate multiple keywords by , comma or Enter key)
                    </Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="metaDescription">
                    <Form.Label>Meta Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="socialTitle">
                    <Form.Label>Social Title</Form.Label>
                    <Form.Control type="text" placeholder="type here" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="socialDescription">
                    <Form.Label>Social Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>

                <button className="adminWebsiteSettings-SeoConfigurationUpdateBtn">Upadte</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoConfiguration;
