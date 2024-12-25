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

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      return await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const token = await user.getIdToken();
            resolve({
              email: user.email,
              uid: user.uid,
              token,
            });
          } else {
            reject("User is not authenticated");
          }
        });
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
