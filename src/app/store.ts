import { AnyAction, combineReducers } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from "./app.reducer"


const rootReducer = combineReducers({
	app: appReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})


export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>


