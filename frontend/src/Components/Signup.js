import { Avatar, Grid, Radio, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Paper } from "@mui/material";
import { TextField, FormControl,  FormLabel,  FormControlLabel, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';



const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
  };
  const headerStyle ={
    margin :0
  };
  
  const avatarStyle = {
    backgroundColor: "#22c3c2",
  };
  const marginTop ={
      marginTop: 5
  }
  return (
    <Grid>
      <Paper  style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField
            label="Username"
            variant="standard"
            placeholder="Enter your name"
            fullWidth
            required
          />
          <TextField
            label="Email"
            variant="standard"
            placeholder="Enter your email"
            fullWidth
            required
          />
         
          <FormControl component="fieldset" style={marginTop}>

          <FormLabel id="demo-customized-radios">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            style={{display:'initial'}} >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          </FormControl>

          <TextField  label="Phone Number" variant="standard" placeholder="Enter your password"
            fullWidth
            required
          />

          <TextField type="password" label="Password" variant="standard" fullWidth required />
          <TextField type="password"
            label="Confirm Password"
            variant="standard"
            fullWidth
            required
          />
           <FormControlLabel
            control={
              <Checkbox  name="checkedA" />
            }
            label="I accept the terms and conditions"
          />
          <Button type="Submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
