export const selectIsAuthenticated = (state) => Boolean(state.auth.token);
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectAuthError = (state) => state.auth.error;
