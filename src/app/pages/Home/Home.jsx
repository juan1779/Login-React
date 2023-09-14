import React, { useState } from "react";
import "./Home.css";
import Modals from "./Modal/registerModal";
import img from "../../../assets/img.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/features/login/loginSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  //info redux
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  //Modal state
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault(setOpen(true));
  };
  const handleClose = () => setOpen(false);

  //LoginState Email

  const [dataLoginEmail, setDataLoginEmail] = useState(null);

  const handleChangeEmail = (e) => {
    setDataLoginEmail(e.target.value);
  };

  //LoginState Password
  const [dataLoginPassword, setDataLoginPassword] = useState(null);

  const handleChangePassword = (e) => {
    setDataLoginPassword(e.target.value);
  };

  //function submit info

  const onSubmit = (e) => {
    e.preventDefault();
    const userValidation = users.find(
      (user) =>
        user.email === dataLoginEmail && user.password === dataLoginPassword
    );

    if (userValidation) {
      dispatch(login({ dataLoginEmail }));
      navigate("/profile");
    } else {
      alert("incorrect credentials");
    }
  };

  return (
    <div className="container">
      <form id="form_login" className="formLogin">
        <img className="imgLogin" src={img} alt="image" />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          required
          autoFocus
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChangePassword}
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
