import {
    ADD_ORDER,
    EMPTY_ORDERS,
    DELETE_ORDER,
    SET_ORDERS,
} from '../constants/action-constants.js';
import Order from '../models/order-model.js';

export const addOrderAction = (cartItems, totalAmount) => {
    return async dispatch => {
        const date = new Date();

        const response = await fetch('https://auth-albums-dcc75-default-rtdb.firebaseio.com/orders/u1.json', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                cartItems,
                totalAmount,
                date: date.toISOString()
            })
        });

        if (!response.ok) {
            throw new Error('Something went wrong.');
        }

        const responseData = await response.json();
        const id = responseData.name;

        dispatch({
            type: ADD_ORDER,
            payload: {
                id,
                cartItems,
                totalAmount,
                date,
            },
        })
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

export const fetchOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://auth-albums-dcc75-default-rtdb.firebaseio.com/orders/u1.json');

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseData = await response.json();
            const loadedOrders = [];

            for (key in responseData) {
                loadedOrders.push(
                    new Order(
                        key,
                        responseData[key].items,
                        responseData[key].totalAmount,
                        new Date(responseData[key].date),
                    ))
            }

            dispatch({
                type: SET_ORDERS,
                payload: {
                    loadedOrders,
                }
            })

        } catch (error) {
            throw error;
        }
    }
}




