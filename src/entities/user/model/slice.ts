import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./types";
import { RootState } from "@/app/store/store";

type UserSliceState = {
    user?: User
}

const initialState: UserSliceState = {
    
} 

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})


export const selectUser = (state: RootState) => state.userSlice.user
export const selectUserRole = (state: RootState) => state.userSlice.user?.role
export const { setUser } = userSlice.actions