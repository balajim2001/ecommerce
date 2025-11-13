import { authLoginService, authLogoutService, checkUserStatusApi, refreshTokenService } from "../../../services/auth/auth.service"
import { createAsyncThunk } from '@reduxjs/toolkit';


export const authLogin = createAsyncThunk('auth/login',
    async ({ credentials, toast, resetIdleTimer }, { rejectWithValue }) => {
        try {
            const response = await authLoginService(credentials);
            if (response?.status === 'SUCCESS') {
                toast?.current?.show({ severity: 'info', detail: response?.message, life: 3000, });
                resetIdleTimer();
                const now = Date.now();
                let tokenData = {
                    UserName: response?.data?.UserName,
                    UserRole: response?.data?.UserRole,
                    expiresAt: now + (response?.data?.expiryTime * 60 * 1000),
                    status: response?.status,
                }
                return tokenData;
            } else if (response?.status === 'FAILURE') {
                toast?.current?.show({ severity: 'warn', detail: response?.message, life: 3000, });
                rejectWithValue(response?.message);
                return response?.data;
            }
        } catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    }
);

export const refreshTokenAction = createAsyncThunk('auth/refreshToken',
    async ({ toast, resetIdleTimer }, { rejectWithValue }) => {
        try {
            const response = await refreshTokenService();
            if (response?.status === 'SUCCESS') {
                toast?.current?.show({ severity: 'info', detail: "Session Refreshed", life: 3000, });
                resetIdleTimer();
                const now = Date.now();
                let tokenData = {
                    UserName: response?.data?.UserName,
                    UserRole: response?.data?.UserRole,
                    expiresAt: now + (response?.data?.expiryTime * 60 * 1000),
                    role: response?.data?.UserRole,
                    status: response?.status,
                }
                return tokenData;
            } else if (response?.status === 'FAILURE') {
                toast?.current?.show({ severity: 'warn', detail: response?.message, life: 3000, });
                return rejectWithValue(response?.message);
            } else {
                toast?.current?.show({ severity: 'warn', detail: response?.message, life: 3000, });
                return rejectWithValue(response?.message);
            }
        } catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    }
);

export const authLogout = createAsyncThunk('auth/logout',
    async ({ toast, navigate }, { rejectWithValue }) => {
        try {
            const response = await authLogoutService();
            if (response?.status === 'SUCCESS') {
                toast?.current?.show({ severity: 'info', detail: response?.message, life: 3000, });
                return response?.data;
            } else if (response?.status === 'FAILURE') {
                toast?.current?.show({ severity: 'warn', detail: response?.message, life: 3000, });
                return rejectWithValue(response?.message);
            }
        } catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        } finally {
            navigate('/');
        }
    }
);

export const checkUserStatus = createAsyncThunk('auth/checkUserStatus',
    async ({ navigate }, { rejectWithValue }) => {
        try {
            const response = await checkUserStatusApi();
            if (response?.status === 'SUCCESS') {
                const role = response?.data?.role;
                if (role === "ROLE_AGENT") {
                    navigate("/vkycAgentDashboard");
                } else if (role === "ROLE_ADMIN") {
                    navigate("/vkycAdminDashboard");
                } else {
                    navigate("/");
                }
                return response?.data;
            } else if (response?.status === 'FAILURE') {
                return rejectWithValue(response?.message);
            }
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    }
);