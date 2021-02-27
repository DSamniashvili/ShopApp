import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/action-constants';
import CartItem from '../models/cart-model';

const initialState = {
    items: {},
    totalAmount: 0,
}

const cart = function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action.payload;
            const { id, title, price } = product;

            let updatedOrNewItem;
            // already in the cart

            if (state.items[id]) {
                updatedOrNewItem = new CartItem(
                    state.items[id].qty + 1,
                    price,
                    title,
                    state.items[id].sum + price
                );

            } else {
                updatedOrNewItem = new CartItem(1, price, title, price);
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: updatedOrNewItem
                },
                totalAmount: state.totalAmount + price,
            }

        case REMOVE_FROM_CART:
            const { productId } = action.payload;
            const selectedCartItem = state.items[productId];

            let newStateItems;

            if (selectedCartItem.qty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.qty - 1,
                    selectedCartItem.price,
                    selectedCartItem.title,
                    selectedCartItem.sum - selectedCartItem.price
                )
                newStateItems = {
                    ...state.items,
                    [productId]: updatedCartItem,
                }
            } else {
                newStateItems = { ...state.items };
                delete newStateItems[productId];
            }

            return {
                ...state,
                items: newStateItems,
                totalAmount: state.totalAmount - selectedCartItem.price
            }
        // return state;

        default:
            return state;
    }


};

export default cart;