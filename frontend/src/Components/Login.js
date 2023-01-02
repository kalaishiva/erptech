import { Avatar, Grid, Link, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import React from 'react';

const Login = () =>  {

    const paperStyle = {
        padding: 20,
        width: 300,
        margin: '0 auto',
        height: '56vh'
    }
    const avatarStyle = {
        backgroundColor: '#22c3c2'
    }

    const btnStyleRt ={
        marginRight: '8px 0'
    }
    const btnStyle={
        margin: '8px 0'
    }
   


  return (

    <Grid>
        <Paper  style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2>
            </Grid>
            <TextField  label="Username" variant="standard" fullWidth required/>
            <TextField  type="password" label="Password" variant="standard" fullWidth required/>
            
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" style={btnStyle}/>
              <Button type='Submit' color='primary' variant='contained' style={btnStyleRt} fullWidth >Login</Button>

              <Typography style={btnStyle}>
              <Link href='#'>Forget Password?</Link>
              </Typography>

              <Typography style={btnStyle}>
                  Don't you have an account?
                  <Link href='#'>
                  Sign Up
                  </Link>
              </Typography>        
          
        </Paper>
    </Grid>
  )
}

export default Login