import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authLogout, refreshTokenAction } from '../action/auth.action';

const initialState = {
    isAuthenticated: false,
    user: null,
    tokens: null,
    loading: true,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authLogin?.pending, (state) => { state.loading = true; })
            .addCase(authLogin?.fulfilled, (state, action) => {
                if (action?.payload) {
                    const { status, ...rest } = action?.payload;
                    state.isAuthenticated = status === "SUCCESS" ? true : false;
                    state.user = { id: '1', name: 'Demo User', ...action.payload };
                    state.tokens = rest;
                }
                state.loading = false;
            }).addCase(refreshTokenAction?.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = { id: '1', name: 'Demo User', ...action.payload };
                state.tokens = action.payload;
                state.loading = false;
            }).addCase(refreshTokenAction?.rejected, (state) => {
                state.loading = false;
            }).addCase(authLogout?.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.tokens = null;
                state.loading = false;
                state.error = null;
            })
    },
});

export default authSlice.reducer;
