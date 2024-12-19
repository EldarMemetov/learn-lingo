export const selectTeacher = (state) => {
  console.log("Teachers in Redux state:", state.teacher.teacher);
  return state.teacher.teacher || [];
};

export const selectIsLoading = (state) => state.teacher.isLoading;
export const selectError = (state) => state.teacher.error;
