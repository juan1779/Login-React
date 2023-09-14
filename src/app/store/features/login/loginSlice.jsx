import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem("userLogin")),

  email: JSON.parse(localStorage.getItem("userLoginEmail")),
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      localStorage.setItem(
        "userLogin",
        JSON.stringify((state.userLogin = true))
      );
      localStorage.setItem("userLoginEmail", JSON.stringify(state.email));
    },

    logout: (state) => {
      state.email = "";
      localStorage.setItem(
        "userLogin",
        JSON.stringify((state.userLogin = false))
      );
      localStorage.setItem("userLoginEmail", JSON.stringify(state.email));
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
