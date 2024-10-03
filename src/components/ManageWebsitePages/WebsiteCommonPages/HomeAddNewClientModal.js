import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const HomeAddNewClientModal = ({ show, handleClose }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

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

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Client</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formServiceName">
            <Form.Label>Client Name</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Client Designation</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
          </Form.Group>
          <div>
            {imagePreviewUrl && (
              <div>
                <img
                  className="adminWebsiteSettings-LogoIconImg"
                  src={imagePreviewUrl}
                  alt="logo preview"
                  style={{ width: "auto", height: "100px" }}
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
                onClick={() => document.getElementById("logoUpload").click()}
              >
                Upload Service Icon
              </button>
            </label>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HomeAddNewClientModal;
