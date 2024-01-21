import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Purchase = () => {
    const products = useSelector((state) => state.prodR.products);
    const loginData = useSelector((state) => state.loginR.loginData);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let pname = e.target.options[e.target.selectedIndex].text;
        let price = e.target.value;
        let obj = {pname, price}
        console.log(obj);
        dispatch({type: 'purchase', payLoad:obj});
     };
  return (
    <div className='customDiv'>
    <h6>Purchase Products</h6>
    <hr/>
    <select onChange={(e) => handleChange(e)}>
        {products.map((prod, idx) => <option key= {idx} value={prod.price} >{prod.pname}</option>)}
    </select>
    <h3>User: {loginData}</h3>
  </div>
  )
}

export default Purchase
