import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateUserTKT } from '../CartStoreRedux/actions';

import { login } from '../CartStoreRedux/reduxTKTstore';

const Login = () => {
    const users = useSelector((state) => state.loginRtkt.users);
    const loginData = useSelector((state) => state.loginRtkt.loginData);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let usrIdx = e.target.value;
      
        // console.log(users[usrIdx]);
        // dispatch(login(usrIdx));
        dispatch(validateUserTKT(usrIdx));
     };
  return (
    <div className='customDiv'>
    <h6>User Login</h6>
    <hr/>
    <select onChange={(e) => handleChange(e)}>
        {users.map((prod, idx) => <option key= {idx + 111} value={prod} >{prod}</option>)}
    </select>
    <h3>User: {loginData}</h3>
  </div>
  )
}

export default Login
