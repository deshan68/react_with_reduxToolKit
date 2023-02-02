import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "", password: "" } };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  }, // is a funcation that take two  argumnet. that are action and previuse state of application. then based on that it will return a new state
});
