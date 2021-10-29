// contains functions which return TYPE and PAYLOAD

import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

//add to cart action
export const addToCart = (productId) => {
    return {
        type: ADD_TO_CART,
        productId
    }
}

// remove from cart action
export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        productId
    }
}
