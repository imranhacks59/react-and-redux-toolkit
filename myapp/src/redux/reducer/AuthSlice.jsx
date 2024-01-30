import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance/axiosInstance";


const initialState = {
    isAuthenticated : false,
    isLoading : false,
    isSuccess : false,
    isError : false
}

export const login = createAsyncThunk('login', async (params, thunkApi) => {
    console.log('params :', params);
    try {
      const response = await axiosInstance.post('/api/login/', params);
      console.log('response:', response);
      return response.data;
    } catch (error) {
      console.log('error:', error);
      return thunkApi.rejectWithValue(error);
    }
  });
  export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
    try {
        // Perform any necessary logout API calls or cleanup here
        // For example, you might want to call an API to invalidate the user's session
        // or clear any local storage/session storage items related to authentication.

        // Simulating a logout by setting isAuthenticated to false
        return true;
    } catch (error) {
        console.log('error:', error);
        return thunkApi.rejectWithValue(error);
    }
});
  const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
      // login cases
      builder.addCase(login.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated =true
      });
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
      builder.addCase(logout.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isAuthenticated =false
      });
      builder.addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
    },
  });  

  export default AuthSlice.reducer;