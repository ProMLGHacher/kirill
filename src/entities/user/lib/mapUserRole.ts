import { UserRoleDto } from "../api/types";
import { UserRole } from "../model/types";

export const mapUserRole = (dto: UserRoleDto): UserRole => {
    return dto ? dto : 'User'
}