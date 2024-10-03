import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Camera from "../../assets/images/Camera-Icon.png";
import { Form } from "react-bootstrap";

function AddVehicles({ show, handleClose }) {
  const [image, setImage] = useState(null); // State to hold the selected image
  const [preview, setPreview] = useState(Camera); // Default image or placeholder

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file); // Save the file to state
        setPreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="adminDasgboard-AddVehicleHeaderCard">
          Add Vehicle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="adminDasgboard-AddVehicleCard">
            <div className="adminDasgboard-AddVehicleImgMainCard">
              <div
                className="adminDasgboard-AddVehicleImgCard"
                onClick={() => document.getElementById('fileInput').click()}
              >
                <img
                  src={preview}
                  alt="Icon"
                  className={image ? "adminDasgboard-AddVehicleImgUploaded" : "adminDasgboard-AddVehicleImgCamIcon"}
                />
                {!image && <p>Add Icon</p>} {/* Conditionally render the text */}
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vehicle title</Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vehicle capacity (liter)</Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>

            <div className="adminDasgboard-AddVehicleavailableCard">
              <p className="adminDasgboard-AddVehicleavailableText">
                Make this vehicle available
              </p>
              <Form.Check type="switch" id="custom-switch" />
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="adminDasgboard-AddVehicleFooterCards">
        <button className="adminDasgboard-AddVehicleSaveBtn" onClick={handleClose}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddVehicles;
