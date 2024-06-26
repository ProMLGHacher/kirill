import { RootState } from "@/app/store/store";
import { setTokensData, tokensApi } from "@/entities/tokens";
import { getUserThunk } from "@/features/user/getUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

type Props = {
    email: Email
    password: Password
}

export const loginThunk = createAsyncThunk<void, Props, { state: RootState }>(
    'auth/loginThunk',
    async (body, { dispatch, rejectWithValue }) => {
        try {
            const tokens = await tokensApi.login(body)
            dispatch(setTokensData(tokens))
            dispatch(getUserThunk())
        } catch (error) {
            console.error('auth/loginThunk', error);

            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Пароли не совпадают')
                }
                if (error.response?.status === 404) {
                    return rejectWithValue('Email не зарегистрирован')
                }
            }

            return rejectWithValue('Чтото пошло не так')
        }
    }
)