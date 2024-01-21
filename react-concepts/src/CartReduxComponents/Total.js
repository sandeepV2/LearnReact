import { useContext } from "react";
import { useSelector } from "react-redux";




const Total = () => {
    // const tPrice = props.total;
    const tPrice = useSelector(state => state.prodR.Total)
    return (
        <div className='customDiv'>
            <h6>Total</h6>
            <hr/>
            <h5>Total: {tPrice}</h5>
        </div>
    )
}

export default Total