import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth_store/reducer/auth.reducer'
import userReducer from './manage_store/reducer/user.reducer'

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        userReducer: userReducer,
    },
})
