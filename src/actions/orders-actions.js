import {
    ADD_ORDER
} from '../constants/action-constants.js';

export const addOrderAction = (cartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        payload: {
            cartItems,
            totalAmount,
        },
    }
}



