import React, {useState} from 'react'

import './CartPropDrill.css'
import Cart from './CartPropDrillComponents/Cart';
import Total from './CartPropDrillComponents/Total';
import TotalC from './storePropDrill/TotalContext';



const CartPropDrill = () => {
    const [opt, setOpt] = useState("");
    const [cart, setCart] = useState([]);
    const [tPrice, setPrice] = useState(0);
    const products = [
        {id:11, pname : 'Apple', price: 3},
        {id:12, pname : 'Banana', price: 4},
        {id:13, pname : 'Grape', price: 5},
        {id:14, pname : 'Orange', price: 6},
        {id:15, pname : 'Amla', price: 7}
    ]
    const handleChange = (e) => {
        let pName =  e.target.options[e.target.selectedIndex].text
        let pPrice = e.target.value
        // setOpt(sOpt);
        // console.log(sOpt);
        console.log(pName);
        let Obj = {pname:pName, price:pPrice}
        setOpt(pName);
        // setCart((prev, state)=> [...prev.cart, Obj])
        setCart([...cart, Obj])
        setPrice(tPrice + parseInt(pPrice))
        console.log(cart);
    }
  return (
    <div>
      <div className='customDiv'>
        <h6>Purchase Products</h6>
        <hr/>
        <select onChange={handleChange}>
            {products.map((prod, idx) => <option key= {idx} value={prod.price} >{prod.pname}</option>)}
        </select>
        <h3>Selected option: {opt}</h3>
      </div>
      
      <TotalC.Provider value={tPrice}>
        <Cart cart={cart} />
        <Total />
      </TotalC.Provider>
    </div>
  )
}

export default CartPropDrill
