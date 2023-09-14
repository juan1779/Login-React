import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloseIcon from "@mui/icons-material/Close";
import "./registerModal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../store/features/user/userSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function registerModal({ open, onClose }) {
  const navigate = useNavigate();
  //redux info
  const dispath = useDispatch();
  const users = useSelector((state) => state.users.users);

  //register info
  const [user, setUser] = useState({
    gender: "",
    name: "",
    dni: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //clean info

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  //Submit info
  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = users.find((userx) => userx.email === user.email);

    if (existingUser) {
      return alert("Email registred");
    } else if (user.password.length <= 7) {
      return alert("password must be greater than eight digits");
    } else if (user.password === user.confirmPassword) {
      dispath(addUser({ ...user, id: uuid() }));
      alert("account Created");
      location.reload();
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="style">
        <form onSubmit={handleSubmit} className="formRegister">
          <button onClick={onClose} className="btnCloseModal">
            <CloseIcon />
          </button>

          <span>FULL NAME</span>
          <input
            className="formInput"
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            onChange={handleChange}
            required
          />

          <span>DNI</span>
          <input
            className="formInput"
            type="text"
            name="dni"
            placeholder="Enter your DNI"
            onChange={handleChange}
            required
          />
          <span>AGE</span>
          <input
            className="formInput"
            type="number"
            name="age"
            placeholder="Enter Age"
            onChange={handleChange}
            required
          />
          <span>E-MAIL</span>
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder=" Enter your E-mail address"
            onChange={handleChange}
            required
          />
          <span>PASSWORD</span>
          <input
            className="formInput"
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleChange}
            required
          />
          <span>CONFIRM PASSWORD</span>
          <input
            className="formInput"
            type="password"
            name="confirmPassword"
            placeholder="*********"
            onChange={handleChange}
            required
          />
          <span>GENDER</span>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              name="gender"
              value="female"
              control={<Radio />}
              label="Female"
              onChange={handleChange}
              required
            />
            <FormControlLabel
              name="gender"
              value="male"
              control={<Radio />}
              label="Male"
              onChange={handleChange}
              required
            />
          </RadioGroup>

          <button type="submit" className="btnCreate ">
            Create Account
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default registerModal;
