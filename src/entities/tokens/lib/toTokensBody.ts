import { LoginDto, RegisterDto } from "../api/types";
import { TokensBody } from "../model/types";

export const toTokensBody = (dto: LoginDto | RegisterDto): TokensBody => {
    return {
        accessToken: dto.accessToken,
        refreshToken: dto.refreshToken
    }
}