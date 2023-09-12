import React from "react";

import "./Profile.css";
import Cards from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/login/loginSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="title-profile">
        <h1>Bienvenido a Fast Legacy </h1>
        <button
          type="submit"
          className="btnclose-login "
          onClick={handleLogout}
        >
          logout
        </button>
      </div>

      {users.map((user) => (
        <Cards
          key={user.id}
          name={user.name}
          age={user.age}
          dni={user.dni}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default Profile;
