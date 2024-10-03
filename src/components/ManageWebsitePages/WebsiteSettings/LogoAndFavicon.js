import React, { useState } from "react";
import Header from "../../Header/Header";
import Logoicon from "../../../assets/images/Logo-icon.png";

const LogoAndFavicon = () => {
  // Separate state for logo and favicon preview URLs
  const [logoPreviewUrl, setLogoPreviewUrl] = useState(Logoicon);
  const [faviconPreviewUrl, setFaviconPreviewUrl] = useState(Logoicon);

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
            <h2 className="adminAll-usersTitleText">Logo & Favicon</h2>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-4">
                <div className="adminWebsiteSettings-LogoCardmain">
                  <div>
                    <img
                      className="adminWebsiteSettings-LogoIconImg"
                      src={logoPreviewUrl}
                      alt="logo"
                    />
                    <p className="adminWebsiteSettings-LogoSizeText">
                      Logo Size Must be 164px × 175px
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
                        Select Logo
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="adminWebsiteSettings-LogoCardmain">
                  <div>
                    <img
                      className="adminWebsiteSettings-LogoIconImg"
                      src={faviconPreviewUrl}
                      alt="favicon"
                    />
                    <p className="adminWebsiteSettings-LogoSizeText">
                      Favicon Size Must be 164px × 175px
                    </p>
                    {/* File input */}
                    <input
                      type="file"
                      accept="image/*"
                      id="faviconUpload"
                      style={{ display: "none" }}
                      onChange={(event) => handleImageUpload(event, "favicon")}
                    />
                    {/* Custom button for file input */}
                    <label htmlFor="faviconUpload">
                      <button
                        className="adminWebsiteSettings-LogoImgUploadBtn"
                        type="button"
                        onClick={() =>
                          document.getElementById("faviconUpload").click()
                        }
                      >
                        Select Favicon
                      </button>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="adminWebsiteSettings-LogoImgDescriptionText">
                  <p>
                    If the logo and favicon are not changed after you update
                    from this page, please clear the cache from your browser. As
                    we keep the filename the same after the update, it may show
                    the old image for the cache. usually, it works after clear
                    the cache but if you still see the old logo or favicon, it
                    may be caused by server level or network level caching.
                    Please clear them too.
                  </p>
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

export default LogoAndFavicon;
