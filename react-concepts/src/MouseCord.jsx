import React from 'react';
import { useState, useEffect } from 'react';

// Print co-ordinates of the mouse position
// the return statement in useEffect - componentWillUnmount.
const MousePos = () => {
    const [xy, setXy] = useState("0,0");

    const displayXY = (e) => {
        const cord = e.pageX + "," + e.pageY;
        setXy(cord);
        console.log(cord);
    }

    useEffect(() => {
        window.addEventListener("mousemove", displayXY);
        return (() => {
            window.removeEventListener("mousemove", displayXY);
        })
    });
    return (
      <div>
        <h3>{xy}</h3>
      </div>
      
    )
  }

const MouseCord = () => {
    const [showCord, setShowCord] = useState(true)
  return (
    <div>
      {showCord ? <MousePos/> : <h1>No Data</h1>}
      <button onClick={() => setShowCord(!showCord)}>toggle</button>
    </div>

  )
}


// Print co-ord of the mouse p
export default MouseCord
