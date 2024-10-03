import React, { useState } from "react";
import Header from "../../Header/Header";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HomeBlogSection = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [description, setDescription] = useState("");

  // Handle image file selection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    console.log("Description:", description);
  };

  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Add New Blog</h2>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-8">
                <div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formClientName">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Type here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                      <Form.Label>Description</Form.Label>
                      <ReactQuill
                        value={description}
                        onChange={setDescription}
                        theme="snow"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formClientName">
                      <Form.Label>Category</Form.Label>
                      <Form.Control type="text" placeholder="Type here" />
                    </Form.Group>
                    <div className="adminHome-addnewBlogActionBtnCard">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  {imagePreviewUrl && (
                    <div>
                      <img
                        className="img-thumbnail"
                        src={imagePreviewUrl}
                        alt="logo preview"
                        style={{ maxWidth: "100%", }}
                      />
                    </div>
                  )}
                  {/* File input */}
                  <input
                    type="file"
                    accept="image/*"
                    id="logoUpload"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  {/* Custom button for file input */}
                  <label htmlFor="logoUpload">
                    <button
                      className="adminManageHome-SectionCategoryUploadImgIconBtn"
                      type="button"
                      onClick={() =>
                        document.getElementById("logoUpload").click()
                      }
                    >
                      Upload Service Icon
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlogSection;
