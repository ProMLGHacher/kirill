export type RequestLoginBody = {
    email: Email
    password: Password
}

export type RequestRegisterBody = {
    firstName: string,
    lastName: string,
    phone: Phone,
    email: Email,
    password: Password
}

export type LoginDto = {
    accessToken: AccessToken,
    refreshToken: RefreshToken
}

export type RegisterDto = {
    accessToken: AccessToken,
    refreshToken: RefreshToken
}