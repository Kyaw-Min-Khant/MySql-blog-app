import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    
  },
});
export default UserSlice.reducer;
