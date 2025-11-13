import { createSlice, current } from "@reduxjs/toolkit";
import { addUser, editUser, getUserList, removeUser } from "../action/user.action";

const initialState = {
    loading: false,
    userList: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList?.fulfilled, (state, action) => {
            state.userList = action?.payload;
            state.loading = false;
        }).addCase(addUser?.fulfilled, (state, action) => {
            state?.userList?.push(action?.payload);
            state.loading = false;
        }).addCase(editUser.fulfilled, (state, action) => {
            const { userId, ...rest } = action.payload
            let currentUserList = current(state?.userList);
            const updatedUserList = currentUserList?.map((user) => (user?.userId === userId ? { ...user, ...action?.payload } : user))
            state.userList = updatedUserList;
            state.loading = false;
        }).addCase(removeUser.fulfilled, (state, action) => {
            const { userId, ...rest } = action.payload;
            let currentUserLit = current(state?.userList);
            const updatedUserList = currentUserLit?.filter(user => (user?.userId !== userId))
            state.userList = updatedUserList;
            state.loading = false;
        })
    }
})

export default userSlice.reducer;