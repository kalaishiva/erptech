import { Card, Grid, Link, Typography } from '@mui/material'
import React from 'react';
import tech2 from "../Images/tech2.webp";
import {  CardMedia } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";





const useStyles = makeStyles({

  
  align: {
    lineHeight:"2.5em",
    textAlign: 'center',
    color: "#063970" 

    
   
  }, 
  picture: {
    marginTop:"30px",
    display: "flex",
     marginLeft: "30px",
     alignItems: "center",
     backgroundColor: "aliceblue",
     justifyContent: "space-around",
     paddingRight: "150px"
    
    
},

});

function ContactUs(){
  const Styles = useStyles();
  return (
    <>
    <div className={Styles.picture} id="Contact Us">
    
    <Grid container direction={"column"}  className={Styles.align} >
        <Grid item xs={4}>
          <Typography variant="h3">Contact Us</Typography>
          </Grid>
        <Grid  item xs={4}>
          
        <Typography variant="h4">ERP Tech Solution</Typography>
    
        <Typography> <WhatsAppIcon /> / <PhoneIcon /> : +91 6380 278 822</Typography>
        <Typography> <EmailIcon /> : contact@erptechsolution.com</Typography>
    </Grid>
    </Grid>
     <Box
        component="img"
        sx={{
          width: 900,
            height: 500,
        }}
        src={tech2}
        alt="ERP Tech"
      />
    </div>
    </>
  )
}

export default ContactUs