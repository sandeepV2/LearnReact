
import { login } from "./reduxTKTstore";
// Define all the actions as constants.

export const PURCHASE = 'purchase';
export const LOGIN = 'LOGIN';
export const DEL_ITEM = 'del-item';

// why is dispatch not available. 
// Use thunk to be available as middleware.

export const validateUser = (loginData) => {
    // Mocking API call.
    return (dispatch) => {
      setInterval(() => {
        dispatch({type: LOGIN, payLoad: loginData});
    }, 1000)
    }
}

export const validateUserTKT = (loginData) => {
    // Mocking API call.
    // Redux thunk is available with Toolkit
    return (dispatch) => {
      setInterval(() => {
        dispatch(login(loginData));
    }, 1000)
    }
}


