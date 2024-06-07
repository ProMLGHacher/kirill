import { userApi } from "@/entities/user";
import { ThunkConfig } from "@/shared/types/ThunkConfigType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { getUserThunk } from "../../getUser";

type Props = {
    phone: string
}

export const updateUserPhoneThunk = createAsyncThunk<void, Props, ThunkConfig>(
    'user/updateUserPhoneThunk',
    async (body, { dispatch, rejectWithValue }) => {
        try {
            if (body.phone.length !== 10 || !Number.isInteger(Number(body.phone))) {
                throw new Error('Некорректный номер телефона')
            }
            await userApi.updatePhone({ phoneNumber: body.phone })
            dispatch(getUserThunk())
        } catch (error: any) {
            console.error('user/updateUserPhoneThunk', error);
            if (isAxiosError(error)) {
                if (error.response?.status === 400) {
                    return rejectWithValue('Некорректные данные')
                }
            }
            return rejectWithValue(error.message)
        }
    }
)