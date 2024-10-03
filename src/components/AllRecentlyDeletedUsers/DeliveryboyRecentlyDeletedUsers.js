import React, { useState } from "react";
import { Dropdown, Form, Button } from "react-bootstrap";
import { FaTrash, FaDownload } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Zoe Wright",
    email: "zoew@email.com",
    date: "12-02-23",
    checked: false,
  },
  {
    id: 2,
    name: "Zoe Wright",
    email: "zoew@email.com",
    date: "12-02-23",
    checked: false,
  },
  {
    id: 3,
    name: "Zoe Wright",
    email: "zoew@email.com",
    date: "12-02-23",
    checked: false,
  },
];

const DeliveryboyRecentlyDeletedUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [usersCheck, setUsersCheck] = useState(users);

  const toggleCheckBox = (index) => {
    const newUsers = [...usersCheck];
    newUsers[index].checked = !newUsers[index].checked;
    setUsersCheck(newUsers);
  };

  const handleMainCheckboxChange = () => {
    const newToggleState = !toggleCheckBoxMain;
    setToggleCheckBoxMain(newToggleState);
    const newUsers = usersCheck.map((user) => ({
      ...user,
      checked: newToggleState,
    }));
    setUsersCheck(newUsers);
  };

  const handleDeleteSelected = () => {
    const remainingUsers = usersCheck.filter((user) => !user.checked);
    setUsersCheck(remainingUsers);
    setToggleCheckBoxMain(false); // 
  };

  const handleDownloadSelected = () => {
    const selectedUsers = usersCheck.filter((user) => user.checked);
    if (selectedUsers.length === 0) return;

    const csvContent =
      "data:text/csv;charset=utf-8," +
      selectedUsers
        .map((user) => `${user.name},${user.email},${user.date}`)
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
        <div className="col-md-3 name">{item.name}</div>
        <div className="col-md-4 email">{item.email}</div>
        <div className="col-md-3 date">{item.date}</div>
        <div className="col-md-1">
          <Dropdown>
            <Dropdown.Toggle
              className="AllConsumer-ActionDropBtn"
              id="dropdown-basic"
            >
              Action
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                className="AllConsumer-ActionDropoptions"
              >
                Recover User
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );

  const selectedCount = usersCheck.filter((user) => user.checked).length;

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
        <div className="col-md-3">
          <p>Name</p>
        </div>
        <div className="col-md-4">
          <p>Email</p>
        </div>
        <div className="col-md-3">
          <p>Remove Date</p>
        </div>
        <div className="col-md-1">
          <p></p>
        </div>
      </div>
      <div className="list-container">
        {usersCheck.map((user, index) => (
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

export default DeliveryboyRecentlyDeletedUsers;
