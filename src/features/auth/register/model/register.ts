import { RootState } from "@/app/store/store";
import { setTokensData, tokensApi } from "@/entities/tokens";
import { getUserThunk } from "@/features/user/getUser";
import { isResponceError } from "@/shared/types/ResponceError";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";

type Props = {
    firstName: string
    lastName: string
    email: Email
    password: Password
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
                    return rejectWithValue('Данные введены не корректно')
                }
            }

            return rejectWithValue('Чтото пошло не так')
        }
    }
)