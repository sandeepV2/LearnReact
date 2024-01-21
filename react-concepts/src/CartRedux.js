import React, {useState} from 'react'

import './CartPropDrill.css'
import Cart from './CartReduxComponents/Cart';
import Total from './CartReduxComponents/Total';
import Purchase from './CartReduxComponents/Purchase';
import Login from './CartReduxComponents/Login';
import PurchaseCl from './CartReduxComponents/PurchaseCl';
import store from './CartStoreRedux/store';

import { Provider } from 'react-redux';

const CartRedux = () => {
    
  return (
    <div>
        <Provider store={store}>
            <Login />
            <Purchase />
            {/* <PurchaseCl /> */}
            <Cart />
            <Total />
        </Provider>
    </div>
  )
}

export default CartRedux
