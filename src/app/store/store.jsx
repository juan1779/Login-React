import { configureStore } from "@reduxjs/toolkit";

import user from "./features/user/userSlice";
import login from "./features/login/loginSlice";

export const store = configureStore({
  reducer: {
    users: user,
    login: login,
  },
});
