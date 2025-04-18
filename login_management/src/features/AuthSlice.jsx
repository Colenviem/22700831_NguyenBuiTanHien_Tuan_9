import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        setUserInfo: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        }
    }
})

export const { login, logout, setUserInfo } = AuthSlice.actions;
export default AuthSlice.reducer;
