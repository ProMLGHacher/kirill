import { tokensApi } from "@/entities/tokens";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

type Props = {
    firstName: string
    lastName: string
    email: Email
    password: Password
}

export const requestRegistrationThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'auth/requestRegistrationThunk',
    async (body, { rejectWithValue }) => {
        try {
            await tokensApi.requestRegistration(body)
        } catch (error) {
            console.error('auth/requestRegistrationThunk', error);

            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Данные введены не корректно')
                }
                if (error.response?.status === 409) {
                    return rejectWithValue('Email уже существует')
                }
            }

            return rejectWithValue('Чтото пошло не так')
        }
    }
)