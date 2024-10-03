import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrash, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample user data
const initialUsers = [
  {
    id: 1,
    user: "John Doe",
    amount: "€34.00",
    date: "13-Jul-2024",
    checked: false,
  },
  {
    id: 2,
    user: "Jane Doe",
    amount: "€25.00",
    date: "14-Jul-2024",
    checked: false,
  },
  {
    id: 3,
    user: "Jim Doe",
    amount: "€40.00",
    date: "15-Jul-2024",
    checked: false,
  },
];

const ConsumerTransactions = () => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [users, setUsers] = useState(initialUsers);

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
      ["User,Amount,Date"]
        .concat(
          selectedUsers.map(
            (user) => `${user.user},${user.amount},${user.date}`
          )
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
        <div className="col-md-4">{item.user}</div>
        <div className="col-md-2">{item.amount}</div>
        <div className="col-md-3">{item.date}</div>
        <div className="col-md-2">
          <Link to="/ad-requests-details" className="adminDashboard-LiveAdsShowDetailBtn">View</Link>
        </div>
      </div>
    </div>
  );

  const selectedCount = users.filter((user) => user.checked).length;

  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <input
            type="checkbox"
            checked={toggleCheckBoxMain}
            onChange={handleMainCheckboxChange}
          />
        </div>
        <div className="col-md-4">
          <p>User</p>
        </div>
        <div className="col-md-2">
          <p>Amount</p>
        </div>
        <div className="col-md-3">
          <p>Date</p>
        </div>
        <div className="col-md-2"></div>
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

export default ConsumerTransactions;
