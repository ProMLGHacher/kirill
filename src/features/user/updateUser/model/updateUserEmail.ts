import { userApi } from "@/entities/user";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { getUserThunk } from "../../getUser";

type Props = {
    email: string
}

export const updateUserEmailThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'user/updateUserEmailThunk',
    async (body, { dispatch, rejectWithValue }) => {
        try {
            if (!body.email || !body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                throw new Error('Некорректный email')
            }
            await userApi.updateEmail({ email: body.email })
            dispatch(getUserThunk())
        } catch (error: any) {
            console.error('user/updateUserEmailThunk', error);
            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Некорректные данные')
                }
            }
            return rejectWithValue(error.message)
        }
    }
)