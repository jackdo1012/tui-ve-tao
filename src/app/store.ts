import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import componentClassReducer from "../slice/componentClassSlice"
import darkLightReducer from "../slice/darkLightSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        componentClass: componentClassReducer,
        darkLight: darkLightReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
