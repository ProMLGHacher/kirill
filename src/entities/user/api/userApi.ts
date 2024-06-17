import { $api } from "@/shared/api/api";
import { UpdateUserData, UpdateUserEmailData, UpdateUserPasswordData, UpdateUserPhoneData, UserDto } from "./types";
import { User } from "../model/types";
import { mapUser } from "../lib/mapUser";

export const userApi = {
    getUserData: async (): Promise<User> => {
        const userDto = await $api.get<UserDto>('/api/me')
        return mapUser(userDto.data)
    },
    updateUserData: async (body: UpdateUserData): Promise<User> => {
        const userDto = await $api.patch<UserDto>('/api/me', body)
        return mapUser(userDto.data)
    },
    updateEmail: async (body: UpdateUserEmailData): Promise<User> => {
        const userDto = await $api.patch<UserDto>('/api/me/email', body)
        return mapUser(userDto.data)
    },
    updatePhone: async (body: UpdateUserPhoneData): Promise<User> => {
        const userDto = await $api.patch<UserDto>('/api/me/phone', body)
        return mapUser(userDto.data)
    },
    verify: async (body: UpdateUserPhoneData): Promise<User> => {
        const userDto = await $api.patch<UserDto>('/api/me/verify', body)
        return mapUser(userDto.data)
    },
    changePassword: async (body: UpdateUserPasswordData): Promise<number> => {
        const responce = await $api.patch<void>('/api/change-password', {
            password: body.oldPassword,
            newPassword: body.newPassword
        })
        return responce.status
    }
}

