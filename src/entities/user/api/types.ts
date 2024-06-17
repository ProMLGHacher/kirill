
export type UserRoleDto = "User" | "Admin" | undefined

export type UserDto = {
    email: string
    firstName: string
    lastName: string
    phone: string
    role: UserRoleDto
    urlImage: string
}

export type UpdateUserData = {
    firstName: string
    lastName: string
}

export type UpdateUserEmailData = {
    email: string
}

export type UpdateUserPhoneData = {
    phoneNumber: string
}

export type VerifyUserData = {
    identifier: string,
    code: string,
    method: Email
}

export type UpdateUserPasswordData = {
    oldPassword: string
    newPassword: string
}

