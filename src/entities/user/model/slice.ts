import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./types";
import { RootState } from "@/app/store/store";

type UserSliceState = {
    isLoading: boolean
    user?: User
}

const initialState: UserSliceState = {
    isLoading: true
} 

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearUserData: (state) => {
            state.user = undefined
        }
    }
})


export const selectUser = (state: RootState) => state.userSlice.user
export const selectUserRole = (state: RootState) => state.userSlice.user?.role
export const selectUserLoading = (state: RootState) => state.userSlice.isLoading
export const { setUser, clearUserData, setLoading } = userSlice.actions