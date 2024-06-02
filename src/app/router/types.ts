import { UserRole } from "@/entities/user"

export type Role = UserRole | "Guest"

export type Route = {
    path: string
    element: React.ReactElement
    roles: Role[]
}