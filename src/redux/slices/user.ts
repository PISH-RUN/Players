import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export const userPageSlice = createSlice({
    // State name
    name: "userPage",

    // The initial state for the reducer
    initialState: {},

    // An object of "case reducers". Key names will be used to generate actions.
    reducers: {
        setUserInfo: (state, action: PayloadAction<{email: string,password: string,rule:string}>) => {
            state = action.payload
            return state
        }
        
    }
})

export const selectUserInfo = (state: RootState) => state.userInfo
