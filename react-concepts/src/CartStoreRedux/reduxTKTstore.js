import { combineReducers, legacy_createStore as createStore} from 'redux'
// import * as actions from './actions.js';
// import { applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk';

import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialProd = {
    products : [
        {id:11, pname : 'Apple', price: 3},
        {id:12, pname : 'Banana', price: 4},
        {id:13, pname : 'Grape', price: 5},
        {id:14, pname : 'Orange', price: 6},
        {id:15, pname : 'Amla', price: 7}
    ],
    cart : [],
    Total : 0
}

const prodSlice = createSlice({
    name : 'product',
    initialState : initialProd, 
    reducers : {
        purchase : (state, action ) => {
            state.cart = [...state.cart, action.payload];
            state.Total = state.Total + parseInt(action.payload.price);
        },
        deleteItem : (state, action) => {
            console.log(action.payload)
            console.log(state.cart);
            state.cart  = state.cart.filter(ct => ct.pname !== action.payload.pname)
            state.Total = state.Total - parseInt(action.payload.price)
        }
    }
})



const userData = {
    users : ['admin', 'manager', 'engineer'],
    loginData: null
}

const loginSlice = createSlice({
    name : 'login', 
    initialState : userData,
    reducers : {
        login: (state, action) => {
            state.loginData = action.payload;
        }
    }
})

export const {login} =loginSlice.actions;
// export default loginSlice.reducer;
export const {purchase, deleteItem} = prodSlice.actions;


const store = configureStore({reducer: {
    prodRtkt: prodSlice.reducer,
    loginRtkt: loginSlice.reducer
}});

export default store;

// const loginReducer = (state=userData, action) => {
//     if (action.type === 'LOGIN'){
//         return {
//             ...state,
//             loginData: state.users[action.payLoad]
//         }
//     }
//     return state;
// }

// const rootReducer = combineReducers({
//     prodR : prodReducer,
//     loginR : loginReducer
// })

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

