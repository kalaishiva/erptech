import Header from "./Header";
import DrawerCom from "./DrawerCom";
import AboutUs from "./Components/AboutUs";
import Footer from "./Footer";
import Login from "./Components/Login";
import Industry from "./Components/Industry";
import Home from "./Components/Home";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import React from "react";
import Signup from "./Components/Signup";
import SignInOutContainer from "./Container";
import Enquiry from "./Components/Enquiry";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import AlertDialog from "./Components/popup";


function App() {
  return (
    <div>
      <div className="container mt-2" style={{ marginTop: 40 }}>
        {/*<BrowserRouter>
      <Header />
      
        <Switch>
          <Route path="/Home" exact component={Home}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/Industry" exact component={Industry}/>
          <Route path="/ContactUs" exact component={ContactUs}/>
          <Route path="/AboutUs" exact component={AboutUs}/>
        
        </Switch>
        <Footer />
*/}
      </div>

      {/* <Header />

      <DrawerCom />
      <Home />
      <Services />
      <Industry />
      <ContactUs />
      <AboutUs />

      {/* <SignInOutContainer />
      <Enquiry /> 

      <Footer />  */}
    
      <Routes>
   <Route  path="/" exact element={<Main />} />
   <Route  path="/Login" exact element={<SignInOutContainer />} />
   <Route  path="/Enquiry" exact element={<Enquiry />} />
   <Route  path="/popup" exact element={<AlertDialog />} />
   
   </Routes>
  
  
    </div>
  );
}

export default App;
