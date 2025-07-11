import React, { useEffect, useState } from 'react';
import Heater_1 from '../audio/Heater_1.mp3';
import Heater_2 from '../audio/Heater_2.mp3';
import Heater_3 from '../audio/Heater_3.mp3';
import Heater_4 from '../audio/Heater_4.mp3';
import clap from '../audio/clap.mp3';
import Open_HH from '../audio/Open_HH.mp3';
import Kicks from '../audio/Kick.mp3';
import Kick_n_Hat from '../audio/Kick_n_Hat.mp3';
import Closed_HH from '../audio/Closed_HH.mp3';

import { Box, Button, Typography, Grid, Paper } from '@mui/material';

const PadBank = ({volume, isOn}) => {
  const [show, setShow] = useState('');

  const playSound = (src) => {
    console.log(src);
    
    const fileName = src.split(".")[0].split("/").at(-1).split("-")[0];
    if(isOn){
      const sound = new Audio(src);
      sound.volume = volume ;
      sound.play();
      setShow(fileName);
  }
    
  };
  
  useEffect(() => {
    console.log("padbank : ",volume);
    const handlekey = (e) => {
      switch (e.key.toLowerCase()) {
        case 'q': playSound(Heater_1); break;
        case 'w': playSound(Heater_2); break;
        case 'e': playSound(Heater_3); break;
        case 'a': playSound(Heater_4); break;
        case 's': playSound(clap); break;
        case 'd': playSound(Open_HH); break;
        case 'z': playSound(Kick_n_Hat); break;
        case 'x': playSound(Kicks); break;
        case 'c': playSound(Closed_HH); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handlekey);
    return () => {
      window.removeEventListener('keydown', handlekey);
    };
  }, [volume,isOn ]);

  const pads = [
    { key: 'Q', src: Heater_1 },
    { key: 'W', src: Heater_2 },
    { key: 'E', src: Heater_3 },
    { key: 'A', src: Heater_4 },
    { key: 'S', src: clap },
    { key: 'D', src: Open_HH },
    { key: 'Z', src: Kick_n_Hat },
    { key: 'X', src: Kicks },
    { key: 'C', src: Closed_HH },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Grid container spacing={2} justifyContent="center" id="pad-bank">
        {pads.map(({ key, src }) => (
          <Grid item xs={4} key={key}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: 80, fontSize: 20 }}
              onClick={() => playSound(src)}
            >
              {key}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
        <Typography variant="h6" id="display">
          {isOn ? show || 'Press a key or click a button' : 'Power on the machine'}
          {/* {show || 'Press a key or click a button'} */}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PadBank;
