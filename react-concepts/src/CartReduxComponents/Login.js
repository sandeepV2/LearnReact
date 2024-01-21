import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validateUser } from '../CartStoreRedux/actions';

const Login = () => {
    const users = useSelector((state) => state.loginR.users);
    const loginData = useSelector((state) => state.loginR.loginData);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let usrIdx = e.target.value;
      
        console.log(users[usrIdx]);
        dispatch(validateUser(usrIdx));
     };
  return (
    <div className='customDiv'>
    <h6>User Login</h6>
    <hr/>
    <select onChange={(e) => handleChange(e)}>
        {users.map((prod, idx) => <option key= {idx} value={idx} >{prod}</option>)}
    </select>
    <h3>User: {loginData}</h3>
  </div>
  )
}

export default Login
