import { tokensSlice } from "@/entities/tokens";
import { userSlice } from "@/entities/user";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tokensSlice: tokensSlice.reducer,
        userSlice: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store