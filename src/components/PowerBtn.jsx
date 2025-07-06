import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const PowerBtn = () => {
  
  const [isOn,setIsOn] = useState(true)

  const toggle = () => {
    setIsOn((prev) => !prev);
   
  };

  return (
    <Box id="power-btn">
      <Button
        variant="contained"
        onClick={toggle}
        sx={{
          bgcolor: isOn ? 'success.main' : 'grey.700',
          '&:hover': {
            bgcolor: isOn ? 'success.dark' : 'grey.800',
          },
          color: 'white',
          borderRadius: 2,
          px: 4,
          py: 1,
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </Button>
    </Box>
  );
};

export default PowerBtn;
