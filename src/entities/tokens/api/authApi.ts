import { $api } from "@/shared/api/api";
import { LoginDto, RegisterBody, RegisterDto, RequestLoginBody, RequestRegistrationBody } from "./types";
import { toTokensBody } from "../lib/toTokensBody";
import { TokensBody } from "../model/types";

export const tokensApi = {
    login: async (body: RequestLoginBody): Promise<TokensBody> => {
        const responce = await $api.post<LoginDto>('/api/signin', body)
        return toTokensBody(responce.data)
    },
    requestRegistration: async (body: RequestRegistrationBody): Promise<void> => {
        await $api.post('/api/apply-registration', body)
    },
    register: async (body: RegisterBody): Promise<TokensBody> => {
        const responce = await $api.post<RegisterDto>('/api/signup', {
            "identifier": body.email,
            "code": body.code,
            "method": "Email"
        })
        return toTokensBody(responce.data)
    }
}