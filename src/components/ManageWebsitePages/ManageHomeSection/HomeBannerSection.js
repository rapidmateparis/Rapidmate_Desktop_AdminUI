import React, { useState } from "react";
import Header from "../../Header/Header";
import HomeBanner from "../../../assets/images/HomeBanner.png";
import { Form } from "react-bootstrap";

const HomeBannerSection = () => {
  // Separate state for logo and favicon preview URLs
  const [logoPreviewUrl, setLogoPreviewUrl] = useState(HomeBanner);
  const [faviconPreviewUrl, setFaviconPreviewUrl] = useState(HomeBanner);

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      if (type === "logo") {
        setLogoPreviewUrl(fileUrl);
      } else if (type === "favicon") {
        setFaviconPreviewUrl(fileUrl);
      }
    }
  };

  return (
    <>
      {/* Header start here */}
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Banner Section</h2>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-4">
                <div className="adminWebsiteSettings-LogoCardmain">
                  <div>
                    <img
                      className="adminWebsiteSettings-HomeBannerSectionImg"
                      src={logoPreviewUrl}
                      alt="logo"
                    />
                    <p className="adminWebsiteSettings-LogoSizeText">
                      Banner Size Must be 655px × 597px
                    </p>
                    {/* File input */}
                    <input
                      type="file"
                      accept="image/*"
                      id="logoUpload"
                      style={{ display: "none" }}
                      onChange={(event) => handleImageUpload(event, "logo")}
                    />
                    {/* Custom button for file input */}
                    <label htmlFor="logoUpload">
                      <button
                        className="adminWebsiteSettings-LogoImgUploadBtn"
                        type="button"
                        onClick={() =>
                          document.getElementById("logoUpload").click()
                        }
                      >
                        Select Banner
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="adminWebsiteSettings-HomeBannerSectionTextUpdateCard">
                  <Form>
                    <Form.Group className="mb-3" controlId="socialTitle">
                      <Form.Label>Heading</Form.Label>
                      <Form.Control type="text" placeholder="type here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="socialDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                  </Form.Group>
                  </Form>

                  <button>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBannerSection;
