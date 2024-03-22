import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userData: null,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
            state.userData = null
            state.error = null
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.userData = action.payload
            state.error = null
        },
        signInFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer 