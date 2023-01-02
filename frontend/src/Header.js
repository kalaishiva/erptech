import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Tabs, Tab, Toolbar, Typography, Button } from "@mui/material";
// import FilterDramaIcon from "@mui/icons-material/FilterDrama";
//import { useTheme } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import DrawerCom from "./DrawerCom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { HashLink as Hlink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import AboutUs from "./Components/AboutUs";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useNavigate} from "react-router-dom";

import Logo from "./Images/logonew2.png";
import Login from "./Components/Login";

const Pages = ["Home", "Services", "Industry", "About Us", "Contact Us"];

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  //console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  //console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <Box
            component="img"
            sx={{
              width: 50,
              height: 50,
            }}
            src={Logo}
            alt="ERP Tech"
          />
          <Typography sx={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
            ERP Tech Solution
          </Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                ERP Tech Solution
              </Typography>
              <DrawerCom />
            </>
          ) : (
            <>
              {/* <BrowserRouter> */}
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  {/* <Hlink to="#Aboutus">
                <Tab label="AboutUs" ></Tab></Hlink> */}
                  {Pages.map((page, index) => (
                    <NavHashLink
                      to={`#${page}`}
                      smooth
                      style={{ color: "cornsilk", textDecoration: "none" }}
                    >
                      <Tab key={index} label={page} />
                    </NavHashLink>
                  ))}
                </Tabs>
                {/* </BrowserRouter> */}

                {/* <Routes>
                  <Route path="/Login" exact element={<Login />} />
                </Routes> */}
              
              {/* <Tab label="Home" ></Tab>
              <Tab label="Services"></Tab>
              <Tab label="Industry"></Tab>
              <Tab label="About Us"></Tab>
              <Tab label="Contact Us"></Tab>
              </Tabs> */}
              {/* <Button  onClick={() => navigate("/Login")}>Login</Button> */}
              <Button onClick={() => navigate("/Login")}
                sx={{ marginLeft: "auto" }}
                variant="contained"
                >
                Login
              </Button>
              <Button onClick={() => navigate("/Enquiry")} sx={{ marginLeft: "10px" }} variant="contained">
                Enquiry
              </Button>
             
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
};

export default Header;
