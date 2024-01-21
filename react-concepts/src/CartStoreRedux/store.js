import { combineReducers, legacy_createStore as createStore} from 'redux'
import * as actions from './actions.js';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

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

// state takes initial state
const prodReducer = (state=initialProd, action) => {
    if (action.type === actions.PURCHASE) {
        let tCart = [...state.cart, action.payLoad];
        let tPrice = state.Total + parseInt(action.payLoad.price);
        return { ...state, cart: tCart, Total: tPrice};
    }
    if (action.type === 'delete_item') {
        return {
            ...state,
            cart : state.cart.filter(ct => ct !== action.payLoad),
            Total : state.Total - parseInt(action.payLoad.price)
        }
    }
    
    return state;
}

const userData = {
    users : ['admin', 'manager', 'engineer'],
    loginData: null
}

const loginReducer = (state=userData, action) => {
    if (action.type === 'LOGIN'){
        return {
            ...state,
            loginData: state.users[action.payLoad]
        }
    }
    return state;
}

const rootReducer = combineReducers({
    prodR : prodReducer,
    loginR : loginReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

