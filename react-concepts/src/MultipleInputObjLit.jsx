import React, {useState} from 'react'
// As multiple states.

const MultipleInputObjLit = () => {
    const [info, setInfo] = useState({
        fN: "",
        lN: "",
        mob: "",
    });
    const [data, setData] = useState("")

    const fNHandler = (e) => {
        setInfo({...info, fN: e.target.value});
    }
    const lNHandler = (e) => {
        setInfo({...info, lN: e.target.value});
    }
    const mobHandler = (e) => {
        setInfo({...info, mob: e.target.value});
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
        <input type="text" placeholder='First Name' onChange={fNHandler}/>
        <br/>
        <input type="text" placeholder='Last Name' onChange={lNHandler}/>
        <br/>
        <input type="text" placeholder='Mobile' onChange={mobHandler}/>
        <button>Submit</button>
      </form>
      {JSON.stringify(info)}
      
    </div>
  )
}

export default MultipleInputObjLit
