import React, { useState } from "react";
import Header from "../../Header/Header";
import Resturent from "../../../assets/images/Resturent-Icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import HomeAddcategoryModal from "../WebsiteCommonPages/HomeAddcategoryModal";
import HomeAddChooseUsCardModal from "../WebsiteCommonPages/HomeAddChooseUsCardModal";

const HomeWhyChooseUsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Why choose us Section</h2>
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
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Easy integration with your system</td>
                        <td>
                          Our delivery service integrates seamlessly with your
                          existing system, ensuring a smooth transition without
                          disrupting your operations. This compatibility allows
                          for easy order management and streamlined processes,
                          improving overall efficiency
                        </td>
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
      <HomeAddChooseUsCardModal
        show={showModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default HomeWhyChooseUsSection;
