import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./registerModal.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/features/user/userSlice";
import { v4 as uuid } from "uuid";

function registerModal({ open, onClose }) {
  const dispath = useDispatch();
  const [user, setUser] = useState({
    name: "",
    dni: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispath(addUser({ ...user, id: uuid() }));
  };

  //guardar datos
  /*useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);*/

  /*const obtenerRegistros = () => {
    var datos = localStorage.getItem("user");
    console.log(datos);
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };*/

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="style">
        <form onSubmit={handleSubmit} className="formRegister">
          <span>FULL NAME</span>
          <input
            className="formInput"
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            onChange={handleChange}
          />
          <span>DNI</span>
          <input
            className="formInput"
            type="text"
            name="dni"
            placeholder="Enter your DNI"
            onChange={handleChange}
          />
          <span>AGE</span>
          <input
            className="formInput"
            type="number"
            name="age"
            placeholder="Enter Age"
            onChange={handleChange}
          />
          <span>E-MAIL</span>
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder=" Enter your E-mail address"
            onChange={handleChange}
          />
          <span>PASSWORD</span>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleChange}
          />
          <span>CONFIRM PASSWORD</span>
          <input
            className="formInput"
            type="password"
            name="confirmPassword"
            placeholder="*********"
            onChange={handleChange}
          />
          <button type="submit" className="btnCreate ">
            Create Account
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default registerModal;
