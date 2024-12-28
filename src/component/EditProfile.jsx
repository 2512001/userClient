import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './edit.css';
import { toast } from 'react-toastify';
const api = 'https://userbackend-37ha.onrender.com/api/users/profile';
const api2 = 'http://localhost:8000/api/users/profile';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from "../store";


const EditProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let user = useSelector((state) => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`${api}/${user._id}`, { email, password }, { withCredentials: true });
      toast.success(res.data.message);
      dispatch(setUser(res.data.user));
      navigate(`/profile/${user._id}`);
    }
    catch (err) {
      toast.error(err.message)
    }

  };

  return (
    <div className="form-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Update Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Update Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
