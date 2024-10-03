import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import ViewUserInfoModal from "../CommonPages/ViewUserInfoModal";
import { FaTrash, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const initialUsers = [
  {
    id: 1,
    company: "Company Inc.",
    clicks: "13k",
    cpc: "€5.00",
    invested: "€500.00",
    checked: false,
  },
  {
    id: 2,
    company: "Company Inc.",
    clicks: "13k",
    cpc: "€5.00",
    invested: "€500.00",
    checked: false,
  },
  {
    id: 3,
    company: "Company Inc.",
    clicks: "13k",
    cpc: "€5.00",
    invested: "€500.00",
    checked: false,
  },
];

const LiveAds = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [users, setUsers] = useState(initialUsers);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleViewUserInfo = (user) => {
    setSelectedUser(user);
    toggleModal();
  };

  const toggleCheckBox = (index) => {
    setUsers((prevUsers) =>
      prevUsers.map((user, i) =>
        i === index ? { ...user, checked: !user.checked } : user
      )
    );
  };

  const handleMainCheckboxChange = () => {
    const newToggleState = !toggleCheckBoxMain;
    setToggleCheckBoxMain(newToggleState);
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({ ...user, checked: newToggleState }))
    );
  };

  const handleDeleteSelected = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => !user.checked));
    setToggleCheckBoxMain(false); // Reset main checkbox
  };

  const handleDownloadSelected = () => {
    const selectedUsers = users.filter((user) => user.checked);
    if (selectedUsers.length === 0) return;

    const csvContent =
      "data:text/csv;charset=utf-8," +
      selectedUsers
        .map(
          (user) =>
            `${user.company},${user.clicks},${user.cpc},${user.invested}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "selected_users.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
  };

  const UserInfoCard = ({ item, index }) => (
    <div className="adminAll-usersDetailsCard">
      <div className="row">
        <div className="col-md-1 checkbox-container">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleCheckBox(index)}
          />
        </div>
        <div className="col-md-3">{item.company}</div>
        <div className="col-md-2">{item.clicks}</div>
        <div className="col-md-3">{item.cpc}</div>
        <div className="col-md-2">{item.invested}</div>
        <div className="col-md-1">
          <Link to="/ad-requests-details" className="adminDashboard-LiveAdsShowDetailBtn">View</Link>
        </div>
      </div>
    </div>
  );

  const selectedCount = users.filter((user) => user.checked).length;

  return (
    <>
      <ViewUserInfoModal
        show={isModalVisible}
        handleClose={toggleModal}
        user={selectedUser}
      />
      <div className="row">
        <div className="col-md-1">
          <input
            type="checkbox"
            checked={toggleCheckBoxMain}
            onChange={handleMainCheckboxChange}
          />
        </div>
        <div className="col-md-3">
          <p>Campaign</p>
        </div>
        <div className="col-md-2">
          <p>Clicks</p>
        </div>
        <div className="col-md-3">
          <p>CPC</p>
        </div>
        <div className="col-md-2">
          <p>Invested</p>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="list-container">
        {users.map((user, index) => (
          <UserInfoCard key={user.id} item={user} index={index} />
        ))}
      </div>
      {selectedCount > 0 && (
        <div className="AllConsumer-actions-container">
          <p className="AllConsumer-selectedUserText">
            {selectedCount} user{selectedCount > 1 ? "s" : ""} selected
          </p>
          <div className="AllConsumer-actions-BtnsCards">
            <Button
              className="AllConsumer-DeleteUserBtn"
              onClick={handleDeleteSelected}
            >
              <FaTrash />
            </Button>
            <Button
              className="AllConsumer-DownloadUserBtn"
              onClick={handleDownloadSelected}
            >
              <FaDownload />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveAds;
