import { createSlice } from "@reduxjs/toolkit";

type TokensSliceState = {
    tokens: TokensBody
}

const initialState: TokensSliceState = {
    tokens: {
        refreshToken: localStorage.getItem('refreshToken') ?? undefined
    }
} 

const tokensSlice = createSlice({
    name: 'tokensSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        
    }
})



export default tokensSlice.reducer