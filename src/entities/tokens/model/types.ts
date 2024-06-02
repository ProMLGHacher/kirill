export type AccessToken = Brand<string, 'AccessToken'>
export type RefreshToken = Brand<string, 'RefreshToken'>

export type TokensBody = {
    acsessToken: AccessToken,
    refreshToken: RefreshToken
}