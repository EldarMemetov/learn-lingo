export const selectTeacher = (state) => {
  return state.teacher.teacher || [];
};

export const selectIsLoading = (state) => state.teacher.isLoading;
export const selectError = (state) => state.teacher.error;
