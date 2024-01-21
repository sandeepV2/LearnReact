import React, {useState} from 'react'
// As multiple states.

// use the conscept of dynamic key.
// const dynamicKey = "tty"
// const objectKey = { [dynamicKey] : "ppy"}
// will result in { "tty" : "ppy" }

const MultipleInputOptimized = () => {
    const [info, setInfo] = useState({
        fN: "",
        lN: "",
        mob: "",
        married: false,
        gender: ""
    });
    const [data, setData] = useState("")

    // const fNHandler = (e) => {
    //     setInfo({...info, fN: e.target.value});
    // }
    // const lNHandler = (e) => {
    //     setInfo({...info, lN: e.target.value});
    // }
    // const mobHandler = (e) => {
    //     setInfo({...info, mob: e.target.value});
    // }

    const inputHandler = (e) => {
        // Updating the states here is not the best way.
        // setInfo({...info, [e.target.name]: e.target.value})
        // Use functional update the correct way, as the states are not updated immediately. 
        // react puts them in queue and updates them in batches for performance.

        setInfo((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })

        // Note the inputhandler for checkbox and radio buttons 
        // is e.target.checked
    }

    const inputCheckHandler = (e) => {
        setInfo((prevState) => {
            return {...prevState, [e.target.name]: e.target.checked}
        })   
    }

    const showData= (e) => {
        e.preventDefault(); 
        setData(info.fN + ', ' + info.lN + ', ' + info.mob);
    }

    // Objects are not valid as a React child.
    // info -> JSON.stringify
  return (
    <div>
      <form onSubmit={showData}>
        <input type="text" placeholder='First Name' name="fN" onChange={inputHandler}/>
        <br/>
        <input type="text" placeholder='Last Name' name="lN" onChange={inputHandler}/>
        <br/>
        <input type="text" placeholder='Mobile' name="mob" onChange={inputHandler}/>
        <br/>
        <input type="checkbox" name="married" onChange={inputCheckHandler}/>

        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            // Checking this radio button if the selected option is "Male"
            onChange={inputHandler}/>
          Male
        </label>
        <br/>
        
        {/* Radio button for "Female" */}
        <label>
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={inputHandler}/>
          Female
        </label>
        <button>Submit</button>
      </form>
      {JSON.stringify(info)}
      
    </div>
  )
}

export default MultipleInputOptimized
