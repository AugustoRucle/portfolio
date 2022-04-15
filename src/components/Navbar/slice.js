import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
    name: 'navbar',

    initialState: {
        open: false,
    },

    reducers: {
        openNavbar: (state) => {
            state.open = true;
        },

        closeNavbar: (state) => {
            state.open = false;
        },

        toggleNavbar: (state) => {
            state.open = !state.open;
        }
    }
})

export const { openNavbar, closeNavbar, toggleNavbar } = navbarSlice.actions

export default navbarSlice.reducer