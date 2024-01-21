import React, {useState} from 'react'

import './CartPropDrill.css'
import Cart from './CartReduxComponents/ReduxTKTCart';
import Total from './CartReduxComponents/ReduxTKTTotal';
import Purchase from './CartReduxComponents/ReduxTKTPurchase';
import Login from './CartReduxComponents/ReduxTKTLogin';
import store from './CartStoreRedux/reduxTKTstore';

import { Provider } from 'react-redux';

const CartReduxTKT = () => {
    
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

export default CartReduxTKT
