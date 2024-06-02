import { RootState } from "@/app/store/store";
import { setTokensData, tokensApi } from "@/entities/tokens";
import { getUserThunk } from "@/features/user/getUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Props = {
    firstName: string,
    lastName: string,
    phone: Phone,
    email: Email,
    password: Password
}

export const registerThunk = createAsyncThunk<void, Props, { state: RootState }>(
    'auth/registerThunk',
    async (body, { dispatch }) => {
        try {
            const tokens = await tokensApi.register(body)
            dispatch(setTokensData(tokens))
            dispatch(getUserThunk())
        } catch (error) {
            console.error(error);
        }
    }
)