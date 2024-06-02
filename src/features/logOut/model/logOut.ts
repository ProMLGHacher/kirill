import { RootState } from "@/app/store/store";
import { clearTokensData } from "@/entities/tokens";
import { clearUserData } from "@/entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logOutThunk = createAsyncThunk<void, void, { state: RootState }>(
    'logOutThunk',
    async (_, { dispatch }) => {
        dispatch(clearTokensData())
        dispatch(clearUserData())
    }
)