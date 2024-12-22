import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, get } from "firebase/database";
import { toast } from "react-hot-toast";
import app from "../../firebaseConfig/firebaseConfig";

export const fetchTeacher = createAsyncThunk(
  "teacher/fetchTeacher",
  async (_, thunkAPI) => {
    try {
      const db = getDatabase(app);
      const teachersRef = ref(db, "teachers");
      const snapshot = await get(teachersRef);

      if (!snapshot.exists()) {
        throw new Error("No data found");
      }

      const teachers = snapshot.val() ? Object.values(snapshot.val()) : [];

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
