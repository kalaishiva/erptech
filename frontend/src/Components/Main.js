import Header from "../Header";
import DrawerCom from "../DrawerCom";
import AboutUs from "./AboutUs";
import Footer from "../Footer";
import Login from "./Login";
import Industry from "./Industry";
import Home from "./Home";
import Services from "./Services";
import ContactUs from "./ContactUs";
import React from "react";
import Signup from "./Signup";
import SignInOutContainer from "../Container";
import Enquiry from "./Enquiry";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


function Main() {
  return (
    <div>

      <Header />
      <DrawerCom />
      <Home />
      <Services />
      <Industry />
      <ContactUs />
      <AboutUs />

      <Footer /> 



    </div>
  );
}
export default Main;