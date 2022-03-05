import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import componentClassReducer from "../slice/componentClassSlice";
import darkLightReducer from "../slice/darkLightSlice";

export const store = configureStore({
    reducer: {
        componentClass: componentClassReducer,
        darkLight: darkLightReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
