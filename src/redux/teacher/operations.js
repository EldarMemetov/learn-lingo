import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchTeacher = createAsyncThunk(
  "teacher/fetchTeacher",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/teachers.json");

      // Получаем массив учителей
      const teachers = response.data ? Object.values(response.data) : [];

      // Проверка на наличие уникальных id у учителей
      const cleanedTeachers = teachers.map((teacher, index) => {
        // Если у учителя нет id, создаем уникальный ключ на основе индекса
        if (!teacher.id) {
          teacher.id = `teacher-${index}`;
        }
        return teacher;
      });

      // Показываем уведомление об успешной загрузке
      toast.success("Teachers data loaded successfully!");

      return cleanedTeachers;
    } catch (error) {
      // Показ уведомления об ошибке
      toast.error(`Error loading teachers: ${error.message}`);

      // Отправка ошибки в state
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
