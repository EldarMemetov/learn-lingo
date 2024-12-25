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
  favorites: [],
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
    toggleFavorite(state, action) {
      const teacherId = action.payload;
      if (state.favorites.includes(teacherId)) {
        state.favorites = state.favorites.filter((id) => id !== teacherId);
      } else {
        state.favorites.push(teacherId);
      }

      const userId = localStorage.getItem("userId");
      if (userId) {
        localStorage.setItem(
          `favorites_${userId}`,
          JSON.stringify(state.favorites)
        );
      }
    },
    loadFavorites(state) {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const storedFavorites = JSON.parse(
          localStorage.getItem(`favorites_${userId}`)
        );
        state.favorites = storedFavorites || [];
      } else {
        state.favorites = [];
      }
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
  toggleFavorite,
  loadFavorites,
} = teacherSlice.actions;

export default teacherSlice.reducer;
