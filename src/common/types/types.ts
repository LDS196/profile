export type ProfileType = {
    phone: string
    email: string
    nickname: string
    name: string
    surname: string
    sex: string
    advantages: string[]
    checkbox: number[]
    radio: null | number
    about: string
}
export type ResponseDataType = {
    status: string
    message: string
}
export type ProfileDataAction = {
    phone?: string
    email?: string
    nickname?: string
    name?: string
    surname?: string
    sex?: string
    advantages?: string[]
    checkbox?: number[]
    radio?: number
    about?: string
}
