import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";
import EditProfile from "./component/EditProfile";
import Home from "./component/Home";
import { useSelector } from "react-redux";

const App = () => {
  let logged = useSelector((state) => state.user.logged);
  console.log(logged);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={logged ? <Home /> : <Login />} />
          {!logged ?
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
            :
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path={'/edit/:id'} element={<EditProfile />} />
            </>
          }
          <Route path='*' element={<Navigate to={logged ? '/': '/login'} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
