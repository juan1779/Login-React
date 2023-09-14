import { createSlice } from "@reduxjs/toolkit";

const users =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const initialState = {
  users,
};

const setItemFunc = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;

      state.users.push({
        id: newUser.id,

        name: newUser.name,
        dni: newUser.dni,
        age: newUser.age,
        email: newUser.email,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword,
        gender: newUser.gender,
      });

      setItemFunc(state.users.map((user) => user));
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
