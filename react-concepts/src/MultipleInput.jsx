import React, {useState} from 'react'
// As multiple states.

const MultipleInput = () => {
    const [fN, setfN] = useState("");
    const [lN, setlN] = useState("");
    const [mob, setmob] = useState("");
    const [data, setdata] = useState("data");

    const fNHandler = (e) => {
        setfN(e.target.value);
    }
    const lNHandler = (e) => {
        setlN(e.target.value);
    }
    const mobHandler = (e) => {
        setmob(e.target.value);
    }
    const showData= (e) => {
        e.preventDefault(); 
        setdata(fN + ', ' + lN + ', ' + mob);
    }
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
      {data}
    </div>
  )
}

export default MultipleInput
