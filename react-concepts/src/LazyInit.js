import React from 'react'
import { useState } from 'react';

// Lazy initialization is optimized way for avoiding
// expensive operation on rendering the state with useState hook.
function initState() {
    console.log('expensive op ' + Date.now() )
    return 0;
}

const LazyInit = () => {
    //let i = 0; // The number may be incremented on click but won't be be rendered !.
    // If you want to render the incremented value, put in useState hook. 
    // It has setter method to update value and not immutable. React becomes watchful of the element.
    //const [i, setI] = useState(initState()); logs the date twice

    const [i, setI] = useState(() => initState());

    const inc = () => {
        console.log(`increment ${i}`)
        setI(i +1 );
    }
  return (
    <div>
        <h1>{i}</h1>
        <button onClick={inc}>increment</button>
    </div>
  )
}

export default LazyInit
