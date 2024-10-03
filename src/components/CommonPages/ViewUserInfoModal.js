import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ViewUserInfoModal({ show, handleClose, user }) {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title className="viewUsermodal-titleText">
          User Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Full Name</p>
            <p className="viewUser-InfoModalinfoText">John Doe</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Email</p>
            <p className="viewUser-InfoModalinfoText">johndoe@email.com</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Role</p>
            <p className="viewUser-InfoModalinfoText">Enterprise</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Phone</p>
            <p className="viewUser-InfoModalinfoText">+33123456789</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Company</p>
            <p className="viewUser-InfoModalinfoText">Company Name</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Industry</p>
            <p className="viewUser-InfoModalinfoText">Industry Name</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">
              Deliveries/hours per month
            </p>
            <p className="viewUser-InfoModalinfoText">50</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Country</p>
            <p className="viewUser-InfoModalinfoText">France</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Department</p>
            <p className="viewUser-InfoModalinfoText">Ain</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">Commune</p>
            <p className="viewUser-InfoModalinfoText">Ambérieu-en-Bugey</p>
          </div>

          <div className="viewUser-InfoModalCard">
            <p className="viewUser-InfoModalNameText">City</p>
            <p className="viewUser-InfoModalinfoText">Siret</p>
          </div>

          <div className="viewUser-InfoModalFilesCard">
            <button className="viewUser-InfoModalFilesName">file1.pdf</button>
            <button className="viewUser-InfoModalFilesName">file2.pdf</button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="viewUser-InfoModalFooterCard">
        <Button className="viewUser-InfoModal-RemoveUserBtn" onClick={handleClose}>
          Remove user
        </Button>
        <Button className="viewUser-InfoModal-UpdateUserInfoBtn" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewUserInfoModal;
