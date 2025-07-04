import React from 'react'
import { useState } from 'react'
const PowerBtn = ({Button}) => {
    
    const [isOn , setisOn] = useState(false)
    const toggle = () => {
      setisOn(!isOn)
    } 
    
  return (
    <div id='power-btn'>
            <button onClick={toggle} style={{
              padding: '10px 20px',
              backgroundColor: isOn ? 'green' : 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}>
              {isOn ? 'ON' : 'OFF'}
            </button>
      </div>
  )
}

export default PowerBtn