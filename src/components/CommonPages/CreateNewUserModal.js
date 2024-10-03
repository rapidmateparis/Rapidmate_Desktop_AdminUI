import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function CreateNewUserModal({ show, handleClose }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className="viewUsermodal-titleText">
          Create new user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Type here.." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Type here.." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Type here.." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect">
              <Form.Label>Select Role</Form.Label>
              <div className="custom-radio-group">
                <Form.Check
                  type="radio"
                  id="consumerRadio"
                  label="Consumer"
                  name="role"
                  value="consumer"
                  checked={selectedValue === "consumer"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <Form.Check
                  type="radio"
                  id="deliveryBoyRadio"
                  label="Delivery Boy"
                  name="role"
                  value="deliveryBoy"
                  checked={selectedValue === "deliveryBoy"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <Form.Check
                  type="radio"
                  id="enterpriseRadio"
                  label="Enterprise"
                  name="role"
                  value="enterprise"
                  checked={selectedValue === "enterprise"}
                  onChange={handleChange}
                  className="custom-radio"
                />
              </div>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="viewUser-InfoModalFooterCard">
        <Button
          className="viewUser-InfoModal-UpdateUserInfoBtn"
          onClick={handleClose}
        >
          Create User
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateNewUserModal;
