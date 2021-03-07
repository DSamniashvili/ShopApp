import { DELETE_PRODUCT } from '../constants/action-constants';

import PRODUCTS from '../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    myProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
}

const products = function (state = initialState, action) {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(product => product.id !== action.payload.itemId),
                myProducts: state.myProducts.filter(product => product.id !== action.payload.itemId),
            }
    }
    return state;

};

export default products;