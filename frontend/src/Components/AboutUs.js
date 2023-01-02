import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import work from "../Images/work.jpeg";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  pad: {
    paddingBlock: "30px",
    paddingInline: "70px",
    color: "#063970" 
  },
  
    picture: {
      marginTop:"30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "aliceblue",
       marginLeft: "30px",
       paddingBottom:"10px"
}
    },
  );


const AboutUs = () => {
  const GrdItm = useStyles();
  return (
    <>
    <div className={GrdItm.picture} id="About Us">
      <Box
        component="img"
        alt="About Us"
        src={work}
        sx={{
          width: "700px",
          height: "400px",
        }}
      />

      <Grid container direction={"column"} spacing={6} className={GrdItm.pad}>
        <Grid item>
          <Typography variant="h4">About Us</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <div>
              ERP Tech Solution is a global system integrator, offering a unique
              engagement model to help our customers simplify their business
              processes to enable the achievement of business objectives. With a
              rich experience in technology and business consulting, we identify
              innovative digital transformation initiatives to facilitate
              growth. We implement and sustain them with state of the art
              delivery model to facilitate easy adoption and highly scalable
              digital environment. We provide specialised end to end
              transformational services in SAP ERP, HANA & SAP Line of Business
              Solutions (LoB) , Data Analytics, Digital Process Automation,
              Cloud Product Services and Consulting.
            </div>
          </Typography>
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default AboutUs;
