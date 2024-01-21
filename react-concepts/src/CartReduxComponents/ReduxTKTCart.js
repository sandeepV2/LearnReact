import { useSelector, useDispatch } from "react-redux";

import { deleteItem } from "../CartStoreRedux/reduxTKTstore";

const Cart = (props) => {
    const cart = useSelector(state => state.prodRtkt.cart)
    const total = useSelector(state => state.prodRtkt.total)
    const dispatch = useDispatch();
    const deleteOnclick = (prod) => {
        return {
            type: 'delete_item',
            payLoad: prod
        }
    }
    return (
        <div className='customDiv'>
        <h6>Cart</h6>
        <hr/>
        <ul>
            {cart.map((prod, idx) => <li key={idx} onClick={() => dispatch(deleteItem(prod))}>{prod.pname}-{prod.price}</li>)}
        </ul>
        {total}
      </div>
    )
}

export default Cart;