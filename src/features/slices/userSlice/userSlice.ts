import { createSlice } from "@reduxjs/toolkit";

type userSliceState = {
    user?: UserBody
}

const initialState: userSliceState = {} 

const tokensSlice = createSlice({
    name: 'tokensSlice',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        
    }
})



export default tokensSlice.reducer