import { createSlice } from "@reduxjs/toolkit";
import { fetchTeacher } from "./operations";

const initialState = {
  teacher: [],
  isLoading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacher.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(fetchTeacher.fulfilled, (state, action) => {
        (state.isLoading = false), (state.teacher = action.payload || []);
      })
      .addCase(fetchTeacher.rejected, (state, actions) => {
        (state.isLoading = false), (state.error = actions.payload);
      });
  },
});

export default teacherSlice.reducer;
