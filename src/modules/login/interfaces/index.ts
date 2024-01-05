export interface ILogin {
    user: IUser,
    tokens: ITokens
}

export interface IUser {
    _id: string,
    deleted_at: any,
    name: string,
    email: string,
    gender: string,
    created_at: string,
    updated_at: string
}

export interface ITokens {
    accessToken: string,
    refreshToken: string,
}