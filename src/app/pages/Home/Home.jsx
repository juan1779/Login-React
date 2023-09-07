import React, { useState } from "react";
import "./Home.css";
import Modals from "./Modal/registerModal";
import img from "../../../assets/img.png";
import Profile from "../Profile/Profile";
import { useSelector } from "react-redux";

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

  const users = useSelector((state) => state.users.users);

  const handleChange = (e) => {
    setDataLogin({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userValidation = users.find(
      (user) =>
        user.email === dataLogin.email && user.password === dataLogin.password
    );

    if (userValidation) {
      alert("login");
    } else {
      alert("fallo en registro");
    }
  };

  return (
    <div className="container">
      <form className="formLogin">
        <img className="imgLogin" src={img} alt="image" />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <div>
          <button
            type="submit"
            onClick={onSubmit}
            className="btnLogin btnActive"
          >
            LOGIN
          </button>
        </div>
        <button onClick={handleOpen} className="btnOpen btnActive ">
          SIGN IN
        </button>
      </form>

      <Modals open={open} onClose={handleClose} />
    </div>
  );
}

export default Home;
