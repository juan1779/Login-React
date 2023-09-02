import React, { useState } from "react";
import "./Home.css";
import Modals from "./Modal/registerModal";
import img from "../../../assets/img.png";
import Profile from "../Profile/Profile";

function Home() {
  //Modal state
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault(setOpen(true));
  };
  const handleClose = () => setOpen(false);

  //LoginState

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({ [e.target.name]: e.target.value });
    console.log(dataLogin);
  };

  return (
    <div className="container">
      <form className="formLogin">
        {/* <!-- Login --> */}
        <img className="imgLogin" src={img} alt="image" />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div>
          <button type="submit" className="btnLogin btnActive">
            LOG IN
          </button>
        </div>
        <button onClick={handleOpen} className="btnOpen btnActive ">
          SIGN IN
        </button>
      </form>
      <Profile />
      <Modals open={open} onClose={handleClose} />
    </div>
  );
}

export default Home;
