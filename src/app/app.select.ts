import { AppRootStateType } from "./store"

export const selectAbout = (state: AppRootStateType) => state.app.profile.about
export const selectAdvantages = (state: AppRootStateType) => state.app.profile.advantages
export const selectSex = (state: AppRootStateType) => state.app.profile.sex
export const selectName = (state: AppRootStateType) => state.app.profile.name
export const selectEmail = (state: AppRootStateType) => state.app.profile.email
export const selectCheckbox = (state: AppRootStateType) => state.app.profile.checkbox
export const selectNickName = (state: AppRootStateType) => state.app.profile.nickname
export const selectPhone = (state: AppRootStateType) => state.app.profile.phone
export const selectRadio = (state: AppRootStateType) => state.app.profile.radio
export const selectSurname = (state: AppRootStateType) => state.app.profile.surname
export const selectAppError = (state: AppRootStateType) => state.app.error
export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading
export const selectIsSuccessSubmitProfile = (state: AppRootStateType) => state.app.isSuccessSubmitProfile
