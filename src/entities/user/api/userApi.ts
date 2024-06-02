import { $api } from "@/shared/api/api";
import { UserDto } from "./types";
import { User } from "../model/types";
import { mapUser } from "../lib/mapUser";

export const getUserData = async (): Promise<User> => {
    const userDto = await $api.get<UserDto>('/api/me')
    return mapUser(userDto.data)
}