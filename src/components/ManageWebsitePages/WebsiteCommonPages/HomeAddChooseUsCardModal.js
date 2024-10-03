import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const HomeAddChooseUsCardModal = ({ show, handleClose }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Why choose us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formServiceName">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServiceName">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Type here" />
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

export default HomeAddChooseUsCardModal;
