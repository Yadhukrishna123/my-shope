import React, { createContext, useReducer } from 'react'

const DispatchContext = createContext()
const StateContext = createContext()

const Appprovider = (props) => {

    const initialState = {
        userCart: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "add_to_cart":
                const isAlreadyAdd = state.userCart.find(item => item.id === action.payload.id)
                if (isAlreadyAdd) {
                    alert("Already added")
                    return state
                }
                alert("Item moved to cart")

                return {
                    ...state,
                    userCart: [...state.userCart, action.payload]
                }
            case "remove_product":
                const removeItem = state.userCart.filter((item => item.id !== action.payload.id))


                return {
                    ...state,
                    userCart: removeItem
                }

            default:
                return state

        }
    }



    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("this is state", state);


    return (
        <DispatchContext.Provider value={{ dispatch }}>
            <StateContext.Provider value={{ state }}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export { Appprovider, DispatchContext, StateContext } 