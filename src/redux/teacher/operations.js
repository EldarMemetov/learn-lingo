import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchTeacher = createAsyncThunk(
  "teacher/fetchTeacher",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");

      const teachers = response.data ? Object.values(response.data) : [];

      const cleanedTeachers = teachers.map((teacher, index) => {
        if (!teacher.id) {
          teacher.id = `teacher-${index}`;
        }
        return teacher;
      });

      toast.success("Teachers data loaded successfully!");

      return cleanedTeachers;
    } catch (error) {
      toast.error(`Error loading teachers: ${error.message}`);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
