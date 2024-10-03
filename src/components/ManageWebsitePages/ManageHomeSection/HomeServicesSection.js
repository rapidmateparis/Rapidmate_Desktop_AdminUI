import React, { useState } from "react";
import Header from "../../Header/Header";
import DeliveryService from "../../../assets/images/DeliveryService.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import HomeAddServicesmodal from "../WebsiteCommonPages/HomeAddServicesmodal";

const HomeServicesSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Service Section</h2>
            <button
              className="adminManageHome-SectionCategoryBtn"
              onClick={handleShowModal}
            >
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>{" "}
              Add New
            </button>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <Table striped bordered hover>
                    <thead className="adminManageHome-SectionCategoryTableHead">
                      <tr>
                        <th>SL</th>
                        <th>Service Title</th>
                        <th>Service Description</th>
                        <th>image</th>
                        <th>Action</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Courier service with scooter</td>
                        <td>
                          For establishments without a scooter fleet, we provide
                          couriers with their own means of transport equipped
                          with a durable "top case", thus ensuring the safety
                          and protection of food during delivery.
                        </td>
                        <td>
                          <img
                            className="adminManageHome-SectionCategoryIconImg"
                            src={DeliveryService}
                            alt="CategoryIcon"
                          />
                        </td>
                        <td>www.rapidmate/services</td>
                        <td>
                          <div className="adminManageHome-ServicesSectionActionsCard">
                            <button className="adminManageHome-ServicesSectionActionsEditBtn">
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>{" "}
                            <button className="adminManageHome-ServicesSectionActionsdeleteBtn">
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Include the modal here */}
      <HomeAddServicesmodal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default HomeServicesSection;
