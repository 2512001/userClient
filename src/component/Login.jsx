import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store';

const api = 'https://userbackend-37ha.onrender.com/api/users/login';
const api2 = 'http://localhost:8000/api/users/login';

import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(api1, { email, password }, { withCredentials: true });
      console.log(res.data.user);
      dispatch(setUser(res.data.user))
      toast.success(res.data.message);
      navigate('/')
    }
    catch (err) {
      toast.error(err.message);
    }
  }


  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={{marginBottom : '1rem'}} type="submit">Login</button>
        <NavLink  style={{ marginTop  : '1rem'} } to={'/register'} >if dont have account!</NavLink>
      </form>
    </div>
  );
};

export default Login;
