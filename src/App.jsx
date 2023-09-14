import React from "react";
import Home from "./app/pages/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./app/pages/Profile/Profile";
import { useSelector } from "react-redux";

const App = () => {
  const login = useSelector((state) => state.login.userLogin);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/profile"
            element={login ? <Profile /> : <Home />}
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
