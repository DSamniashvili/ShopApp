import {
    ADD_ORDER,
    EMPTY_ORDERS,
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


export const emptyOrdersAction = () => {
    return {
        type: EMPTY_ORDERS,
        payload: {},
    }
}




