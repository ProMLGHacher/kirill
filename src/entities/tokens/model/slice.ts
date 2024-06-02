import { createSlice } from "@reduxjs/toolkit";
import { TokensBody } from "./types";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { RootState } from "@/app/store/store";

type TokensSliceState =
    | {
        accessToken?: AccessToken
        refreshToken: RefreshToken
        isAuthorized: true
    }
    | {
        isAuthorized: false
        accessToken?: AccessToken
        refreshToken?: RefreshToken
    }

const initialState: TokensSliceState = (() => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
        return {
            refreshToken: refreshToken as RefreshToken,
            isAuthorized: true
        }
    } else {
        return {
            isAuthorized: false
        }
    }
})()

export const tokensSlice = createSlice({
    name: 'tokensSlice',
    initialState,
    reducers: {
        clearTokensData: (state) => {
            localStorage.removeItem('refreshToken')
            state.accessToken = undefined
            state.refreshToken = undefined
            state.isAuthorized = false
        },
        setTokensData: (state, action: PayloadAction<TokensBody>) => {
            state.accessToken = action.payload.acsessToken
            state.refreshToken = action.payload.refreshToken
            state.isAuthorized = true
        }
    }
})


export const { clearTokensData, setTokensData } = tokensSlice.actions
export const selectIsAuthorized = (state: RootState) => state.tokensSlice.isAuthorized