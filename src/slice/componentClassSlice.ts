import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ComponentClass {
    images: string
    navbar: string
    about: string
}

const initialState: ComponentClass = {
    images: "images",
    navbar: "navbar",
    about: "about",
}

export const componentClassSlice = createSlice({
    name: "componentClass",
    initialState: initialState,
    reducers: {
        changeImagesClass: (state, action: PayloadAction<string>) => {
            state.images = action.payload
        },
        changeNavbarClass: (state, action: PayloadAction<string>) => {
            state.navbar = action.payload
        },
        changeAboutClass: (state, action: PayloadAction<string>) => {
            state.about = action.payload
        },
    },
})

export const { changeImagesClass, changeNavbarClass, changeAboutClass } =
    componentClassSlice.actions
export default componentClassSlice.reducer
