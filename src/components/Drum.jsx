import React from 'react'
import './Drum.css'
import PadBank from './PadBank'

import Controls from './Controls'
const Drum = () => {
  return (
    <>
    <div id='drum-machine'>
      <div id='drum-machine-inner'>
        <PadBank />    
      </div>
        <Controls />
    </div>
    </>
  )
}

export default Drum