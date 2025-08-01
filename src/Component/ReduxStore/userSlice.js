import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null,
    isAuthentication: false,
    usersAddress: [],
    userCartItems: []

}

export const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        userAuthSuccess: (state, action) => {
            state.isAuthentication = true
            state.user = action.payload.user
        },
        userLogout: (state) => {
            state.isAuthentication = false
            state.user = null
        },
        usersAddress: (state, action) => {
            state.usersAddress = action.payload.userAddress
        },
        userCart: (state, action) => {
            const isAlreadyAdd = state.userCartItems.find((item) => item.id === action.payload.userCartItem.id)
            if (isAlreadyAdd) {
                alert("Your already added that product")
                return;
                
            }else{
                alert("Item moved to cart")
            }
            state.userCartItems = [...state.userCartItems, action.payload.userCartItem]


        },
        removeProduct:(state, action) => {
            state.userCartItems = state.userCartItems.filter((item) => item.id !== action.payload.userId)
        }
    }
})

export const { userAuthSuccess, userLogout, usersAddress, userCart, removeProduct } = userAuthSlice.actions

export default userAuthSlice.reducer
