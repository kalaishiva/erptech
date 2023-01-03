import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import {Alert} from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';


const  Enquiry = () => {

    const[firstName, setFirstName]= useState("");
    const[lastName, setLastName]= useState("");
    const[email, setEmail]= useState("");
    const[phoneNumber, setPhoneNumber]= useState("");
    const[message, setMessage]= useState("");
    const[status, setStatus]= useState("");

    const BASE_URL = "https://erptech-production.up.railway.app";

    console.log(status.length);
    const createEnquiry = (event) =>{
        event.preventDefault();
        submitData();
      }
    
    const submitData = async() =>{
     
      const enquiryData = {
       "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "phonenumber": phoneNumber,
        "message": message,
      
        
      }
      const res = await axios.post(`${BASE_URL}/enquiry`, enquiryData);
      console.log(res);
    
      if(res.status === 200){
        setStatus(true);
      }else{
        setStatus(false);
      }
    }

    
  return (
    
  
    
        <Card  elevation={22} style={{maxWidth:450,  margin:"0 auto", padding:"20px 5px" }}>
            <CardContent>
                <Typography gutterBottom variant='h5' align='center'>Enquiry Form</Typography>
                <Typography gutterBottom color="textSecondary" variant='body2' component="p">Please fill up the form our team will get back to you within 24 hours.</Typography>
                <form>
                <Grid container spacing={1}>
                

                    <Grid xs={12} sm={6} item>
                        <TextField label="First Name" placeholder='Enter your first name' variant="outlined" onChange={(e)=>{setFirstName(e.target.value)}} fullWidth required/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Last Name" placeholder='Enter your last name' variant="outlined" onChange={(e)=>{setLastName(e.target.value)}}  fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField type="email" label="Email" placeholder='Enter your email' variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField  type="number" label="Phone Number" placeholder='Enter your phone number' variant="outlined" onChange={(e)=>{setPhoneNumber(e.target.value)}} fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField   label="Message" multiline rows={4} placeholder='Type your message' variant="outlined" onChange={(e)=>{setMessage(e.target.value)}} fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <Button type="submit" variant='contained' color='primary' fullWidth onClick={createEnquiry}>Submit</Button>
                    </Grid>
                    {status ?
                    <Alert variant="filled" severity="success" >
                    Enquiry Successfully Submitted
                  </Alert>: ""
                   
                   
                    }
                   {/*  //  <Alert variant="filled" severity="error">
                    //  Sorry Enquiry was not Submitted
                    // </Alert>  */}
                    
                    


                </Grid>
                </form>
            </CardContent>
        </Card>
        
   
  )
}

export default Enquiry