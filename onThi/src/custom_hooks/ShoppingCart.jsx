import React from 'react'

const ShoppingCart = () => {

    const initialState = {
        cart: [],
        totalItems: 0
    }

    const ACTION_TYPES = {
        ADD_ITEM: 'ADD_ITEM',
        REMOVE_ITEM: 'REMOVE_ITEM',
        INCREASE_QUANTITY: 'INCREASE_QUANTITY',
        DECREASE_QUANTITY: 'DECREASE_QUANTITY'
    }

    const cartReducer = (state, action) => {
        switch (action.type) {
            case ACTION_TYPES.ADD_ITEM: {
                const existingItem = state.cart.find((item) => item.id === action.payload.id)

                let newCart;
                if (existingItem) {
                    newCart = state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
                else newCart = [...state.cart, { ...action.payload, quantity: 1 }]
                return { ...state, newCart }
            }
            case ACTION_TYPES.REMOVE_ITEM: {
                return {
                    ...state, cart: state.cart.filter((item) => item.id !== action.payload.id)
                }

            }
            case ACTION_TYPES.INCREASE_QUANTITY: {
                return {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            }

            case ACTION_TYPES.DECREASE_QUANTITY: {
                return {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)
                        .filter((item) => item.quantity > 0)
                }
            }
            default: return state

        }
    }



    return (
        <div>

        </div>
    )
}

export default ShoppingCart