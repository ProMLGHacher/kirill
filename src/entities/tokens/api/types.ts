export type RequestLoginBody = {
    email: Email
    password: Password
}

export type RequestRegistrationBody = {
    firstName: string
    lastName: string
    email: Email
    password: Password
}

export type RegisterBody = {
    email: string
    code: string
  }

export type LoginDto = {
    accessToken: AccessToken
    refreshToken: RefreshToken
}

export type RegisterDto = {
    accessToken: AccessToken
    refreshToken: RefreshToken
}