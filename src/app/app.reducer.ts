import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { appApi } from "../common/api/common.api"
import { createAppAsyncThunk } from "../common/utils/create-app-async-thunk"
import { ProfileDataAction, ProfileType } from "../common/types/types"

type initialStateType = {
    isLoading: boolean
    error: string | null
    profile: ProfileType
    isSuccessSubmitProfile: null | boolean
}
const initialState: initialStateType = {
    isLoading: false,
    error: null,
    isSuccessSubmitProfile: null as null | boolean,
    profile: {
        phone: "",
        email: "",
        nickname: "",
        name: "",
        surname: "",
        sex: "",
        advantages: [] as string[],
        checkbox: [] as number[],
        radio: null as null | number,
        about: "",
    },
}

const fetchProfile = createAppAsyncThunk<void, void>("app/fetchProfile", async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, getState } = thunkAPI
    const profile = getState().app.profile
    try {
        const res = await appApi.sendProfile(profile)
        if (res.data.status === "success") {
            dispatch(appActions.setStatus({ status: true }))
        } else {
            dispatch(appActions.setStatus({ status: false }))
            return rejectWithValue(null)
        }
    } catch (e: any) {
        dispatch(appActions.setStatus({ status: false }))
        return rejectWithValue(e.message)
    }
})

const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        setStatus: (state, action: PayloadAction<{ status: boolean | null }>) => {
            state.isSuccessSubmitProfile = action.payload.status
        },
        setProfileData: (state, action: PayloadAction<ProfileDataAction>) => {
            state.profile = { ...state.profile, ...action.payload }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.fulfilled, (state, action) => {})
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/pending")
                },
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/rejected")
                },
                (state, action) => {
                    const { payload, error } = action

                    state.error = payload ? payload : "Some error occurred"
                    state.isLoading = false
                }
            )
            .addMatcher(
                (action) => {
                    return action.type.endsWith("/fulfilled")
                },
                (state) => {
                    state.isLoading = false
                }
            )
    },
})
export const appThunks = { fetchProfile }
export const appReducer = slice.reducer
export const appActions = slice.actions
