import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function UserJoinRequestRejectionModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className="viewUsermodal-titleText">
          Reason for rejection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Please write the reason for the rejection</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className="Newjoin-RequestRejectionFooterCard">
        <Button className="Newjoin-RequestIgnoreUserBtn" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="adminUserRejectio-ReasonSubmitBtn" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserJoinRequestRejectionModal;
