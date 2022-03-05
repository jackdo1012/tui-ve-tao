import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ComponentClass {
    dark: boolean
}

const initialState: ComponentClass = {
    dark: localStorage.getItem("dark") === "true" ? true : false,
}

export const darkLightSlice = createSlice({
    name: "darkLight",
    initialState: initialState,
    reducers: {
        changeMode: (state, action: PayloadAction<boolean>) => {
            state.dark = action.payload
            localStorage.setItem("dark", action.payload.toString())
        },
    },
})

export const { changeMode } = darkLightSlice.actions
export default darkLightSlice.reducer
