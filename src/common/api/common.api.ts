import axios from "axios"
import { ProfileType, ResponseDataType } from "../types/types"

const instance = axios.create({
    baseURL: "https://api.sbercloud.ru/content/v1/bootcamp",
})

export const appApi = {
    sendProfile(data: ProfileType) {
        return instance.post<ResponseDataType>("/frontend", data)
    },
}
