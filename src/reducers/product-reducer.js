import { } from '../constants/action-constants';

import PRODUCTS from '../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    myProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
}

const products = function (state = initialState, action) {
    return state;

};

export default products;