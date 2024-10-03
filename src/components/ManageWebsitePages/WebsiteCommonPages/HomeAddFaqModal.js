import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const HomeAddFaqModal = ({ show, handleClose }) => {
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
        <Modal.Title>Add FAQ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formServiceName">
            <Form.Label>Question</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Label>Answer</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type here" />
          </Form.Group>
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

export default HomeAddFaqModal;
