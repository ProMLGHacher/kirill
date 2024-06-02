import { RootState } from "@/app/store/store";
import { getUserData, setUser } from "@/entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserThunk = createAsyncThunk<void, void, { state: RootState }>(
    'user/getUserThunk',
    async (_, { dispatch }) => {
        try {
            const user = await getUserData()
            dispatch(setUser(user))
        } catch (error) {
            console.error('user/getUserThunk', error);
        }
    }
)