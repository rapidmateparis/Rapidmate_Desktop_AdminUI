import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMinus,
  faAddressCard,
  faTruck,
  faFile,
  faCreditCard,
  faMoneyCheck,
  faLanguage,
  faHeadset,
  faSliders,
  faRectangleList,
  faGlobe,
  faMagnifyingGlass,
  faList,
  faCircleInfo,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/order",
    name: "Orders",
    icon: <MdMessage />,
  },
  {
    path: "/all-users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/recently-delete-users",
    name: "Recently deleted users",
    icon: <FontAwesomeIcon icon={faUserMinus} />,
  },
  {
    path: "/all-join-requests",
    name: "Requests to join",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    path: "/manage-vehicles",
    name: "Manage vehicles",
    icon: <FontAwesomeIcon icon={faTruck} />,
  },
  {
    path: "/manage-ads",
    name: "Manage ads",
    icon: <FontAwesomeIcon icon={faFile} />,
  },
  {
    path: "/manage-payment-methods",
    name: "Manage payment cards",
    icon: <FontAwesomeIcon icon={faCreditCard} />,
  },
  {
    path: "/manage-transactions",
    name: "Manage Transactions",
    icon: <FontAwesomeIcon icon={faMoneyCheck} />,
  },
  {
    path: "/manage-languages",
    name: "Manage languages",
    icon: <FontAwesomeIcon icon={faLanguage} />,
  },
  {
    path: "/order",
    name: "Support requests",
    icon: <FontAwesomeIcon icon={faHeadset} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Website settings",
    icon: <FontAwesomeIcon icon={faSliders} />,
    exact: true,
    subRoutes: [
      {
        path: "/logo-and-favicon",
        name: "Logo and Favicon",
        icon: <FontAwesomeIcon icon={faGlobe} />,
      },
      {
        path: "/seo-configuration",
        name: "Seo Manager",
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Website Pages",
    icon: <FontAwesomeIcon icon={faBook} />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "About Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Product Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Blog Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Contact Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Privacy Policy Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Terms & Services Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Terms of Use Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Refund Policy Page",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Manage Home Section",
    icon: <FontAwesomeIcon icon={faList} />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Header Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/settings/profile",
        name: "Footer Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-banner-section",
        name: "Banner Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-industry-section",
        name: "Industry Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-about-section",
        name: "About Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-achievement-section",
        name: "Achievement Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-services-section",
        name: "Services Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-whychooseus-section",
        name: "Why Choose Us Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-testimonial-section",
        name: "Testimonial Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-blog-section",
        name: "Blog Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-faq-section",
        name: "Faq Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
      {
        path: "/home-client-section",
        name: "Clients Section",
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
      },
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "300px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logoCard"
                >
                  <h2 className="logoCard-CompanyName">Rapidmate</h2>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
