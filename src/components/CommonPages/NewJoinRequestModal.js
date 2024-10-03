import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserJoinRequestRejectionModal from "./UserJoinRequestRejectionModal";

function EnterpriseNewJoinRequestModal({
  show,
  handleClose,
  user,
  imageModalClass,
  userTypeClass,
}) {
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  const handleShowRejectionModal = () => setShowRejectionModal(true);
  const handleCloseRejectionModal = () => setShowRejectionModal(false);

  const handleRejectSubmit = () => {
    // Handle email submission logic here
    // For demo purposes, let's just open the ResetPasswordModal and close the current modal
    handleShowRejectionModal();
    handleClose();
  };

  // Check if the user type is 'enterprise'
  const isEnterprise = user && user.type === "Enterprise";
  const isDeliveryboy = user && user.type === "Delivery Boy";
  const isConsumer = user && user.type === "Pickup & Dropoff";

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className="d-none">
          <Modal.Title className="viewUsermodal-titleText">
            User Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user ? (
            <>
              <div className="newJoin-modalUserInfo">
                <div className="newJoin-modalUser-HeaderCard">
                  <img
                    src={user.image}
                    alt={user.name}
                    className={`modal-user-image ${imageModalClass}`} // Apply the class dynamically
                  />
                  <h4 className="newJoin-modalRequestsTitle">
                    New Join Request
                  </h4>
                  <div className="newJoin-modalRequestsAccCard">
                    <p className={`userJoinRequestAccType ${userTypeClass}`}>
                      {user.type}
                    </p>
                  </div>
                </div>
                <div className="newJoin-modalNameTopCard">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-2">
                        <p className="newJoin-modalLabelsText">Full Name</p>
                        <h5 className="newJoin-modalInputText">{user.name}</h5>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-2">
                        <p className="newJoin-modalLabelsText">Email</p>
                        <h5 className="newJoin-modalInputText">{user.email}</h5>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-2">
                        <p className="newJoin-modalLabelsText">Password</p>
                        <h5 className="newJoin-modalInputText">
                          {user.password}
                        </h5>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-2">
                        <p className="newJoin-modalLabelsText">Phone</p>
                        <h5 className="newJoin-modalInputText">{user.phone}</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {isEnterprise && (
                  <div className="newJoin-modalNameBottomCard">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">
                            Company Name
                          </p>
                          <h5 className="newJoin-modalInputText">
                            {user.companyName}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Industry</p>
                          <h5 className="newJoin-modalInputText">
                            {user.industry}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">
                            Deliveries per month
                          </p>
                          <h5 className="newJoin-modalInputText">
                            {user.deliveries}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Country</p>
                          <h5 className="newJoin-modalInputText">
                            {user.country}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Department</p>
                          <h5 className="newJoin-modalInputText">
                            {user.department}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Commune</p>
                          <h5 className="newJoin-modalInputText">
                            {user.commune}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">City</p>
                          <h5 className="newJoin-modalInputText">
                            {user.city}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">
                            Projects description
                          </p>
                          <h5 className="newJoin-modalInputText">
                            {user.description}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* If User Type Delivery Boy  */}
                {isDeliveryboy && (
                  <div className="newJoin-modalNameBottomCard">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Country</p>
                          <h5 className="newJoin-modalInputText">
                            {user.country}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Department</p>
                          <h5 className="newJoin-modalInputText">
                            {user.department}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Commune</p>
                          <h5 className="newJoin-modalInputText">
                            {user.commune}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">City</p>
                          <h5 className="newJoin-modalInputText">
                            {user.city}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Vehicles</p>
                          <div className="row">
                            {user.vehicles.map((vehicle) => (
                              <div className="col-md-3" key={vehicle.id}>
                                <div className="newJoin-DeliveryUserVehicleCard">
                                  <img
                                    className={`vehicle-${vehicle.type
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                    src={vehicle.vehicleImage}
                                    alt="Vehicle"
                                  />
                                  <h5 className="newJoin-modalInputText">
                                    {vehicle.type}
                                  </h5>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* If User Type Consumer Boy  */}
                {isConsumer && (
                  <div className="newJoin-modalNameBottomCard">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Country</p>
                          <h5 className="newJoin-modalInputText">
                            {user.country}
                          </h5>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-2">
                          <p className="newJoin-modalLabelsText">Account For</p>
                          <h5 className="newJoin-modalInputText">
                            {user.accountType}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p>No user selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer className="Newjoin-RequestModalFooterCard">
          <Button
            className="Newjoin-RequestAccepetUserBtn"
            onClick={handleClose}
          >
            Accept
          </Button>
          <div className="Newjoin-RequestBottomBtnCard">
            <Button
              className="Newjoin-RequestIgnoreUserBtn"
              onClick={handleClose}
            >
              Ignore
            </Button>
            <Button
              className="Newjoin-RequestRemoveUserBtn"
              onClick={handleRejectSubmit}
            >
              Reject
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {showRejectionModal && (
        <UserJoinRequestRejectionModal
          show={showRejectionModal}
          handleClose={handleCloseRejectionModal}
        />
      )}
    </>
  );
}

export default EnterpriseNewJoinRequestModal;
