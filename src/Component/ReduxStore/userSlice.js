import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null,
    isAuthentication: false,

}

export const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        userAuthSuccess: (state, action) => {
            state.isAuthentication = true
            state.user = action.payload.user
        }
    }
})

export const {userAuthSuccess} =userAuthSlice.actions

export default userAuthSlice.reducer
