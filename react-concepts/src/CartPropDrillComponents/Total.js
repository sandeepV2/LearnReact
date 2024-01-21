import { useContext } from "react";
import TotalC from "../storePropDrill/TotalContext";



const Total = () => {
    // const tPrice = props.total;
    const tPrice = useContext(TotalC);
    return (
        <div className='customDiv'>
            <h6>Total</h6>
            <hr/>
            <h5>Total: {tPrice}</h5>
        </div>
    )
}

// Old version
{/* <TotalC.Consumer>
  {(tPrice) => {
    return (
      <div className="customDiv">
        <h6>Total</h6>
        <hr />
        <h6>Total: {tPrice}</h6>
      </div>
    );
  }}
</TotalC.Consumer>; */}

export default Total;