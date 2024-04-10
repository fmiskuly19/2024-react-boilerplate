import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthSliceProps {
    isLoggedIn: boolean,
}

// Define the initial state using that type
const initialState: AuthSliceProps = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = initialState.isLoggedIn
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
    },
})

export const { setIsLoggedIn, logoutUser } = authSlice.actions

export default authSlice.reducer