import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1>BIENVENIDOS</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>usuario: {user.name}</h1>
          <h2>DNI: {user.dni}</h2>
          <h2>Edad: {user.age}</h2>
        </div>
      ))}
    </div>
  );
}

export default Profile;
