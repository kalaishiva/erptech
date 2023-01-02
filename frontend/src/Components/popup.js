import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  

 
  return (
    <div>
      
      <Dialog
        open={open}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Our Motto"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <ul>
         <li> Delivering technology solutions.</li>
         <li>Connecting people and technology.</li> 
         <li>Innovate, connect, inspire.</li> 
         <li>Leveraging tech to drive a better IT experience.</li> 
         <li>Ready for the future.</li> 
         <li>We do IT.</li>
         <li>Building the future with tech, gear, and software.</li> 
         </ul>





          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
           
        </DialogActions>
      </Dialog>
    </div>
  );
}