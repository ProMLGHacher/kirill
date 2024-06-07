import { RootState } from "@/app/store/store";
import { setUser, userApi } from "@/entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserThunk = createAsyncThunk<void, void, { state: RootState }>(
    'user/getUserThunk',
    async (_, { dispatch }) => {
        try {
            const user = await userApi.getUserData()
            dispatch(setUser(user))
        } catch (error) {
            console.error('user/getUserThunk', error);
        }
    }
)