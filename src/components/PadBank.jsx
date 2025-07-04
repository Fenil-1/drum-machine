import React from 'react'
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


const PadBank = () => {
  const [show,setShow] = useState('');

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
    setShow(src);
  };
  
    useEffect(()=>{
      const handlekey = (e) => {
        switch(e.key.toLowerCase()){
          case 'q':
            playSound(Heater_1);
            break
          case 'w':
            playSound(Heater_2);
            break
          case 'e':
            playSound(Heater_3);
            break
          case 'a':
            playSound(Heater_4);
            break
          case 's':
            playSound(clap);
            break
          case 'd':
            playSound(Open_HH);
            break
          case 'z':
            playSound(Kick_n_Hat);
            break
          case 'x':
            playSound(Kicks);
            break
          case 'c':
            playSound(Closed_HH);
            break
        }
      };
      window.addEventListener('keydown',handlekey);
      return ()=>{
        window.removeEventListener('keydown', handlekey)
      }
    },[])

  return (
    <>
        <div id='pad-bank'>
            <div className='drum-pad' id='Q'><button onClick={()=>{playSound(Heater_1)}}>Q</button></div>
            <div className='drum-pad' id='W'><button onClick={()=>{playSound(Heater_2)}}>W</button></div>
            <div className='drum-pad' id='E'><button onClick={()=>{playSound(Heater_3)}}>E</button></div>
            <div className='drum-pad' id='A'><button onClick={()=>{playSound(Heater_4)}}>A</button></div>
            <div className='drum-pad' id='S'><button onClick={()=>{playSound(clap)}}>S</button></div>
            <div className='drum-pad' id='D'><button onClick={()=>{playSound(Open_HH)}}>D</button></div>
            <div className='drum-pad' id='Z'><button onClick={()=>{playSound(Kick_n_Hat)}}>Z</button></div>
            <div className='drum-pad' id='X'><button onClick={()=>{playSound(Kicks)}}>X</button></div>
            <div className='drum-pad' id='C'><button onClick={()=>{playSound(Closed_HH)}}>C</button></div>
        </div>
        <div id="display">
          
          {show}
       
        </div>
       
    </>
)
}

export default PadBank