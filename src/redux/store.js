import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import teacherReducer from "./teacher/slice";

const persistedAuthReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["user"],
  },
  authReducer
);

const persistedTeacherReducer = persistReducer(
  {
    key: "teacher-favorites",
    storage,
    whitelist: ["favorites"],
  },
  teacherReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    teacher: persistedTeacherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
