import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    error: null as null | string,
    profile: {
        phone: "",
        email: "",
        nickname: "",
        name: "",
        surname: "",
        sex: "" as "man" | "woman",
        advantages: [] as string[],
        checkbox: [] as number[],
        radio: [] as number[],
        about: "",
    },
}
export type AppInitialStateType = typeof initialState

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        setProfileData: (state, action: PayloadAction<ProfileData>) => {
            console.log("2")
            state.profile = { ...state.profile, ...action.payload }
        },
    },
})
type ProfileData = {
    phone?: string
    email?: string
    nickname?: string
    name?: string
    surname?: string
    sex?: "man" | "woman"
    advantages?: string[]
    checkbox?: number[]
    radio?: number[]
    about?: string
}
export const appReducer = slice.reducer
export const appActions = slice.actions
