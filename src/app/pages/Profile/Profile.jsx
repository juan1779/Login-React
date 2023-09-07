import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import Cards from "../../component/Card";

function Profile() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="profile-container">
      <div className="title-profile">
        <h1>Bienvenido a Fast Legacy </h1>
        <button type="submit" className="btnclose-login ">
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
