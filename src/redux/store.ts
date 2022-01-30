import { configureStore } from '@reduxjs/toolkit'
import { dashboardPageSlice } from './slices/dashboard'
import { userPageSlice } from './slices/user'


// Configure redux store and reducers
const store = configureStore({
    reducer: {
        dashboardPage: dashboardPageSlice.reducer,
        userInfo: userPageSlice.reducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
