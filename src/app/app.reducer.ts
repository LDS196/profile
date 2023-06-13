import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {
  error: null as null | string,
  profile: {
    phone: "",
    email: "",
    nickname: "",
    name: "",
    surname: "",
    sex: "",
    advantages: [] as string[],
    checkbox: [] as string[],
    radio: [] as string[],
    about: ""
  }
}
export type AppInitialStateType = typeof initialState

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  }
})

export const appReducer = slice.reducer
export const appActions = slice.actions



