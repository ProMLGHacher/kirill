import { userApi } from "@/entities/user";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { getUserThunk } from "../../getUser";

type Props = {
    firstName: string
    lastName: string
}

export const updateUserThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'user/updateUserThunk',
    async (body, { dispatch, rejectWithValue }) => {
        try {
            await userApi.updateUserData(body)
            dispatch(getUserThunk())
        } catch (error) {
            console.error('user/updateUserThunk', error);
            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Некорректные данные')
                }
            }
        }
    }
)