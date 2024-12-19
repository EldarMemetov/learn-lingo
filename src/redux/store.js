import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacher/slice";

const store = configureStore({
  reducer: {
    teacher: teacherReducer,
  },
});
export default store;
