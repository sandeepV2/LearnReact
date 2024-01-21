import { useContext } from "react";
import TotalC from "../storePropDrill/TotalContext";


const Cart = (props) => {
    const {cart} = props
    const total = useContext(TotalC);
    return (
        <div className='customDiv'>
        <h6>Cart</h6>
        <hr/>
        <ul>
            {cart.map((prod, idx) => <li key={idx}>{prod.pname}-{prod.price}</li>)}
        </ul>
        {total}
      </div>
    )
}

export default Cart;