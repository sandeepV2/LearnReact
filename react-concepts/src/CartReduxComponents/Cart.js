import { useSelector, useDispatch } from "react-redux";



const Cart = (props) => {
    const cart = useSelector(state => state.prodR.cart)
    
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
            {cart.map((prod, idx) => <li key={idx} onClick={() => dispatch(deleteOnclick(prod))}>{prod.pname}-{prod.price}</li>)}
        </ul>
      </div>
    )
}

export default Cart;