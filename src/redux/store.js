import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import teacherReducer from "./teacher/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    teacher: teacherReducer,
  },
});

export default store;
