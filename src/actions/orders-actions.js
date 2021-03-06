import {
    ADD_ORDER,
    EMPTY_ORDERS,
    DELETE_ORDER,
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


export const handleEDeleteOrder = (itemId) => {
    return {
        type: DELETE_ORDER,
        payload: {
            itemId,
        },
    }
}




