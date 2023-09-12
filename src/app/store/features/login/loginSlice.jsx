import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem("userLogin")),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    login: (state) => {
      localStorage.setItem(
        "userLogin",
        JSON.stringify((state.userLogin = true))
      );
    },

    logout: (state) => {
      localStorage.setItem(
        "userLogin",
        JSON.stringify((state.userLogin = false))
      );
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
