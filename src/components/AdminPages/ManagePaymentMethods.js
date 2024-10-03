import React, { useState } from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaTrash, FaDownload } from "react-icons/fa";
import Mastercard from "../../assets/images/logos_mastercard.png";

const initialUsers = [
  {
    id: 1,
    logo: Mastercard,
    cardnumber: "** 4567",
    status: "Active",
    expiry: "04-28",
    checked: false,
  },
  {
    id: 2,
    logo: Mastercard,
    cardnumber: "** 4567",
    status: "Inactive",
    expiry: "04-28",
    checked: false,
  },
  {
    id: 3,
    logo: Mastercard,
    cardnumber: "** 4567",
    status: "Active",
    expiry: "04-28",
    checked: false,
  },
];

const ManagePaymentMethods = () => {
  const [query, setQuery] = useState("");
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [users, setUsers] = useState(initialUsers);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
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
            `${user.cardnumber},${user.status},${user.expiry}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "selected_users.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
  };

  const UserInfoCard = ({ item, index }) => {
    // Determine the class based on the status
    const statusClass =
      item.status === "Active"
        ? "card-status-active"
        : "card-status-inactive";
  
    return (
      <div className="adminAll-usersDetailsCard">
        <div className="row">
          {/* Checkbox for selection */}
          <div className="col-md-1 checkbox-container">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheckBox(index)}
            />
          </div>
          {/* Card number */}
          <div className="col-md-3">{item.cardnumber}</div>
          {/* Logo of the card provider */}
          <div className="col-md-2">
            <img
              className="adminDashboardPayment-CardProviderLogoImg"
              src={item.logo}
              alt="Card provider logo"
            />
          </div>
          {/* Status of the card */}
          <div className={`col-md-3 ${statusClass}`}>{item.status}</div>
          {/* Expiry date of the card */}
          <div className="col-md-2">{item.expiry}</div>
          {/* View button/link */}
          <div className="col-md-1">
            <Link
              to="/payment-method-details"
              className="adminDashboard-LiveAdsShowDetailBtn"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  

  const selectedCount = users.filter((user) => user.checked).length;

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="adminAll-usersHeadMainCard">
            <h2 className="adminAll-usersTitleText">Manage payment methods</h2>
            <div className="adminAll-userssearch-bar">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                className="search-input"
              />
              <button onClick={handleSearch} className="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <button className="adminAll-usersHeadFilter">
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>

          <div className="adminDashboardManage-PaymentMethodsMainCard">
            <div className="row">
              <div className="col-md-1">
                <input
                  type="checkbox"
                  checked={toggleCheckBoxMain}
                  onChange={handleMainCheckboxChange}
                />
              </div>
              <div className="col-md-3">
                <p>Card</p>
              </div>
              <div className="col-md-2">
                <p>Provider</p>
              </div>
              <div className="col-md-3">
                <p>Status</p>
              </div>
              <div className="col-md-2">
                <p>Expiry</p>
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
                  <button
                    className="AllConsumer-DeleteUserBtn"
                    onClick={handleDeleteSelected}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="AllConsumer-DownloadUserBtn"
                    onClick={handleDownloadSelected}
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagePaymentMethods;
