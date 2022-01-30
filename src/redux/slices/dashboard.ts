import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const dashboardPageSlice = createSlice({
    // State name
    name: "dashboard",

    // The initial state for the reducer
    initialState: {
        fromPage: "",
        page: "main",
        animated: false,
    },

    // An object of "case reducers". Key names will be used to generate actions.
    reducers: {
        setPage: (state, action: PayloadAction<{ page: string, fromPage?: string, animated?: boolean }>) => {
            state.page = action.payload.page
            state.animated = action.payload.animated ? action.payload.animated : false
            state.fromPage = action.payload.fromPage ? action.payload.fromPage : ""
            return state
        },
    }
})

export const selectDashboardPage = (state: RootState) => state.dashboardPage.page

export const selectPageData = (state: RootState) => state.dashboardPage
