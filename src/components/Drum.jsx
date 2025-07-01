import React from 'react'
import './Drum.css'
import Heater_1 from '../audio/Heater_1.mp3'
import Heater_2 from '../audio/Heater_2.mp3'
import Heater_3 from '../audio/Heater_3.mp3'
import Heater_4 from '../audio/Heater_4.mp3'
import clap from '../audio/clap.mp3'
import Open_HH from '../audio/Open_HH.mp3'
import Kicks from '../audio/Kick.mp3'
import Kick_n_Hat from '../audio/Kick_n_Hat.mp3'
import Closed_HH from '../audio/Closed_HH.mp3'
import { useEffect , useState } from 'react'
import { Input } from '@mui/material'

const Drum = () => {
    const Heater1 = new Audio(Heater_1)
    const Heater2 = new Audio(Heater_2)
    const Heater3 = new Audio(Heater_3)
    const Heater4 = new Audio(Heater_4)
    const Clap = new Audio(clap)
    const OpenHH = new Audio(Open_HH)
    const Kick = new Audio(Kicks)
    const KicknHat = new Audio(Kick_n_Hat)
    const ClosedHH = new Audio(Closed_HH)

    const [show,setShow] = useState('');

    const handleQ = () => {
      Heater1.play()
      setShow('Heater 1')
    }
    const handleW = () => {
      Heater2.play()
      setShow('Heater 2')
    }
    const handleE = () => {
      Heater3.play()
      setShow('Heater 3')
    }
    const handleA = () => {
      Heater4.play()
      setShow('Heater 4')
    }
    const handleS = () => {
      Clap.play()
      setShow('Clap')
    }
    const handleD = () => {
      OpenHH.play()
      setShow('Open HH')
    }
    const handleZ = () => {
      KicknHat.play()
      setShow('Kick n Hat')
    }
    const handleX = () => {
      Kick.play()
      setShow('Kick')
    }
    const handleC = () => {
      ClosedHH.play()
      setShow('Closed HH')
    }

    useEffect(()=>{
      const handlekey = (e) => {
        switch(e.key.toLowerCase()){
          case 'q':
            handleQ();
            break
          case 'w':
            handleW();
            break
          case 'e':
            handleE();
            break
          case 'a':
            handleA();
            break
          case 's':
            handleS();
            break
          case 'd':
            handleD();
            break
          case 'z':
            handleZ();
            break
          case 'x':
            handleX();
            break
          case 'c':
            handleC();
            break
          

        }
      };
      window.addEventListener('keydown',handlekey);
      return ()=>{
        window.removeEventListener('keydown', handlekey)
      }
    },[])
    const [isOn , setisOn] = useState(false)
    const toggle = () => {
      setisOn(!isOn)
    } 
    
  

  return (

    <>
    <div id='drum-machine'>
      <div id='drum-machine-inner'>
        <div id='pad-bank'>
            <div className='drum-pad' id='Q'><button onClick={handleQ}>Q</button></div>
            <div className='drum-pad' id='W'><button onClick={handleW}>W</button></div>
            <div className='drum-pad' id='E'><button onClick={handleE}>E</button></div>
            <div className='drum-pad' id='A'><button onClick={handleA}>A</button></div>
            <div className='drum-pad' id='S'><button onClick={handleS}>S</button></div>
            <div className='drum-pad' id='D'><button onClick={handleD}>D</button></div>
            <div className='drum-pad' id='Z'><button onClick={handleZ}>Z</button></div>
            <div className='drum-pad' id='X'><button onClick={handleX}>X</button></div>
            <div className='drum-pad' id='C'><button onClick={handleC}>C</button></div>
        </div>
          <div id='other-half'>
            <div id='display'>
              <h2>{show}</h2>
            </div>
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
          </div>
        </div>
    </div>
    </>
  )
}

export default Drum