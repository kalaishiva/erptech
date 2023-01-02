import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import sap from "../Images/sap.jpeg";

const useStyles = makeStyles({
  picture: {
    display: "flex",
    
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "aliceblue",
    color:"#063970",
    
  
     
  },
  indus:{
    color: "#063970" ,
    backgroundColor: "aliceblue",
    paddingBlock: "30px",
    paddingInline: "70px"
  
    
  },
  space: {
    paddingTop: "68px",
    
  }
});
const Industries = [
  {
    text: "Automotive",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Chemicals",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Consumer Products",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Energy, Utilities & Mining",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Healthcare / Pharmaceutical",

    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Hi-Tech",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Logistics & Transportation",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Manufacturing",
    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "FMCG, Wholesale & Distribution",

    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Food & Beverages",

    icon: <DoubleArrowIcon color="secondary" />,
  },
  {
    text: "Retail",

    icon: <DoubleArrowIcon color="secondary" />,
  },
];
function Industry() {
  const Picstyle = useStyles();
  return (
    <>
    <div className={Picstyle.indus} id="Industry">
      <div >
      <Typography variant="h2" gutterBottom component="div" className={Picstyle.space}>
        Industry
      </Typography>
      </div>

      <Typography variant="h6" gutterBottom >
        ERP Tech Solution  has rich experience in successful implementation and
        support of SAP ERP, CRM, Supply Chain Management,Human Resource, SAP
        Cloud and HANA applications for global organisations over the years.
        Please find the list of Industries which we serve and Our innovative
        solutions that added values to various Industries’ enterprises and
        businesses Globally.
      </Typography>
      </div>
      <div className={Picstyle.picture}>
        <List>
          {Industries.map((item) => (
            <ListItem key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Box
          component="img"
          alt="Industries Supported."
          src={sap}
          sx={{
            width: 900,
            height: 500,
          }}
        />
      </div>
    </>
  );
}

export default Industry;
