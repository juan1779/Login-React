import React from "react";
import Home from "./app/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./app/pages/Profile/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
