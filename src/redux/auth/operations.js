import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebaseConfig/firebaseConfig";

const auth = getAuth(app);

// Регистрация
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        },
        token: await userCredential.user.getIdToken(),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code || error.message);
    }
  }
);

// Вход
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        },
        token: await userCredential.user.getIdToken(),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code || error.message);
    }
  }
);

// Выход
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code || error.message);
    }
  }
);

// Обновление пользователя
export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const auth = getAuth(app);
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve({
              email: user.email,
              uid: user.uid,
            });
          } else {
            reject(thunkAPI.rejectWithValue("User is not authenticated"));
          }
        });
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code || error.message);
    }
  }
);
