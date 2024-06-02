import { UserDto } from "../api/types"
import { User } from "../model/types"
import { mapUserRole } from "./mapUserRole"


export const mapUser = (dto: UserDto): User => {
    return {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        role: mapUserRole(dto.role),
        urlImage: dto.urlImage
    }
}