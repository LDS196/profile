import axios from "axios"

export const instance = axios.create({
    baseURL: "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
})
