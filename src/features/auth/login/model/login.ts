import { RootState } from "@/app/store/store";
import { setTokensData, tokensApi } from "@/entities/tokens";
import { getUserThunk } from "@/features/user/getUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Props = {
    email: Email
    password: Password
}

export const loginThunk = createAsyncThunk<void, Props, { state: RootState }>(
    'auth/loginThunk',
    async (body, { dispatch }) => {
        try {
            const tokens = await tokensApi.login(body)
            dispatch(setTokensData(tokens))
            dispatch(getUserThunk())
        } catch (error) {
            console.error(error);
        }
    }
)