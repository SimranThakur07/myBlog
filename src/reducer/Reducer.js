import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        }
    }
})

export const { toggleSidebar } = sidebarSlice.actions
export const selectedSidebarState = (state) => state.sidebar
export default sidebarSlice.reducer