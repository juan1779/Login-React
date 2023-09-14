import React from "react";
import "./Profile.css";
import Cards from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/login/loginSlice";
import { useNavigate } from "react-router-dom";
import Male from "../../../assets/chico.png";
import Female from "../../../assets/chica.jpg";

function Profile() {
  const users = useSelector((state) => state.users.users);
  const userLogin = useSelector((state) => state.login.email);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const user = users.find((user) => user.email === userLogin.dataLoginEmail);

  return (
    <div className="profile-container">
      <div className="title-profile">
        <h1>Welcome to Fast Legacy </h1>
        <button
          type="submit"
          className="btnclose-login "
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      <Cards
        key={user.id}
        name={user.name}
        age={user.age}
        dni={user.dni}
        gender={user.gender == "male" ? Male : Female}
        email={user.email}
      />
    </div>
  );
}

export default Profile;
