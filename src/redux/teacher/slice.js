import { createSlice } from "@reduxjs/toolkit";
import { fetchTeacher } from "./operations";

const initialState = {
  teacher: [],
  isLoading: false,
  error: null,
  filters: {
    language: "",
    level: "",
    priceRange: null,
  },
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setLanguageFilter(state, action) {
      state.filters.language = action.payload;
    },

    setLevelFilter(state, action) {
      state.filters.level = action.payload;
    },

    setPriceFilter(state, action) {
      state.filters.priceRange = action.payload;
    },

    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacher.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teacher = action.payload || [];
      })
      .addCase(fetchTeacher.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      });
  },
});

export const {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
  resetFilters,
} = teacherSlice.actions;

export default teacherSlice.reducer;
