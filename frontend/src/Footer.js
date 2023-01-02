import { Container, Grid, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Footer = () => {
 
const navigate = useNavigate();

  return (
      
      <footer>
      <Box px={{xs: 3, sm:10}}
           py={{xs: 5, sm:10}}
           sx={{ bgcolor: "#063970" }} color='white'>
          <Container maxWidth='lg'>
             <Grid container spacing={4}>
                 <Grid item xs={12} sm={4}>
                     <Box sx={{ p: 2}}>Help</Box>
                     <Box>
                         <Link href='/' color='inherit'>Contact</Link>
                     </Box>
                     <Box>
                         <Link href='/' color='inherit'>Support</Link>
                     </Box>
                     <Box>
                         <Link href='/' color='inherit'>Privacy</Link>
                     </Box>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                     <Box sx={{ p: 2 }}>Services</Box>
                     <Box>
                         <Link href='/' color='inherit'>Upgrade & Migration</Link>
                     </Box>
                     <Box>
                         <Link href='/' color='inherit'>Cloud Managed Services</Link>
                     </Box>
                     <Box>
                         <Link href='/' color='inherit'>Implementation Services</Link>
                     </Box>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                     <Box sx={{p:2}}>About ERP Tech Solution</Box>
                     <Box>
                         <Link href='/' color='inherit'>Our Values</Link>
                        
                     </Box>
                     <Box>
                         <Link  color='inherit' onClick={() => navigate("/popup")}>Our Motto</Link>
                     </Box>
                     <Box>
                         <Link href='/' color='inherit'  >Our Business</Link>
                     </Box>
                 </Grid>
             </Grid>
             <Box textAlign='center' pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
             Copyright © 2022 ERP Tech Solution , All Rights Reserved | Privacy Policy
             </Box>
          </Container>
      </Box>
      </footer>
  )
}

export default Footer