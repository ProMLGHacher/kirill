import { RootState } from "@/app/store/store";
import { setUser, setUserLoading, userApi } from "@/entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const initStateThunk = createAsyncThunk<void, void, { state: RootState }>(
    'initState/initStateThunk',
    async (_, { dispatch }) => {
        try {
            dispatch(setUserLoading(true))
            const user = await userApi.getUserData()
            dispatch(setUser(user))
            dispatch(setUserLoading(false))
        } catch (error) {
            dispatch(setUserLoading(false))
            console.error('initState/initStateThunk', error);
        }
    }
)