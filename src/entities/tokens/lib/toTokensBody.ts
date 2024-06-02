import { LoginDto, RegisterDto } from "../api/types";
import { TokensBody } from "../model/types";

export const toTokensBody = (dto: LoginDto | RegisterDto): TokensBody => {
    return {
        acsessToken: dto.accessToken,
        refreshToken: dto.refreshToken
    }
}