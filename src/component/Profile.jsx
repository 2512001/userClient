import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const  user  = useSelector((state) => state.user.user);
  

  return (
    <div className="profile-container">
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>Email: {user.email}</p>
          <NavLink to={`/edit/${user._id}`}>
          <button style={{marginTop : '1rem'}}>Edit profile</button>
          </NavLink>
        </div>
    </div>
  );
};

export default Profile;
