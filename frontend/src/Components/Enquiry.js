import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const  Enquiry = () => {

     
  return (
    
  
    
        <Card  elevation={22} style={{maxWidth:450,  margin:"0 auto", padding:"20px 5px" }}>
            <CardContent>
                <Typography gutterBottom variant='h5' align='center'>Enquiry Form</Typography>
                <Typography gutterBottom color="textSecondary" variant='body2' component="p">Please fill up the form our team will get back to you within 24 hours.</Typography>
                <form>
                <Grid container spacing={1}>
                

                    <Grid xs={12} sm={6} item>
                        <TextField label="First Name" placeholder='Enter your first name' variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField label="Last Name" placeholder='Enter your last name' variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField type="email" label="Email" placeholder='Enter your email' variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField  type="number" label="Phone Number" placeholder='Enter your phone number' variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField   label="Message" multiline rows={4} placeholder='Type your message' variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <Button type="submit" variant='contained' color='primary' fullWidth>Submit</Button>
                    </Grid>
                    

                </Grid>
                </form>
            </CardContent>
        </Card>
        
   
  )
}

export default Enquiry