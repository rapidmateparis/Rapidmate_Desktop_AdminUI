import React, { useState } from 'react';
import Header from '../../Header/Header';
import Resturent from '../../../assets/images/Resturent-Icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';
import HomeAddcategoryModal from '../WebsiteCommonPages/HomeAddcategoryModal';


const HomeIndustrySection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Industry Section</h2>
            <button className="adminManageHome-SectionCategoryBtn" onClick={handleShowModal}>
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
                        <th>Industry Type</th>
                        <th>Industry Icon</th>
                        <th>Url</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Restaurants</td>
                        <td>
                          <img
                            className="adminManageHome-SectionCategoryIconImg"
                            src={Resturent}
                            alt="CategoryIcon"
                          />
                        </td>
                        <td>www.rapidmate/category</td>
                        <td>
                          <div>
                            <button className="adminManageHome-SectionCategoryEditBtn">
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>{" "}
                            <button className="adminManageHome-SectionCategorydeleteBtn">
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
      <HomeAddcategoryModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default HomeIndustrySection;
