import {
    REMOVE_FROM_CART,
    ADD_TO_CART
} from '../constants/action-constants.js';

export const addToCartAction = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
        },
    }
}