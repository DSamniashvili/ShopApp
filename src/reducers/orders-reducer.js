import { ADD_ORDER, EMPTY_ORDERS } from '../constants/action-constants';
import CartItem from '../models/cart-model';
import Order from '../models/order-model';

const initialState = {
    orders: [],
}

const orders = function (state = initialState, action) {
    switch (action.type) {

        case ADD_ORDER:
            const { cartItems, totalAmount } = action.payload;

            const newOrder = new Order(new Date().toString(), cartItems, totalAmount, new Date())
            return {
                ...state,
                orders: state.orders.concat(newOrder),

            }
        case EMPTY_ORDERS:
            return initialState;

        default:
            return state;
    }
};

export default orders;