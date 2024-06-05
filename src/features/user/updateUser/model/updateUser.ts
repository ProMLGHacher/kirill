import { setUser, userApi } from "@/entities/user";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Props = {
    firstName: string
    lastName: string
}

export const updateUserThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'user/updateUserThunk',
    async (body, { dispatch }) => {
        try {
            const user = await userApi.updateUserData(body)
            dispatch(setUser(user))
        } catch (error) {
            console.error('user/updateUserThunk', error);
        }
    }
)