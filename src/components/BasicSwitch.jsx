import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const BasicSwitch = () => {
  const [isOn , setIsOn] = useState(false);
  return (
  
      <div>
        <Switch {...label} />
      </div>
    );
}

export default BasicSwitch