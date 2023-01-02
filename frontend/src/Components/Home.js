import { Grid,Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import wall3 from "../Images/wall3.jpeg";
const useStyles = makeStyles({
  pic: {
    backgroundImage: `url(${wall3})`,
    marginTop: '85px',
    marginTop: '35px',
    color: 'white',
    textAlign: 'center',
    height: "606px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    
  },
  
  pad :{
    paddingBlock: "30px",
    paddingInline: "70px"
  }
});
function Home(){
  const Images = useStyles();
  return (
    <Paper >
    <div className={Images.pic} id="Home">
    <Grid container direction={"column"} spacing={6} className={Images.pad}>
  <Grid item>
  <Typography variant="h3" gutterBottom component="div" align="center">
        ERP Tech Solution
      </Typography>
  </Grid>
  <Grid item>
  <Typography variant="h4" gutterBottom component="div" align="left">
        World-class Premier Business and Technology Services Company
      </Typography>
  </Grid>
  <Grid item>
  <Typography variant="h5" gutterBottom align="justify" >
        Taking innovation to a new level with years of IT experience along with
        intitute delivery, ERP Tech Solution is truly committed to help its
        world-wide customers in digital transformation, implementation and
        technical support throughout the life-cycle of your technology
        investment.
      </Typography>
  </Grid>
</Grid>
      </div>
    </Paper>
  );
};
export default Home;