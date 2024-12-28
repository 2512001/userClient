import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { useSelector } from "react-redux";


const Home = () => {
 let user = useSelector((state)=> state.user.user);
 console.log(user);
  return (
    <div className="home-container">
      <h1>Welcome to User Management App</h1>
      <p>Please use the links below to navigate:</p>
      <div className="nav-links">
        <Link to={`/profile/${user._id}`}>Go to Profile</Link>
        <Link to={`/edit/${user._id}`}>Edit Profile</Link>
      </div>
    </div>
  );
};

export default Home;
