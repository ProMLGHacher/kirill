import { setTokensData, tokensApi } from "@/entities/tokens";
import { getUserThunk } from "@/features/user/getUser";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

type Props = {
    email: Email
    code: string
}

export const registerThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'auth/registerThunk',
    async (body, { dispatch, rejectWithValue }) => {
        try {
            const tokens = await tokensApi.register(body)
            dispatch(setTokensData(tokens))
            dispatch(getUserThunk())
        } catch (error) {
            console.error('auth/registerThunk', error);

            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Неверный метод верификации, ошибочный код или время жизни истекло')
                }
                if (error.response?.status === 404) {
                    return rejectWithValue('Not Found')
                }
                if (error.response?.status === 409) {
                    return rejectWithValue('Почта уже существует')
                }
            }

            return rejectWithValue('Чтото пошло не так')
        }
    }
)