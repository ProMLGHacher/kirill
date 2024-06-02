export type UserId = Brand<Id, 'UserId'>

export type UserRole = "User" | "Admin"

export type User = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    role: UserRole,
    urlImage: string
}