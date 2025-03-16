import { useState, useEffect } from 'react';
import './ToggleSwitchStyle.css'; 

export default function ToggleSwitch(){

    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () =>{
        setIsOn(!isOn);
    }

    useEffect(() => {
        document.body.style.backgroundColor = isOn ? "#222" : "#fff"; // Dark mode when ON
        document.body.style.color = isOn ? "#fff" : "#000"; // Text color adjustment
    }, [isOn]);

    return(
        <>
            <div 
                className="toggle-switch" 
                style={{backgroundColor: isOn ? "#4caf50" : ""}}
                onClick={handleToggleSwitch} 
            >
                <div className={`switch ${isOn ? "on" : "off"}`}>
                    <span className='switch-state'> {isOn ? "On" : "Off"} </span>
                </div>
             </div>
        </>
    )
}