import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import { useState } from 'react';



const SignInOutContainer = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
    const paperStyle = {
        width: 340,
        margin: "20px auto",   
        
    };
    const align = {
        display: "flex",
        justifyContent: "space-evenly",
        
    }

function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    
  return (
    <div>
        
        <Paper elevation={20} style={paperStyle}>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" style={align}>
          <Tab label="Sign In" />
  
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0} >
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1} >
          <Signup />
        </TabPanel>
        </Paper>
    </div>
  )
}

export default SignInOutContainer;