import React, { useState } from "react";
import Header from "../../Header/Header";
import Client from "../../../assets/images/Client-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import HomeAddNewClientModal from "../WebsiteCommonPages/HomeAddNewClientModal";
import { Link } from "react-router-dom";

const HomeBlogSection = () => {
  return (
    <>
      <Header />
      <section className="adminManage-LanguagesSec">
        <div className="container">
          <div className="adminAll-vehicleHeadMainCard">
            <h2 className="adminAll-usersTitleText">Blog Section</h2>
            <Link
              to="/home-add-new-blog"
              className="adminManageHome-SectionCategoryBtn"
            >
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>{" "}
              Add New
            </Link>
          </div>
          <div className="adminWebsiteSettings-LogoandFavIconMainCard">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <Table striped bordered hover>
                    <thead className="adminManageHome-SectionCategoryTableHead">
                      <tr>
                        <th>SL</th>
                        <th>Banner Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            className="adminManageHome-BlogBannerIconImg"
                            src={Client}
                            alt="CategoryIcon"
                          />
                        </td>
                        <td>
                          Lorem ipsum dolor sit amet consectetur. Eget viverra
                          volutpat a pellentesque.
                        </td>
                        <td>
                          Lorem ipsum dolor sit amet consectetur. Eget viverra
                          volutpat a pellentesque.Lorem ipsum dolor sit amet
                          consectetur. Eget viverra volutpat a
                          pellentesque.Lorem ipsum dolor sit amet consectetur.
                          Eget viverra volutpat a pellentesque.Lorem ipsum dolor
                          sit amet consectetur. Eget viverra volutpat a
                          pellentesque.
                        </td>
                        <td>Technology</td>
                        <td>
                          <div className="adminManageHome-ServicesSectionActionsCard">
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
    </>
  );
};

export default HomeBlogSection;
