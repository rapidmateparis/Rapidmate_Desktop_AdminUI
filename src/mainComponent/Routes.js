import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import Dashboard from "../components/AdminPages/Dashboard";
import Users from "../components/AdminPages/Users";
import AllJoinRequests from "../components/AdminPages/AllJoinRequests";
import Order from "../components/AdminPages/Order";
import Saved from "../components/AdminPages/Saved";
import Setting from "../components/AdminPages/Setting";
import ManageLanguages from "../components/AdminPages/ManageLanguages";
import AdminLogin from "./AdminLogin";
import EmployeeSignup from "./EmployeeSignup";
import AllUsers from "../components/AdminPages/AllUsers";
import RecentlyDeletedUsers from "../components/AdminPages/RecentlyDeletedUsers";
import DeliveryDetails from "../components/AdminPages/DeliveryDetails";
import ScheduleDeliveryDetails from "../components/AdminPages/ScheduleDeliveryDetails";
import ScheduleDetails from "../components/AdminPages/ScheduleDetails";
import AssignDeliveryboy from "../components/AdminPages/AssignDeliveryboy";
import ManageVehicles from "../components/AdminPages/ManageVehicles";
import ManageAds from "../components/AdminPages/ManageAds";
import NewAdRequests from "../components/CommonPages/NewAdRequests";
import NewAdRequestsDetails from "../components/CommonPages/NewAdRequestsDetails";
import AdRequestDetails from "../components/CommonPages/AdRequestDetails";
import ManagePaymentMethods from "../components/AdminPages/ManagePaymentMethods";
import PaymentMethodDetails from "../components/CommonPages/PaymentMethodDetails";
import ManageTransactions from "../components/AdminPages/ManageTransactions";
import LogoAndFavicon from "../components/ManageWebsitePages/WebsiteSettings/LogoAndFavicon";
import SeoConfiguration from "../components/ManageWebsitePages/WebsiteSettings/SeoConfiguration";
import HomeBannerSection from "../components/ManageWebsitePages/ManageHomeSection/HomeBannerSection";
import HomeIndustrySection from "../components/ManageWebsitePages/ManageHomeSection/HomeIndustrySection";
import HomeAboutSection from "../components/ManageWebsitePages/ManageHomeSection/HomeAboutSection";
import HomeAchievementSection from "../components/ManageWebsitePages/ManageHomeSection/HomeAchievementSection";
import HomeServicesSection from "../components/ManageWebsitePages/ManageHomeSection/HomeServicesSection";
import HomeWhyChooseUsSection from "../components/ManageWebsitePages/ManageHomeSection/HomeWhyChooseUsSection";
import HomeTestimonialSection from "../components/ManageWebsitePages/ManageHomeSection/HomeTestimonialSection";
import HomeBlogSection from "../components/ManageWebsitePages/ManageHomeSection/HomeBlogSection";
import HomeAddNewBlog from "../components/ManageWebsitePages/WebsiteCommonPages/HomeAddNewBlog";
import HomeFaqSection from "../components/ManageWebsitePages/ManageHomeSection/HomeFaqSection";
import HomeClientSection from "../components/ManageWebsitePages/ManageHomeSection/HomeClientSection";
const useAuth = () => {
  const [authUser, setAuthUser] = useState(false);
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    setAuthUser(isAuthenticated);
  }, []);
  return authUser;
};

const AuthenticatedRoutes = () => {
  const navigate = useNavigate();

 
  // useEffect(() => {
  //   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  //   if (isAuthenticated) {
  //     navigate('/dashboard');
  //   } else {
  //     navigate('/');
  //     window.location.reload(); // Force the page to refresh when navigating to '/'
  //   }
  // }, [navigate]);
  return (
  <SideBar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/manage-ads" element={<ManageAds />} />
      <Route path="/recently-delete-users" element={<RecentlyDeletedUsers />} />
      <Route path="/all-join-requests" element={<AllJoinRequests />} />
      <Route path="/order" element={<Order />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/all-users" element={<AllUsers />} />
      <Route path="/manage-languages" element={<ManageLanguages />} />
      <Route path="/delivery-details" element={<DeliveryDetails />} />
      <Route path="/schedule-delivery-details" element={<ScheduleDeliveryDetails />} />
      <Route path="/schedule-details" element={<ScheduleDetails />} />
      <Route path="/assign-deliveryboy" element={<AssignDeliveryboy />} />
      <Route path="/manage-vehicles" element={<ManageVehicles />} />
      <Route path="/new-ad-requests" element={<NewAdRequests />} />
      <Route path="/new-ad-requests-details" element={<NewAdRequestsDetails />} />
      <Route path="/ad-requests-details" element={<AdRequestDetails />} />
      <Route path="/manage-payment-methods" element={<ManagePaymentMethods />} />
      <Route path="/payment-method-details" element={<PaymentMethodDetails />} />
      <Route path="/manage-transactions" element={<ManageTransactions />} />
      {/* Website Settings Routes Start Here  */}
      <Route path="/logo-and-favicon" element={<LogoAndFavicon />} />
      <Route path="/seo-configuration" element={<SeoConfiguration />} />
      {/* Website Home Sections Start Here  */}
      <Route path="/home-banner-section" element={<HomeBannerSection />} />
      <Route path="/home-industry-section" element={<HomeIndustrySection />} />
      <Route path="/home-about-section" element={<HomeAboutSection />} />
      <Route path="/home-achievement-section" element={<HomeAchievementSection />} />
      <Route path="/home-services-section" element={<HomeServicesSection />} />
      <Route path="/home-whychooseus-section" element={<HomeWhyChooseUsSection />} />
      <Route path="/home-testimonial-section" element={<HomeTestimonialSection />} />
      <Route path="/home-blog-section" element={<HomeBlogSection />} />
      <Route path="/home-add-new-blog" element={<HomeAddNewBlog />} />
      <Route path="/home-faq-section" element={<HomeFaqSection />} />
      <Route path="/home-client-section" element={<HomeClientSection />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  </SideBar>
)};

const UnauthenticatedRoutes = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/');
  // }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/employee-signup" element={<EmployeeSignup />} />
    </Routes>
  );
  

}
const MainRoutes = () => {
  const authUser = useAuth();
  console.log("authUser++++", authUser);

  return (
    <Router>
      <Routes>
        {authUser ? (
          <Route path="*" element={<AuthenticatedRoutes />} />
        ) : (
          <Route path="*" element={<UnauthenticatedRoutes />} />
        )}
      </Routes>
    </Router>
  );
};

export default MainRoutes;