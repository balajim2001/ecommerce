import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserListService, addUserService, editUserService, removeUserService, } from "../../../services/manage/users.service";

export const addUser = createAsyncThunk('user/addUser',
    async ({ payload, toast, handleSuccess }, { rejectWithValue }) => {
        try {
            const response = await addUserService(payload);
            if (response?.status === "SUCCESS") {
                toast?.current?.show({ severity: "info", detail: response?.message, life: 3000 });
                handleSuccess?.();
                return response?.data;
            }
            toast?.current?.show({ severity: "warn", detail: response?.message, life: 3000 });
            return rejectWithValue(response?.message);
        }
        catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    }
);

export const getUserList = createAsyncThunk('user/getUserList',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await getUserListService(payload)
            return response?.data;
        }
        catch (error) {
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    }
);

export const editUser = createAsyncThunk('user/editUser',
    async ({ payload, toast, handleSuccess }, { rejectWithValue }) => {
        try {
            const response = await editUserService(payload)
            if (response?.status === "SUCCESS") {
                handleSuccess?.();
                toast?.current?.show({ severity: "info", detail: response?.message, life: 3000 });
                return response?.data;
            }
            toast?.current?.show({ severity: "warn", detail: response?.message, life: 3000 });
            return rejectWithValue(response?.message);
        }
        catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    })

export const removeUser = createAsyncThunk('user/deleteUser',
    async ({ payload, toast }, { rejectWithValue }) => {
        try {
            const response = await removeUserService(payload)
            let severity = 'info';
            if (response?.status === "SUCCESS") {
                severity = 'success'
            } else if (response?.status === "FAILURE") {
                severity = 'warn'
            }
            toast?.current?.show({ severity: severity, detail: response?.message, life: 3000 });
            rejectWithValue(response?.message);
            return payload;
        }
        catch (error) {
            toast?.current?.show({ severity: 'error', detail: error?.response?.data?.message || 'Unknown error', life: 3000, });
            return rejectWithValue(error?.response?.data?.message || 'Unknown error');
        }
    })