
export type UserRoleDto = "User" | "Admin" | undefined

export type UserDto = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    role: UserRoleDto,
    urlImage: string
}