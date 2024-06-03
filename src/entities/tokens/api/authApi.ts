import { $api } from "@/shared/api/api";
import { LoginDto, RegisterDto, RequestLoginBody, RequestRegisterBody } from "./types";
import { toTokensBody } from "../lib/toTokensBody";
import { TokensBody } from "../model/types";

export const tokensApi = {
    login: async (body: RequestLoginBody): Promise<TokensBody> => {
        const responce = $api.post<LoginDto>('/api/signin', body)
        return toTokensBody((await responce).data)
    },
    register: async (body: RequestRegisterBody): Promise<TokensBody> => {
        const responce = await $api.post<RegisterDto>('/api/apply-registration', body)
        return toTokensBody(responce.data)
    }
}