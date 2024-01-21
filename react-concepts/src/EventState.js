import React from 'react'
import { useState } from 'react';

const EventState = () => {
    const [i, setI] = useState(0);

    // We could have two different functions that does inc and decrement.
    const inc = () => {
        console.log(`increment ${i}`)
        setI(i +1 );
    }

    const dnc = () => {
        console.log(`increment ${i}`)
        setI(i -1 );
    }

    // Lets assume we want to optimize the use of function. Like there must be
    // single function changeI that does inc/dec based on operator.
    const changeI = (op) => {
        if (op === '+') {
            setI(i + 1);
        } else {
            setI(i - 1);
        }
    }

    // Directy calling this function onClick will lead to infinite loop
    // renders!. As it is executed on load. Too many re-renders. React limits the number of renders to prevent an infinite loop.

    // Note : When using parameter with event handing functions always give function expression.
    // () => function, it is defining expression and not calling the function when loading the component.

  return (
    <div>
      <h1>{i}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dnc}>decrement</button>
      <button onClick={() => changeI('+')}>incWithParam</button>
      <button onClick={() => changeI('-')}>decWithParam</button>
      <h3>{false.toString()}</h3>
    </div>
  )
}

export default EventState
